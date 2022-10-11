---
sidebar_position: 1
---

# Getting started

This guide is designed to help get you started with MobilePay Invoice.
You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.

## Step 1 - Register

1. All merchants should order the product needed on the [MobilePay portal](https://admin.mobilepay.dk/)
    * Sign up as an [integrator](https://www.mobilepaygroup.com/partner/signup)
    * Sign certification agreement
2. Take a look at the API documentation. You'll find it in the [API references menu](/api/invoice).

## Step 2 - Authentication

Once you have obtained credentials via zip file, set a redirect URI and received test data, you can start implementing the OpenID Connect flow. Read more about OpenID Connect and the process [here](/docs/invoice/authentication).

Currently, our network utilizes the global IP range **212.93.32.0/19**

As an external party, you might need to modify your firewall rules to allow traffic from us from 212.93.32.0/19 and 185.218.228.0/22 instead. Otherwise our traffic may be blocked, and our services stop working.
