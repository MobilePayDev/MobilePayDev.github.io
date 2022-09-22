---
sidebar_position: 2
---

# Authentication

We are providing two different options for authentification. The first one is [OAuth](#get-an-oauth-access-token) which is used to get authenticated and scoped access to any MobilePay merchant account. Use them when your application will access resources on behalf of multiple MobilePay merchant accounts, i.e. you are an integrator. Second option is [API keys](#api-keys). They are used to get unlimited access to resources in your merchant account.

## Get an OAuth access token

As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf. 

Using the access tokens you receive using OAuth, you can build applications that integrate with MobilePay.

More information on implementation and best practices can be found [here.](https://developer.mobilepay.dk/developersupport/openid/)

## API keys

### Securing API key 


:::important

Store your API keys private and secure and do not share with someone you don't trust. Anyone with your API key can access all MobilePay APIs that are in scope of that key on behalf of you.

:::

 Keep in mind on securing keys: 
* Do not leave API keys in publicly accessible areas such as GitHub, client-side code, etc.
* Delete your API keys if you suspect that unauthorized people know them. Note that deleted API keys will not work. In that case, you will need to create new API keys and update authorization headers.
* Delete old API keys you are no longer using to avoid any external exposure.
* Regenerate your API keys periodically.
* Restrict your API key only to APIs you are going to use.

### Get an API key
You can view and manage your API keys in the [MobilePay portal](https://portal.mobilepay.dk/developer). Meanwhile, sandbox keys are generated in the [sandbox version of MobilePay portal](https://sandprod-portal.mobilepay.dk/developer) and will be applicable only on sandbox environment.

When creating an API key you need to select APIs which will be accessible using this key. You can also assign it a name. Once API key is generated, it is not  possible to change the scope or the name. Modifications must be carried out by creating a new API key. Lastly, you are fully responsible for managing the lifecycle of the keys you have created.

![](/img/create-api-key.gif)

## Usage

To perform successfull authorization provide:
* **API key** - generated as described before (OAuth access token (JWT) or API key)

```jsx
-H "Authorization: Bearer {API key}"
```
