---
sidebar_position: 3
---

# Verification

Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production. We expect that you have tested all the features listed below, before you start the verification process. Then it can be completed in a day.

Once we have verified that the steps has been completed successfully, you are ready to start testing in production.

## 14-step Verification Process - Sandbox

To complete the verification, you **must** go through the steps listed below. This is done to ensure good user experience from the customer side. It is mandatory to test Subscriptions Payments, OneOff and Agreements in sandbox, even if you do not intend on implementing all functions right away. The sandbox environment is designed to be close to the production environment, which makes the process from sandbox to production smother.

When completing the steps, you must use a unique id as `external_id`. It must be unique in the sense that it is unique to your test, and therefore you cannot reuse an `external_id` from previous tests. Besides that, it can be whatever you like, with a maximum of 30 characters. You need to create three ids: one for agreements, one for a regular payment and one for a One-Off payment. Please send us an email with the three ids when you are ready to start the verification, and you can go ahead with the process.

Example of `external_id`: "external_id": "CompanynameAgreement"

**Agreement and subscriptions payment**

1. Create a new agreement
2. Accept the agreement*
3. Request a payment
4. Decline the pending payment
5. Request a new payment and wait until due date for this to execute
6. Cancel the agreement once the payment has been executed

**Refund**

7. Refund the subscriptions payment Note: refunds cannot be made for Instant transfer payments. Only daily transfer payment can be refunded.

**OneOff payments**

8. Request OneOff payment
9. Cancel the reserved/requested OneOff payment
10. Request a new OneOff payment
11. Accept the OneOff payment*
12. Capture the OneOff payment
13. You must also have a setup for handling cancelled orders/agreements, and cancel reserved payments

**Invoice details**

14. Add invoice details to Subscriptions payment

*Use the Subscription User Simulation API to complete this.

### Internal Self-verification

Once you have followed the steps above, you are ready to do the self-certification. Please send an email to developer@mobilepay.dk informing about completed steps and we will verify these.

## Going from Sandbox to Production

### Sandbox - Checklist

1. Read [documentation](/docs/subscriptions)
2. Get OpenId Credentials
3. Make the first call to Sandbox API
4. [Test Subscriptions](/docs/subscriptions/development-guide/test)
5. Set [Payment Callback URL](/docs/subscriptions/subscriptions-payments#callbacks)
6. Set [Callback Authentication Scheme](/docs/subscriptions/general-notes#rest-callback-authentication)
7. Complete verification

### Production - Checklist

1. Finish business onboarding on [MobilePay Portal](https://admin.mobilepay.dk/)
2. Get OpenID Connect Credentials
3. Set [Payment Callback URL](/docs/subscriptions/subscriptions-payments#callbacks)
4. Set [Callback Authentication Scheme](/docs/subscriptions/general-notes#rest-callback-authentication)
5. [Create agreement](/docs/subscriptions/agreement)
6. [Request a Subscription Payment](/docs/subscriptions/subscriptions-payments)
7. Verify the [Production Payment reconciliation process](/docs/subscriptions/development-guide/production)
8. Document customers sign-up flow to developer@mobilepay.dk 
     * You can check our [UX inspiration site ](https://www.mobilepay.dk/erhverv/abonnementer-og-fakturering/mobilepay-subscriptions/inspiration)
9. When the Subscription Payment is executed, request for review from developer@mobilepay.dk
10. **Await approval from developer@mobilepay.dk**
11. Sign up for operational maillist
12. Keep updated on MobilePay Subscriptions [release notes](/docs/subscriptions/release-notes)

### UX - Checklist

**Checkout and Agreement flow**

1. Do you present MobilePay buttons in the checkout flow?
2. Do you provide a MobilePay landing page?
3. Do you provide FAQ for customer payment questions? [Link](https://www.mobilepay.dk/erhverv/abonnementer-og-fakturering/mobilepay-subscriptions/inspiration#6)
4. Do you show the correct MobilePay logo in the checkout flow?
5. Do you handle user-redirect?
6. Do you handle cancel-redirect? *it is important that the Merchant is compliant with our cancel-redirect requirements*
7. Existing users: can they change existing payment method?
8. New users: do you present MobilePay as 1st payment method?

**Parameters on agreement screen**

9. Do have correct `next_payment_date`?
10. Do you write a descriptive `plan`? Link
11. Do you have a proper usage of `external_id`? Link
12. Do you have appropriate `amount`? Link
13. Do you write a `description`? Link

MobilePay recommends that all certified integrators present the above checklist for the merchant that they are managing the solution for, in order to ensure that the merchant has a solution tailored to their needs.
