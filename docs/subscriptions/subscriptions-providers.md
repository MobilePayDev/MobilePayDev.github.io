---
sidebar_position: 4
---

# Subscriptions Providers

## Order MobilePay Subscriptions

Before using MobilePay Subscriptions, the merchant must have at least one Subscriptions provider which can be created via [MobilePay Portal - Denmark](https://admin.mobilepay.dk/) or  [MobilePay Portal - Finland](https://admin.mobilepay.fi/) by clicking 'Opret nyt betalingssted'. The merchant can have multiple providers, which is why the integrator must support having more than one providers, since merchants might have multiple brands with different product offerings.

## Getting a list of subscription providers

After getting an access token, you will be able to list subscription providers associated with that merchant by calling `GET /api/merchants/me`, which will return a list of all subscription providers, associated with that merchant. Each subscriptions provider contains its own address information, homepage url and etc. The merchant is the customer company and the SubscriptionsProvider ID is the actual service provider name under which they send subscriptions payments  

Providers represents your customer (which is a MobilePay Merchant).
`providerId` represents a particular subscription provider.

For example, if a single merchant has several brands, then each brand would be a subscription provider. Currently, a merchant grants you permission to all their subscription providers.

```json title="HTTP 200 Response body example"
[
  {
    "Id": "a863d62e-d53b-4651-9b7b-c80792ee1343",
    "SubscriptionProviders": [
      {
        "SubscriptionProviderId": "b45afee5-703c-4136-8f60-162fc01709df",
        "Name": "Name of your subscription product",
        "HomepageUrl": "https://merchant.dk",
        "CustomerServiceEmail": "customerservice@merchant.dk",
        "SelfServicePortalUrl": "https://merchant.dk/self-service",
        "FaqUrl": "https://merchant.dk/faq",
        "Status": "Enabled" || "Pending",
        "Address": "Your address line",
        "ZipCode": "1234",
        "City": "City"
      }
    ]
  }
]
```

## Updating subscription provider

Before requesting payments a status callback URL must be set by calling `PATCH /api/providers/{providerId}`:

```json title="ayment status callback URL"
[
    {
        "value": "https://merchant.dk/notifications_from_mobilepay/payments",
        "path": "/payment_status_callback_url",
        "op": "replace"
    }
]
```
