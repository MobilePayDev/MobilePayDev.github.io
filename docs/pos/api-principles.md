---
sidebar_position: 8
---

# API Principles

This is a preliminary list of architectural principles.

## Backend Has the Truth

One of the architectural principles in MobilePay PoS is that the backend has the truth. This means that in a situation where certainty is required, for instance whether the payment has been approved, the app and client will have to wait for confirmation from the backend.

## API Versus Implementation

The API does not describe the abstractions of the underlying backend or client implementations. Instead the API serves as the joint interface for backend and frontend. The ramification for this is that both frontend and backend can move independently from the API. However, they must always support the API specification and not only support perceived details of current implementations. Any valid HTTP request must be handled appropriately by the backend and produce a useful informative HTTP response. Any valid HTTP response received in the client must be handled appropriately by the client.

## RESTful API

The API is defined using the RESTful principles.

## Security Model

The MobilePay PoS V10 API uses TLS for communication security and data integrity (secure channel between the client and the backend). The API currently uses TLS 1.2. It is the integrator's responsibility to plan for an upgrade to TLS 1.3, when TLS 1.2 is deprecated. The MobilePay PoS V10 API uses access tokens to authenticate calls from clients. After [obtaining an access token](/docs/pos/authentication), the client must send the access token in an Authorization header along with the
`client_id` as follows in all calls to the MobilePay PoS V10 API:

````json
--header 'x-ibm-client-id: {client_id}'
--header 'Authorization: Bearer {access_token}'
````

## Client Versioning

In addition to the access token which identifies the client calling the MobilePay PoS V10 API, all calls must also include the `x-mobilepay-client-system-version` header to identify the version of the client software. The Client Version (`x-mobilepay-client-system-version`) is a 3 dimensional number Major.Minor.Build. It is recommended that when the client software is updated, the client version is updated accordingly. The client version will be used by MobilePay to block versions of clients that are not [certified](/docs/pos/development-guide/verification) and/or are misbehaving. An example of misbehavior is spamming irrelevant HTTP calls that endanger fast response times for other clients.

The three parts of the Client Version is defined as described below.

* Major version represents major changes to the client version, perhaps representing breaking changes on the clients interfaces or representing major changes communicated to merchants. A major change requires recertification.
* Minor version represents minor changes to the client version, changes that introduces new features or a change in the way internal logic is handled. Minor version changes are perhaps not communicated to merchants. A minor change requires recertification.
* Build version represents a new build of the client, including minor bug-fixes and changes of the lowest magnitude. A new build version does not require recertification.

Certification requirements in regard to changes to Client Version are as follows

* Changes in major version or minor version require a new Certification.
* Changes in Build version do not require a new Certification.

The Client Version should be added in all calls as shown below.

````json
--header 'x-mobilepay-client-system-version: 2.1.1'
````

## API Responses

The MobilePay PoS V10 API uses HTTP 2XX status codes for successful requests, HTTP 4XX status codes for failed requests that failed due to a client error and HTTP 5XX status codes for failed requests that failed due to a server error. An overview of error codes used in the V10 API is given below.

| Status code                 | Description                                                                               |
|-----------------------------|-------------------------------------------------------------------------------------------|
| `200 OK`                    | The request succeeded.                                                                     |
| `204 No Content`            | The request succeeded but no response was returned.                                        |
| `400 Bad Request`           | The request is syntactically ill-formed or violates [validation rules](/docs/pos/input-and-output-formats).  |
| `401 Unauthorized`          | [Authentication](/docs/pos/api-principles#security-model) of the caller failed.                      |
| `403 Forbidden`             | The call was rejected due to insufficient permissions of the caller.                       |
| `404 Not Found`             | The specified resource does not exist.                                                     |
| `409 Conflict`              | The request was rejected due to the state of the underlying resource.                      |
| `500 Internal Server Error` | An unrecoverable internal server error occurred.                                            |

For most errors, the V10 API returns an error response body that includes an error code and an error description. The error response has the following structure:

```javascript
{
  "code": "19999",
  "message": "Tiny elves have invaded V10; we surrender",
  "CorrelationId": "197b2e31-787d-423f-ba00-0bd1f19291df"
}
```

## Error Handling

Clients integrating against the MobilePay PoS V10 API should expect intermittent errors and **must** implement suitable error handling. Errors can generally be classified into three categories: *network errors*, *server errors* and *client errors*. Network and server errors should be handled by retrying requests, while client errors should be handled by fixing the client request.

### Network and server errors

Network errors typically present themselves as timeouts or connections that are closed prematurely. Network errors and server errors (HTTP 5XX responses) should initially be handled by retrying requests. If errors persist despite retries, the flow should be cleaned up e.g. by cancelling. The PoS V10 API uses *idempotency* to ensure that requests can always be safely retried. Idempotency ensures that performing the same call multiple times will not cause additional state changes beyond those caused by the first call.

For instance, if a capture call on a payment is successful on the backend, but the connection to the client is closed before the client receives the response, then it is safe for the client to retry the capture call. The second capture call will immediately return with a `200 OK` response as the capture was already completed on the first capture call.

### Idempotency keys

In the case of `POST` endpoints that create new resources (e.g., initiating a payment or a refund) the backend cannot determine on its own whether two requests with identical request bodies is due to a retry or a request to create two resources. The PoS V10 API thus requires the client to set an *idempotency-key* header (`X-MobilePay-Idempotency-Key`) on each request when calling the following endpoints, to allow the backend to identify retried calls:

````json
POST /v10/payments
POST /v10/payments/prepare
POST /v10/refunds
POST /v10/pointofsales
````

For each call to the endpoints above, the client must generate a unique idempotency key for the given call. In case the client decides to retry a call due to a failure, the client **must** use the same idempotency key, to allow the backend to identify it as a retried call. We recommend using a client-generated *GUID* as the idempotency key.

For instance, if a client calls to initiate a payment with a unique idempotency key, *key1*, and the initiate call is successful but the client never receives the response due to an intermittent network issue, then it is safe to retry the initiate payment call with the same idempotency key, *key1*. Because the idempotency key is the same, the second call will not initiate a new payment, but rather return the `paymentId` of the already initiated payment.

All other endpoints in the PoS V10 API are naturally idempotent and do not require explicit idempotency keys to be set by the client.

The PoS V10 API stores idempotency keys for at least 24 hours. If a call is retried with the same idempotency key more than 24 hours after the original call, then the PoS V10 API does not guarantee that it will be handled as a retried call.

### Retrying requests

We recommend retrying failed requests due to network and server errors using one of these strategies:

* Retrying requests up to a fixed number of times with a constant delay between each call.
* Retrying requests up to a fixed number of times using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend).

We suggest retrying a failed request **2** times (which results in 3 requests including the first one).

You may at **max** retry **5** times (which results in 6 requests).

### Client errors

Client errors (HTTP 4XX) indicate a problem with the client request and can typically not be resolved by retrying the request. HTTP 409 errors typically indicate that the client and the PoS backend is out-of-sync about the state of a given resource (e.g. trying to capture a reservation that is not yet reserved or initiating
a payment on a PoS that already has an active payment). If possible, the client should try to query the given resource to fix any inconsistencies between the client and the PoS backend.

### Handling Timeouts

For requests that are slow to produce responses, the client has to set a timeout on the request using one of the following rules:

* For POST, DELETE, PUT requests set the timeout to 2 seconds using a suitable retry strategy from section [Retrying requests](/docs/pos/api-principles#retrying-requests). Remember to use the idempotency key for the POST requests that create a ressource.
* For non-polling GET requests set the timeout to 0.5 seconds using a suitable retry strategy from section [Retrying requests](/docs/pos/api-principles#retrying-requests)
* For polling GET requests set the timeout to 0.5 seconds and continue polling using the polling delay from the last received response.

## Call Throttling

Several flows in the PoS V10 API require the client to poll the PoS backend for state changes. To help protect against excessive polling, all endpoints used for polling in the PoS V10 API include a poll delay field to allow the backend to throttle polling calls from clients. The following polling endpoints include a `pollDelayInMs` field in the response body:

````json
GET /v10/payments/{paymentId}
GET /v10/refunds/{refundId}
GET /v10/pointofsales/{posId}/checkin
````

If a response includes a `pollDelayInMs` of 1000, the client **must** wait at least 1000ms (i.e. 1 second) before polling the same endpoint.

:::note
We recommend that clients directly use the `pollDelayInMs` response since a low polling delay can ensure a faster payment flow.
:::

In case no response is received when querying one of the above polling endpoints, then clients should either:

* Use the `pollDelayInMs` from the last successful call to the given endpoint.
* Continue polling using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend).
