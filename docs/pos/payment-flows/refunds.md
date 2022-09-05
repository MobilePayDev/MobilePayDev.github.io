# Refunds

Once a payment is captured, the payment amount is immediately charged from the customer. Therefore, the payment can no longer be cancelled. Instead, the payment amount can be transferred back to the customer, by performing *refunds*. Each captured payment can be refunded multiple times with the restriction that the sum of the refunds cannot exceed the captured payment amount. A payment can be refunded up to 90 days after the payment was captured. After 90 days a refund is no longer possible with MobilePay.

A refund can be executed if the store payment balance contains enough money to cover the refund. If the balance doesn’t cover the amount of the refund, the refund will fail with error code 1368

The sequence diagram below shows a sunshine scenario for a refund. Initiating a refund yields a `refundId` that can be used to capture the refund. A refund starts out in the *Initiated* state and transitions to the *Reserved* state when the refund has been reserved as shown in the state diagram below. Once a refund has been reserved, the client can choose to capture the refund, transitioning the state to *Captured*. When a refund is captured, the refunded amount is immediately transferred to the customer and the customer will be able to see the refund in the activity list.
A refund reservation will expire and be automatically captured after 24 hours.

[![Refund flow](/img/pos-refund-flow.png)](/img/pos-refund-flow.png)

Until the refund has been captured, the client can also choose to cancel the refund. The diagram below shows the possible states and transitions for a refund.

[![Refund states](/img/pos-refund-states.png)](/img/pos-refund-states.png)

To refund a payment, the client needs to provide the paymentId of the payment to be refunded. In case the paymentId has been lost it can be retrieved by calling `GET /v10/payments?orderId={orderId}&state=Captured` with the orderId from the payment to be refunded.
