---
sidebar_position: 3
---

# Payment Flow Error Handling

Of all the ways a payment flow can fail, there are some error scenarios related to initiating payment flows that the client needs to focus on. The following sections describes how to handle payment-in-progress errors and how to handle payments hanging in the *Reserved* state.

## Payment in progress error handling

In the case of an unexpected restart of the client where the payment flow cannot be continued it might be necessary to cancel the active payment since there can be only one active payment on a PoS. If the ``paymentId`` of the active payment is lost it can be retrieved by calling ``GET /v10/payments`` using the ``posId`` and `orderId`. When the `paymentId` is retrieved the payment can be cancelled and the PoS is now ready for a new payment flow. A sequence diagram showing how to handle a payment-in-progress error is shown below.

<img
  src={require('/img/pos-initiate_payment_error_active_payment.png').default}
  alt="Initiate payment error"
  width="650"
/>

## Hanging payments in reserved state

The client is responsible for persisting if a reserved payment should be cancelled or captured. In case the client gets a timeout (or other errors resulting in failed calls) trying to either call capture or cancel on a payment, it is crucial that they persist whether the payment should be captured or cancelled so they can try again later.

It is required of the client to implement a periodically scheduled job of running through all their payments left in *Reserved* state, and try to either cancel or capture it. A sequence diagram of this flow is shown below. It is the responsibility of the client to keep track of the payments left in *Reserved* state.

<img
  src={require('/img/pos-capture_cancel_hanging_reservations.png').default}
  alt="Payment capture cancel"
  width="650"
/>
