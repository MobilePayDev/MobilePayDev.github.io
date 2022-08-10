# Production payments

Understanding what happens in the natural course of a subscription helps provide the smoothest experience for both you and your users. Seen as you're using our platform, we are happy to provide you with tips & tricks to handle the payments.

## Payments

You can issue a Subscription Payment maximum **126** days before the due date, and at at least 1days before the due date.

* **Due Date**
  * **Due Date Payments** cannot be created with the same Due Date.
  * **Multiple Recurring payments** can be created within period [126 before Due Date >= Payment Request Date >= 1 before Due Date]
  * **Next Payment Date** If there are multiple pending payments, the Next Payment Date is the one closest to Today
* **Frequency**
  * Valid values are 0, 1, 2, 4, 12, 26, 52, 365. For example: If you have a customer where the frequency of an agreement is set to 4, that means 365 / 4 = 91.25 (approximately quarterly).
* **Payment Limit**
  * If your services cost more than 15.000 DKK please refer to the guidelines regarding payment limits on this page.

## Subscriptions Payment Flow

### How are the payments validated

There are validation rules; however the payments are not validated until they have been created in our system. Therefore, even though you get a response with pending payments, they may not be valid.  When you make a payment request, we will validate the request itself, but not the individual payments. So it only validates if you have the required parameters with the correct types. So the response you get for the payment request, does not say if the payment is pending, but if the payment creation is pending. Then the payments are processed in our system, and they will either be requested (valid) or declined (invalid). Moreover, you will receive a callback to inform whether payments are requested or declined. This will be sent to your payment status callback.

### How should I send the payments

* You can send your payments to us **max 126 days** prior to the due date and **min 1 day** prior to the due date.
* The MobilePay user will be able to see payments in the app **1 day before due date**.
* If a payment changes status e.g. declined by user, a callback on the specific payment will be made.
* On due date we process the payments starting from **02:00**. If some payments are declined we will then try again approx. every 2. hour up until 23:59.
* If payment errors occur the user will get a notification approx. **08:30** that we can not process payment and that he/she can complete the payment manually (by correcting error and swiping).
* On 23:59 we will decline the transaction and revert back with a callback.

## Failed Payments flow

The process on failed payments the Due Date is as follows:

* 06:00 First hiccup is run at 06:00 on the due date. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment
* 13:30 Second hiccup is run at 13:30 on the due date. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment.
* 18:00 20:00 22:30 - hiccups keep running throughout the day. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment.

## Transaction reporting api

With the Transaction Reporting API, you can quickly find all information associated with each of your payment. When using the Transaction Reporting API, you will be introduced to the terms:

* `paymentPointId`
* `ExternalTransactionID`
* `payment_transaction_id`
* `Merchant Payer Reference`

In the table below, you can map the field in the Subscriptions API to the field in the Transaction Reporting Api. Furthermore, you can see who provides the different fields, when initiating payments.

Please use the table below for correlating transactions between MobilePay Subscriptions and external merchant / integrator system.

|Field in Transaction Reporting Api | Field in Subscriptions Api | Who sets it? | Viewable in the MobilePay app | Description |
|--|--|--|--|--|
|`ExternalTransactionID` string|  `external_id` for recurring payments and one_off_payment. `external_id` for one-off payments will be used in bank statement in fields| Merchant | YES| It is provided by merchant / payment integrator when initiating payments and is used for correlating transactions between MobilePay and external merchant or integrator system. *Recommendation:* Use the order ID, so it is easy for the customer to see on the receipt itself, what they are paying for. The `orderID` should be unique for each customer.|
|`paymentPointId` GUID | `SubscriptionsProviderID` | MobilePay|NO|is a GUID assigned to payment point. You can call GET /api/merchants/me, which will return a list of all subscription providers, associated with that merchant. Read more here  |
| `Merchant Payer Reference` string| `external_id` for agreements |Merchant | YES + the `external_id` is included in the subject field, when/if the customer sends an email from the MobilePay app. *Recommendation:* Use Customer ID, so it is easy for the Support Unit at Merchant side to know, who the customer is |
| `merchant_reference` string| `external_id` for payments | Merchant |The identifier assigned by merchant to the specific payment. This is what the merchant should use to book against in their own systems when reconciling. |
|`payment_transaction_id` |  |MobilePay |YES | |includes `payment_transaction_id` for all payments: recurring; one-off; refund. The Transaction ID is visible on the receipt screen. |

## Subscriptions API - Transfers

It is important to know which transfer type are possible to use as a merchant. There are two:

* Instant Transfer
* Daily Transfer

| | Instant Transfer | Daily Transfer |
|--|--|--|
|**WHEN TRANSFER IS DONE**|MobilePay transfers **instantly**  after the payment is completed. Transfer might reach Merchant account later then MobilePay executes transfers. It depends on Merchant bank transfer times.|MobilePay transfers  **once per day**, at night. Payments payed on day X will be transferred on day X+1. Transfer might reach Merchant account later than MobilePay executes transfers. It depends on Merchant bank transfer times.|
|**REFERENCE NUMBER**|Field **external_id**  for recurring payments and one_off_payment.  `external_id`  for one-off payments is used as Reference number.|Reference number is generated by MobilePay. External Rules [here](/docs/support/faq#what-is-payment-reference).|
|**HOW TO SET IT**| Merchant can set  **Instant transfers**  for each Subscription provider in MobilePay portal.|Merchant can set  **Daily transfers**  for each Subscription provider in MobilePay portal.|
|**BANK STATEMENT**|**`external_id`** for recurring payments and one_off_payment.`external_id` for one-off payments will be used in bank statement in fields. DK: Text field. FI: Text field and Reference no. field.| MobilePay generated reference number will be used in bank statement in fields. DK: Text field. FI: Text field and Reference no. field.|
|**Refund**|Currently it is not possible to refund when the merchant has chosen 'instant transfer' method.|You can only refund your customers if you have received payments with MobilePay on the day to cover the refund|
