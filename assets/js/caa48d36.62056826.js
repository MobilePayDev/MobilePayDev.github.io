"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,c=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[h]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:10},r="Transition to One Platform",p={unversionedId:"app-payments/transition-to-one-platform",id:"app-payments/transition-to-one-platform",title:"Transition to One Platform",description:"THIS DOCUMENT WAS LAST UPDATED ON 09.01.2024 (NEW CONTENT: HOW TO TEST THE FACADE)",source:"@site/docs/app-payments/transition-to-one-platform.md",sourceDirName:"app-payments",slug:"/app-payments/transition-to-one-platform",permalink:"/docs/app-payments/transition-to-one-platform",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Release Notes",permalink:"/docs/app-payments/release-notes"},next:{title:"Resources",permalink:"/docs/app-payments/ressources"}},l={},s=[{value:"App Payments to ePayments API",id:"app-payments-to-epayments-api",level:2},{value:"The test environment for the new platform",id:"the-test-environment-for-the-new-platform",level:3},{value:"App Payments Facade",id:"app-payments-facade",level:2},{value:"Changes to The Facade",id:"changes-to-the-facade",level:3},{value:"Webhooks",id:"webhooks",level:4},{value:"SignatureKey",id:"signaturekey",level:5},{value:"Migration and management",id:"migration-and-management",level:4},{value:"Webhook Events",id:"webhook-events",level:5},{value:"Payments",id:"payments",level:4},{value:"Reference",id:"reference",level:5},{value:"Description",id:"description",level:5},{value:"Refund",id:"refund",level:4},{value:"RedirectURI when querying list of payments",id:"redirecturi-when-querying-list-of-payments",level:4},{value:"New merchants and payment points",id:"new-merchants-and-payment-points",level:4},{value:"UserSimulation endpoint",id:"usersimulation-endpoint",level:4},{value:"Testing the facade (Only in production)",id:"testing-the-facade-only-in-production",level:3}],m={toc:s},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transition-to-one-platform"},"Transition to One Platform"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"THIS DOCUMENT WAS LAST UPDATED ON 09.01.2024")," (NEW CONTENT: HOW TO TEST THE FACADE)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our journey to create the ultimate payment wallet in the Nordics")),(0,o.kt)("p",null,"On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway."),(0,o.kt)("h2",{id:"app-payments-to-epayments-api"},"App Payments to ePayments API"),(0,o.kt)("p",null,"There is no need to reintegrate into the new solution yet as the existing App Payments integration will continue to work until Q1 2025. But you are very welcome to start the integration already now. As replacement for App Payments API we offer our new product ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API"),". This will have many of the same features but also offer new possibilities together with our range of supporting APIs. Please have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/solutions/"},"recommended flows")," to get inspiration for the new possibilities . The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API")," will be available in Finland and Denmark from Q1 2024. Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/"},"migration guide")," for information about the migration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Timeline for existing App Payments merchants and partners")),(0,o.kt)("admonition",{title:"Key dates",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOW")," Take a look at the change list here and implement changes if needed for the Facade period")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024Q1")," Be ready with adjustments needed for your integration for the Facade period. We recommend for Finnish merchants and partners to be ready till 2024.01.01.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024Q1")," We finally launch Nordic Wallet Launch in Finland \ud83c\uddeb\ud83c\uddee and then Denmark \ud83c\udde9\ud83c\uddf0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024")," Plan and integrate new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2025Q1")," Be ready with your API integration to the App Payments API. The facade will be switched off. ")))),(0,o.kt)("h3",{id:"the-test-environment-for-the-new-platform"},"The test environment for the new platform"),(0,o.kt)("p",null,"The test environment is called Merchant Test (MT) and is now open for test. MT currently only allows Norwegian phone numbers, currency and merchants, but you can test the API and payment flow. Please see the details of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/test-environment/"},"limitations of the test environment")),(0,o.kt)("p",null,"In order to request access to the test environment, please use the following links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vippsmobilepay.com/partner/become-a-partner"},"Partners")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vippsmobilepay.com/merchant-test-account-sign-up"},"Merchants"))),(0,o.kt)("p",null,"We will send you an e-mail with the information you need to get started. This is also needed even though you are an existing MobilePay integrator or merchant, since we need your information registered on our new joint platform."),(0,o.kt)("h2",{id:"app-payments-facade"},"App Payments Facade"),(0,o.kt)("p",null,"To ease the switch to a new platform we will supply a facade for the existing MobilePay App Payments API that will be available during and after the launch of the new platform. There is no need to reintegrate into the new solution now. Your existing App Payments integration will continue to work and while our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and consider updating your integration accordingly. Please take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. "),(0,o.kt)("admonition",{title:"Important info",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"To make the transition as smooth as possible, we will migrate all merchants and automatically switch you to the new facade once it is live. All you needd to do is ensure that that you have adjusted your integration to the changes mentioned below, and we will take care of everything else. If you have any questions, feel free to reach out to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," ")),(0,o.kt)("h3",{id:"changes-to-the-facade"},"Changes to The Facade"),(0,o.kt)("h4",{id:"webhooks"},"Webhooks"),(0,o.kt)("h5",{id:"signaturekey"},"SignatureKey"),(0,o.kt)("p",null,"SignatureKey can no longer be fetched through the API. You will have to fetch them from the portal and store them securely for validating Webhook signatures."),(0,o.kt)("h4",{id:"migration-and-management"},"Migration and management"),(0,o.kt)("p",null,"We will migrate all existing webhooks to the new platform. The existing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/wehooks"},"MobilePay Webhook API")," will close but you can manage your webhooks after transition to one platform using the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API"),". This will require that you use the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/access-token/"},"Access token API")," in order to authenticate towards the API. "),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API")," will support webhooks on partner level or merchant sales unit level. This means that partners can register one webhook for all their merchants or a webhook for each individual sales unit. Merchants has to register webhooks for each of their sales units individually. A sales unit is equal to a payment point. "),(0,o.kt)("h5",{id:"webhook-events"},"Webhook Events"),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/webhooks/"},"Vipps MobilePay Webhooks API")," will contain different ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/"},"events"),". When registering new webhooks you will be able to choose between the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/docs/app-payments/webhooks#available-webhook-events"},"existing MobilePay events")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/webhooks-api/events/"},"new Vipps MobilePay events"),"."),(0,o.kt)("p",null,"Neither the existing or new webhook API's will support ",(0,o.kt)("inlineCode",{parentName:"p"},"paymentpoint.activated")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer.succeeded")," events. "),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"For the facade we will use different webhook servers than currently used. If you have whitelisted our IP ranges for webhooks please ensure to include our new servers. You can find our server guidelines ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"here"),".")),(0,o.kt)("h4",{id:"payments"},"Payments"),(0,o.kt)("h5",{id:"reference"},"Reference"),(0,o.kt)("p",null,"The payment reference will be shown on the payment receipt. If the reference is not unique we will postfix a counter separated by a delimiter:\n",(0,o.kt)("inlineCode",{parentName:"p"},"reference{delimiter}{counter}"),". Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"order123#1"),"."),(0,o.kt)("p",null,"If the payment reference is not unique and too large to have a postfix an appropriate amount will be trimmed from the end of the reference before adding the postfix.\nExample  ",(0,o.kt)("inlineCode",{parentName:"p"},"this-reference-is-64-chars")," will become ",(0,o.kt)("inlineCode",{parentName:"p"},"this-reference-is-64-cha#1"),"."),(0,o.kt)("p",null,"This will only be shown to the user on the receipt. If you retrieve the payment data through the API you will get the reference you have defined in payment initiation which does not include the counter or trimming."),(0,o.kt)("h5",{id:"description"},"Description"),(0,o.kt)("p",null,"The payment description can no longer exceed 100 characters. If a payment description exceeds this length the remaining description text will be cut off."),(0,o.kt)("h4",{id:"refund"},"Refund"),(0,o.kt)("p",null,"The refund description will no longer be shown to users or be present when querying refunds."),(0,o.kt)("h4",{id:"redirecturi-when-querying-list-of-payments"},"RedirectURI when querying list of payments"),(0,o.kt)("p",null,"When using endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/app-payments#tag/Payments/operation/get-payments-list"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /v1/payments"))," the RedirectURI response field will be cut off after the first 100 characters when querying the list of payments.\nNote: This will not affect the payment initiation, only when retrieving the list of payments."),(0,o.kt)("h4",{id:"new-merchants-and-payment-points"},"New merchants and payment points"),(0,o.kt)("p",null,"There will be some changes in the availability to create new merchants and payment points. Please contact us if you have a need for new merchants and payment points. "),(0,o.kt)("p",null,"From the launch of our new platform you will be able to use the new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/epayment-api/"},"ePayments API")," where there is not limitation to the creation of new merchants and payment points. Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/app-payments/"},"migration guide")," for information about the migration. "),(0,o.kt)("h4",{id:"usersimulation-endpoint"},"UserSimulation endpoint"),(0,o.kt)("p",null,"The request to the userSimulation endpoint will be simplified. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Old MobilePay request"',title:'"Old',MobilePay:!0,'request"':!0},"curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{paymentid}/reserve \\\n-X POST \\\n-H 'Authorization: Bearer {API_KEY or JWT}' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"paymentSourceId\": {UUID},\n    \"userId\": {UUID}\n}'\n")),(0,o.kt)("p",null,"For  the new setup you will not need to supply a userId or paymentSourceId but instead a phoneNumber. When registering for test access on the new platform you will receive a new test phoneNumber"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="New Vipps MobilePay request"',title:'"New',Vipps:!0,MobilePay:!0,'request"':!0},"curl xxx/v1/integration-test/payments/{PAYMENT_ID}/reserve \\\n-X POST \\\n-H 'Authorization: Bearer {API_KEY or JWT}' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"phoneNumber\": {string}\n}'\n")),(0,o.kt)("h3",{id:"testing-the-facade-only-in-production"},"Testing the facade (Only in production)"),(0,o.kt)("p",null,"Facade tests can only be conducted in the Production environment. A new app version is required for the test, and it is exclusively available internally for Vipps MobilePay (VMP) employees, so we will assist you with the testing."),(0,o.kt)("p",null,"Preparation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new Payment point in the MobilePay portal."),(0,o.kt)("li",{parentName:"ul"},"Inform VMP when it's completed."),(0,o.kt)("li",{parentName:"ul"},"We will toggle a switch for that specific payment point so traffic is routed through the facade.")),(0,o.kt)("p",null,"How to test:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make requests as usual through the API on the new payment point."),(0,o.kt)("li",{parentName:"ul"},"To test a full payment flow, user interaction is required. Contact us at ",(0,o.kt)("a",{parentName:"li",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," and we will schedule a meeting.")),(0,o.kt)("p",null,"Important:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It\u2019s up to the merchant to decide if they want to test the facade."),(0,o.kt)("li",{parentName:"ul"},"There are no new features in the facade.")))}u.isMDXComponent=!0}}]);