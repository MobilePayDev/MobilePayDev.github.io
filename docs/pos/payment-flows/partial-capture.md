# Partial Capture

It is possible for all merchants to capture partial amounts in the API. MobilePay do however have to comply with card scheme rules which means that when a payment is done using an underlying card, some payments will not be possible to partially capture. To solve this every payment in *Reserved* state will contain information about whether or not it is possible to capture a partial amount on the payment. The information is presented in a flag `PartialCapturePossible` that will be set to either `true` or `false`.  
Based on the value of this flag, a mechant/integrator must choose to proceed with or cancel the payment before delivering the goods to the customer.

Here is the flow where partial capture is possible.

[![Partial capture](/img/pos-partial-capture.PNG)](/img/pos-partial-capture.PNG)

Here is the flow where partial capture is not possible and hence the payment needs to be cancelled.

[![Partial capture cancel](/img/pos-partial-capture-cancel.png)](/img/pos-partial-capture-cancel.png)
