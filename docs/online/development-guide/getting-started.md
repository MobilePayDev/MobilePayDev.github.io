---
sidebar_position: 1
---

# Getting started

In order to implement MobilePay Online you must first obtain an agreement by contacting partnership_online@mobilepay.dk. Once the agreement is signed you will get access to our sandbox environment and can test the API.

## Sandbox environment

The MobilePay Sandbox is a self-contained, testing environment that mimics the live MobilePay production environment. It provides you the space to play around and test your implementation and the requests you make to the MobilePay API.

## Register for the technical integration

Send an email to [developer@mobilepay.dk](mailto:developer@mobilepay.dk?subject=Register%20as%20MobilePay%20Online%20Integrator&body=Hi%20MobilePay%2C%0D%0A%0D%0AOfficial%20company%20name%3A%0D%0AVAT%20number%3A%0D%0A%0D%0AContact%20person%20for%20PCI-DSS%20AoC%3A%0D%0A%0D%0ABusiness%20Contact%20Name%3A%0D%0ABusiness%20Contact%20E-mail%3A%0D%0A%0D%0ATechnical%20Contact%20Name%3A%0D%0ATechnical%20Contact%20E-mail%3A%0D%0A%0D%0APSP%20Homepage%3A%0D%0AExpected%20go%20live%20date%3A%0D%0AAdditional%20information%3A%0D%0A) with the following information:

    * Official company name
    * VAT number
    * Contact person for PCI-DSS AoC
    * Business Contact Name
    * Business Contact E-mail
    * Technical Contact Name
    * Technical Contact E-mail
    * PSP Homepage
    * Expected go live date

The technical contact will recieve an invitation to get started with the integration.

## API documentation

Take a look at the API documentation. You'll find it in the APIs menu.

## Authentication

We will supply you with a secure link where you can upload two PublicKeys for Card encryption: The RSA public key should be provided as a X.509 SubjectPublicKeyInfo (using ASN.1 DER Encoding) represented in PEM encoding (use PEM file extension). The public key must have a length of 4096 bits. You must clearly state in the file name wich one is for Sandbox and which is for Prod.

Naming template for public key: `{integratorname}-{environment}-public`

Example for sandprod: `company-sandprod-public`

Example for production: `company-prod-public`

After the PublicKey has been uploaded on our side we will supply you with a PublicKeyId to be used when initiating payments.
