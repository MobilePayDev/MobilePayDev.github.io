---
sidebar_position: 2
---
import TestApp from '/docs/shared-blocks/_test-app.mdx';

# Test

## Testing a MobilePay Online payment

As PSP, you can now initiate a MobilePay Online payment against our Sandprod environment.

1. Create a test merchant by calling: `POST /api/v1/merchants`
2. Initiate a payment by calling: `POST /api/v1/payments` You will receive redirectToMobilePayUrl in response
3. Open redirectToMobilePayUrl  in a browser to access MobiePay landing page (or from an app). On the landing page enter the test phone number you have received during the technical onoarding.
4. Use either [test app](#test-app) or user [simulation API](#user-simulation-api) to accept the payment.
5. Receive token or cardData callback. In production you will call the aquire at this point.
6. Update authorization attempt with succeeded true or false by calling: `PATCH /api/v1/payments/{paymentId}/authorizationattempts/{authorizationAttemptId}`
7. Create capture by calling: `POST /api/v1/payments/{paymentId}/captures`

## Test app

In order to complete a payment flow in the sandprod environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandprod environment.

<TestApp />

## User simulation API

To complete a payment flow in the sandprod environment you will need to make user actions. We have made an API that can mimick the actions of a user. You find it in the API overview: Choose 'Online User Simulation'

With the API simulate user behavior:

1. User enter phone number for payment.
2. User selects the first eligible card for payment.
3. User swipes to accept payment.

How to use the User simulation API:

1. Initiate a payment: `POST /api/v3/payments`
2. Accept the payment: `POST /api/v1/product/payments/simulation/enter-phone-and-swipe/{paymentId}`

The test user may have more than one card available. In order to choose a specific card use `LastFourDigits`. Last for digit of the decired payment card to be used. These can be found in the test app or by contacting Developer Support. If not defined the first eligible card will be used.

### Automated integration tests in Sandbox

The API supports automated integration tests running in Sandbox using the Online User Simulation API.
Please refrain from any overly aggressive testing strategies, we expect any continously running tests to call at most once per second.

## Test user

Through the technical onboarding you will receive a sandbox test user. If you have not yet received one, please contact developer@mobilepay.dk to request a test user. The test user is assigned to your integration and not shared with others.

If you are a **merchant** please contact your MobilePay Online integrator/PSP to receive a test user from them. Test setup varies from PSP to PSP and therefore MobilePay cannot directly assist with this.

If you experience any issues with the test user, please contact developer@mobilepay.dk
