---
sidebar_position: 5
---

# Transition to One Platform

**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway.

:::info No Need to Reintegrate
There is no need to reintegrate into the new solution. Your existing Online integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. 
Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration.
:::

To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you need to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. 
- **March 12th** we will launch the new platform in **Denmark** and migrate all Danish merchants.
  
If a merchant is neither Finnish nor Danish, we will migrate them according to the currency of their transactions. You may encounter a slight rise in failed payments in the period between the Finnish and Danish launch. This can happen to merchants that have customers in both countries. In the intermediate period it will only be possible to offer payments to either Danish or Finnish users. Once we have launched in Denmark it will be possible to make cross border payments again. 

If you have any questions, feel free to reach out to us at developer@vippsmobilepay.com 

## VAT number required for all merchants

VAT number is now required for all merchants. For new merchants, the vatNumber field is required for the Create merchant endpoint: `POST /v1/merchants`
For existing merchants without VAT numbers you must, you can use Update merchant `PATCH /api/v1/merchants/{merchantId}` to provide vatNumber. Note that the Update endpoint only accepts VAT number. It is not possible to update any other details. Please see [Update merchant](#update-merchant) if you need to change any other details of the merchant.

If you do not update the VAT number of your existing merchants you will not be able to initiate payments for these after the launch of the new platform. You must then delete them and create a new merchant. 

For sole props. not having a VAT no. you can use an alternative number for example your own unique merchant id.

## Callback servers
On our new platform we will use different callback servers than currently used. If you have whitelisted our IP ranges for callbacks please ensure to include our new servers. You can find our server guidelines [here](https://developer.vippsmobilepay.com/docs/developer-resources/servers/). Note that this is only for callbacks. During the transition period to our new platform you may receive callbacks from our old setup and new servers. Therefore you must allow both the old and [new servers](https://developer.vippsmobilepay.com/docs/developer-resources/servers/) for a period of time until we have completely transitioned to one platform. We encourage you to enable this as soon as possible as this will come into effect in January 2024.

## Feature changes
During Q1 2024 - once we fully consolidate our platforms – the following endpoints/features will stop working for MobilePay Online.
For a smooth transition, we recommend reviewing the changes and consider updating your integration accordingly if you are using any of these.

### Update merchant 
`PATCH /api/v1/merchants/{merchantId}` currently only support update of VAT number. We will soon remove the endpoint completely. Note that you can only update VAT number using `PATCH` before the launch of the new platform. After launch you must instead delete the merchant and create a new using: `DELETE /v1/merchants/{merchantId}` and `POST /v1/merchants`.
If you need to update an active merchant we recommend that you create the new merchant and then delete the old. This is to avoid downtime since it is not possible to initiate payments on deleted merchants. Authorization updates and payment updates such as capture, cancel and refund is on payment level and will therefore not be affected by this. 

### PspReferenceId
PspReferenceId must from now on be unique.

### validUntil 
It will no longer be possible to define payment validation. It will instead default to 10 minutes. 

### Get payment
`GET /api/v3/payments/{paymentId}` will be removed. 

### Invalidate payment
`PUT /v1/payments/{paymentId}/invalidate` will be removed and it will not be possible to invalidate payments. 

### Update payment
`PATCH /v1/payments/{paymentId}` will require approval to use. Please contact developer@vippsmobilepay.com

## Use the RedirectURLs we supply and don't change them on your end
RedirectURLs start with the basepath vipps://? follow by the token "token=(TOKEN)". Always use the Redirect link we send. Do not change it in any way.
If you have hardcoded dependencies make sure you allow for these.
Example:
 "redirectToMobilePayAppUrl": "vipps://?token=(TOKEN)"

## Prefill phone number
It is currently not possible to prefill the phone number on the MobilePay landing page. If a phone number is supplied the page will simply ignore it. Instead users can use the "Remember me" functionality to avoid having to input phone number each time. We are looking into adding the prefill option again but have no ETA for this yet. 

## Test availability
The first version of the new test environment is ready for the Online facade. Please read the details below on how to test.

### Authorization and endpoints
You can continue to use your existing sandbox credentials which includes client id, client secret and publicKeyId. The endpoints have not changed and you can find them in the [API specification](/api/online). 

### Test data and test user
No test data have been migrated so you must create new test merchants. You will also need a new test user which can be requested by contacting developer@vippsmobilepay.com. Please state if you need a DK or FI user. 

It is no longer possible to add your own cards to the test users, instead you can utilize magic numbers documented [here](https://developer.vippsmobilepay.com/docs/APIs/psp-api/vipps-psp-api/#magic-numbers-for-emvco-tokens). Note that the documentation for the magic numbers are part of the Vipps PSP documentation. But it is only the section about magic numbers that are relevant for your MobilePay Online test, the rest is only related to Vipps PSP solution. For MobilePay Online you must still follow the existing [MobilePay Online](/docs/online) documentation.  
