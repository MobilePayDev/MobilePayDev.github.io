"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6120],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>f});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},80628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:3},i="Retrieve payment points",p={unversionedId:"reporting/payment-points",id:"reporting/payment-points",title:"Retrieve payment points",description:"Retrieve a list of payment points",source:"@site/docs/reporting/payment-points.md",sourceDirName:"reporting",slug:"/reporting/payment-points",permalink:"/docs/reporting/payment-points",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Refresh tokens",permalink:"/docs/reporting/authentication/open-id/refresh-tokens"},next:{title:"Retrieve transactions",permalink:"/docs/reporting/transactions"}},s={},c=[{value:"Retrieve a list of payment points",id:"retrieve-a-list-of-payment-points",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"retrieve-payment-points"},"Retrieve payment points"),(0,o.yg)("h2",{id:"retrieve-a-list-of-payment-points"},"Retrieve a list of payment points"),(0,o.yg)("p",null,"Returns payment points owned by a given merchant."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request curl example"',title:'"Request',curl:!0,'example"':!0},"$ curl -X 'GET' \\\n  'https://api.mobilepay.dk/v3/reporting/paymentpoints?pagesize=1000&pagenumber=1' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 1,\n  "nextPageNumber": 2,\n  "paymentPoints": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "name": "Product store",\n      "productType": "string",\n      "alias": "string"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);