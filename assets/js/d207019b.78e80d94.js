"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},o="Production",l={unversionedId:"invoice/development-guide/production",id:"invoice/development-guide/production",title:"Production",description:"Now you've learned how to customize and send invoices. Understanding what happens in Invoice PaymentFlow helps provide the smoothest experience for both you and your users. Invoices can be a one-time bill that you charge your customer.",source:"@site/docs/invoice/development-guide/production.md",sourceDirName:"invoice/development-guide",slug:"/invoice/development-guide/production",permalink:"/docs/invoice/development-guide/production",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Verification",permalink:"/docs/invoice/development-guide/verification"},next:{title:"OAuth access token",permalink:"/docs/invoice/authentication/"}},s={},c=[{value:"Invoice API - Reconciliation",id:"invoice-api---reconciliation",level:2},{value:"Reconciliation",id:"reconciliation",level:3},{value:"Invoice Transfers",id:"invoice-transfers",level:2},{value:"Reporting api",id:"reporting-api",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"production"},"Production"),(0,r.kt)("p",null,"Now you've learned how to customize and send invoices. Understanding what happens in Invoice PaymentFlow helps provide the smoothest experience for both you and your users. Invoices can be a one-time bill that you charge your customer."),(0,r.kt)("h2",{id:"invoice-api---reconciliation"},"Invoice API - Reconciliation"),(0,r.kt)("p",null,"It is important to ensure that the balances match at the end of the particular account period. It is easy to do reconciliation with Invoice."),(0,r.kt)("p",null,"If you fill out the field ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentReference"),", then the ID follows, that you\u2019ve written as a ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentReference"),", for the payment, if the merchant has chosen Instant Transfers. ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentReference")," is not a required string, as it is completely up to the merchant to decide, the needed ID used to reconcile transactions with the bank. If you do not fill out ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentReference"),", then it would be the input from the field ",(0,r.kt)("inlineCode",{parentName:"p"},"InvoiceNumber"),", that will be the reference on the payment, which is why it is also a required string."),(0,r.kt)("h3",{id:"reconciliation"},"Reconciliation"),(0,r.kt)("p",null,"It is possible to do reconciliation in three ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"API Callback"),": You get the status on the invoice through the API. When the Invoice has status paid it means that the money has been transferred to the customer\u2019s bank. If you have instant transfer method chosen, then the individual transactions will contain the same ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentReference"),", that you have assigned, and that ",(0,r.kt)("inlineCode",{parentName:"li"},"PaymentReference"),", will be returned through the API."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Export CSV/XLSX file"),": The merchant logs-in to our MobilePay ",(0,r.kt)("a",{parentName:"li",href:"https://admin.mobilepay.dk"},"portal")," where the transactions can be exported in a CSV- or XLSX-file."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reporting"},"Reporting API"),".")),(0,r.kt)("p",null,"For example, if the merchant wants to use their FIK-Creditor-ID for transactions, then you simply choose the reference number, which can be the merchant FIK Creditor ID. There are no special requirements for the merchant FIK creditor-ID to be able to use it for MobilePay Invoice."),(0,r.kt)("p",null,"All possible invoice statuses returned in callback body can be found in ",(0,r.kt)("a",{parentName:"p",href:"/docs/invoice/api-endpoint-reference#get-invoice-status"},"Get invoice status")," section."),(0,r.kt)("h2",{id:"invoice-transfers"},"Invoice Transfers"),(0,r.kt)("p",null,"It is important to know which transfer type are possible to use as a merchant. There are two:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instant Transfer: Transfers are executed for each payment automatically."),(0,r.kt)("li",{parentName:"ul"},"Daily Transfer: Transfers are executed once per day for all payments per day")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Instant Transfer"),(0,r.kt)("th",{parentName:"tr",align:null},"Daily Transfer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WHEN TRANSFER IS DONE")),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay transfer instantly after User pays the Invoice. Transfer might reach Merchant account later then MobilePay executes transfers. It depends on Merchant bank transfer times."),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay does transfer ones per day, at night. Payments payed on day X will be transferred on day X+1. Transfer might reach Merchant account later then MobilePay executes transfers. It depends on Merchant bank transfer times.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"REFERENCE NUMBER")),(0,r.kt)("td",{parentName:"tr",align:null},"Field  ",(0,r.kt)("inlineCode",{parentName:"td"},"PaymentReference")," is used as Reference number. If not filled, ",(0,r.kt)("inlineCode",{parentName:"td"},"InvoiceNumber")," will be used as reference."),(0,r.kt)("td",{parentName:"tr",align:null},"Reference number is generated by MobilePay. External Rules ",(0,r.kt)("a",{parentName:"td",href:"/docs/support/faq#what-is-payment-reference"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"HOW TO SET IT")),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant can set Instant transfers for each Invoice issuer in MobilePay portal."),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant can set Daily transfers for each Invoice issuer in MobilePay portal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BANK STATEMENT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PaymentReference")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"InvoiceNumber")," will be used in bank statement in fields: DK: Text field. FI: Text field and Reference no. field."),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay generated reference number will be used in bank statement in fields. DK: Text field. FI: Text field and Reference no. field.")))),(0,r.kt)("h2",{id:"reporting-api"},"Reporting api"),(0,r.kt)("p",null,"With the Reporting API, you can quickly find all information associated with each of your payment"),(0,r.kt)("p",null,"When using the Reporting API, you will be introduced to the term ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId")," is a GUID assigned to payment point."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"PaymentPointID"),(0,r.kt)("th",{parentName:"tr",align:null},"Obtained"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invoice"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InvoiceIssuerID")),(0,r.kt)("td",{parentName:"tr",align:null},"You can call ",(0,r.kt)("inlineCode",{parentName:"td"},"GET /api/v1/merchants/{merchantId}/invoiceissuers"),", which will return a list of all invoice issuers, associated with that merchant. Read more ",(0,r.kt)("a",{parentName:"td",href:"/docs/invoice/invoice-issuers"},"here"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ExternalTransactionID")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"ExternalTransactionID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invoice"),(0,r.kt)("td",{parentName:"tr",align:null},"The individual transactions will contain the same PaymentReference, that you have assigned, and that PaymentReference, will be returned through the API.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExternalTransactionId")," is ID that could be provided by merchant / payment integrator when initiating payments. In general, it can be used for correlating transactions between MobilePay and external (merchant/integrator) system."),(0,r.kt)("p",null,"Learn more about Reporting API ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting"},"here"),"."))}d.isMDXComponent=!0}}]);