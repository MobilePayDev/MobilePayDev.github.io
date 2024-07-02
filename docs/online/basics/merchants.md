---
sidebar_position: 1
---

# Merchants

As a PSP, you need to create the merchants in MobilePay in order to create payments on their behalf.

This can be done by invoking the Create merchant endpoint `POST /merchants/`.
The details supplied in the merchant onboarding will be used for invoicing purposes and ongoing support.

When a Merchant is no longer using the solution it must be offboarded using the Delete merchant endpoint `DELETE /merchants/`.

All merchants must be onboarded as individual merchants. If you have super merchants or payment facilitators you can also use them for MobilePay. However each submerchant must be onboarded instead of the super merchant and payment facilitator.

[![merchant sequence diagram](/img/online-merchant-sequence-diagram.svg)](/img/online-merchant-sequence-diagram.svg)

## Currency and country code

When creating a merchant billingCurrency and countryCode is defined:

* countryCode: The country of the merchant. If a merchant operates in two countries you must create one merchant for each country and set the appropriate country code.
* billingCurrency: Currency used for invoicing between MobilePay and PSP. This does not affect the currency of the payments between merchants and MobilePay users. When initiating a payment currencyCode is defined.

## Franchise and partners

For franchises, you must create each franchisor as individual merchants. You can also choose to set up the franchisee as partner if you want to, but that is not required from our side. Please contact developer@vippsmobilepay.com to inquire about partner setup.
