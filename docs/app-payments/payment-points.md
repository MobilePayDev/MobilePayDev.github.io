---
sidebar_position: 5
---

# Payment Points

This topic explains what payment points are and how to manage them.

## Overview

After signing up to use [Payments API](/docs/app-payments/payments-refunds/create-payments), merchant needs to create a payment point.

Single business can have multiple payment points. Each payment point is a location and it has a MobilePay-assigned `PaymentPointId`. Establishing multiple payment points is optional but useful for reporting and tracking sales over time. Most customer-related transactions must be to a specific payment point in the API call.

## Management of payment points

Payment points can be configured on the new [Vipps MobilePay portal](https://portal.vippsmobilepay.com/), where they are called Sales Units.

## Retrieve a list of payment points

In order to get the details of payment points like `PaymentPointId`, you need to use Payment Points API. The following request retrieves information about all payment points for a merchant account usable with Payments API.

```bash title="Retrieve all payment points"
curl https://api.mobilepay.dk/v1/paymentpoints \
  -X GET \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json'
```

```json title="Response JSON example"
{
  "pageSize": 100,
  "nextPageNumber": null,
  "paymentPoints": [
    {
      "paymentPointId": "04e8a246-bc31-425b-928a-10808f8497a0",
      "paymentPointName": "test",
      "state": "active"
    },
    {
      "paymentPointId": "68170df8-c6e1-4938-915b-c09abce96ae4",
      "paymentPointName": "test2",
      "state": "active"
    }
  ]
}
```

## Setting up custom transfer reference

When configuring payment points you can choose if the transfer reference visible on your bank account should be the default reference or a custom reference. This cacn be set up by selecting the Sales Unit in the Vipps MobilePay portal and change the reference from 'standard' to 'custom'.
