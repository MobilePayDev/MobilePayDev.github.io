"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:4},i="Production",s={unversionedId:"online/development-guide/production",id:"online/development-guide/production",title:"Production",description:"Once you have completed the slim certification you are able to offer your solution to your merchants. Please carefully read below topics in order to prepare your setup before going live.",source:"@site/docs/online/development-guide/production.md",sourceDirName:"online/development-guide",slug:"/online/development-guide/production",permalink:"/docs/online/development-guide/production",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"verification",permalink:"/docs/online/development-guide/verification"},next:{title:"Basics",permalink:"/docs/online/basics/"}},l={},p=[{value:"Mandatory implementations",id:"mandatory-implementations",level:2},{value:"Onboard production merchants and initiating payments",id:"onboard-production-merchants-and-initiating-payments",level:2},{value:"Test options for merchants",id:"test-options-for-merchants",level:2},{value:"Design guidelines",id:"design-guidelines",level:2},{value:"Integrator and merchant support",id:"integrator-and-merchant-support",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"production"},"Production"),(0,r.kt)("p",null,"Once you have completed the slim certification you are able to offer your solution to your merchants. Please carefully read below topics in order to prepare your setup before going live."),(0,r.kt)("h2",{id:"mandatory-implementations"},"Mandatory implementations"),(0,r.kt)("p",null,"Please note that the following is mandatory implementation and you will not be able to go live without these. If we determine that you do not utulize the mandatory implementation in production we will reach out to you in order to resolve the situation and ensure the mandatory implementations. The reason for the mandatory implementation is to ensure the best user and merchant experience and satisfactory conversion rate."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SCA implementations: That includes delegated authentication for Visa, Mastercard and Dankort as well as 3DS fallback. Find information about the SCA in our Github documentation.  "),(0,r.kt)("li",{parentName:"ul"},"Onboard individual merchants and not super merchants. See below section on Merchant onboarding for more details."),(0,r.kt)("li",{parentName:"ul"},"Use merchant/web shop name and logo when initiating payments. See below section on Merchant onboarding for more details."),(0,r.kt)("li",{parentName:"ul"},"Ensure merchants use correct and updated MobilePay logo and buttons. Visit our Design page for guides and ressources."),(0,r.kt)("li",{parentName:"ul"},"Update all payments with capture or cancel and if refund is performed.")),(0,r.kt)("h2",{id:"onboard-production-merchants-and-initiating-payments"},"Onboard production merchants and initiating payments"),(0,r.kt)("p",null,"In order to onboard merchants you must use: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/merchants"),". It is only possible to onboard merchants using the API. ",(0,r.kt)("strong",{parentName:"p"},"When onboarding merchants it is important that you onboard each individual merchant/web shop")," and no super merchants. Please visit the API documentation to see which input is needed to create a merchant."),(0,r.kt)("p",null,"The input giving when creating merchants is only used for billing and support purposes. The information shown to the users when completing payments is supplied when initiating payments using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v3/payments"),". Similar to merchant creation it is important that you use the details of the specific merchant and not a super merchant or payment facilitator. ",(0,r.kt)("strong",{parentName:"p"},"Therefore you must use the proper merchant/web shop name as well as logo.")," This will ensure better user experience and conversion rate."),(0,r.kt)("p",null,"You can always contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," if you have any questions or conserns regarding merchant onboarding."),(0,r.kt)("h2",{id:"test-options-for-merchants"},"Test options for merchants"),(0,r.kt)("p",null,"It is the responsibility of the PSP to offer test options to their merchants. It is not possible for merchants to perform test directly towards MobilePay."),(0,r.kt)("p",null,"There are two test options you can use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Perform test using the sandbox API.")," To do this you must suplpy your merchants with the test user that we have supplied to you during techincal onboarding. Your merchants can either use the test app or you can make the user simulation API available to them. It is your responsibility to instruct and support merchants in the use of our test app and user simulation API. We have made a 'Merchant Sandbox Testing' page with instructions about the test app. You can supply this to your merchants along with the phone number of your test user: ",(0,r.kt)("a",{parentName:"li",href:"/merchant-test"},"Merchant Sandbox Testing"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Perform test using the production API.")," In order to perform test in production you can either create a merchantId used only for test payments or merchants can test using their own merchantId. To do this merchants must use the production MobilePay app downloaded through App store or Google Play and a production user. All payments should be cancelled to ensure that not transactions are completed.")),(0,r.kt)("h2",{id:"design-guidelines"},"Design guidelines"),(0,r.kt)("p",null,"We want to make it easy for you to ensure that the right MobilePay buttons and logo's are used by the merchants. Proper use of our logo and buttons will ensure better user experience and conversion rate.\nPlease visit our ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaygroup.com/design"},"Design page")," for more information and ressources."),(0,r.kt)("h2",{id:"integrator-and-merchant-support"},"Integrator and merchant support"),(0,r.kt)("p",null,"For ongoing technical support, technical questions or feature requests integrators can always contact Developer Support at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk."},"developer@mobilepay.dk.")," The Developer Support team will review the request and respond as soon as possible, usually within a business day. Merchant support is the responsibility of the integrator as MobilePay do not have any agreements with merchants and is working as a pass through wallet. Therefore we can rarely assist merchants in any issues. "),(0,r.kt)("p",null,"When contacting Developer Support please include as many details as possible relevant to the request. If it concerns a specific issue or bug please include the following and any other details that can be relevant:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MerchantId"),(0,r.kt)("li",{parentName:"ul"},"PaymentId"),(0,r.kt)("li",{parentName:"ul"},"Timestamp for error"),(0,r.kt)("li",{parentName:"ul"},"Request/event that caused the error"),(0,r.kt)("li",{parentName:"ul"},"Error responses"),(0,r.kt)("li",{parentName:"ul"},"Screenshot if error in app"),(0,r.kt)("li",{parentName:"ul"},"Any logs that can be relevant to the issue")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tip: Sign up for our operational mail list to be informed about any operational issues concerning Online. Just contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," in order to be added to the mail list.")))}c.isMDXComponent=!0}}]);