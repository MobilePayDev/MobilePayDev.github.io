---
sidebar_position: 3
---

# Prepared Payment Flow

The prepared payment flow makes the payment accessible to the customer on creation, pending an amount. Only when the payment is readied will the customer be able to make the approval.

As an example, this flow could be used to start a payment before the payment amount is known. This could for instance be because goods are still being scanned at a cash register or to support loyalty flows.

The sequence diagram below illustrates a sunshine scenario for a prepared payment flow.

A prepared payment starts out in state *Prepared* and remains in this state until the payment is paired with a customer through a check-in. Once paired, the state transitions to *Paired*. Subsequently, polling of the payment can be done to retrieve a potential loyalty token. Once the payment is ready for customer approval, the client marks the payment as *Ready* and provides the payment amount. The payment is then issued to the customer and the payment state changes to *IssuedToUser*. Once the customer accepts the payment request and the payment amount has been reserved, the payment state transitions to the *Reserved* state. In this state, the payment can be cancelled or captured by the client resulting in the payment state transitioning to either the *CancelledByClient* or *Captured* state, respectively.

[![ReservationPrepareFlow](/img/pos-ReservationPrepareFlow.png)](/img/pos-ReservationPrepareFlow.png)

## Payment States for the Prepared Payment Flow

The diagram below shows all the possible states and transitions for a prepared payment flow. The "Prepared Payment Flow" state diagram expands upon the ["Payment Flow" state diagram](/docs/pos/payment-flows#payment-states-for-the-payment-flow) by adding two additional states, *Prepared* and *Paired*. The client and MobilePay can cancel a prepared payment. The customer can cancel a paired payment. The Payment states *Initiated*, *Prepared*, *Paired* and *IssuedToUser* are called *active* states and will block further payments on the same Point-of-Sale.

[![Prepared payment states](/img/pos-prepared-payment-states.png)](/img/pos-prepared-payment-states.png)
