"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905)),r=n(56810);const i={sidebar_position:2},s="Get code",p={unversionedId:"app-payments/authentication/open-id/code",id:"app-payments/authentication/open-id/code",title:"Get code",description:"",source:"@site/docs/app-payments/authentication/open-id/code.mdx",sourceDirName:"app-payments/authentication/open-id",slug:"/app-payments/authentication/open-id/code",permalink:"/docs/app-payments/authentication/open-id/code",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Authorize",permalink:"/docs/app-payments/authentication/open-id/authorize"},next:{title:"Tokens",permalink:"/docs/app-payments/authentication/open-id/tokens"}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-code"},"Get code"),(0,o.kt)(r.ZP,{mdxType:"OpenIdPage"}))}u.isMDXComponent=!0},56810:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Step 2: Get Code",id:"step-2-get-code",level:2},{value:"Request an Authorization code",id:"request-an-authorization-code",level:3}]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step-2-get-code"},"Step 2: Get Code"),(0,o.kt)("p",null,"You need to wait for the response by listening on the ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri")," and get the ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),". MobilePay will re-direct you back to your system also using the ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri"),". You only need to give consent once, unless you lose the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," it expires, or you loose the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," gained in the next step. The ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," has a lifetime of 5 minutes and can only be used once. Successive token requests with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," will result in error."),(0,o.kt)("h3",{id:"request-an-authorization-code"},"Request an Authorization code"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Sandbox"),(0,o.kt)("th",{parentName:"tr",align:null},"Production"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://sandprod-admin.mobilepay.dk/account/connect/authorize")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://admin.mobilepay.dk/account/connect/authorize"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FI"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://sandprod-admin.mobilepay.fi/account/connect/authorize")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://admin.mobilepay.fi/account/connect/authorize"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Redirecting the user")),(0,o.kt)("p",null,"To request ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", you must direct the user's browser to MobilePay's authorization endpoint. Once the request is made, one of the following two situations will occur:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the Merchant has not previously granted consent or has been manually revoked by the Merchant, the browser will be redirected to MobilePay authorization screen. When the Merchant completes the authorization process the browser is redirected to the ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri")," provided in the ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri")," query parameter."),(0,o.kt)("li",{parentName:"ul"},"If there is a valid existing permission grant from the user, the authorization screen is by-passed and the user is immediately redirected to the URL provided in the redirect_uri query parameter.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Succesful authorization"),"\nOn a successful authorization, the Authorization Server, and the merchant has given consent, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," will be returned to you together with the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". For security reasons, the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," has a short lifespan (5 minutes) and must be used within this time. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," expires you need to repeat all of the previous steps to request another."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://REDIRECT_URL#code=SPlxlOBeZQQYbYS6WxSblA&state=228eaa0b1a2819a77f055171edb7d9d6&id_token=eyJhbGciOiJSUzI1NiIslm...")),(0,o.kt)("p",null,"In the example, you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri"),", with a code as part of the URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://REDIRECT_URL/callback#code=BPPLN3Z4qCTvSNOy"),". "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Here you need to verify the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," (compare the value in the response to the one you sent to /connect/authorize) and save the code for fetching the tokens in the next request.\nSince it's possible for an attacker to craft a GET request that looks similar to this, an attacker could provide your application with junk authorization codes. You need to first verify that the state parameter matches this user's session so that you can be sure you initiated the request, and are only sending an authorization code that was intended for your client.\nDepending on how you've stored the state parameter (in a cookie, session, or some other way), verify that it matches the state that you originally included in step 1. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Verifying the Authorization Code grant")),(0,o.kt)("p",null,"After checking for all required parameters, the authorization server can continue verifying the other parts of the request. Before you accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," you should ensure that the value returned in the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," parameter matches the state value from your original authorization code request. This ensures that you are dealing with the real original user and not a malicious script that has somehow slipped into the middle of your authentication flow. The server then checks if the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," is valid, and has not expired. The service must then verify that the code provided in the request was issued to the client identified. If everything checks out, the service can generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and respond'"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Authorization request",src:n(12778).Z,width:"743",height:"580"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," is not the final token that you use to make calls to MobilePay with.  It is used in the next step of the flow to exchange for an actual ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token"),". This is an important step because it provides assurance directly from MobilePay to the Merchant that permission is being granted to the correct application."))}i.isMDXComponent=!0},12778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oicd-authorization-3da1b5d19cfd02301d2a80c78bb01d15.png"}}]);