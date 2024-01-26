---
sidebar_position: 15
---

# Transition to One Platform

**One platform – more reach**

On November 1st 2022 the merger between MobilePay and Norwegian Vipps was approved. We have now set full speed on the transition towards having one joint platform to become the best and most used payment wallet in the Nordics for you as customers and partners and for our users. 
Early 2024, the ambition is to have one app, branded locally as MobilePay in Denmark and Finland and Vipps in Norway, and one platform with more than 11 million users and more than 400.000 merchants across the Nordics.  

## Shift to a new API early 2024

To allow for the flexibility and reach that we aim for, we will have to replace the current MobilePay Point of Sale API with new APIs on the new joint platform by early of 2024. This will require a new integration.  

**Nordic Wallet Launch 🚀** - this will be the the day when all MobilePay users will get new, updaraded app version. On the same date Invoice APIs will stop working and you will have to switch your trafic to ePayments APIs. 
- **January 23rd** we will launch the new platform in **Finland** and migrate all Finnish merchants. 
- **March 12th** we will launch the new platform in **Denmark** and migrate all Danish merchants.
 
**One entrance opening for several options** 

The new setup will offer one entrance to our platform, opening for easier access via underlying APIs to value added services. For instore we will move even further in the direction that we have already taken, towards a much more flexible setup, putting considerable development resources into QR code solutions, which opens opportunities for features such as Receipts, Coupons, Log in and Loyalty to a start.  

## New integration

We will continually send out information to all existing integrators about the new integration. To read more about the solution replacing MobilePay PoS please find details [here]([https://www.mobilepaygroup.com/partner/new-platform](https://vippsmobilepay.com/new-platform)). On this page you can also request access to the test environment to initiate the new integration work. 
For technical changes of the integration please visit the [migration guide](https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide/#point-of-sale-vs-epayment). As soon as we have more information on the documentation for the new version, we will update these page. 

## FAQ
### What will happen to the merchants signed up for MobilePay PoS?
To make the transition as smooth as possible, we will migrate all merchants and their data to the new platform. They will be signed up for ePayments which is the replacement for PoS. As an integrator your responsibility is to implement the new solution and make it available for your merchants.

### What will happen if we use the MobilePay PoS API after launch of the new platform?
It will take a while before we close the old platform so it will be possible to initiate payments on the old MobilePay PoS API after we launch our new platform. But it will not be possible for any users to accept these payments because we have moved all users to our new platform. This means that you will not receive any API errors when attempting to initiate payments (or make any other requests to the API). But the payments will stay in status initiated and no user will be able to interact with the payments.

### Is it possible to reuse the existing QR codes?
Yes it is possible to register the existing MobilePay PoS QR codes on the new platform. Please visit the [migration guide](https://developer.vippsmobilepay.com/docs/mp-migration-guide/pos/#checkout-neither-has-qr-scanners-nor-customer-facing-screens) for more information.

### What happens if a user scan a MobilePay PoS QR code after the launch of the new platform?
User will get a new app on the day of the launch. If you have [migrated the QR code](https://developer.vippsmobilepay.com/docs/mp-migration-guide/pos/#checkout-neither-has-qr-scanners-nor-customer-facing-screens) to the new platform then it can be used for ePayments and users can scan it with the new. If you have not migrated the QR code (and it therefore does not exist on the new platform) then the user will see an error in the app stating that we cannot recognize the QR code. It is therefore important that you migrate the QR codes or remove them. 
