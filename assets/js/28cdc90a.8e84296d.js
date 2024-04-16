"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6961],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=p(n),c=r,m=y["".concat(l,".").concat(c)]||y[c]||d[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78743:(e,t,n)=>{n.d(t,{Ay:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(i,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The new platform is already launched in Finland and we are excitied to launch it in Denmark on ",(0,r.yg)("strong",{parentName:"p"},"March 12th"),". We have gained great experience through the Finnish launch and want to highlight three main topics we suggest you to be aware of:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ensure that  you have ",(0,r.yg)("em",{parentName:"li"},"whitelisted our ",(0,r.yg)("a",{parentName:"em",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"new servers"))," to ensure that requests and callbacks are successful.   "),(0,r.yg)("li",{parentName:"ul"},"Once the new platform is launched ",(0,r.yg)("em",{parentName:"li"},"all users must upgrade their app"),". This is a force upgrade of the app and must be completed in order to access MobilePay. This means that a lot of users will update the app on the 12th and the following days causing their user journy to be prolounged. This may result in expired payments while the user updates the app. "),(0,r.yg)("li",{parentName:"ul"},"Operational issues will not be sent to the old operational mail lists but instead supplied through our ",(0,r.yg)("em",{parentName:"li"},"new ",(0,r.yg)("a",{parentName:"em",href:"https://developer.vippsmobilepay.com/docs/developer-resources/status-pages/"},"operational status pages")),". Ensure to sign up for the updates through the new pages.")))}s.isMDXComponent=!0},11526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>P,default:()=>O,frontMatter:()=>N,metadata:()=>x,toc:()=>k});var a=n(58168),r=(n(96540),n(15680));const o={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(i,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Sandboxes are isolated from your production organisation, so operations that you perform in the MobilePay sandbox don\u2019t affect your production organisation. The production version of the API provides access to the real customer data, i.e. you will be able to initiate real payments. Once you go to test in production, you will use another basepath, the live MobilePay app and a real MobilePay user."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Sandbox"),(0,r.yg)("th",{parentName:"tr",align:null},"Production"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"User"),(0,r.yg)("td",{parentName:"tr",align:null},"We have test users available. Visit the product sites to find information about test users"),(0,r.yg)("td",{parentName:"tr",align:null},"A real MobilePay user, that has downloaded the MobilePay app on their smartphone. We ",(0,r.yg)("strong",{parentName:"td"},"do not")," have test user that you can use in production.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Payment limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Same as in production. Read here: ",(0,r.yg)("a",{parentName:"td",href:"https://www.mobilepay.dk/hjaelp/mobilepay-til-private/fakta/hvor-meget-kan-jeg-overfoere-med-mobilepay"},"DK")," - ",(0,r.yg)("a",{parentName:"td",href:"https://www.mobilepay.fi/asiakastuki/mobilepay-kayttajille/tietoa-mobilepaysta/kuinka-paljon-voin-siirtaa-mobilepaylla#scroll"},"FI")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Functionality"),(0,r.yg)("td",{parentName:"tr",align:null},"Sandbox processes API calls in exactly the same manner as the production environment, except you are not dealing with real money and transactions."),(0,r.yg)("td",{parentName:"tr",align:null},"Only real transaction can be completed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.sandbox.mobilepay.dk"},"https://api.sandbox.mobilepay.dk")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.mobilepay.dk"},"https://api.mobilepay.dk"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mobilepay Portal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://sandprod-admin.mobilepay.dk"},"https://sandprod-admin.mobilepay.dk")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://admin.mobilepay.dk"},"https://admin.mobilepay.dk"))))))}s.isMDXComponent=!0;const l={toc:[]},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Once you have finished testing in sandbox and the verification, you can verify that the set-up is also working in production. This is especially important with regards to using the right redirect URI's in production, and using the right credentials for OpenID Connect in production. You need to update all URLs and credentials to production values. "),(0,r.yg)("p",null,"Once you've done so, there are two possibilities, and you can choose the option, that fits you the best. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Test with your own customer")),(0,r.yg)("p",null,"You can use one of your existing customers as pilot merchant. In order to do so they need to have an active MobilePay agreement and chosen the decired MobilePay product. "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Test with your own account")),(0,r.yg)("p",null,"If you do not want to test with your customer, you have the possibility to order the API product yourself, so you have a registration in production. In this case, you'll be marked as an integrator, and will only pay for the transactions, and not the monthly fee."))}u.isMDXComponent=!0;const y={toc:[]},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The behavior of the API when you are in sandbox mode is the same as when your app is live, but comes with the following restrictions. The users in the Sandbox have a daily limit at 3.000 DK. It is recommended to send Payment Requests below 10 DKK or 2 EUR. Be sure to test with reasonable amounts and only run a limited number of transactions."))}c.isMDXComponent=!0;const m={toc:[]},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"CorrelationId is a unique identifier value that is set as header for each API request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"header 'correlationid: REPLACE_THIS_VALUE'\n")),(0,r.yg)("p",null,"The id serves as reference for the particular API request and makes API support more efficient. If you are having issue with an API request, please include the correlationId. We recommend to use a random GUID as the correlationId."))}h.isMDXComponent=!0;const f={toc:[]},b="wrapper";function w(e){let{components:t,...n}=e;return(0,r.yg)(b,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you have one of our MobilePay products, then you can expect to see a Payment Reference in your bank account. Payment reference is a reference that is assigned to payment and is visible in bank account statement when payment is completed and received by your bank. It is usually used for tracking and verifying which payments were received to the bank account (e.g. transfers)."),(0,r.yg)("p",null,"MobilePay specific reference:\nPCRRRRRRRRJJJDDMMYYX"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PC"),"\nProduct code - Products need to identify the product, code is then put when generating the reference."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"01 = POS"),(0,r.yg)("li",{parentName:"ul"},"02 = MyShop"),(0,r.yg)("li",{parentName:"ul"},"03 = Subscriptions"),(0,r.yg)("li",{parentName:"ul"},"04 = Invoice"),(0,r.yg)("li",{parentName:"ul"},"05 = AppSwitch"),(0,r.yg)("li",{parentName:"ul"},"06 = Online")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"RRRRRRRR"),"\nExternal Payment Point ID (length 8). Myshop number, Pos LocationID etc. External Payment PointID will be sent in the payload from the product.The external payment point ID must be unique within the Merchant for the payment point. For Subscription and Invoice this will consist of 8 zeros (00000000)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"JJJ"),"\nRunning number (length 3)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"DDMMYY"),"\nDate (lenght 6)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"X"),"\nCheck digit (length 1)"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Example: 03000000000011602193 - which indicates Subscriptions payments received 16.02.2019")))}w.isMDXComponent=!0;var v=n(78743);const N={},P="Frequently asked questions",x={unversionedId:"support/faq",id:"support/faq",title:"Frequently asked questions",description:"What are the MobilePay IP addresses?",source:"@site/docs/support/faq.mdx",sourceDirName:"support",slug:"/support/faq",permalink:"/docs/support/faq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"supportSidebar",previous:{title:"Developer Support",permalink:"/docs/support/"}},I={},k=[{value:"What are the MobilePay IP addresses?",id:"what-are-the-mobilepay-ip-addresses",level:2}],M={toc:k},D="wrapper";function O(e){let{components:t,...n}=e;return(0,r.yg)(D,(0,a.A)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.yg)("admonition",{title:"Prepare for launch",type:"info"},(0,r.yg)(v.Ay,{mdxType:"Launch"})),(0,r.yg)("h2",{id:"what-are-the-mobilepay-ip-addresses"},"What are the MobilePay IP addresses?"),(0,r.yg)("p",null,"Note that MobilePay does not require merchants to whitelist specific IP addresses to access REST APIs.\nWe utilize different ranges for the APIs and callbacks as well as for the different environments. We cannot supply specific IPs because we may change IPs within the listed ranges and therefore recommend to whitelist the entire range."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"API requests"),(0,r.yg)("br",null),"\nProduction: 20.238.5.64/28 and 4.245.40.224/28",(0,r.yg)("br",null),"\nSandbox: 4.175.250.192/28"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Callbacks")," ",(0,r.yg)("br",null),"\nProduction and sandbox:\n212.93.32.0/19 and 185.218.228.0/22 "),(0,r.yg)("admonition",{title:"Important info",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"We are in the process of consolidating our platform with Vipps to create a new shared platform. For the products that are using facades (",(0,r.yg)("a",{parentName:"p",href:"/docs/subscriptions/transition-to-one-platform"},"Subscriptions"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/app-payments/transition-to-one-platform"},"App Payments")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/online/transition-to-one-platform"},"Online")," ) please note that we will use new servers for all callbacks. Therefore you must adhere to our new ",(0,r.yg)("a",{parentName:"p",href:"https://developer.vippsmobilepay.com/docs/developer-resources/servers/"},"server guidelines"),".  ")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Port"),": 443 "),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"What is the difference between Sandbox and Production"),(0,r.yg)("div",null,(0,r.yg)(s,{mdxType:"Difference"}))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"How do I, as an Integrator test in production?"),(0,r.yg)("div",null,(0,r.yg)(u,{mdxType:"ProductionTest"}))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"Payment limit in Sandbox"),(0,r.yg)("div",null,(0,r.yg)(c,{mdxType:"PaymentLimit"}))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"What is correlationId?"),(0,r.yg)("div",null,(0,r.yg)(h,{mdxType:"CorrelationId"}))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"What is payment reference"),(0,r.yg)("div",null,(0,r.yg)(w,{mdxType:"PaymentReference"}))))}O.isMDXComponent=!0}}]);