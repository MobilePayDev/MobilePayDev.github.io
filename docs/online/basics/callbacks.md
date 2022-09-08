---
sidebar_position: 5
---

# Callbacks

As a rule of thumb, MobilePay Online is idempotent in all operations. Likewise, we expect PSPs to be able to handle the same callback more than once in the event of transient errors on network, ours, or your side.
This means that if we make a callback to you on a given payment id or a given authorization attempt you may receive the same data more than once and should ensure that your systems are able to handle that.
We will retry our callbacks for 15 seconds in the event of network errors or non 200-range http status codes in your responses. After this we will mark the callback as failed and allow the user to accept the payment again. In this case you will receive a new callback with a new authorization attempt. Please note that the 15 second limit may be subject to change.

## Card data callback

A callback will be made on the encryptedPanCallbackUrl when the user swipes to accept the payment. The callback will have a JSON body like this:

```json title="Card data callback example"
{
  "EncryptedCardData": "fsfnsdjkfbgdft34895u7345",
  "PaymentId": "a84781b3-af34-42ae-b296-260cfb6859fe",
  "AuthorizationAttemptId": "ba12c5d5-8fd1-49cc-bc3f-2cb2ecb888c7",
  "PublicKeyId": 263012,
  "CardType" : "DANKORT"
}
```

The EncryptedCardData is encrypted according to this OAEP algorithm&padding scheme: RSA/NONE/OAEPWithSHA256AndMGF1Padding (note that SHA-256 hash is also used for padding).
Once decrypted, you´ll see:
{"timestampticks":123456789123456789,"encryptedCardData": { "cardNumber": 1234567812345678, "expiryMonth": 12, "expiryYear": 28 }

Make sure you respond to the callback immediately once you´ve decrypted the content. DO NOT leave the transaction "hanging" while you call out to the Acquirer.

Strictly process the payment on the card type given in field "CardType"! This is the only way MobilePay can offer card type picking for co-branded cards in accordance with PSD2 requirements.
Also the SCA method vary on the cobranded Visa/Dankort. This means that if you process the PAN given with CardType=DANKORT as a Visa the SCA is missing and the (unwanted) 3DS step-up is likely to happen.

Note: When receiving a PAN-based transaction from us it can't be regarded as authenticated. You should handle these according to scheme rules to ensure correct handling regarding SCA. If in doubt please contact your acquirer.

## Failed payment callback

In case the payment times out a callback is made to the FailedPaymentCallbackUrl url supplied in the initiate payment call. Note that this callback is not sent if the user rejects the payment, only when payment times out.

```json title="Failed payment callback example"
{
    "Code": "100",
    "Reason": "Payment expired",
    "PaymentId": "8d72ece4-1b0b-464b-98d9-6bbb02199dc8"
}
```

## Endpoint security

To ensure no unauthorized calls to your callback endpoints we strongly suggest you apply either (or both) of these limitations:

1. Firewall rules. These are the IP-ranges that MobilePay backend will be calling from: 212.93.32.0/19 and 185.218.228.0/22
2. SSL "Common name" inspection. The "Common name" in our SSL client certificate should never change. Even when the certificate itself changes or is issued to a different root.
