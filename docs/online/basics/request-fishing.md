---
sidebar_position: 6
---

# Request Fishing Scenario

This scenario is a thought out "attack" where a fraudster tricks someone else to pay for the goods, by sending the request to multiple users from our "dual device" website, until someone accepts the payment.

Initialize payment (POST /payment/) is idempotent. However, if it is called with the same set of MerchantId and PSPReferenceId (but anything else might have changed) - request fishing will be initiated.
Depending on the scenario a DomainError will be returned stating the problem. If the user initiates  more than 3 payments, with the same MerchantId and OrderId, a permanent DomainError will be returned.
