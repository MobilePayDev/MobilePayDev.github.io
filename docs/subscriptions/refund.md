---
sidebar_position: 7
---

# Refund

Merchants can easily refund the customer with MobilePay Subscriptions. This functionality is used to refund previously captured one-off payments or subscriptions payments. A refund transaction can be made up to 90 days after payment execution. Refunds are not restricted by agreement status. Refunds can be made on a cancelled agreement. As long as the payment is successful and no older than 90 days, then it should work.

A refund can be executed if the Merchant's payment balance contains enough money to cover the refund. If the balance doesn’t cover the amount of the refund, the refund will fail. You can issue more than one refund against a payment_id, but you can’t refund a total greater than the original payment_id amount.

Quick handling of refund proves vital to ensure customer loyalty. Seen as the customer previously executed the payment via MobilePay, it makes sense that it also gets refunded via MobilePay.  The reason being that the customer can see a receipt in the MobilePay app of the refund that corresponds to the original payment. The refund receipt is easily visible for the customer in the MobilePay app. 

**Full refund** - 100% of the amount paid is returned to the payer. If the amount is not specified, the payment will be fully refunded
**Partial refund** - An amount up to the net (the amount the merchant received) will be returned to the payer. Multiple partial refunds can be made. If the amount is specified, it has to be less than or equal to the amount paid. No refund otherwise. A payment can be refunded partially several times, until the amount is 0 (zero).

:::note
MP Subscriptions recurring or one-off payment refund CANNOT be made without original payment. Payment ID must be the same for both actions.
:::

:::note
Refunds CANNOT be made for **Instant** transfer payments. Only **Daily** transfer payment can be refunded.
:::

:::note
Refunds are sent to users receiving bank account, not the card/account the payment was done from.
:::

## Request a Refund
Use the `POST /api/providers/{providerId}/agreements/{agreementId}/payments/{paymentId}/refunds` endpoint to request a **Refund**.

```json
{
    "amount": 10.99,
    "status_callback_url" : "https://example.com",
    "external_id": "ABC123"
}
```

### Request parameters

|Parameter             |Type        |Required  |Description                                                      |Valid values|
|----------------------|------------|----------|-----------------------------------------------------------------|------------|
|**amount**            |number(0.10)| optional |*The requested amount to be returned.*|>= 0.10, decimals separated with a dot. If not specified, payment will be fully refunded.|
|**status_callback_url**  |string| required |*Link relation hyperlink reference.*|Merchant's url|
|**external_id**  |string| optional |*Refund's identifier on the merchant’s side. This will be included in the request body of the refund callback.*||

The `POST /api/providers/{providerId}/agreements/{agreementId}/payments/{paymentId}/refunds` service returns HTTP 202 and the response contains single value: a unique *id* of the newly created **Refund**.

```json title="HTTP 202 Response body example"
{
    "id": "263cfe92-9f8e-4829-8b96-14a5e53c9041",
    "amount": 10.99,
    "status_callback_url": "http://example.com",
    "external_id": "ABC123"
}
```

## Callbacks

When the **Refund's** status changes from *Requested* we will do a callback to the callback address provided in request parameter `status_callback_url`.

```json title="Refund callback body example"
{
    "refund_id" : "4bb9b33a-f34a-42e7-9143-d6eabd9aae1d",
    "agreement_id" : "1b08e244-4aea-4988-99d6-1bd22c6a5b2c",
    "payment_id" : "c710b883-6ed6-4506-9599-490ead89525a",
    "amount" : "10.99",
    "currency" : "DKK",
    "status" : "Issued",
    "status_text" : null,
    "status_code" : 0,
    "external_id": "ABC123"
}
```

|New Status|Condition|When to expect|Callback *status*  | Callback *status_text* | Callback *status_code* |
|----------|---------|--------------|-------------------|------------------------|------------------------|
|Issued    |_The **Refund** was successfully issued_| Right after the refund request was received |Issued  | |  |
|Declined  |_If **Payment** is fully refunded_           | Right after the refund was requested |Declined    |Payment is fully refunded. | 60001 |
|Declined  |_If the total sum of previous **Refunds** exceed the original payment amount_           | Right after the refund was requested |Declined  |The total sum of previous **Refunds** cannot exceed the original payment amount.| 60002 |
|Declined  |_When **Refund** was declined by system_          | Right after the refund was requested |Declined  |Payment was not found.| 60003 |
|Declined  |_When **Refund** was declined by system_           | Right after the refund was requested |Declined  |Payment cannot be refunded.| 60004 |
|Declined  |_A catch-all error code when **Refund** was declined by core system. E.g.: more than 2 decimals, receiver is not active, receiver's bank declined refund, etc._           | Right after or up to 3 h after refund was requested |Declined  |Refund was declined by system.| 60005 |
|Declined  |_When **Refund** was declined by system._           | Right after the refund was requested |Declined  |Cannot refund payments that are older than 90 days.| 60006 |
|Declined  |_When **Refund** was declined by system._           | Right after the refund was requested |Declined  |Cannot refund instantly transferred payments.| 60007 |
|Declined  |_When **Refund** was declined by system._           | Right after the refund was requested |Declined  |No money in account.| 60008 |

## Refund screens within mobile application

![Refund](/img/subs-newRefund.png)
