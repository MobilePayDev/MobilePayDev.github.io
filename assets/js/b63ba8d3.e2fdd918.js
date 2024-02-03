"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6008],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,f=y["".concat(l,".").concat(d)]||y[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[y]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:3},i="Payment Flow Error Handling",s={unversionedId:"pos/payment-flows/payment-flow-error-handling",id:"pos/payment-flows/payment-flow-error-handling",title:"Payment Flow Error Handling",description:"Of all the ways a payment flow can fail, there are some error scenarios related to initiating payment flows that the client needs to focus on. The following sections describes how to handle payment-in-progress errors and how to handle payments hanging in the Reserved state.",source:"@site/docs/pos/payment-flows/payment-flow-error-handling.md",sourceDirName:"pos/payment-flows",slug:"/pos/payment-flows/payment-flow-error-handling",permalink:"/docs/pos/payment-flows/payment-flow-error-handling",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Prepared Payment Flow",permalink:"/docs/pos/payment-flows/prepared-payment-flow"},next:{title:"Refunds",permalink:"/docs/pos/payment-flows/refunds"}},l={},p=[{value:"Payment in progress error handling",id:"payment-in-progress-error-handling",level:2},{value:"Hanging payments in reserved state",id:"hanging-payments-in-reserved-state",level:2}],c={toc:p},y="wrapper";function m(e){let{components:n,...o}=e;return(0,a.yg)(y,(0,r.c)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"payment-flow-error-handling"},"Payment Flow Error Handling"),(0,a.yg)("p",null,"Of all the ways a payment flow can fail, there are some error scenarios related to initiating payment flows that the client needs to focus on. The following sections describes how to handle payment-in-progress errors and how to handle payments hanging in the ",(0,a.yg)("em",{parentName:"p"},"Reserved")," state."),(0,a.yg)("h2",{id:"payment-in-progress-error-handling"},"Payment in progress error handling"),(0,a.yg)("p",null,"In the case of an unexpected restart of the client where the payment flow cannot be continued it might be necessary to cancel the active payment since there can be only one active payment on a PoS. If the ",(0,a.yg)("inlineCode",{parentName:"p"},"paymentId")," of the active payment is lost it can be retrieved by calling ",(0,a.yg)("inlineCode",{parentName:"p"},"GET /v10/payments")," using the ",(0,a.yg)("inlineCode",{parentName:"p"},"posId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"orderId"),". When the ",(0,a.yg)("inlineCode",{parentName:"p"},"paymentId")," is retrieved the payment can be cancelled and the PoS is now ready for a new payment flow. A sequence diagram showing how to handle a payment-in-progress error is shown below."),(0,a.yg)("img",{src:t(21264).c,alt:"Initiate payment error",width:"650"}),(0,a.yg)("h2",{id:"hanging-payments-in-reserved-state"},"Hanging payments in reserved state"),(0,a.yg)("p",null,"The client is responsible for persisting if a reserved payment should be cancelled or captured. In case the client gets a timeout (or other errors resulting in failed calls) trying to either call capture or cancel on a payment, it is crucial that they persist whether the payment should be captured or cancelled so they can try again later."),(0,a.yg)("p",null,"It is required of the client to implement a periodically scheduled job of running through all their payments left in ",(0,a.yg)("em",{parentName:"p"},"Reserved")," state, and try to either cancel or capture it. A sequence diagram of this flow is shown below. It is the responsibility of the client to keep track of the payments left in ",(0,a.yg)("em",{parentName:"p"},"Reserved")," state."),(0,a.yg)("img",{src:t(80495).c,alt:"Payment capture cancel",width:"650"}))}m.isMDXComponent=!0},80495:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/pos-capture_cancel_hanging_reservations-a2f9440de60772c383c4c70bb60ff68f.png"},21264:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/pos-initiate_payment_error_active_payment-0c9b3f6ef7576c54a70664b4e4af0cc3.png"}}]);