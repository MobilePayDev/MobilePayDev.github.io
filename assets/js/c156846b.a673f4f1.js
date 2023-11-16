"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={pagination_prev:null,pagination_next:null},i="MobilePay Subscriptions",s={unversionedId:"subscriptions/subscriptions",id:"subscriptions/subscriptions",title:"MobilePay Subscriptions",description:"As a part of the merger between MobilePay and Vipps, we will consolidate products on one joint platform. The facade will be active for about a year from the Nordic Wallet Launch. This means that you don\xb4t need to integrate to the new API right now, but just to be prepared that during 2024 you\xb4ll need to integrate to the new Recurring API to keep using Vipps MobilePay.",source:"@site/docs/subscriptions/subscriptions.md",sourceDirName:"subscriptions",slug:"/subscriptions/",permalink:"/docs/subscriptions/",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobilepay-subscriptions"},"MobilePay Subscriptions"),(0,o.kt)("admonition",{title:"Change of Subscriptions API ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As a part of the merger between MobilePay and Vipps, we will consolidate products on one joint platform. The facade will be active for about a year from the Nordic Wallet Launch. This means that you don\xb4t need to integrate to the new API right now, but just to be prepared that during 2024 you\xb4ll need to integrate to the new Recurring API to keep using Vipps MobilePay.\nAfter we have switched to One platform, you can transition to our ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"Recurring API")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/subscriptions/"},"Subscriptions to Recurring migration guide")," Familiarize yourself with what migration entails, so you are prepared for the migration process."),(0,o.kt)("p",{parentName:"admonition"},"\ud83d\ude4f ",(0,o.kt)("strong",{parentName:"p"},"Existing merchant"),": Please review the upcoming changes outlined ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform"},"here"))," and update your current integration accordingly.  "),(0,o.kt)("p",{parentName:"admonition"},"Key dates: "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NOW")," Take a look at the change list here and implement changes if needed for the Facade period")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024.01.01")," Be ready with adjustments needed for your integration for the Facade period. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024Q1")," We finally launch Nordic Wallet Launch in Finland \ud83c\uddeb\ud83c\uddee and then Denmark \ud83c\udde9\ud83c\uddf0 ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2024")," Plan and integrate new ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"Recurring API")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"2025Q1")," Be ready with your API integration to the Recurring API. \ud83e\udde1 \ud83d\udc99 The facade will be switched off. ")))),(0,o.kt)("p",null,"MobilePay Subscriptions is a solution for recurring billing of your customers. Implement our Subscriptions API to take advantage of MobilePay Subscriptions. Bill your customers with one-off  invoices or automatically on a recurring basis."),(0,o.kt)("p",null,"Simplicity is key when opening the door to new subscribers, and MobilePay is synonymous with simple solutions and seamless transactions. Whether it's an agreement with one initial payment or billing on a recurring basis, it only takes a single swipe on their phone for customers to commit \u2013 and to stay committed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Subscriptions hero",src:n(84549).Z,width:"2680",height:"1122"})))}m.isMDXComponent=!0},84549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Hero_Subs-235719ca2c1cf0939d52e44831a833f3.png"}}]);