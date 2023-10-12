"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={pagination_next:null},o="Migration info \ud83d\udd17",p={unversionedId:"subscriptions/resources",id:"subscriptions/resources",title:"Migration info \ud83d\udd17",description:"Nordic Wallet Launch",source:"@site/docs/subscriptions/resources.md",sourceDirName:"subscriptions",slug:"/subscriptions/resources",permalink:"/docs/subscriptions/resources",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"docsSidebar",previous:{title:"\ud83d\udc99\ud83e\udde1 Preparation for facade period",permalink:"/docs/subscriptions/transition-to-one-platform"}},s={},l=[{value:"Nordic Wallet Launch \ud83d\ude80",id:"nordic-wallet-launch-",level:2},{value:"Migration Information:",id:"migration-information",level:2},{value:"New Platform Resources",id:"new-platform-resources",level:2},{value:"Stay updated",id:"stay-updated",level:2},{value:"MobilePay Resources",id:"mobilepay-resources",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-info-"},"Migration info \ud83d\udd17"),(0,a.kt)("h2",{id:"nordic-wallet-launch-"},"Nordic Wallet Launch \ud83d\ude80"),(0,a.kt)("p",null,"We're steadily moving towards one unified platform that offers new opportunities, flexibility across channels, and simplification. Depending on your integration setup, your customers will experience benefits from the start. Feel free to explore the following links for more information, and share them with your collegues.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refiew your option for migration in decision tree")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(82256).Z},(0,a.kt)("img",{alt:"decision tree",src:r(9895).Z,width:"2896",height:"2215"}))),(0,a.kt)("h2",{id:"migration-information"},"Migration Information:"),(0,a.kt)("p",null,"Familiarize yourself with what migration entails, so you are prepared for the migration process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide"},"Overall Migration Information"),": Learn about the overall migration, timeline, and guidelines.  \ud83d\udcc6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide/subscriptions/"},"Subscriptions Migration (full reintegration)"),": Read our migration guide and prepare for migrating to the Recurring API. This is relevant for existing merchants and partner who wants to do full reintegration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform"},"Prepare for the facade period"),": Get an overview of changes in functionality and recommendations for the existing MobilePay Subscriptions API and how you best can prepare for facade period without full reintegration."))),(0,a.kt)("h2",{id:"new-platform-resources"},"New Platform Resources"),(0,a.kt)("p",null,"Familiarize yourself with the Vipps MobilePay API platform. Visit the website, read our documentation to understand our capabilities and features. This is relevant for new merchants and partner or for existing ones who wants to do full reintegration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/partner/new-platform"},"New Platform"),": Discover more about the New Platform and read more about the benefits and improvements that you can expect from the New Wallet Launch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"NEW Recurring API Documentation"),": Find detailed information on the New Recurring API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/recurring/"},"NEW Recurring API Reference"),": Explore the API reference for the New Recurring API.      ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/partner/merchant-test"},"Merchant Test"),": Register here to get credentials for the Test environment. Please note that this is the test environment of Vipps MobilePay."))),(0,a.kt)("h2",{id:"stay-updated"},"Stay updated"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/CHANGELOG/"},"NEW Recurring Changelogs"),": All notable changes to the Recurring API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/newsletters/"},"Subscribe to newsetter"),": Technical newsletter, with important information about the APIs."))),(0,a.kt)("h2",{id:"mobilepay-resources"},"MobilePay Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/subscriptions"},"MobilePay Subscriptions API documentation"),": The API reference documentation for Subscriptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/partner/subscriptions"},"MobilePayPartner site"),": Integrator onboarding and business information")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MobilePay site ",(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepay.dk/erhverv/abonnementer-og-fakturering/mobilepay-subscriptions"},"DK")," | ",(0,a.kt)("a",{parentName:"p",href:"https://mobilepay.fi/yrityksille/toistuvat-maksut-ja-laskutus/mobilepay-subscriptions"},"FI"),": Product information and support for merchants")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/design"},"Design Guidelines"),": Find MobilePay buttons, logos, banners, etc."))),(0,a.kt)("p",null,"Please note: We are continuously working on improving our migration guide so it includes  step-by-step instructions, best practices, and FAQs to help merchants smoothly transition to the new platform."))}m.isMDXComponent=!0},82256:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Subs_reintegration_treemap-dcd5fbfae64cd4a2b875fba9c87fa35a.png"},9895:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Subs_reintegration_treemap-dcd5fbfae64cd4a2b875fba9c87fa35a.png"}}]);