---
sidebar_position: 6
---

# Notification Service

Clients that are unable to detect whether a customer has checked in by [user activation](/docs/pos/detecting-mobilepay#user-activation) can use the notification service. To be able to use the notification service, the integrator needs to implement an endpoint that MobilePay will call, when a client should query the active check-in on a PoS.

When the endpoint is implemented the URL has to be communicated to MobilePay in order to validate and whitelist it in the firewalls. This is done by sending an email to [developer@mobilepay.dk](mailto:developer@mobilepay.dk). When the URL is whitelisted the integrator will receive a reference to that URL called a ``CallbackAlias``. The client will use this alias when [creating a PoS](/docs/pos/pos-management#pos-creation) to indicate which notification endpoint to call.

## Notification endpoint

The requirements for a notification endpoint are as follows:

* It must be an HTTPS POST endpoint.
* It must accept a JSON body that has the following format:  

```javascript
{
  "MerchantId"          : "622d3369-f940-4921-93eb-c8fca0c081b4",
  "MerchantBrandId"     : "MPPOS12345",
  "MerchantLocationId"  : "12345",
  "MerchantPosId"       : "MobilePay Merchant Pos Id"
  "PosId"               : "7e6acbde-345e-4641-b2f4-d8df0f3a5147"
}
```

* The format of the different fields can be found [here](/docs/pos/input-and-output-formats).

* The notification endpoint must respond with status code `200 OK` when the notification is processed successfully. The MobilePay notification service will retry notification calls in case of any other response than `200 OK`. The service will retry the call 3 times.

## Migrating to a different notification endpoint

In case an existing PoS has to be migrated to use a different notification, the integrator will have to contact MobilePay by writing an email to [developer@mobilepay.dk](mailto:developer@mobilepay.dk) asking for the change. The new URL will have to go through validation and whitelisting as described above.
This included changing the mapping between the URL and the existing `CallbackAlias`. Close collaboration on the time of switching the URL is important to make sure the new endpoint is ready to receive notifications at the time of the change.
