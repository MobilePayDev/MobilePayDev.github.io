---
sidebar_position: 4
---

# Strong Customer Authentication

We aim to ensure Delegated Authentication (DA). This means that responsibility for authenticating the customer/payer no longer lies with the Issuer, but is delegated to MobilePay.  When/if we fail, and the Issuer is responding to an authorisation attempt with a Soft Decline/"step-up", a 3-D Secure fallback solution must be in place.

All of the SCA implementations are mandatory. Only Dankort can be skipped if you do not accept Dankort.

:::caution Note
Delegated Authentication can only be effectuated by the Issuer if the authorisation is based on a token. If you for some reason receive a PAN-based transaction from us, you should handle data in the card data callback as non-authenticated PAN-transactions according to scheme rules to ensure correct handling regarding SCA. If in doubt, please contact your acquirer.
:::

## Delegated authentication for Dankort

As long as you use the tags and values described here, all is well. Nets will recognize MobilePay and trust our authentication process.

Use POS code: ‘K005K0K00130’.

**Using Nets SDI specification**

* In Field S120 tag 36: the value of 8844101001
* In Field S120 tag 70 pos 14 (exemption Tag): the value of 3 for Delegated Authentication

**Using Nets TRG PSIP/ ISO 8583 / Merchant Guide SSL**

* In Field 47 tag 7R: the value of 8844101001
* In Field 47 tag V!: the value of 23

## Delegated authentication using tokens

Both Visa Token Service (VTS) and Mastercard S4C (MS4C) are based on the EMVCo standard. Please pass the data to the Acquirer, as you would do if the token response was from your own VTS or MS4C integration. In case you have questions to the Acquirer API, please ask the Acquirer.
When you get the token callback, if you internally (without calling anyone) know, that token will not work for this payment, please reply HTTP code 501, we will then immediately fail over to encrypted card data callback.

When you initiate a payment, make sure to use v3 of the API. Here you give a tokenCallbackUrl for all accepted Visa and Mastercard types. However, please also provide a carddataCallbackUrl as failover, because not all cards can be tokenized. For Dynamic Linking, please give us MerchantUrl and MerchantName.

When you recieve the token callback, you´ll find a cardIssuedInCountryCode (possible values DK, FI) you can use for your Acquirer routing logic.

Exactly as for encrypted card data callbacks, make sure you respond to the callback immediately. DO NOT leave the transaction "hanging" while you call out to the Acquirer. If we do not get a response to the callback in proper time we will allow the user to accept the payment again.

[![Token](/img/token.svg)](/img/token.svg)

### Delegated Authentication for Visa card

Example of Visa Token Service (VTS) response:

```json title="VTS token callback example"
{
   "paymentId":"8dab9219-ab03-4524-bae7-f0ad55119da5",
   "authorizationAttemptId":"32eedb2b-a536-4eb6-b618-c2d6c1bf7aab",
   "cardType":"VISA-CREDIT",
   "cardIssuedInCountryCode":"DK",
   "maskedCardNumber":"479694XXXXXX1234",
   "tokenMethod":"VTS",
   "tokenData":{
      "vPaymentDataID":"da17bd1568bdc8b418d71cf80c44ea02",
      "cryptogramInfo":{
         "cryptogram":"/wAAAAwAUkMTObMAAAAAgS0AAAA=",
         "eci":"07"
      },
      "paymentInstrument":{
         "last4":"1234",
         "paymentType":{
            "cardBrand":"VISA"
         },
         "paymentAccountReference":"V0010013020217426481676671969"
      },
      "tokenInfo":{
         "token":"4895737462013403",
         "last4":"3403",
         "expirationDate":{
            "month":"02",
            "year":"2023"
         }
      }
   },
   "isDelegatedAuthentication": false
}
```

### Delegated Authentication for Mastercard

Example of Mastercard S4C (MS4C) response:

```json title="MS4C token callback example"
{
   "paymentId":"1ba21790-5e10-4db1-8e90-330fb41916e7",
   "authorizationAttemptId":"3205ec7c-2d50-49d2-95dc-326e34edce47",
   "cardType":"MC-CREDIT",
   "cardIssuedInCountryCode":"DK",
   "maskedCardNumber":"520473XXXXXX4792",
   "tokenMethod":"MC S4C",
   "tokenData":{
      "token":{
         "paymentToken":"5204731613942625",
         "tokenExpirationMonth":"05",
         "tokenExpirationYear":"2024",
         "paymentAccountReference":"5001BO8B9NXVVIXCT0HAJU98I512Z"
      },
      "dynamicData":{
         "dynamicDataType":"CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM",
         "dynamicDataValue":"MD1eEaqbngDNAy0iuRqOAAADFEA="
      },
      "eci":"06"
   }
}
```

## 3DSecure Fallback

If Delegated Authentication fails, the 3DSecure fallback solution applies.

[![3DS fallback](/img/3dsfallback.svg)](/img/3dsfallback.svg)

When the user has completed the challenge, please immediately redirect to <https://products.mobilepay.dk/remote-website/apppages/done3ds.html>
For Sandbox use: <https://sandprod-products.mobilepay.dk/remote-website/apppages/done3ds.html>

If the user cancels the 3DS challenge on the 3DS website or if it fails in some way, you should fail the authorization attempt with reasonCode=1000 and redirect to the done3ds.html page. This will cancel the 3DS flow in the MobilePay app and allow the user to retry with another card (starting a new authorization attempt).

Optional: As soon as you have 3DS crypto from ACS and before retrying the authorization-attempt towards Acquirer and Issuer, you can call the MP backend with reasonCode=1009. This enables us to prevent the user from retrying with another card.
