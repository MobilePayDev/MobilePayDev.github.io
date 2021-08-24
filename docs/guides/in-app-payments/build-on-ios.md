# Build on iOS

This page details how MobilePay In-App payments should be implemented in your Android app.

## Prerequisites and assumptions
This guide assumes:
* You already have a backend services for functions described [**here**](https://mobilepaydev.github.io/MobilePay-Payments-API/docs/guides/in-app-payments/how-it-works).
* Your app handles customn URL scheme. See [Apple documentation](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app) for more details.
* You are generally familiar with developing applications on Android.

> :warning: **Make sure you are compliant with mobile application distribution service rules!**
Using In-App Payments for digital sales might not be allowed by some mobile application distribution services (Google Play, App Store, etc.) and might result in your application being removed. Please review the terms of service for the respective mobile application distribution services you use to ensure that you are compliant with their guidelines.	

## Initiate the payment
First, you'll need to initiate the payment. To do this you should call your backend service that is implemented as described [**here**](https://mobilepaydev.github.io/MobilePay-Payments-API/docs/payments-refunds/take-payments). This service call should return a response that contains a deep link needed to launch the MobilePay app.

## Redirect to MobilePay		
Find the redirect URL in the response and open it to launch MobilePay app.

```swift
UIApplication.shared.open(redirectUrl, options: [:], completionHandler: { success in
    if success {
        // Handle success.
    } else {
        // Handle failure. Most likely MobilePay app is not present on the user's device.
    }
})
```

After this the MobilePay app will be launched and user will be able to proceed with the payment flow.

## Returning to your app
There are multiple ways user can return to your app:
- User approves the payment and is redirected back to your app.
- User cancels the payment and is redirected to your app.
- User fails to complete the payment due to some kind of error and is redirected to your app.
- User closes the app before/after reservation using native app switcher.
- User presses back in MobilePay Login screen.

All these can be grouped into:
- App switching				
- Redirect

At any point user can close MobilePay app and just return to your app. **This can happen even if payment is already reserved!** Because it is unknown if your app was opened after completed payment, you'll  need to check the payment status each time your app returns to foreground. For this you should use your backend service that provides current status of the payment (more details [**here**](https://mobilepaydev.github.io/MobilePay-Payments-API/docs/payments-refunds/take-payments)).
  
These are the statuses this service could possibly return:
- Initiated - payment is still in initiated state. It means that the user closed the app manually without doing any action. Consider adding a way for the user to invoke the deep link again (for example a button to open MobilePay) or just treat it as canceled.
- Canceled - user canceled the payment or payment is unable to succeed due to some error.
- Reserved - user successfully completed the MobilePay flow and payment is reserved. 
- Captured - payment is successfully captured.

If your flow requires payments to be captured (not just reserved), consider polling the status checking service while status is "Reserved".

### App switching

Example how to handle case when user manually switches to your app:
```swift
let observer = NotificationCenter.default.addObserver(forName: UIApplication.didBecomeActiveNotification, object: nil, queue: nil, using: { _ in
    // Check payment status - poll if needed.
})
```

Don't forget to unregister from notification when it's not needed:
```swift
NotificationCenter.default.removeObserver(observer)
```

### Redirect from MobilePay

Example how to handle automatic redirect from the MobilePay app:
```swift
class AppDelegate: NSObject, UIApplicationDelegate {

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        // Validate that url is from MobilePay and check payment status - poll if needed.
        return true
    }
}
```

:::tip Want to make the flow faster?
When redirecting back to your app, MobilePay app appends a query parameter named "status" to the end of the deep link. It can contain these values:
- successful
- failed
- rejected

If you want the maximum speed consider checking this parameter and triggering a capture without checking the status in your backend (capture can only succeed if payment is reserved). 
:::

## All done
Now everything should be ready for testing! Sandbox testing guide is [**here**](https://sandbox-developer.mobilepay.dk/).

:::caution Make sure you are using correct MobilePay app!
MobilePay supports multiple countries, but cross country payments are not enabled.
:::

Having troubles with this guide? Be sure to contact us!
