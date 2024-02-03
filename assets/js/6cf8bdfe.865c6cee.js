"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7436],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(45072),r=(n(11504),n(95788));const a={pagination_prev:null,pagination_next:null},i="MobilePay Point of Sale",l={unversionedId:"pos/pos",id:"pos/pos",title:"MobilePay Point of Sale",description:"Please notice that as part of the merger between MobilePay and Norwegian Vipps, we will consolidate products on one joint platform.",source:"@site/docs/pos/pos.md",sourceDirName:"pos",slug:"/pos/",permalink:"/docs/pos/",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},p=[{value:"Payment experience",id:"payment-experience",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,o.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mobilepay-point-of-sale"},"MobilePay Point of Sale"),(0,r.yg)("admonition",{title:"Change of Point of Sale in 2024",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Please notice that as part of the merger between MobilePay and Norwegian Vipps, we will consolidate products on one joint platform.\nIn the beginning of 2024 we will therefore replace the current Point of Sale API with a new and scalable version.\n",(0,r.yg)("a",{parentName:"p",href:"/docs/pos/transition-to-one-platform"},"See more here"))),(0,r.yg)("p",null,"MobilePay PoS is a solution for customers to pay through their mobile via a QR code or the white MobilePay box."),(0,r.yg)("p",null,"In order to use MobilePay PoS, the checkout system must be online, and the PoS integrator must support MobilePay."),(0,r.yg)("p",null,"Our MobilePay PoS REST api  is intended for software developers implementing MobilePay payments in a PoS system"),(0,r.yg)("p",null,"The MobilePay PoS API exposes two separate flows for payments which are documented in this section. All payments must be explicitly captured by the client after the customer has approved the payment. The capture amount can be for the full or a partial amount."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"PoS hero",src:n(46572).c,width:"2680",height:"1122"})),(0,r.yg)("p",null,"Our MobilePay Point of Sale (PoS) REST API is intended for integrators implementing MobilePay payments in a PoS system."),(0,r.yg)("p",null,"This document will explain in more detail how to implement the different payment flows, how to manage the PoS, how the Security model is built and what is needed from the integrator."),(0,r.yg)("p",null,"This document does not include detailed specification of the endpoints, responses and response codes. This information can be found in the ",(0,r.yg)("a",{parentName:"p",href:"/api/pos"},"API section"),"."),(0,r.yg)("h2",{id:"payment-experience"},"Payment experience"),(0,r.yg)("p",null,"MobilePay PoS is an API for setting up a merchant's transaction requests on customers' MobilePay apps in a store. MobilePay PoS does not require the customer to manually enter any information in the MobilePay app pertaining to the transaction. A transaction request can typically be obtained by the customer by holding the mobile device near a merchant device (Terminal, BLE beacon, etc.) or scanning a QR code."),(0,r.yg)("p",null,"Currently MobilePay PoS uses BLE one-way and two-way beacons and QR-codes to set up the transaction requests - the technology choices are not important for the API - however the concept of a beacon ID is central to allow matching of the customer willing to pay and the merchant's transaction request."))}y.isMDXComponent=!0},46572:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/Hero_POS-0157a47a2a900d173521503214b68556.png"}}]);