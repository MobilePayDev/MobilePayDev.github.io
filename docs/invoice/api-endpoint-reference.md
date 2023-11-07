---
sidebar_position: 4
---

# API Endpoint Reference

## InvoiceDirect

High level `InvoiceDirect` flow diagram

[![Invoice direct flow](/img/invoice_direct_high_level_flow_diagram.png)](/img/invoice_direct_high_level_flow_diagram.png)

### Create Invoice Direct

You can create an invoice directly to MobilePay app. Notice that request require a customer mobile phone number. Check how invoice looks in the app [here](/docs/invoice/visual-examples).

```json
POST api/v1/merchants/{merchantId}/invoices
```

#### Input

|Parameter             |Sub Parameter |Type        |Description |
|----------------------|--------------|------------|------------|
|`InvoiceIssuer`       ||`guid`| **Required.** The ID of the invoicing department/branch of the merchant.                                   |
|`ConsumerAlias`       ||`object`| **Required.** Mobile alias of the MobilePay user to be invoiced.                                                 |
||`Alias`|`string`|**Required.** Mobile phone number of the MobilePay user. Should start with a '+' sign and country phone code. E.g. +4512345678 or +35812345678                          |
||`AliasType`|`string` | **Required.** Alias type of the MobilePay user. Only value allowed is `Phone`.                                                            |
|`ConsumerName`      |              |`string`      |Full name of the MobilePay user.|
|`TotalAmount`       |              |`decimal`     |**Required.** The requested amount to be paid. >0.00, decimals separated with a dot.|
|`TotalVatAmount`    |              |`decimal`     |VAT amount. Decimals separated with a dot.                                  |
|`ConsumerAddressLines`|            |`string[]`      |Address of consumer receiving the invoice.                                |
|`DeliveryAddressLines`|            |`string[]`      |Delivery address.                                                                       |
|`InvoiceNumber`     |              |`string`      |**At least one of the fields `InvoiceNumber` or `PaymentReference` is required.** Invoice number. It will be used if PaymentReference is not filled.                                                           |
|`IssueDate`         |              |`date`        |Issue date of invoice. ISO date format: `YYYY-MM-DD`                      |
|`DueDate`           |              |`date`        |**Required.** Payment due date. Must be between today and 400 days ahead, otherwise the request will be declined. ISO date format: `YYYY-MM-DD`|
|`OrderDate`         |              |`date`        |Order date of invoice. ISO date format: `YYYY-MM-DD`                      |
|`DeliveryDate`      |              |`date`        |Delivery date of invoice. ISO date format: `YYYY-MM-DD`                   |
|`Comment`           |              |`string`      |Additional information to the consumer.                                                 |
|`MerchantContactName`|             |`string`      |Contact name for the individual who issued the invoice.                                 |
|`MerchantOrderNumber`|             |`string`      |The merchant order number for the invoice used internally by the merchant.              |
|`BuyerOrderNumber`|                |`string`        |The buyer order number for the invoice used externally by the merchant.               |
|`PaymentReference`  |              |`string(60)*`  |**At least one of the fields `InvoiceNumber` or `PaymentReference` is required.** Reference used on the payment to do reconciliation if merchant has chosen Instant Transfer method. If not filled, InvoiceNumber will be used as reference.|
|`InvoiceUrl`  |              |`string`  |URL to the Invoice PDF provided by merchant.|
|`InvoiceArticles` |            |`array`      |**At least one is required.**                                                                |
|    |`ArticleNumber`           |`string`     |Article Number, e.g. 123456ABC                                                 |
|    |`ArticleDescription`      |`string`     |**Required.** Article Description.                                                           |
|    |`VATRate`                 |`decimal`    |VAT Rate of article.                                                            |
|    |`TotalVATAmount`          |`decimal`    |Total VAT amount of article. Decimals separated with a dot.                                                    |
|    |`TotalPriceIncludingVat`  |`decimal`    |Total price of article including VAT.                                          |
|    |`Unit`                    |`string`     |Unit, e.g. Pcs, Coli.                                                          |
|    |`Quantity`                |`decimal`    |Quantity of article. Allowed to have more than two decimal digits.             |
|    |`PricePerUnit`            |`decimal`    |Price per unit. Allowed to have more than two decimal digits.                  |
|    |`PriceReduction`          |`decimal`    |Price reduction.                                                                             |
|    |`PriceDiscount`           |`decimal`    |Price discount.                                                                              |
|    |`Bonus`                   |`decimal`    |Bonus of article.                                                                            |

:::note
Even though "PaymentReference" can contain up to 60 symbols the recommendation is to use up to 30 symbols. For instant transfers "PaymentReference" will be truncated up down to 30 symbols and included in bank statement.
:::

```json title="Example"
{
  "InvoiceIssuer": "efd08c19-24cf-4833-a4a4-bfa7bd58fbb2",
  "ConsumerAlias": {
    "Alias": "+4577007700",
    "AliasType": "Phone"
  },
  "ConsumerName": "Consumer Name",
  "TotalAmount": 360,
  "TotalVATAmount": 72,
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
  ]
}
```

```json title="Response"
HTTP 202 Accepted

{
    "InvoiceId" : "63679ab7-cc49-4f75-80a7-86217fc105ea"
}
```

:::note
Note: If not accepted, invoice will expire 30 days after due date.
:::

#### Create multiple invoices

```json
POST api/v1/merchants/{merchantId}/invoices/batch
```

You can create up to 2000 invoices per single batch.

```json title="Input (an array of objects used to create single invoice)"
[
  {
     // InvoiceDirect input
  },
  {
     // InvoiceDirect input
  },
  ...
]
```

```json title="Response"
HTTP 202 Accepted

{
  "Accepted": [
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
      "InvoiceId": "66119129-aaf7-4ad0-a5b1-62382932b5c6"
    },
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
      "InvoiceId": "5e3030a3-61ff-4143-a6bd-8457a09bcb0d"
    },
    ...
  ],
  "Rejected": [
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
           "Errors:[
              {
              "ErrorText": "<description of error>",
              "ErrorCode": 10504
              }
       ]
    },
    ...
  ]
}
```

:::note
When multiple invoices are sent, most of the validation is applied asynchronously. The result are sent via [callbacks](#callbacks).
:::

## InvoiceLink

High level `InvoiceLink` flow diagram

[![Invoice link flow](/img/invoice_link_high_level_flow_diagram.png)](/img/invoice_link_high_level_flow_diagram.png)

### Create InvoiceLink

You can create an invoice and receive a link. That link can be sent to the user by any channel like email, sms, etc. and user can choose to pay with MobilePay. Check `InvoiceLink` flows and how invoice looks in the app [here](visual-examples#invoicelink-flows).

:::note

* Request does not require a `ConsumerAlias`. It's because InvoiceLink can be paid by any MobilePay user.
* InvoiceLink has an optional "RedirectUrl" property. It can be set when creating single or multiple Invoice links. User will be redirected to provided url after accepting invoice link payment for the future, or paying for it instantly. Redirect will happen with appropriate query parameters, i.e. if provided RedirectUrl value is "https://ProvidedUrl.com/" in case of accepted payment user will be redirected to "https://ProvidedUrl.com/?status=accepted" and in case of instant payment user will be redirected to "https://ProvidedUrl.com/?status=paid". This feature supports both webUrls and deeplinks.

:::

```json
POST api/v1/merchants/{merchantId}/invoices/link
```

**Input**

|Parameter             |Sub Parameter |Type        |Description |
|----------------------|--------------|------------|------------|
|`InvoiceIssuer`       ||`guid`| **Required.** The ID of the invoicing department/branch of the merchant.                                   |
|`ConsumerAlias`       ||`object`|Mobile alias of the MobilePay user to be invoiced.                                                 |
||`Alias`|`string`|Mobile phone number of the MobilePay user. Should start with a '+' sign and country phone code. E.g. +4512345678 or +35812345678                          |
||`AliasType`|`string` |Alias type of the MobilePay user. This will be autofilled in the landing page if user opens the link not on the phone. Only value allowed is `Phone`.                                                            |
|`ConsumerName`      |              |`string`      |Full name of the MobilePay user.|
|`TotalAmount`       |              |`decimal`     |**Required.** The requested amount to be paid. 0.00, decimals separated with a dot.|
|`TotalVatAmount`    |              |`decimal`     |VAT amount. Decimals separated with a dot.                                  |
|`ConsumerAddressLines`|            |`string[]`    |Address of consumer receiving the invoice.                                |
|`DeliveryAddressLines`|            |`string[]`    |Delivery address.                                                                       |
|`InvoiceNumber`     |              |`string`      |**At least one of the fields `InvoiceNumber` or `PaymentReference` is required.**  Invoice number.                                                           |
|`IssueDate`         |              |`date`        |Issue date of invoice. ISO date format: `YYYY-MM-DD`                      |
|`DueDate`           |              |`date`        |**Required.** Payment due date. Must be between today and 400 days ahead, otherwise the request will be declined. ISO date format: `YYYY-MM-DD`|
|`OrderDate`         |              |`date`        |Order date of invoice. ISO date format: `YYYY-MM-DD`                      |
|`DeliveryDate`      |              |`date`        |Delivery date of invoice. ISO date format: `YYYY-MM-DD`                   |
|`Comment`           |              |`string`      |Additional information to the consumer.                                                 |
|`MerchantContactName`|             |`string`      |Contact name for the individual who issued the invoice.                                 |
|`MerchantOrderNumber`|             |`string`      |The merchant order number for the invoice used internally by the merchant.              |
|`BuyerOrderNumber`|                |`string`      |The buyer order number for the invoice used externally by the merchant.               |
|`PaymentReference`  |              |`string(60)*`  |**At least one of the fields `InvoiceNumber` or `PaymentReference` is required.** Reference used on the payment to do reconciliation. If not filled, invoice number will be used as reference.|
|`InvoiceUrl`  |              |`string`  |URL to the Invoice PDF provided by merchant.|
|`RedirectUrl`  |              |`string`  |Redirect url for accepting and paying invoice link.|
|`InvoiceArticles` |            |`array`      |**At least one is required.**                                                                |
|    |`ArticleNumber`           |`string`     |Article Number, e.g. 123456ABC                                                 |
|    |`ArticleDescription`      |`string`     |**Required.** Article Description.                                                           |
|    |`VATRate`                 |`decimal`    |VAT Rate of article.                                                           |
|    |`TotalVATAmount`          |`decimal`    |Total VAT amount of article. Decimals separated with a dot.                                                   |
|    |`TotalPriceIncludingVat`  |`decimal`    |Total price of article including VAT.                                          |
|    |`Unit`                    |`string`     |Unit, e.g. Pcs, Coli.                                                          |
|    |`Quantity`                |`decimal`    |Quantity of article. Allowed to have more than two decimal digits.                                                           |
|    |`PricePerUnit`            |`decimal`    |Price per unit. Allowed to have more than two decimal digits.                                                                |
|    |`PriceReduction`          |`decimal`    |Price reduction.                                                                             |
|    |`PriceDiscount`           |`decimal`    |Price discount.                                                                              |
|    |`Bonus`                   |`decimal`    |Bonus of article.                                                                            |

:::note
Even though "PaymentReference" can contain up to 60 symbols the recommendation is to use up to 30 symbols. For instant transfers "PaymentReference" will be truncated up down to 30 symbols and included in bank statement.
:::

```json title="Example"
{
  "InvoiceIssuer": "efd08c19-24cf-4833-a4a4-bfa7bd58fbb2",
  "ConsumerAlias": {
    "Alias": "+4577007700",
    "AliasType": "Phone"
  },
  "ConsumerName": "Consumer Name",
  "TotalAmount": 360,
  "TotalVATAmount": 72,
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
  "RedirectUrl" : "https://ProvidedUrl.com/"
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
  ]
}
```

```json title="Response"
HTTP 202 Accepted

{
    "InvoiceId": "c5d4fde3-81e2-49de-8cfe-8c96f449e367",
    "Links": [
        {
            "Rel": "user-redirect",
            "Href":"https://api.sandbox.mobilepay.dk/invoice-restapi/api/v1/consumers/me/invoices/invoices/c5d4fde3-81e2-49de-8cfe-8c96f449e367/link"
        }
    ]
}
```

:::note
If not accepted, invoice link will expire 30 days after due date. After expiration invoice link data and PDF will be deleted.
:::

### Create multiple invoice links

```json
POST api/v1/merchants/{merchantId}/invoices/link/batch
```

You can create up to 2000 invoice links per single batch.

```json title="Input (an array of objects used to create single invoice link)"
[
  {
    InvoiceLink input,
  },
  {
    InvoiceLink input,
  },
  ...
]
```

```json title="Response"
HTTP 202 Accepted

{
  "Accepted": [
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
      "InvoiceId": "66119129-aaf7-4ad0-a5b1-62382932b5c6"
    },
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
      "InvoiceId": "5e3030a3-61ff-4143-a6bd-8457a09bcb0d"
    },
    ...
  ],
  "Rejected": [
    {
      "InvoiceNumber": "<original invoice number sent by the merchant>",
           "Errors:[
              {
              "ErrorText": "<description of error>",
              "ErrorCode": 10504
              }
       ]
    },
    ...
  ]
}
```

:::note
Note: The success response is not much different from the regular, non-batch response, but it doesn't contain the link itself. This is because we are processing batches asynchronously and can't return an immediate result. The `InvoiceLink` URLs will be sent back to you via a [callback](#callbacks), as soon as they're created.
:::

## Cancel invoice

You can cancel an invoice which has not yet been paid, rejected and has not expired. If the user has chosen to pay at a later point, then the invoice can still be canceled by the merchant. The customer does not receive a notification. Changes will be visible in the MobilePay Activity List. The pending Invoice Payment will be changed to canceled. On payment date (if the user set the invoice to be paid at later point), MobilePay checks the status of the invoice. If it is canceled , then MobilePay ignores "Pay" command.

```json
PUT api/v1/merchants/{merchantId}/invoices/{invoiceId}/cancel
```

```json title="Response"
HTTP 204 No Content
```

## Get invoice details

```json
GET api/v1/merchants/{merchantId}/invoices/{invoiceId}
```

```json title="Response"
HTTP 200 OK

{
    "InvoiceId": "578a9f10-4e81-4265-bbae-2e8fa33cb83b",
    "InvoiceNumber": "301",
    "IssueDate": "2018-07-02",
    "DueDate": "2018-08-02",
    "PaymentDate": "2018-08-23",
    "Comment": "Sample Invoice",
    "InvoiceArticles": [
        {
          "ArticleNumber": "1-123",
          "ArticleDescription": "Process Flying V Snowboard",
          "TotalPriceIncludingVat": 360,
          "Quantity": 1,
          "PricePerUnit": 288
        }
    ],
    "CurrencyCode": "DKK",
    "TotalAmount": 360,
    "InvoiceVatTotals": [
        {
            "VatRate": 25,
            "TotalVatAmount": 72
        }
    ],
    "TotalVatAmount": 72,
    "TotalAmountExcludingVat": 288,
    "MerchantId": "f3dd9011-d930-4063-901d-2a47621e5b76",
    "InvoiceIssuerId": "238fe387-f4a4-40e7-ae8a-4c107da2c0ad",
    "InvoiceIssuerName": "Invoice Issuer 1",
    "InvoiceIssuerAddress": "Edwin Rahrs Vej 2-12",
    "InvoiceIssuerZipcode": "8220",
    "InvoiceIssuerCity": "Brabrand",
    "MerchantIsoCountryCode": "DK",
    "LogoUrl": "https://api.qa.mobilepay.dk/invoice-restapi/api/v1/invoiceissuers/238fe387-f4a4-40e7-ae8a-4c107da2c0ad/logo",
    "Status": "created",
    "InvoiceUrl":"https://api.merchant.dk/invoice/578a9f10-4e81-4265-bbae-2e8fa33cb83b/pdf",
    "PaymentTransactionId": "d1da2195-01c1-4981-bdde-04eb82e362ab",
    "PaymentReference": "ABC-123"
}
```

## Get invoice status

```json
GET api/v1/merchants/{merchantId}/invoices/{invoiceId}/status
```

```json title="Response"
HTTP 200 OK

{
    "InvoiceId" : "5e1210f9-4153-4fc3-83ec-2a8fc4843ea6",
    "Status" : "created"
}
```

The table below shows all possible statuses.

|Status       | Explanation                                                 | Type         |
|-------------|-------------------------------------------------------------|--------------|
|`created`    |_Merchant created the Invoice_                               | Intermediate |
|`invalid`    |_Invoice validation failed_                                  | Intermediate |
|`accepted`   |_User swiped to accept the Invoice_                          | Intermediate |
|`paid`       |_Invoice was paid_                                           | Final        |
|`rejected`   |_User rejected the Invoice_                                  | Final        |
|`expired`    |_User did not do do anything until Invoice DueDate + 30 days_| Final        |
|`canceled`   |_You canceled this invoice._                                 | Final        |

User accepts the invoice and then pays it immediately or schedules a future payment. The user can change the date, for when the invoice should be paid in the MobilePay app, but nor more than 30 days from the DueDate. For InvoiceLink to be in `rejected` state, the user needs to have first `accepted` the invoice and scheduled for a future payment. Afterwards, it is possible for the user to reject the invoice.

An expired status can happen, if the user schedules payment for the future, then MobilePay tries to execute it, but an error happens (for example: card is expired) and the user does not change it and just ignores the payment. In the end that payment will expire.

There are two validation steps :  

1. Merchant validation: If all is good, then MobilePay create the invoice, send the callback `created` to the merchant, and push message to the user. The outcome of this validation is that the Invoice is `created` and delivered to the user, or the Invoice failed to be `created`, and is returned to the merchant. If the validation fails, then MobilePay does not create invoice as an entity in MobilePay domain, so in a way it is kinda a final state.
2. User validation: Card validation, user status.. etc. The invoice is delivered to the user, when the merchant received callback about `created` invoice. The outcome of this validation is either that the Invoice is `paid` or an error message is returned in the app.

The first state is either `created` or `invalid`. If you received a callback with status `created` then the Invoice has been delivered to the user.

Invoice status flow can be visualized by the following diagram.

[![Invoice flow](/img/invoice_flow.png)](/img/invoice_flow.png)

## User consent for InvoiceDirect

Goal of this functionality is for Invoice Issuer to ask users phone number and consent to receive Invoices directly to MobilePay (InvoiceDirect).

### Attach a request of consent to send direct invoices to a particular invoice

You can request for consent to send `InvoiceDirect` to a payer with particular invoice. Consent window is displayed to the user after `InvoiceLink` is paid. If user has already granted consent to the invoice issuer, consent window will not be displayed to the user.

```json
POST api/v1/directinvoiceconsents
```

**Input**

|Parameter             |Type        |Description |
|----------------------|------------|------------|
|`InvoiceId`       |`guid`| **Required.** The ID of the invoice to which consent request will be attached.|

```json title="Example"
{
  "invoiceId": "c0b6e35d-9dfb-47d4-9c9c-1cdfd181e0a4"
}
```

```json title="Response"
HTTP 201 Created

{
  "ConsentId": "e518e841-c058-422c-b8d9-d4d71bf671c4",
  "InvoiceId": "c0b6e35d-9dfb-47d4-9c9c-1cdfd181e0a4",
  "PhoneNumber": null,
  "State": "Pending"
}
```

### Get all consents in specified state

You will get full list of users who granted consent for specific invoice issuer. Users phone number will be provided too.

```json
GET /api/v1/directinvoiceconsents
```

#### Input (query string parameters)

|Parameter             |Type        |Description |
|----------------------|------------|------------|
|`InvoiceIssuerId`|`string(guid)`| **Required.** The ID of the invoicing department/branch of the merchant.|
|`State`|`string`| **Required.** State of consents to return.|
|`PagingState`|`string`|Optional.|

The table below shows all possible consent statuses.

|Status       | Explanation                                                 | Type         |
|-------------|-------------------------------------------------------------|--------------|
|`pending`    |_User has not made an action regarding this consent_| Intermediate |
|`granted`    |_User has granted direct invoice consent_| Final |
|`denied`   |_User has denied direct invoice consent_| Final |

```json title="Example"
GET /api/v1/directinvoiceconsents?invoiceIssuerId=6bb6aff1-b88b-455a-a0ad-c4d1fec2e5d7&state=granted
```

```json title="Response"
HTTP 200 OK

{
  "GrantedConsents": [
    {
      "ConsentId": "e518e841-c058-422c-b8d9-d4d71bf671c4",
      "InvoiceId": "c0b6e35d-9dfb-47d4-9c9c-1cdfd181e0a4",
      "PhoneNumber": "+4577007700",
      "State": "Granted",
      "GrantedOn": "2021-01-01T12:34:56+00:00"
    }
  ],
  "PagingState": null
}
```

:::note
Note: Endpoint supports only granted status.
:::

### Get consent details

You can check state of your specific request - if user granted/denied consent with that request or maybe request is still pending.

```json
GET /api/v1/directinvoiceconsents/{consentId}
```

```json title="Example"
GET /api/v1/directinvoiceconsents/e518e841-c058-422c-b8d9-d4d71bf671c4
```

```json title="Response"
HTTP 200 OK

{
  "ConsentId": "e518e841-c058-422c-b8d9-d4d71bf671c4",
  "InvoiceId": "c0b6e35d-9dfb-47d4-9c9c-1cdfd181e0a4",
  "PhoneNumber": "+4577007700",
  "State": "Pending",
  "GrantedOn": null
}
```

`DirectInvoiceConsent` flow in application

[![Invoice link to invoice direct](/img/invoice_link_to_invoice_direct.jpeg)](/img/invoice_link_to_invoice_direct.jpeg)

[![Invoice link to invoice direct flow](/img/invoice_link_to_invoice_direct_flow.png)](/img/invoice_link_to_invoice_direct_flow.png)

## Error Codes

All of the endpoints described above can return an error response of this structure:

|Name                |Type    | Description                                                               |
|--------------------|--------|---------------------------------------------------------------------------|
|`correlation_id`    |`guid`  | Unique id used for logging and debugging purposes.                        |
|`error`             |`string`| Error type. Possible values: `DomainError`, `InputError` & `ServerError`. |
|`error_code`        |`string`| Unique error code.                                                        |
|`error_description` |`string`| Human-friendly error description.                                         |
|`error_context`     |`string`| Identifies context in which error has occured.                            |

1. `HTTP 400` , if request input is invalid
>
  ```json
  {
      "correlation_id": "54ccc98b-7d9f-40ea-8c1a-249d57126c39",
      "error": "InputError",
      "error_code": null,
      "error_description": "input.TotalAmount : Invalid input\r\n",
      "error_context": "Invoices"
  }
  ```

2. `HTTP 409` , request is not compatible with a current state
>
  ```json
  {
      "correlation_id": "8c153279-98f1-4e33-b053-3c6e3555adff",
      "error": "DomainError",
      "error_code": "10504",
      "error_description": "Invoice has already been paid",
      "error_context": "Invoices"
  }
  ```

3. `HTTP 500` , server error
>
  ```json
  {
      "correlation_id": "56db684c-7845-4abf-9f19-5632a625a47b",
      "error": "ServerError",
      "error_code": null,
      "error_description": "The given key was not present in the dictionary.",
      "error_context": "Invoices"
  }
  ```

When creating `InvoiceDirect` or `InvoiceLink` these values can be returned as `error_code` and `error_description`:

|Error Code |Error Description                                                                  |
|-----------|-----------------------------------------------------------------------------|
|10101      |MobilePay user not found                                                     |
|10102      |MobilePay user not available                                                 |
|10103      |MobilePay user not found                                                     |
|10104      |Invoice already exists                                                       |
|10105      |Technical error - please contact MobilePay developer support  developer@mobilepay.dk |
|10008      |Total amount must be greater than 0                                          |
|10201      |Total invoice amount is exceeded                                             |
|10202      |Invoice issuer not found                                                     |
|10203      |Account validation error                                                     |
|10204      |Account validation error                                                     |
|10205      |Technical error - please contact MobilePay developer support  developer@mobilepay.dk |
|10301      |Invoice already exists                                                       |
|10302      |Merchant not found                                                           |
|10303      |Invoice issuer not found                                                     |
|10304      |MobilePay user not found                                                     |
|10305      |MobilePay user not found                                                     |
|10306      |MobilePay user not found                                                     |
|10310      |DueDate must be no later than 400 days from today                            |
|10311      |DueDate must be today or later                                               |
|10312      |IssueDate must be no later than today                                        |
|10314      |Your daily limit has been reached. No more than 10 invoices can be created per consumer per merchant per day. |

## Validations

A set of business rules apply for an `invoice` before it gets created. If any of following rules fail, an `invoice` falls to `Not Created` state and a response with `error_code` and `error_description` is returned.

|Field          |Country   |Validation                                         |Error Code |Description                                                       |
|---------------|----------|---------------------------------------------------|-----------|------------------------------------------------------------------|
|`DueDate`      |DK/FI     |CreatedDate <= DueDate < CreatedDate + 400 days  |10310/10311|`DueDate` must be no more than 400 days in the future.               |
|`IssueDate`    |DK/FI     |IssueDate <= CreatedDate                         |10312      |`IssueDate` can not be later than invoice creation date.            |
|`TotalAmount`  |DK        |TotalAmount <= 15000 DKK                         |10201      |`TotalAmount` is limited to 300000 DKK.                              |
|               |FI        |TotalAmount <= 2000 EUR                           |10201      |`TotalAmount` is limited to 2000 EUR.                                |

If all of the fields in the request are exactly the same as some existing invoice's fields, the duplication validation fails and the invoice cannot be created.

#### Limits

* Consumer daily invoice count <= 10. No more than 10 invoices can be created per consumer from single merchant.
