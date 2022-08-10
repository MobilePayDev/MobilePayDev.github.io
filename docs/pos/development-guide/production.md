# Production

After certification you will be able to use the production API and start onboarding your merchants to PoS. In this section you will find guidance and recommendations for production.

## Onboard production merchants

In order to start using the production API two things must be in place:

* [Completed self-certification with production clientId](https://mobilepaydev.github.io/MobilePay-PoS-v10/self_certification)
* Received production security credentials

For more information about this please visit the [self-certification site](/docs/pos/development-guide/verification).

When above topics are completed you can start to onboard your first merchant in production. We recommend that you select a pilot merchant to ensure that the integration is functional. Afterwards you can continue with a gradual role out.
If you are migrating from an earlier PoS version we also recommend to start the migration with a test merchant and then gradually migrate the remaining merchant base. We strongly recommend that you enable a roll back option to the former version in case of issues.

In the GitHub documentation you can find a section on how to onboard merchants under [Point-of-Sale management](https://mobilepaydev.github.io/MobilePay-PoS-v10/pos_management). If your merchants does not yet have a PoS solution use the 'No existing solution'. If your merchants already have an existing PoS solution use the 'Existing solution'.

## Merchant support

We distinguish between two types of support: business support and solution/technical support. Below defines who is responsible for what.

* **Business support**: If a merchant needs support during the business onboarding to MobilePay or afterwards needs support in regards to business related topics such as change of bank account, transfers etc. they can contact our Business Support. Contact information can be found [here](https://mobilepay.dk/hjaelp/mobilepay-til-erhverv#kontakt).
If merchant needs assistance in regards to business onboarding to your solution they should contact integrator.

:::tip
Be sure to inform and train your sales and support team on the onboarding process for your system. Our business support will assist the merchants with the MobilePay onboarding, but they cannot support the merchants when onboarding your system. Therefore it is important that your sales and support team are properly trained to do so.
:::

* **Solution/technical support**: If a merchant needs support or encounter issue with the PoS solution integrator is responsible for 1st level support. If integrators investigation shows and issue with MobilePay services they can contact Developer Support at developer@mobilepay.dk with relevant information and we will investigate the issue.
Please do not advise merchants to contact us directly as they cannot provide the needed details and are usually not familiar with the technical integration. This also applies to subcontractors and resellers. The support communication must be handled directly between MobilePay Developer Support and integrator.

## Integrator support

For ongoing technical support, technical questions or feature requests integrators can always contact Developer Support at developer@mobilepay.dk. The Developer Support team will review the request and respond as soon as possible, usually within a business day.

When contacting Developer Support please include as many details as possible relevant to the request. If it concerns a specific issue or bug please include the following and any other details that can be relevant:

* Merchant vat number
* StoreId
* posId
* BeaconId
* PaymentId
* Timestamp for error
* Error responses
* Screenshot if error in app
* Any logs that can be relevant to the issue

:::tip
Sign up for our operational mail list to be informed about any operational issues concerning PoS v10. Just contact developer@mobilepay.dk in order to be added to the mail list.
:::

## Confirmation screen

Details on the confirmation screen is important in order to ensure a good user experience and improve conversion rate. We highly recommend to use input that is recognisable by the user to avoid any uncertainties in the checkout experience.

<img
  src={require('/img/pos-confirmationscreen.png').default}
  alt="PoS confirmation screen"
  width="320"
  style={{float : 'right'}}
/>

* Logo: Is highly important as this is the most recognisable by the user. The logo is used for all stores under this the brand. This is uploaded by the merchant in our self-service portal
* Merchant brand name: This is the name of the brand used when creating the store. The brand name is shown for all stores using this brand. It is set by the merchant in our self-service portal
* Store: This is the name of the store. The name is only used on this specific store. It is set by the merchant in our self-service portal
* PoS name: This is the name of the specific PoS set when integrator created the posId through the API: POST /v10/pointofsales - "name"

Self-service portal: [DK](https://admin.mobilepay.dk/) | [FI](https://admin.mobilepay.fi/)

## Design guidelines

We want to make it easy for you to ensure that the right MobilePay buttons and logo's are used by the merchants. Proper use of our logo and buttons will ensure better user experience and conversion rate.
Please visit our [Design page](https://developer.mobilepay.dk/design) for more information and ressources.

We also have guidelines and templates for signs and stickers which can be found [here](https://www.mobilepay.dk/materialebank/marketingmateriale/skilte/skiltning-til-pos).
