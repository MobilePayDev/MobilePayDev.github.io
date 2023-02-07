"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5},o="Callbacks",l={unversionedId:"invoice/callbacks",id:"invoice/callbacks",title:"Callbacks",description:"How to handle invoice callbacks",source:"@site/docs/invoice/callbacks.md",sourceDirName:"invoice",slug:"/invoice/callbacks",permalink:"/docs/invoice/callbacks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"API Endpoint Reference",permalink:"/docs/invoice/api-endpoint-reference"},next:{title:"Notifications",permalink:"/docs/invoice/notifications"}},c={},s=[{value:"How to handle invoice callbacks",id:"how-to-handle-invoice-callbacks",level:2},{value:"REST callback retries",id:"rest-callback-retries",level:2},{value:"REST callback authentication",id:"rest-callback-authentication",level:2},{value:"Basic",id:"basic",level:3},{value:"ApiKey",id:"apikey",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"callbacks"},"Callbacks"),(0,i.kt)("h2",{id:"how-to-handle-invoice-callbacks"},"How to handle invoice callbacks"),(0,i.kt)("p",null,"It\u2019s asynchronous messaging and we cannot ensure the right order of the events. That\u2019s why we added a property ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," to each status change, so that the integrator\u2019s would know when particular events have happened.\nFor example: If the invoice never gets from ",(0,i.kt)("inlineCode",{parentName:"p"},"accepted")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"paid")," due to insufficient funds, then it will be ",(0,i.kt)("inlineCode",{parentName:"p"},"expired")," at some point. If the user tries to pay invoice for at least one time, invoice itself gets ",(0,i.kt)("inlineCode",{parentName:"p"},"accepted")," and the callback is sent to the integrator. So by that, integrator can know if the invoice expired just because user never acted on it, or it expired, but user tried to pay for it at some point."),(0,i.kt)("p",null,"Invoice callbacks are sent using batches. The job starts every 5 seconds. If we have a higher load of invoice payments, some of them may not fit in the upcoming batch and will be sent even later than 5sec. Currently we don\u2019t have a maximum delay that can be expected, as it depends on the number of invoices that we get at the same time."),(0,i.kt)("p",null,"In the event that the callbacks are received in incorrect order according to your timestamp, please check the property ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),". We added property ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," so you can compare the callbacks to the status and the timestamp."),(0,i.kt)("p",null,"Make sure to not rely on whitelisting MobilePay\u2019s sending IP addresses, as these IP addresses are subject to change without notice."),(0,i.kt)("h2",{id:"rest-callback-retries"},"REST callback retries"),(0,i.kt)("p",null,"In case the REST callback failed, 8 retries will be made"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1st retry after 5 seconds"),(0,i.kt)("li",{parentName:"ul"},"2nd retry 19 minutes after 1st failed retry"),(0,i.kt)("li",{parentName:"ul"},"3rd retry 39 minutes after 2nd failed retry"),(0,i.kt)("li",{parentName:"ul"},"4th retry 1 hour and 19 minutes after 3rd failed retry"),(0,i.kt)("li",{parentName:"ul"},"5th retry 2 hours and 39 minutes after 4th failed retry"),(0,i.kt)("li",{parentName:"ul"},"6th retry 5 hours and 19 minutes after 5th failed retry"),(0,i.kt)("li",{parentName:"ul"},"7th retry 10 hours and 39 minutes after 6th failed retry"),(0,i.kt)("li",{parentName:"ul"},"8th retry 21 hours and 19 minutes after 7th failed retry")),(0,i.kt)("h2",{id:"rest-callback-authentication"},"REST callback authentication"),(0,i.kt)("p",null,"In order to receive callbacks about status changes for an invoice a callback URL must be specified first. But before setting your callback URL you must choose prefered authentication method which we will use for authenticating our requests when calling your callback URL. Currently we support ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7617"},(0,i.kt)("inlineCode",{parentName:"a"},"Basic"))," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiKey")," authentication methods:"),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"basic")," All the REST callbacks will be sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"CallbackUrl")," and contain basic credentials in ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," HTTP header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Header"',title:'"Header"'},"Authorization: Basic [Base64 encoded username:password]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Basic example"',title:'"Basic','example"':!0},'PUT /api/v1/merchants/{merchantId}/auth/basic\n\n{\n  "username": "Username",\n  "password": "MySecretPswd",\n  "callbackurl": "https://your.url/callbacks/invoice"\n}\n')),(0,i.kt)("h3",{id:"apikey"},"ApiKey"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ApiKey example"',title:'"ApiKey','example"':!0},'PUT /api/v1/merchants/{merchantId}/auth/apikey\n\n{\n  "ApiKey": "SomeSecretApiKey123",\n  "callbackurl": "https://your.url/callbacks/invoice"\n}\n')),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiKey")," authentication method your provided API key will be simply added to ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,i.kt)("p",null,"Example of our callback body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f448",\n    "Status": "Rejected",\n    "Date": "2018-04-24T07:29:47.7500268+00:00",\n    "Sequence": 2\n  },\n  {\n    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f449",\n    "Status": "Invalid",\n    "ErrorCode": 10106,\n    "ErrorMessage": "<description of error>",\n    "Date": "2018-04-24T07:29:47.7500268+00:00",\n    "Sequence": 1\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"All possible invoice statuses returned in callback body can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/invoice/api-endpoint-reference#get-invoice-status"},"Get invoice status")," section."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When status of an invoice is ",(0,i.kt)("inlineCode",{parentName:"p"},"accepted")," one additional field will be added: ",(0,i.kt)("inlineCode",{parentName:"p"},"PaymentDate"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When status of an invoice is ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," two additional fields will be added: ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorMessage"),". All possible validation errors can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/invoice/api-endpoint-reference#validations"},"validations")," section.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Callbacks of the events that are fired one right after another might be sent out in wrong order. ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence")," field can be used to find out the real order of the events. ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence")," number starts from 0. There might be gaps between the sequence numbers because not all events are sent as a callbacks.")),(0,i.kt)("p",null,"Callbacks about created ",(0,i.kt)("inlineCode",{parentName:"p"},"InvoiceLinks")," which were created asynchronously using ",(0,i.kt)("a",{parentName:"p",href:"/docs/invoice/api-endpoint-reference#create-multiple-invoice-links"},"batch endpoint")," will contain additional field ",(0,i.kt)("inlineCode",{parentName:"p"},"Links")," with ",(0,i.kt)("inlineCode",{parentName:"p"},'Rel="user-redirect"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Href")," to the page where MobilePay users can accept an invoice, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "InvoiceId": "3c440dfb-b271-4d21-ad1c-f973f2c4f448",\n    "Status": "Created",\n    "Links": [\n      {\n        "Rel": "user-redirect",\n        "Href": "<url-for-accepting-invoice>"\n      }\n    ],\n    "Date":"2018-04-24T07:29:47.7500268+00:00",\n    "Sequence": 1\n  },\n  ...\n]\n')))}u.isMDXComponent=!0}}]);