---
sidebar_position: 4
id: testing
---

# Testing

This page includes information to make sure your integration works as planned. Testing activities will be done in a sandbox environment and it won't create any real payments.

## MobilePay sandbox environment

The sandbox environment is dedicated for integration purposes. It is the same as production with some limitations (not a full list):

- No actual payments and reservations are made.

## Test merchants

You will receive details for a test merchant to use in a sandbox environment during your onboarding. It will allow you to login to [Sandbox MobilePay portal](https://sandprod-portal.mobilepay.dk/) to [generate API keys](/docs/authentication), and/or to [set up Payment Points](/docs/payment-points) for your testing purposes. It is a valuable experience since you will need to do the same activities when moving to production.

## Test users

You will receive information about test users during your onboarding. You will have a dedicated test user which you will be able to use to login into [MobilePay Test App](#test-app)

## Test app

In order to complete a payment flow in the sandbox environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandbox environment. You can only use the test users that we provide to you.

:::note

Do not use the test phone number in the production environment, as it might be a real user there.

:::

### iOS

iOS MobilePay Test app is available in Apple TestFlight.

- [MobilePay Sandbox App for Denmark](https://testflight.apple.com/join/xarydQZ4)
- [MobilePay Sandbox App for Finland](https://testflight.apple.com/join/hP92EaBR)

:::warning

**MobilePay Sandbox** app supports not only it's own schema `mobilepay-test://` but also the production schema `mobilepay://`. This means that some of you may experience issues in iOS when trying to make a real production payment, sandbox app would open.
To circumvent this you could try closing MobilePay Sandbox app and opening MobilePay so that it's running in the background while doing the production payment. Read more on how to close an app: https://support.apple.com/en-us/HT201330.

:::

### Android

To install, you will have to allow installation from “unknown sources”.

- [MobilePay Sandbox App for Denmark](https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-dk-android-sandbox/distribution_groups/external)
- [MobilePay Sandbox App for Finland](https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-fi-android-sandbox/distribution_groups/external)

### Log on to test app

1. Install and open the MobilePay DK/FI MobilePay Test app
2. Select "Log på (Eksisterende bruger)" / "Kirjaudu sovellukseen" / "Log on (existing user)"
3. Enter a valid Sandbox phone number (you have received during on-boarding)
4. Enter SSN (Only relevant on a fresh install)

   Denmark CPR no.: 000000-0000

   Finland henkilötunnus: 00000000000
5. Enter PIN: “1234”
6. Enter activation code: “123456” and press "OK" / "Jatka"

## Integration tests
We also have a Payments Testing API in sandbox environment, which has only one endpoint for simulating user's swipe in MobilePay app. You can use that to setup integration tests or in any other way where it fits you.

```bash title="Simulate user swiping and confirming the payment in MobilePay app."
curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{PAYMENT_ID}/reserve \
  -X POST \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
  -d '{
    "paymentSourceId": {UUID},
    "userId": {UUID}
  }'
```
`paymentSourceId` and `userId` are unique for your test users. You will receive these values during onboarding.