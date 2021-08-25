---
sidebar_position: 2
---

# Create And Manage Payments
Payments API lets developers to create and manage payments. It is important to remember, that payment cannot be completed without user interaction, meaning that user has to **swipe and approve payments** inside MobilePay app.

![Setup payment points](/img/mobilepay-swipe.gif)

## Create Payment
The first step in your journey of collecting payments would be to initiate a new payment. You can do that using the following request.

```bash title="Create payment"
curl https://api.mobilepay.dk/v1/payments \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 10,
    "idempotencyKey": "{UUID}",
    "paymentPointId": "{PAYMENT_POINT_ID}",
    "redirectUri": "{URI_TO_YOUR_APP}"
    "reference": "{YOUR_UNIQUE_KEY}",
    "description": "Lorem ipsum"
  }'
```

```json title="Respone JSON"
{
  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
  "mobilePayAppRedirectUri": "mobilepay://merchant_payments?payment_id=186d2b31-ff25-4414-9fd1-bfe9807fa8b7"
}
```

:::tip
`mobilePayAppRedirectUri` should be used to redirect user to MobilePay app.
:::

## Get Single Payment Details
Whenever there is a need you can retrieve details of a single payment and e.g. check the current state.

```bash title="Retrieve payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID} \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}'
```

```json title="Respone JSON"
{
  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
  "amount": 12.5,
  "description": "Lorem ipsum",
  "paymentPointId": "7347ba06-95c5-4181-82e5-7c7a23609a0e",
  "reference": "DFX101103518",
  "redirectUri": "mobilepay://merchant_payments?payment_id=186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
  "state": "initiated",
  "initiatedOn": "2021-08-20T05:18:07Z",
  "lastUpdatedOn": "2021-08-21T08:45:32Z",
  "merchantId": "655ad36f-70b0-4add-a123-b943daca50e8",
  "isoCurrencyCode": "DKK",
  "paymentPointName": "Nullam tincidunt"
}
```

Property `state` can have these values:
- **initiated** - initial state.
- **reserved** - MobilePay user approved payment, ready to be captured.
- **captured** - final state, funds will be transferred during next settlement.
- **cancelledByMerchant** - payment was cancelled by you.
- **cancelledBySystem** - no user interactions with payment were made in 5-10 minutes after creation, so our automated job cancelled it.
- **cancelledByUser** - user cancelled payment inside MobilePay app.


## Get All Payments
Theres also a possibility to list all your payments in pages. Multiple searching criteria can be used as query parameters.

```bash title="List payments"
curl https://api.mobilepay.dk/v1/payments \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}'
```

## Capture Payment
After you receive a notification that payment was reserved or you retrieve a payment and it has a state `reserved`, you must capture payment in order to end the flow and receive the money with nightly transfer.

At this point you have 2 options:
- You can capture the whole reserved amount.
- You can do a partial capture and only capture the amount you need. Remaining amount will be returned to the user.

```bash title="Capture payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/capture \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 10
  }'
```

## Cancel Payment
If you changed your mind and want to cancel payment , you can do that using the following request.

```bash title="Cancel payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/cancel \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
```

Keep in mind, that payment can be cancelled in all states except `captured`. If you've already captured payment, refunding is your only option.
If you cancel a reserved payment, reserved amount will be returned to the user.

## Cancel Payment By Idempotency Key
You can also cancel payment by sending us the same idempotency key that you've used in the create payment request.
Use this endpoint when the outcome of create payment request is unknown (e.g. network/server error occured and you didn't get a response).
After successful cancellation, you can create a new payment again.

```bash title="Capture payment"
curl https://api.mobilepay.dk/v1/payments/cancel \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "idempotencyKey": {UUID}
  }'
```