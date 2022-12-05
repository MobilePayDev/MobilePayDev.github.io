"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(63473);const i={sidebar_position:1,pagination_next:null},l="API keys",s={unversionedId:"reporting/authentication/api-key",id:"reporting/authentication/api-key",title:"API keys",description:"",source:"@site/docs/reporting/authentication/api-key.mdx",sourceDirName:"reporting/authentication",slug:"/reporting/authentication/api-key",permalink:"/docs/reporting/authentication/api-key",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_next:null},sidebar:"docsSidebar",previous:{title:"Authenticate to the API",permalink:"/docs/reporting/authentication/"}},p={},c=[],u={toc:c};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-keys"},"API keys"),(0,r.kt)(o.ZP,{mdxType:"ApiPage"}))}y.isMDXComponent=!0},63473:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[{value:"Securing API key",id:"securing-api-key",level:4},{value:"Get an API key",id:"get-an-api-key",level:4},{value:"Usage",id:"usage",level:4}]};function i(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"securing-api-key"},"Securing API key"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Store your API keys private and secure and do not share with someone you don't trust. Anyone with your API key can access all MobilePay APIs that are in scope of that key on behalf of you.")),(0,r.kt)("p",null," Keep in mind on securing keys: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not leave API keys in publicly accessible areas such as GitHub, client-side code, etc."),(0,r.kt)("li",{parentName:"ul"},"Delete your API keys if you suspect that unauthorized people know them. Note that deleted API keys will not work. In that case, you will need to create new API keys and update authorization headers."),(0,r.kt)("li",{parentName:"ul"},"Delete old API keys you are no longer using to avoid any external exposure."),(0,r.kt)("li",{parentName:"ul"},"Regenerate your API keys periodically."),(0,r.kt)("li",{parentName:"ul"},"Restrict your API key only to APIs you are going to use.")),(0,r.kt)("h4",{id:"get-an-api-key"},"Get an API key"),(0,r.kt)("p",null,"You can view and manage your API keys in the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.mobilepay.dk/settings/apikeys"},"MobilePay portal"),". Meanwhile, sandbox keys are generated in the ",(0,r.kt)("a",{parentName:"p",href:"https://sandprod-portal.mobilepay.dk/settings/apikeys"},"sandbox version of MobilePay portal")," and will be applicable only on sandbox environment."),(0,r.kt)("p",null,"When creating an API key you need to select APIs which will be accessible using this key. You can also assign it a name. Once API key is generated, it is not  possible to change the scope or the name. Modifications must be carried out by creating a new API key. Lastly, you are fully responsible for managing the lifecycle of the keys you have created."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93467).Z,width:"600",height:"416"})),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To perform successfull authorization provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API_Key")," - generated as described before (OAuth access token or Api key)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'-H "Authorization: Bearer {API_Key}"\n')))}i.isMDXComponent=!0},93467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-api-key-1491a489dbe6b635042c7545b976d7d0.gif"}}]);