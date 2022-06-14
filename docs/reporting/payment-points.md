# Retrieve payment points

## Retrieve a list of payment points

Returns payment points owned by a given merchant.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/paymentpoints?pagesize=1000&pagenumber=1' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "paymentpoints": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Product store",
      "productType": "string",
      "alias": "string"
    }
  ]
}
```