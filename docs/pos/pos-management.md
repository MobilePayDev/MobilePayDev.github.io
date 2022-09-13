---
sidebar_position: 5
---

# Point-of-Sale Management

The Point-of-Sale (PoS) represents the contact point between a customer wanting to pay with MobilePay and the merchant.
To initiate a MobilePay payment it is necessary to first create a PoS.

## Onboarding

Each PoS belongs to a *Store* which belongs to a *Brand*. A brand can be thought of as a combination of a name and a logo. An example of a brand could be 7-Eleven in Denmark or K-Market in Finland. Each brand consists of one or more stores. A store is the representation of a merchant's shop. It contains a `storeId` as well as the name and the address of the shop. When a MobilePay customer checks in on a PoS they will see the brand logo and name as well as the shop name in the app, which helps the customer confirm that they have in fact checked in where they intended.
When an integrator needs to onboard a PoS they need the `storeId` to create all the PoSes on that store. The `storeId` will therefore have to be persisted in an application configuration file for subsequent calls to the V10 API. There are generally two ways to acquire the `storeId`. The recommended option depends on the merchant being a migrated merchant or not. The two different approaches are described below.

### No existing solution

When an integrator is building a new integration for a merchant they need to know the store to which the PoS should be created. The goal is to get a list of all the stores that belongs to a merchant and then use the `storeId` from the appropriate store to create the PoS. First the integrator needs to call `GET /v10/stores` without any query parameters and the endpoint will return all the `storeId`s based on the Merchant VAT either provided in the `x-mobilepay-merchant-vat-number` header or provided in the access token (see [Authentication](/docs/pos/authentication#obtaining-an-access-token)). Then the integrator will loop through the list and for each `storeId` call `GET /v10/stores/{storeid}` that will return the store information for that specific store. In the end the integrator have a list of all the stores the merchant has and then the integrator knows which ``storeId`` for each store to use when creating a PoS. Below diagram illustrates a flow to get all merchant stores.

[![Get Stores by VAT](/img/pos-GetStoresByVat.PNG)](/img/pos-GetStoresByVat.PNG)

### Existing solution

A brand is identified by a `merchantBrandId`. A `merchantLocationId` together with a `merchantBrandId` identifies a store within a brand.
If the merchant already has a MobilePay PoS solution with integration to either API V06, V07 or V08 then an integrator can use the already known `merchantBrandId` and `merchantLocationId` to get the `StoreId`, If the `merchantBrandId` and ``merchantLocationId`` is not known the process from the above paragraph will be the most efficient. To get the `StoreId` the integrator will have to call `GET /v10/stores` with the two ids, and in return they will receive the `storeId`. Below diagram illustrates a flow for getting the ``storeId`` using `GET /v10/stores`.

[![Get store](/img/pos-get_store.png)](/img/pos-get_store.png)

## PoS Creation

A PoS is created using the `POST /v10/pointofsales` endpoint. A PoS is identified in the PoS V10 API by a `posId` that is assigned by MobilePay upon creation of the PoS. Clients can provide their own internal identifier as a `merchantPosId` upon creation and use the `GET /v10/pointofsales` endpoint to lookup a `posId` based on a `merchantPosId`. The `merchantPosId` field is required, so if no internal identifier is applicable, the client should generate and supply a random string (eg. a fresh GUID) instead.

### Beacons

The first thing to consider when creating a PoS is what beacon(s) will be used to connect MobilePay users to the given PoS.
This can range from an unmanned vending machine that has no payment hardware at all and hence only shows a QR code on a screen, to a full fledged super market ECR with a 2-way bluetooth capable terminal that also can show a QR code. To create a PoS, the client needs to provide a list of possible ways to detect the PoS. The more accurate the list is, the better MobilePay will be able to detect errors (if bluetooth is provided as a beacon type but we detect that no user ever checks in via bluetooth something is likely wrong). It is recommended to keep the list of supported beacon types in an application configuration and then edit the list in case the setup changes.

Each beacon, whether through a MobilePay QR code or a bluetooth/NFC signal, encodes a `beaconId` that can be read by the MobilePay app. It is the `beaconId` that is used to connect a MobilePay user to a specific PoS. `beaconId`s are globally unique across all merchants in MobilePay PoS and each `beaconId` can refer to at most one active PoS at any given time.

Depending on the client setup, there are different use cases for handling `beaconId`s in API V10

#### Client that only supports dynamic QR codes

In case the client only allows QR beacons (no physical device) and can create a QR code dynamically (i.e generate a QR code and show it on a screen in opposition to printing a physical QR code), then the client can choose to let MobilePay create a GUID to use as `beaconId`. The client then omits to provide a `beaconId` on PoS creation and afterwards queries the PoS to get the `beaconId`. The client can then store the `beaconId` in memory for QR code generation. Everytime the client reboots the client then has to query the PoS and grab the `beaconId`. This way the client is not required to store a `beaconId` in a configuration file since they can rely on querying it dynamically.

#### Client that only supports static QR codes

In case the client only allows QR beacons but is not able to generate a QR code dynamically, the client needs the ````beaconId```` for the PoS creation. The following options are available:

1. The client can generate the `beaconId` and provide it on PoS creation
2. An arbitrary `beaconId` can be produced outside the client and be inputted to the client for instance using readers, scanners or inputted using a keyboard. MobilePay can generate the `beaconId` automatically as part of the production of stickers, if stickers are needed as the “acceptance device”.

If stickers are needed as the acceptance device, we suggest that you use MobilePay to help deliver QR-code stickers to your merchants using option 2.

:::note
The easiest way of handling stickers is if the client is set up to support activation and deactivation of QR codes directly from the merchant location.
You can order the stickers directly from MobilePay’s print supplier’s sticker webshop, and the Beacon IDs and QR codes will automatically be generated. The BeaconId will be printed on the sticker, so that it can be added by the merchant, or the merchant can report to you, which Beacon IDs the merchant uses.
[Sticker Webshop](https://mp.bordingcentral.dk)
:::

The `beaconId` should then be stored locally in a configuration file so that it can be used if the PoS needs to be updated (i.e. deleted and re-created. See [PoS Update and Deletion](/docs/pos/pos-management#pos-updating-and-deletion)). To avoid clashes, the client must use a GUID as the `beaconId`.

#### Client that supports physical devices (terminals, MobilePay white boxes)

In cases where the client uses a physical device then that device will have a MobilePay `beaconId` associated with it. On PoS creation this `beaconId` has to be provided. Some devices allows a client to read the `beaconId` from it. If that is the case we recommend to read the `beaconId` when the client reboots and query the PoS to see if the `beaconId`s match. If not delete the PoS and re-create it with the new `beaconId`. This will make it possible to replace the device if its broken, and only have to reboot the system to propagate the changes.
If reading the `beaconId` from the device is not possible, we recommend to store the `beaconId` locally in a configuration file so that it persists through reboots.

### Preventing checkin before payment

Normally, a user is allowed to check in on a point of sale before a payment is created. Then, once the payment is created, the payment will pop up on the user's phone for them to pay. However, in some cases, this is not what you want.

For example, in a self-service solution, a user could check in on a point of sale, walk away, and then they'll get paired to the next user's payment if the next user does not take over the check-in in time.

When creating a PoS, the client can set the `requirePaymentBeforeCheckin` property to `true` (by default it is `false`), and then users are not allowed to check in to a point of sale before a payment is created on the point of sale. This ensures that no users are checked in when the payment is created, so you can ensure the correct user gets paired.

### Callback

If the client system cannot detect when a MobilePay user wants to pay and therefore needs to use the [Notification service](/docs/pos/detecting-mobilepay#notification-service), the client should set the callback parameter accordingly when calling `POST /v10/pointofsales`.
It is recommended to store the callback alias in the config file of the application.

### Naming

The last thing to keep in mind when creating a PoS is to consider the name. When a MobilePay user checks in on the PoS they will in the app see, in sequence: The name of the brand, the name of the store and the name of the PoS. We recommend naming the PoS so that the MobilePay user can verify that they in fact have checked in the right place. So in a supermarket scenario a good name for the PoS would be "Check-out 1" for the first check-out counter in that supermarket.

## PoS Updating and Deletion

A PoS can be deleted using the `DELETE /v10/pointofsales/{posId}` endpoint.

We recommend only deleting a PoS if it is either not going to be used anymore, or you need to update it to reflect changes like a new callback alias, new name, new `beaconId` etc.

When a PoS is deleted it is no longer possible to issue payments. However it will still be possible to capture or cancel payments that are in the reserved state. It is best practice to delay the deletion of a PoS until all payments have either been cancelled or captured.

## Keeping in sync with MobilePay

### When PoS reboots

When the client reboots it is good practice to query the PoS with `GET /v10/pointofsales` with the `merchantPosId` and persist the `posId` in memory to use for initiating payments. If no PoS is returned, the client will have to re-create it. Here is the flow described:
[![PoS onboarding](/img/pos-PoS_Onboarding.png)](/img/pos-PoS_Onboarding.png)

We recommend the client to store the following in a configuration file to be able to create the PoS when needed:

* `StoreId`
* `MerchantPosId`
* Name of PoS
* `BeaconId` (unless it can be read from the device itself. See [Beacons](/docs/pos/pos-management#beacons) )
* Callback (If the client is dependent on the notification service. See [Callback](/docs/pos/pos-management#callback))
* Supported beacon types

## Master Data

A PoS belongs to a store which in turn belongs to a merchant and associated with a brand. A PoS is identified by a `posId`, but it is also possible to refer to a PoS by its `beaconId` or `merchantPosId`. There can be at most one active PoS with a given `beaconId` at any given time. There can be at most one active PoS with a given `merchantPosId` at any given time, for a given integrator and merchant.

A store is identified by a `storeId`, but it is also possible to refer to a store by the combination of `merchantBrandId` and `merchantLocationId`. Two stores with the same `merchantLocationId` but different `merchantBrandId`s are not related in any way. The `merchantBrandId`, `merchantLocationId` and `storeId` are supplied by MobilePay when the Merchant/Store is onboarded.
