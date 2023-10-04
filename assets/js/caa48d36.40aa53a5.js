"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=l(n),c=o,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[h]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:10},r="Transition to One Platform",p={unversionedId:"app-payments/transition-to-one-platform",id:"app-payments/transition-to-one-platform",title:"Transition to One Platform",description:"Our journey to create the ultimate payment wallet in the Nordics",source:"@site/docs/app-payments/transition-to-one-platform.md",sourceDirName:"app-payments",slug:"/app-payments/transition-to-one-platform",permalink:"/docs/app-payments/transition-to-one-platform",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Release Notes",permalink:"/docs/app-payments/release-notes"},next:{title:"Resources",permalink:"/docs/app-payments/ressources"}},s={},l=[{value:"Changes to The Facade",id:"changes-to-the-facade",level:2},{value:"Webhooks",id:"webhooks",level:3},{value:"SignatureKey",id:"signaturekey",level:4},{value:"Migrate and management",id:"migrate-and-management",level:4},{value:"Webhook Events",id:"webhook-events",level:4},{value:"Reference",id:"reference",level:3},{value:"Refund",id:"refund",level:3},{value:"RedirectURI when querying list of payments",id:"redirecturi-when-querying-list-of-payments",level:3},{value:"New merchants and payment points",id:"new-merchants-and-payment-points",level:3},{value:"UserSimulation endpoint",id:"usersimulation-endpoint",level:3}],m={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transition-to-one-platform"},"Transition to One Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our journey to create the ultimate payment wallet in the Nordics")),(0,o.kt)("p",null,"On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway."),(0,o.kt)("h1",{id:"new-epayments-api"},"New ePayments API"),(0,o.kt)("p",null,"There is no need to reintegrate into the new solution yet as the existing App Payments integration will continue to work until the end of 2024. But you are very welcome to start the integration already now. As replacement for App Payments API we offer our new product ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API"),". This will have many of the same features but also offer new possibilities together with our range of supporting APIs. Please have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/solutions/"},"recommended flows")," to get inspiration for the new possibilities . The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API")," will be available in Finland and Denmark from Q1 2024. Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/"},"migration guide")," for information about the migration."),(0,o.kt)("h1",{id:"app-payments-facade"},"App Payments Facade"),(0,o.kt)("p",null,"To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. If you have any questions you are always welcome to reach out to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," "),(0,o.kt)("h2",{id:"changes-to-the-facade"},"Changes to The Facade"),(0,o.kt)("h3",{id:"webhooks"},"Webhooks"),(0,o.kt)("h4",{id:"signaturekey"},"SignatureKey"),(0,o.kt)("p",null,"SignatureKey can no longer be fetched. You will have to fetch them now and store them securely for validating Webhook signatures."),(0,o.kt)("h4",{id:"migrate-and-management"},"Migrate and management"),(0,o.kt)("p",null,"We will migrate all existing webhooks to the new platform. The existing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/wehooks"},"MobilePay Webhook API")," will close but you can manage your webhooks after transition to one platform using the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API"),". This will require that you use the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/access-token/"},"Access token API")," in order to authenticate towards the API. "),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API")," will support webhooks on partner level or merchant sales unit level. This means that partners can register one webhook for all their merchants or webhook for each individual sales unit. Merchants can register webhook for each their sales units. A sales unit is equal to a payment point. "),(0,o.kt)("h4",{id:"webhook-events"},"Webhook Events"),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API")," will contain different ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/"},"events"),". When registering new webhooks you will be able to choose between the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/docs/app-payments/webhooks#available-webhook-events"},"existing MobilePay events")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/"},"new Vipps MobilePay events"),". Documentation for this will come soon."),(0,o.kt)("p",null,"Neither the existing or new webhook API's will support ",(0,o.kt)("inlineCode",{parentName:"p"},"paymentpoint.activated")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer.succeeded")," events. "),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("p",null,"The payment reference will be shown on the payment receipt. If the reference is not unique we will postfix a counter separated by a delimiter:\n",(0,o.kt)("inlineCode",{parentName:"p"},"reference{delimiter}{counter}"),". Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"order123#1"),"."),(0,o.kt)("p",null,"This will only be shown to the user on the receipt. If you retrieve the payment data through the API you will get the reference you have defined in payment initiation which does not include the counter.  "),(0,o.kt)("h3",{id:"refund"},"Refund"),(0,o.kt)("p",null,"The refund description will no longer be shown to users or be present when querying refunds."),(0,o.kt)("h3",{id:"redirecturi-when-querying-list-of-payments"},"RedirectURI when querying list of payments"),(0,o.kt)("p",null,"When using endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /v1/payments"))," the RedirectURI response field will be cut off after the first 100 characters when querying the list of payments.\nNote: This will not affect the payment initiation, only when retrieving the list of payments."),(0,o.kt)("h3",{id:"new-merchants-and-payment-points"},"New merchants and payment points"),(0,o.kt)("p",null,"There will be some changes in the availability to create new merchants and payment points. Please contact us if you have a need for new merchants and payment points. "),(0,o.kt)("p",null,"From the launch of our new platform you will be able to use the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API")," where there is not limitation to the creation of new merchants and payment points. Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/"},"migration guide")," for information about the migration. "),(0,o.kt)("h3",{id:"usersimulation-endpoint"},"UserSimulation endpoint"),(0,o.kt)("p",null,"The request to the userSimulation endpoint will be simplified. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Old MobilePay request"',title:'"Old',MobilePay:!0,'request"':!0},"curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{paymentid}/reserve \\\n-X POST \\\n-H 'Authorization: Bearer {API_KEY or JWT}' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"paymentSourceId\": {UUID},\n    \"userId\": {UUID}\n}'\n")),(0,o.kt)("p",null,"For  the new setup you will not need to supply a userId or paymentSourceId but instead a phoneNumber. When registering for test access on the new platform you will receive a new test phoneNumber"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="New Vipps MobilePay request"',title:'"New',Vipps:!0,MobilePay:!0,'request"':!0},"curl xxx/v1/integration-test/payments/{PAYMENT_ID}/reserve \\\n-X POST \\\n-H 'Authorization: Bearer {API_KEY or JWT}' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"phoneNumber\": {string}\n}'\n")))}u.isMDXComponent=!0}}]);