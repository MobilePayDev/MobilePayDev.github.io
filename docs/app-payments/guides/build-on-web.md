---
sidebar_position: 3
---

# Build on Web

This page details how MobilePay App Payments should be implemented in a browser or web app.
Prerequisites: You already have backend services integrated with [MobilePay APIs](/docs/app-payments/guides/how-it-works).

:::note Pilot
App Payments for web is still in pilot phase and therefore require approval. Please contact sales@mobilepay.dk if you wish to utilize the feature. 
:::

## Implementation

First, you'll need to create payment. To do this you should call your backend service that is implemented as described [here](/docs/app-payments/payments-refunds/create-payments). This service call should return a response that contains a universal link needed to launch the MobilePay app: mobilePayAppRedirectUri. You must redirect the user to mobilePayAppRedirectUri.

## Dual device and single device flow

App Payments for web supports both dual device and single device flows. It depends on which device the user uses when you redirect to mobilePayAppRedirectUri. Our landing page will detect if the redirect happens on a mobile device or not. Only the user experience will be affected by type of flow. The payment flow and API requests are the same regardless of flow type.

### Single device flow

<img
  src={require('/img/app-web-single.png').default}
  alt="App web single"
  width="500"
/>

If the redirect happens on a mobile device the MobilePay app will automatically be launched. The user can then accept or reject the payment and we will redirect the user to redirectUri afterwards. This url will always open in the default browser (determined by the operating system) of the mobile device.

If the MobilePay app is not installed and therefore cannot be opened our landing page will open in the browser instead and the flow will continue as a dual device flow.

### Dual device flow

<img
  src={require('/img/app-web-dual.png').default}
  alt="App web dual"
  width="850"
/>

If the redirect happens on a desktop device our landing page will open in the browser. The user can then insert the phone number or it can be pre-filled for more convenience. We will then send a push notification to the user's mobile device and the user can then accept or reject the payment in the MobilePay app. Afterwards the landing page in the desktop browser will redirect to redirectFromMobilePayUrl.

#### Prefill phone number
In dual device flow you can prefill the phone number so the user does not have to input anything on the MobilePay site
Initiate Payment: <br />
`POST /v1/payments`<br />
`“customerPhoneNumber”: “+4512345678”`

## Classic vs. Web

**App Payments Classic**

1. Initiate Payment `POST /v1/payments`
2. Redirect to mobilePayAppRedirectUri from **merchant app**
3. User accepts payment in MobilePay app
4. Get payment status: `GET /v1/payments/{PAYMENT_ID}` or use Webhook notification
5. User is redirected back to **merchant app** using redirectUri
6. Capture payment: `POST /v1/payments/{PAYMENT_ID}/capture`

**App Payments Web**

1. Initiate Payment `POST /v1/payments`
2. Redirect to mobilePayAppRedirectUri from **merchant website** (or web app)
3. User accepts payment in MobilePay app
4. Get payment status: `GET /v1/payments/{PAYMENT_ID}` or use Webhook notification
5. User is redirected back to **merchant website** using redirectUri
6. Capture payment: `POST /v1/payments/{PAYMENT_ID}/capture`

### One integration
You can use the same integration for classic and web. Only difference is that the redirect happens from and to browser (or web app) instead of native app.
* Same endpoints
* Same request
* Same payment flow

## Design guidelines
We want to make it easy for you to ensure that the right MobilePay buttons and logo's are used by the merchants. Proper use of our logo and buttons will ensure better user experience and conversion rate. Please visit our [Design page](https://mobilepaygroup.com/design) for more information and ressources.
