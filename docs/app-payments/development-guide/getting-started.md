---
sidebar_position: 1
---

# Getting started

You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.

## Register

All merchants should order the product needed on the MobilePay portal: [DK](https://admin.mobilepay.dk/)|[FI](https://admin.mobilepay.fi/). 

## API documentation

Find the API documentation for App Payments and Webhooks in the API references below:

* [App Payments](/api/app-payments)
* [Webhooks](/api/wehooks)

## Authentication

In order to do authentication you must use either an API key generated by the merchant on the MobilePay Portal, or by using the OAuth flow which is preferred if you are an integrator doing the integration on behalf of merchants.

* API keys: This is a simple solution aimed at merchants integrating on their own behalf. They are used to get unlimited access to resources in your merchant account. These are retrieved through the MobilePay Portal. If you choose this option you simply need to retrieve the API key from the MobilePay portal to get started.
* OAuth: This is aimed at larger merchants or integrators integrating on behalf of one or more merchants. It is used to get authenticated and scoped access to any MobilePay merchant account. Use them when your application will access resources on behalf of multiple MobilePay merchant accounts, i.e. you are an integrator. If you choose this option please contact developer@vippsmobilepay.com to get started.

During the technical onboarding pelase inform us which authentication method you wish to use.
