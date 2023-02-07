"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),i=n(56810);const r={sidebar_position:2},s="Get code",c={unversionedId:"invoice/authentication/open-id/code",id:"invoice/authentication/open-id/code",title:"Get code",description:"",source:"@site/docs/invoice/authentication/open-id/code.mdx",sourceDirName:"invoice/authentication/open-id",slug:"/invoice/authentication/open-id/code",permalink:"/docs/invoice/authentication/open-id/code",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Authorize",permalink:"/docs/invoice/authentication/open-id/authorize"},next:{title:"Tokens",permalink:"/docs/invoice/authentication/open-id/tokens"}},l={},d=[],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-code"},"Get code"),(0,a.kt)(i.ZP,{mdxType:"OpenIdPage"}))}h.isMDXComponent=!0},56810:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={toc:[{value:"Step 2: Get Code",id:"step-2-get-code",level:2},{value:"Request an Authorization code",id:"request-an-authorization-code",level:3}]},r="wrapper";function s(e){let{components:t,...s}=e;return(0,a.kt)(r,(0,o.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"step-2-get-code"},"Step 2: Get Code"),(0,a.kt)("p",null,"You need to wait for the response by listening on the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri")," and get the ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),". MobilePay will re-direct you back to your system also using the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri"),". You only need to give consent once, unless you lose the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," it expires, or you loose the ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," gained in the next step. The ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," has a lifetime of 5 minutes and can only be used once. Successive token requests with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," will result in error."),(0,a.kt)("h3",{id:"request-an-authorization-code"},"Request an Authorization code"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Sandbox"),(0,a.kt)("th",{parentName:"tr",align:null},"Production"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DK"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://sandprod-admin.mobilepay.dk/account/connect/authorize")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://admin.mobilepay.dk/account/connect/authorize"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FI"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://sandprod-admin.mobilepay.fi/account/connect/authorize")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://admin.mobilepay.fi/account/connect/authorize"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Redirecting the user")),(0,a.kt)("p",null,"To request ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),", you must direct the user's browser to MobilePay's authorization endpoint. Once the request is made, one of the following two situations will occur:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the Merchant has not previously granted consent or has been manually revoked by the Merchant, the browser will be redirected to MobilePay authorization screen. When the Merchant completes the authorization process the browser is redirected to the ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect_uri")," provided in the ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect_uri")," query parameter."),(0,a.kt)("li",{parentName:"ul"},"If there is a valid existing permission grant from the user, the authorization screen is by-passed and the user is immediately redirected to the URL provided in the redirect_uri query parameter.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Succesful authorization"),"\nOn a successful authorization, the Authorization Server, and the merchant has given consent, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," will be returned to you together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". For security reasons, the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," has a short lifespan (5 minutes) and must be used within this time. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," expires you need to repeat all of the previous steps to request another."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://REDIRECT_URL#code=SPlxlOBeZQQYbYS6WxSblA&state=228eaa0b1a2819a77f055171edb7d9d6&id_token=eyJhbGciOiJSUzI1NiIslm...")),(0,a.kt)("p",null,"In the example, you can see the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect_uri"),", with a code as part of the URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://REDIRECT_URL/callback#code=BPPLN3Z4qCTvSNOy"),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Here you need to verify the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," (compare the value in the response to the one you sent to /connect/authorize) and save the code for fetching the tokens in the next request.\nSince it's possible for an attacker to craft a GET request that looks similar to this, an attacker could provide your application with junk authorization codes. You need to first verify that the state parameter matches this user's session so that you can be sure you initiated the request, and are only sending an authorization code that was intended for your client.\nDepending on how you've stored the state parameter (in a cookie, session, or some other way), verify that it matches the state that you originally included in step 1. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Verifying the Authorization Code grant")),(0,a.kt)("p",null,"After checking for all required parameters, the authorization server can continue verifying the other parts of the request. Before you accept the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," you should ensure that the value returned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," parameter matches the state value from your original authorization code request. This ensures that you are dealing with the real original user and not a malicious script that has somehow slipped into the middle of your authentication flow. The server then checks if the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," is valid, and has not expired. The service must then verify that the code provided in the request was issued to the client identified. If everything checks out, the service can generate an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and respond'"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authorization request",src:n(12778).Z,width:"743",height:"580"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," is not the final token that you use to make calls to MobilePay with.  It is used in the next step of the flow to exchange for an actual ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token"),". This is an important step because it provides assurance directly from MobilePay to the Merchant that permission is being granted to the correct application."))}s.isMDXComponent=!0},12778:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oicd-authorization-3da1b5d19cfd02301d2a80c78bb01d15.png"}}]);