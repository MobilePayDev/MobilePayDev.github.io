---
sidebar_position: 6
---

# One-off Payments

There are 2 flows a customer can pay for a product or a service with One-Off payments.
You are able to:

* [Flow 1](#flow-1--one-off-payment-with-a-new-agreement): Create a new Agreement with an initial One-Off Payment.
* [Flow 2](#flow-2---one-off-with-auto-reserve): Merchants can send a One-Off payment, which MobilePay will attempt to automatically reserve, without the user’s confirmation

Note: One-off payments are charged when the customer manually swipes accept or `auto_reserve` field was set to **true** when a one-off payment was requested.  

**One-off Payment** will expire in 1 day (by default) if it is not accepted or rejected by the user during that time or automatic reservation failed and user didn't take any action afterward. The Merchant (or the integrator) will receive a callback when the One-Off Payment is expired.
Custom expiration times ranging from 1 minute to 18 weeks can be specified by providing `expiration_timeout_minutes` field.
Note: as an integrator, it is your responsibility to align with the Merchant on needs for the fields, since the default expiration of 1 day does not suit all Merchant use cases.

Payment reservation appears on the user's Activities List in the 'Pending' section in the MobilePay app. When the purchase is completed, the transaction is moved to the 'Approved' section in the MobilePay app.

One-off payment does not affect the frequency and grace period. So if you create an agreement with a one-off payment, you can request the first subscription payment whenever you want. You can also request a one-off payment on an existing agreement in between two subscription payments, and it will not be affected by the frequency.

## Flow 1- One-off Payment With a New Agreement

* Use this when the customer does not have an agreement already, and you need the customer to create an agreement and simultaneously pay for the service/product. This allows for products to be bundled with agreements as one transaction (for example a phone).  
* When you create an agreement with a One-Off payment, and the user accepts the agreement, the payment will be created and reserved.
* Capture and Reserve is handled by the Merchant. Capture is done even if the user is blocked after reservation. When the one-off payment is processed, the payment will show up in the users's activity list in the MobilePay app.

Add a `one_off_payment` property to the `POST /api/providers/{providerId}/agreements` request payload if you want the agreement activated only when the user is successfully charged an initial subscription amount.

```json
{
  "external_id": "AGGR00068",
  "amount": "10",
  "currency": "DKK",
  "description": "Monthly subscription",
  "frequency": 12,
  "links": [
    {
      "rel": "user-redirect",
      "href": "https://example.com/1b08e244-4aea-4988-99d6-1bd22c6a5b2c"
    },
    {
      "rel": "success-callback",
      "href": "https://example.com/1b08e244-4aea-4988-99d6-1bd22c6a5b2c"
    },
    {
      "rel": "cancel-callback",
      "href": "https://example.com/1b08e244-4aea-4988-99d6-1bd22c6a5b2c"
    }
  ],
  "country_code": "DK",
  "plan": "Basic",
  "expiration_timeout_minutes": 5,
  "mobile_phone_number": "4511100118",
  "one_off_payment":
    {
      "amount": "80",
      "external_id": "OOP00348",
      "description": "Down payment for our services",
      "expiration_timeout_minutes": "1440"
    }
}
```

**Request parameters**

|Parameter                        |Type        |Required  |Description                                                      |Valid values|
|:--------------------------------|:-----------|:---------|:----------------------------------------------------------------|:-----------|
|**one_off_payment**              |object      |          |*__One-Off Payment__ details.*||
|**one_off_payment.amount**       |number(0.00)|required  |*__One-Off Payment__ amount, which will be displayed for the user in the MobilePay app.*|> 0.00, decimals separated with a dot.|
|**one_off_payment.description**  |string(60)  |required  |*Additional information provided by the merchant to the user, that will be displayed on the __One-off Payment__ screen. Description is a short description of what the client is paying for.*||
|**one_off_payment.external_id**  |string(64)  |required  |*__One-Off Payment__ identifier on the merchant's side. This will be included in the request body of the payment callback. The external_id is visible on the __One-off Payment__ screen.*||
|**one_off_payment.expiration_timeout_minutes**|int|optional|*__One-Off Payment__ expiration timeout in minutes.*|Min: 1, max: 181440 (18 weeks), default: 1440 (24 hours)|

:::note
The recommendation for "external_id" is to use up to 30 symbols. For instant transfers "external_id" is used as the payment reference and will be truncated down to 30 symbols if it contains more. Truncated payment reference will be visible in the bank statement.
:::

In this case, the response of `POST /api/providers/{providerId}/agreements` will contain an additional `one_off_payment_id` value - id of the newly requested **One-Off Payment**.

```json
{
  "id": "1b08e244-4aea-4988-99d6-1bd22c6a5b2c",
  "one_off_payment_id": "2a5dd31f-32c1-4517-925f-9c60ba19f8ca",
  "links": [
    {
      "rel": "mobile-pay",
      "href": "https://<mobile-pay-landing-page>/?flow=agreement&id=1b08e244-4aea-4988-99d6-1bd22c6a5b2c&redirectUrl=https%3a%2f%2fwww.example.com%2fredirect&countryCode=DK&mobile=4511100118"
    }
  ]
}
```



## Flow 2 - One-off with Auto reserve

* The one-off payment without swipe is sent directly to the MobilePay app. There is no MobilePay landing page. If the payment is successful, then a push message is shown that the One-off without swipe/confirmation was successful.
* One-Off without swipe is valid for One-Offs without a new agreement.

When using one-off without a swipe, the sliding part is omitted. There might still be issues with the card, nemID, and the user will get a push message about the failed payment. But until then, it is  a reserved payment. Therefore, there is a possibility of a time gap.  

* Merchants can send one-off payment, which MobilePay will attempt to automatically reserve, without the user’s confirmation.
* **Value**: The customer does not need to swipe and the payment experience is seamless

Merchants who want to use  `auto_reserve` field  feature, must apply for this in regards to the onboarding of Subscriptions. Merchants cannot use this feature without being pre-approved to do so.

**Request parameters**

|Parameter                     |Type      |Required  |Description                                                      |Valid values|
|:-----------------------------|:---------|:---------|:----------------------------------------------------------------|:-----------|
|**amount**       |number(0.00)|required  |*__One-off Payment__ amount, which will be displayed for the user in the MobilePay app.*|> 0.00, decimals separated with a dot.|
|**description**  |string(60)  |required  |*Additional information provided by the merchant to the user, that will be displayed on the __One-off Payment__ screen.*||
|**external_id**  |string(64) |required   |*__One-off Payment__ identifier on the merchant's side. This will be included in the request body of the payment callback. The external_id is visible on the __One-off Payment__ screen.*||
|**links**        |string      |required  |*Link relation of the __One-off Payment__ creation sequence. Must contain 1 value for user redirect.*||
|**links[].rel**  |string      |required  |*Link relation type.*|user-redirect|
|**links[].href** |string      |required  |*Link relation hyperlink reference.*|merchant url|
|**auto_reserve** |boolean     |optional  |*When this field is set to __true__, we will attempt to automatically reserve the payment without the user's interaction. If you do not wish payment to be automatically reserved, you can omit this field or set it to __false__.*|true/false|
|**expiration_timeout_minutes**|int|optional|*__One-Off Payment__ expiration timeout in minutes.*|Min: 1, max: 181440 (18 weeks), default: 1440 (24 hours)|

```json
{
  "amount": "80",
  "external_id": "OOP00348",
  "description": "Pay now for additional goods",
  "links": [
    {
      "rel": "user-redirect",
      "href": "https://example.com/1b08e244-4aea-4988-99d6-1bd22c6a5b2c"
    }
  ],
  "auto_reserve": true,
  "expiration_timeout_minutes": "1440"
}
```

:::note
The recommendation for "external_id" is to use up to 30 symbols. For instant transfers "external_id" is used as the payment reference and will be truncated down to 30 symbols if it contains more. Truncated payment reference will be visible in the bank statement.
:::

## One-off payment screens

[![OneOff flows](/img/subs-One-off-flows.svg)](/img/subs-One-off-flows.svg)

When `auto_reserve` field is set to **true**:

[![OneOff without swipe](/img/subs-One-off-flows-without-swipe.svg)](/img/subs-One-off-flows-without-swipe.svg)

* Failed `auto_reserve` OneOff: If the payment fails, and if push messages are also turned off, then a one-off confirmation screen after logging in (until the session expires) is displayed for the User. The user can retry the payment from the  Confirmation screen.

* Successful `auto_reserve` OneOff: If the payment is successful, then the user is presented with a reservation receipt.

## Dual Device

Initiating a purchase of a product/service from a desktop (the other device) should end-up as

* one-off Payment Landing Page on Desktop and
* a push directly to MobilePay (push notification)

## Callbacks

Once the one-off payment status changes from *Requested* to *Reserved*, *Rejected* or *Expired*, a callback will be done to the callback address, which is configurable via `PATCH /api/providers/{providerId}` with path value `/payment_status_callback_url`. The same way as with [callbacks](/docs/subscriptions/subscriptions-payments#callbacks) for regular payment requests.

|New Status|Condition|When to expect|Callback *status*  | Callback *status_text* | Callback *status_code* |
|----------|---------|--------------|-------------------|------------------------|------------------------|
|Reserved  |_The one-off payment was accepted by the user or was automatically reserved with `auto_reserve` flag and money is reserved for you on his card. You can now capture the money._| Right after payment was successfully reserved. |Reserved| Payment successfully reserved. | 0 |
|Rejected  |_User rejected one-off payment request in MobilePay._ | Right after user rejects one-off payment. |Rejected  |Rejected by user.| 50001 |
|Expired   |_1. One-off payment was neither accepted, nor rejected by user. 2. User didn't any action after the automatic reservation failed._| 1 day after you requested one-off payment |Expired|Expired by the system.| 50008 |
|Requested   |_The automatic reservation of a one-off payment failed. User action is needed._| Right after the automatic reservation has failed |Requested|Automatic reservation failed. User action is needed.| 50013 |

### Callbacks about one-off and Agreement

You will get callbacks about the payment to your callback address. Moreover, you will get callbacks about the agreement to either success or failure URL, that you have set upon agreement creation. However, unless a one-off payment automatic reservation fails, you will not get callbacks for either, before their status changes. So you should expect a callback when the agreement is *accepted* / *rejected* / *expired* and a callback when the OneOff is either `accepted`/`rejected`/`expired`. If the one-off payment's automatic reservation fails, then the status of the one-off payment will not change, but a callback about the event will be sent.

The response for agreement creation, on the other hand, consists of both agreement and OneOff.

```json title="One-off callback body example"
[
    {
        "agreement_id": "8380f9e4-10a6-4f6d-b2f4-cdb7f80a4d7f",
        "payment_id": "022a08d8-73c6-4393-aeda-d0c8ae5172a5",
        "amount": "19.45",
        "currency": "DKK",
        "payment_date": "2019-09-18",
        "status": "Reserved",
        "status_text": "Payment successfully reserved.",
        "status_code": 0,
        "external_id": "3280100",
        "payment_type": "OneOff"
    }
]
```

## User notifications

|Description|When|Text| Buttons | Depends on these Notification settings  |Type|
|----------|---------|---|-------------------|------------------------|----------------------|
|**Dual Device only:** One-off payment on existing agreement   | When a customer is purchasing on the existing agreement.  |Godkend betaling på *Amount* *Currency* til *Merchant*  | **Text**: Vis **Navigation**: Payment Overview |OS, App|OneOff|
|One-off without swipe   | When One-off without swipe/confirmation was successful  | Betalt *Amount* *Currency* til *Merchant Name*  |**Text**: Vis **Navigation**:  Reservation receipt or Success receipt |OS, App| One-off
|One-off without swipe/confirmation was **NOT** successful  | When One-off without swipe/confirmation was NOT successful  | Vi kunne ikke gennemføre din betaling til *Merchant*  |**Text**: Vis **Navigation**:  One-off confirmation screen |OS, App| One-off

If the user has turned off Push Notifications, then the only way the user can see the payment is by opening the activity list or agreement payments.

## One-off payment state diagram

![OneOff state diagram](/img/subs-One-Off-state-diagram1.png)

## Capture Reserved One-Off Payment

When you receive a callback about a successfully reserved payment, now it's time to capture your money. You can do that by making a call to `POST /api/providers/{providerId}/agreements/{agreementId}/oneoffpayments/{paymentId}/capture` endpoint. If the HTTP response is `204 - No Content`, it means that the money was transferred to your account.

You can capture a payment only once for an order, and the payment can't be more than the order's authorized amount. This means that your customers can't add to an existing order. If they want to add more products after an order has been placed, then they need to make a new order.

## Cancel One-Off Payment Request/Reservation

In case you weren't able to deliver goods or any other problem occurs, you can always cancel a one-off payment until it's not captured or expired. You can do that by making a call to `DELETE /api/providers/{providerId}/agreements/{agreementId}/oneoffpayments/{paymentId}` endpoint. If the HTTP response is '204 - No Content', it means that a one-off payment request/reservation was canceled.

The end-user cannot cancel the agreement with a pending payment reservation, only the merchant can do so.

By canceling the agreement with a pending payment reservation, then the merchant also automatically cancels the reservation

## Expired One-off

It is **mandatory** for the merchant to Capture or Cancel a one-off payment if it was reserved on a customer account.

We encourage you to capture as soon as a service is rendered or an order is shipped. It results in a bad end-user experience if the amount is reserved on the customer’s account for too long, as the customer can see the amount on their bank statement.

Uncaptured one-off payments expire after 6 days 23 hours 45 minutes.
