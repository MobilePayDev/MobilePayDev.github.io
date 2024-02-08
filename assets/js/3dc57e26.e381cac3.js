"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[132],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(t),h=r,y=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return t?a.createElement(y,c(c({ref:n},p),{},{components:t})):a.createElement(y,c({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<s;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=t(45072),r=(t(11504),t(95788));const s={sidebar_position:5},c="Cancel Flows",l={unversionedId:"pos/payment-flows/cancel-flows",id:"pos/payment-flows/cancel-flows",title:"Cancel Flows",description:"The V10 API supports cancelling of payments and refunds.",source:"@site/docs/pos/payment-flows/cancel-flows.md",sourceDirName:"pos/payment-flows",slug:"/pos/payment-flows/cancel-flows",permalink:"/docs/pos/payment-flows/cancel-flows",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Refunds",permalink:"/docs/pos/payment-flows/refunds"},next:{title:"Partial Capture",permalink:"/docs/pos/payment-flows/partial-capture"}},o={},i=[{value:"Cancelling Payments",id:"cancelling-payments",level:2},{value:"Cancelling Refunds",id:"cancelling-refunds",level:2}],p={toc:i},d="wrapper";function u(e){let{components:n,...s}=e;return(0,r.yg)(d,(0,a.c)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cancel-flows"},"Cancel Flows"),(0,r.yg)("p",null,"The V10 API supports cancelling of payments and refunds."),(0,r.yg)("h2",{id:"cancelling-payments"},"Cancelling Payments"),(0,r.yg)("p",null,"A payment is cancellable by the client until the state has changed to ",(0,r.yg)("em",{parentName:"p"},"Captured")," or ",(0,r.yg)("em",{parentName:"p"},"ExpiredAndCancelled"),". Furthermore, a payment can be cancelled by the customer when the payment is in state ",(0,r.yg)("em",{parentName:"p"},"Paired")," or ",(0,r.yg)("em",{parentName:"p"},"IssuedToUser"),".\nPayments can be cancelled by calling the endpoint ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v10/payments/{paymentId}/cancel"),". It requires the ",(0,r.yg)("inlineCode",{parentName:"p"},"paymentId")," of the payment to be cancelled. When the payment has been cancelled the state transitions to ",(0,r.yg)("em",{parentName:"p"},"CancelledByClient"),".\nIf the customer cancels the payment the state will transition to ",(0,r.yg)("em",{parentName:"p"},"CancelledByUser"),"."),(0,r.yg)("p",null,"The diagrams below show the sunshine scenarios for a payment cancelled by the client and a payment cancelled by the customer, respectively.\nWhen the client cancels the payment a notification is sent to the app. The app returns to the pay screen with a message saying that the payment was cancelled by the shop."),(0,r.yg)("img",{src:t(5372).c,alt:"Cancel by client",width:"750"}),(0,r.yg)("p",null,"When the customer cancels the payment the app will show a message saying that the payment was cancelled. The status of the payment when queried will be ",(0,r.yg)("em",{parentName:"p"},"CancelledByUser"),"."),(0,r.yg)("img",{src:t(60680).c,alt:"Cancel by user",width:"750"}),(0,r.yg)("p",null,"The cancel funtionality can be used in various scenarios. It could be that the customer changed their mind about paying with MobilePay or that something in the request was not correct (maybe the customer added another item after the payment was initiated). In these cases the cancelling of the payment is straight forward and as shown in the diagrams above."),(0,r.yg)("p",null,"The cancel functionality can also be used in case of non-sunshine scenarios.\nIt could be if the call to initiate a payment is faulty or if the client never receives the response. In this case the client should either retry the call (as described in ",(0,r.yg)("a",{parentName:"p",href:"/docs/pos/api-principles#error-handling"},"Error Handling"),") or the client could try to get the ",(0,r.yg)("inlineCode",{parentName:"p"},"paymentId")," by the ",(0,r.yg)("inlineCode",{parentName:"p"},"orderId")," and cancel afterwards."),(0,r.yg)("h2",{id:"cancelling-refunds"},"Cancelling Refunds"),(0,r.yg)("p",null,"A client can end up in situations, where the status of a refund is not known e.g. in cases, where parts of the solution is down, or there are network issues. In these cases, it is important, that the client retains information about refunds, that have been requested. It is then possible for the client to follow up on whether the refund should be cancelled or captured. Examples for either cancel or capture could be: In the case of cancel - the customer has received refund in cash instead. In the case of capture - the customer has left the store with information that the payment will be refunded."),(0,r.yg)("p",null,"A refund is cancellable until it reaches one of the states ",(0,r.yg)("em",{parentName:"p"},"CancelledByMobilePay"),", ",(0,r.yg)("em",{parentName:"p"},"Captured")," or ",(0,r.yg)("em",{parentName:"p"},"ExpiredAndCapturred"),". Refunds can only be cancelled by the client since there is no customer involved in the process. A refund can be cancelled by calling the endpoint ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v10/refunds/{refundId}/cancel"),". It requires the id of the refund that was returned when the refund was initiated.\nWhen the refund has been cancelled the state transitions to ",(0,r.yg)("em",{parentName:"p"},"CancelledByClient"),"."),(0,r.yg)("img",{src:t(7328).c,alt:"Cancel refund by client",width:"500"}))}u.isMDXComponent=!0},5372:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/pos-cancel-by-client-a1616339560b5aa9fe0f3a1559669306.png"},60680:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/pos-cancel-by-user-2a59afbde87b1570ba781ffe6ff0c30a.png"},7328:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/pos-cancel-refund-by-client-db3c7169743b1fd04d7fa7996af072a6.png"}}]);