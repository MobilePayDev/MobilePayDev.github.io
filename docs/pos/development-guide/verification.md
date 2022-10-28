---
sidebar_position: 3
---

# Self-certification

After your test is complete you must complete a self-certification in order to get access to the production API and go live with your integration. MobilePay provides an automatic certification process where it is possible for most integrators to create a fully automated self-certification. The certification concludes with an automated report on how the certification went. For the PoS API all Major and Minor versions of clients must be certified.

## Access to self-certification

Before you can start self-certification you must have a signed agreement with MobilePay and receive a production clientId.
When your test is completed and you wish to start self-certification please [contact Developer support](mailto:developer@mobilepay.dk?subject=Request%20access%20to%20production%20Developer%20portal%20for%20MobilePay%20PoS&amp;body=Hi%20Developer%20support%2C%0A%0AWe%20have%20completede%20our%20test%20and%20request%20access%20to%20production%20developer%20portal%20for%20organization%3A%0A%0APlease%20invite%20following%20users%20to%20the%20portal%3A%0A%20%0ABest%20regards) to request production security credentials that will include the production clientId needed for the certification.

:::info Note
Production security credentials are not to be used for self-certification because this is performed in sandbox. Therefore you must use your security credentials from sandbox. The production security credentials should be used for production after self-certification. 
:::

## Self-certification process

The Self Certification process has four steps: Identification, Selection, Certification and Approval.

:::note
The bottom of this page contains configuration details for your client. You will need to use our self certification store, merchant and URL instead of your test credentials.
:::

### Identification Step

In the first step the Integrator identifies themselves in the tool. The following information is needed:

* Client IDs for Sandproduction and Production - ID created on the MobilePay Developer Portal which identifies the client to be certified. Each Integrator is allowed to create multiple Client IDs, however it is also acceptable to have just one Client ID.
* Version numbering - The three dimensional number that defines the version of the Client that needs to be certified. See [Client Identification](/docs/pos/api-principles#client-versioning)
* Client system name - the name of the software being certified.

### Selection Step

In the second step the Integrator selects which major features to certify. There are the following major features in MobilePay PoS API v10:

* Onboarding - The mandatory proces of creating a Point-of-Sale on the MobilePay backend.
* Payments - Certification in sections of the API necessary for doing a simple payment.
* Prepared payments - Certification in sections of the API necessary for doing a prepared payment.
* Payments with restrictions - Certification in sections of the API necessary for handling restrictions to payments.
* Prepared payments with restrictions - Certification in sections of the API necessary for handling restrictions to prepared payments.
* Refunds - Certification in sections of the API necessary for handling refunds.

[![Categories step](/img/pos-categories_step.PNG)](/img/pos-categories_step.PNG)

### Certification Step

In the third step the integrator goes through all the different certification cases necessary using their client. In this step it might be necessary to operate the client to go through the different steps of a certification case.

[![Onboarding cases](/img/pos-onboarding-cases.PNG)](/img/pos-onboarding-cases.PNG)

### Approval step

In the fourth and final step the Integrator gets a certificate proving that the client is certified. It is now possible for the client to access production.

In general, we urge all integrators to use this tool to do continuous testing. It is a requirement to re-certify when upgrading major or minor versions. We also recommended to use the tool when making new build versions. The tool will never retract a certification from a client version that has already been certified. Retraction of a certification will only be done after an individual evaluation by MobilePay based on input from production.

[![Approval step](/img/pos-approvalstep.PNG)](/img/pos-approvalstep.PNG)

### Configuration details

Please use the following data for configuring your client before commencing self certification.

| Self Certification info |  |
|---|---|
| Website link | [https://pos-certification.mobilepay.dk/mobilepay-pos-selfcertification-website/index.html](https://pos-certification.mobilepay.dk/mobilepay-pos-selfcertification-website/index.html) |
| PoS self-certification API base URL | [https://api.sandbox.mobilepay.dk/pos-self-certification-api/pos/v10](https://api.sandbox.mobilepay.dk/pos-self-certification-api/pos/v10) |
| Integrator Authentication API base URL | [https://api.sandbox.mobilepay.dk/integrator-authentication](https://api.sandbox.mobilepay.dk/integrator-authentication)
| merchantLocationId | 00001 |
| merchantBrandId | MPPOSCERT1 |
| VAT number DK | 90000028 |
| VAT number FI | 90000040 |
