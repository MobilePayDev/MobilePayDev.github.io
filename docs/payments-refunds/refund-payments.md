---
sidebar_position: 3
---

# Refund Payments

Refunds API lets developers refund payments. Refunds use your available MobilePay balance. If your available balance doesn't cover the amount of the refund, it will fail. You can only refund payments with the state `captured` and within 30 days of the original payment date.

Common refund scenarios include:

- Refund all or a portion of payment.
- Multiple partial refunds of payment.

## Refund Payment

```bash title="Refund payment"
curl https://api.mobilepay.dk/v1/refunds \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "idempotencyKey": "{UUID}",
    "paymentId": "{PAYMENT_ID}",
    "amount": 10,
    "reference": "{YOUR_UNIQUE_KEY}",
    "description": "Lorem ipsum"
  }'
```

When MobilePay receives the request, it begins the refund process. The response and its status code will indicate if a refund was successful. The following is an example response:

```json
{
  "refundId": "298930103386112",
  "paymentId": "606413852246016",
  "amount": 87.78073809,
  "description": "Cebefmu jolara hulaj somubiog wad sogge zuravu mimwazen sud vallaz puive dirafiw ru.",
  "reference": "gahuhvif",
  "createdOn": "2017-08-09T21:59:48.536Z",
  "remainingAmount": 12.14728397
}
```

`remainingAmount` will be included in successful refund response once, for reasons when you might need to do multiple refunds.

## Retrieve Refund Information

After you refund a payment there might be a need to get refund information.

```bash title="Retrieve refund"
curl https://api.mobilepay.dk/v1/refunds/{refundid} \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json'
```

Or to see all refunds.

```bash title="List refunds"
curl https://api.mobilepay.dk/v1/refunds \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json'
```
