"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5278],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,i(i({ref:e},m),{},{components:n})):a.createElement(h,i({ref:e},m))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84520:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:14},i="Glossary of Terms",l={unversionedId:"pos/glossary",id:"pos/glossary",title:"Glossary of Terms",description:"| Term | Description |",source:"@site/docs/pos/glossary.md",sourceDirName:"pos",slug:"/pos/glossary",permalink:"/docs/pos/glossary",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docsSidebar",previous:{title:"PoS API Release Notes",permalink:"/docs/pos/release-notes"},next:{title:"Transition to One Platform",permalink:"/docs/pos/transition-to-one-platform"}},s={},p=[],m={toc:p},c="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary-of-terms"},"Glossary of Terms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client"),(0,r.kt)("td",{parentName:"tr",align:null},"Client and terminal are used interchangeably for the application that calls the MobilePay PoS API. Client is often used when only discussing the software.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Terminal"),(0,r.kt)("td",{parentName:"tr",align:null},"Terminal and client are used interchangeably for the application that calls the MobilePay PoS API. Terminal refers to the setup where the application is running on a dedicated payment terminal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer"),(0,r.kt)("td",{parentName:"tr",align:null},"The customer is the user who wants to pay for goods and services with MobilePay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECR"),(0,r.kt)("td",{parentName:"tr",align:null},"The electronic cash register is an application running on hardware in a shop. The ECR is an application that calls the MobilePay PoS client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integrator"),(0,r.kt)("td",{parentName:"tr",align:null},"The company that develops the client and calls the MobilePay PoS API on behalf of the merchant. Sometimes the merchant acts as integrator. Used interchangeably with PoS vendor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Merchant"),(0,r.kt)("td",{parentName:"tr",align:null},"The merchant is the company that wants to receive payments for goods and services from MobliePay users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payment"),(0,r.kt)("td",{parentName:"tr",align:null},"A payment request from the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prepared payment"),(0,r.kt)("td",{parentName:"tr",align:null},"A payment request from the merchant, where the merchant has the opportunity, to provide information to the user and/or to receive information about the user, before providing the final amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reservation"),(0,r.kt)("td",{parentName:"tr",align:null},"A reservation is a pre-authorization which guarantees that the user has sufficient funds to pay for the given transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Capture"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture is the process by which payments are secured once the payment has been authorized, i.e. a reservation has been made.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PoS"),(0,r.kt)("td",{parentName:"tr",align:null},"In common language a point-of-sale might mean an Electronic Cash Register. In MobilePay PoS, a point-of-sale is an abstraction that describes a place where a payment can occur and therefore NOT a synonym for ECR. The distinction is subtle but important.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Check-in"),(0,r.kt)("td",{parentName:"tr",align:null},"Customer action performed in order to initiate payment. This could be scanning a QR code or connecting to a terminal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PoS vendor"),(0,r.kt)("td",{parentName:"tr",align:null},"The company that develops the client and calls the MobilePay PoS API on behalf of the merchant. Sometimes the merchant acts as vendor. Used interchangeably with integrator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VAT-number"),(0,r.kt)("td",{parentName:"tr",align:null},"In Denmark, this is the CVR-number. In Finland, this is the Y-tunnus. Both refer to the official business ID.")))))}u.isMDXComponent=!0}}]);