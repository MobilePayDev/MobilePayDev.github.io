---
sidebar_position: 3
---

# Verification

To ensure that your system is ready for production you need to have performed the basic API calls as described below. Once we have verified that the steps has been completed successfully, you are ready to start testing in hidden production.

When your test in hidden production is done, we will verify this and you will be able to go live and offer MobilePay Online to your clients.

## From sandbox to hidden production

Before moving to hidden production you must have performed below actions. All actions are mandatory unless explicitly stated otherwise. Please send an email to developer@mobilepay.dk with data for each point or use this [template](mailto:developer@mobilepay.dk?subject=Sandbox%20verification%20-%20Online&body=Hi%20MobilePay%2C%0D%0A%0D%0AMerchant%0D%0A1.%20Create%20merchant%20-%20externalId%3A%0D%0A2.%20Delete%20merchant%20-%20merchantId%3A%0D%0A%0D%0APayment%0D%0A3.%20Initiate%20payment%20-%20pspReferenceId%3A%0D%0A4.%20Update%20authorization%20attempt%20with%20succeeded%3Atrue%20-%20paymentId%3A%0D%0A5.%20Update%20authorization%20attempt%20with%20succeeded%22%3Afalse%20-%20paymentId%3A%0D%0A6.%20Create%20capture%20-%20paymentId%3A%0D%0A7.%20Create%20cancel%20-%20paymentId%3A%0D%0A8.%20Create%20refund%20-%20paymentId%3A%0D%0A%0D%0AApp%20switch%0D%0A9.%20We%20_have_%2F_have%20not_%20tested%20a%20switch%20between%20MobilePay%20and%20merchant%20app.%20Reason%3A%0D%0A%0D%0ACallbacks%0D%0A10.%20Received%20card%20data%20callback%20-%20paymentId%3A%0D%0A11.%20Received%20failed%20payment%20callback%20(not%20required)%20-%20paymentId%3A%0D%0A%0D%0ASCA%20implementation%0D%0A12.%20Accept%20payment%20with%20Tokenized%20Visa%20or%20Mastercard%20test%20card%20-%20paymentId%3A%0D%0A13.%20We%20_have_%2F_have%20not_%20implemented%20DA%20for%20Dankort.%20Reason%3A%0D%0A14.%203DS%20flow%20-%20paymentId%3A%0D%0A).

**Merchant**

1. Create merchant: `POST /api/v1/merchants` - externalId
2. Delete merchant: `DELETE /api/v1/merchants/{merchantId}` - merchantId

**Payment**

3. Initiate payment: `POST /api/v1/payments` - pspReferenceId
4. Update authorization attempt with `succeeded:true`:  `PATCH /payments/{paymentId}/authorizationattempts/{authorizationAttemptId}` - paymentId
5. Update authorization attempt with `succeeded":false`: `PATCH /payments/{paymentId}/authorizationattempts/{authorizationAttemptId}` - paymentId
6. Create capture: `POST /api/v1/payments/{paymentId}/captures` - paymentId
7. Create cancel: `POST /api/v1/payments/{paymentId}/cancels` - paymentId
8. Create refund: `POST /api/v1/payments/{paymentId}/refunds` - paymentId

**App switch**

9. If you offer your merchants to use apps you must test a switch between MobilePay app and a merchant app.

**Callbacks**

10. Received card data callback - paymentId
11. Received failed payment callback (not required) - paymentId

**SCA implementation**

12. Accept payment with Tokenized Visa or Mastercard test card in the test app - paymentId
13. Implemented delegated authentication for Dankort. If you have not implemented this please explain why.
14. Test 3DS flow with "succeeded":false "reasonCode":1008: `PATCH /payments/{paymentId}/authorizationattempts/{authorizationAttemptId}` - paymentId

We will verify the above requests and move you to production. If you have not yet supplied us with a publickKey for production, please request a secure link for uploading it.

:::info PLEASE NOTE
Registration of publicKey in production takes longer than in sandbox. So please provide us with the production key well in advance.
:::

## From hidden production to live

### Slim certification

Before you can offer your MobilePay Online solution for your clients we will perform a 'slim certifcation' and supply merchant documenation. The 'slim certification' is performed in production and is required before you can go live.

#### Slim certification - test webshop

In order to complete the slim certification you must supply a test web shop in production. The test web shop should contain items for around 1 DKK for which we can test various flows. We will test the following:

1. Dual device and single device:
    * Happy day
    * Payment expire
    * User reject
2. Let request expire and see succesfull failedPaymentCallback (only if failedPaymenCallback is utilized)
3. Accept payment with a not working card (e.g. no funds) and check that a PATCH on authorisationAttempt is made with succeed: false with a meaningfull responseCode
4. We will ask you to capture and afterwards refund one of the test payments (the rest of the payments should be cancelled or expire)
5. Confirm implementation of 3DS, VTS and Dankort SCA implementation
6. Go through merchant documentation. Please see below for details.

### Merchant documentation

The documentation towards your customers, the merchants, must - at least - tell about

* Merchant registration*: How to setup MobilePay Online including as minimum information about:
  * Name displayed in the app to the end user
  * LogoUrl linking to an image file displaying the merchant logo in the app to the end user
    * 250x250 pixels
    * Hosted using a secure HTTPS connection
    * PNG or JPG
    * Set content-type in the HTTP header using *MIME* types e.g. *image/png* or *image/jpeg*
* Appswitch feature: How the solution is used from a native app (API enabled)
* Checkout feature: How to setup and use Checkout
* Common pitfalls of 'context switch' on client side
  * Scenario A: *‘browser A’ -> MP App -> ‘browser B’*.
The Merchant return page should not rely on any sort of session object (e.g. a cookie), to recognise the returning customer. It should solely rely on data given in the redirect (redirectFromMobilePayUrl).
  * Scenario B.: *‘browser' -> MP App’*.
The Merchant should not rely on the customer returning client side. Rather they should process the purchase when the PSP´s server-to-server callback is received, or after getting confirmation on a status endpoint.

## Production

We will inform you once the certification is completed, and you will be able to go live with your implementation.

Ensure to check step 4. Production for guidance and recommendation on production setup as well as mandatory implementation.
