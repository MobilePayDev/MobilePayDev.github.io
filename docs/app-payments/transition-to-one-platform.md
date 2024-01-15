---
sidebar_position: 10
---

# Transition to One Platform
*THIS DOCUMENT WAS LAST UPDATED ON 09.01.2024* (NEW CONTENT: HOW TO TEST THE FACADE)

**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway.

## App Payments to ePayments API
There is no need to reintegrate into the new solution yet as the existing App Payments integration will continue to work until Q1 2025. But you are very welcome to start the integration already now. As replacement for App Payments API we offer our new product [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). This will have many of the same features but also offer new possibilities together with our range of supporting APIs. Please have a look at [recommended flows](https://developer.vippsmobilepay.com/docs/solutions/) to get inspiration for the new possibilities . The new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) will be available in Finland and Denmark from Q1 2024. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/) for information about the migration.

**Timeline for existing App Payments merchants and partners**

:::caution Key dates

- **NOW** Take a look at the change list here and implement changes if needed for the Facade period
  
- **2024Q1** Be ready with adjustments needed for your integration for the Facade period. We recommend for Finnish merchants and partners to be ready till 2024.01.01.

- **2024Q1** We finally launch Nordic Wallet Launch in Finland 🇫🇮 and then Denmark 🇩🇰
  
- **2024** Plan and integrate new [ePayments API](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/) 

- **2025Q1** Be ready with your API integration to the App Payments API. The facade will be switched off. 

:::
### The test environment for the new platform

The test environment is called Merchant Test (MT) and is now open for test. MT currently only allows Norwegian phone numbers, currency and merchants, but you can test the API and payment flow. Please see the details of [limitations of the test environment](https://developer.vippsmobilepay.com/docs/test-environment/)

In order to request access to the test environment, please use the following links:

- [Partners](https://www.vippsmobilepay.com/partner/become-a-partner)
- [Merchants](https://vippsmobilepay.com/merchant-test-account-sign-up)


We will send you an e-mail with the information you need to get started. This is also needed even though you are an existing MobilePay integrator or merchant, since we need your information registered on our new joint platform.


## App Payments Facade 
To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and consider updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. 

:::danger Important info
To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. If you have any questions, feel free to reach out to us at developer@vippsmobilepay.com 
:::
### Changes to The Facade

#### Webhooks

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

This will only be shown to the user on the receipt. If you retrieve the payment data through the API you will get the reference you have defined in payment initiation which does not include the counter or trimming.

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

#### UserSimulation endpoint
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

### Testing the facade (Only in production)

Facade tests can only be conducted in the Production environment. A new app version is required for the test, and it is exclusively available internally for Vipps MobilePay (VMP) employees, so we will assist you with the testing.

Preparation:
- Create a new Payment point in the MobilePay portal.
- Inform VMP when it's completed.
- We will toggle a switch for that specific payment point so traffic is routed through the facade.

How to test:
- Make requests as usual through the API on the new payment point.
- To test a full payment flow, user interaction is required. Contact us at developer@mobilepay.dk and we will schedule a meeting.

Important:
- It’s up to the merchant to decide if they want to test the facade.
- There are no new features in the facade.
