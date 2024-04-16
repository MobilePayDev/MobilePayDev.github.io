"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8841],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),y=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=y(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=y(r),u=a,m=g["".concat(i,".").concat(u)]||g[u]||c[u]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var y=2;y<l;y++)o[y]=r[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},37799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var n=r(58168),a=(r(96540),r(15680));const l={sidebar_position:5},o="Retrieve transfers",s={unversionedId:"reporting/transfers",id:"reporting/transfers",title:"Retrieve transfers",description:"Usually accumulated payment point balance is transferred once per day to a specified merchant account.",source:"@site/docs/reporting/transfers.md",sourceDirName:"reporting",slug:"/reporting/transfers",permalink:"/docs/reporting/transfers",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Retrieve transactions",permalink:"/docs/reporting/transactions"},next:{title:"migrate-from-v1v2",permalink:"/docs/reporting/migrate-from-v1v2"}},i={},y=[{value:"Get a single transfer",id:"get-a-single-transfer",level:2},{value:"Retrieve a list of transfers",id:"retrieve-a-list-of-transfers",level:2},{value:"Transfer reference",id:"transfer-reference",level:2},{value:"Default transfer reference",id:"default-transfer-reference",level:3},{value:"Custom transfer reference",id:"custom-transfer-reference",level:3}],p={toc:y},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"retrieve-transfers"},"Retrieve transfers"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Usually accumulated payment point balance is transferred once per day to a specified merchant account.\nYou might have to wait until the next day to get a transfer and for the funds to appear in the bank account.")),(0,a.yg)("h2",{id:"get-a-single-transfer"},"Get a single transfer"),(0,a.yg)("p",null,"Returns a single completed transfer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request curl example"',title:'"Request',curl:!0,'example"':!0},"$ curl -X 'GET' \\\n  'https://api.mobilepay.dk/v3/reporting/transfers/3fa85f64-5717-4562-b3fc-2c963f66afa6' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",\n  "reference": "string",\n  "date": "string",\n  "totalTransferredAmount": 0,\n  "currencyCode": "string"\n}\n')),(0,a.yg)("h2",{id:"retrieve-a-list-of-transfers"},"Retrieve a list of transfers"),(0,a.yg)("p",null,"Returns a list of completed transfers for a payment point."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request curl example"',title:'"Request',curl:!0,'example"':!0},"$ curl -X 'GET' \\\n  'https://api.mobilepay.dk/v3/reporting/transfers?pagesize=1000&pagenumber=1' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 1,\n  "nextPageNumber": 2,\n  "transfers": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "paymentPointId": "52b2c75a-513b-43a6-9f4f-0c4c80f8e15b",\n      "reference": "string",\n      "date": "string",\n      "totalTransferredAmount": 0,\n      "currencyCode": "string"\n    }\n  ]\n}\n')),(0,a.yg)("h2",{id:"transfer-reference"},"Transfer reference"),(0,a.yg)("p",null,"The transfer reference is a unique reference which MobilePay generates for all individual transfers, and is visible on the bank statement when the transfer has been completed and received on your bank account. The reference always consists of 20 characters."),(0,a.yg)("p",null,"Use this reference to identify and verify which transfers were received on the bank account. The format of transfer reference can be defaulted or customized via payment point creation in the portal."),(0,a.yg)("h3",{id:"default-transfer-reference"},"Default transfer reference"),(0,a.yg)("h3",null,(0,a.yg)("span",{style:{color:"rgb(29 117 157)"}},"PC"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"AAAAAAAA"),(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"RRR"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"DD"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"MM"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"YY"),(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Characters"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(29 117 157)"}},"PC")),(0,a.yg)("td",{parentName:"tr",align:null},"Product code \u2013 the product identified by a code, when generating the reference. 01 - POS, 02 - MyShop, 03 - Subscriptions, 04 - Invoice, 06 - Online, 08 - App Payments.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"AAAAAAAA")),(0,a.yg)("td",{parentName:"tr",align:null},"The external paymentPointID (length 8) is unique per payment point. For the product\u2019s Subscription and Invoice the external paymentPointID will consist of 8 zeros (00000000). For MyShop it will be MyShop number, for PoS it will be PoS LocationID.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"RRR")),(0,a.yg)("td",{parentName:"tr",align:null},"The running number (incremented with each transfer and reset each day)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"DD")),(0,a.yg)("td",{parentName:"tr",align:null},"Day")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"MM")),(0,a.yg)("td",{parentName:"tr",align:null},"Month")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"YY")),(0,a.yg)("td",{parentName:"tr",align:null},"Year")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.yg)("td",{parentName:"tr",align:null},"Check digit added automatically")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Example: ",(0,a.yg)("span",{style:{color:"rgb(29 117 157)"}},"02"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"00012345"),(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"04"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"08"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"1")),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"02 = transfer from MyShop product"),(0,a.yg)("li",{parentName:"ul"},"00012345 = transfer from the payment point with the MyShop number 12345"),(0,a.yg)("li",{parentName:"ul"},"001 = the first transfer on the bank account that day"),(0,a.yg)("li",{parentName:"ul"},"040822 = date of the transfer"),(0,a.yg)("li",{parentName:"ul"},"1 = control digit")),(0,a.yg)("p",{parentName:"admonition"},"The reference ",(0,a.yg)("span",{style:{color:"rgb(29 117 157)"}},"02"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"00012345"),(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"04"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"08"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"1")," in this example correspond to the transfer done by the MyShop product from the payment point with the MyShop number 12345 done at August 4, 2022. "),(0,a.yg)("p",{parentName:"admonition"},"Another example: ",(0,a.yg)("span",{style:{color:"rgb(29 117 157)"}},"03"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"00000000"),(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"16"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"02"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"1")," - which indicates Subscriptions transfer received February 16, 2022.")),(0,a.yg)("h3",{id:"custom-transfer-reference"},"Custom transfer reference"),(0,a.yg)("p",null," Custom transfer reference consists of 20 characters: 19 - set by you and a check digit which is always automatically added at the end of the reference. One of the use cases for custom transfer reference is when there is a need to set up automation to transfer money further, i.e. franchisee. "),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Characters"),(0,a.yg)("th",{parentName:"tr",align:null},"Action"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"0-9")),(0,a.yg)("td",{parentName:"tr",align:null},"Your own numbers and it will not be replaced")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"RRR")),(0,a.yg)("td",{parentName:"tr",align:null},"Will be replaced with the running number (incremented with each transfer and reset each day) ",(0,a.yg)("br",null)," Running number is unique for every payment point")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"DD")),(0,a.yg)("td",{parentName:"tr",align:null},"Will be replaced with the current day")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"MM")),(0,a.yg)("td",{parentName:"tr",align:null},"Will be replaced with the current month")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"YY")),(0,a.yg)("td",{parentName:"tr",align:null},"Will be replaced with the current year")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"X")),(0,a.yg)("td",{parentName:"tr",align:null},"Check digit added automatically")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},'Example: Payment point has custom transfer reference set to "',(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"RRR"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"5555555555"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"YY"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"MM"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"DD"),'". Reference in bank statement "',(0,a.yg)("span",{style:{color:"rgb(251 127 238)"}},"001"),(0,a.yg)("span",{style:{color:"rgb(231 66 126)"}},"5555555555"),(0,a.yg)("span",{style:{color:"rgb(38 92 73)"}},"22"),(0,a.yg)("span",{style:{color:"rgb(26 126 86)"}},"03"),(0,a.yg)("span",{style:{color:"rgb(54 168 137)"}},"27"),(0,a.yg)("span",{style:{color:"rgb(111 195 207)"}},"3"),'" indicates that the transfer was the first transfer for this payment point and it was made on March 27, 2022.')))}c.isMDXComponent=!0}}]);