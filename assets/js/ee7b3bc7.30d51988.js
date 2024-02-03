"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[36],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var a=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},86280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(45072),o=(n(11504),n(95788));const i={sidebar_position:3},r="Verification",l={unversionedId:"subscriptions/development-guide/verification",id:"subscriptions/development-guide/verification",title:"Verification",description:"Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production. We expect that you have tested all the features listed below, before you start the verification process. Then it can be completed in a day.",source:"@site/docs/subscriptions/development-guide/verification.md",sourceDirName:"subscriptions/development-guide",slug:"/subscriptions/development-guide/verification",permalink:"/docs/subscriptions/development-guide/verification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Test",permalink:"/docs/subscriptions/development-guide/test"},next:{title:"Production payments",permalink:"/docs/subscriptions/development-guide/production"}},s={},p=[{value:"14-step Verification Process - Sandbox",id:"14-step-verification-process---sandbox",level:2},{value:"Internal Self-verification",id:"internal-self-verification",level:3},{value:"Going from Sandbox to Production",id:"going-from-sandbox-to-production",level:2},{value:"Sandbox - Checklist",id:"sandbox---checklist",level:3},{value:"Production - Checklist",id:"production---checklist",level:3},{value:"UX - Checklist",id:"ux---checklist",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"verification"},"Verification"),(0,o.yg)("p",null,"Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production. We expect that you have tested all the features listed below, before you start the verification process. Then it can be completed in a day."),(0,o.yg)("p",null,"Once we have verified that the steps has been completed successfully, you are ready to start testing in production."),(0,o.yg)("h2",{id:"14-step-verification-process---sandbox"},"14-step Verification Process - Sandbox"),(0,o.yg)("p",null,"To complete the verification, you ",(0,o.yg)("strong",{parentName:"p"},"must")," go through the steps listed below. This is done to ensure good user experience from the customer side. It is mandatory to test Subscriptions Payments, OneOff and Agreements in sandbox, even if you do not intend on implementing all functions right away. The sandbox environment is designed to be close to the production environment, which makes the process from sandbox to production smother."),(0,o.yg)("p",null,"When completing the steps, you must use a unique id as ",(0,o.yg)("inlineCode",{parentName:"p"},"external_id"),". It must be unique in the sense that it is unique to your test, and therefore you cannot reuse an ",(0,o.yg)("inlineCode",{parentName:"p"},"external_id")," from previous tests. Besides that, it can be whatever you like, with a maximum of 30 characters. You need to create three ids: one for agreements, one for a regular payment and one for a One-Off payment. Please send us an email with the three ids when you are ready to start the verification, and you can go ahead with the process."),(0,o.yg)("p",null,"Example of ",(0,o.yg)("inlineCode",{parentName:"p"},"external_id"),': "external_id": "CompanynameAgreement"'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Agreement and subscriptions payment")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Create a new agreement"),(0,o.yg)("li",{parentName:"ol"},"Accept the agreement*"),(0,o.yg)("li",{parentName:"ol"},"Request a payment"),(0,o.yg)("li",{parentName:"ol"},"Decline the pending payment"),(0,o.yg)("li",{parentName:"ol"},"Request a new payment and wait until due date for this to execute"),(0,o.yg)("li",{parentName:"ol"},"Cancel the agreement once the payment has been executed")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Refund")),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},"Refund the subscriptions payment Note: refunds cannot be made for Instant transfer payments. Only daily transfer payment can be refunded.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"OneOff payments")),(0,o.yg)("ol",{start:8},(0,o.yg)("li",{parentName:"ol"},"Request OneOff payment"),(0,o.yg)("li",{parentName:"ol"},"Cancel the reserved/requested OneOff payment"),(0,o.yg)("li",{parentName:"ol"},"Request a new OneOff payment"),(0,o.yg)("li",{parentName:"ol"},"Accept the OneOff payment*"),(0,o.yg)("li",{parentName:"ol"},"Capture the OneOff payment"),(0,o.yg)("li",{parentName:"ol"},"You must also have a setup for handling cancelled orders/agreements, and cancel reserved payments")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Invoice details")),(0,o.yg)("ol",{start:14},(0,o.yg)("li",{parentName:"ol"},"Add invoice details to Subscriptions payment")),(0,o.yg)("p",null,"*Use the Subscription User Simulation API to complete this."),(0,o.yg)("h3",{id:"internal-self-verification"},"Internal Self-verification"),(0,o.yg)("p",null,"Once you have followed the steps above, you are ready to do the self-certification. Please send an email to ",(0,o.yg)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," informing about completed steps and we will verify these."),(0,o.yg)("h2",{id:"going-from-sandbox-to-production"},"Going from Sandbox to Production"),(0,o.yg)("h3",{id:"sandbox---checklist"},"Sandbox - Checklist"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Read ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions"},"documentation")),(0,o.yg)("li",{parentName:"ol"},"Get OpenId Credentials"),(0,o.yg)("li",{parentName:"ol"},"Make the first call to Sandbox API"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/development-guide/test"},"Test Subscriptions")),(0,o.yg)("li",{parentName:"ol"},"Set ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/subscriptions-payments#callbacks"},"Payment Callback URL")),(0,o.yg)("li",{parentName:"ol"},"Set ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/general-notes#rest-callback-authentication"},"Callback Authentication Scheme")),(0,o.yg)("li",{parentName:"ol"},"Complete verification")),(0,o.yg)("h3",{id:"production---checklist"},"Production - Checklist"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Finish business onboarding on ",(0,o.yg)("a",{parentName:"li",href:"https://admin.mobilepay.dk/"},"MobilePay Portal")),(0,o.yg)("li",{parentName:"ol"},"Get OpenID Connect Credentials"),(0,o.yg)("li",{parentName:"ol"},"Set ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/subscriptions-payments#callbacks"},"Payment Callback URL")),(0,o.yg)("li",{parentName:"ol"},"Set ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/general-notes#rest-callback-authentication"},"Callback Authentication Scheme")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/agreement"},"Create agreement")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/subscriptions-payments"},"Request a Subscription Payment")),(0,o.yg)("li",{parentName:"ol"},"Verify the ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/development-guide/production"},"Production Payment reconciliation process")),(0,o.yg)("li",{parentName:"ol"},"Document customers sign-up flow to ",(0,o.yg)("a",{parentName:"li",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," ",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"You can check our ",(0,o.yg)("a",{parentName:"li",href:"https://www.mobilepay.dk/erhverv/abonnementer-og-fakturering/mobilepay-subscriptions/inspiration"},"UX inspiration site ")))),(0,o.yg)("li",{parentName:"ol"},"When the Subscription Payment is executed, request for review from ",(0,o.yg)("a",{parentName:"li",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Await approval from ",(0,o.yg)("a",{parentName:"strong",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com"))),(0,o.yg)("li",{parentName:"ol"},"Sign up for operational maillist"),(0,o.yg)("li",{parentName:"ol"},"Keep updated on MobilePay Subscriptions ",(0,o.yg)("a",{parentName:"li",href:"/docs/subscriptions/release-notes"},"release notes"))),(0,o.yg)("h3",{id:"ux---checklist"},"UX - Checklist"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Checkout and Agreement flow")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Do you present MobilePay buttons in the checkout flow?"),(0,o.yg)("li",{parentName:"ol"},"Do you provide a MobilePay landing page?"),(0,o.yg)("li",{parentName:"ol"},"Do you provide FAQ for customer payment questions? ",(0,o.yg)("a",{parentName:"li",href:"https://www.mobilepay.dk/erhverv/abonnementer-og-fakturering/mobilepay-subscriptions/inspiration#6"},"Link")),(0,o.yg)("li",{parentName:"ol"},"Do you show the correct MobilePay logo in the checkout flow?"),(0,o.yg)("li",{parentName:"ol"},"Do you handle user-redirect?"),(0,o.yg)("li",{parentName:"ol"},"Do you handle cancel-redirect? ",(0,o.yg)("em",{parentName:"li"},"it is important that the Merchant is compliant with our cancel-redirect requirements")),(0,o.yg)("li",{parentName:"ol"},"Existing users: can they change existing payment method?"),(0,o.yg)("li",{parentName:"ol"},"New users: do you present MobilePay as 1st payment method?")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Parameters on agreement screen")),(0,o.yg)("ol",{start:9},(0,o.yg)("li",{parentName:"ol"},"Do have correct ",(0,o.yg)("inlineCode",{parentName:"li"},"next_payment_date"),"?"),(0,o.yg)("li",{parentName:"ol"},"Do you write a descriptive ",(0,o.yg)("inlineCode",{parentName:"li"},"plan"),"? Link"),(0,o.yg)("li",{parentName:"ol"},"Do you have a proper usage of ",(0,o.yg)("inlineCode",{parentName:"li"},"external_id"),"? Link"),(0,o.yg)("li",{parentName:"ol"},"Do you have appropriate ",(0,o.yg)("inlineCode",{parentName:"li"},"amount"),"? Link"),(0,o.yg)("li",{parentName:"ol"},"Do you write a ",(0,o.yg)("inlineCode",{parentName:"li"},"description"),"? Link")),(0,o.yg)("p",null,"MobilePay recommends that all certified integrators present the above checklist for the merchant that they are managing the solution for, in order to ensure that the merchant has a solution tailored to their needs."))}u.isMDXComponent=!0}}]);