---
sidebar_position: 12
---

# Create QR codes

The correct format for creating a QR code for Point of Sale is: mobilepaypos://pos?id=``beaconId``&source=qr

## Examples

- mobilepaypos://pos?id=123456789012345&source=qr
- mobilepaypos://pos?id=cd851cd7-8398-4a03-83c1-391a2f5cb71c&source=qr

Note: It is the `beaconId` and **NOT** the `posId` that should be used in the URL
  
Please be aware that it is all lowercase. The PoS ``beaconId`` is either a 15 digit number (no letters) or a GUID.
The format is both for sandbox and production environment.  

If you want to print the QR code we have a template for MobilePay stickers on the [MobilePay website](https://mobilepay.dk/materialebank/marketingmateriale/skilte/skiltning-til-pos)
