"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[3268],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={sidebar_position:5},i="Transition to One Platform",l={unversionedId:"online/transition-to-one-platform",id:"online/transition-to-one-platform",title:"Transition to One Platform",description:"Our journey to create the ultimate payment wallet in the Nordics",source:"@site/docs/online/transition-to-one-platform.md",sourceDirName:"online",slug:"/online/transition-to-one-platform",permalink:"/docs/online/transition-to-one-platform",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Strong Customer Authentication",permalink:"/docs/online/sca"},next:{title:"Resources",permalink:"/docs/online/resources"}},s={},p=[{value:"VAT number required for all merchants",id:"vat-number-required-for-all-merchants",level:2},{value:"Callback servers",id:"callback-servers",level:2},{value:"Feature changes",id:"feature-changes",level:2},{value:"Update merchant",id:"update-merchant",level:3},{value:"PspReferenceId",id:"pspreferenceid",level:3},{value:"validUntil",id:"validuntil",level:3},{value:"Get payment",id:"get-payment",level:3},{value:"Invalidate payment",id:"invalidate-payment",level:3},{value:"Use the RedirectURLs we supply and don&#39;t change them on your end",id:"use-the-redirecturls-we-supply-and-dont-change-them-on-your-end",level:2},{value:"Prefill phone number",id:"prefill-phone-number",level:2},{value:"Test availability",id:"test-availability",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"transition-to-one-platform"},"Transition to One Platform"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Our journey to create the ultimate payment wallet in the Nordics")),(0,r.yg)("p",null,"On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway."),(0,r.yg)("admonition",{title:"No Need to Reintegrate",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"There is no need to reintegrate into the new solution. Your existing Online integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly.\nPlease take a moment to familiarize yourself with the upcoming changes and how they may impact your integration.")),(0,r.yg)("p",null,"To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"March 12th")," we will launch the new platform in ",(0,r.yg)("strong",{parentName:"li"},"Denmark")," and migrate all Danish merchants.")),(0,r.yg)("p",null,"If a merchant is neither Finnish or Danish we will migrate them according to the currency of their transactions. You may encounter a slight rise in failed payments in the period between the Finnish and Danish launch. This can happen to merchants that have customers in both countries. In the intermediate period it will only be possible to offer payments to either Danish or Finnish users. Once we have launched in Denmark it will be possible to make cross border payments again. "),(0,r.yg)("p",null,"If you have any questions, feel free to reach out to us at ",(0,r.yg)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," "),(0,r.yg)("h2",{id:"vat-number-required-for-all-merchants"},"VAT number required for all merchants"),(0,r.yg)("p",null,"VAT number is now required for all merchants. For new merchants, the vatNumber field is required for the Create merchant endpoint: ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v1/merchants"),"\nFor existing merchants without VAT numbers you must, you can use Update merchant ",(0,r.yg)("inlineCode",{parentName:"p"},"PATCH /api/v1/merchants/{merchantId}")," to provide vatNumber. Note that the Update endpoint only accepts VAT number. It is not possible to update any other details. Please see ",(0,r.yg)("a",{parentName:"p",href:"#update-merchant"},"Update merchant")," if you need to change any other details of the merchant."),(0,r.yg)("p",null,"If you do not update the VAT number of your existing merchants you will not be able to initiate payments for these after the launch of the new platform. You must then delete them and create a new merchant. "),(0,r.yg)("p",null,"For sole props. not having a VAT no. you can use an alternative number for example your own unique merchant id."),(0,r.yg)("h2",{id:"callback-servers"},"Callback servers"),(0,r.yg)("p",null,"On our new platform we will use different callback servers than currently used. If you have whitelisted our IP ranges for callbacks please ensure to include our new servers. You can find our server guidelines ",(0,r.yg)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"here"),". Note that this is only for callbacks. During the transition period to our new platform you may receive callbacks from our old setup and new servers. Therefore you must allow both the ",(0,r.yg)("a",{parentName:"p",href:"/docs/support/faq"},"old")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"new servers")," for a period of time until we have completely transitioned to one platform. We encourage you to enable this as soon as possible as this will come into effect in January 2024."),(0,r.yg)("h2",{id:"feature-changes"},"Feature changes"),(0,r.yg)("p",null,"During Q1 2024 - once we fully consolidate our platforms \u2013 the following endpoints/features will stop working for MobilePay Online.\nFor a smooth transition, we recommend reviewing the changes and consider updating your integration accordingly if you are using any of these."),(0,r.yg)("h3",{id:"update-merchant"},"Update merchant"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"PATCH /api/v1/merchants/{merchantId}")," currently only support update of VAT number. We will soon remove the endpoint completely. Note that you can only update VAT number using ",(0,r.yg)("inlineCode",{parentName:"p"},"PATCH")," before the launch of the new platform. After launch you must instead delete the merchant and create a new using: ",(0,r.yg)("inlineCode",{parentName:"p"},"DELETE /v1/merchants/{merchantId}")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v1/merchants"),".\nIf you need to update an active merchant we recomend that you create the new merchant and then delete the old. This is to avoid downtime since it is not possible to initiate payments on deleted merchants. Authorization updates and payment updates such as capture, cancel and refund is on payment level and will therefore not be affected by this. "),(0,r.yg)("h3",{id:"pspreferenceid"},"PspReferenceId"),(0,r.yg)("p",null,"PspReferenceId must from now on be unique."),(0,r.yg)("h3",{id:"validuntil"},"validUntil"),(0,r.yg)("p",null,"It will no longer be possible to define payment validation. It will instead default to 5 minutes. "),(0,r.yg)("h3",{id:"get-payment"},"Get payment"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/v3/payments/{paymentId}")," will be removed. "),(0,r.yg)("h3",{id:"invalidate-payment"},"Invalidate payment"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"PUT /v1/payments/{paymentId}/invalidate")," will be removed and it will not be possible to invalidate payments. "),(0,r.yg)("h2",{id:"use-the-redirecturls-we-supply-and-dont-change-them-on-your-end"},"Use the RedirectURLs we supply and don't change them on your end"),(0,r.yg)("p",null,'RedirectURLs start with the basepath vipps://? follow by the token "token=(TOKEN)". Always use the Redirect link we send. Do not change it in any way.\nIf you have hardcoded dependencies make sure you allow for these.\nExample:\n"redirectToMobilePayAppUrl": "vipps://?token=(TOKEN)"'),(0,r.yg)("h2",{id:"prefill-phone-number"},"Prefill phone number"),(0,r.yg)("p",null,'It is currently not possible to prefill the phone number on the MobilePay landing page. If a phone number is supplied the page will simply ignore it. Instead users can use the "Remember me" functionality to avoid having to input phone number each time. We are looking into adding the prefill option again but have no ETA for this yet. '),(0,r.yg)("h2",{id:"test-availability"},"Test availability"),(0,r.yg)("p",null,"The new test environement is being prepared for the Online facade. We expect to release the first version of this during the week 6th-10th of May. We will update this documentation when the test environment is ready. "),(0,r.yg)("p",null,"Before the test environment is ready you can test in production as an alternative. We suggest perhaps limit the capture option in order to ensure funds are not being transferred.\nPlease see ",(0,r.yg)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/test-environment/#regional-limitations"},"limitations for test environment"),"."))}c.isMDXComponent=!0}}]);