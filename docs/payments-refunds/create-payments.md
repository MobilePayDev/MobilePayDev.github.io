---
sidebar_position: 2
---

# Create And Manage Payments

Payments API lets developers create and manage payments. It is important to remember, that payment cannot be completed without user interaction, meaning that the user has to **swipe and approve payments** inside MobilePay app.

![User confirmation](/img/create-payment-app.gif)

## Create payment

The first step in your journey of collecting payments would be to initiate a new payment. You can do that using the following request.

```bash title="Create payment"
curl https://api.mobilepay.dk/v1/payments \
  -X POST \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 1250,
    "idempotencyKey": "{UUID}",
    "paymentPointId": "{PAYMENT_POINT_ID}",
    "redirectUri": "{URI_TO_YOUR_APP}"
    "reference": "{YOUR_UNIQUE_KEY}",
    "description": "Details on the product/service that the customer is buying"
  }'
```

```json title="Response JSON example"
{
  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
  "mobilePayAppRedirectUri": "mobilepay://merchant_payments?payment_id=186d2b31-ff25-4414-9fd1-bfe9807fa8b7"
}
```

:::tip
`mobilePayAppRedirectUri` should be used to redirect user to the MobilePay app.
:::

:::tip
Use `description` to inform your customers to a greater extent. Description will be shown on the payment confirmation screen in MobilePay so the customer has more information about the product. The description will also be shown when the MobilePay user opens their payment receipt in the activity list.
:::

:::tip
We suggest setting unique order or transaction id from your own system in the `reference` field. The `reference` field will be contained throughout the backend flow of the payment. Also in settlement reports in the MobilePay portal or from our Transaction Reporting API. End-users/customers will see the `reference` field value in the receipt of the payment, found in the MobilePay app's activity tab.
:::

## Get single payment details

Whenever there is a need you can retrieve details of a single payment and e.g. check the current state.

```bash title="Retrieve payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID} \
  -X GET \
  -H 'Authorization: Bearer {API_KEY}'
```

```json title="Response JSON example"
{
  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
  "amount": 1250,
  "description": "Lorem ipsum",
  "paymentPointId": "7347ba06-95c5-4181-82e5-7c7a23609a0e",
  "reference": "DFX101103518",
  "redirectUri": "https://yourredirecturi",
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
- **captureStarted** - special state where capture was started but is left in an unknown state. Capture has to be retried if this state is encountered.
- **captured** - final state, funds will be transferred during next settlement.
- **cancelledByMerchant** - payment was cancelled by you.
- **cancelledBySystem** - no user interactions with payment were made in 5-10 minutes after creation, so our automated job cancelled it.
- **cancelledByUser** - user cancelled payment inside MobilePay app.

## Get all payments

There's also a possibility to list all your payments in pages. Multiple searching criteria can be used as query parameters.

```bash title="List payments"
curl https://api.mobilepay.dk/v1/payments \
  -X GET \
  -H 'Authorization: Bearer {API_KEY}'
```

```json title="Response JSON example"
{
  "pageSize": 1,
  "nextPageNumber": 2,
  "payments": [
    {
      "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",
      "amount": 1250,
      "description": "Lorem ipsum",
      "paymentPointId": "7347ba06-95c5-4181-82e5-7c7a23609a0e",
      "reference": "DFX101103518",
      "redirectUri": "https://yourredirecturi",
      "state": "initiated",
      "initiatedOn": "2021-08-20T05:18:07Z",
      "lastUpdatedOn": "2021-08-21T08:45:32Z",
      "merchantId": "655ad36f-70b0-4add-a123-b943daca50e8",
      "isoCurrencyCode": "DKK",
      "paymentPointName": "Nullam tincidunt"
    }
  ]
}
```

## Capture payment

After you receive a notification that payment was reserved or you retrieve payment and it has a state `reserved`, you must capture payment in order to end the flow and receive the money with a nightly transfer.

:::note

- Partial capture availability is limited. Let us know your use case during onboarding, and we will let you know if it's available.
- Reservations are canceled after 7 days.

:::

At this point you have 2 options:

- You can capture the whole reserved amount.
- You can do a partial capture and only capture the amount you need. Remaining amount will be returned to the user.

```bash title="Capture payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/capture \
  -X POST \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "amount": 1250
  }'
```

:::danger
If you receive 5xx response while capturing the reservation then that most likely means the payment ended up in **captureStarted** state. You have to retry the capture in such case until you get either 2xx or 4xx. The capture call is idempotent.
:::

## Cancel payment

If you changed your mind and want to cancel payment , you can do that using the following request.

```bash title="Cancel payment"
curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/cancel \
  -X POST \
  -H 'Authorization: Bearer {API_KEY}' \
```

Keep in mind, that payment can be cancelled in all states except `captured`. If you've already captured payment, refunding is your only option.
If you cancel a reserved payment, reserved amount will be returned to the user.

## Cancel payment by idempotency key

You can also cancel a payment by sending us the same idempotency key that you've used in the create payment request.
Use this endpoint when the outcome of the payment creation request is unknown (e.g. network/server error occurred and you didn't get a response). It allows cancelling only those payments that are in `initiated` state. For all other scenarios, please use the [endpoint above](#cancel-payment).
After successful cancellation, you can create a new payment again.

```bash title="Capture payment"
curl https://api.mobilepay.dk/v1/payments/cancel \
  -X POST \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "idempotencyKey": {UUID}
  }'
```