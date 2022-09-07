---
sidebar_position: 7
---

# Error codes

The following will describe the error codes thrown and in which cases they can occur.

The error format for status code 409 will be the following:

```json
{
    "code": "2020",
    "message": "Some description",
    "correlationId": "8d72ece4-1b0b-464b-98d9-6bbb02199dc8"
}
```

| Code | Endpoint(s) | Description
|:---|:---|:---|
| 2000 | POST /payments | Merchant doesn't exist
| 2010 | POST /payments | The merchant isn't created by you
| 2020 | POST /payments | The merchant is deleted
| 2030 | POST /payments | Allowed card types are not set
| 2040 | POST /payments | One or more of the allowed card types are invalid
| 2050 | POST /payments | Currency code is invalid
| 2100 | PUT payments/{paymentId:guid}/invalidate | Can't invalidate payment with completed authorization attempt
| 2101 | PUT payments/{paymentId:guid}/invalidate | Can't invalidate payment - the authorization attempt has not yet been patched with success or failure. Try again later.
