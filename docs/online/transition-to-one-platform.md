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

To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. If you have any questions, feel free to reach out to us at developer@mobilepay.dk 

## VAT number required for all merchants

Before December 2023, please use our API to provide correct VAT number for both new and existing merchants if you’re not already doing so.
For new merchants, the vatNumber field will be required for the Create merchant endpoint: `POST /v1/merchants`
For existing merchants, you can use Update merchant `PATCH /api/v1/merchants/{merchantId}` to provide vatNumber.

If you do not update the VAT number of your existing merchants they will still exist after the transition to one platform, but you will not be able to initiate payments. You must then delete them and create a new merchant. 

For sole props. not having a VAT no. you can use an alternative number for example your own unique merchant id.

## Feature changes
During Q1 2024 - once we fully consolidate our platforms – the following endpoints/features will stop working for MobilePay Online.
For a smooth transition, we recommend reviewing the changes and consider updating your integration accordingly if you are using any of these.

### Update merchant 
`PATCH /api/v1/merchants/{merchantId}` will be removed. To update a merchant you must instead delete the merchant and create a new using: `DELETE /v1/merchants/{merchantId}` and `POST /v1/merchants`.
If you need to update an active merchant we recomend that you create the new merchant and then delete the old. This is to avoid downtime since it is not possible to initiate payments on deleted merchants. Authorization updates and payment updates such as capture, cancel and refund is on payment level and will therefore not be affected by this. 

### validUntil 
It will no longer be possible to define payment validation. It will instead default to 5 minutes. Read more [here](https://developer.vippsmobilepay.com/docs/vipps-developers/common-topics/timeouts/).

### Get payment
`GET /api/v3/payments/{paymentId}` will be removed. 

### Invalidate payment
`PUT /v1/payments/{paymentId}/invalidate` will be removed and it will not be possible to invalidate payments. 

### Callback servers
On our new platform we will use different callback servers than currently used. If you have whitelisted our IP ranges for callbacks please ensure to include our new servers. You can find our server guidelines [here](https://developer.vippsmobilepay.com/docs/developer-resources/servers/). Note that this is only for callbacks. During the transition period to our new platform you may receive callbacks from our old setup and new servers. Therefore you must both the [old](/docs/support/faq) and [new servers](https://developer.vippsmobilepay.com/docs/developer-resources/servers/) for a period of time until we have completely transitioned to one platform. We encourage you to enable this as soon as possible as this will come into effect in January 2024.
