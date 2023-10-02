---
sidebar_position: 10
---

# Transition to One Platform

**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway.

# New ePayments API
There is no need to reintegrate into the new solution yet as the existing App Payments integration will continue to work until the end of 2024. But you are very welcome to start the integration already now. As replacement for App Payments API we offer our new product [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). This will have many of the same features but also offer new possibilities  together will our range or supporting APIs. Please have a look at [recommended flows](https://developer.vippsmobilepay.com/docs/solutions/) to get inspiration for the new possibilities . The new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) will be available in Finland and Denmark from Q1 2024. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/) for information about the migration.

# App Payments Facade 
To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. If you have any questions you are always welcome to reach out to us at developer@mobilepay.dk 

## Changes to The Facade

### Webhooks

#### SignatureKey
SignatureKey can no longer be fetched. You will have to fetch them now and store them securely for validating Webhook signatures.

#### Migrate and management
We will migrate all existing webhooks to the new platform. The existing [MobilePay Webhook API](https://developer.mobilepay.dk/api/wehooks) will close but you can manage your webhooks after transition to one platform using the new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/). This will require that you use the new [Access token API](https://developer.vippsmobilepay.com/api/access-token/) in order to authenticate towards the API. 

The new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/) will support webhooks on partner level or merchant sales unit level. This means that partners can register one webhook for all their merchants or webhook for each individual sales unit. Merchants can register webhook for each their sales units. A sales unit is equal to a payment point. 

#### Webhook Events
The new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/) will contain different [events](https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/). When registering new webhooks you will be able to choose between the [existing MobilePay events](https://developer.mobilepay.dk/docs/app-payments/webhooks#available-webhook-events) and the [new Vipps MobilePay events](https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/). Documentation for this will come soon.

Neither the existing or new webhook API's will support `paymentpoint.activated` and `transfer.succeeded` events. 

### Reference
The payment reference will be shown on the payment receipt. If the reference is not unique we will postfix a counter separated by a delimiter:
`reference{delimiter}{counter}`. Example: `order123#1`.

This will only be shown to the user on the receipt. If you retrieve the payment data through the API you will get the reference you have defined in payment initiation which does not include the counter.  

### Refund
The refund description will no longer be shown to users or be present when querying refunds.

### RedirectURI when querying list of payments
When using endpoint [`GET /v1/payments`](https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list) the RedirectURI response field will be cut off after the first 100 characters when querying the list of payments. 
Note: This will not affect the payment initiation, only when retrieving the list of payments.

### New merchants and payment points
There will be some changes in the availability to create new merchants and payment points. Please contact us if you have a need for new merchants and payment points. 

From the launch of our new platform you will be able to use the new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) where there is not limitation to the creation of new merchants and payment points. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/) for information about the migration. 

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
