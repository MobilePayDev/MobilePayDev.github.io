---
sidebar_position: 3
---

# Verification

Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production.
When we have verified that the steps has been completed successfully, you are ready to start testing in production.

## 11-step Verification Process - Sandbox

To complete the verification, you must go through the steps listed below. This is done to ensure good user experience from the customer side. It is mandatory to test InvoiceDirect and InvoiceLink  in sandbox, even if you do not intend on implementing all functions right away. The sandbox environment is designed to be close to the production environment, which makes the process from sandbox to production smoother.

**Making the first call**

1. Get MerchantId
2. Get Invoice Issuer

**InvoiceDirect**

3. Create an InvoiceDirect
4. Create multiple InvoiceDirects
5. Cancel an unpaid Invoice

**Invoice Link**

6. Create Invoice Link
7. Create multiple InvoiceLinks

**Callbacks**

8. Have you specified a callback URL and chosen a preferred authentication method?
9. Do you sort callbacks by the properties date and sequence?

**Business Validation**

10. Do you adhere to the validations?
11. Do you ensure that the "PaymentReference" meets customer needs in terms of reconciliation?

### Internal Self-verification

Once you have followed the steps above, you are ready to do the self-certification. Please send an email to developer@vippsmobilepay.com informing about completed steps and we will verify these.

## Going from Sandbox to Production

### Sandbox

1. Read documentation on [GitHub](/docs/invoice)
2. Get OpenId Credentials [here](/docs/invoice/authentication)
3. Make the first call to Sandbox API
4. Test Invoice [here](/docs/invoice/development-guide/test)
5. Complete verification

### Production

1.Get OpenID Connect Credentials. Read more [here](/docs/invoice/authentication)
2. Confirm that the implementation is working in production.
3. Ensure you've followed our [design guidelines](https://www.mobilepaygroup.com/design)
4. **Await approval from developer@vippsmobilepay.com**
4. Sign up for operational maillist.

## Prerequisites using MobilePay Invoice

### Business - Prerequisites

*Merchant*

- Merchant must have a valid bank account
- Merchant must be onboarded via the [MobilePay Portal](https://admin.mobilepay.dk/), and have an agreement for MobilePay Invoice with MobilePay
- Invoice Amount must comply to MobilePay limits

*Integrator:*

- Integrator must have an onboarding guideline demonstrating how the Merchant goes through the Consent process
- Integrator must have received production credentials for OpenID Connect
 -Integrator must have signed up for operational mail-list
 -Integrator must use the right [MobilePay logo and buttons](https://www.mobilepaygroup.com/design)

### Technical Prerequisites

- Client must have an integration to the MobilePay OpenID Connect Authorization service, in order to generate access tokens.
- The Invoice Call must contain a token, provided via OpenID Connect Flow
- You should ensure that the `PaymentReference` meets customers needs. You can either fill out the field `PaymentReference`, for the payment. If you do not fill out `PaymentReference`, then it would be the input from the field `InvoiceNumber`, that will be the reference on the payment. Read more about reconcilation [here](/docs/invoice/development-guide/production)
- Phone numbers must comply with the country specific formats. E.g. Denmark +45XXXXXXXX 0045XXXXXXXX XXXXXXXX (Any spaces in phone numbers will be removed before validation / processing)
