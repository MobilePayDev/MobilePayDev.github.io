---
sidebar_position: 13
---
## Transition to One Platform


**Our journey to create the ultimate payment wallet in the Nordics**

On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway. This unified platform will bring together more than 11 million users and over 400,000 merchants across the Nordics, ensuring that you have a unified payment experience throughout. 

**Uniting Subscriptions with Vipps MobilePay Recurring**

 We want to ensure that your transition to the new One Platform is as smooth and effortless as possible. As part of this transition, we will be merging the Subscriptions product with Vipps MobilePay Recurring product. Rest assured, we have carefully evaluated the usage of all Subscription features and we will ensure that the most commonly used features will continue to exist. To provide you with a simple, lightweight, and valuable product, any features that were not utilized will be closed. Our aim is to make your experience hassle-free and enjoyable.
 
:triangular_flag_on_post: **Important information - A smooth transition to the new solution**

* **No Need to Reintegrate:** You can breathe a sigh of relief knowing that there is no need to reintegrate into the new solution. Your existing Subscriptions APIs will continue to work seamlessly until the end of 2024, and possibly even longer. We understand the value of maintaining your current setup.
* **Changes to Functionality:** While our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. We strive to keep you informed every step of the way.
Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. Your satisfaction is our top priority, and we are here to support you throughout this process.

Thank you for being a part of our journey toward creating the best and most user-friendly payment wallet in the Nordics. :orange_heart: :blue_heart:

## 1. Agreements
### 1.1 Agreement request expiration period
We know that you have various ways to send agreement requests to you customer, such as from your website, through customer self-service portals, by email, printed as a QR on paper invoices, and while chatting on the phone. Some of these scenarios require that the agreement request is valid for very long time, like when it's sent by email or printed as a QR on a paper invoice. After launch, we will reduce the agreement signing period to maximum 5 minutes.

:star: **Recommendation:** If you want to give more than 5 minutes for your customer to sign the agreement, we recommend that you create a middle layer of communication on your private infrastructure. This means that when the user initiates agreement signing from your email or scans the QR on paper invoice, they should be redirected to your environment. At that moment, you can create the agreement request in Vipps MobilePay and redirect the customer to us. You will be in control of a bigger part of the agreement signing flow, providing more flexibility for you to manage the process.  In addition, you will have no need to send us all potential agreement requests, even if they will never be initiated by the customer. This means less data send to us, and less GDPR related questions (wink)

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `expiration_timeout_minutes`. Current range from 1 to 181440 minutes, default was 5 minutes. After release, the range will be from 1 to 5 minutes.

### 1.2 Agreement deletion validations
No one likes when agreement gets canceled, right? We do not like it either. The Subscriptions API offers you the option to prevent the customer from canceling an agreement for up to 24 hours from the time it's signed. From the moment we transition to One Platform, this feature will be unavailable.  

:star: **Recommendation:** We will help you to provide the best payment experience and keep the customer happy so that canceling an agreement will not come into his mind. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `retention_period_hours` will be ignored from the moment we transition to One Platform.

## 2. Recurring payments

### 2.1 Payments visible 8 days in advance

We want to empower you with transparency and flexibility when it comes to your recurring payments. Currently, your customer can view upcoming payments in the app up to 8 days in advance, regardless of whether the payment was sent 30 or 60 days earlier. However, from the moment we transition to One Platform, we're excited to announce that customers will be able to see your upcoming payment 35 days in advance, if you send it that early.

**Recommendation:** If 35 days of payment visibility in the app is too long for you, we recommend sending a payment closer to due date. 

### 2.2 Update existing payment

Error in the payment you sent to your customer?  From the moment we transition to One Platform, we ask you to update existing payments in a slightly different way. 

:star: **Recommendation:** We recommend you to cancel existing payments and create brand new in cases when payment information needs to be updated.

⚙️ Tech: API endpoint: `PATCH:/api/providers/{providerId}/agreements/{agreementId}/paymentrequests/{paymentId}` will be unavailable from the moment we transition to One Platform.

### 2.3 Push message for the user

Currently, your customers are receiving push messages 1 day in advance about upcoming recurring payments. You have an option to manage this notification through Subscription APIs. From the moment we transition to One Platform, we are removing this push notification for your customers and push management will stop being relevant, too. But do not worry, customers choosing to get those push messages will be informed about executed payments instead; in addition to notifications about all failed payments where they need to change a card, increase funds, etc. 

:star: **Recommendation:** Sit back and relax, we will make sure that all payments are executed successfully. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `disable_notification_management`, `notifications_on` will be ignored from the moment we transition to One Platform.

### 2.4 Invalid recurring payments
This one is bit more technical. ⚙️ Currently, we are saving every payment request you send to us, even Invalid ones. You can check whole status diagram [here](https://developer.mobilepay.dk/docs/subscriptions/subscriptions-payments#payment-state-diagram). From the moment we transition to One Platform, we will stop storing these requests. This will not impact payment validation nor payment execution logic. You will still get callbacks about payments status changes.

## 3. One-off payments

### 3.1 One-off payments types

One-off payments in Subscriptions are used in 3 different ways:
* [Flow 1](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-1--one-off-payment-with-a-new-agreement): Create a new Agreement with an initial One-Off Payment.
* [Flow 2](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-2---one-off-payment-on-an-existing-agreement): Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement.
* [Flow 3](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-3---one-off-with-auto-reserve): Merchants can send One-Off payment, which MobilePay will attempt to automatically reserve, without user’s confirmation

We reevaluated all our product package, usage of this feature and we decided, that from the moment we transition to One Platform, flow 2 will be moved from Subscriptions (Recurring) product to another Vipps MobilePay product - ePayment! 🍀 We are planning to keep flow 1 and 3 in the Subscriptions product and also in the Recurring product. Basically, all payments which are merchant initiated (MIT) and do not require Strong Customer Authentication (SCA) stay in Subscriptions and also Recurring. All payments where SCA is needed will be in ePayment product. 

**Recommendation:** If you want to continue charging your customers with payments where SCA is needed, please reintegrate these types of payments to Vipps MobilePay ePayment.

### 3.2 One-off expiration period

Similarly as with agreements, we are aligning the expiration period for one-off payments. From the moment we transition to One Platform, the maximum expiration timeout will be 5 minutes. 

:star: **Recommendation:**
* Flow 1: Create a new Agreement with an initial One-Off Payment. Just set the same expiration period subtracting for the one-offs as you set for agreements. You can read about changes on agreements here (link to agreement expiration minus change).
* Flow 2: Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement. This type of flow will be moved to Vipps MobilePay  ePayments. You can find more information about the switch in "One-off payments" (link to that paragraph).
* Flow 3: Merchants can send a One-Off payment, which MobilePay will attempt to automatically reserve, without the user’s confirmation. Long expiration time is not relevant for one-off auto reservation payments. So all good here (wink).

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`  `POST:/api/providers/{providerId}/agreements/{agreementId}/oneoffpayments`

Parameter: `expiration_timeout_minutes`, `one_off_payment.expiration_timeout_minutes` Current range from 1 to 181440 min, default was 5 minutes. After the moment we transition to One Platform, range will be from 1 to 5 minutes.

## 4. Refunds

### 4.1 Refund up to 365 days
Currently, you can refund payments which were executed up to 90 days in the past. Good news! We will give you an amazingly long period to refund your payments on One Platform - **365 days!**  ⚡️
The new period will be applied only on payments which will be executed on the new platform. 

## 5. App :iphone:

### 5.1 Merchant visibility

We will be streamlining the user interface of the app to provide a more focused and efficient experience for our and your customers. As a result, the list of potential merchants will no longer be displayed in the app. However, please be assured that all active and stopped agreements will still be readily visible to the app users.

:star:**Recommendation:** We understand that being present in the potential agreement list can be important to you. Although this feature will be going away, please know that we still value your feedback and aim to provide the best experience for our common customers. 

### 5.2 Merchant information on agreements

Currently, you are able to show your contact information in every agreement for your customer in agreement Info tab: Website, Customer Support, Self Service, FAQ. From the moment we transition to One Platform, this contact information will no longer be displayed for the user. 

:star:**Recommendation:** We understand that contact information on the agreement can be important to you and your customers. You can always provide an agreement management URL to the user (we call it cancel-redirect in our documentation) which enables them to reach your environment from the app. Or you could add contact information in the agreement description, if this is necessary. 

### 5.3 Payment attachments

Currently, you can attach extra information about payments, such as a link to an external PDF file or other environment, payment details, or PDF file generation from payment details. After reviewing this feature and its usage, we have decided to focus more on payment execution and agreement signing success rather than PDF generation capabilities. So, the PDF generation option will no longer be available from the moment we transition to One Platform.

:star:**Recommendation:** We are sorry if this feature was important to you, we hope you will find other ways to send PDF documents to you customers. Your satisfaction is our top priority, and we are here to support you throughout this process.

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `generate_pdf` : true will be ignored from the moment we transition to One Platform.

**General**

## 6. Onboarding 

### 6.1 **For merchants**

* If you are using or are planning to start using Subscriptions on MobilePay platform before transition to One Platform. All good, nothing to do for you, just make sure you complete authorisation setup before transition to One Platform.
* If by any chance you will need to restart consent flow, e.g. get new refresh token after we transit to One Platform, you will have to do that already on One Platform.
* If you are planing to start using Recurring on New Vipps MobilePay platform, just integrate to new set up from beginning. 

Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/).

### 6.2 **For integrators/partners**
* If you are planning to start using Recurring on New Vipps MobilePay platform, just integrate to new set up from beginning.
* If you are existing integrator in Subscriptions on MobilePay platform and you want to onboard new merchants, we will ask you to change your authorisation setup. We are sorry, but from the moment we transition to One Platform we will not be able to support existing flow where merchant grants consent to you. Access and refresh tokens that were issued before the transition will remain valid and continue to work.

Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/) and [Partner setup](https://developer.vippsmobilepay.com/docs/vipps-partner/). 

## Developer Support

We're Here to Help!
If you have any questions or need assistance with managing your recurring payments, our  Developer support team (developer@mobilepay.dk) is available to provide guidance and support. We're like your trusty sidekick, always by your side, committed to making your payment experience as smooth as a well-oiled machine. Your satisfaction is our priority, and we're committed to making your payment experience as seamless as possible.


*Published 2023-06-05. Updated 2023-06-05.*


