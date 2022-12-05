"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:5},o="Retrieve transfers",s={unversionedId:"reporting/transfers",id:"reporting/transfers",title:"Retrieve transfers",description:"Usually accumulated payment point balance is transferred once per day to a specified merchant account.",source:"@site/docs/reporting/transfers.md",sourceDirName:"reporting",slug:"/reporting/transfers",permalink:"/docs/reporting/transfers",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Retrieve transactions",permalink:"/docs/reporting/transactions"},next:{title:"Migrate from v1 and v2",permalink:"/docs/reporting/migrate-from-v1v2"}},i={},p=[{value:"Get a single transfer",id:"get-a-single-transfer",level:2},{value:"Retrieve a list of transfers",id:"retrieve-a-list-of-transfers",level:2},{value:"Transfer reference",id:"transfer-reference",level:2},{value:"Default transfer reference",id:"default-transfer-reference",level:3},{value:"Custom transfer reference",id:"custom-transfer-reference",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-transfers"},"Retrieve transfers"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Usually accumulated payment point balance is transferred once per day to a specified merchant account.\nYou might have to wait until the next day to get a transfer and for the funds to appear in the bank account.")),(0,a.kt)("h2",{id:"get-a-single-transfer"},"Get a single transfer"),(0,a.kt)("p",null,"Returns a single completed transfer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request curl example"',title:'"Request',curl:!0,'example"':!0},"$ curl -X 'GET' \\\n  'https://api.mobilepay.dk/v3/reporting/transfers/3fa85f64-5717-4562-b3fc-2c963f66afa6' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",\n  "reference": "string",\n  "date": "string",\n  "totalTransferredAmount": 0,\n  "currencyCode": "string"\n}\n')),(0,a.kt)("h2",{id:"retrieve-a-list-of-transfers"},"Retrieve a list of transfers"),(0,a.kt)("p",null,"Returns a list of completed transfers for a payment point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request curl example"',title:'"Request',curl:!0,'example"':!0},"$ curl -X 'GET' \\\n  'https://api.mobilepay.dk/v3/reporting/transfers?pagesize=1000&pagenumber=1' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 1,\n  "nextPageNumber": 2,\n  "transfers": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",\n      "reference": "string",\n      "date": "string",\n      "totalTransferredAmount": 0,\n      "currencyCode": "string"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"transfer-reference"},"Transfer reference"),(0,a.kt)("p",null,"The transfer reference is a unique reference which MobilePay generates for all individual transfers, and is visible on the bank statement when the transfer has been completed and received on your bank account. The reference always consists of 20 characters."),(0,a.kt)("p",null,"Use this reference to identify and verify which transfers were received on the bank account. The format of transfer reference can be defaulted or customized via payment point creation in the portal."),(0,a.kt)("h3",{id:"default-transfer-reference"},"Default transfer reference"),(0,a.kt)("h3",null,(0,a.kt)("span",{style:{color:"rgb(29 117 157)"}},"PC"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"AAAAAAAA"),(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"RRR"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"DD"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"MM"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"YY"),(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Characters"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(29 117 157)"}},"PC")),(0,a.kt)("td",{parentName:"tr",align:null},"Product code \u2013 the product identified by a code, when generating the reference. 01 - POS, 02 - MyShop, 03 - Subscriptions, 04 - Invoice, 06 - Online, 08 - App Payments.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"AAAAAAAA")),(0,a.kt)("td",{parentName:"tr",align:null},"The external paymentPointID (length 8) is unique per payment point. For the product\u2019s Subscription and Invoice the external paymentPointID will consist of 8 zeros (00000000). For MyShop it will be MyShop number, for PoS it will be PoS LocationID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"RRR")),(0,a.kt)("td",{parentName:"tr",align:null},"The running number (incremented with each transfer and reset each day)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"DD")),(0,a.kt)("td",{parentName:"tr",align:null},"Day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"MM")),(0,a.kt)("td",{parentName:"tr",align:null},"Month")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"YY")),(0,a.kt)("td",{parentName:"tr",align:null},"Year")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.kt)("td",{parentName:"tr",align:null},"Check digit added automatically")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Example: ",(0,a.kt)("span",{style:{color:"rgb(29 117 157)"}},"02"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"00012345"),(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"04"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"08"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"1")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"02 = transfer from MyShop product"),(0,a.kt)("li",{parentName:"ul"},"00012345 = transfer from the payment point with the MyShop number 12345"),(0,a.kt)("li",{parentName:"ul"},"001 = the first transfer on the bank account that day"),(0,a.kt)("li",{parentName:"ul"},"040822 = date of the transfer"),(0,a.kt)("li",{parentName:"ul"},"1 = control digit")),(0,a.kt)("p",{parentName:"admonition"},"The reference ",(0,a.kt)("span",{style:{color:"rgb(29 117 157)"}},"02"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"00012345"),(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"04"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"08"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"1")," in this example correspond to the transfer done by the MyShop product from the payment point with the MyShop number 12345 done at August 4, 2022. "),(0,a.kt)("p",{parentName:"admonition"},"Another example: ",(0,a.kt)("span",{style:{color:"rgb(29 117 157)"}},"03"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"00000000"),(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"16"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"02"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"1")," - which indicates Subscriptions transfer received February 16, 2022.")),(0,a.kt)("h3",{id:"custom-transfer-reference"},"Custom transfer reference"),(0,a.kt)("p",null," Custom transfer reference consists of 20 characters: 19 - set by you and a check digit which is always automatically added at the end of the reference. One of the use cases for custom transfer reference is when there is a need to set up automation to transfer money further, i.e. franchisee. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Characters"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"0-9")),(0,a.kt)("td",{parentName:"tr",align:null},"Your own numbers and it will not be replaced")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"RRR")),(0,a.kt)("td",{parentName:"tr",align:null},"Will be replaced with the running number (incremented with each transfer and reset each day) ",(0,a.kt)("br",null)," Running number is unique for every payment point")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"DD")),(0,a.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"MM")),(0,a.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current month")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"YY")),(0,a.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current year")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.kt)("td",{parentName:"tr",align:null},"Check digit added automatically")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'Example: Payment point has custom transfer reference set to "',(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"RRR"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"5555555555"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"YY"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"MM"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"DD"),'". Reference in bank statement "',(0,a.kt)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.kt)("span",{style:{color:"rgb(231 66 126)"}},"5555555555"),(0,a.kt)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.kt)("span",{style:{color:"rgb(26 126 86)"}},"03"),(0,a.kt)("span",{style:{color:"rgb(54 168 137)"}},"27"),(0,a.kt)("span",{style:{color:"rgb(111 195 207)"}},"3"),'" indicates that the transfer was the first transfer for this payment point and it was made on March 27, 2022.')))}u.isMDXComponent=!0}}]);