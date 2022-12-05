"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3},a="Verification",l={unversionedId:"invoice/development-guide/verification",id:"invoice/development-guide/verification",title:"Verification",description:"Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production.",source:"@site/docs/invoice/development-guide/verification.md",sourceDirName:"invoice/development-guide",slug:"/invoice/development-guide/verification",permalink:"/docs/invoice/development-guide/verification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Test",permalink:"/docs/invoice/development-guide/test"},next:{title:"Production",permalink:"/docs/invoice/development-guide/production"}},s={},c=[{value:"11-step Verification Process - Sandbox",id:"11-step-verification-process---sandbox",level:2},{value:"Internal Self-verification",id:"internal-self-verification",level:3},{value:"Going from Sandbox to Production",id:"going-from-sandbox-to-production",level:2},{value:"Sandbox",id:"sandbox",level:3},{value:"Production",id:"production",level:3},{value:"Prerequisites using MobilePay Invoice",id:"prerequisites-using-mobilepay-invoice",level:2},{value:"Business - Prerequisites",id:"business---prerequisites",level:3},{value:"Technical Prerequisites",id:"technical-prerequisites",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verification"},"Verification"),(0,o.kt)("p",null,"Once you have finished testing in sandbox, you have to go through a small verification process, to ensure that your system is ready for production.\nWhen we have verified that the steps has been completed successfully, you are ready to start testing in production."),(0,o.kt)("h2",{id:"11-step-verification-process---sandbox"},"11-step Verification Process - Sandbox"),(0,o.kt)("p",null,"To complete the verification, you must go through the steps listed below. This is done to ensure good user experience from the customer side. It is mandatory to test InvoiceDirect and InvoiceLink  in sandbox, even if you do not intend on implementing all functions right away. The sandbox environment is designed to be close to the production environment, which makes the process from sandbox to production smoother."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Making the first call")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get MerchantId"),(0,o.kt)("li",{parentName:"ol"},"Get Invoice Issuer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"InvoiceDirect")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create an InvoiceDirect"),(0,o.kt)("li",{parentName:"ol"},"Create multiple InvoiceDirects"),(0,o.kt)("li",{parentName:"ol"},"Cancel an unpaid Invoice")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Invoice Link")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create Invoice Link"),(0,o.kt)("li",{parentName:"ol"},"Create multiple InvoiceLinks")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Callbacks")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Have you specified a callback URL and chosen a preferred authentication method?"),(0,o.kt)("li",{parentName:"ol"},"Do you sort callbacks by the properties date and sequence?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Business Validation")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Do you adhere to the validations?"),(0,o.kt)("li",{parentName:"ol"},'Do you ensure that the "PaymentReference" meets customer needs in terms of reconciliation?')),(0,o.kt)("h3",{id:"internal-self-verification"},"Internal Self-verification"),(0,o.kt)("p",null,"Once you have followed the steps above, you are ready to do the self-certification. Please send an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," informing about completed steps and we will verify these."),(0,o.kt)("h2",{id:"going-from-sandbox-to-production"},"Going from Sandbox to Production"),(0,o.kt)("h3",{id:"sandbox"},"Sandbox"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read documentation on ",(0,o.kt)("a",{parentName:"li",href:"/docs/invoice"},"GitHub")),(0,o.kt)("li",{parentName:"ol"},"Get OpenId Credentials ",(0,o.kt)("a",{parentName:"li",href:"/docs/invoice/authentication"},"here")),(0,o.kt)("li",{parentName:"ol"},"Make the first call to Sandbox API"),(0,o.kt)("li",{parentName:"ol"},"Test Invoice ",(0,o.kt)("a",{parentName:"li",href:"/docs/invoice/development-guide/test"},"here")),(0,o.kt)("li",{parentName:"ol"},"Complete verification")),(0,o.kt)("h3",{id:"production"},"Production"),(0,o.kt)("p",null,"1.Get OpenID Connect Credentials. Read more ",(0,o.kt)("a",{parentName:"p",href:"/docs/invoice/authentication"},"here"),"\n2. Confirm that the implementation is working in production.\n3. Ensure you've followed our ",(0,o.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/design"},"design guidelines"),"\n4. ",(0,o.kt)("strong",{parentName:"p"},"Await approval from ",(0,o.kt)("a",{parentName:"strong",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")),"\n4. Sign up for operational maillist."),(0,o.kt)("h2",{id:"prerequisites-using-mobilepay-invoice"},"Prerequisites using MobilePay Invoice"),(0,o.kt)("h3",{id:"business---prerequisites"},"Business - Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Merchant")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Merchant must have a valid bank account"),(0,o.kt)("li",{parentName:"ul"},"Merchant must be onboarded via the ",(0,o.kt)("a",{parentName:"li",href:"https://admin.mobilepay.dk/"},"MobilePay Portal"),", and have an agreement for MobilePay Invoice with MobilePay"),(0,o.kt)("li",{parentName:"ul"},"Invoice Amount must comply to MobilePay limits")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Integrator:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integrator must have an onboarding guideline demonstrating how the Merchant goes through the Consent process"),(0,o.kt)("li",{parentName:"ul"},"Integrator must have received production credentials for OpenID Connect\n-Integrator must have signed up for operational mail-list\n-Integrator must use the right ",(0,o.kt)("a",{parentName:"li",href:"https://www.mobilepaygroup.com/design"},"MobilePay logo and buttons"))),(0,o.kt)("h3",{id:"technical-prerequisites"},"Technical Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client must have an integration to the MobilePay OpenID Connect Authorization service, in order to generate access tokens."),(0,o.kt)("li",{parentName:"ul"},"The Invoice Call must contain a token, provided via OpenID Connect Flow"),(0,o.kt)("li",{parentName:"ul"},"You should ensure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"PaymentReference")," meets customers needs. You can either fill out the field ",(0,o.kt)("inlineCode",{parentName:"li"},"PaymentReference"),", for the payment. If you do not fill out ",(0,o.kt)("inlineCode",{parentName:"li"},"PaymentReference"),", then it would be the input from the field ",(0,o.kt)("inlineCode",{parentName:"li"},"InvoiceNumber"),", that will be the reference on the payment. Read more about reconcilation ",(0,o.kt)("a",{parentName:"li",href:"/docs/invoice/development-guide/production"},"here")),(0,o.kt)("li",{parentName:"ul"},"Phone numbers must comply with the country specific formats. E.g. Denmark +45XXXXXXXX 0045XXXXXXXX XXXXXXXX (Any spaces in phone numbers will be removed before validation / processing)")))}u.isMDXComponent=!0}}]);