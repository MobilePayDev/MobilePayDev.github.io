---
sidebar_position: 2
---

# Payments

When you have created a merchant you can start initiating payments.

1. In order to create a payment you need to invoke the "create payment" endpoint (POST to /payments/).
To use this you need to provide information about the merchant, the payment, the public key used for encrypting the data, callback-, and redirection urls.
This will return an url the end-user should be redirected to.
2. When the user has accepted the payment in the MobilePay app, you'll receive a callback on the url defined in 1. containing the card data and you can create the authorization.
3. When you have successfully authorized the payment (or it has failed), you must patch the authorisationAttempt and we'll show a receipt (or error message) to the user. Do not expect the user to return client side / in the UI.
:::info
If the authorization fail we will allow the user to accept the payment again (encouraging them to use another card). This will result in a new callback to your callback url with a new authorizationAttempt.
:::
4. When the merchant makes captures, refunds, or cancels the payment the status of the payment must be updated to reflect this. The updates are used for invoicing purposes. To update the payment use these:

```bash
POST payments/{paymentId}/captures
POST payments/{paymentId}/cancels
POST payments/{paymentId}/refunds
```

## Restrictions

A payment will time out by default within 10 minutes, meaning that the whole process of user accepting, callbacks made and authorization must be completed within 10 minutes.

Furthermore after you get the callback containing the card data, you must update the status of the authorization to either "authorize-successful" or "authorize-failed" within 20 seconds to ensure a smooth experience for the user waiting for the confirmation.

## Merchant logo

On InitiatePayment you must define a merchantLogoUrl. If the merchant does not have a logo please use following url: https://no-logo.png

This results in standard merchant logo to be displayed in the MobilePay app.  

:::caution NOTE
All merchants should have their own logo to give the best user experience. Only use this as a temporary solution!
:::

## Diagrams

### Payment - Happy day

[![payment sequence diagram](/img/online-payment-sequence-diagram.svg)](/img/online-payment-sequence-diagram.svg)

### Native app switching, Payment - Happy day

[![payment with native app switching diagram](/img/online-payment-with-native-app-switching-sequence-diagrams.svg)](/img/online-payment-with-native-app-switching-sequence-diagrams.svg)
[![after authorization sequence diagram](/img/online-after-authorization-sequence-diagram.svg)](/img/online-after-authorization-sequence-diagram.svg)

### When acquirer or issuer rejects a payment

[![acquirer or issuer reject payment sequence diagram](/img/online-acquirer-or-issuer-reject-payment-sequence-diagram.svg)](/img/online-acquirer-or-issuer-reject-payment-sequence-diagram.svg)

### When the user rejects a payment

[![user rejects payment sequence diagram](/img/online-user-rejects-payment-sequence-diagram.svg)](/img/online-user-rejects-payment-sequence-diagram.svg)
