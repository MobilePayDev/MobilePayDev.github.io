---
sidebar_position: 12
---

# Input and Output Formats

This page gives an overview of the format and length restrictions for all input parameters used in the PoS V10 API.

## HTTP Headers

For more information about the http headers, see [API principles](/docs/pos/api-principles).

| Name | Format      | Description |
|------|-------------|-------------|
| `x-ibm-client-id` | Guid | Identifies an application created through MobilePay Developer Portal. |
| `x-mobilepay-merchant-vat-number` | Valid VAT number: IsoCountryCodeVATNumber - Example: DK12345678 | Identifies the merchant the integrator is calling on behalf of |
| `x-mobilepay-client-system-version` | Valid Client-Version: Major.Minor.Build - Example: 1.2.1 | Identifies the [version of the integrator system](/pos/api-principles#client-versioning) calling the API. |
| `x-mobilepay-idempotency-key` | String with at most 36 valid characters | Used to allow calls to be [safely retried](/docs/pos/api-principles#error-handling) in case of errors. |

## Brands

For more information about brands, see [PoS Management](/docs/pos/pos-management).

| Name | Format      | Description |
|------|-------------|-------------|
| `merchantBrandId` | MPPOSXXXXX <br/> POSDKXXXXX <br/> POSFIXXXXX | Identifies a Brand in MobilePay. |
| `brandName` | String | The name of the brand. |

## Stores

For more information about stores, see [PoS Management](/docs/pos/pos-management).

| Name | Format      | Description |
|------|-------------|-------------|
| `storeId` | Guid | Identifies a Store in MobilePay. |
| `merchantLocationId` | String with exactly 5 valid characters | MobilePay location ID. Together with a `merchantBrandId`, this identifies a Store in MobilePay. |

## Point-of-Sales

For more information about a PoS, see [PoS Management](/docs/pos/pos-management).

| Name | Format      | Description |
|------|-------------|-------------|
| `posId` | Guid | Identifies a PoS in MobilePay. |
| `merchantPosId` | String with at most 36 valid characters | Merchant defined PoS ID. There can be at most one active PoS with a given `merchantPosId` for a given integrator and merchant. |
| `posName` | String with at most 36 valid characters | Merchant defined PoS name.< The name is visible in the app, after the customer has checked in on the PoS. |
| `callbackAlias` | String with at most 36 valid characters | Only for clients that use the [notification service](/docs/pos/notification-service) to detect MobilePay payments. The `callbackAlias` is a key that identifies which notification endpoint to call for the given PoS. |
| `beaconId` | A GUID or 15 digits | ID of the Beacon. In case of physical device such as the MobilePay WhiteBox or a terminal the `beaconId` is a 15 digit string. In case of no physical device (QR) the `beaconId` is not provided during PoS creation. MobilePay will generate a string containing a random GUID as the `beaconId`. |
| `requirePaymentBeforeCheckin` | Boolean | When set to `true`, a user will not be allowed to check-in before a payment is created on this PoS. See [Preventing checkin before payment](/docs/pos/pos-management#preventing-checkin-before-payment).
| `supportedBeaconTypes` | `QR` / `NFC` / `Bluetooth`| Beacon broadcast type. Identifies an option for how a customer can check in on a PoS. During the creation of a PoS, a list of Beacon Types has to be provided. |

## Payments

For more information about payments, see [Payment Flows](docs/pos/payment-flows).

| Name | Format      | Description |
|------|-------------|-------------|
| `paymentId` | GUID | MobilePay defined Payment ID. |
| `orderId` | String with at most 36 valid characters | Merchant defined payment order ID. There is no uniqueness requirement for the `orderId`, but it is highly recommended to use unique order IDs. |
| `amount` | Valid positive amount | Total amount of the payment. |
| `currencyCode` | `DKK` / `EUR` | Currency code for the currency of the payment. |
| `merchantPaymentLabel` | String with at most 36 valid characters| Label for the payment. This is a way for the merchant to tag a payment with a label that will be visible in the transaction reporting section on the MobilePay Portal |
| `plannedCaptureDelay` | `None` / `LessThan24Hours` / `LessThan14Days`| How long time the client expects to wait after receiving a reservation before capturing. See [Specify planned capture delay](/docs/pos/best-practices#specify-planned-capture-delay). |
| `restrictions` | Json object with one or more parameters | A way to define restrictions on how a payment can be completed. See [Payment Restrictions](/docs/pos/input-and-output-formats#payment-restrictions) for possible restriction parameters |

### Payment Restrictions

| Name | Format      | Description |
|------|-------------|-------------|
| `debitCardDisallowed` | Boolean | When `debitCardDisallowed` is set to true, debit cards cannot be used for this payment |
| `creditCardDisallowed` | Boolean | When `creditCardDisallowed` is set to true, credit cards cannot be used for this payment |

## Valid characters

Valid characters for PoS V10 API request fields are:

* 0 - 9
* a-zA-Z
* æÆøØåÅ
* äÄöÖšŠžŽâÂàÀáÁãÃéÉêÊëËèÈíÍîÎïÏìÌüÜûÛùÙúÚôÔòÒóÓõÕÿýÝñÑ
* !"#$%&'()*+,-./":;<=>?@[\]^_\`{\|}~¦¯¨´×
* «»ðþçß¤ÇµÐÞ±°ªº©§¶¼½¾¬®¢£¥¡¿¹²³
* (space)
