"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:13},i=void 0,s={unversionedId:"subscriptions/transition-to-one-platform",id:"subscriptions/transition-to-one-platform",title:"transition-to-one-platform",description:"0. Introduction",source:"@site/docs/subscriptions/transition-to-one-platform.md",sourceDirName:"subscriptions",slug:"/subscriptions/transition-to-one-platform",permalink:"/docs/subscriptions/transition-to-one-platform",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docsSidebar",previous:{title:"API principles",permalink:"/docs/subscriptions/api-principles"},next:{title:"Resources",permalink:"/docs/subscriptions/resources"}},l={},p=[{value:"0. Introduction",id:"0-introduction",level:2},{value:"1. Agreements",id:"1-agreements",level:2},{value:"1.1 Agreement request expiration period",id:"11-agreement-request-expiration-period",level:3},{value:"1.2 Agreement deletion validations",id:"12-agreement-deletion-validations",level:3},{value:"2. Recurring payments",id:"2-recurring-payments",level:2},{value:"2.1 Payments visible 8 days in advance",id:"21-payments-visible-8-days-in-advance",level:3},{value:"2.2 Update existing payment",id:"22-update-existing-payment",level:3},{value:"2.3 Push message for the user",id:"23-push-message-for-the-user",level:3},{value:"2.4 Invalid recurring payments",id:"24-invalid-recurring-payments",level:3},{value:"3. One-off payments",id:"3-one-off-payments",level:2},{value:"3.1 One-off payments types",id:"31-one-off-payments-types",level:3},{value:"3.2 One-off expiration period",id:"32-one-off-expiration-period",level:3},{value:"4. Refunds",id:"4-refunds",level:2},{value:"4.1 Refund up to 365 days",id:"41-refund-up-to-365-days",level:3},{value:"5.1 App \ud83d\udcf1",id:"51-app-",level:2},{value:"5.1 Merchant visibility",id:"51-merchant-visibility",level:3},{value:"5.2 Merchant information on agreements",id:"52-merchant-information-on-agreements",level:3},{value:"5.3 Payment attachments",id:"53-payment-attachments",level:3},{value:"6. AUTH setup",id:"6-auth-setup",level:2},{value:"Developer Support",id:"developer-support",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"0-introduction"},"0. Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transition to One Platform")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Our journey to create the ultimate payment wallet in the Nordics")),(0,a.kt)("p",null,"On November 1st, 2022, we received the exciting news that the merger between MobilePay and Vipps was officially approved! This is a significant milestone for us, and we're thrilled to embark on the journey of creating the ultimate payment wallet experience for our wonderful customers, partners, and users in the Nordics. By early 2024, we're aiming to launch a single, unified app: MobilePay in Denmark and Finland, and Vipps in Norway. This unified platform will bring together more than 11 million users and over 400,000 merchants across the Nordics, ensuring that you have a unified payment experience throughout. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Uniting Subscriptions with Vipps MobilePay Recurring")),(0,a.kt)("p",null," We want to ensure that your transition to the new One Platform is as smooth and effortless as possible. As part of this transition, we will be merging the Subscriptions product with Vipps MobilePay Recurring product. Rest assured, we have carefully evaluated the usage of all Subscription features and we will ensure that the most commonly used features will continue to exist. To provide you with a simple, lightweight, and valuable product, any features that were not utilized will be closed. Our aim is to make your experience hassle-free and enjoyable."),(0,a.kt)("p",null,"\ud83d\udea9 ",(0,a.kt)("strong",{parentName:"p"},"Important information - A smooth transition to the new solution")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No Need to Reintegrate:")," You can breathe a sigh of relief knowing that there is no need to reintegrate into the new solution. Your existing Subscriptions APIs will continue to work seamlessly until the end of 2024, and possibly even longer. We understand the value of maintaining your current setup."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Changes to Functionality:")," While our primary goal is to provide an effortless transition, we want to inform you that some functionality will be changing or closed starting from the moment we transition to One Platform. To ensure a smooth experience, we recommend reviewing the upcoming changes outlined below and considering updating your integration accordingly. We strive to keep you informed every step of the way.\nPlease take a moment to familiarize yourself with the upcoming changes and how they may impact your integration. Your satisfaction is our top priority, and we are here to support you throughout this process.")),(0,a.kt)("p",null,"Thank you for being a part of our journey toward creating the best and most user-friendly payment wallet in the Nordics. \ud83e\udde1 \ud83d\udc99"),(0,a.kt)("h2",{id:"1-agreements"},"1. Agreements"),(0,a.kt)("h3",{id:"11-agreement-request-expiration-period"},"1.1 Agreement request expiration period"),(0,a.kt)("p",null,"We know that you have various ways to send agreement requests to you customer, such as from your website, through customer self-service portals, by email, printed as a QR on paper invoices, and while chatting on the phone. Some of these scenarios require that the agreement request is valid for very long time, like when it's sent by email or printed as a QR on a paper invoice. After launch, we will reduce the agreement signing period to maximum 5 minutes."),(0,a.kt)("p",null,"\u2b50 ",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," If you want to give more than 5 minutes for your customer to sign the agreement, we recommend that you create a middle layer of communication on your private infrastructure. This means that when the user initiates agreement signing from your email or scans the QR on paper invoice, they should be redirected to your environment. At that moment, you can create the agreement request in Vipps MobilePay and redirect the customer to us. You will be in control of a bigger part of the agreement signing flow, providing more flexibility for you to manage the process.  In addition, you will have no need to send us all potential agreement requests, even if they will never be initiated by the customer. This means less data send to us, and less GDPR related questions (wink)"),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST:/api/providers/{providerId}/agreements")),(0,a.kt)("p",null,"Parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},"expiration_timeout_minutes"),". Current range from 1 to 181440 minutes, default was 5 minutes. After release, the range will be from 1 to 5 minutes."),(0,a.kt)("h3",{id:"12-agreement-deletion-validations"},"1.2 Agreement deletion validations"),(0,a.kt)("p",null,"No one likes when agreement gets canceled, right? We do not like it either. The Subscriptions API offers you the option to prevent the customer from canceling an agreement for up to 24 hours from the time it's signed. From the moment we transition to One Platform, this feature will be unavailable.  "),(0,a.kt)("p",null,"\u2b50 ",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," We will help you to provide the best payment experience and keep the customer happy so that canceling an agreement will not come into his mind. "),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST:/api/providers/{providerId}/agreements")),(0,a.kt)("p",null,"Parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},"retention_period_hours")," will be ignored from the moment we transition to One Platform."),(0,a.kt)("h2",{id:"2-recurring-payments"},"2. Recurring payments"),(0,a.kt)("h3",{id:"21-payments-visible-8-days-in-advance"},"2.1 Payments visible 8 days in advance"),(0,a.kt)("p",null,"We want to empower you with transparency and flexibility when it comes to your recurring payments. Currently, your customer can view upcoming payments in the app up to 8 days in advance, regardless of whether the payment was sent 30 or 60 days earlier. However, from the moment we transition to One Platform, we're excited to announce that customers will be able to see your upcoming payment 35 days in advance, if you send it that early."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," If 35 days of payment visibility in the app is too long for you, we recommend sending a payment closer to due date. "),(0,a.kt)("h3",{id:"22-update-existing-payment"},"2.2 Update existing payment"),(0,a.kt)("p",null,"Error in the payment you sent to your customer?  From the moment we transition to One Platform, we ask you to update existing payments in a slightly different way. "),(0,a.kt)("p",null,"\u2b50 ",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," We recommend you to cancel existing payments and create brand new in cases when payment information needs to be updated."),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH:/api/providers/{providerId}/agreements/{agreementId}/paymentrequests/{paymentId}")," will be unavailable from the moment we transition to One Platform."),(0,a.kt)("h3",{id:"23-push-message-for-the-user"},"2.3 Push message for the user"),(0,a.kt)("p",null,"Currently, your customers are receiving push messages 1 day in advance about upcoming recurring payments. You have an option to manage this notification through Subscription APIs. From the moment we transition to One Platform, we are removing this push notification for your customers and push management will stop being relevant, too. But do not worry, customers choosing to get those push messages will be informed about executed payments instead; in addition to notifications about all failed payments where they need to change a card, increase funds, etc. "),(0,a.kt)("p",null,"\u2b50 ",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," Sit back and relax, we will make sure that all payments are executed successfully. "),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST:/api/providers/{providerId}/agreements")),(0,a.kt)("p",null,"Parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},"disable_notification_management"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"notifications_on")," will be ignored from the moment we transition to One Platform."),(0,a.kt)("h3",{id:"24-invalid-recurring-payments"},"2.4 Invalid recurring payments"),(0,a.kt)("p",null,"This one is bit more technical. \u2699\ufe0f Currently, we are saving every payment request you send to us, even Invalid ones. You can check whole status diagram ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/docs/subscriptions/subscriptions-payments#payment-state-diagram"},"here"),". From the moment we transition to One Platform, we will stop storing these requests. This will not impact payment validation nor payment execution logic. You will still get callbacks about payments status changes."),(0,a.kt)("h2",{id:"3-one-off-payments"},"3. One-off payments"),(0,a.kt)("h3",{id:"31-one-off-payments-types"},"3.1 One-off payments types"),(0,a.kt)("p",null,"One-off payments in Subscriptions are used in 3 different ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-1--one-off-payment-with-a-new-agreement"},"Flow 1"),": Create a new Agreement with an initial One-Off Payment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-2---one-off-payment-on-an-existing-agreement"},"Flow 2"),": Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mobilepay.dk/docs/subscriptions/one-off-payments#flow-3---one-off-with-auto-reserve"},"Flow 3"),": Merchants can send One-Off payment, which MobilePay will attempt to automatically reserve, without user\u2019s confirmation")),(0,a.kt)("p",null,"We reevaluated all our product package, usage of this feature and we decided, that from the moment we transition to One Platform, flow 2 will be moved from Subscriptions (Recurring) product to another Vipps MobilePay product - ePayment! \ud83c\udf40 We are planning to keep flow 1 and 3 in the Subscriptions product and also in the Recurring product. Basically, all payments which are merchant initiated (MIT) and do not require Strong Customer Authentication (SCA) stay in Subscriptions and also Recurring. All payments where SCA is needed will be in ePayment product. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," If you want to continue charging your customers with payments where SCA is needed, please reintegrate these types of payments to Vipps MobilePay ePayment."),(0,a.kt)("h3",{id:"32-one-off-expiration-period"},"3.2 One-off expiration period"),(0,a.kt)("p",null,"Similarly as with agreements, we are aligning the expiration period for one-off payments. From the moment we transition to One Platform, the maximum expiration timeout will be 5 minutes. "),(0,a.kt)("p",null,"\u2b50 ",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow 1: Create a new Agreement with an initial One-Off Payment. Just set the same expiration period subtracting for the one-offs as you set for agreements. You can read about changes on agreements here (link to agreement expiration minus change)."),(0,a.kt)("li",{parentName:"ul"},'Flow 2: Customer can initiate and request arbitrary One-Off Payment payments on their existing Agreement. This type of flow will be moved to Vipps MobilePay  ePayments. You can find more information about the switch in "One-off payments" (link to that paragraph).'),(0,a.kt)("li",{parentName:"ul"},"Flow 3: Merchants can send a One-Off payment, which MobilePay will attempt to automatically reserve, without the user\u2019s confirmation. Long expiration time is not relevant for one-off auto reservation payments. So all good here (wink).")),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST:/api/providers/{providerId}/agreements"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"POST:/api/providers/{providerId}/agreements/{agreementId}/oneoffpayments")),(0,a.kt)("p",null,"Parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},"expiration_timeout_minutes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"one_off_payment.expiration_timeout_minutes")," Current range from 1 to 181440 min, default was 5 minutes. After the moment we transition to One Platform, range will be from 1 to 5 minutes."),(0,a.kt)("h2",{id:"4-refunds"},"4. Refunds"),(0,a.kt)("h3",{id:"41-refund-up-to-365-days"},"4.1 Refund up to 365 days"),(0,a.kt)("p",null,"Currently, you can refund payments which were executed up to 90 days in the past. Good news! We will give you an amazingly long period to refund your payments on One Platform - ",(0,a.kt)("strong",{parentName:"p"},"365 days!"),"  \u26a1\ufe0f\nThe new period will be applied only on payments which will be executed on the new platform. "),(0,a.kt)("h2",{id:"51-app-"},"5.1 App \ud83d\udcf1"),(0,a.kt)("h3",{id:"51-merchant-visibility"},"5.1 Merchant visibility"),(0,a.kt)("p",null,"We will be streamlining the user interface of the app to provide a more focused and efficient experience for our and your customers. As a result, the list of potential merchants will no longer be displayed in the app. However, please be assured that all active and stopped agreements will still be readily visible to the app users."),(0,a.kt)("p",null,"\u2b50",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," We understand that being present in the potential agreement list can be important to you. Although this feature will be going away, please know that we still value your feedback and aim to provide the best experience for our common customers. "),(0,a.kt)("h3",{id:"52-merchant-information-on-agreements"},"5.2 Merchant information on agreements"),(0,a.kt)("p",null,"Currently, you are able to show your contact information in every agreement for your customer in agreement Info tab: Website, Customer Support, Self Service, FAQ. From the moment we transition to One Platform, this contact information will no longer be displayed for the user. "),(0,a.kt)("p",null,"\u2b50",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," We understand that contact information on the agreement can be important to you and your customers. You can always provide an agreement management URL to the user (we call it cancel-redirect in our documentation) which enables them to reach your environment from the app. Or you could add contact information in the agreement description, if this is necessary. "),(0,a.kt)("h3",{id:"53-payment-attachments"},"5.3 Payment attachments"),(0,a.kt)("p",null,"Currently, you can attach extra information about payments, such as a link to an external PDF file or other environment, payment details, or PDF file generation from payment details. After reviewing this feature and its usage, we have decided to focus more on payment execution and agreement signing success rather than PDF generation capabilities. So, the PDF generation option will no longer be available from the moment we transition to One Platform."),(0,a.kt)("p",null,"\u2b50",(0,a.kt)("strong",{parentName:"p"},"Recommendation:")," We are sorry if this feature was important to you, we hope you will find other ways to send PDF documents to you customers. Your satisfaction is our top priority, and we are here to support you throughout this process."),(0,a.kt)("p",null,"\u2699\ufe0f Tech: API endpoint:  ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT:/api/providers/{providerId}/payments/{paymentId}/attachment")),(0,a.kt)("p",null,"Parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_pdf")," : true will be ignored from the moment we transition to One Platform."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"General")),(0,a.kt)("h2",{id:"6-auth-setup"},"6. AUTH setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For merchants")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using or are planning to start using Subscriptions on MobilePay platform before transition to One Platform. All good, nothing to do for you, just make sure you complete authorisation setup before transition to One Platform."),(0,a.kt)("li",{parentName:"ul"},"If by any chance you will need to restart consent flow, e.g. get new refresh token after we transit to One Platform, you will have to do that already on One Platform."),(0,a.kt)("li",{parentName:"ul"},"If you are planing to start using Recurring on New Vipps MobilePay platform, just integrate to new set up from beginning. ")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/access-token-api/"},"Access token API guide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For integrators/partners")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are planning to start using Recurring on New Vipps MobilePay platform, just integrate to new set up from beginning."),(0,a.kt)("li",{parentName:"ul"},"If you are existing integrator in Subscriptions on MobilePay platform and you want to onboard new merchants, we will ask you to change your authorisation setup. We are sorry, but from the moment we transition to One Platform we will not be able to support existing flow where merchant grants consent to you. Access and refresh tokens that were issued before the transition will remain valid and continue to work.")),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/access-token-api/"},"Access token API guide")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/vipps-partner/"},"Partner setup"),". "),(0,a.kt)("h2",{id:"developer-support"},"Developer Support"),(0,a.kt)("p",null,"We're Here to Help!\nIf you have any questions or need assistance with managing your recurring payments, our  Developer support team (",(0,a.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk"),") is available to provide guidance and support. We're like your trusty sidekick, always by your side, committed to making your payment experience as smooth as a well-oiled machine. Your satisfaction is our priority, and we're committed to making your payment experience as seamless as possible."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Published 2023-06-05. Updated 2023-06-05.")))}d.isMDXComponent=!0}}]);