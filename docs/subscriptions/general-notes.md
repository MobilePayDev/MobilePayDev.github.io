---
sidebar_position: 3
---

# General notes

Billing your customers has never been easier before. This document explains how to make a technical integration to the MobilePay Subscription API. The audience for this document is either technical integrators acting on behalf of merchants or merchants themselves.

Our MobilePay Subscriptions REST API enables you to:

1. Establish and manage **Agreements** between you, the **Merchant**, and MobilePay **Users**.
2. Create **Subscription Payments** in relation to an established **Agreement** and get notified about the status via REST callbacks. **Subscription Payments** are requested 1 day before the actual booking date - no manual user confirmation is required!

This document does not include detailed specifications of the endpoints, responses, and response codes. This information can be found in the API section of the Developer Portal.

MobilePay Subscriptions is a full-fledged HTTPS REST API using JSON as request/response communication media.
All dates and time stamps use the ISO 8601 format: date format - `YYYY-MM-DD`, date-time format - `YYYY-MM-DDTHH:mm:ssZ`.
Amounts are enclosed in double quotation marks using `0.00` format, decimals separated with a dot.
When doing `POST`, `PATCH` or `PUT` requests, `Content-Type: application/json` HTTP header must be provided.

```console
curl --request POST --header 'Content-Type: application/json' --url https://<mobile-pay-root>/resource --data '{}'
```

## REST request correlation

_CorrelationId_ is an optional _[Guid](https://en.wikipedia.org/wiki/Globally_unique_identifier)_ header value that can be used to link requests on your back-end system to MobilePay Subscriptions business transaction for more convenient debugging.

```console
curl --header 'CorrelationId: 37b8450b-579b-489d-8698-c7800c65934c' --url https://<mobile-pay-root>/api/merchants/me/agreements
```

## REST callback authentication

Use one of these endpoints to set the REST callback authentication scheme and credentials:

* `PUT /api/providers/{providerId}/auth/oauth2` - set OAuth2 scheme which conforms to RFC 6749 [section 4.4.](https://tools.ietf.org/html/rfc6749#section-4.4).
* `PUT /api/providers/{providerId}/auth/basic` - set Basic auth scheme using username and password.
* `PUT /api/providers/{providerId}/auth/apikey` - set a value which will be set to the _Authorization_ header. The API key must conform to the token68 specification as defined in RFC 7235 [section2.1.](https://tools.ietf.org/html/rfc7235#section-2.1).

## REST callback retries

Once the payment or agreement changes state, a callback will be done to the callback address, which is configurable via `PATCH /api/providers/{providerId}` with path value `/payment_status_callback_url`. Note that callbacks can only be delivered using ports 80 and 443.

In case the REST callback failed, 8 retries will be made using the [exponential back-off algorithm](https://en.wikipedia.org/wiki/Exponential_backoff), where N - next retry time, c - retry attempt number, R - second retry time in seconds (1st retry is an exception and is done after 5 seconds):

![Exponential backoff](/img/subs-RecurringPayments_ExponentialBackoff.gif)

* 1st retry – 5 seconds
* 2nd retry – 10 minutes after 1st retry
* 3rd retry – 30 minutes after 2nd retry
* 4th retry – 1h 10 minutes after 3rd retry
* 5th retry – 2h 30 minutes after 4th retry
* 6th retry – 5h 10 minutes after 5th retry
* 7th retry – 10h 30 minutes after 6th retry
* 8th retry – 21h 10 minutes after 7th retry

## Merchant onboarding

You enroll in the Subscriptions Production via [www.MobilePay.dk](https://mobilepay.dk/da-dk/Pages/mobilepay.aspx) or the MobilePay Administration portal. Then you get access to the MobilePay Sandbox environment, where you can test the API.  

Once you sign up, you'll receive a welcome email containing everything you need to get going right away. While we encourage you to start exploring our API right away, we highly recommend getting in touch with us at developer@vippsmobilepay.com before you go too far down your integration path. MobilePay has dedicated technical resources available to help you plan and build the right integration, avoid pitfalls, and get live as quickly as possible.
