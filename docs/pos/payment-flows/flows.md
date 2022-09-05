# Payment Overview

The MobilePay PoS API exposes two separate flows for payments which are documented in this section:

* [Payment flow](/docs/pos/payment-flows/payment-flow)
* [Prepared payment flow](/docs/pos/payment-flows/prepared-payment-flow)

All payments must be explicitly captured by the client after the customer has approved the payment. The capture amount can be for the full or a partial amount (if allowed on the payment).

For a client to start a payment flow, the client first has to detect that a customer is present, ready and willing to pay. In the following descriptions of payment flows it is assumed that the client has already detected a customer. How to detect a customer wanting to pay with MobilePay is described in the [Detecting MobilePay](/docs/pos/detecting-mobilepay) section.
