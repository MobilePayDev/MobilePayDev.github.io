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

In order to complete a payment flow in the sandbox environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandbox environment. Test App uses `mobilepay-test://` scheme, which allows you to have both apps on the same phone. Production app uses `mobilepay://`. Only test users provided to you will work.

::: note
Do not use the test phone number in the production environment, as it might be a real user there.
:::

### iOS

The MobilePay Test app is available in Apple TestFlight. Open [this url](TBD) on your iOS phone.

### Android

### Log on to test app

1. Install and open the MobilePay DK/FI MobilePay Test app
2. Select "Log på (Eksisterende bruger)" / "Kirjaudu sovellukseen / "Log on (existing user)""
3. Ensure that the environment selector is set to ”Integrator Sandbox (With Login)"
4. Enter a valid Sandbox phone number (you have received during on-boarding)
5. Enter PIN: “1234”
6. Enter activation code: “123456” and press "OK" / "Jatka"
