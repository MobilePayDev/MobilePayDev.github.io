---
sidebar_position: 1
---

# Recurring Payments

By using the MobilePay Online Recurring API, merchants can initiate a payment agreement for MobilePay users.
The payment agreement, if accepted by the user, enables the merchant (through their PSP) to automatically charge the user for future payments without the need for user interaction every time. Both scheduled and unscheduled recurring payments are possible.

:::info
A recurring payment agreement is always created alongside a Customer Initiated Transaction (CIT). I.e. the customer is present and actively requesting the initial transaction and the agreement.
The subsequent recurring payments are Merchant Initiated Transactions (MIT) where the customer is not present. Recurring agreements are not to be used for one-off payments where the customer is present (only exception being the initial transaction).  
:::

## End user experience

### Create agreement

A user accepts a commercial agreement for a subscription in a web shop and opts to checkout with MobilePay.
In the MobilePay app, the user accepts that the merchant can carry out recurring payments (in accordance with the commercial agreement between the user and merchant) through MobilePay.  

[![Create agreement](/img/online_rec-create_agreement.jpg)](/img/online_rec-create_agreement.jpg)

### Completing a recurring payment (Merchant initiated transaction)

After the user has accepted recurring payments in MobilePay, the merchant/PSP can carry out recurring transactions in accordance with their agreement with the user.
When a transaction is captured, the user will receive a notification on their phone.

<img
  src={require('/img/online_rec-app_flows-MIT.jpg').default}
  alt="MIT"
  width="725"
/>

### Manage recurring payment agreements

The user can access details of the recurring payment agreement in MobilePay such as a list of payment authorizations and other info about the agreement.
In addition, the user can change the card on the agreement or terminate the agreement. These actions will result in a callback to the PSP.

[![Manage agreement](/img/online_rec-app_flows-manage-agreement.jpg)](/img/online_rec-app_flows-manage-agreement.jpg)

## Sequence diagrams

In the bottom of this page you will find [diagrams](#sequence-diagrams-overview) describing how the solution works including which endpoints are involved.
All described flows must be supported by the PSP.

:::note
A recurring agreement must be requested using our new recurring API, but the authorization of the transaction is still done using our existing API.
Please observe details on the endpoints to be used in the sequence diagrams below.
:::

## Account verification

When creating a new recurring payment agreement, the integrator must set an amount for the initial transaction.
If an upfront amount is due to be payed immediately upon acceptance of the agreement, the integrator simply sets this amount.
However, if there is no upfront amount, the integrator must mark isAccountVerification and provide an amount between 0,00 and 1,00 units of the selected currency.
Marking a transaction as an account verification influences how the transaction is presented to the end user.

## Card Update

At any point after a payment agreement has been created, the end user can change the payment card connected to the agreement.
When this happens, the new card will be sent to the integrator for account verification.
The integrator must support this functionality and must use updateCardCallbackUrl when requesting a new agreement to specify how they want to receive these card updates.

### Avoiding card mismatch

To initiate a MIT payment, the integrator must supply the last 4 PAN digits of the card they are trying to charge.
This is to ensure that integrator and MobilePay data are still in sync, so any MIT's are only performed using the card expected to be used by the end user.
If the card is tokenized, we always supply the last 4 digits of the PAN along with our token callbacks as part of the maskedCardNumber value.

If a card mismatch is detected, we will immediately ask the end user to perform a card update on the agreement. The merchant should also communicate about this to the end user.
The integrator should try again only after receiving a successful card update callback on UpdateCardCallbackUrl.

Example of push notification on card mismatch:

<img
  src={require('/img/online_rec-push-card-mismatch.png').default}
  alt="Push card mismatch"
  width="375"
/>

### Soft decline / 3DS

A card update might be soft declined by the issuer so the integrator must support our 3DS flow for card updates similar to how 3DS is handled for regular MobilePay Online payments.

## Failed MIT transaction

If a MIT transactions fails at PSP/Acquirer/Issuer, the integrator should provide us with the appropiate error and reason code (see below).
We will immediately send a push notfication to the end user about the failed transaction:

<img
  src={require('/img/online_rec-push-failed-MIT.png').default}
  alt="Push failed MIT"
  width="375"
/>

Note that we are not always able to identify whether the user has carried out any actions to resolve the issue. E.g. we will not be informed if the user unblocks their card or adds funds to their bank account etc.
However, a subsequent card update callback can be considered a valid cue to retry the MIT - the card update could be the user replacing an expired card or using another card that is not blocked etc.
We allow the integrator to retry a MIT again at any time but it is up to the integrator/merchant to define appropriate retry policies and determine acceptable grace periods etc.
Failed MITs should also trigger communication directly from the merchant to the user to increase the chance of resolving the matter.

### Retrying a MIT

When retrying a MIT, use the UpdateMITPaymentRequest endpoint to provide the outcome of the retry. Do not create a new MIT for every retry attempt.

### Soft decline / 3DS on MITs

We do not expect MITs to be soft declined but if it happens, the integrator should consider the transaction as failed. We do not support 3DS challenges for MITs.

## Capture/cancel/refund

Integrators must provide information about capture/cancel/refund events for transactions performed on a recurring payment agreement - the same as for regular MobilePay Online transactions.
We do not currently reflect all of these events towards the end user, but they are used for billing purposes and incident handling.

## Sequence diagrams overview

The following diagrams describe how the solution works including which endpoints are involved.

### Create and activate recurring agreement

[![Create agreement](/img/online_rec-CreateRecurringAgreement.png)](/img/online_rec-CreateRecurringAgreement.png)

### Create MIT payment

[![Create MIT payment](/img/online_rec-CreateMITPayment.png)](/img/online_rec-CreateMITPayment.png)

### Merchant/PSP terminates agreement

[![Terminate agreement merchant](/img/online_rec-TerminateRecurringAgreementMerchant.png)](/img/online_rec-TerminateRecurringAgreementMerchant.png)

### User terminates recurring agreement via MobilePay

[![Terminate agreement user](/img/online_rec-TerminateRecurringAgreement-User.png)](/img/online_rec-TerminateRecurringAgreement-User.png)

### User terminates recurring agreement via SelfServiceUrl

[![Delete agreement merchant](/img/online_rec-DeleteRecurringAgreementMerchant.png)](/img/online_rec-DeleteRecurringAgreementMerchant.png)

### User updates the card of a recurring agreement

[![Update card](/img/online_rec-UpdateAgreementCard.png)](/img/online_rec-UpdateAgreementCard.png)