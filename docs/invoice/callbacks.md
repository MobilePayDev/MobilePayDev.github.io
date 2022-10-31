---
sidebar_position: 5
---

# Callbacks

## How to handle invoice callbacks

It’s asynchronous messaging and we cannot ensure the right order of the events. That’s why we added a property `Date` to each status change, so that the integrator’s would know when particular events have happened.
For example: If the invoice never gets from `accepted` to `paid` due to insufficient funds, then it will be `expired` at some point. If the user tries to pay invoice for at least one time, invoice itself gets `accepted` and the callback is sent to the integrator. So by that, integrator can know if the invoice expired just because user never acted on it, or it expired, but user tried to pay for it at some point.

Invoice callbacks are sent using batches. The job starts every 5 seconds. If we have a higher load of invoice payments, some of them may not fit in the upcoming batch and will be sent even later than 5sec. Currently we don’t have a maximum delay that can be expected, as it depends on the number of invoices that we get at the same time.

In the event that the callbacks are received in incorrect order according to your timestamp, please check the property `Date`. We added property `Date` so you can compare the callbacks to the status and the timestamp.

Make sure to not rely on whitelisting MobilePay’s sending IP addresses, as these IP addresses are subject to change without notice.

## REST callback retries

In case the REST callback failed, 8 retries will be made

- 1st retry after 5 seconds
- 2nd retry 19 minutes after 1st failed retry
- 3rd retry 39 minutes after 2nd failed retry
- 4th retry 1 hour and 19 minutes after 3rd failed retry
- 5th retry 2 hours and 39 minutes after 4th failed retry
- 6th retry 5 hours and 19 minutes after 5th failed retry
- 7th retry 10 hours and 39 minutes after 6th failed retry
- 8th retry 21 hours and 19 minutes after 7th failed retry

## REST callback authentication

In order to receive callbacks about status changes for an invoice a callback URL must be specified first. But before setting your callback URL you must choose prefered authentication method which we will use for authenticating our requests when calling your callback URL. Currently we support [`Basic`](https://tools.ietf.org/html/rfc7617) and `ApiKey` authentication methods:

### Basic

Using `basic` All the REST callbacks will be sent to `CallbackUrl` and contain basic credentials in `Authorization` HTTP header:

```json title="Header"
Authorization: Basic [Base64 encoded username:password]
```

```json title="Basic example"
PUT /api/v1/merchants/{merchantId}/auth/basic

{
  "username": "Username",
  "password": "MySecretPswd",
  "callbackurl": "https://your.url/callbacks/invoice"
}
```

### ApiKey

```json title="ApiKey example"
PUT /api/v1/merchants/{merchantId}/auth/apikey

{
  "ApiKey": "SomeSecretApiKey123",
  "callbackurl": "https://your.url/callbacks/invoice"
}
```

Using `ApiKey` authentication method your provided API key will be simply added to `Authorization` header.

Example of our callback body:

```json
[
  {
    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f448",
    "Status": "Rejected",
    "Date": "2018-04-24T07:29:47.7500268+00:00",
    "Sequence": 2
  },
  {
    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f449",
    "Status": "Invalid",
    "ErrorCode": 10106,
    "ErrorMessage": "<description of error>",
    "Date": "2018-04-24T07:29:47.7500268+00:00",
    "Sequence": 1
  },
  ...
]
```

All possible invoice statuses returned in callback body can be found in [Get invoice status](/docs/invoice/api-endpoint-reference#get-invoice-status) section.

:::note
When status of an invoice is `accepted` one additional field will be added: `PaymentDate`.
:::

:::note
When status of an invoice is `invalid` two additional fields will be added: `ErrorCode` and `ErrorMessage`. All possible validation errors can be found in [validations](/docs/invoice/api-endpoint-reference#validations) section.
:::

:::note
Callbacks of the events that are fired one right after another might be sent out in wrong order. `Sequence` field can be used to find out the real order of the events. `Sequence` number starts from 0. There might be gaps between the sequence numbers because not all events are sent as a callbacks.
:::note

Callbacks about created `InvoiceLinks` which were created asynchronously using [batch endpoint](/docs/invoice/api-endpoint-reference#create-multiple-invoice-links) will contain additional field `Links` with `Rel="user-redirect"` and `Href` to the page where MobilePay users can accept an invoice, e.g.:

```json
[
  {
    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f448",
    "Status": "Created",
    "Links": [
      {
        "Rel": "user-redirect",
        "Href": "<url-for-accepting-invoice>"
      }
    ],
    "Date":"2018-04-24T07:29:47.7500268+00:00",
    "Sequence": 1
  },
  ...
]
```
