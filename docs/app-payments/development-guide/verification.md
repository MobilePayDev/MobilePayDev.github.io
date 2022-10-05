---
sidebar_position: 3
---

# Verification

To ensure that your system is ready for production you need to have performed the basic API calls as described in the verification form below. Once we have verified that the steps has been completed successfully you are ready to start testing in production.

When your test in production are done and you are getting ready to go live with MobilePay App Payments please let us know at developer@mobilepay.dk and we will stand by for any assistance you may need.

## Error handling & Flow

Preparing proper error handling of payments is extremely important since communication between MobilePay and merchant app can be interrupted. It is crucial that you can handle all scenarios that may happen locally on the customers devices. For example in case of bad network connectivity and the customer has purchased a product/service through MobilePay where a reservation was succesfully made, it is important that this is communicated in the merchant app so the customer does not get stuck in a limbo where a reservation is created on their account without any product/service being delivered. In case your customer doesn't get redirected properly to your app after a successful payment (Reservation) in MobilePay due to network connectivity, crashed phone or some other scenario you should make sure to communicate in your app that the purchase of the product/service is confirmed.

## Use of Description

We highly recommend that you use the description parameter to inform your customers to a greater extent. Description will be shown on the payment confirmation screen in MobilePay, so the customer has more information about the product(s) they have purchased. The description will also be shown when the MobilePay user opens their payment receipt in the activity list.

## Sandbox verification

Before moving to hidden production you must have performed below API calls. Please insert the listed details and submit the form in order for us to confirm the API calls. All actions are mandatory.  Please send an email to developer@mobilepay.dk with data for each point or use this [template](mailto:developer@mobilepay.dk?subject=Sandbox%20verification%20-%20Online&body=Hi%20MobilePay%2C%0D%0A%0D%0APayments%0D%0A1.%20Initiate%20payment%3A%20POST%20%2Fv1%2Fpayments%20-%20paymentId%0D%0A2.%20Accept%20payment%3A%20Using%20test%20app%20or%20API%20-%20paymentId%0D%0A2.%20Cancel%20payment%3A%20POST%20%2Fv1%2Fpayments%2F%7Bpaymentid%7D%2Fcancel%20-%20paymentId%0D%0A3.%20Refund%20Payment%3A%20POST%20%2Fv1%2Frefunds%20-%20paymentId%0D%0A%0D%0AWebhooks%0D%0A5.%20Are%20you%20using%20webhooks%3F%20*We%20strongly%20advise%20using%20webhooks%20in%20your%20integration.*%20-%20Yes%2FNo%0D%0A6.%20If%20you%20don't%20use%20webhooks%20polling%20with%20%60GET%20%2Fv1%2Fpayments%2F%7Bpaymentid%7D%60%20is%20mandatory%20-%20paymentId%0D%0A).

**Payments**

1. Initiate payment: `POST /v1/payments` - paymentId
2. Accept payment: Using [test app]8/docs/app-payments/development-guide/test#test-app) or [API](/docs/app-payments/development-guide/test#integration-tests) - paymentId
2. Cancel payment: `POST /v1/payments/{paymentid}/cancel` - paymentId
3. Refund Payment: `POST /v1/refunds` - paymentId

**Webhooks**

5. Are you using webhooks? *We strongly advise using webhooks in your integration.* - Yes/No
6. If you don't use webhooks polling with `GET /v1/payments/{paymentid}` is mandatory - paymentId

We will reply to your email with a link where you must upload a video showing the user experience of a MobilePay App Payment in your app. Meanwhile we will verify the information submitted and prepare to move you to production.
