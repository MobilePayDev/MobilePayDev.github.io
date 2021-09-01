# Error Codes

If any client errors occur, our endpoints return an error object describing the issues encountered. Each error object has the same contract. Here's an example:

```json title="Respone JSON example"
{
  "code": "invalid_payment_state",
  "correlationId": "8d4243bc-aa83-43c3-a55d-5da221facd9b",
  "message": "Cannot cancel payment that is already captured.",
  "origin": "MPY"
}
```

`code` and `message` are the properties you should be interested to. `correlationId` and `origin` properties should be provided for our support team in case you need their help with any issues. The values of those properties help to find solutions quicker.

## Most Common Errors

### HTTP 409 Conflict

| code               | message                                                                             |
| -------------------| --------------------------------------------------------------------------------------- |
| processing_error  | We were not able to process your request. Please try again or contact our support. |
| amount_too_large  | Cannot capture a larger amount than is reserved. |
| partial_capture_disallowed  | Partial capture is not allowed on this payment. |
| payment_not_found  | Payment does not exist. |
| invalid_payment_state   | Cannot cancel payment that is already captured. |
| invalid_payment_state   | Only initiated payments can be cancelled by idempotency key. |
| invalid_payment_state   | Only reserved payments can be captured. |
| invalid_payment_point   | Payment point is not active. |
| payment_point_not_found  | Payment does not exist. |
| idempotency_key_used   | Payment with this idempotency key already exists for another payment point. |
| unauthorized_access   | Authorization error occurred. |

### HTTP 400 Bad Request

| code               | message                                                                             |
| -------------------| --------------------------------------------------------------------------------------- |
| | {_Message indicating what is wrong with your request body._}    |