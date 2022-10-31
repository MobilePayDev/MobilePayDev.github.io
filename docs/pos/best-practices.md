---
sidebar_position: 7
---

# Best Practices

This section is an overview over best practices when integrating to MobilePay PoS. The purpose of these best practices is to optimize the customer and merchant experience, to reduce errors and to keep the integration as simple as possible without reducing customer and merchant experience.

## Check-in before or after payment has been initiated

While the system supports customers checking in both before or after a payment has been initiated, best practice is to urge customers to check in before.
As an example: In a supermarket a customer can check in and then start bagging their groceries. When all the groceries have been scanned the cash register will initiate the payment and allow the customer to swipe.
This is an advantage over both cash and card payments, as the customer has no need to go back to the terminal/payment area again. This results in a faster transaction for all involved parties.

## Payment and loyalty payment flows

There are two main payment flows in the V10 API.
Initiating a payment followed by a capture (the [Payment Flow](/docs/pos/payment-flows/payment-flow)), and a flow where initiate payment is split into two parts: Prepare-Ready and then followed by a capture (the [Prepared Payment Flow](/docs/pos/payment-flows/prepared-payment-flow)).
The recommendation is to use the Payment Flow if there is no need for knowing the customer before setting the amount.
Using the Payment Flow will save a call to the API and in the end improve the overall time it takes to complete a payment.
Cases in which knowing the customer before setting the amount includes loyalty payments where a discount is based on the customer's loyalty ID.

## Specify planned capture delay

It is required to specify when the payment is expected to be captured. The values are either *None*, *LessThan24Hours*, and *LessThan14Days*. These are values that control how payments are handled by MobilePay Support and it is therefore beneficial that these values are set as accurate as possible.
The three values differ in the following way:

* **None**: If payments with this value are not captured **the following day** it is possible for MobilePay Support to reach out to make sure the payments are handled (either cancelled or captured) although this is not guaranteed.
* **LessThan24Hours**: If payments with this value are not captured **the following 2-3 days** it is possible for MobilePay Support to reach out to make sure the payments are handled (either cancelled or captured) although this is not guaranteed.
* **LessThan14Days**: If payments with this value are not captured MobilePay Support cannot help since the reservation will be expired and, hence, cannot be captured. Make sure this value is only used when appropriate.

## Order IDs

Order IDs are not required to be unique however this is highly recommended.
In error cases where the `paymentId` is lost it can be retrieved based on the `posId` and the `orderId` by calling the `GET /v10/payments` endpoint. If the `orderId` is unique the endpoint will return the expected `paymentId`. However, if the `orderId` is not unique the mapping is overwritten and the endpoint will return the latest `paymentId` that was associated with the specified `orderId`.

## Capture or cancellation of old payments

All payments in *Reserved* state should be captured or cancelled as soon as practically possible. If an error occurs that makes it temporarily impossible to neither cancel or capture the payment, the PoS client is responsible for persisting which payments should be captured and which should be cancelled at a later stage. Later when processing old payments in *Reserved* state it is important that only payments that should be captured are captured and the same in regards to payments that should be cancelled.
It is bad practice to poll for every outstanding payments that are in the *Reserved* state, since that could lead to payments being captured which should have been cancelled and vice versa.

## Polling

It is possible to get information on a payment using `GET /v10/payments/{paymentId}`, and it is possible to get information about an active check-in using `GET /v10/pointofsales/{posId}/checkin`.
For both of these endpoints, it is allowed to do polling at most once per second. Polling times are controlled by the backend. The response will always contain a time interval that specifies, when the endpoint should at the earliest be polled again. The recommendation is to poll as fast as allowed by the backend to ensure maximal merchant and customer experience.

## Payment restrictions

It is possible to restrict which card types can be used for a payment. This restriction is available in order to support that some countries have restrictions on which cards can be used for certain products.
The recommendation is to only set restrictions on payments where it is required to do so by the law or in case there are some business related reasons for restricting the payment. You can put restrictions when starting payments with either `POST /v10/payments/` or `POST /v10/payments/{paymentId}/ready`. See [Restrictions formatting](/docs/pos/input-and-output-formats#payment-restrictions) for how to provide restrictions.

## Merchant onboarding

When a PoS client needs to onboard a merchant to the MobilePay V10 API, the Pos client needs to know the ``storeId`` for the store they will do payments on behalf of. There are two possible ways to obtain the ``storeId`` needed.

* **Merchant VAT number**: If the merchant that needs onboarding is a new customer for the PoS Integrator, then Merchant VAT number should be used to obtain storeIds. The PoS integrator can call ``GET /v10/stores`` and the MobilePay backend will use the VAT number to return all storeIds for that merchant. To get details about each store you can then call the endpoint ``GET /v10/stores/{storeId}`` for each ``storeId``.
* **MerchantBrandId + MerchantLocationId**: If the merchant that needs onboarding is already a customer of the PoS Integrator, then ``MerchantBrandId`` and ``MerchantLocationId`` can be used to obtain storeIds. The PoS client can call ``GET /v10/stores/?merchantBrandId={merchantBrandId}&merchantLocationId={merchantLocationId}`` for each location to get a list of storeIds that only contains the ``storeId`` for that location. This way the PoS client can avoid the process of looking up specific store data to determine which ``storeId`` represents which store.

## Choosing a BeaconId

There are three principles for choosing a BeaconId.

1. If you have received a 15-digit Id from MobilePay - use that as your Id.
2. If you have an earlier GUID that you need to use because you have it printed or similar - then use that GUID.
3. Otherwise let MobilePay generate a new GUID for you everytime you create a PoS.

Following this approach will lead to fewer issues with collisions for everyone.

## Optimal flow

To ensure the best costumer experience, the payment flow from a costumers point of view, ends when the payment has reached Reserved state. At this stage the customer is allowed to leave the store.
