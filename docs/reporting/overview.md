# Overview

Reporting API allows you to query all transactions taking place at any of your MobilePay payment locations (payment points).

The main objective is to make it easier for you to do reconciliation on your side. We at MobilePay will provide you a detailed list of transactions (payments, fees, refunds) to help with that.
:::info
Reporting API lets you fetch transactions from **all products** offered by MobilePay:

- App payments
- Subscriptions
- Invoice
- MyShop
- PoS

:::


## Migration from transaction reporting API

Reporting API is a newer version of Transaction Reporting API, more about the old API you can find [here](https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/).

Also, you can use this guide on [how to migrate](../reporting/migrate-from-v1v2) from the old API.

## How does it work?

A settlement payout includes all your sales transactions from the previous day, net refunds and fees.
By using the API, you get a full list of all sales transactions and corresponding fees, totalling the settlement on your bank account.
You can reconcile your accounts with a high degree of data and transparency, moving your business towards always having up-to-date financial overviews.

:::note
If you chose to have fees invoiced, then fees will not be deducted directly by MobilePay, and instead you will need to reconcile against the invoices you receive.
**Invoiced fees are not visible in the API.**
:::

## General notes

:::important

This document does not represent all of the technical information about Reporting API.
This information can be found [here](../../api/reporting).

:::

:::note Payment Point Id

When using the Reporting API, you will be introduced to the term `paymentPointId` - uuid assigned to every payment point.
MobilePay has different API products and each product has their own payment points. `paymentPointId` might be named differently across products:

- In Subscriptions, `paymentPointId` is the same as `subscriptionProviderId`.

- In Invoices, `paymentPointId` is the same as `invoiceIssuerId`.

- In other products, it is the same.

:::