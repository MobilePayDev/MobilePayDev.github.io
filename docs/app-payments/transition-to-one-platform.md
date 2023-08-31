---
sidebar_position: 10
---

# Transition to One Platform

**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway.

:::note
There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work until the end of 2024.
:::

# New ePayments API
As replacement for App Payments API we offer our new product [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). This will have many of the same features but also offer new posibilities together will our range or supporting APIs. Please have a look at [recommended flows](https://developer.vippsmobilepay.com/docs/solutions/) to get inspiration for the new posibilites.

# App Payments Facade 
To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. If you have any questions you are always welcome to reach out to us at developer@mobilepay.dk 

## Changes to The Facade

### Webhooks
- SignatureKey can no longer be fetched: You will have to fetch them now and store them securely for validating Webhook signatures
- Webhook management will stop working: You need to migrate to ePayments to create and manage webhooks
- Webhook events that will no longer be sent: paymentpoint.activated and transfer.succeeded

### Refund
The refund description will no longer be shown to users or be present when querying refunds.

### RedirectURI when querying list of payments
When using endpoint [`GET /v1/payments`](https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list) the RedirectURI response field will be cut off after the first 100 characters when querying the list of payments. 
Note: This will not affect the payment initiation, only when retrieving the list of payments.

### No management of payment points
We will migrate all existing payments to the new platform so they are ready to be used through the facade after the launch of one platform. After the launch it will not be possible for merchants to manage the payment points. This includes logo, payment point name and change of bank account. All changes must be done prior to the launch.

### No new merchants
It will not be possible to onboard any new merchants or integrators to the facade. All new merchants and integrators must use the [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). 

### UserSimulation endpoint
The request to the userSimulation endpoint will be simplified. 
```bash title="Old MobilePay request"
curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{paymentid}/reserve \
-X POST \
-H 'Authorization: Bearer {API_KEY or JWT}' \
-H 'Content-Type: application/json' \
-d '{
    "paymentSourceId": {UUID},
    "userId": {UUID}
}'
```

For  the new setup you will not need to supply a userId or paymentSourceId but instead a phoneNumber. When registering for test access on the new platform you will receive a new test phoneNumber

```bash title="New Vipps MobilePay request"
curl xxx/v1/integration-test/payments/{PAYMENT_ID}/reserve \
-X POST \
-H 'Authorization: Bearer {API_KEY or JWT}' \
-H 'Content-Type: application/json' \
-d '{
    "phoneNumber": {string}
}'
```