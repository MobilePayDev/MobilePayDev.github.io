---
sidebar_position: 13
---
import Launch from '/docs/shared-blocks/_launch.mdx';

# 💙🧡 Preparation for the facade period
 
 Your existing Subscriptions APIs will continue to work until the end of 2024 through facade we build. 
 While our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the Nordic Wallet Launch 🚀. To ensure a smooth experience, we ask you to review the upcoming changes outlined below and update your integration accordingly. We strive to keep you informed every step of the way and support you throughout this process. Thank you for being a part of our journey toward creating the best and most user-friendly payment wallet in the Nordics. :orange_heart: :blue_heart:

:::danger Important info
 To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you need to do is ensure that you have adjusted your integration to the changes mentioned below before 12th of martch, and we'll take care of everything else. If you have any questions, feel free to reach out to us at developer@vippsmobilepay.com
:::

**Timeline for existing subscriptions merchants and partners**

[![timeline](/img/timeline.png)](/img/timeline.png)

- **NOW** Take a look at the change list here and implement changes if needed for the Facade period 
- **2024Q1** Be ready with adjustments needed for your integration for the Facade period.
- **2024Q1 March 12th** We finally launch Nordic Wallet Launch in Denmark 🇩🇰 and migrate all Danish merchants
- **2024** Plan and integrate new [Recurring API](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/) 
- **2025Q1** Be ready with your API integration to the Recurring API. 🧡 💙 The facade will be switched off. 

:::info Prepare for launch
<Launch />
:::

## **1. Agreements**
### 1.1 Agreement request expiration period
We know that you have various ways to send agreement requests to your customer, such as from your website, through customer self-service portals, by email, printed as a QR on paper invoices, and while chatting on the phone. Some of these scenarios require that the agreement request is valid for a very long time, like when it's sent by email or printed as a QR on a paper invoice. After Nordic Wallet Launch, we will reduce the agreement signing period to 10 minutes. Please note, All agreements with longer expiration time will be expired on Nordic Wallet Launch day. To ensure the security and privacy of our users' data, all user redirects within our system must utilize HTTPS.

 
:star: **Recommendation:** If you want to give more than 10 minutes for your customer to sign the agreement, we recommend that you create a middle layer of communication on your private infrastructure. This means that when the user initiates agreement signing from your email or scans the QR on a paper invoice, they should be redirected to your environment. At that moment, you can create the agreement request in Vipps MobilePay and redirect the customer to us. You will be in control of a bigger part of the agreement signing flow, providing more flexibility for you to manage the process.  In addition, you will have no need to send us all potential agreement requests, even if they will never be initiated by the customer. This means less data send to us, and less GDPR related questions 😉

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `expiration_timeout_minutes`. The current range is from 1 to 181440 minutes, the default was 5 minutes. After Nordic Wallet Launch, the expiration time will always be 10 minutes.

### 1.2 Agreement deletion validations
No one likes when an agreement gets canceled, right? We do not like it either. The Subscriptions API offers you the option to prevent the customer from canceling an agreement for up to 24 hours from the time it's signed. From the Nordic Wallet Launch, this feature will be unavailable.  

:star: **Recommendation:** We will help you to provide the best payment experience and keep the customer happy so that canceling an agreement will not come into his mind. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `retention_period_hours` will be ignored from the Nordic Wallet Launch.

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

### 1.4 Agreement cancellation by merchant

When merchant tries to cancel agreement, which has payments in reserved state - agreement gets cancelled, payments stay in reserved state. This is changing from Nordic Wallet Launch. When merchant cancels agreement all reserved payments will be canceled too. 

:star: **Recommendation:** Capture reserved payments if needed before calceling the agreement. This applies just if you have agreement cancelation implimented from your environment and you are using payments with reservation. 

## **2. Recurring payments**

### 2.1 Payments visible 8 days in advance

We want to empower you with transparency and flexibility when it comes to your recurring payments. Currently, your customer can view upcoming payments in the app up to 8 days in advance, regardless of whether the payment was sent 30 or 60 days earlier. However, from Nordic Wallet Launch, we're excited to announce that customers will be able to see your upcoming payment 35 days in advance if you send it that early.

:star: **Recommendation:** If 35 days of payment visibility in the app is too long for you, we recommend sending a payment closer to the due date. 

### 2.2 Update existing payment

Error in the payment you sent to your customer?  From Nordic Wallet Launch, we ask you to update existing payments in a slightly different way. 

:star: **Recommendation:** We recommend that you cancel existing payments and create brand-new ones in cases when payment information needs to be updated.

⚙️ Tech: API endpoint: `PATCH:/api/providers/{providerId}/agreements/{agreementId}/paymentrequests/{paymentId}` will be unavailable from Nordic Wallet Launch.

### 2.3 Push message for the user

Currently, your customers are receiving push messages 1 day in advance about upcoming recurring payments. You have the option to manage this notification through Subscription APIs. From Nordic Wallet Launch, we are removing this push notification for your customers, and push management will stop being relevant, too. But do not worry, customers choosing to get those push messages will be informed about executed payments instead; in addition to notifications about all failed payments where they need to change a card, increase funds, etc. 

:star: **Recommendation:** Sit back and relax, we will make sure that all payments are executed successfully. 

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`

Parameter: `disable_notification_management`, `notifications_on` will be ignored from Nordic Wallet Launch.

### 2.4 Invalid recurring payments
This one is a bit more technical. ⚙️ Currently, we are saving every payment request you send to us, even Invalid ones. You can check the whole status diagram [here](https://developer.mobilepay.dk/docs/subscriptions/subscriptions-payments#payment-state-diagram). From Nordic Wallet Launch, we will stop storing these requests. This will not impact payment validation or payment execution logic. You will still get callbacks about payment status changes.
 

## **3. One-off payments**

### 3.1 One-off payments types

One-off payments in Subscriptions are used in 3 different ways:
* [Flow 1](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-1--one-off-payment-with-a-new-agreement): Create a new Agreement with an initial One-Off Payment. ✅ Will continue. 
* [Flow 2](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-2---one-off-payment-on-an-existing-agreement): Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement. ❌ Will be terminated. 
* [Flow 3](https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-3---one-off-with-auto-reserve): Merchants can send One-Off payment, which MobilePay will attempt to automatically reserve, without user’s confirmation. ✅ Will continue. 

We reevaluated all our product packages, and usage of this feature and we decided, that from Nordic Wallet Launch, flow 2 will be moved from Subscriptions (Recurring) product to another Vipps MobilePay product - ePayment! 🍀 We are planning to keep flows 1 and 3 in the Subscriptions product and also in the Recurring product. Basically, all payments which are merchant initiated (MIT) and do not require Strong Customer Authentication (SCA) stay in Subscriptions and also Recurring. All payments where SCA is needed will be in ePayment product. 

:star: **Recommendation:** If you want to continue charging your customers with payments where SCA is needed, please reintegrate these types of payments to Vipps MobilePay ePayment.

### 3.2 One-off expiration period

Similarly, as with agreements, we are aligning the expiration period for one-off payments. 
From Nordic Wallet Launch, the expiration timeout for:
- one-off with a new agreements will always be 10 minutes. 
- one-off for an existing agreement will always be 1 minutes.
All one-offs with longer expiration time will be expired on Nordic Wallet Launch day.

:star: **Recommendation:**
* Flow 1: Create a new Agreement with an initial One-Off Payment. Just set the same expiration period subtracting for the one-offs as you set for agreements. You can read about changes in agreements [here](https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform#11-agreement-request-expiration-period).
* Flow 2: Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement. This type of flow will be moved to Vipps MobilePay  ePayments. You can find more information about the switch in ["One-off payments"](https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform#31-one-off-payments-types).
* Flow 3: Merchants can send a One-Off payment, which MobilePay will attempt to automatically reserve, without the user’s confirmation. The long expiration time is not relevant for one-off auto reservation payments. So all is good here 😉.

⚙️ Tech: API endpoint: `POST:/api/providers/{providerId}/agreements`  `POST:/api/providers/{providerId}/agreements/{agreementId}/oneoffpayments`

Parameter: `expiration_timeout_minutes`, `one_off_payment.expiration_timeout_minutes` Current range from 1 to 181440 min, the default was 10 minutes. After Nordic Wallet Launch, the expiration time will always be:
- 10 minutes for one-off when it's with new agreement
- 1 minutes for one-off created when it's for an existing agreement

### 3.3 Description of a one-off with a new agreement

Currently, in Subscriptions, the Description field for one-off which is created together with the new agreement is not mandatory. We are changing that and making it a required field.

:star: **Recommendation:** When creating a one-off payment with a new agreement provide a Description, but if you will forget, do not worry, we will prefill it with "Initial charge".

⚙️ Tech: API endpoint: `POST /api/providers/{providerId}/agreements`

Parameter: `one_off_payment.description`

## **4. Refunds**

In general: it is possible to do GET requests for pre-launch refunds. Furthermore, it is also possible to make refunds for pre-launch payments. Please note: We can only handle 30 days backward for pre-launch payments, whereas we can handle 365 days backward on the new platform, if the payment is completed on the new platform)  GET requests and refunds (up to 30 days) can be made for payments executed on the existing MobilePay platform  

### 4.1 Refund up to 365 days
Currently, you can refund payments that were executed up to 90 days in the past. Good news! We will give you an amazingly long period to refund your payments on One Platform - **365 days!**  ⚡️
The new period will be applied only to payments that will be executed on the new platform after Nordic Wallet Launch. 
- Payments made on the old platform starting from March 12th 2024 have a refund window of 30 days.
- Payments made on the new platform have a refund window of 365 days.

### 4.2 Refunds description
In Subscriptions, Refunds had no Description, but in the new Recurring setup, this field is present and mandatory. We will prefill it with a simple "Refund" for you.

### 4.3 Refund responses
There will be no callbacks anymore for refunds after Nordic Wallet Launch. All needed information will be handled through API response.  

Note: For payments made before Nordic Wallet Launch, status_callback_url will still be required and callbacks will still be sent. For payments made after Nordic Wallet Launch, the Facade will return the status_callback_url, although it will not be utilized in the backend logic since callbacks for refunds will no longer be present. 

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
  "StatusCode": 100,
  "StatusText": "Something went wrong while refunding charge"
}
```
  
``` json title="HTTP 400 - Charge is too old to refund (older than 365 days)"
{
  "StatusCode": 101,
  "StatusText": "Cannot refund a charge older than 365 days"
}
```
 
``` json title="HTTP 400 - Agreement for charge is in wrong status to refund (if accepting and pending)"
{
  "StatusCode": 102,
  "StatusText": "Cannot modify an agreement which is not active"
}
```

```json title="HTTP 400 - Charge is in wrong status to refund (not charged/captured, partially captured or fully refunded)"
{
  "StatusCode": 103,
  "StatusText": "Invalid status"
}
```

```json title="HTTP 400 - Trying to refund higher amount than what is charged/captured"
{
  "StatusCode": 104,
  "StatusText": "Invalid amount, you cannot refund more than the remaining value on this charge/payment"
}
```

## **5. App :iphone:**

### 5.1 Merchant visibility

We will be streamlining the user interface of the app to provide a more focused and efficient experience for you and your customers. As a result, the list of potential merchants will no longer be displayed in the app. However, please be assured that all active and stopped agreements will still be readily visible to the app users.

:star:**Recommendation:** We understand that being present in the potential agreement list can be important to you. Although this feature will be going away, please know that we still value your feedback and aim to provide the best experience for our common customers. 

### 5.2 Merchant information on agreements

Currently, you are able to show your contact information in every agreement for your customer in the agreement Info tab: Website, Customer Support, Self Service, FAQ. From Nordic Wallet Launch, this contact information will no longer be displayed for the user. 

:star:**Recommendation:** We understand that contact information on the agreement can be important to you and your customers. You can always provide an agreement management URL to the user (we call it cancel-redirect in our documentation) which enables them to reach your environment from the app. Or you could add contact information in the agreement description if this is necessary. 

## **6. Payment attachments**

Read more [here](https://developer.mobilepay.dk/docs/subscriptions/invoice#payment-attachments-v2).

### 6.1 PDF generation
 
Currently, you can attach extra information about payments, such as a link to an external PDF file or other environment, payment details, or PDF file generation from payment details. After reviewing this feature and its usage, we have decided to focus more on payment execution and agreement signing success rather than PDF generation capabilities. So, the PDF generation option will no longer be available from Nordic Wallet Launch.

:star:**Recommendation:** We are sorry if this feature was important to you, we hope you will find other ways to send PDF documents to your customers. Your satisfaction is our top priority, and we are here to support you throughout this process.

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `generate_pdf` : true will be ignored from Nordic Wallet Launch.

### 6.2 External URL

Currently, we are providing the possibility for you to upgrade your Subscription payment with extra attachments like External URL. Sadly we most likely will not make it to re-introduce this feature from the moment of Nordic Wallet Launch 😢. We are really sorry if this will cause any inconvenience for you, but we promise to work on it as soon as possible and introduce the feature right after Launch. 

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `external_attachment_url`

### 6.3 Attachement details

Similarly, as with External URL, we most likely will not make it to re-introduce this feature from the moment of Nordic Wallet Launch. We are really sorry if this will cause any inconvenience for you, but we promise to work on it as soon as possible and introduce the feature right after Launch. 

⚙️ Tech: API endpoint:  `PUT:/api/providers/{providerId}/payments/{paymentId}/attachment`

Parameter: `attachment_details`

## **7. Onboarding** 

### 7.1 Authorisation 

**For merchants**

* If you are using or are planning to start using Subscriptions on the MobilePay platform before transitioning to One Platform. All good, nothing to do for you, just make sure you complete the authorization setup before Nordic Wallet Launch.
* If by any chance you will need to restart the consent flow, e.g. get a new refresh token after Nordic Wallet Launch, you will have to do that already though new Vipps MobilePay platform.
* If you are planning to start using Recurring on the New Vipps MobilePay platform, just integrate into the new setup from the beginning. 

Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/).

**For integrators/partners**
* If you are planning to start using Recurring on New Vipps MobilePay platform, just integrate to the new setup from the beginning.
* If you are an existing partner in Subscriptions on the MobilePay platform and you want to onboard new merchants, we will ask you to change your authorization setup. We are sorry, but from the Nordic Wallet Launch, we will not be able to support the existing flow where the merchant grants consent to you. Access and refresh tokens that were issued before the transition will remain valid and continue to work. To get providerId for new onboarded merchants, you can call `GET:/api/merchants/me` with the new authorization token and `Merchant-Serial-Number` header. 

- Read more about [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/) and [Technical information for partners](https://developer.vippsmobilepay.com/docs/vipps-partner/#technical-information-for-partners).


## **8. Settlements**


### 8.1. From the Nordic Wallet Launch all sales units (payment points) will be switched to daily settlements

Currently you were able to select how to receive settlements: daily or instant. After NWL all sales units will be switched to receive daily settlements. Instant transfers will stay as a functionality, but it will be renamed to Single payment settlements, which represents the functionality in better way. Furthermore, functionality will be for an extra fee.  With Single payment settlements every payment will be settleded separately (not bundled up) and you will receive it in 1 days after payment was executed. 

:star:**Recommendation:** If you need to have your payments settled separately, log in to new Merchant Portal after NWL and select Single payment settlement functionality. 


### <s>8.2. Settlement time changes</s>

<s>Currently your money is settled 1 day after payments were executed, after NWL we will settle you money bit later - 2 days after payments were executed. </s>

<s>:star:**Recommendation:**  your feedback is very important for us, let us know if you have a need to get settlements faster.</s>


### <s>8.3. Gross Settlements</s>

<s>Currently we are sending you gross settlements (full amount of the payments) and later we were issueing you with an invoice for service fees. After NWL we will change how we are doing settlements and you will receive net value settlement where all necessary fees are already deducted. </s>

## **9. Other**

### 9.1. From the Nordic Wallet Launch callbacks will be sent from new DNS address

Please make sure that these DNS addresses are allowed through your firewall https://developer.vippsmobilepay.com/docs/developer-resources/servers/#vipps-request-servers
Above DNS addresses will also be used to call token retrieval endpoint for merchants who are using OAuth2 authentication.

### 9.2. Callback changes for recurring and one-off payments

 


We will stop sending our old callbacks for one-off payment expiration and rejection by users from Nordic Wallet Launch. 

Instead we will start sending new callback for both recurring and one-off payment:

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
  "status_code": 70003,
  "external_id": "ed40a2e7-a14b-44c8-a35d-ec015e6d31f0"
}
]
```
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
  "status_code": 70003,
  "external_id": "ed40a2e7-a14b-44c8-a35d-ec015e6d31f0"
}
]
```

Above callbacks will be sent in following cases:

* For each pending recurring payment which is cancelled due to users' initiated cancellation of agreement
* For each pending recurring payment which is cancelled due to merchants' initiated cancellation of agreement
* For merchants' initiated cancellation of pending recurring payment
* For each one-off payment expiration
* For each one-off payment rejection by user
* For each cancellation of pending one-off payment, due to merchants' initiated cancellation of pending agreement

### 9.3. Callbacks for non reintegrated merchants after NWL

These are the callbacks we will be sending for non reintegrated merchants.

Agreement callbacks (no changes):


| Status       | Status code      | Status text                                   |                           
|--------------|------------------|-----------------------------------------------|
| Accepted     | 0                | The agreement has been accepted.              |
| Expired      | 40001            | Pending agreement expired.                    |
| Rejected     | 40000            | Rejected by user.                             |
| Canceled     | 40002            | The agreement was canceled by the user.       |                      
| Canceled     | 40003            | The agreement was canceled by the merchant.   |                                          

Recurring payment callbacks:

| Status        | Status code | Status text                                               |  Callback sending condition                   
|---------------|-------------|-----------------------------------------------------------|------------------------------
| Cancelled     | 70003       | Payment cancelled.                                        | Pending payment cancelled due to user cancelling an agreement
|               |             |                                                           | Pending payment cancelled due to merchant cancelling an agreement
|               |             |                                                           | Merchants' initiated cancellation of pending recurring payment
|               |             |                                                           |    
| Executed      | 0           | null                                                      | Payment succesfully executed on due date 
| Failed        | 50000       | Payment failed to execute during the due date             | Payment failed to execute during the due date
| Declined      | 70001       | Payment amount is 5 times higher than agreement amount.   | Payment batch request contains a payment which amount is 5 times higher than     
|               |             |                                                           | agreement's amount. Applicable when agreement has an amount more than 0
| Declined      | 50003       | Declined by system: Agreement is not in \"Active\" state. | Payment batch request contains a payment for non-active agreement 
| Declined      | 50004       | Declined by system: Found duplicates for the same DueDate and AgreementId/ExternalId. | Payment batch request contains a duplicate payment with the same DueDate and AgreementId/ExternalId
| Declined      | 50006       | Declined by system.                                       | Unspecified error when processing payment from payment batch request


One-off payment sent with an agreement:

| Status        | Status code      | Status text                                               |  Callback sending condition                   
|---------------|------------------|-----------------------------------------------------------|------------------------------
| Cancelled     | 70003            | Payment cancelled.                                        | Pending agreement with one-off payment has expired
|               |                  |                                                           | Pending agreement with one-off payment was rejected by user
|               |                  |                                                           | Merchant cancels pending agreement with one-off payment
|               |                  |                                                           | Merchant cancels active agreement and one-off payment is Reserved
|               |                  |                                                           | Merchant cancells Reserved one-off payment
|               |                  |                                                           |    
| Reserved      | 0                | Payment successfully reserved.                            | Agreement with one-off payment was accepted and payment was reserved


Autoreserve one-off payment:

| Status        | Status code      | Status text                                               |  Callback sending condition                   
|---------------|------------------|-----------------------------------------------------------|------------------------------
| Cancelled     | 70003            | Payment cancelled.                                        | Merchant cancells autoreserve one-off payment in Requested or Reserved status
|               |                  |                                                           | Merchant cancels active agreement and one-off payment is Reserved or Requested
|               |                  |                                                           | Payment expires
|               |                  |                                                           |
| Reserved      | 0                | Payment successfully reserved.                            | Payment reserved
| Requested     | 50013            | Automatic reservation failed. User action is needed.      | Reservation failed

In the new platform reservation failure and expiration callbacks are sent only after payment expiration with few seconds delay between each other.

### 9.4. Callbacks for reintegrated merchants

If you are planning to reintegrate, you will have to start using new Webhook solution https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/
By default after integrating with new Webhook solution, you will still receive old **payment** callbacks to your old payment callback URL and there is no possibility to change callback url or authentication method for old integration. This means that you will receive both old callbacks and new webhooks. Once you have integrated towards Webooks and no longer rely on old callbacks, please notify us and we will turn them off.

Here you can find a payload and other useful information about new Webhooks https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#webhooks-integration

### 9.5. Error messages

We are making adjustments to error responses, specifically related to `error_description.message` and `error_description.error_type`. Some values will remain unchanged, some will be modified, and new validations will be introduced. Some messages may be less explicit than before, as they are generated directly from the backend and not specifically tailored for exact app branding (MobilePay or Vipps) responses.

Example:
```
{
   "error": "BadRequest",
   "error_description": {
      "message": "The field 'phoneNumber' has an invalid format for a phone number, provided value: '44444444444444'",
      "error_type": "InputError",
      "correlation_id": "ef928510-ae19-4fe7-ae1e-76b43de202f5",
      "error_code": null,
      "localized_message": "A technical error occurred."
   }
}
```

Some field names, like `mobile_phone_number`, will undergo changes; for instance, it will be referred to as `phoneNumber`. If clarity is needed, refer to [Recurring documentation](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/) for field specifications.


:star: **Recommendation:** Avoid relying on specific values in `error_description.message` and `error_description.error_type`. Update your error handling processes to ensure flexibility in these two fields.

### 9.6 From the Nordic Wallet Launch Merchant's server must be TLS 1.2

Please make sure that your servers hosting the token endpoint for callbacks supports TLS 1.2. If not, we will not be able to send callbacks back to you.

## **10. Test**
The first version of the new test environment is ready for the Subscriptions facade. All features except Refund is available.

### 10.1. Test credentials
**Test merchant**: Find a guide to create test merchant [here](https://developer.vippsmobilepay.com/docs/developer-resources/portal/#how-to-create-a-test-sales-unit). The test credentials consist of a client id, client secret and subscriptions key. 

**Test user**: Find a guide to create test users [here](https://developer.vippsmobilepay.com/docs/test-environment/#test-users) 

*For partners*: Please contact partner@vippsmobilepay.com to request a DK or FI test merchant and user.

Please note: If you want to reuse your Subscriptions test data you will need to recreate your test data. Please note that all test data, including payments, refunds, and so on, created on the old platform will not be migrated from the sandbox to the merchant test environment.

### 10.2. Authentication 

You will  have to integrate with the new and simplified Access Token API designed for the merchant test environment. The old MobilePay OpenId consent flow for the sandbox will cease to function. [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/).

### 10.3 Headers and endpoints
You must include these headers for all requests to the API
```
-H 'Authorization: Bearer {JWT}' \
-H 'Content-Type: application/json' \
-H 'Ocp-Apim-Subscription-Key: {subscriptions key}' \
-H 'Merchant-Serial-Number: {MSN}'
```
The endpoints have not changed. Please find them in the [API specification](https://developer.mobilepay.dk/api/subscriptions).

### 10.4 Initiate test
1. Fetch test merchant and test use
2. [GET access token](https://developer.vippsmobilepay.com/api/access-token/#tag/Authorization-Service/operation/fetchAuthorizationTokenUsingPost)
3. [GET subscriptionsProviderId](https://developer.mobilepay.dk/api/subscriptions#tag/Subscriptions-Merchant/paths/~1api~1merchants~1me/get)
4. [Create new agreement](https://developer.mobilepay.dk/api/subscriptions#tag/Subscriptions/paths/~1api~1providers~1%7Bproviderid%7D~1agreements/post)

 ## **FAQ** 

### **1. Do I need to reintegrate now to the new solution, APIs?**

No, you don't need to reintegrate to the new solution right now. We are building Facade which will forward all your integration messages to the new solution and return needed responses. The only thing we ask you is to review the upcoming changes outlined above and update your integration accordingly. 

### **2. How will the migration of data work?**

Vipps MobilePay will make sure that all needed data is migrated from Subscriptions to Recurring:
- All active merchants and their payment points will be migrated to the new system. The primary identifiers are `provider_id`, `agreement_id`, `payment_id`, and `refund_id`. These remain unchanged; there is no changes there.
 
- All partners/integrators will be created in the new system.
  
- We will make sure that proper connection of merchant and partner/integrator is maintained on the new setup.
  
- We will migrate all active agreements. There is no need to recreate agreements from NewWalletLaunch neither from reintegration.
  
- All payment requests with due dates will be migrated and executed on new system.

- We will migrate 3 years of historical production data (agreements, payment requests, refunds) to the new environment.
  
Sandbox data will not be migrated due to different merchant and payment point setups. 

If you have a need to have a list of old and new ID's, we have an endpoint for obtaining agreements that offers both `ExternalId` and `AgreementUuid`.
Please refer to the [NEW Recurring API endpoint description](https://developer.vippsmobilepay.com/api/recurring/) - You can utilize `Agreement-v3-endpoints ListAgreementsV3`  endpoint for mapping.  

**To be clear:**

-Facade merchants: There will be not changes to the identifiers. The facade api will return the exact same identifiers.


Below you can find information for when merchants will re-integrate to the [NEW Recurring API Reference](https://developer.vippsmobilepay.com/api/recurring/)


**`providerid`**

There is no provider_id in the calls to Recurring API endpoints.

**`agreements`**

⚙️ Docs on agreements [here](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#agreements
):

GET Agreements endpoint
- Path parameters pageNumber and pageSize are no longer needed. Instead, use query parameter createdAfter.

GET Agreement endpoint
- Merchants can call GET agreement using either `agr_xxxxxx` or the `uuid`.
- We will return both `agreementId` ( "agr_xxxxxxx" format ) and a `uuid`.

POST Agreement endpoint
- Field country_code becomes countryCode, and is not required.
- Field external_id becomes externalId, and is not nullable.
- Field description becomes productDescription, and has a maximum of 100 characters.
- Field frequency becomes interval. It is composed of 2 required fields :
    - unit. Type : String. Value has to be among :  "YEAR", "MONTH", "WEEK", "DAY".
    - count. Type : Int. Value has to be between 1 and 31.
- Field mobile_phone_number becomes phoneNumber, and has a maximum of 15 characters.
- Field one_off_payment becomes initialCharge.
- Field plan becomes productName, and has a maximum of 45 characters.
- The following fields are not needed anymore :
    - expiration_timeout_minutes
    - links
    - next_payment_date
    - retention_period_hours
    - disable_notification_management
    - notifications_on
- The following fields are new :
    - campaign
    - pricing. Required field. Fields currency and amount are moved into this field.
    - isApp
    - merchantAgreementUrl. Required field.
    - merchantRedirectUrl. Required field.
    - scope
    - skipLandingPage

**`charges`**

⚙️ Docs on charges [here](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#charges):
- id stays the same. charge.id = paymentId. chargeId = paymentid.

GET Charges endpoint
- New query parameter : status. It filters by status of the charge.

New endpoint : POST Charge endpoint

POST Charges endpoint :
- Amount has to be equal or superior to 100.
- Description has between 1 and 45 characters.
- Field due_date becomes due.
- Field grace_period_days becomes retryDays. Required field. Value is between 0 and 14.
- Field next_payment_date is no longer needed.
- New fields :
    - transactionType. Required field. Type : String. Value has to be "DIRECT_CAPTURE" or "RESERVE_CAPTURE".
    - orderId. Type : String.

**`refunds`**

⚙️ Docs on refunds [here](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#refund-a-charge):
- Merchant will need to call the GET charge endpoint using the id of the charge refunded.
- Refunds won't have their own ids.
- Fields "amount" and "description" are required.
- No externalId and no status_callback_url are needed.
- Amount has to be equal or superior to 100.

### **3. When can I integrate to the Recurring API?**

If you already want to reintegrate you can start now!

It is still the same team as before that is here to assist you with technical questions. Just send an email to developer@vippsmobilepay.com, and we'll be happy to help! 😊

- [NEW Recurring API Reference](https://developer.vippsmobilepay.com/api/recurring/): Explore the documentation for the New Recurring API.   

- [NEW Recurring API Documentation](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/): Find detailed information on the New Recurring API.   

- [NEW Recurring Changelogs](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/CHANGELOG/): All notable changes to the Recurring API.




### **4. Does the Recurring API have callbacks?**
Yes! [webhooks](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#webhooks-integration)
* [Webhooks technical documentation](https://developer.vippsmobilepay.com/docs/APIs/recurring-api/recurring-api-guide/#webhooks-integration
)
* [Webhooks endpoint documentation](https://developer.vippsmobilepay.com/api/webhooks/)
Another method is [polling](https://developer.vippsmobilepay.com/docs/knowledge-base/polling-guidelines/).    
* [Polling guidelines](https://developer.vippsmobilepay.com/docs/knowledge-base/polling-guidelines/))

Callbacks will work on the facade API.  

 
### **5. Will I be able to test the new Recurring API?**
You will be able to test the new Recurring API through the merchant test environment on the new platform. If you want to test the Mobilepay Subscriptions facade instead please [read here](https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform#10-test). 

Please note:
1. If you want to reuse your Subscriptions test data you will need to recreate your test data. Please note that all test data, including agreements, payments, refunds, and so on, created before will not be migrated from the Subscriptions sandbox to the Recurring merchant test environment.
2. You will also have to integrate with the new and simplified Access Token API designed for the merchant test environment. The old MobilePay-issued access and refresh tokens for the sandbox will cease to function after the launch of Nordic Wallet. [Access token API guide](https://developer.vippsmobilepay.com/docs/APIs/access-token-api/)

The test environment is called Merchant Test (MT) and is now open for test. MT currently only allows Norwegian phone numbers, currency and merchants, but you can test the API and payment flow. Please see the details of [limitations of the test environment](https://developer.vippsmobilepay.com/docs/test-environment/)

In order to request access to the test environment, please use the following links:

- [Partners](https://www.vippsmobilepay.com/partner/become-a-partner)
- [Merchants](https://vippsmobilepay.com/merchant-test-account-sign-up)

We will send you an e-mail with the information you need to get started. This is also needed even though you are an existing MobilePay integrator or merchant, since we need your information registered on our new joint platform.

### **6. How will I find data about my payments?**

We will migrate 3 years of historical data (agreements, payment requests, refunds). You will be able to access that data though:
1. API GET calls. For new and historical data.
3. Though [Merchant Portal](https://portal.vipps.no/register). Just for new transactions done after Nordic Wallet Launch.
4. Integrate it into the [Report API](https://developer.vippsmobilepay.com/docs/APIs/report-api/). Read more [here](https://developer.vippsmobilepay.com/docs/mp-migration-guide/reporting/) about transition period.

### **7. I am using Transaction Reporting API, what should I do?**

Sadly, we are not builing any facade for Transaction reporting API. We are asking you to reintegrate to alternative solution [Report API](https://developer.vippsmobilepay.com/docs/APIs/report-api/). Read more [here](https://developer.vippsmobilepay.com/docs/mp-migration-guide/reporting/) about transition period.  
### **8. Will users get a new app?**

Yes, all app users will need to download the new app versions; this will be a mandatory upgrade on Nordic Wallet Launch day. We will ensure that users do not need to create new accounts; their profiles will be seamlessly migrated to the new platform. However, since users need to download the new app version, there is an increased risk of expired payments around 12th of march. 

### **9. What cool features are there ahead?**

There are several exciting features on the horizon. For instance, there's profile sharing, allowing merchants to request users to share various information from the app, thereby streamlining the signup process. Additionally, we have upcoming campaigns, improved refund processes, enhanced capture capabilities, increased limits, expansion into three new markets, and various other flexibility improvements.
 


## **Developer Support**

We're Here to Help!
If you have any questions, our  Developer support team (developer@vippsmobilepay.com) is available to provide guidance and support. We're like your trusty sidekick, always by your side, committed to making your payment experience as smooth as a well-oiled machine.  



## **Changelog**

2024-05-03 Information about test.

2024-03-01 Removed 8.3. Gross settlement type stays in use after NWL. 

2024-02-29 Removed 8.2. Settlement time does not change for Denmark and Finland.

2024-02-19 Updated 1.1 and 3.2. Default expiration time changed to 10 min. 

2024-01-08 Added new section 1.4 Agreement cancelation by merchant. Recommendations how to test the facade added. 

2023-11-28 FAQ #6 and #7 updated regarding Report API

2023-11-22 FAQ #2 updated

2023-09-05 Added section 8. Callbacks

2023-09-07 Added callback sending DNS address list

2023-09-20 FAQ "How will I find data about my payments?" updated; FAQ "I am using Transaction Reportin API, what should I do?" added

2023-10-05 New section "Settlements" with 3 new items added 

2023-10-09 Changed callback status codes from "6000..." to "7000..."

2023-10-11 Section 9 renamed to Other and new topic added 9.3 Error messages. 

2023-10-11 Clarification, that OAuth2 token retrieval requests will be sent from new DNS address
