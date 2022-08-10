# Self-certification

After your test is complete you must complete a self-certification in order to get access to the production API and go live with your integration. You can read about the self-certifiation tool [here](https://mobilepaydev.github.io/MobilePay-PoS-v10/self_certification).

## Access to production and self-certification

Before you can start self-certification you must have a signed agreement with MobilePay and access to our production developer portal.

### Step 1 - Access to production developer portal

When your test is completed and you wish to start self-certification please [contact Developer support](mailto:developer@mobilepay.dk?subject=Request%20access%20to%20production%20Developer%20portal%20for%20MobilePay%20PoS&amp;body=Hi%20Developer%20support%2C%0A%0AWe%20have%20completede%20our%20test%20and%20request%20access%20to%20production%20developer%20portal%20for%20organization%3A%0A%0APlease%20invite%20following%20users%20to%20the%20portal%3A%0A%20%0ABest%20regards) to get access to production developer portal.
You must inform Developer support which users should have access to the portal, and these will then receive an invitation to the production developer portal.

### Step 2 - Create app to get API credentials

1. Go to <https://developer.mobilepay.dk/user/login> and log in with your credentials.
2. Next you select your account > [My Apps](https://sandbox-developer.mobilepay.dk/applicationhttps://developer.mobilepay.dk/application) > [Create new App](https://developer.mobilepay.dk/application/new) to register a new application.
   * Naming convention: Please name your app according to the name of your point of sale system.  

:::danger IMPORTANT
Do not reset client-id because this will brake your integration. For production you will not need the client-secret, and therefor you do not need to store it.
:::

### Step 3 - Subscribe to APIs

Once you have created the app please subscribe to these [APIs](https://sandbox-developer.mobilepay.dk/product):

* PoS for Integrators
* Integrator Authentication

### Step 4 - Receive security credentials

Contact Developer support to [request security credentials](mailto:developer@mobilepay.dk?subject=Request%20security%20credentials%20MobilePay%20PoS%20Production&amp;body=Hi%20Developer%20support%2C%0A%0AWe%20have%20completede%20step%201-3%20and%20wish%20to%20request%20security%20credentials%20for%20organization%3A%0A%0AThe%20password%20for%20the%20zip-file%20can%20be%20sent%20to%20phone%20number%20%28including%20area%20code%29%3A%0A%20%0ABest%20regards). The credentials will be password protected, and you must supply a mobile phone number (including area code) to which we can send the password.

:::info Note
Production security credentials are not to be used for self-certification because this is performed in sandbox. The security credentials should be used for production after self-certification.
:::

### Step 5 - Self-certification

When you have received the security credentials you are ready to complete the self-certication. Find information about self-certification [here](https://mobilepaydev.github.io/MobilePay-PoS-v10/self_certification).

Note that you must continue using your Sandprod ClientId + Credentials when doing self-certification. As soons as you have passed the self-certification you can start using the production API.
