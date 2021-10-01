---
sidebar_position: 4
id: testing
---

# Testing

This page includes information to make sure your integration works as planned. Testing activities will be done in a sandbox environment and it won't create any real payments.

## MobilePay Sandbox Environment

The sandbox environment is dedicated for integration purposes. It is the same as production with some limitations (not a full list):

- No actual payments and reservations are made.
- Push notifications won't work.

## Test Merchants

You will receive details for a test merchant to use in a sandbox environment during your onboarding. It will allow you to login to [Sandbox MobilePay portal](https://sandprod-admin.mobilepay.dk/) to [generate API keys](/docs/authentication), and/or to [set up Payment Points](/docs/payment-points-api) for your testing purposes. It is a valuable experience since you will need to do the same activities when moving to production.

## Test Users

You will receive information about test users during your onboarding. You will have a dedicated test user which you will be able to use to login into [MobilePay Test App](#test-app)

## Test App

In order to complete a payment flow in the sandbox environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandbox environment. You can only use the test users that we provide to you.

:::note

Do not use the test phone number in the production environment, as it might be a real user there.

:::

### iOS

iOS MobilePay Test app is available in Apple TestFlight.

- [MobilePay Sandbox App for Denmark](https://testflight.apple.com/join/xarydQZ4)
- [MobilePay Sandbox App for Finland](https://testflight.apple.com/join/hP92EaBR)

### Android

To install, you will have to allow installation from “unknown sources”.

- [MobilePay Sandbox App for Denmark](https://dbg.tpa.io/p/KnSXxG8NQ8Mv0yhct5iC)
- [MobilePay Sandbox App for Finland](https://dbg.tpa.io/p/K3WYrFuT_pHYEWoRYhtH)

### Log on to test app

1. Install and open the MobilePay DK/FI MobilePay Test app
2. Select "Log på (Eksisterende bruger)" / "Kirjaudu sovellukseen" / "Log on (existing user)"
3. Enter a valid Sandbox phone number (you have received during on-boarding)
4. Enter PIN: “1234”
5. Enter activation code: “123456” and press "OK" / "Jatka"

## Integration tests
We also have a Payments Testing API in sandbox environment, which has only one endpoint for simulating user's swipe in MobilePay app. You can use that to setup integration tests or in any other way where it fits you.

```bash title="Simulate user swiping and confirming the payment in MobilePay app."
curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{PAYMENT_ID}/reserve \
  -X POST \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "paymentSourceId": {UUID},
    "userId": {UUID}
  }'
```
`paymentSourceId` and `userId` are unique for your test users. You will receive these values during onboarding.