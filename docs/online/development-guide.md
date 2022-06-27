# Development Guide

In order to implement MobilePay Online you must first obtain an agreement by contacting partnership_online@mobilepay.dk. If you have already signed an agreement with MobilePay for the use of MobilePay Online, you can skip this step.

When your agreement is signed, please visit our Developer Portal to start the [technical onboarding](https://developer.mobilepay.dk/products/online/getting-started).
You will also find the API on the [Developer Portal](https://developer.mobilepay.dk/product): click 'Online'.

On the developer portal you will find information about [test](https://developer.mobilepay.dk/products/online/test) and [how to move to production](https://developer.mobilepay.dk/products/online/verification).

## Sandbox environment

The MobilePay Sandbox is a self-contained, testing environment that mimics the live MobilePay production environment. It provides you the space to play around and test your implementation and the requests you make to the MobilePay API. Find information about test app and sandbox test on the [developer portal](https://developer.mobilepay.dk/products/online/test).

### Automated integration tests in Sandbox

The API supports automated integration tests running in Sandbox and can be found at [sandbox-developer](https://sandbox-developer.mobilepay.dk/product) under 'Online User Simulation' and then 'Cardpassthrough RegressionTester For Product'. The API support simulation of the required user actions from payment request to capture. For more information on the general payment flow, please see [the diagram section](#Diagrams).

Please refrain from any overly aggressive testing strategies, we expect any continously running tests to call at most once per second.
