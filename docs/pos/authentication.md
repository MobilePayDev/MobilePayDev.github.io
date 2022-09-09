---
sidebar_position: 3
---

# Integrator Authentication

The PoS V10 API uses access tokens to authenticate calls from integrator clients. In order for an integrator client to use the PoS V10 API, it must first obtain an access token using the Integrator Authentication API. The access tokens used in the PoS V10 solution identifies both an integrator client and the integrator and may optionally identify the merchant on which the client is calling on behalf of.

## Credentials Flow

The Integrator Authentication solution is based on the OpenID/OAuth 2.0 specification. By following the OpenID Connect protocol, MobilePay makes it easy for integrators to integrate with MobilePay. Currently, the flow supported is the Client Credentials grant type. In the Credentials Flow (defined in OAuth 2.0 RFC 6749, section 4.4), integrators pass along their `client_id` and `client_secret` (received in Step 5 above) to authenticate themselves and obtain an access token. The Credentials Flow is illustrated in the diagram below.

[![PoS sekvens diagram](/img/pos-sekvensdiagram.png)](/img/pos-sekvensdiagram.png)

 1. The client app authenticates with the Authorization Server using its `client_id` and `client_secret` using the token endpoint.
 2. The Authorization Server validates the `client_id` and `client_secret`.
 3. The Authorization Server responds with an `access_token`.
 4. The Client application can use the `access_token` to call the PoS V10 API.

 5. The PoS V10 API responds.

:::note
Oauth2 client secrets should not be stored in a way, where they can be accessed by someone from outside the integrator organisation.
:::

## Obtaining an access token

This document only describes the token endpoint used to request an access token. A complete specification of the endpoints, responses and response codes for the Integrator Authentication API can be found in the [APIs section](https://sandbox-developer.mobilepay.dk/product).

The token endpoint (`POST /connect/token`) is used when requesting an access token for an onboarded integrator client. The following
headers must be set:

```json title="Headers"
Content-Type: x-www-urlencoded
x-ibm-client-id: client_id
Authorization: Basic (client_id:client_secret).toBase64EncodedString().
```

The OAuth `client_id`and `client_secret` will be sent to the integrator in a closed zip file from [developer@mobilepay.dk](mailto:developer@mobilepay.dk) to integrators e-mail (step 4 in the [Client onboarding guide](/docs/pos/development-guide/getting-started#step-4---receive-security-credentials)).

In addition, the `grant_type` parameter must be set and a `merchant_vat` parameter may optionally be set as described below:

| Parameter | Value  | Description  |
| ---         |     ---   | ---  |
| `grant_type` | client_credentials | The Client Credentials grant type is used by clients to obtain an `access_token` outside of the context of a user.     |
| `merchant_vat` | DK12345678 or FI12345678 | VAT number of the merchant the integrator client is calling on behalf of. The VAT number consists of country prefix (either FI or DK) and 8 digits. |

If the `merchant_vat` parameter is supplied, the VAT number will be added as a claim on the access token, and it will only be possible to use the access token to perform calls on behalf of the given merchant. If it is not supplied, the access token will not be restricted to a fixed merchant. Instead, clients will have to include a header on all calls to the PoS V10 API that includes the VAT number of the merchant the client is acting on behalf of, for the given call.

Example of response body from SandBox environment:

```json title="Response body"
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "expires_in": 3700,
    "token_type": "Bearer",
    "scope": "integrator_scope"
}
```

### Expected status codes

You might encounter the following status codes :

* `200 - OK`  
* `401 - Unauthorized` if the client is not authorized/authenticated through the API Gateway

### cURL example

```json title="Example"
curl --location --request POST 'https://api.sandbox.mobilepay.dk/integrator-authentication/connect/token' \
--header 'x-ibm-client-id: {YOUR_GENERATED_CLIENT-ID}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic ({YOUR_CLIENT_ID}:{YOUR_CLIENT_SECRET}).toBase64EncodedString()' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'merchant_vat=DK12345678'
```

 **Environments:**
The following URLs are the environment routes for the Integrator Authentication API

* SandBox: `https://api.sandbox.mobilepay.dk/integrator-authentication`
* Production: `https://api.mobilepay.dk/integrator-authentication`
