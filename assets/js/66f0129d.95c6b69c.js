"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7634],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,y=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(y,l(l({ref:t},d),{},{components:a})):n.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:5},l="Callbacks",i={unversionedId:"online/basics/callbacks",id:"online/basics/callbacks",title:"Callbacks",description:"As a rule of thumb, MobilePay Online is idempotent in all operations. Likewise, we expect PSPs to be able to handle the same callback more than once in the event of transient errors on network, ours, or your side.",source:"@site/docs/online/basics/callbacks.md",sourceDirName:"online/basics",slug:"/online/basics/callbacks",permalink:"/docs/online/basics/callbacks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Retry policy",permalink:"/docs/online/basics/retry-policy"},next:{title:"Request Fishing Scenario",permalink:"/docs/online/basics/request-fishing"}},c={},s=[{value:"Card data callback",id:"card-data-callback",level:2},{value:"Failed payment callback",id:"failed-payment-callback",level:2},{value:"Endpoint security",id:"endpoint-security",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"As a rule of thumb, MobilePay Online is idempotent in all operations. Likewise, we expect PSPs to be able to handle the same callback more than once in the event of transient errors on network, ours, or your side.\nThis means that if we make a callback to you on a given payment id or a given authorization attempt you may receive the same data more than once and should ensure that your systems are able to handle that.\nWe will retry our callbacks for 15 seconds in the event of network errors or non 200-range http status codes in your responses. After this we will mark the callback as failed and allow the user to accept the payment again. In this case you will receive a new callback with a new authorization attempt. Please note that the 15 second limit may be subject to change."),(0,r.kt)("h2",{id:"card-data-callback"},"Card data callback"),(0,r.kt)("p",null,"A callback will be made on the encryptedPanCallbackUrl when the user swipes to accept the payment. The callback will have a JSON body like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EncryptedCardUpdateCallbackPayload"',title:'"EncryptedCardUpdateCallbackPayload"'},'{\n  "EncryptedCardData": "fsfnsdjkfbgdft34895u7345",\n  "PaymentId": "a84781b3-af34-42ae-b296-260cfb6859fe",\n  "AuthorizationAttemptId": "ba12c5d5-8fd1-49cc-bc3f-2cb2ecb888c7",\n  "PublicKeyId": 263012,\n  "CardType" : "DANKORT"\n}\n')),(0,r.kt)("p",null,'The EncryptedCardData is encrypted according to this OAEP algorithm&padding scheme: RSA/NONE/OAEPWithSHA256AndMGF1Padding (note that SHA-256 hash is also used for padding).\nOnce decrypted, you\xb4ll see:\n{"timestampticks":123456789123456789,"encryptedCardData": { "cardNumber": 1234567812345678, "expiryMonth": 12, "expiryYear": 28 }'),(0,r.kt)("p",null,'Make sure you respond to the callback immediately once you\xb4ve decrypted the content. DO NOT leave the transaction "hanging" while you call out to the Acquirer.'),(0,r.kt)("p",null,'Strictly process the payment on the card type given in field "CardType"! This is the only way MobilePay can offer card type picking for co-branded cards in accordance with PSD2 requirements.\nAlso the SCA method vary on the cobranded Visa/Dankort. This means that if you process the PAN given with CardType=DANKORT as a Visa the SCA is missing and the (unwanted) 3DS step-up is likely to happen.'),(0,r.kt)("p",null,"Note: When receiving a PAN-based transaction from us it can't be regarded as authenticated. You should handle these according to scheme rules to ensure correct handling regarding SCA. If in doubt please contact your acquirer."),(0,r.kt)("h2",{id:"failed-payment-callback"},"Failed payment callback"),(0,r.kt)("p",null,"In case the payment times out a callback is made to the FailedPaymentCallbackUrl url supplied in the initiate payment call. Note that this callback is not sent if the user rejects the payment, only when payment times out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Failed payment callback example"',title:'"Failed',payment:!0,callback:!0,'example"':!0},'{\n    "Code": "100",\n    "Reason": "Payment expired",\n    "PaymentId": "8d72ece4-1b0b-464b-98d9-6bbb02199dc8"\n}\n')),(0,r.kt)("h2",{id:"endpoint-security"},"Endpoint security"),(0,r.kt)("p",null,"To ensure no unauthorized calls to your callback endpoints we strongly suggest you apply either (or both) of these limitations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Firewall rules. These are the IP-ranges that MobilePay backend will be calling from: 212.93.32.0/19 and 185.218.228.0/22"),(0,r.kt)("li",{parentName:"ol"},'SSL "Common name" inspection. The "Common name" in our SSL client certificate should never change. Even when the certificate itself changes or is issued to a different root.')))}u.isMDXComponent=!0}}]);