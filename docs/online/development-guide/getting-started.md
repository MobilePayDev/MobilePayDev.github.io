---
sidebar_position: 1
---

# Getting started

In order to implement MobilePay Online you must first obtain an agreement by contacting partner@vippsmobilepay.com. Once the agreement is signed you will get access to our sandbox environment and can test the API.

### PublicKey

You must supply two PublicKeys for Card encryption: The RSA public key should be provided as X.509 SubjectPublicKeyInfo (using ASN.1 DER Encoding) represented in PEM encoding (use PEM file extension). The public key must have a length of 4096 bits. You must clearly state in the file name which one is for Sandbox and which is for Prod.

Naming template for public key: `{integratorname}-{environment}-public`

Example for sandprod: `company-sandprod-public`

Example for production: `company-prod-public`

Please send the PublicKeys in a ZIP-file. We will register the keys and supply you with a PublicKeyId to be used when initiating payments.

:::note
Please note that if a publicKey is unused for 6 month we will delete it. If this happens you must supply a new publicKey.
:::
