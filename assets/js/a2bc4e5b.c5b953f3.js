"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},80873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:2},s="Test",u={unversionedId:"invoice/development-guide/test",id:"invoice/development-guide/test",title:"Test",description:"In this section, you will find information on testing, as well as test data. All users, items, and payment involved in Sandbox transactions are fictitious. You are able to test all the Invoice features, just as they are in the production environment. However, it is not possible to interact with the MobilePay app, therefor it is not possible to accept or reject invoices from the app. Instead, you have access to a testing API: Invoice User Simulation API , which makes it possible to imitate user actions",source:"@site/docs/invoice/development-guide/test.mdx",sourceDirName:"invoice/development-guide",slug:"/invoice/development-guide/test",permalink:"/docs/invoice/development-guide/test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/invoice/development-guide/getting-started"},next:{title:"Verification",permalink:"/docs/invoice/development-guide/verification"}},c={},p=[{value:"Making the first call",id:"making-the-first-call",level:2},{value:"Test Actions",id:"test-actions",level:2},{value:"User simulation API",id:"user-simulation-api",level:2},{value:"Test users and test data",id:"test-users-and-test-data",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test"},"Test"),(0,r.kt)("p",null,"In this section, you will find information on testing, as well as test data. All users, items, and payment involved in Sandbox transactions are fictitious. You are able to test all the Invoice features, just as they are in the production environment. However, it is not possible to interact with the MobilePay app, therefor it is not possible to accept or reject invoices from the app. Instead, you have access to a testing API: Invoice User Simulation API , which makes it possible to imitate user actions"),(0,r.kt)("h2",{id:"making-the-first-call"},"Making the first call"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1. Get Tokens"),"\nWhen you have gone through OpenID Connect, then you can start calling the API. All calls to Invoice endpoints require access tokens, and they are used to make API requests on behalf of a user.  The content of the header should look like the following. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Header examples"',title:'"Header','examples"':!0},"accept: application/json\ncontent-type: application/json\nauthorization::  REPLACE_THIS_VALUE\n")),(0,r.kt)("p",null,"We recommend you start with getting the MerchantId ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2. Get MerchantId"),"\nMerchantId is a unique identifier of a merchant in our system. After you retrieve an access token from OpenID flow use the following endpoint to retrieve your MerchantId."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/merchants/me")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3. Get Invoice Issuer"),"\nAfterwards you should get an invoice issuer. Invoice issuer represents merchant\u2019s company information. The merchant is the customer company and the Invoice Issuer is the actual service provider name under which they create invoices"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/merchants/{merchantId}/invoiceissuers")),(0,r.kt)("p",null,"Read more about Invoice Issuer on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-Invoice/invoice_issuers"},"here")),(0,r.kt)("h2",{id:"test-actions"},"Test Actions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"InvoiceDirect")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://mobilepaydev.github.io/MobilePay-Invoice/api_reference#direct"},"InvoiceDirect")),(0,r.kt)("li",{parentName:"ol"},"Create multiple ",(0,r.kt)("a",{parentName:"li",href:"https://mobilepaydev.github.io/MobilePay-Invoice/api_reference#direct"},"InvoiceDirect")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://mobilepaydev.github.io/MobilePay-Invoice/api_reference#canceling"},"Cancel an unpaid Invoice"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"InvoiceLink")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create an Invoice Link"),(0,r.kt)("li",{parentName:"ol"},"Create multiple ",(0,r.kt)("a",{parentName:"li",href:"https://mobilepaydev.github.io/MobilePay-Invoice/api_reference#link"},"InvoiceLink"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consent:")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Test ",(0,r.kt)("a",{parentName:"li",href:"https://mobilepaydev.github.io/MobilePay-Invoice/api_reference#direct-invoice-consent"},"User Consent")," for Invoice Direct")),(0,r.kt)("h2",{id:"user-simulation-api"},"User simulation API"),(0,r.kt)("p",null,"We supply a testing API, Invoice User Simulation, that simulates user actions in the app. With the API, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get an Invoice PDF"),(0,r.kt)("li",{parentName:"ul"},"Accept an Invoice"),(0,r.kt)("li",{parentName:"ul"},"Reject an Invoice"),(0,r.kt)("li",{parentName:"ul"},"Test User Consent")),(0,r.kt)("p",null,"We expect that you have simulated the 4 features listed above, before you start the verification process. Then it can be completed in a day. You should test both InvoiceDirect and InvoiceLink."),(0,r.kt)("h2",{id:"test-users-and-test-data"},"Test users and test data"),(0,r.kt)("p",null,"When testing Invoice, then you'll use the Invoice User Simulation API that you'll find ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/api/invoice"},"here"),". To create an Invoice, you must supply"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authenticated user id"),(0,r.kt)("li",{parentName:"ul"},"ConsumerCard"),(0,r.kt)("li",{parentName:"ul"},"Phone number")),(0,r.kt)("p",null,"Below you can find a list of test users for Denmark and Finland. If there is an issue with a test user, please try a different user, or contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When testing Invoice payments in Sandbox remember to use the same authenticated user id for both creating and approving the invoice. The testusers are CPR validated, so the maximum amount is 3.000 kr., which is why we recommend that you test only using low amounts.")),(0,r.kt)(i.Z,{defaultValue:"dk",values:[{label:"DK test users",value:"dk"},{label:"FI test users",value:"fi"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dk",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authenticated user id"),(0,r.kt)("th",{parentName:"tr",align:null},"ConsumerCard"),(0,r.kt)("th",{parentName:"tr",align:null},"Phone number"),(0,r.kt)("th",{parentName:"tr",align:null},"Consumer name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f1a75bb4-c8a6-41f8-8603-4cf9278cd5ba"),(0,r.kt)("td",{parentName:"tr",align:null},"6956b1ae-be59-4d7c-ba1c-8aa188db83b7"),(0,r.kt)("td",{parentName:"tr",align:null},"+4557373259"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4f474aa2-6161-4094-97fd-62616ff3d21e"),(0,r.kt)("td",{parentName:"tr",align:null},"a6d8044d-176b-4639-a55f-d14d1ae11e28"),(0,r.kt)("td",{parentName:"tr",align:null},"+4599592431"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d5e4e229-b482-4304-80f1-237d2a3abc48"),(0,r.kt)("td",{parentName:"tr",align:null},"d77db24c-f078-4eaf-8026-fbaa8411a8fe"),(0,r.kt)("td",{parentName:"tr",align:null},"+4522509895"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40b881f7-ac3d-43bb-81e6-2ac9ef279d89"),(0,r.kt)("td",{parentName:"tr",align:null},"6cdf304d-d4c5-4126-9775-a286ce16838b"),(0,r.kt)("td",{parentName:"tr",align:null},"+4554048573"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"147a8bbd-6a87-40e7-9980-937d1b8d0de4"),(0,r.kt)("td",{parentName:"tr",align:null},"9c55892e-66dc-41c8-b256-13bf599ac377"),(0,r.kt)("td",{parentName:"tr",align:null},"+4585155935"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")))),(0,r.kt)("p",null,"*",(0,r.kt)("em",{parentName:"p"},"Card is expired. Use this testuser to test error handling for failed card scenarios"))),(0,r.kt)(l.Z,{value:"fi",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authenticated user id"),(0,r.kt)("th",{parentName:"tr",align:null},"ConsumerCard"),(0,r.kt)("th",{parentName:"tr",align:null},"Phone number"),(0,r.kt)("th",{parentName:"tr",align:null},"Consumer name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"439d1721-0a36-499f-b236-8bfc61c6cbb7"),(0,r.kt)("td",{parentName:"tr",align:null},"b5f78182-e2ff-402e-a646-46c7da8459a0"),(0,r.kt)("td",{parentName:"tr",align:null},"+358121161343"),(0,r.kt)("td",{parentName:"tr",align:null},"FI Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f5588bb0-d90d-419f-9ec5-7ef138c23f83"),(0,r.kt)("td",{parentName:"tr",align:null},"d7328e72-7d21-4f7d-b7f4-9a6861551b70"),(0,r.kt)("td",{parentName:"tr",align:null},"+358121161892"),(0,r.kt)("td",{parentName:"tr",align:null},"FI Test name")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot use the MobilePay app installed on your phone when you are testing in sandbox environment.\nInstead you must use the Invoice User Simulation API to simulate customer actions.")))}h.isMDXComponent=!0}}]);