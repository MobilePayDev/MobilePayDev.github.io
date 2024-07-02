"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:10},i="Embedded Flow (IFrame)",l={unversionedId:"online/basics/embedded-flow",id:"online/basics/embedded-flow",title:"Embedded Flow (IFrame)",description:"Web shops and Payment Service Providers (PSPs) may embed the MobilePay landing",source:"@site/docs/online/basics/embedded-flow.md",sourceDirName:"online/basics",slug:"/online/basics/embedded-flow",permalink:"/docs/online/basics/embedded-flow",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Allowed card types",permalink:"/docs/online/basics/allowed-card-types"},next:{title:"Strong Customer Authentication",permalink:"/docs/online/sca"}},p={},s=[{value:"Embed the website in an IFrame",id:"embed-the-website-in-an-iframe",level:2},{value:"Add an Event Listener to the parent page of the IFrame",id:"add-an-event-listener-to-the-parent-page-of-the-iframe",level:2},{value:"Manually engaging the App from the parent page",id:"manually-engaging-the-app-from-the-parent-page",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embedded-flow-iframe"},"Embedded Flow (IFrame)"),(0,r.kt)("p",null,"Web shops and Payment Service Providers (PSPs) may embed the MobilePay landing\npage inside their own website by nesting the page in an IFrame and then\nlisten to the events emitted from the IFrame."),(0,r.kt)("p",null,"Embedding is especially relevant for 'dual-flow' use; where the user starts by\nentering his or her phone number in a browser and then continues the flow in the\napp to accept the payment."),(0,r.kt)("p",null,"When the user has accepted the payment (swiped) in the app, the landing page\nwill by default redirect to the url provided when the payment was created."),(0,r.kt)("p",null,"Build your logic on the parent page, listen for the events published by the\nIFrame and redirect the user to the right page based on the returned data,\ne.g. depending on whether the user cancelled or completed the payment."),(0,r.kt)("h2",{id:"embed-the-website-in-an-iframe"},"Embed the website in an IFrame"),(0,r.kt)("p",null,'Add an "IFrame" to the html source and set the IFrame "src" property to the URL\nreturned from the payment link creation endpoint.'),(0,r.kt)("p",null,"On mobile devices it is expected that the MobilePay flow visually covers the\nwhole screen (simple header and footer is acceptable)."),(0,r.kt)("p",null,"Be aware that you might want to show the user different content if the user is inside\nan IFrame or not. If you support both IFrame and full window, we recommend that\nyou have a neutral return page without visual content."),(0,r.kt)("p",null,"The width should be 375px."),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},' <IFrame\n   scrolling="no"\n   src="https://products.mobilepay.dk/remote-website/index.html?page=request&id=83554a83-cd90-4ac9-bf6e-39357c21dca5&version=2"\n   style="width: 375px; height: 480px; border: 0;" >\n</IFrame>\n')),(0,r.kt)("h2",{id:"add-an-event-listener-to-the-parent-page-of-the-iframe"},"Add an Event Listener to the parent page of the IFrame"),(0,r.kt)("p",null,"The parent page can listen for events by adding an event listener to the IFrame."),(0,r.kt)("p",null,"Before the IFrame redirects, it will post a message to all registered event\nhandlers, giving any parent page the alternative option of handling the page\nnavigation instead, for example in the case where you want the parent page to\nchange too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.addEventListener(\n    "message",\n    function(event) {\n        if (event.data && event.data.startsWith("mobilepay:")){\n            // Do your logic\n            // Continue purchase processing\n            alert(event.data);\n        }\n    },\n    false);\n')),(0,r.kt)("p",null,"When the user terminates the payment flow, the published event will look like as\nfollows. The code and matching description indicate how the flow was terminated,\ni.e. either because the payment was completed, rejected, cancelled by the user\nor because the timer expired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mobilepay:rc={code}&message={description}\n\n// example\nmobilepay:rc=0&message=completed\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Response Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"completed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"rejected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"expired")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cancelled")))),(0,r.kt)("h2",{id:"manually-engaging-the-app-from-the-parent-page"},"Manually engaging the App from the parent page"),(0,r.kt)("p",null,"On mobile devices the app is not guaranteed to engage when the website is nested\ninside an IFrame."),(0,r.kt)("p",null,"To preserve the expected behavior of engaging the app on mobile devices, the\nparent of the IFrame may try to engage the app with the following javascript\nsnippet that use a custom url registered for both Android and iOS.\nThis custom url (redirectToMobilePayAppUrl) is part of the response received, when a payment is initiated."),(0,r.kt)("p",null,"You should still display the landing page inside the IFrame in case the app is\nnot installed or the user navigates back to your page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function tryToOpenMobilePayApp(paymentId) {\n   try {\n      window.open("_redirectToMobilePayAppUrl", "_parent");\n   } catch {\n      // window.open should just fail without throwing aside from logging an\n      // error to console.\n      //\n      // This catch is strictly for good measure to avoid any incidents\n      // in legacy or future browser settings.\n   }\n}\n')))}c.isMDXComponent=!0}}]);