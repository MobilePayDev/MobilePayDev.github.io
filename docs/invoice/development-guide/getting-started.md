# Getting started

This guide is designed to help get you started with MobilePay Invoice.
You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.

## Step 1 - Register

1. All merchants should order the product needed on the [MobilePay portal](https://admin.mobilepay.dk/)
    * Sign up as an [integrator](https://www.mobilepaygroup.com/partner/signup)
    * Sign certification agreement
2. Take a look at the API documentation. You'll find it in the [APIs menu](https://developer.mobilepay.dk/product).
3. You should already have received an email with an invitation to our Sandbox environment.
4. Go to [sandbox-developer.mobilepay.dk](https://sandbox-developer.mobilepay.dk/) and log in with your credentials.
5. Next you select your account > [My Apps](https://sandbox-developer.mobilepay.dk/application) > [Create new App](https://sandbox-developer.mobilepay.dk/application/new) to register a new application.

:::danger Important
Please make a note of your Client Secret as you will only see this once! You need to supply the x-ibm-client-id and x-ibm-client-secret when calling the api.
:::

You should always store the Client Secret in a secure location, and never reveal it publicly. If you suspect that the secret key has been compromised, you may reset it immediately by clicking the link on the application details page.

## Step 2 - Subscribe to API

To implement MobilePay Subscriptions, go to [APIs](https://sandbox-developer.mobilepay.dk/product) and subscribe to the following API:

* Invoice
* Invoice User Simulation

From the API-page you're able to call the api and get the appropiate responses

## Step 3 - Authentication

Once you have obtained credentials via zip file, set a redirect URI and received test data, you can start implementing the OpenID Connect flow. Read more about OpenID Connect and the process [here](/docs/invoice/authentication).

Currently, our network utilizes the global IP range **212.93.32.0/19**

As an external party, you might need to modify your firewall rules to allow traffic from us from 212.93.32.0/19 and 185.218.228.0/22 instead. Otherwise our traffic may be blocked, and our services stop working.
