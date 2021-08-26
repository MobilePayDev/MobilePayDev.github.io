---
sidebar_position: 2
---

# Authentication

The MobilePay API uses API keys to authenticate requests. They are used to get unlimited access to resources in your account.

OAuth access tokens are used to get authenticated and scoped access to any MobilePay account. Use them when your application accesses resources on behalf of account owners. I.e. you are an integrator.

## Get an API key

You can view and manage your API keys in the MobilePay portal. Sandbox keys will need to be generated in the sandbox portal while production in the main portal. Provide your API key as the bearer auth value.

:::note

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, etc.

:::

## Get an OAuth access token

As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf. Using the access tokens you receive using OAuth, you can build applications that integrate with MobilePay.

More information on implementation and best practices can be found [here.](https://developer.mobilepay.dk/developersupport/openid/)

## Usage

Authentication to API is performed using bearer auth along with client_id which is acquired in developer portal:

```jsx
-H "Authorization: Bearer {API_Key}"
-H "x-ibm-client-id: {client_id}"
```
