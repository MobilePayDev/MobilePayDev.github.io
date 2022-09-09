---
sidebar_position: 1
---

# Getting started

You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.

## Sandbox environment

The MobilePay Sandbox is a self-contained, testing environment that mimics the live MobilePay production environment. It provides you the space to play around and test your implementation and the requests you make to the MobilePay API.

## Step 1 - Register

1. Take a look at the API documentation. You'll find it in the [APIs menu](https://sandbox-developer.mobilepay.dk/product).
2. Please fill out this [registration form](https://mobilepay.dk/erhverv/integrator-signup) to start the technical onboarding
3. The technical contact will recieve an invitation to our sandbox developer portal and must activate a user.

## Step 2 - Create app to get API credentials

* Go to [sandbox-developer.mobilepay.dk](https://sandbox-developer.mobilepay.dk/) and log in with your credentials.
* Next you select your account > [My Apps](https://sandbox-developer.mobilepay.dk/application) > [Create new App](https://sandbox-developer.mobilepay.dk/application/new) to register a new application.

:::danger Important
Please make a note of your Client Secret as you will only see this once! You need to supply the x-ibm-client-id and x-ibm-client-secret when calling the User simulation api but is not used for authentication when retreiving tokens. Security credentials will be sent in step 4.
Do not reset client-id because this will break your integration. You are free to reset client secret if needed.
:::

You should always store the Client Secret in a secure location, and never reveal it publicly. If you suspect that the secret key has been compromised, you may reset it immediately by clicking the link on the application details page.

## Step 3 - Subscribe to API

Once you have created the app please subscribe to these [APIs](https://sandbox-developer.mobilepay.dk/product):

* PoS V10 for integrators
* Integrator Authentication
* PoS User Simulation for Integrators
* PoS V10 for SelfCertification

## Step 4 - Receive security credentials

Once you have completede the above steps please contact Developer support to [request security credentials](mailto:developer@mobilepay.dk?subject=Request%20security%20credentials%20MobilePay%20PoS%20sandbox&amp;body=Hi%20Developer%20support%2C%0A%0AWe%20have%20completede%20step%201-3%20and%20wish%20to%20request%20security%20credentials%20for%20organization%3A%0A%0AThe%20password%20for%20the%20zip-file%20can%20be%20sent%20to%20phone%20number%20%28including%20area%20code%29%3A%0A%20%0ABest%20regards"). The credentials will be password protected, and you must supply a mobile phone number (including area code) to which we can send the password. We will then supply you with security credentials so you can start calling the API.

Please go to our GitHub documentation to read about [authentication](https://mobilepaydev.github.io/MobilePay-PoS-v10/pos_integratorauthentication).
