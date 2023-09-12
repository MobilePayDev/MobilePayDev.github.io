---
sidebar_position: 9
---

# 💙🧡 Transition to One Platform

**One platform – more reach**

On November 1st 2022 the merger between MobilePay and Norwegian Vipps was approved. We have now set full speed on the transition towards having one joint platform to become the best and most used payment wallet in the Nordics for you as customers and partners and for our users. 
Early 2024, the ambition is to have one app, branded locally as MobilePay in Denmark and Finland and Vipps in Norway, and one platform with more than 11 million users and more than 400.000 merchants across the Nordics.  

## Shift to a new API early 2024

To allow for the flexibility and reach that we aim for, we will have to replace the current MobilePay Invoice API with new APIs on the new joint platform by early of 2024. This will require a new integration.  

### If you have an integration

We ask you to change your existing integration from Invoice APIs to [ePayment APIs](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/). This API has multiple options and variations how it can be used not just for Invoice payments. Here is some recomendations how you can create similar flow of Invoice payment on ePayments API [here](https://developer.vippsmobilepay.com/docs/solutions/invoice-through-epayments/).

We recommend:
1. Get familiar with [ePayment APIs](https://developer.vippsmobilepay.com/docs/APIs/epayment-api/)  documentation, [migration guide](https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide/#invoice-vs-epayment) and other related documentation for the [new platform](https://developer.vippsmobilepay.com/). 
2. If you are a partner, inform your merchants about your reintegration progress.
3. Get access to new [merchant test environment](https://www.mobilepaygroup.com/partner/merchant-test).
4. Implement new integration till Nordic Wallet Launch which will happen in 2024 Q1.
5. All Invoices which are sent and not paid will be canceled by system on Nordic wallet Launch day. We recommend you to recreated these invoices on the Nordic Wallet Launch day using ePayments API. 

### If you are using Invoice though partner

Please contact your partner for more information about its plans to reintegrate to new ePayment APIs on new platform.
 

## FAQ
1. Will users get a new app?

Yes, all app users will have to download the new app versions, this will be a force upgrade on Nordic Wallet Launch day. We will make sure, that user do not need to create new account, their profiles will be migrated to new platform. 

2. What will happen with Invoices which is already sent?

All Invoices which is send and not paid will be canceled by system. We recommend you to recreated these invoices on the Nordic Wallet Launch day using the ePayments API. 
