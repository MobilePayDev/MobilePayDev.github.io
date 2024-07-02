"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},i="Transition to One Platform",l={unversionedId:"online/transition-to-one-platform",id:"online/transition-to-one-platform",title:"Transition to One Platform",description:"Our journey to create the ultimate payment wallet in the Nordics",source:"@site/docs/online/transition-to-one-platform.md",sourceDirName:"online",slug:"/online/transition-to-one-platform",permalink:"/docs/online/transition-to-one-platform",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Strong Customer Authentication",permalink:"/docs/online/sca"},next:{title:"Resources",permalink:"/docs/online/resources"}},s={},p=[{value:"VAT number required for all merchants",id:"vat-number-required-for-all-merchants",level:2},{value:"Callback servers",id:"callback-servers",level:2},{value:"Feature changes",id:"feature-changes",level:2},{value:"Update merchant",id:"update-merchant",level:3},{value:"PspReferenceId",id:"pspreferenceid",level:3},{value:"validUntil",id:"validuntil",level:3},{value:"Get payment",id:"get-payment",level:3},{value:"Invalidate payment",id:"invalidate-payment",level:3},{value:"Update payment",id:"update-payment",level:3},{value:"Use the RedirectURLs we supply and don&#39;t change them on your end",id:"use-the-redirecturls-we-supply-and-dont-change-them-on-your-end",level:2},{value:"Prefill phone number",id:"prefill-phone-number",level:2},{value:"Test availability",id:"test-availability",level:2},{value:"Authorization and endpoints",id:"authorization-and-endpoints",level:3},{value:"Test data and test user",id:"test-data-and-test-user",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transition-to-one-platform"},"Transition to One Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our journey to create the ultimate payment wallet in the Nordics")),(0,o.kt)("p",null,"On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway."),(0,o.kt)("admonition",{title:"No Need to Reintegrate",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is no need to reintegrate into the new solution. Your existing Online integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly.\nPlease take a moment to familiarize yourself with the upcoming changes and how they may impact your integration.")),(0,o.kt)("p",null,"To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"March 12th")," we will launch the new platform in ",(0,o.kt)("strong",{parentName:"li"},"Denmark")," and migrate all Danish merchants.")),(0,o.kt)("p",null,"If a merchant is neither Finnish or Danish we will migrate them according to the currency of their transactions. You may encounter a slight rise in failed payments in the period between the Finnish and Danish launch. This can happen to merchants that have customers in both countries. In the intermediate period it will only be possible to offer payments to either Danish or Finnish users. Once we have launched in Denmark it will be possible to make cross border payments again. "),(0,o.kt)("p",null,"If you have any questions, feel free to reach out to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," "),(0,o.kt)("h2",{id:"vat-number-required-for-all-merchants"},"VAT number required for all merchants"),(0,o.kt)("p",null,"VAT number is now required for all merchants. For new merchants, the vatNumber field is required for the Create merchant endpoint: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /v1/merchants"),"\nFor existing merchants without VAT numbers you must, you can use Update merchant ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/v1/merchants/{merchantId}")," to provide vatNumber. Note that the Update endpoint only accepts VAT number. It is not possible to update any other details. Please see ",(0,o.kt)("a",{parentName:"p",href:"#update-merchant"},"Update merchant")," if you need to change any other details of the merchant."),(0,o.kt)("p",null,"If you do not update the VAT number of your existing merchants you will not be able to initiate payments for these after the launch of the new platform. You must then delete them and create a new merchant. "),(0,o.kt)("p",null,"For sole props. not having a VAT no. you can use an alternative number for example your own unique merchant id."),(0,o.kt)("h2",{id:"callback-servers"},"Callback servers"),(0,o.kt)("p",null,"On our new platform we will use different callback servers than currently used. If you have whitelisted our IP ranges for callbacks please ensure to include our new servers. You can find our server guidelines ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"here"),". Note that this is only for callbacks. During the transition period to our new platform you may receive callbacks from our old setup and new servers. Therefore you must allow both the ",(0,o.kt)("a",{parentName:"p",href:"/docs/support/faq"},"old")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"new servers")," for a period of time until we have completely transitioned to one platform. We encourage you to enable this as soon as possible as this will come into effect in January 2024."),(0,o.kt)("h2",{id:"feature-changes"},"Feature changes"),(0,o.kt)("p",null,"During Q1 2024 - once we fully consolidate our platforms \u2013 the following endpoints/features will stop working for MobilePay Online.\nFor a smooth transition, we recommend reviewing the changes and consider updating your integration accordingly if you are using any of these."),(0,o.kt)("h3",{id:"update-merchant"},"Update merchant"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/v1/merchants/{merchantId}")," currently only support update of VAT number. We will soon remove the endpoint completely. Note that you can only update VAT number using ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," before the launch of the new platform. After launch you must instead delete the merchant and create a new using: ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /v1/merchants/{merchantId}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /v1/merchants"),".\nIf you need to update an active merchant we recomend that you create the new merchant and then delete the old. This is to avoid downtime since it is not possible to initiate payments on deleted merchants. Authorization updates and payment updates such as capture, cancel and refund is on payment level and will therefore not be affected by this. "),(0,o.kt)("h3",{id:"pspreferenceid"},"PspReferenceId"),(0,o.kt)("p",null,"PspReferenceId must from now on be unique."),(0,o.kt)("h3",{id:"validuntil"},"validUntil"),(0,o.kt)("p",null,"It will no longer be possible to define payment validation. It will instead default to 10 minutes. "),(0,o.kt)("h3",{id:"get-payment"},"Get payment"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v3/payments/{paymentId}")," will be removed. "),(0,o.kt)("h3",{id:"invalidate-payment"},"Invalidate payment"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PUT /v1/payments/{paymentId}/invalidate")," will be removed and it will not be possible to invalidate payments. "),(0,o.kt)("h3",{id:"update-payment"},"Update payment"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /v1/payments/{paymentId}")," will require approval to use. Please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")),(0,o.kt)("h2",{id:"use-the-redirecturls-we-supply-and-dont-change-them-on-your-end"},"Use the RedirectURLs we supply and don't change them on your end"),(0,o.kt)("p",null,'RedirectURLs start with the basepath vipps://? follow by the token "token=(TOKEN)". Always use the Redirect link we send. Do not change it in any way.\nIf you have hardcoded dependencies make sure you allow for these.\nExample:\n"redirectToMobilePayAppUrl": "vipps://?token=(TOKEN)"'),(0,o.kt)("h2",{id:"prefill-phone-number"},"Prefill phone number"),(0,o.kt)("p",null,'It is currently not possible to prefill the phone number on the MobilePay landing page. If a phone number is supplied the page will simply ignore it. Instead users can use the "Remember me" functionality to avoid having to input phone number each time. We are looking into adding the prefill option again but have no ETA for this yet. '),(0,o.kt)("h2",{id:"test-availability"},"Test availability"),(0,o.kt)("p",null,"The first version of the new test environment is ready for the Online facade. Please read the details below on how to test."),(0,o.kt)("h3",{id:"authorization-and-endpoints"},"Authorization and endpoints"),(0,o.kt)("p",null,"You can continue to use your existing sandbox credentials which includes client id, client secret and publicKeyId. The endpoints have not changed and you can find them in the ",(0,o.kt)("a",{parentName:"p",href:"/api/online"},"API specification"),". "),(0,o.kt)("h3",{id:"test-data-and-test-user"},"Test data and test user"),(0,o.kt)("p",null,"No test data have been migrated so you must create new test merchants. You will also need a new test user which can be requested by contacting ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com."},"developer@vippsmobilepay.com.")," Please state if you need a DK or FI user. "),(0,o.kt)("p",null,"It is no longer possible to add your own cards to the test users, instead you can utilize magic numbers documented ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/psp-api/vipps-psp-api/#magic-numbers-for-emvco-tokens"},"here"),". Note that the documentation for the magic numbers are part of the Vipps PSP documentation. But it is only the section about magic numbers that are relevant for your MobilePay Online test, the rest is only related to Vipps PSP solution. For MobilePay Online you must still follow the existing ",(0,o.kt)("a",{parentName:"p",href:"/docs/online"},"MobilePay Online")," documentation."))}d.isMDXComponent=!0}}]);