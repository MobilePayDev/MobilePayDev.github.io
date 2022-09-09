---
sidebar_position: 1
---

# MobilePay Point of Sale

MobilePay PoS is a solution for customers to pay through their mobile via a QR code or the white MobilePay box.

In order to use MobilePay PoS, the checkout system must be online, and the PoS integrator must support MobilePay.

Our MobilePay PoS REST api  is intended for software developers implementing MobilePay payments in a PoS system

The MobilePay PoS API exposes two separate flows for payments which are documented in this section. All payments must be explicitly captured by the client after the customer has approved the payment. The capture amount can be for the full or a partial amount.

![PoS hero](/img/Hero_POS.png)

Our MobilePay Point of Sale (PoS) REST API is intended for integrators implementing MobilePay payments in a PoS system.

This document will explain in more detail how to implement the different payment flows, how to manage the PoS, how the Security model is built and what is needed from the integrator.

This document does not include detailed specification of the endpoints, responses and response codes. This information can be found in the [API section](https://sandbox-developer.mobilepay.dk/product).

## Payment experience

MobilePay PoS is an API for setting up a merchant's transaction requests on customers' MobilePay apps in a store. MobilePay PoS does not require the customer to manually enter any information in the MobilePay app pertaining to the transaction. A transaction request can typically be obtained by the customer by holding the mobile device near a merchant device (Terminal, BLE beacon, etc.) or scanning a QR code.

Currently MobilePay PoS uses BLE one-way and two-way beacons and QR-codes to set up the transaction requests - the technology choices are not important for the API - however the concept of a beacon ID is central to allow matching of the customer willing to pay and the merchant's transaction request.
