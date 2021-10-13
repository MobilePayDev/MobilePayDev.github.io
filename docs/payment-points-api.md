---
sidebar_position: 6
---

# Payment Points

This topic explains what payment points are and how to manage them.

## Overview

After signing up to use [Payments API](/docs/payments-refunds/create-payments), merchant needs to create a payment point.

Single business can have multiple payment points. Each payment point is as a location, and it has a MobilePay-assigned payment point ID. Establishing multiple payment points is optional, but useful for reporting and tracking sales over time. Most customer-related transactions must be to a specific payment point in the API call.

## Management of payment points

Creating, editing payment points is done in _MobilePay Portal_. The payment point name and bank account are mandatory fields. If no logo image is provided the default one will be used.

![Setup payment points](/img/pp-example-v2.gif)

## Retrieve a list of payment points

The following request retrieves information about all the payment points for a merchant account usable with Payments API.

```bash title="Retrieve all payment points"
curl https://api.mobilepay.dk/v1/paymentpoints \
  -X GET \
  -H 'x-ibm-client-id: {CLIENT_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json'
```

## Setting up Custom Payment Reference

If you have any transactions during the day, then you will receive collected money during the night. MobilePay runs a job that transfers all the money to your specified bank account. There is one transfer per payment point. When configuring payment points you can choose [default MobilePay references](https://developer.mobilepay.dk/transactionreporting-api) or set up custom references that would reflect in your bank account statement. One of the use cases is when there is a need to set up automation to transfer money further, i.e. franchisee. Custom payment reference consists of 20 characters: 19 - set by you and a check digit is always automatically added at the end of the reference. Allowed characters are:

| characters               | action                                                                            |
| -------------------| --------------------------------------------------------------------------------------- |
| 0-9 | Will not be replaced |
| <a style={{color:"#5acbff"}}>YY</a> | Will be replaced with the current year |
| <a style={{color:"#5a78ff"}}>MM</a> | Will be replaced with the current month |
| <a style={{color:"#8f5aff"}}>DD</a> | Will be replaced with the current day |
| <a style={{color:"#FF79C6"}}>RRR</a> | Will be replaced with the running number (incremented with each transfer) |
| <a style={{color:"#00DA46"}}>X</a> (added automatically) | Check digit. Incremented with each transfer |

:::note
Example: Payment point has custom payment reference set to "<a style={{color:"#FF79C6"}}>RRR</a>5555555555<a style={{color:"#5acbff"}}>YY</a><a style={{color:"#5a78ff"}}>MM</a><a style={{color:"#8f5aff"}}>DD</a>". Reference in bank statement "<a style={{color:"#FF79C6"}}>001</a>5555555555<a style={{color:"#5acbff"}}>21</a><a style={{color:"#5a78ff"}}>10</a><a style={{color:"#8f5aff"}}>01</a><a style={{color:"#00DA46"}}>3</a>" indicates that the transfer was the first transfer for this payment point and it was made on 2021-10-01.
:::
