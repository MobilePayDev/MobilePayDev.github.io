"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1799],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:9},i="Glossary of Terms",s={unversionedId:"subscriptions/glossary",id:"subscriptions/glossary",title:"Glossary of Terms",description:"| Term | Description |",source:"@site/docs/subscriptions/glossary.md",sourceDirName:"subscriptions",slug:"/subscriptions/glossary",permalink:"/docs/subscriptions/glossary",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Release Notes",permalink:"/docs/subscriptions/release-notes"},next:{title:"API principles",permalink:"/docs/subscriptions/api-principles"}},l={},d=[],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary-of-terms"},"Glossary of Terms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agreement"),(0,r.kt)("td",{parentName:"tr",align:null},"An agreement in which merchant can provide subscription service to sell to Customers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agreement_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription agreement ID on the MobilePay side. MobilePay generates the agreement_id when the customer swipes to accept the agreement. Agreement_id does not change regardless of what happens to the agreement. Agreement_id is the counterpart to the external_id on client. Before requesting subscription payment, an agreement should be created and accepted by customer. You cannot request a Subscription Payment without having agreement_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},"Application Programming interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Callback"),(0,r.kt)("td",{parentName:"tr",align:null},"Once a payment status change happens, a callback will be done to the payment_status_callback_url. We send callbacks in sandbox and production environemtn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client"),(0,r.kt)("td",{parentName:"tr",align:null},"Client is used interchangeably for the application that calls the MobilePay Subscriptions API. Client is often used when only discussing the software.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer"),(0,r.kt)("td",{parentName:"tr",align:null},"The customer is the user who wants to pay for goods and services with MobilePay Subscriptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Capture"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture is the process by which payments are secured once the payment has been authorized, i.e. a reservation has been made. Merchant handles Capture for OneOff payments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CorrelationId"),(0,r.kt)("td",{parentName:"tr",align:null},"Is an optional Guid heade value which can be used to link requests on your back-end system to MobilePay Subscriptions business transaction for a more convenient debugging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional information provided by the merchant to the user, that will be displayed on the Agreement screen. This is visible on the payment screen, so ensure that the information provided makes sense towards the Customer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"External_id (for agreement)"),(0,r.kt)("td",{parentName:"tr",align:null},"Agreement ID on the merchant\u2019s side. It is meant as a unique identifier, chosen by the merchant, which shouldn\u2019t change. Two different agreements should not have the same external_id It should stay the same, so we can trace the full history of the agreement. It is included in the request body of the success and cancel callback.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"External_id (for payment)"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment ID on the merchant's side. The external_id will be included in the request body of the refund callback. If the merchant is using instant transfer, then the reference number will be the external_id for Subscription Payments and OneOff payments. The Customer can see the payment external_id  in the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integrator"),(0,r.kt)("td",{parentName:"tr",align:null},"The company that develops the client and calls the MobilePay Subscriptions API on behalf of the merchant. The Integrator also coordinates with the Merchant, whom they are managing the solution for, which parameters should be used and how they should be used. For example, for agreement, it is amount, description, frequency, external_id, retention_period_hours, disable_notification_management, notifications_on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON is the short form for Javascript Object Notation and is a text-based information format that follows Javascript object syntax.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Merchant"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant is the company that wants to receive payments for goods and services from MobliePay users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay - Admin Portal"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant orders the product on the MobilePay Portal in Production ",(0,r.kt)("a",{parentName:"td",href:"https://admin.mobilepay.dk/"},"Portal"),". The merchant can upload a logo for their SubscriptionProvider on the MobilePay Portal. In sandbox, you will provided with a sandbox test user ",(0,r.kt)("a",{parentName:"td",href:"https://sandprod-admin.mobilepay.dk/"},"https://sandprod-admin.mobilepay.dk/")," that is created by ",(0,r.kt)("a",{parentName:"td",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reservation"),(0,r.kt)("td",{parentName:"tr",align:null},"A reservation is a pre-authorization which guarantees that the user has sufficient funds to pay for the given transaction. Uncaptured one-off payments expire after 14 days.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REST"),(0,r.kt)("td",{parentName:"tr",align:null},'It stands for "Representational State Transfer".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retention_period_hours"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant can set for how long agreement can not be cancelled by the user, after the user accepted the agreement, for up to 24 hours.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_size and pagination_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination_state is a key, that indicates, how many pages have already been collected, and which pages are the next. With every request, you will receive a pagination_state, that you should use in the subsequent request. Both page_size and pagination_state are 'optional' in GET /subscriptions/api/providers/{providerId}/agreements, so if you haven't included it, you will have all agreements returned. pageSize=<integer_value> - this defines how many agreement rows will be returned by single request (the limit is 2000). paginationState=",(0,r.kt)("inlineCode",{parentName:"td"},"token")," - pagination token returned by previous request, should be empty for the very first request and should be url-encoded when present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription payment ID on the MobilePay side. MobilePay generates the agreement_id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment - Subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"A payment request from the merchant, which is used when the Merchant needs to charge for periodic payment. The customer does not need to swipe to accept the payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment - OneOff"),(0,r.kt)("td",{parentName:"tr",align:null},"Customer action performed in order to initiate payment. The customer can create agreements with an initial OneOff payment, for example when the user wants to set up an agreement and you want to charge upfront. or request a OneOff payment on an existing agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment_status_callback_url"),(0,r.kt)("td",{parentName:"tr",align:null},"You need to configure the payment_status_callback_url before you start to send payment requests.Once the payment or agreement changes state, a callback will be done to the callback address.  You will not receive callbacks from MobilePay, unless you have set the payment_status_callback. It does not need to be whitelisted at MobilePay side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProviderID"),(0,r.kt)("td",{parentName:"tr",align:null},"Once you have completed the OpenID Connect flow, you are ready to make the first call to our API.  The first thing you need to do is call GET /api/merchants/me which will return you a list of subscription providers for that merchant, with their IDs and basic information. You need to deliver the ProviderID in the endpoints in the calls  as {providerId}. If you are an Integrator, you should remember that the Merchant should not send you the ProviderID. You (the integrator) is able to retrieve the ID by making an api call.  You set the payment_status_callback_url for each providerID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SubscriptionProvider"),(0,r.kt)("td",{parentName:"tr",align:null},"The SubscriptionsProvider is the actual service provider name. Each subscriptions provider contains its own address information, homepage url and etc. For example, if a single merchant has several brands, each brand would be a subscription provider. Merchant can create new and update current Subscriptions Provider on the MobilePay Portal in Production on ",(0,r.kt)("a",{parentName:"td",href:"https://admin.mobilepay.dk/"},"https://admin.mobilepay.dk/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VAT-number"),(0,r.kt)("td",{parentName:"tr",align:null},"In Denmark, this is the CVR-number. In Finland, this is the Y-tunnus. Both refer to the official business ID.")))))}u.isMDXComponent=!0}}]);