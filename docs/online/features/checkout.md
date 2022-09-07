---
sidebar_position: 3
---

# Checkout

With MobilePay Checkout webshops can offer their customers to complete purchases even faster by linking payment and delivery details. When using Checkout MobilePay will supply you with the billing address and optionally the delivery address of the customer. When initiating a Checkout payment the user will then be prompted to choose address before accepting the payment in the MobilePay app.

Please visit our [best practice guide](/docs-extra/checkout-best-practice) for guidelines and recommendations on how to use MobilePay Checkout in a webshop.

## How to initiate a Checkout payment

Checkout can be used on any MobilePay Online payment and is initiated as any other payment using:
`POST /payments`

Four parameters are required when initiating a Checkout payment:

```json title="Request body example"
    "isCheckout":true,
    "addressCallbackUrl":"http://example.com",
    "deliveryAddressAllowed":true,
    "deliveryAddressDisallowedReasonCode":4, //Only required if "deliveryAddressAllowed":false.
```

* isCheckout: This will define the payment as a Checkout payment when set to true
* addressCallbackUrl: The url where we will deliver the checkout callback with the address details. The Checkout callback will always be delivered before the card/token callback.
* deliveryAddressAllowed: Will define whether the user is allowed to choose delivery address. If set to false the user can only choose billing address. Can be used for instance if the user has chosen 'Pick up at store' in the webshop.
* deliveryAddressDisallowedReasonCode: if deliveryAddressAllowed is set to false a reason must be given:
1: Reason not given, 2: Goods don't require physical delivery, 3: 'Pick up at store' already selected in the Webshop, 4:'Parcel Shop' already selected in the Webshop, 5: Shop will select a parcelshop close to your home"

[![checkout sequence diagram](/img/checkout-sequence-diagram.svg)](/img/checkout-sequence-diagram.svg)

## Checkout callback

The callback will have a JSON body like this:

```json title="Checkout callback example"
    {
      "PaymentId": "9369ea35-4b5b-428a-bdf8-c29c29a4b264",
      "AuthorizationAttemptId": "a8c99cbf-3468-4eb9-9c0e-ddd110e8ed33",
      "Addresses": [{
        "FirstName": "John",
        "Surname": "Doe",
        "Attention": "",
        "CompanyName": "",
        "AddressLine1": "Flower Street 23",
        "AddressLine2": "",
        "PostalCode": "3434",
        "City": "Great city",
        "CountryCode": "DK",
        "IsCustomerOfficialAddress": true,
        "IsBillingAddress": true,
        "IsDeliveryAddress": true,
        "AddressValidationMethod": "DaWa",
        "AddressValidationStatus": "NotValidated"
      }],
      "EmailAddress": "johndoe@gmail.com",
      "EmailAddressValidationMethod": "EmailEnteredTwice",
      "EmailAddressValidationStatus": "Validated",
      "PhoneNumber": "+4512345678",
      "PhoneNumberValidationMethod": "SMSChallenge",
      "PhoneNumberValidationStatus": "Validated"
    }
```

The address array may contain two items. One for billing address and one for delivery address. If billing and delivery address is the same the array will only contain one item where IsBillingAddress and IsDeliveryAddress is set to true.

If deliveryAddressAllowed is set to false on payment initiation the array will only contain one item where IsBillingAddress is set to true and IsDeliveryAddress is set to false.
