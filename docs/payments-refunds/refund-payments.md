---
sidebar_position: 3
---

# Refund Payments

Refunds API lets developers refund payments. Refunds use your available MobilePay balance. If your available balance doesn't cover the amount of the refund, it will fail. You can only refund payments with the status CAPTURED and within 30 days of the original payment date.

Common refund scenarios include:

- Refund all or a portion of a payment.
- Multiple partial refunds of payment.

## Refund a payment

```bash title="Refund a Payment"
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
    "description": ""
  }'
```

When MobilePay receives the request, it begins the refund process. The response and its status code will indicate if a refund was successful. The following is an example response:

```json

```

## Retrieve refund information

After you refund a payment there might be a need to get refund information.

```bash title="Get Payment Refund"
curl https://api.mobilepay.dk/v1/refunds/{refundId} \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

Or to see all refunds.

```bash title="List Refunds"
curl https://api.mobilepay.dk/v1/refunds \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```
