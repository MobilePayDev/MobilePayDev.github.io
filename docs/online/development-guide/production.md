---
sidebar_position: 4
---

# Production

Once you have completed the slim certification you are able to offer your solution to your merchants. Please carefully read below topics in order to prepare your setup before going live.

## Mandatory implementations

Please note that the following is mandatory implementation and you will not be able to go live without these. If we determine that you do not utulize the mandatory implementation in production we will reach out to you in order to resolve the situation and ensure the mandatory implementations. The reason for the mandatory implementation is to ensure the best user and merchant experience and satisfactory conversion rate.

* SCA implementations: That includes delegated authentication for Visa, Mastercard and Dankort as well as 3DS fallback. Find information about the SCA in our Github documentation.  
* Onboard individual merchants and not super merchants. See below section on Merchant onboarding for more details.
* Use merchant/web shop name and logo when initiating payments. See below section on Merchant onboarding for more details.
* Ensure merchants use correct and updated MobilePay logo and buttons. Visit our Design page for guides and ressources.
* Update all payments with capture or cancel and if refund is performed.

## Onboard production merchants and initiating payments

In order to onboard merchants you must use: `POST /api/v1/merchants`. It is only possible to onboard merchants using the API. **When onboarding merchants it is important that you onboard each individual merchant/web shop** and no super merchants. Please visit the API documentation to see which input is needed to create a merchant.

The input giving when creating merchants is only used for billing and support purposes. The information shown to the users when completing payments is supplied when initiating payments using `POST /api/v3/payments`. Similar to merchant creation it is important that you use the details of the specific merchant and not a super merchant or payment facilitator. **Therefore you must use the proper merchant/web shop name as well as logo.** This will ensure better user experience and conversion rate.

You can always contact us at developer@mobilepay.dk if you have any questions or conserns regarding merchant onboarding.

## Test options for merchants

It is the responsibility of the PSP to offer test options to their merchants. It is not possible for merchants to perform test directly towards MobilePay.

There are two test options you can use:

1. **Perform test using the sandbox API.** To do this you must suplpy your merchants with the test user that we have supplied to you during techincal onboarding. Your merchants can either use the test app or you can make the user simulation API available to them. It is your responsibility to instruct and support merchants in the use of our test app and user simulation API. We have made a 'Merchant Sandbox Testing' page with instructions about the test app. You can supply this to your merchants along with the phone number of your test user.
2. **Perform test using the production API.** In order to perform test in production you can either create a merchantId used only for test payments or merchants can test using their own merchantId. To do this merchants must use the production MobilePay app downloaded through App store or Google Play and a production user. All payments should be cancelled to ensure that not transactions are completed.

## Design guidelines

We want to make it easy for you to ensure that the right MobilePay buttons and logo's are used by the merchants. Proper use of our logo and buttons will ensure better user experience and conversion rate.
Please visit our [Design page](https://mobilepaygroup.com/design) for more information and ressources.

## Integrator and merchant support

For ongoing technical support, technical questions or feature requests integrators can always contact Developer Support at developer@mobilepay.dk. The Developer Support team will review the request and respond as soon as possible, usually within a business day. Merchant support is the responsibility of the integrator as MobilePay do not have any agreements with merchants and is working as a pass through wallet. Therefore we can rarely assist merchants in any issues.

When contacting Developer Support please include as many details as possible relevant to the request. If it concerns a specific issue or bug please include the following and any other details that can be relevant:

* MerchantId
* PaymentId
* Timestamp for error
* Request/event that caused the error
* Error responses
* Screenshot if error in app
* Any logs that can be relevant to the issue

:::tip
Tip: Sign up for our operational mail list to be informed about any operational issues concerning Online. Just contact developer@mobilepay.dk in order to be added to the mail list.
:::
