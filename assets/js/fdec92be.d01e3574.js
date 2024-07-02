"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5790:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={toc:[{value:"Overview",id:"overview",level:2},{value:"OpenID Connect Libraries",id:"openid-connect-libraries",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Developer Tutorial",id:"developer-tutorial",level:2},{value:"Standard Hybrid Flow",id:"standard-hybrid-flow",level:2},{value:"Token process",id:"token-process",level:3}]};function i(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The diagram below illustrates the process of how to get consent from the merchant, so you can use the tokens.\nIf you follow it, you will quickly have gone through OpenID Connect, so you can start calling the API.\n",(0,r.kt)("img",{alt:"OpenId diagram",src:n(19814).Z,width:"1546",height:"1134"})),(0,r.kt)("h2",{id:"openid-connect-libraries"},"OpenID Connect Libraries"),(0,r.kt)("p",null,"There are many OpenID Connect certified libraries for different development platforms. You just have to choose the one that suits you best.\nIn our experience, it takes longer time to write the code yourself compared to using a pre-written library. "),(0,r.kt)("p",null,"Find the libraries ",(0,r.kt)("a",{parentName:"p",href:"http://openid.net/developers/certified/"},"here"),".  "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Given the security implications of getting the implementation correct, we encourage you to take advantage of a pre-written library. ")),(0,r.kt)("p",null,"Our other integrators have good experience with IdentityModel.OidcClient, especially if you code in .NET.\nYou do not need to think about code_challenge and code_verifier and etc. It might make your development a lot quicker to use a library.\nIt is your own choice and responsibility to choose the solution that fits you the best.  See library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IdentityModel/IdentityModel.OidcClient2/"},"here"),"."),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"Explanation of endpoints "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/authorize")),(0,r.kt)("td",{parentName:"tr",align:null},"Interact with the resouce owner and obtain an authorization grant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/token")),(0,r.kt)("td",{parentName:"tr",align:null},"Obtain an access and/or ID token by presenting an authorization grant or refresh token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/.well-known/openid-configuration\t")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns OpenID Connect metadata related to the specific authorization server")))),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"We return unauthorized in several circumstances, including when an access token is revoked. The error message is purposefully vague\nto avoid leaking information to potential hackers. Therefore, you should assume that, if you receive this error message as a response,\nyour request is invalid, and you might want to refresh your access token using your refresh token. "),(0,r.kt)("h2",{id:"developer-tutorial"},"Developer Tutorial"),(0,r.kt)("p",null,"We've created a ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/GUht9gG5uLs"},"video tutorial")," as well as ",(0,r.kt)("a",{target:"_blank",href:n(67550).Z,title:"download"},"code examples"),", so you can get an overview how easy it is, while also utilizing the provided code examples."),(0,r.kt)("h2",{id:"standard-hybrid-flow"},"Standard Hybrid Flow"),(0,r.kt)("p",null,"You are going to integrate using a standard hybrid flow in OpenID Connect (OIDC).\n",(0,r.kt)("img",{alt:"OpenId flow",src:n(42961).Z,width:"1088",height:"752"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Hybrid Flow follows the following steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Client prepares an Authentication Request containing the desired request parameters"),(0,r.kt)("li",{parentName:"ol"},"Client sends the request to the Authorization Server."),(0,r.kt)("li",{parentName:"ol"},"Authorization Server Authenticates the End-User."),(0,r.kt)("li",{parentName:"ol"},"Authorization Server obtains End-User Consent/Authorization."),(0,r.kt)("li",{parentName:"ol"},"Authorization Server sends the End-User back to the Client with an Authorization Code "),(0,r.kt)("li",{parentName:"ol"},"Client requests a response using the Authorization Code at the Token Endpoint"),(0,r.kt)("li",{parentName:"ol"},"Client receives a response that contains an ID Token and Access Token in the response body."),(0,r.kt)("li",{parentName:"ol"},"Client validates the ID Token and retrieves the End-User's Subject Identifier.")),(0,r.kt)("h3",{id:"token-process"},"Token process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Token process",src:n(83403).Z,width:"1587",height:"256"})))}i.isMDXComponent=!0},18617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),a=n(5790);const i={},s="OAuth access token",l={unversionedId:"subscriptions/authentication/authentication",id:"subscriptions/authentication/authentication",title:"OAuth access token",description:"As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf.",source:"@site/docs/subscriptions/authentication/authentication.mdx",sourceDirName:"subscriptions/authentication",slug:"/subscriptions/authentication/",permalink:"/docs/subscriptions/authentication/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Production payments",permalink:"/docs/subscriptions/development-guide/production"},next:{title:"OAuth access token",permalink:"/docs/subscriptions/authentication/open-id/"}},c={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oauth-access-token"},"OAuth access token"),(0,r.kt)("p",null,"As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf."),(0,r.kt)("p",null,"Using the access tokens you receive using OAuth, you can build applications that integrate with MobilePay."),(0,r.kt)(a.ZP,{mdxType:"OpenIdPage"}))}d.isMDXComponent=!0},67550:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/oidc-sample-deeacb5f42613ae31af91f2685cc5f04.zip"},19814:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oidc-diagram-05065cf3641267dbf3773e9613480c82.png"},42961:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oidc-flow-44b0e339484ccff6fb75394de514a916.png"},83403:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/oidc-token-process-116595fe817f650178a74bd6f5c9bb8c.png"}}]);