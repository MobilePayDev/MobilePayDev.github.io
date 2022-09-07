---
sidebar_position: 3
---

# Dual device and single device flow

MobilePay Online supports both dual device and single device flows. It depends on which device the user uses when you redirect to redirectToMobilePayUrl. Our landing page will detect if the redirect happens on a mobile device or not. Only the user experience will be affected by type of flow. The payment flow and API requests are the same regardless of flow type.

## Single device flow

If the redirect happens on a mobile device the MobilePay app will be launched. The user can then accept or reject the payment and we will redirect the user to redirectFromMobilePayUrl afterwards. This url will always open in the default browser (determined by the operating system) of the mobile device.

* If the MobilePay app is not installed and therefore cannot be opened our landing page will open in the browser instead and the flow will continue as a dual device flow.
* It is also possible to pop the app directly instead of using the universal link. To do this you will need to use the redirectToMobilePayAppUrl given in the response from initiating a payment. This can be useful when using frames. See [Manually engaging the App](/docs/online/features/embedded-flow#manually-engaging-the-app-from-the-parent-page) for a guide on this.

## Dual device flow

 If the redirect happens on a desktop device our landing page will open in the browser. The user can then insert the phone number or it can be [pre-filled](/docs/online/features/phone-number#prefilled-phone-number) for more convenience. We will then send a push notification to the user's mobile device and the user can then accept or reject the payment in the MobilePay app. Afterwards the landing page in the desktop browser will redirect to redirectFromMobilePayUrl.

### Landing page

The link to MobilePay landing page is received in response to payment initiation as: redirectToMobilePayUrl. On the landing page the user must insert their phone number and click continue. A timer will then be shown to indicate how long time the user have to accept the payment in the MobilePay app.

The language of the page is initialy defined by the countryCode of the merchant the payment is initiated on behalf of. Merchant countryCode is defined when creating a merchant with `POST /api/v1/merchants`. This setting can be overulled by setting the customerLanguageCode on payment initiation. Code can be either DK or FI. If DK the laungage on landing page will be Danish. If FI the language on landing page will be Finnish.

The first time a user visits the landing page a functional cookie will be saved. This cookie defines the language of the page. Next time the user visits our landing page the language will be determined by cookie. Regardless of customerLanguageCode or countryCode.

Hierarchy:

1. Functional cookie in browser
2. customerLanguageCode on payment
3. countryCode on merchant

## Redirect to redirectFromMobilePayurl

User is redirect to redirectFromMobilePayUrl when payment is either completed or rejected. This means that user is not redirected right after they swipe in the MobilePay app, but when you either patch the authorization or user rejects the payment.

In single device flow the app switches to the default browser and opens the to redirectFromMobilePayUrl. If an app link is supplied the OS will open the app instead. For dual device flow the browser will redirect to to redirectFromMobilePayUrl.

In the following scenario you will always see two redirects by design:

1. Complete a single device flow > The MobilePay app automatically opens redirectFromMobilePayURL in the browser.
2. Now access the browser tab with the landing page that "popped" the app in step 1. > The tab will redirect to redirectFromMobilePayURL.
