---
sidebar_position: 6
---

# Payment Points

This topic explains what payment points are and how to manage them.

## Overview

After signing up to use [Payments API](/docs/payments-refunds/create-payments), merchant needs to create a payment point.

Single business can have multiple payment points. Each payment point is as a location and it has a MobilePay-assigned `PaymentPointId`. Establishing multiple payment points is optional but useful for reporting and tracking sales over time. Most customer-related transactions must be to a specific payment point in the API call.

## Management of payment points

Creating, editing payment points is done in _MobilePay Portal_. The payment point name and bank account are mandatory fields. If no logo image is provided the default one will be used.

![Setup payment points](/img/pp-example.gif)

## Retrieve a list of payment points

In order to get the details of payment points like `PaymentPointId`, you need to use Payment Points API. The following request retrieves information about all payment points for a merchant account usable with Payments API.

```bash title="Retrieve all payment points"
curl https://api.mobilepay.dk/v1/paymentpoints \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json'
```

```json title="Respone JSON example"
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

## Setting up Custom Payment Reference

**Under development**

If you have any transactions during the day, then you will receive collected money during the night. MobilePay runs a job that transfers all the money to your specified bank account. There is one transfer per payment point. When configuring payment points you can set up custom references that would reflect in your bank account statement. One of the use cases is when there is a need to set up automation to transfer money further, i.e. franchisee. You can find details on a default MobilePay reference [here](https://developer.mobilepay.dk/transactionreporting-api).

**Include video**
