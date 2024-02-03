"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5792],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),y=r,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(45072),r=(t(11504),t(95788));const i={sidebar_position:3},o="Invoice Issuers",s={unversionedId:"invoice/invoice-issuers",id:"invoice/invoice-issuers",title:"Invoice Issuers",description:"Businesses that need to send invoices to their customers commonly use MobilePay invoices. For example, a consulting business might send invoices for the time and resources that each consultation uses. Our MobilePay Invoice API enables you to send Invoice directly into the MobilePay app or use MobilePay as a payment method in an existing Invoice flow (self serve environments, e-mails and etc.)",source:"@site/docs/invoice/invoice-issuers.md",sourceDirName:"invoice",slug:"/invoice/invoice-issuers",permalink:"/docs/invoice/invoice-issuers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Refresh tokens",permalink:"/docs/invoice/authentication/open-id/refresh-tokens"},next:{title:"API Endpoint Reference",permalink:"/docs/invoice/api-endpoint-reference"}},l={},d=[{value:"Get an invoice issuer",id:"get-an-invoice-issuer",level:2},{value:"Invoice issuer statuses",id:"invoice-issuer-statuses",level:3},{value:"Get your merchant id",id:"get-your-merchant-id",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"invoice-issuers"},"Invoice Issuers"),(0,r.yg)("p",null,"Businesses that need to send invoices to their customers commonly use MobilePay invoices. For example, a consulting business might send invoices for the time and resources that each consultation uses. Our MobilePay Invoice API enables you to send Invoice directly into the MobilePay app or use MobilePay as a payment method in an existing Invoice flow (self serve environments, e-mails and etc.)"),(0,r.yg)("h2",{id:"get-an-invoice-issuer"},"Get an invoice issuer"),(0,r.yg)("p",null,"Invoice Issuer represents merchant's company information. Before using ",(0,r.yg)("em",{parentName:"p"},"MobilePay Invoices")," merchant must have at least one invoice issuer which can be created via ",(0,r.yg)("a",{parentName:"p",href:"https://admin.mobilepay.dk"},"MobilePay Portal Denmark")," or ",(0,r.yg)("a",{parentName:"p",href:"https://admin.mobilepay.fi"},"Finland"),". Each invoice issuer contains its own address information, account data and logo. The merchant is the customer company and the Invoice Issuer is the actual service provider name under which they create invoices"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"GET /api/v1/merchants/{merchantId}/invoiceissuers\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'HTTP 200 OK\n\n{\n  "InvoiceIssuers": [\n    {\n      "Id": "6a33d969-fa86-44af-a23b-731da0e4d50d",\n      "Name": "MyAwesomeStore",\n      "AccountType": "Account",\n      "Status": "enabled",\n      "Address": "Paradis\xe6blevej 13",\n      "City": "Andeby",\n      "ZipCode": "1234"\n    }\n  ]\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Id")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"guid")),(0,r.yg)("td",{parentName:"tr",align:null},"Id of an invoice issuer associated with your ",(0,r.yg)("inlineCode",{parentName:"td"},"merchantId"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Name")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Your invoice issuer's name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AccountType")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The type of account associated with an invoice issuer. At the moment there's only one type ",(0,r.yg)("inlineCode",{parentName:"td"},"Account"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Status")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer status.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Address")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer address line.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"City")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer city.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZipCode")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer Zip code.")))),(0,r.yg)("h3",{id:"invoice-issuer-statuses"},"Invoice issuer statuses"),(0,r.yg)("p",null,"There are three invoice issuer ",(0,r.yg)("inlineCode",{parentName:"p"},"Status")," values that can be explained in following order:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pending")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer was created and is pending for an approval.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"Issuer is active & ready to be used.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabled")),(0,r.yg)("td",{parentName:"tr",align:null},"Merchant has disabled invoice issuer.")))),(0,r.yg)("h2",{id:"get-your-merchant-id"},"Get your merchant id"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"MerchantId")," is a unique identifier of a merchant in our system. After you retrieve an access token from OpenID flow use the following endpoint to retrieve your ",(0,r.yg)("inlineCode",{parentName:"p"},"MerchantId"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"GET /api/v1/merchants/me\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'HTTP 200 OK\n{\n  "MerchantId": "e3465d75-8fd4-4ea4-8881-304c464f1d24"\n}\n')))}u.isMDXComponent=!0}}]);