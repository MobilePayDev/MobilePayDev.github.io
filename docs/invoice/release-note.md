---
sidebar_position: 8
---

# Release Notes

## Invoice 1.5 Release Notes

#### 08 august 2022 - Callback intervals

We reduced intervals between callback batches from 30 to 5 seconds.

---

#### 17 may 2022 - Redirect url for accepting and paying invoice link

[Invoice link](/docs/invoice/api-endpoint-reference#invoicelink) now has an optional "RedirectUrl" property. It can be set when creating single or multiple Invoice links. User will be redirected to provided url after accepting invoice link payment for the future, or paying for it instantly. Redirect will happen with appropriate query parameters, i.e. if provided RedirectUrl value is "https://ProvidedUrl.com/" in case of accepted payment user will be redirected to "https://ProvidedUrl.com/?status=accepted" and in case of instant payment user will be redirected to "https://ProvidedUrl.com/?status=paid". This feature supports both webUrls and deeplinks. If RedirectUrl property is not provided, everything will work as it did before.

---

#### 24 march 2022 - Quantity no longer required when creating invoice

Article quantity is not required when creating invoice direct or invoice link.

---

#### 08 march 2022 - Country code and Currency code are not required when creating invoice direct or invoice link

If these parameters are passed with requrest, they will be ignored. Right now we automatically assign merchant's country and currency codes to invoice or invoice link.

---

#### 05 january 2022 - Added PaymentReference field to GET invoice details response

[Invoice details](/docs/invoice/api-endpoint-reference#get-invoice-details) GET response now has PaymentReference field.

---

#### 16 december 2021 - Added GrantedOn field to Invoice Direct user consent GET response

[InvoiceDirect user consent](/docs/invoice/api-endpoint-reference#user-consent-for-invoicedirect) GET response now has GrantedOn field that shows exact time when the consent was granted.

---

#### 10 november 2021 - Invoicing has become more flexible

These fields are optional:

* `TotalVatAmount`
* `InvoiceNumber`
* `IsueDate`
* `OrderDate`
* `DeliveryDate`
* `ArticleNumber`
* `VATRate`
* `TotalVatAmount`
* `Unit`
* `PricePerUnit`
* `PriceReduction`
* `PriceDiscount`
* `Bonus`

Also only either `InvoiceNumber` or `PaymentReference` must be filled, because it is used in transaction reporting and reconciliation. Other one is optional.

More information in [InvoiceDirect](/docs/invoice/api-endpoint-reference#invoicedirect) and [InvoiceLink](/docs/invoice/api-endpoint-reference#invoicelink).

---

#### 6 may 2021 - Added Sequence number to the callbacks

[Sequence](/docs/invoice/callbacks#apikey) number can be used to determine the real order of the invoice events.

---

#### 1 april 2021 - Invoice link is deleted after expiration

Invoice link data is deleted once it expires.

---

#### 26 january 2021 - Visual design of Invoice PDF changed

More information in [Visual examples](/docs/invoice/visual-examples)

---

#### 20 january 2021 - Grant/Reject consent endpoint in UserSimulation API

You can now test [InvoiceDirect user consent](/docs/invoice/api-endpoint-reference#user-consent-for-invoicedirect) functionality in sandbox.

Endpoint was added that can be used to imitate user granting or rejecting consent.

---

#### 17 september 2020 - Sms notification time updates, for when future payment can't be processed

[Sms notification](/docs/invoice/api-endpoint-reference#validations) time is updated from 10:00 UTC to 07:00 UTC (09:00 DK time or 10:00 FI time)

---

#### 03 september 2020 - Sms notification sending updates, for when future payment can't be processed

[Sms notification](/docs/invoice/api-endpoint-reference#validations) to user is sent at 10:00, after two attempts to make payment. If user completes payment manually after second attempt, but before he gets the notification, sms is not sent.

---

#### 10 august 2020 - User consent for InvoiceDirect released

New feature: User consent for InvoiceDirect. Read more about user consent for InvoiceDirect [here](/docs/invoice/api-endpoint-reference#user-consent-for-invoicedirect)

Goal of this functionality is for invoice issuer to ask users phone number and consent to receive Invoices directly to MobilePay (InvoiceDirect).

---

#### 10 august 2020 - Invoice 1.5 released

---

## Invoice 1.4 Release Notes

#### 28 july 2020 - PaymentReference

Due to restrictions in external systems we added recommendation to keep `PaymentReference` up to 30 symbols for [direct invoice](/docs/invoice/api-endpoint-reference#invoicedirect) and [invoice link](/docs/invoice/api-endpoint-reference#invoicelink) requests.

---

#### 26 june 2020 - User consent for InvoiceDirect released in Sandbox

New feature: User consent for InvoiceDirect. Read more about user consent for InvoiceDirect [here](/docs/invoice/api-endpoint-reference#user-consent-for-invoicedirect)

Goal of this functionality is for invoice issuer to ask users phone number and consent to receive Invoices directly to MobilePay (InvoiceDirect). Current release is just in Sandbox. Release in Production is planned for beginning of August. App version from which functionality can work for users - 4.24.0 (July).

---

#### 23 april 2020 - ConsumerName and ConsumerAddressLines now optional

Removed **Required** validation for `ConsumerName` and `ConsumerAddressLines`

---

#### 17 february 2020 - Increased max number of invoices to one user

Increased the max number of invoices per day merchants can send to one user. Now merchants can send up to 10 invoices to one user.

---

#### 17 february 2020 - Removed Merchant daily Invoice limit

Daily invoice `Limit` for merchants was removed.

---

#### 16 january 2020 - Increased Invoice FI amount

Invoice FI `Amount` validation was increased to 2000 EUR

---

#### 08 november 2019 - Removed consumer name validation

`ConsumerName` validation (Levenshtein rule) was removed from InvoiceDirect validation rules.
However, it is still used for displaying `ConsumerName` when generating invoice PDF.

---

#### 06 august 2019 - Response Code

The response codes for invoices have been unified. Batch requests now return `202` , all others should now return `200`.
If your system logic examines the concrete response code and checks strict the status code, you may have to change the logic in order to cope with the change in response code. We do not consider this a breaking chance, as most merchants only check if the call was a success such as 2xx, and do not depend on a concrete status code. However, having the right HTTP status codes mapped also enables you to get more insight around the response received.

---

#### 01 april 2019 - decimals

`TotalVATAmount` can not have more than two decimals.

---

#### 01 march 2019 - QR code

New feature: Scanning QR code with InvoiceLink will open MobilePay Invoice

We're excited to announce, that MobilePay's own QR code reader can now read a QR code, that contains InvoiceLink. Read more about InvoiceLink [here](docs/invoice/api-endpoint-reference#invoicelink)

* When you scan a QR with the MobilePay app, and the QR contains InvoiceLink, then the Invoice context screen is opened.
* If the scanned link is already expired, then the user will see an error message in the overlay screen
* If the invoice is expired, then the endpoint will return a 404 status

<img
  src={require('/img/invoice-android_fi2.jpg').default}
  alt="Android screen"
  width="320"
/>

---

#### Provide your own PDF for invoice

Currenlty, PDF file of the invoice is generated internally by MobilePay. With release of **Invoice 1.4** merchants now have a possibility to provide the URL to their own PDF file.

If you create an invoice with `InvoiceUrl` parameter filled in, user will be redirected to the URL from the app when showing an invoice, otherwise the previous flow of showing PDF generated by MobilePay internally will apply.

The following endpoints will be extended to accept an optional `InvoiceUrl` parameter:

```json
POST api/v1/merchants/{merchantId}/invoices
POST api/v1/merchants/{merchantId}/invoices/batch
POST api/v1/merchants/{merchantId}/invoices/link
POST api/v1/merchants/{merchantId}/invoices/link/batch
```

##### Input

|Parameter             |Type        |Description |
|----------------------|------------|------------|
|`InvoiceUrl`          |`string`    |URL to the Invoice PDF provided by merchant.|

:::note
Only HTTPS scheme URLs will be supported.
:::

##### Create Invoice Direct example

```json
{
  "InvoiceIssuer": "efd08c19-24cf-4833-a4a4-bfa7bd58fbb2",
  "ConsumerAlias": {
    "Alias": "+4577007700",
    "AliasType": "Phone"
  },
  "ConsumerName": "Consumer Name",
  "TotalAmount": 360,
  "TotalVATAmount": 72,
  "CountryCode": "DK",
  "CurrencyCode": "DKK",
  "ConsumerAddressLines": [
    "Paradisæblevej 13",
    "CC-1234 Andeby",
    "WONDERLAND"
  ],
  "DeliveryAddressLines": [
    "Østerbrogade 120",
    "CC-1234 Andeby",
    "WONDERLAND"
  ],
  "InvoiceNumber": "301",
  "IssueDate": "2018-02-12",
  "DueDate": "2018-03-12",
  "OrderDate": "2018-02-05",
  "DeliveryDate": "2018-02-10",
  "Comment": "Any comment",
  "MerchantContactName": "Snowboard gear shop",
  "MerchantOrderNumber": "938",
  "BuyerOrderNumber": "631",
  "PaymentReference": "186",
  "InvoiceArticles": [
    {
      "ArticleNumber": "1-123",
  "ArticleDescription": "Process Flying V Snowboard",
      "VATRate": 25,
      "TotalVATAmount": 72,
      "TotalPriceIncludingVat": 360,
      "Unit": "1",
      "Quantity": 1,
      "PricePerUnit": 288,
      "PriceReduction": 0,
      "PriceDiscount": 0,
      "Bonus": 5
    }
  ],
  "InvoiceUrl": "https://www.merchant.dk/invoice/efd08c19-24cf-4833-a4a4-bfa7bd58123"
}
```

##### Create Invoice Link example

```json
{
  "InvoiceIssuer": "efd08c19-24cf-4833-a4a4-bfa7bd58fbb2",
  "ConsumerAlias": {
    "Alias": "+4577007700",
    "AliasType": "Phone"
  },
  "ConsumerName": "Consumer Name",
  "TotalAmount": 360,
  "TotalVATAmount": 72,
  "CountryCode": "DK",
  "CurrencyCode": "DKK",
  "ConsumerAddressLines": [
    "Paradisæblevej 13",
    "CC-1234 Andeby",
    "WONDERLAND"
  ],
  "DeliveryAddressLines": [
    "Østerbrogade 120",
    "CC-1234 Andeby",
    "WONDERLAND"
  ],
  "InvoiceNumber": "301",
  "IssueDate": "2018-02-12",
  "DueDate": "2018-03-12",
  "OrderDate": "2018-02-05",
  "DeliveryDate": "2018-02-10",
  "Comment": "Any comment",
  "MerchantContactName": "Snowboard gear shop",
  "MerchantOrderNumber": "938",
  "BuyerOrderNumber": "631",
  "PaymentReference": "186",
  "InvoiceArticles": [
    {
      "ArticleNumber": "1-123",
      "ArticleDescription": "Process Flying V Snowboard",
      "VATRate": 25,
      "TotalVATAmount": 72,
      "TotalPriceIncludingVat": 360,
      "Unit": "1",
      "Quantity": 1,
      "PricePerUnit": 288,
      "PriceReduction": 0,
      "PriceDiscount": 0,
      "Bonus": 5
    }
  ],
  "InvoiceUrl": "https://www.merchant.dk/invoice/efd08c19-24cf-4833-a4a4-bfa7bd58124"
}
```
