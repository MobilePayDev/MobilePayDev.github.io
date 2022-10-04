---
sidebar_position: 6
---

# Retrieve transfers

:::note
Usually accumulated payment point balance is transferred once per day to a specified merchant account.
You might have to wait until the next day to get a transfer and for the funds to appear in the bank account.
:::

## Get a single transfer

Returns a single completed transfer.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/transfers/3fa85f64-5717-4562-b3fc-2c963f66afa6' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",
  "reference": "string",
  "date": "string",
  "totalTransferredAmount": 0,
  "currencyCode": "string"
}
```

## Retrieve a list of transfers

Returns a list of completed transfers for a payment point.

```bash title="Request curl example"
$ curl -X 'GET' \
  'https://api.mobilepay.dk/v3/reporting/transfers?pagesize=1000&pagenumber=1' \
  -H 'Authorization: Bearer {API_KEY}' \
  -H 'Content-Type: application/json' \
```

```json title="Response JSON example"
{
  "pageSize": 1,
  "nextPageNumber": 2,
  "transfers": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",
      "reference": "string",
      "date": "string",
      "totalTransferredAmount": 0,
      "currencyCode": "string"
    }
  ]
}
```

## Transfer reference

The transfer reference is a unique reference which MobilePay generates for all individual transfers, and is visible on the bank statement when the transfer has been completed and received on your bank account. The reference always consists of 20 characters.

Use this reference to identify and verify which transfers were received on the bank account. The format of transfer reference can be defaulted or customized via payment point creation in the portal.

### Default transfer reference

<h3>
<span style={{color: "rgb(29 117 157)"}}>PC</span>
<span style={{color: "rgb(231 66 126)"}}>AAAAAAAA</span>
<span style={{color: "rgb(251 127 238)"}}>RRR</span>
<span style={{color: "rgb(54 168 137)"}}>DD</span>
<span style={{color: "rgb(26 126 86)"}}>MM</span>
<span style={{color: "rgb(38 92 73)"}}>YY</span>
<span style={{color: "rgb(111 195 207)"}}>X</span>
</h3>

|          Characters      | Description                                                                            |
| -------------------| --------------------------------------------------------------------------------------- |
| <span style={{color: "rgb(29 117 157)"}}>PC</span> | Product code – the product identified by a code, when generating the reference. 01 - POS, 02 - MyShop, 03 - Subscriptions, 04 - Invoice, 06 - Online, 08 - App Payments. |
| <span style={{color: "rgb(231 66 126)"}}>AAAAAAAA</span>| The external paymentPointID (length 8) is unique per payment point. For the product’s Subscription and Invoice the external paymentPointID will consist of 8 zeros (00000000). For MyShop it will be MyShop number, for PoS it will be PoS LocationID. |
| <span style={{color: "rgb(251 127 238)"}}>RRR</span>| The running number (incremented with each transfer and reset each day) |
| <span style={{color: "rgb(54 168 137)"}}>DD</span>| Day |
| <span style={{color: "rgb(26 126 86)"}}>MM</span>| Month |
| <span style={{color: "rgb(38 92 73)"}}>YY</span>| Year |
| <span style={{color: "rgb(111 195 207)"}}>X</span>| Check digit added automatically |

:::note
Example: <span style={{color: "rgb(29 117 157)"}}>02</span><span style={{color: "rgb(231 66 126)"}}>00012345</span><span style={{color: "rgb(251 127 238)"}}>001</span><span style={{color: "rgb(54 168 137)"}}>04</span><span style={{color: "rgb(26 126 86)"}}>08</span><span style={{color: "rgb(38 92 73)"}}>22</span><span style={{color: "rgb(111 195 207)"}}>1</span>

- 02 = transfer from MyShop product
- 00012345 = transfer from the payment point with the MyShop number 12345
- 001 = the first transfer on the bank account that day
- 040822 = date of the transfer
- 1 = control digit

The reference <span style={{color: "rgb(29 117 157)"}}>02</span><span style={{color: "rgb(231 66 126)"}}>00012345</span><span style={{color: "rgb(251 127 238)"}}>001</span><span style={{color: "rgb(54 168 137)"}}>04</span><span style={{color: "rgb(26 126 86)"}}>08</span><span style={{color: "rgb(38 92 73)"}}>22</span><span style={{color: "rgb(111 195 207)"}}>1</span> in this example correspond to the transfer done by the MyShop product from the payment point with the MyShop number 12345 done at August 4, 2022. 

Another example: <span style={{color: "rgb(29 117 157)"}}>03</span><span style={{color: "rgb(231 66 126)"}}>00000000</span><span style={{color: "rgb(251 127 238)"}}>001</span><span style={{color: "rgb(54 168 137)"}}>16</span><span style={{color: "rgb(26 126 86)"}}>02</span><span style={{color: "rgb(38 92 73)"}}>22</span><span style={{color: "rgb(111 195 207)"}}>1</span> - which indicates Subscriptions transfer received February 16, 2022.
:::

### Custom transfer reference

 Custom transfer reference consists of 20 characters: 19 - set by you and a check digit which is always automatically added at the end of the reference. One of the use cases for custom transfer reference is when there is a need to set up automation to transfer money further, i.e. franchisee. 

| Characters               | Action                                                                            |
| -------------------| --------------------------------------------------------------------------------------- |
| <span style={{color: "rgb(231 66 126)"}}>0-9</span> | Your own numbers and it will not be replaced |
| <span style={{color: "rgb(251 127 238)"}}>RRR</span> | Will be replaced with the running number (incremented with each transfer and reset each day) <br/> Running number is unique for every payment point |
| <span style={{color: "rgb(54 168 137)"}}>DD</span> | Will be replaced with the current day |
| <span style={{color: "rgb(26 126 86)"}}>MM</span> | Will be replaced with the current month |
| <span style={{color: "rgb(38 92 73)"}}>YY</span>| Will be replaced with the current year |
| <span style={{color: "rgb(111 195 207)"}}>X</span>  | Check digit added automatically |

:::note
Example: Payment point has custom transfer reference set to "<span style={{color:"rgb(251 127 238)"}}>RRR</span><span style={{color: "rgb(231 66 126)"}}>5555555555</span><span style={{color: "rgb(38 92 73)"}}>YY</span><span style={{color: "rgb(26 126 86)"}}>MM</span><span style={{color: "rgb(54 168 137)"}}>DD</span>". Reference in bank statement "<span style={{color:"rgb(251 127 238)"}}>001</span><span style={{color: "rgb(231 66 126)"}}>5555555555</span><span style={{color: "rgb(38 92 73)"}}>22</span><span style={{color: "rgb(26 126 86)"}}>03</span><span style={{color: "rgb(54 168 137)"}}>27</span><span style={{color:"rgb(111 195 207)"}}>3</span>" indicates that the transfer was the first transfer for this payment point and it was made on March 27, 2022.
:::