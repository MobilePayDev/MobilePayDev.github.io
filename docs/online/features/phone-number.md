---
sidebar_position: 2
---

# Phone number on landing page

When user is redirect to redirectToMobilePayUrl on a desktop they will see the MobilePay landing page where they must input their phone number. You have the option to prefill the phone number or disabled the remember me function on the page. 

## Prefilled phone number

You can provide a phone number to be prefilled in the phone number field on the MobilePay webpage.
You do this by adding an URI encoded "alias" parameter with the phone number to the search parameters of the "redirectToMPUrl". The phone number must be fully specified including country code. For "+45 12 34 56 78" you would add the following to the url: `&alias=004512345678`

> /remote-website/index.html?page=request&id=d7380749-f73c-4317-bd01-58daa249212f&alias=004512345678

## Disable remember-me

If you, for instance, have a public terminal where MobilePay is used, you may want to disable the option to remember the current phone number.
You can do this by adding the query parameter key `disable-remember-me` to the request page url.

> /remote-website/index.html?page=request&id=d7380749-f73c-4317-bd01-58daa249212f&disable-remember-me&alias=004512345678
