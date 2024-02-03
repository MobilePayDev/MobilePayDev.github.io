"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4436],{95788:(e,t,n)=>{n.d(t,{Iu:()=>o,yg:()=>y});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(y,i(i({ref:t},o),{},{components:n})):a.createElement(y,i({ref:t},o))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(45072),r=(n(11504),n(95788));const l={sidebar_position:7},i="Refund",d={unversionedId:"subscriptions/refund",id:"subscriptions/refund",title:"Refund",description:"Merchants can easily refund the customer with MobilePay Subscriptions. This functionality is used to refund previously captured one-off payments or subscriptions payments. A refund transaction can be made up to 90 days after payment execution. Refunds are not restricted by agreement status. Refunds can be made on a cancelled agreement. As long as the payment is successful and no older than 90 days, then it should work.",source:"@site/docs/subscriptions/refund.md",sourceDirName:"subscriptions",slug:"/subscriptions/refund",permalink:"/docs/subscriptions/refund",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"One-off Payments",permalink:"/docs/subscriptions/one-off-payments"},next:{title:"Invoice",permalink:"/docs/subscriptions/invoice"}},s={},u=[{value:"Request a Refund",id:"request-a-refund",level:2},{value:"Request parameters",id:"request-parameters",level:3},{value:"Callbacks",id:"callbacks",level:2},{value:"Refund screens within mobile application",id:"refund-screens-within-mobile-application",level:2}],o={toc:u},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,a.c)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"refund"},"Refund"),(0,r.yg)("p",null,"Merchants can easily refund the customer with MobilePay Subscriptions. This functionality is used to refund previously captured one-off payments or subscriptions payments. A refund transaction can be made up to 90 days after payment execution. Refunds are not restricted by agreement status. Refunds can be made on a cancelled agreement. As long as the payment is successful and no older than 90 days, then it should work."),(0,r.yg)("p",null,"A refund can be executed if the Merchants payment balance contains enough money to cover the refund. If the balance doesn\u2019t cover the amount of the refund, the refund will fail. You can issue more than one refund against a payment_id, but you can\u2019t refund a total greater than the original payment_id amount."),(0,r.yg)("p",null,"Quick handling of refund proves vital to ensure customer loyalty. Seen as the customer previously executed the payment via MobilePay, it makes sense that it also gets refunded via MobilePay.  The reason being that the customer can see a receipt in the MobilePay app of the refund that corresponds to the original payment. The refund receipt is easily visible for the customer in the MobilePay app. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Full refund")," - 100% of the amount paid is returned to the payer.If the amount is not specified, the payment will be fully refunded\n",(0,r.yg)("strong",{parentName:"p"},"Partial refund")," - An amount up to the net (the amount the merchant received) will be returned to the payer. Multiple partial refunds can be made.If the amount is specified, it has to be less than or equal to the amount payed. No refund otherwise. A payment can be refunded partially several times, until the amount is 0 (zero)."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"MP Subscriptions recurring or one-off payment refund CANNOT be made without original payment. Payment ID must be the same for both actions.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Refunds CANNOT be made for ",(0,r.yg)("strong",{parentName:"p"},"Instant")," transfer payments. Only ",(0,r.yg)("strong",{parentName:"p"},"Daily")," transfer payment can be refunded.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Refunds are sent to users receiving bank account, not the card/account the payment was done from.")),(0,r.yg)("h2",{id:"request-a-refund"},"Request a Refund"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/providers/{providerId}/agreements/{agreementId}/payments/{paymentId}/refunds")," endpoint to request a ",(0,r.yg)("strong",{parentName:"p"},"Refund"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "amount": 10.99,\n    "status_callback_url" : "https://example.com",\n    "external_id": "ABC123"\n}\n')),(0,r.yg)("h3",{id:"request-parameters"},"Request parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Valid values"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"amount")),(0,r.yg)("td",{parentName:"tr",align:null},"number(0.01)"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"The requested amount to be returned.")),(0,r.yg)("td",{parentName:"tr",align:null},">= 0.01, decimals separated with a dot. If not specified, payment will be fully refunded.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"status_callback_url")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Link relation hyperlink reference.")),(0,r.yg)("td",{parentName:"tr",align:null},"Merchant's url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"external_id")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"Refund's identifier on the merchant\u2019s side. This will be included in the request body of the refund callback.")),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/providers/{providerId}/agreements/{agreementId}/payments/{paymentId}/refunds")," service returns HTTP 202 and the response contains single value: a unique ",(0,r.yg)("em",{parentName:"p"},"id")," of the newly created ",(0,r.yg)("strong",{parentName:"p"},"Refund"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",202:!0,className:"language-json",metastring:'title="HTTP 202 Response body example"',title:'"HTTP',Response:!0,body:!0,'example"':!0},'{\n    "id": "263cfe92-9f8e-4829-8b96-14a5e53c9041",\n    "amount": 10.99,\n    "status_callback_url": "http://example.com",\n    "external_id": "ABC123"\n}\n')),(0,r.yg)("h2",{id:"callbacks"},"Callbacks"),(0,r.yg)("p",null,"When the ",(0,r.yg)("strong",{parentName:"p"},"Refund's")," status changes from ",(0,r.yg)("em",{parentName:"p"},"Requested")," we will do a callback to the callback address provided in request parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"status_callback_url"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Refund callback body example"',title:'"Refund',callback:!0,body:!0,'example"':!0},'{\n    "refund_id" : "4bb9b33a-f34a-42e7-9143-d6eabd9aae1d",\n    "agreement_id" : "1b08e244-4aea-4988-99d6-1bd22c6a5b2c",\n    "payment_id" : "c710b883-6ed6-4506-9599-490ead89525a",\n    "amount" : "10.99",\n    "currency" : "DKK",\n    "status" : "Issued",\n    "status_text" : null,\n    "status_code" : 0,\n    "external_id": "ABC123"\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"New Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Condition"),(0,r.yg)("th",{parentName:"tr",align:null},"When to expect"),(0,r.yg)("th",{parentName:"tr",align:null},"Callback ",(0,r.yg)("em",{parentName:"th"},"status")),(0,r.yg)("th",{parentName:"tr",align:null},"Callback ",(0,r.yg)("em",{parentName:"th"},"status_text")),(0,r.yg)("th",{parentName:"tr",align:null},"Callback ",(0,r.yg)("em",{parentName:"th"},"status_code")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Issued"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"The ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was successfully issued")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund request was received"),(0,r.yg)("td",{parentName:"tr",align:null},"Issued"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"If ",(0,r.yg)("strong",{parentName:"em"},"Payment")," is fully refunded")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment is fully refunded."),(0,r.yg)("td",{parentName:"tr",align:null},"60001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"If the total sum of previous ",(0,r.yg)("strong",{parentName:"em"},"Refunds")," exceed the original payment amount")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"The total sum of previous ",(0,r.yg)("strong",{parentName:"td"},"Refunds")," cannot exceed the original payment amount."),(0,r.yg)("td",{parentName:"tr",align:null},"60002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"When ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by system")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment was not found."),(0,r.yg)("td",{parentName:"tr",align:null},"60003")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"When ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by system")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment cannot be refunded."),(0,r.yg)("td",{parentName:"tr",align:null},"60004")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"A catch-all error code when ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by core system. E.g.: more than 2 decimals, receiver is not active, receiver's bank declined refund, etc.")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after or up to 3 h after refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Refund was declined by system."),(0,r.yg)("td",{parentName:"tr",align:null},"60005")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"When ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by system.")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Cannot refund payments that are older than 90 days."),(0,r.yg)("td",{parentName:"tr",align:null},"60006")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"When ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by system.")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"Cannot refund instantly transferred payments."),(0,r.yg)("td",{parentName:"tr",align:null},"60007")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"},"When ",(0,r.yg)("strong",{parentName:"em"},"Refund")," was declined by system.")),(0,r.yg)("td",{parentName:"tr",align:null},"Right after the refund was requested"),(0,r.yg)("td",{parentName:"tr",align:null},"Declined"),(0,r.yg)("td",{parentName:"tr",align:null},"No money in account."),(0,r.yg)("td",{parentName:"tr",align:null},"60008")))),(0,r.yg)("h2",{id:"refund-screens-within-mobile-application"},"Refund screens within mobile application"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Refund",src:n(33208).c,width:"1026",height:"885"})))}m.isMDXComponent=!0},33208:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/subs-newRefund-6887d478d3a5d7a356d83734f0650952.png"}}]);