---
sidebar_position: 3
---

# Build Basics

To build great applications with MobilePay APIs, you should learn about the basic design principles that form the foundation of MobilePay APIs. These principles include base elements of the data model, secured access, error handling, and more.

## Using the REST API

The MobilePay API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). You manage the resources of a MobilePay account (such as payments, refunds, webhooks) by making HTTPS requests to URLs that represent those resources.

## Handling Errors

Clients integrating against the MobilePay API should expect intermittent errors and must implement suitable error handling. Errors can generally be classified into three categories: network errors, server errors, and client errors. Network and server errors should be handled by retrying requests, while client errors should be handled by fixing the client request.

### Network and Server Errors

Network errors typically present themselves as timeouts or connections that are closed prematurely. Network errors and server errors (HTTP 5XX responses) should initially be handled by retrying requests. If errors persist despite retries, the flow should be cleaned up e.g. by canceling. The MobilePay API uses [idempotency](#idempotency) to ensure that requests can always be safely retried. Idempotency ensures that performing the same call multiple times will not cause additional state changes beyond those caused by the first call.

For instance, if a capture call on a payment is successful on the backend, but the connection to the client is closed before the client receives the response, then it is safe for the client to retry the capture call. The second capture call will immediately return with a 200 OK response as the capture was already completed on the first capture call.

### Retry policy

We recommend retrying failed requests due to network and server errors using one of these strategies:

* Retrying requests up to a fixed number of times with a constant delay between each call.

* Retrying requests up to a fixed number of times using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend).

We suggest retrying a failed request **2** times (which results in 3 requests including the first one).

You may retry **max 5** times (which results in 6 requests).

## Working with Dates

All MobilePay endpoints expect dates and timestamps as strings in UTC (such as, "2013-01-15T00:00:00Z"). [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

## Working with Monetary Amounts

The amounts should be specified as positive integers representing how much to charge in the smallest currency unit (e.g., 100 cents to charge €1.00 or 100 øre to charge 1.00 kr.).

Example:

* Input: 'Amount: 2000' equals 20 DKK or 20 EUR.

* Input: 'Amount: 52050' equals 520,50 DKK or 520,50 EUR.

:::note
The minimum amount is 1. The maximum amount is defined by user's daily/yearly limits. These rules apply for all countries (Denmark, Finland).
:::

## Idempotency

By definition [idempotence](https://en.wikipedia.org/wiki/Idempotence) is a property of operations whereby they can be applied multiple times without changing the result beyond the initial application. As per HTTP spec all of GET and DELETE endpoints are idempotent in MobilePay. For certain POST requests we also ensure idempotency by using IdempotencyKey. After receiving the same key the endpoint returns the previous response and does not invoke any side effects. We require IdempotencyKey to be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). It must be regenerated for each request unless the request is being retried.

## Correlation IDs

A correlation ID is a unique ID assigned to every transaction. When a transaction becomes distributed across multiple services, we can follow it using the logging information. The correlation ID is passed from service to service. All services that process that specific transaction receive the correlation ID and pass it to the next service and so on so that they can log any events associated with that transaction to our centralized logs. This helps us hugely when we have to visualize and understand what has happened with this transaction across different microservices.

Using MobilePay APIs you can provide your own Correlation ID in request header:

```bash
-H "CorrelationId: 22a38d79-2ec2-4d90-8375-460a1erwrwee5b"
```

If none is provided then our systems will generate it. You will be made aware of it only during errors.
**If you need to contact us about a specific request, providing the correlation ID will ensure the fastest-possible resolution.**

## Design Guidelines

Our logo acts as a unique signature - a symbol and identifier for MobilePay. It’s a constant reminder of the joyful exchanges and wonders we are offering.

Consistent use of our logo helps build trust and recognition across markets, and in all situations. Use it with care. And respect.
You can find resources and guidelines [here](https://developer.mobilepay.dk/design).

## Valid characters

Valid characters for string type request fields are:

* 0 - 9
* a-zA-Z
* æÆøØåÅ
* äÄöÖšŠžŽâÂàÀáÁãÃéÉêÊëËèÈíÍîÎïÏìÌüÜûÛùÙúÚôÔòÒóÓõÕÿýÝñÑ
* !#$%&'()*+,-./:;<=>?@[]^_`{|}~¦¯¨´
* «»ðþçß¤ÇµÐÞ±°ªº©§¶¼½¾¬®¢£¥¡¿¹²³
* (space)
