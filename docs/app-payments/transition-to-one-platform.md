---
sidebar_position: 10
---
import Launch from '/docs/shared-blocks/_launch.mdx';

# Transition to One Platform

**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway.

## App Payments to ePayments API
There is no need to reintegrate into the new solution yet as the existing App Payments integration will continue to work until Q1 2025. But you are very welcome to start the integration already now. As replacement for App Payments API we offer our new product [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). This will have many of the same features but also offer new possibilities together with our range of supporting APIs. Please have a look at [recommended flows](https://developer.vippsmobilepay.com/docs/solutions/) to get inspiration for the new possibilities . The new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) will be available in Finland and Denmark from Q1 2024. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/) for information about the migration.

**Timeline for existing App Payments merchants and partners**

- **NOW** Take a look at the change list here and implement changes if needed for the Facade period
- **2024Q1** Be ready with adjustments needed for your integration for the Facade period.
- **2024Q1 March 12th** We finally launch Nordic Wallet Launch in  Denmark 🇩🇰 and migrate all Danish merchants
- **2024** Plan and integrate new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) 
- **2025Q1** Be ready with your API integration to the App Payments API. The facade will be switched off. 

## Test
The first version of the new test environment is ready for the App Payments facade. All features except Refund is available.

### Test credentials
**Test merchant**: Find a guide to create test merchant [here](https://developer.vippsmobilepay.com/docs/developer-resources/portal/#how-to-create-a-test-sales-unit). The test credentials consist of a client id, client secret and subscriptions key. 
**Test user**: Find a guide to create test users [here](https://developer.vippsmobilepay.com/docs/test-environment/#test-users) 
*For partners*: Please contact partner@vippsmobilepay.com to request a DK or FI test merchant and user.

Please note: If you want to reuse your App Payments test data you will need to recreate your test data. Please note that all test data, including payments, refunds, and so on, created on the old platform will not be migrated from the sandbox to the merchant test environment.

#### Authentication 

You will  have to integrate with the new and simplified Access Token API designed for the merchant test environment. The old MobilePay-issued API key for the sandbox will cease to function. [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/) Prod API keys will continue to work.

### Headers and endpoints
You must include these headers for all requests to the API
```
-H 'Authorization: Bearer {API_KEY or JWT}' \
-H 'Content-Type: application/json' \
-H 'Ocp-Apim-Subscription-Key: {subscriptions key}' \
-H 'Merchant-Serial-Number: {MSN}'
```
The endpoints have not changed. Please find them in the [API specification](https://developer.mobilepay.dk/api/app-payments).

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
curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{PAYMENT_ID}/reserve \
-X POST \
-H 'Authorization: Bearer {API_KEY or JWT}' \
-H 'Content-Type: application/json' \
-H 'Ocp-Apim-Subscription-Key: {subscriptions key}' \
-H 'Merchant-Serial-Number: {MSN}'
-d '{
    "phoneNumber": {string}
}'
```

`phoneNumber` must be international phone number including contry code. For example: `4512345678`

## App Payments Facade 
To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and consider updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. 

:::danger Important info
To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. If you have any questions, feel free to reach out to us at developer@vippsmobilepay.com 
:::
### Changes to The Facade
:::info Prepare for launch
<Launch />
:::
#### Webhooks

##### Managing webhooks 
To manage webhooks on salesunits in the App Payments Facade you will need to use the new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/). 

This will require that you use the new [Access token API](https://developer.vippsmobilepay.com/api/access-token/) in order to authenticate towards the API using Vipps Authentication.

When creating webhooks for the facade, the only supported webhook events are the following:

`legacy-mobilepay--app-payments.payment.cancelled_by_user.v1`

`legacy-mobilepay--app-payments.payment.expired.v1`

`legacy-mobilepay--app-payments.payment.reserved.v1`

Below is an example request for creating a new webhook listening for the reserve event for a specific MSN:
```bash title="New Vipps MobilePay request"
curl https://api.vipps.no/webhooks/v1/webhooks \
-X POST \
-H 'Authorization: Bearer {JWT}' \
-H 'Ocp-Apim-Subscription-Key: {Subscription-Key}' \
-H 'Merchant-Serial-Number: {Merchant-Serial-Number}' \
-H 'Content-Type: application/json' \
-d '{
    "url": "{your-callback-url}",
    "events":["legacy-mobilepay--app-payments.payment.reserved.v1"]
}'
```

The Authorization header should contain a JWT token from the new [Access token API](https://developer.vippsmobilepay.com/api/access-token/).

The Merchant-Serial-Number is optional and should only be included if you want to register the webhook on a specific MSN. If not included, a partner level webhook will be created.

The Ocp-Apim-Subscription-Key is the subscription key for the salesunit or the partner key.

##### SignatureKey
SignatureKey can no longer be fetched through the API. You will have to fetch them from the portal and store them securely for validating Webhook signatures.

#### Migration and management
We will migrate all existing webhooks to the new platform. The existing [MobilePay Webhook API](https://developer.mobilepay.dk/api/wehooks) will close but you can manage your webhooks after transition to one platform using the new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/). This will require that you use the new [Access token API](https://developer.vippsmobilepay.com/api/access-token/) in order to authenticate towards the API. 

The new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/) will support webhooks on partner level or merchant sales unit level. This means that partners can register one webhook for all their merchants or a webhook for each individual sales unit. Merchants has to register webhooks for each of their sales units individually. A sales unit is equal to a payment point. 

##### Webhook Events
The new [Vipps MobilePay Webhooks API](https://developer.vippsmobilepay.com/api/webhooks/) will contain different [events](https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/). When registering new webhooks you will be able to choose between the [existing MobilePay events](https://developer.mobilepay.dk/docs/app-payments/webhooks#available-webhook-events) and the [new Vipps MobilePay events](https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/).

Neither the existing or new webhook API's will support `paymentpoint.activated` and `transfer.succeeded` events. 

:::danger 
For the facade we will use different webhook servers than currently used. If you have whitelisted our IP ranges for webhooks please ensure to include our new servers. You can find our server guidelines [here](https://developer.vippsmobilepay.com/docs/developer-resources/servers/).
::: 

#### Payments

##### Reference
The payment reference will be shown on the payment receipt. If the reference is not unique we will postfix a counter separated by a delimiter:
`reference{delimiter}{counter}`. Example: `order123#1`.

If the payment reference is not unique and too large to have a postfix an appropriate amount will be trimmed from the end of the reference before adding the postfix.
Example  `this-reference-is-64-chars` will become `this-reference-is-64-cha#1`.

This modified reference will be shown on the receipt and in the [Report API](https://developer.vippsmobilepay.com/docs/APIs/report-api/).
If you retrieve the payment data through the app payments facade API you will get the reference you have defined on payment initiation which does not include a counter or any trimming.
Be aware that this might cause issues for reconciliations purposes as there may be a mismatch in the reference you send and the one returned by the Report API.
We strongly recommend you don't ever reuse the same reference.

##### Description
The payment description can no longer exceed 100 characters. If a payment description exceeds this length the remaining description text will be cut off.

#### Refund
The refund description will no longer be shown to users or be present when querying refunds.

#### RedirectURI when querying list of payments
When using endpoint [`GET /v1/payments`](https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list) the RedirectURI response field will be cut off after the first 100 characters when querying the list of payments. 
Note: This will not affect the payment initiation, only when retrieving the list of payments.

#### New merchants and payment points
There will be some changes in the availability to create new merchants and payment points. Please contact us if you have a need for new merchants and payment points. 

From the launch of our new platform you will be able to use the new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) where there is not limitation to the creation of new merchants and payment points. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/) for information about the migration. 

#### Fetch a list of payments endpoint changes
The payment point was deprecated in 2023 since it won't continue to function as is on the facade. It is still possible to use it, but it will be limited to only returning payments with status 'Reserved' going forward.
Find the API spec for the endpoint here: https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list

