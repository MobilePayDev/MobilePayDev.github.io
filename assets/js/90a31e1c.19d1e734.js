"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={pagination_next:null},o="Migration info \ud83d\udd17",p={unversionedId:"subscriptions/resources",id:"subscriptions/resources",title:"Migration info \ud83d\udd17",description:"Nordic Wallet Launch",source:"@site/docs/subscriptions/resources.md",sourceDirName:"subscriptions",slug:"/subscriptions/resources",permalink:"/docs/subscriptions/resources",draft:!1,tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"docsSidebar",previous:{title:"\ud83d\udc99\ud83e\udde1 Preparation for facade period",permalink:"/docs/subscriptions/transition-to-one-platform"}},s={},l=[{value:"Nordic Wallet Launch \ud83d\ude80",id:"nordic-wallet-launch-",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-info-"},"Migration info \ud83d\udd17"),(0,a.kt)("h2",{id:"nordic-wallet-launch-"},"Nordic Wallet Launch \ud83d\ude80"),(0,a.kt)("p",null,"We're steadily moving towards one unified platform that offers new opportunities, flexibility across channels, and simplification. Depending on your integration setup, your customers will experience benefits from the start. Feel free to explore the following links for more information, and share them with your collegues.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refiew your option for migration in decision tree")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(82256).Z},(0,a.kt)("img",{alt:"decision tree",src:r(9895).Z,width:"2896",height:"2215"}))),(0,a.kt)("admonition",{title:"Change of Subscriptions API ",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"After we have switched to One platform, you can transition to our ",(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"Recurring API")," using the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/mp-migration-guide/subscriptions/"},"Subscriptions to Recurring migration guide")," Familiarize yourself with what migration entails, so you are prepared for the migration process."),(0,a.kt)("p",{parentName:"admonition"},"Key dates: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NOW")," Take a look at the change list here and implement changes if needed for the Facade period"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2024")," Plan and integrate new ",(0,a.kt)("a",{parentName:"li",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"Recurring API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2024.01.01")," Be ready with adjustments needed for your integration for the Facade period."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2024Q1")," We finally launch Nordic Wallet Launch in Finland \ud83c\uddeb\ud83c\uddee and then Denmark \ud83c\udde9\ud83c\uddf0 "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2025Q1")," Be ready with your API integration to the Recurring API. \ud83e\udde1 \ud83d\udc99 The facade will be switched off. ")),(0,a.kt)("h2",{parentName:"admonition",id:"migration-information"},"Migration Information:"),(0,a.kt)("p",{parentName:"admonition"},"Familiarize yourself with what migration entails, so you are prepared for the migration process."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide"},"Overall Migration Information"),": Learn about the overall migration, timeline, and guidelines.  \ud83d\udcc6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.vippsmobilepay.com/docs/vipps-developers/mp-migration-guide/subscriptions/"},"Subscriptions Migration (full reintegration)"),": Read our migration guide and prepare for migrating to the Recurring API. This is relevant for existing merchants and partner who wants to do full reintegration.")),(0,a.kt)("p",{parentName:"admonition"},"Please note: We are continuously working on improving our migration guide so it includes  step-by-step instructions, best practices, and FAQs to help merchants smoothly transition to the new platform.  "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mobilepay.dk/docs/subscriptions/transition-to-one-platform"},"Prepare for the facade period"),": Get an overview of changes in functionality and recommendations for the existing MobilePay Subscriptions API and how you best can prepare for facade period without full reintegration.")),(0,a.kt)("h2",{parentName:"admonition",id:"new-platform-resources"},"New Platform Resources"),(0,a.kt)("p",{parentName:"admonition"},"Familiarize yourself with the Vipps MobilePay API platform. Visit the website, read our documentation to understand our capabilities and features. This is relevant for new merchants and partner or for existing ones who wants to do full reintegration."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/partner/new-platform"},"New Platform"),": Discover more about the New Platform and read more about the benefits and improvements that you can expect from the New Wallet Launch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/"},"NEW Recurring API Documentation"),": Find detailed information on the New Recurring API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/api/recurring/"},"NEW Recurring API Reference"),": Explore the API reference for the New Recurring API.      "))),(0,a.kt)("h2",{parentName:"admonition",id:"test"},"Test"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://vippsmobilepay.com/merchant-test-account-sign-up"},"Sign up for Merchant Test"),": Register here to get credentials for the Test environment. Please note that this is the test environment of Vipps MobilePay.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/test-environment/"},"Info about test environment")))),(0,a.kt)("h2",{parentName:"admonition",id:"stay-updated-\ufe0f"},"Stay updated \u2615\ufe0f"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/APIs/recurring-api/CHANGELOG/"},"NEW Recurring Changelogs"),": All notable changes to the Recurring API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/newsletters/"},"Subscribe to newsletter"),": Technical newsletter, with important information about the APIs.")))))}u.isMDXComponent=!0},82256:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Subs_reintegration_treemap-dcd5fbfae64cd4a2b875fba9c87fa35a.png"},9895:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Subs_reintegration_treemap-dcd5fbfae64cd4a2b875fba9c87fa35a.png"}}]);