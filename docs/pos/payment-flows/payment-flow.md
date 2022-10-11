---
sidebar_position: 1
---

# Payment Flow

The payment flow makes the payment ready for customer approval immediately upon creation. The sequence diagram below illustrates a sunshine scenario for a payment flow.

The customer checks in on the PoS and receives information about the store on his device. Then, the client initiates a payment on the PoS which is immediately ready for approval and issued to the customer. The payment is now in the *IssuedToUser* state and will remain there until the customer accepts the payment and the payment amount has been reserved. At that point the payment will transition to the *Reserved* state. In this state, the payment can be cancelled or captured by the client resulting in the payment state transitioning to either the *Cancelled* or *Captured* state, respectively.

[![PaymentAfterCheckIn](/img/pos-PaymentFlow-PaymentAfterCheckIn.png)](/img/pos-PaymentFlow-PaymentAfterCheckIn.png)

It is also possible to initiate a payment on a PoS without an active check-in, as shown in the sequence diagram below. In this case the payment state starts out as *Initiated* and remains in that state until a customer is paired with the payment through a check-in. At that point the payment request is immediately issued to the customer and the state of the payment transitions to *IssuedToUser*. The rest of the flow proceeds in the same way as the scenario above.

[![PaymentBeforeCheckIn](/img/pos-PaymentFlow-PaymentBeforeCheckIn.png)](/img/pos-PaymentFlow-PaymentBeforeCheckIn.png)

## Payment States for the Payment Flow

The diagram below shows all the possible states and transitions for a Payment flow. A payment can be cancelled by the customer until the customer has accepted the payment and the payment amount has been reserved. A payment can be cancelled by the client until it is captured or expires. After a payment has been captured, it can be [refunded](#refunds), but can no longer be cancelled. A payment expires if it is neither cancelled nor captured within the lifetime of the reservation which is 7 days. If a payment expires, the state transitions to *ExpiredAndCancelled*.
A payment in the *Initiated* or *IssuedToUser* state can also be cancelled by MobilePay if it has been inactive for too long or an error occurs while reserving the payment amount on the customer's card or account. If a payment is
cancelled by MobilePay the state transitions to *CancelledByMobilePay*. The Payment states *Initiated* and *IssuedToUser* are called *active* states and will block further payments on the same Point-of-Sale.

<img
  src={require('/img/pos-payment-states.png').default}
  alt="PoS confirmation screen"
  width="700"
/>
