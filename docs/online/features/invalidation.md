---
sidebar_position: 1
---

# Invalidation of a payment

In some cases the user goes back to the merchant webshop and adds something to the shopping basket after the payment has been initiated. The user could end up with several requests with different amounts and there would be a possibility, that the user accepts the wrong one in MobilePay. In this case payment invalidation endpoint can be useful. When the invalidation is completed, it means that the user cannot create a request for the payment or accept the payment. Active requests will also expired immediately.

## Invalidation before callback

If the invalidation request is received by MobilePay before the callback to the PSP is made, no callback will be performed and the invalidation will complete.

[![Payment invalidation before callback](/img/invalidation-before-callback.svg)](/img/invalidation-before-callback.svg)

## Invalidation after callback

If the invalidation request is received by MobilePay after the callback to the PSP is performed, the PSP must also PATCH the authorizationAttempt with succeeded=false and the ReasonCode 1010 - RejectedForInvalidatePayment.

In this case the invalidation request will be processed in the MobilePay backend according to these rules:

1. If a successful authorization already exists on the payment, the invalidation endpoint will return the error code 2100.
2. If a callback has been sent but the authorization attempt has not yet been patched or 3DS is ongoing, the invalidation endpoint will return the error code 2101. The authorization attempt must be patched with reasoncode 1010 before invalidation.
3. A failed authorization will result in a successful invalidation.

[![Payment invalidation after callback](/img/invalidation-after-callback.svg)](/img/invalidation-after-callback.svg)
