---
sidebar_position: 6
---

# Cancel Flows

The V10 API supports cancelling of payments and refunds.

## Cancelling Payments

A payment is cancellable by the client until the state has changed to *Captured* or *ExpiredAndCancelled*. Furthermore, a payment can be cancelled by the customer when the payment is in state *Paired* or *IssuedToUser*.
Payments can be cancelled by calling the endpoint `POST /v10/payments/{paymentId}/cancel`. It requires the `paymentId` of the payment to be cancelled. When the payment has been cancelled the state transitions to *CancelledByClient*.
If the customer cancels the payment the state will transition to *CancelledByUser*.

The diagrams below show the sunshine scenarios for a payment cancelled by the client and a payment cancelled by the customer, respectively.
When the client cancels the payment a notification is sent to the app. The app returns to the pay screen with a message saying that the payment was cancelled by the shop.

[![Cancel by client](/img/pos-cancel-by-client.png)](/img/pos-cancel-by-client.png)

When the customer cancels the payment the app will show a message saying that the payment was cancelled. The status of the payment when queried will be *CancelledByUser*.

[![Cancel by user](/img/pos-cancel-by-user.png)](/img/pos-cancel-by-user.png)

The cancel funtionality can be used in various scenarios. It could be that the customer changed their mind about paying with MobilePay or that something in the request was not correct (maybe the customer added another item after the payment was initiated). In these cases the cancelling of the payment is straight forward and as shown in the diagrams above.

The cancel functionality can also be used in case of non-sunshine scenarios.
It could be if the call to initiate a payment is faulty or if the client never receives the response. In this case the client should either retry the call (as described in [Error Handling](/docs/pos/api-principles#error-handling)) or the client could try to get the `paymentId` by the `orderId` and cancel afterwards.

## Cancelling Refunds

A client can end up in situations, where the status of a refund is not known e.g. in cases, where parts of the solution is down, or there are network issues. In these cases, it is important, that the client retains information about refunds, that have been requested. It is then possible for the client to follow up on whether the refund should be cancelled or captured. Examples for either cancel or capture could be: In the case of cancel - the customer has received refund in cash instead. In the case of capture - the customer has left the store with information that the payment will be refunded.

A refund is cancellable until it reaches one of the states *CancelledByMobilePay*, *Captured* or *ExpiredAndCapturred*. Refunds can only be cancelled by the client since there is no customer involved in the process. A refund can be cancelled by calling the endpoint `POST /v10/refunds/{refundId}/cancel`. It requires the id of the refund that was returned when the refund was initiated.
When the refund has been cancelled the state transitions to *CancelledByClient*.

[![Cancel refund by client](/img/pos-cancel-refund-by-client.png)](/img/pos-cancel-refund-by-client.png)
