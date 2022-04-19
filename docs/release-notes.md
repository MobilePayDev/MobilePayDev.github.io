---
sidebar_position: 9
---

# Release notes

### 2022-04-19
Failed webhook notifications are now retried with an exponential backoff. After all retries are exchausted the notification is never sent again. This applies to both new and previously created webhooks. More information can be found here [Webhooks API](/docs/webhooks-api#requirements-and-limitations).

### 2022-04-12
Webhooks can now be associated with a specific payment point. This is possible when both creating new ones and updating old ones. More information in [Webhooks API](/docs/webhooks-api#webhooks-for-specific-payment-points) and [API reference for Webhooks](https://developer.mobilepay.dk/product/).
