---
sidebar_position: 13
---
# Transition to One Platform
 

**Our journey to create the ultimate payment wallet in the Nordics**


On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway. This unified platform will bring together more than 11 million users and over 400,000 merchants across the Nordics, ensuring that you have a unified payment experience throughout. 

**Timeline for existing subscriptions merchants and partners**


[![timeline](/img/timeline.png)](/img/timeline.png)


**Uniting Subscriptions with Vipps MobilePay Recurring**

 We want to ensure that your transition to the new One Platform is as smooth and effortless as possible. As part of this transition, we will be merging the Subscriptions product with Vipps MobilePay Recurring product. Rest assured, we have carefully evaluated the usage of all Subscription features and we will ensure that the most commonly used features will continue to exist. To provide you with a simple, lightweight, and valuable product, any features that were not utilized will be closed. Our aim is to make your experience hassle-free and enjoyable.
 
:triangular_flag_on_post: **Important information - A smooth transition to the new solution**

* **No Need to Reintegrate:** You can breathe a sigh of relief knowing that there is no need to reintegrate into the new solution. Your existing Subscriptions APIs will continue to work seamlessly until the end of 2024, and possibly even longer. We understand the value of maintaining your current setup.
* **Changes to Functionality:** While our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we ask you to review the upcoming changes outlined below and update your integration accordingly. We strive to keep you informed every step of the way and support you throughout this process.

Thank you for being a part of our journey toward creating the best and most user-friendly payment wallet in the Nordics. :orange_heart: :blue_heart:

## **1. Agreements**
### 1.1 Agreement request expiration period
We know that you have various ways to send agreement requests to your customer, such as from your website, through customer self-service portals, by email, printed as a QR on paper invoices, and while chatting on the phone. Some of these scenarios require that the agreement request is valid for a very long time, like when it's sent by email or printed as a QR on a paper invoice. After launch, we will reduce the agreement signing period to a maximum of 5 minutes.

:star: **Recommendation:** If you want to give more than 5 minutes for your customer to sign the agreement, we recommend that you create a middle layer of communication on your private infrastructure. This means that when the user initiates agreement signing from your email or scans the QR on a paper invoice, they should be redirected to your environment. At that moment, you can create the agreement request in Vipps MobilePay and redirect the customer to us. You will be in control of a bigger part of the agreement signing flow, providing more flexibility for you to manage the process.  In addition, you will have no need to send us all potential agreement requests, even if they will never be initiated by the customer. This means less data send to us, and less GDPR related questions (wink)

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `expiration_timeout_minutes`. The current range is from 1 to 181440 minutes, the default was 5 minutes. After release, the range will be from 1 to 5 minutes.

### 1.2 Agreement deletion validations
No one likes when an agreement gets canceled, right? We do not like it either. The Subscriptions API offers you the option to prevent the customer from canceling an agreement for up to 24 hours from the time it's signed. From the moment we transition to One Platform, this feature will be unavailable.  

:star: **Recommendation:** We will help you to provide the best payment experience and keep the customer happy so that canceling an agreement will not come into his mind. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `retention_period_hours` will be ignored from the moment we transition to One Platform.

### 1.3 Agreements without amount

Current agreements where amount is not stated will be depicted as agreements with variable amount.

:star: **Recommendation:** We recommend you to update/create agreements with amount if its known in practice.

⚙️ Tech: API endpoint: `POST /api/providers/{providerId}/agreements` or `PATCH /api/providers/{providerId}/agreements/{agreementId}` Parameter `amount`

[<img
  src={require('/img/vmpamount.png').default}
  alt="WMP Amount"
  width="250"
/>](/img/vmpamount.png)

*Draft version of agreement screen, not final version.*

## **2. Recurring payments**

### 2.1 Payments visible 8 days in advance

We want to empower you with transparency and flexibility when it comes to your recurring payments. Currently, your customer can view upcoming payments in the app up to 8 days in advance, regardless of whether the payment was sent 30 or 60 days earlier. However, from the moment we transition to One Platform, we're excited to announce that customers will be able to see your upcoming payment 35 days in advance if you send it that early.

:star: **Recommendation:** If 35 days of payment visibility in the app is too long for you, we recommend sending a payment closer to the due date. 

### 2.2 Update existing payment

Error in the payment you sent to your customer?  From the moment we transition to One Platform, we ask you to update existing payments in a slightly different way. 

:star: **Recommendation:** We recommend that you cancel existing payments and create brand-new ones in cases when payment information needs to be updated.

⚙️ Tech: API endpoint: `PATCH:/api/providers/{providerId}/agreements/{agreementId}/paymentrequests/{paymentId}` will be unavailable from the moment we transition to One Platform.

### 2.3 Push message for the user

Currently, your customers are receiving push messages 1 day in advance about upcoming recurring payments. You have the option to manage this notification through Subscription APIs. From the moment we transition to One Platform, we are removing this push notification for your customers, and push management will stop being relevant, too. But do not worry, customers choosing to get those push messages will be informed about executed payments instead; in addition to notifications about all failed payments where they need to change a card, increase funds, etc. 

:star: **Recommendation:** Sit back and relax, we will make sure that all payments are executed successfully. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `disable_notification_management`, `notifications_on` will be ignored from the moment we transition to One Platform.

### 2.4 Invalid recurring payments
This one is a bit more technical. ⚙️ Currently, we are saving every payment request you send to us, even Invalid ones. You can check the whole status diagram [here](https://developer.mobilepay.dk/docs/subscriptions/subscriptions-payments#payment-state-diagram). From the moment we transition to One Platform, we will stop storing these requests. This will not impact payment validation or payment execution logic. You will still get callbacks about payment status changes.

### 2.5 Recurring payment amount validation
After the Launch we are changing our payment validation rules and introducing amount validation. If you have an agreement with an amount, your charge amount can be bigger, but just up to 5 times more. For example, if the agreement states that the monthly amount is 10 krona or euro, you can't charge 100 krona or euro. If such payment will be present in payment batch request - we will send a callback with status "Declined", status code 60001 and status text "Payment amount is 5 times higher than agreement amount.".

:star: **Recommendation:** Please update the agreement amount to a suitable value through `PATCH/api/providers/{providerId}/agreements/{agreementId}`.


## **3. One-off payments**

### 3.1 One-off payments types

One-off payments in Subscriptions are used in 3 different ways:
* [Flow 1](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-1--one-off-payment-with-a-new-agreement): Create a new Agreement with an initial One-Off Payment.
* [Flow 2](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-2---one-off-payment-on-an-existing-agreement): Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement.
* [Flow 3](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-3---one-off-with-auto-reserve): Merchants can send One-Off payment, which MobilePay will attempt to automatically reserve, without user’s confirmation

We reevaluated all our product packages, and usage of this feature and we decided, that from the moment we transition to One Platform, flow 2 will be moved from Subscriptions (Recurring) product to another Vipps MobilePay product - ePayment! 🍀 We are planning to keep flows 1 and 3 in the Subscriptions product and also in the Recurring product. Basically, all payments which are merchant initiated (MIT) and do not require Strong Customer Authentication (SCA) stay in Subscriptions and also Recurring. All payments where SCA is needed will be in ePayment product. 

:star: **Recommendation:** If you want to continue charging your customers with payments where SCA is needed, please reintegrate these types of payments to Vipps MobilePay ePayment.

### 3.2 One-off expiration period

Similarly, as with agreements, we are aligning the expiration period for one-off payments. From the moment we transition to One Platform, the maximum expiration timeout will be 5 minutes. 

:star: **Recommendation:**
* Flow 1: Create a new Agreement with an initial One-Off Payment. Just set the same expiration period subtracting for the one-offs as you set for agreements. You can read about changes in agreements [here](https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform#11-agreement-request-expiration-period).
* Flow 2: Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement. This type of flow will be moved to Vipps MobilePay  ePayments. You can find more information about the switch in ["One-off payments"](https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform#31-one-off-payments-types).
* Flow 3: Merchants can send a One-Off payment, which MobilePay will attempt to automatically reserve, without the user’s confirmation. The long expiration time is not relevant for one-off auto reservation payments. So all is good here 😉.

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`  `POST:/api/providers/{providerId}/agreements/{agreementId}/oneoffpayments`

Parameter: `expiration_timeout_minutes`, `one_off_payment.expiration_timeout_minutes` Current range from 1 to 181440 min, the default was 5 minutes. After the moment we transition to One Platform, the range will be from 1 to 5 minutes.

### 3.3 Description of a one-off with a new agreement

Currently, in Subscriptions, the Description field for one-off which is created together with the new agreement is not mandatory. We are changing that and making it a required field.

:star: **Recommendation:** When creating a one-off payment with a new agreement provide a Description, but if you will forget, do not worry, we will prefill it with "Initial charge".

⚙️ Tech: API endpoint: `POST /api/providers/{providerId}/agreements`

Parameter: `one_off_payment.description`

## **4. Refunds**

### 4.1 Refund up to 365 days
Currently, you can refund payments that were executed up to 90 days in the past. Good news! We will give you an amazingly long period to refund your payments on One Platform - **365 days!**  ⚡️
The new period will be applied only to payments that will be executed on the new platform. 

### 4.2 Refunds description
In Subscriptions, Refunds had no Description, but in the new Recurring setup, this field is present and mandatory. We will prefill it with a simple "Refund" for you.

### 4.3 Refund responses
There will be no callbacks anymore for refunds. All needed information will be handled through API response. 

:star: **Recommendation:** If you use refunds review planned API responses and adjust your integration to handle it. 

⚙️ Tech:

```json title="HTTP 200 - Charge was refunded"
{
  "id": "d5f51369-5c3b-4246-958e-9aefeb2ac5fe",
  "amount": 500,
  "external_id": "AA3F5Y6G4",
  "status_callback_url": "https://merchantProviderUrl.com/refund"
}
```

```json title="HTTP 500 - Something went wrong while trying to refund charge/payment"
{
  "status_code": 100,
  "status_text": "Something went wrong while refunding charge"
}
```
  
``` json title="HTTP 400 - Charge is too old to refund (older than 365 days)"
{
  "status_code": 101,
  "status_text": "Cannot refund a charge older than 365 days"
}
```
 
``` json title="HTTP 400 - Agreement for charge is in wrong status to refund (if accepting and pending)"
{
  "status_code": 102,
  "status_text": "Cannot modify an agreement which is not active"
}
```

```json title="HTTP 400 - Charge is in wrong status to refund (not charged/captured or partially captured)"
{
  "status_code": 103,
  "status_text": "Invalid status"
}
```

```json title="HTTP 400 - Trying to refund higher amount than what is charged/captured"
{
  "status_code": 104,
  "status_text": "Invalid amount, you cannot refund more than the remaining value on this charge/payment"
}
```

## **5. App :iphone:**

### 5.1 Merchant visibility

We will be streamlining the user interface of the app to provide a more focused and efficient experience for you and your customers. As a result, the list of potential merchants will no longer be displayed in the app. However, please be assured that all active and stopped agreements will still be readily visible to the app users.

:star:**Recommendation:** We understand that being present in the potential agreement list can be important to you. Although this feature will be going away, please know that we still value your feedback and aim to provide the best experience for our common customers. 

### 5.2 Merchant information on agreements

Currently, you are able to show your contact information in every agreement for your customer in the agreement Info tab: Website, Customer Support, Self Service, FAQ. From the moment we transition to One Platform, this contact information will no longer be displayed for the user. 

:star:**Recommendation:** We understand that contact information on the agreement can be important to you and your customers. You can always provide an agreement management URL to the user (we call it cancel-redirect in our documentation) which enables them to reach your environment from the app. Or you could add contact information in the agreement description if this is necessary. 

## **6. Payment attachments**

Read more [here](https://developer.mobilepay.dk/docs/subscriptions/invoice#payment-attachments-v2).

### 6.1 PDF generation
 
Currently, you can attach extra information about payments, such as a link to an external PDF file or other environment, payment details, or PDF file generation from payment details. After reviewing this feature and its usage, we have decided to focus more on payment execution and agreement signing success rather than PDF generation capabilities. So, the PDF generation option will no longer be available from the moment we transition to One Platform.

:star:**Recommendation:** We are sorry if this feature was important to you, we hope you will find other ways to send PDF documents to your customers. Your satisfaction is our top priority, and we are here to support you throughout this process.

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `generate_pdf` : true will be ignored from the moment we transition to One Platform.

### 6.2 External URL

Currently, we are providing the possibility for you to upgrade your Subscription payment with extra attachments like External URL. Sadly we most likely will not make it to re-introduce this feature on One Platform 😢. We are really sorry if this will cause any inconvenience for you, but we promise to work on it as soon as possible and introduce the feature right after Launch. 

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `external_attachment_url`

### 6.3 Attachement details

Similarly, as with External URL, we most likely will not make it to re-introduce this feature on One Platform. We are really sorry if this will cause any inconvenience for you, but we promise to work on it as soon as possible and introduce the feature right after Launch. 

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `attachment_details`

## **7. Onboarding** 

### 7.1 Authorisation 

**For merchants**

* If you are using or are planning to start using Subscriptions on the MobilePay platform before transitioning to One Platform. All good, nothing to do for you, just make sure you complete the authorization setup before transitioning to One Platform.
* If by any chance you will need to restart the consent flow, e.g. get a new refresh token after we transit to One Platform, you will have to do that already on One Platform.
* If you are planning to start using Recurring on the New Vipps MobilePay platform, just integrate into the new setup from the beginning. 

Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/).

**For integrators/partners**
* If you are planning to start using Recurring on New Vipps MobilePay platform, just integrate to the new setup from the beginning.
* If you are an existing integrator in Subscriptions on the MobilePay platform and you want to onboard new merchants, we will ask you to change your authorization setup. We are sorry, but from the moment we transition to One Platform, we will not be able to support the existing flow where the merchant grants consent to you. Access and refresh tokens that were issued before the transition will remain valid and continue to work.

- Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/) and [Technical information for partners](https://developer.vippsmobilepay.com/docs/vipps-partner/#technical-information-for-partners).

## **8. Callbacks**
**1. From the Nordic Wallet Launch callbacks will be sent from new DNS address**

Please make sure that these DNS addresses are allowed through your firewall https://developer.vippsmobilepay.com/docs/developer-resources/servers/#vipps-request-servers

**2. Callback changes**

We will stop sending our old callbacks for One-off payment expiration and rejection by user. Instead in both cases merchants will receive this callback:

```
[
{
  "agreement_id": "d230e533-dceb-483b-a9ce-cf99e7851d0e",
  "payment_id": "86957d1c-00f5-4b9c-bd29-dd2e8de082d8",
  "amount": "54.00",
  "currency": "DKK",
  "payment_date": "2023-08-24",
  "payment_type": "OneOff",
  "status": "Cancelled",
  "status_text": "Payment cancelled.",
  "status_code": 60003,
  "external_id": "ed40a2e7-a14b-44c8-a35d-ec015e6d31f0"
}
]
```

Also merchants will start to receive callbacks for merchants initiated cancellation of recurring payment in the following format:

```
[
{
  "agreement_id": "d230e533-dceb-483b-a9ce-cf99e7851d0e",
  "payment_id": "86957d1c-00f5-4b9c-bd29-dd2e8de082d8",
  "amount": "54.00",
  "currency": "DKK",
  "payment_date": "2023-08-24",
  "payment_type": "Regular",
  "status": "Cancelled",
  "status_text": "Payment cancelled.",
  "status_code": 60003,
  "external_id": "ed40a2e7-a14b-44c8-a35d-ec015e6d31f0"
}
]
```

Above callbacks will be sent for each pending recurring payment which is cancelled due to user or merchant initiated cancellation of agreement or cancellation of pending one off payment, due to merchant initiated cancellation of pending agreement.

## **9. FAQ** 

**1. Do I need to reintegrate now to the new solution, APIs?**

No, you don't need to reintegrate to the new solution right now. We are building Facade which will forward all your integration messages to the new solution and return needed responses. The only thing we ask you is to review the upcoming changes outlined above and update your integration accordingly.


**2. How will the migration of data work? In sandbox and production?**

We will migrate 3 years of production data to the new environment. Sandbox data will not be migrated due to different merchant and payment point setups. 


**3. When can I integrate to the Recurring API?**

If you already want to reintegrate (even if this is not mandatory) you can start now! More information [here](https://www.mobilepaygroup.com/partner/new-platform).

- [NEW Recurring API Reference](https://developer.vippsmobilepay.com/api/recurring/): Explore the documentation for the New Recurring API.   

- [NEW Recurring API Documentation](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/): Find detailed information on the New Recurring API.   

- [NEW Recurring Changelogs](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/CHANGELOG/): All notable changes to the Recurring API. 

**4. Does the Recurring API have callbacks?**

We are  working on implementing webhooks for Recurring API, but at the moment, the primary method is [polling](https://developer.vippsmobilepay.com/docs/vipps-developers/common-topics/polling-guidelines/). Although webhooks will eventually be implemented, we don't have a specific timeline for it yet. However, we can guarantee that webhooks will be included with the Launch date.
* [Webhooks technical documentation](https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/)
* [Webhooks endpoint documentation](https://developer.vippsmobilepay.com/api/webhooks/)
* [Polling guidelines](https://developer.vippsmobilepay.com/docs/vipps-developers/common-topics/polling-guidelines/)

 
**5. Will I be able to continue testing my integration in Sandbox?**

Yes, you will be able to test your integration to Subscriptions APIs through merchant test environment on the new platform. There are some actions that you will have to do:

1. You will have to recreate your test data. All test data(agreements, payments, refunds etc.) that was created before will not be migrated from Subscriptions sandbox to Recurring merchant test.
2. Mapp to new merchant, user and sales unit (provider) IDs. New IDs will be created in 2023Q4.
3. You will have to integrate to new and much simpler Access Token API for merchant test environment. Old MobilePay issued access and refresh tokens for sandbox will stop working after the Launch of Nordic Wallet. Client IDs and client secrets for calling new Access Token API will be ready in 2023Q4. [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/)

## **10. Developer Support**

We're Here to Help!
If you have any questions or need assistance with managing your recurring payments, our  Developer support team (developer@mobilepay.dk) is available to provide guidance and support. We're like your trusty sidekick, always by your side, committed to making your payment experience as smooth as a well-oiled machine. Your satisfaction is our priority, and we're committed to making your payment experience as seamless as possible.


*Published 2023-06-05. Updated 2023-09-05.*

## **11. Changelog**

2023-09-05 Added section 8. Callbacks
2023-09-07 Added callback sending DNS address list
