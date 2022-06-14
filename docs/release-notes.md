---
sidebar_position: 10
---

# Release notes

### 2022-04-28
New [Refunds API](/docs/payments-refunds/error-codes#refunds) error code introduced. Code "amount_exceeds_available_funds" is returned when payment point does not have enough available funds to refund the payment.

### 2022-04-19
Failed webhook notifications are now retried with an exponential backoff. After all retries are exchausted the notification is never sent again. This applies to both new and previously created webhooks. More information can be found here [Webhooks API](/docs/webhooks#requirements-and-limitations).

### 2022-04-12
Webhooks can now be associated with a specific payment point. This is possible when both creating new ones and updating old ones. More information in [Webhooks API](/docs/webhooks#webhooks-for-specific-payment-points) and [API reference for Webhooks](https://developer.mobilepay.dk/product/).