"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:3},i="Strong Customer Authentication",l={unversionedId:"online/sca",id:"online/sca",title:"Strong Customer Authentication",description:'We aim to ensure Delegated Authentication (DA). This means that responsibility for authenticating the customer/payer no longer lies with the Issuer, but is delegated to MobilePay.  When/if we fail, and the Issuer is responding to an authorisation attempt with a Soft Decline/"step-up", a 3-D Secure fallback solution must be in place.',source:"@site/docs/online/sca.md",sourceDirName:"online",slug:"/online/sca",permalink:"/docs/online/sca",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Embedded Flow (IFrame)",permalink:"/docs/online/basics/embedded-flow"},next:{title:"Transition to One Platform",permalink:"/docs/online/transition-to-one-platform"}},s={},c=[{value:"Delegated authentication for Dankort",id:"delegated-authentication-for-dankort",level:2},{value:"Delegated authentication using tokens",id:"delegated-authentication-using-tokens",level:2},{value:"Delegated Authentication for Visa card",id:"delegated-authentication-for-visa-card",level:3},{value:"Delegated Authentication for Mastercard",id:"delegated-authentication-for-mastercard",level:3},{value:"3DSecure Fallback",id:"3dsecure-fallback",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"strong-customer-authentication"},"Strong Customer Authentication"),(0,o.kt)("p",null,'We aim to ensure Delegated Authentication (DA). This means that responsibility for authenticating the customer/payer no longer lies with the Issuer, but is delegated to MobilePay.  When/if we fail, and the Issuer is responding to an authorisation attempt with a Soft Decline/"step-up", a 3-D Secure fallback solution must be in place.'),(0,o.kt)("p",null,"All of the SCA implementations are mandatory. Only Dankort can be skipped if you do not accept Dankort."),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Delegated Authentication can only be effectuated by the Issuer if the authorisation is based on a token. If you for some reason receive a PAN-based transaction from us, you should handle data in the card data callback as non-authenticated PAN-transactions according to scheme rules to ensure correct handling regarding SCA. If in doubt, please contact your acquirer.")),(0,o.kt)("h2",{id:"delegated-authentication-for-dankort"},"Delegated authentication for Dankort"),(0,o.kt)("p",null,"As long as you use the tags and values described here, all is well. Nets will recognize MobilePay and trust our authentication process."),(0,o.kt)("p",null,"Use POS code: \u2018K005K0K00130\u2019."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Nets SDI specification")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Field S120 tag 36: the value of 8844101001"),(0,o.kt)("li",{parentName:"ul"},"In Field S120 tag 70 pos 14 (exemption Tag): the value of 3 for Delegated Authentication")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Nets TRG PSIP/ ISO 8583 / Merchant Guide SSL")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Field 47 tag 7R: the value of 8844101001"),(0,o.kt)("li",{parentName:"ul"},"In Field 47 tag V!: the value of 23")),(0,o.kt)("h2",{id:"delegated-authentication-using-tokens"},"Delegated authentication using tokens"),(0,o.kt)("p",null,"Both Visa Token Service (VTS) and Mastercard S4C (MS4C) are based on the EMVCo standard. Please pass the data to the Acquirer, as you would do if the token response was from your own VTS or MS4C integration. In case you have questions to the Acquirer API, please ask the Acquirer."),(0,o.kt)("p",null,"When you initiate a payment, make sure to use v3 of the API. Here you give a tokenCallbackUrl for all accepted Visa and Mastercard types. However, please also provide a carddataCallbackUrl as failover, because not all cards can be tokenized. For Dynamic Linking, please give us MerchantUrl and MerchantName."),(0,o.kt)("p",null,"When you recieve the token callback, you\xb4ll find a cardIssuedInCountryCode (possible values DK, FI) you can use for your Acquirer routing logic."),(0,o.kt)("p",null,'Exactly as for encrypted card data callbacks, make sure you respond to the callback immediately. DO NOT leave the transaction "hanging" while you call out to the Acquirer. If we do not get a response to the callback in proper time we will allow the user to accept the payment again.'),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(17414).Z},(0,o.kt)("img",{alt:"Token",src:a(59285).Z,width:"1587",height:"1123"}))),(0,o.kt)("h3",{id:"delegated-authentication-for-visa-card"},"Delegated Authentication for Visa card"),(0,o.kt)("p",null,"Example of Visa Token Service (VTS) response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="VisaTokenCallbackPayload"',title:'"VisaTokenCallbackPayload"'},'{\n   "paymentId":"8dab9219-ab03-4524-bae7-f0ad55119da5",\n   "authorizationAttemptId":"32eedb2b-a536-4eb6-b618-c2d6c1bf7aab",\n   "cardType":"VISA-CREDIT",\n   "cardIssuedInCountryCode":"DK",\n   "maskedCardNumber":"479694XXXXXX1234",\n   "tokenMethod":"VTS",\n   "tokenData":{\n      "vPaymentDataID":"da17bd1568bdc8b418d71cf80c44ea02",\n      "cryptogramInfo":{\n         "cryptogram":"/wAAAAwAUkMTObMAAAAAgS0AAAA=",\n         "eci":"07"\n      },\n      "paymentInstrument":{\n         "last4":"1234",\n         "paymentType":{\n            "cardBrand":"VISA"\n         },\n         "paymentAccountReference":"V0010013020217426481676671969"\n      },\n      "tokenInfo":{\n         "token":"4895737462013403",\n         "last4":"3403",\n         "expirationDate":{\n            "month":"02",\n            "year":"2023"\n         }\n      }\n   },\n   "isDelegatedAuthentication": false\n}\n')),(0,o.kt)("h3",{id:"delegated-authentication-for-mastercard"},"Delegated Authentication for Mastercard"),(0,o.kt)("p",null,"Example of Mastercard S4C (MS4C) response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="MastercardTokenCallbackPayload"',title:'"MastercardTokenCallbackPayload"'},'{\n   "paymentId":"1ba21790-5e10-4db1-8e90-330fb41916e7",\n   "authorizationAttemptId":"3205ec7c-2d50-49d2-95dc-326e34edce47",\n   "cardType":"MC-CREDIT",\n   "cardIssuedInCountryCode":"DK",\n   "maskedCardNumber":"520473XXXXXX4792",\n   "tokenMethod":"MC S4C",\n   "tokenData":{\n      "token":{\n         "paymentToken":"5204731613942625",\n         "tokenExpirationMonth":"05",\n         "tokenExpirationYear":"2024",\n         "paymentAccountReference":"5001BO8B9NXVVIXCT0HAJU98I512Z"\n      },\n      "dynamicData":{\n         "dynamicDataType":"CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM",\n         "dynamicDataValue":"MD1eEaqbngDNAy0iuRqOAAADFEA="\n      },\n      "eci":"06"\n   }\n}\n')),(0,o.kt)("h2",{id:"3dsecure-fallback"},"3DSecure Fallback"),(0,o.kt)("p",null,"If Delegated Authentication fails, the 3DSecure fallback solution applies."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(75212).Z},(0,o.kt)("img",{alt:"3DS fallback",src:a(29989).Z,width:"1587",height:"1123"}))),(0,o.kt)("p",null,"When the user has completed the challenge, please immediately redirect to ",(0,o.kt)("a",{parentName:"p",href:"https://products.mobilepay.dk/remote-website/apppages/done3ds.html"},"https://products.mobilepay.dk/remote-website/apppages/done3ds.html"),"\nFor Sandbox use: ",(0,o.kt)("a",{parentName:"p",href:"https://sandprod-products.mobilepay.dk/remote-website/apppages/done3ds.html"},"https://sandprod-products.mobilepay.dk/remote-website/apppages/done3ds.html")),(0,o.kt)("p",null,"If the user cancels the 3DS challenge on the 3DS website or if it fails in some way, you should fail the authorization attempt with reasonCode=1000 and redirect to the done3ds.html page. This will cancel the 3DS flow in the MobilePay app and allow the user to retry with another card (starting a new authorization attempt)."),(0,o.kt)("p",null,"Optional: As soon as you have 3DS crypto from ACS and before retrying the authorization-attempt towards Acquirer and Issuer, you can call the MP backend with reasonCode=1009. This enables us to prevent the user from retrying with another card."))}p.isMDXComponent=!0},75212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/online-3dsfallback-de1c8e99d043f89809e1176e012d6228.svg"},17414:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/online-token-29383ed53ecf71fc3c7e0d434d9831d8.svg"},29989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/online-3dsfallback-de1c8e99d043f89809e1176e012d6228.svg"},59285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/online-token-29383ed53ecf71fc3c7e0d434d9831d8.svg"}}]);