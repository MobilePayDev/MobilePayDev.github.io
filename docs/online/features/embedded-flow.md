---
sidebar_position: 5
---

# Embedded Flow (IFrame)

Web shops and Payment Service Providers (PSPs) may embed the MobilePay landing
page inside their own website by nesting the page in an IFrame and then
listen to the events emitted from the IFrame.

Embedding is especially relevant for 'dual-flow' use; where the user starts by
entering his or her phone number in a browser and then continues the flow in the
app to accept the payment.

When the user has accepted the payment (swiped) in the app, the landing page
will by default redirect to the url provided when the payment was created.

Build your logic on the parent page, listen for the events published by the
IFrame and redirect the user to the right page based on the returned data,
e.g. depending on whether the user cancelled or completed the payment.

## Embed the website in an IFrame

Add an "IFrame" to the html source and set the IFrame "src" property to the URL
returned from the payment link creation endpoint.

On mobile devices it is expected that the MobilePay flow visually covers the
whole screen (simple header and footer is acceptable).

Be aware that you might want to show the user different content if the user is inside
an IFrame or not. If you support both IFrame and full window, we recommend that
you have a neutral return page without visual content.

The width should be 375px.

Example

```html
 <IFrame
   scrolling="no"
   src="https://products.mobilepay.dk/remote-website/index.html?page=request&id=83554a83-cd90-4ac9-bf6e-39357c21dca5&version=2"
   style="width: 375px; height: 480px; border: 0;" >
</IFrame>
```

## Add an Event Listener to the parent page of the IFrame

The parent page can listen for events by adding an event listener to the IFrame.

Before the IFrame redirects, it will post a message to all registered event
handlers, giving any parent page the alternative option of handling the page
navigation instead, for example in the case where you want the parent page to
change too.

```javascript
window.addEventListener(
    "message",
    function(event) {
        if (event.data && event.data.startsWith("mobilepay:")){
            // Do your logic
            // Continue purchase processing
            alert(event.data);
        }
    },
    false);
```

When the user terminates the payment flow, the published event will look like as
follows. The code and matching description indicate how the flow was terminated,
i.e. either because the payment was completed, rejected, cancelled by the user
or because the timer expired.

```js
mobilepay:rc={code}&message={description}

// example
mobilepay:rc=0&message=completed
```

| Response Code | Description
|:--|:----------|
| 0 | completed |
| 1 | rejected  |
| 3 | expired   |
| 4 | cancelled |

## Manually engaging the App from the parent page

On mobile devices the app is not guaranteed to engage when the website is nested
inside an IFrame.

To preserve the expected behavior of engaging the app on mobile devices, the
parent of the IFrame may try to engage the app with the following javascript
snippet that use a custom url registered for both Android and iOS.
This custom url (redirectToMobilePayAppUrl) is part of the response received, when a payment is initiated.

You should still display the landing page inside the IFrame in case the app is
not installed or the user navigates back to your page.

```javascript
function tryToOpenMobilePayApp(paymentId) {
   try {
      window.open("_redirectToMobilePayAppUrl", "_parent");
   } catch {
      // window.open should just fail without throwing aside from logging an
      // error to console.
      //
      // This catch is strictly for good measure to avoid any incidents
      // in legacy or future browser settings.
   }
}
```
