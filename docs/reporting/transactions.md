---
sidebar_position: 3
---

# Retrieve transactions

## Retrieve a list of transactions

Returns a report of all transactions.

:::caution
Data provided by this endpoint represents the latest known state at the time of the query. Resubmitting your request might yield different results if additional transactions have occurred during the time between requests.
:::

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/transactions?pagesize=1000&pagenumber=1' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "pageSize": 1,
  "nextPageNumber": 2,
  "transactions": [
    {
      "paymentId": "string",
      "type": "string",
      "amount": 0,
      "currencyCode": "string",
      "timestamp": "2022-05-27T05:27:12.167Z",
      "message": "string",
      "merchantReference": "string",
      "merchantPaymentLabel": "string",
      "transferReference": "string",
      "transferDate": "string",
      "userPhoneNumber": "string",
      "userName": "string",
      "loyaltyId": "string",
      "myShopNumber": "string",
      "brandName": "string",
      "brandId": "string",
      "locationId": "string",
      "posName": "string",
      "beaconId": "string",
      "agreementExternalId": "string",
      "agreementId": "string"
      "refundId": "string"
    }
  ]
}
```