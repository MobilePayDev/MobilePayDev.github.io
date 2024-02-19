"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6078],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,g=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},55613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),o=(n(96540),n(15680)),a=n(12831);const i={},s="OAuth access token",l={unversionedId:"reporting/authentication/open-id/open-id",id:"reporting/authentication/open-id/open-id",title:"OAuth access token",description:"As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf.",source:"@site/docs/reporting/authentication/open-id/open-id.mdx",sourceDirName:"reporting/authentication/open-id",slug:"/reporting/authentication/open-id/",permalink:"/docs/reporting/authentication/open-id/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"API keys",permalink:"/docs/reporting/authentication/api-key"},next:{title:"Authorize",permalink:"/docs/reporting/authentication/open-id/authorize"}},c={},p=[],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"oauth-access-token"},"OAuth access token"),(0,o.yg)("p",null,"As a developer, you can use MobilePay APIs to manage resources on behalf of merchants. The OAuth API lets you request specific permissions from MobilePay merchants to manage their resources and get access tokens to call APIs on their behalf."),(0,o.yg)("p",null,"Using the access tokens you receive using OAuth you can build applications that integrate with MobilePay."),(0,o.yg)(a.Ay,{mdxType:"OpenIdPage"}))}y.isMDXComponent=!0},12831:(e,t,n)=>{n.d(t,{Ay:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={toc:[{value:"Overview",id:"overview",level:2},{value:"OpenID Connect Libraries",id:"openid-connect-libraries",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Developer Tutorial",id:"developer-tutorial",level:2},{value:"Standard Hybrid Flow",id:"standard-hybrid-flow",level:2},{value:"Token process",id:"token-process",level:3}]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,o.yg)(i,(0,r.A)({},a,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"The diagram below illustrates the process of how to get consent from the merchant, so you can use the tokens.\nIf you follow it, you will quickly have gone through OpenID Connect, so you can start calling the API.\n",(0,o.yg)("img",{alt:"OpenId diagram",src:n(5376).A,width:"1546",height:"1134"})),(0,o.yg)("h2",{id:"openid-connect-libraries"},"OpenID Connect Libraries"),(0,o.yg)("p",null,"There are many OpenID Connect certified libraries for different development platforms. You just have to choose the one that suits you best.\nIn our experience, it takes longer time to write the code yourself compared to using a pre-written library. "),(0,o.yg)("p",null,"Find the libraries ",(0,o.yg)("a",{parentName:"p",href:"http://openid.net/developers/certified/"},"here"),".  "),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Given the security implications of getting the implementation correct, we encourage you to take advantage of a pre-written library. ")),(0,o.yg)("p",null,"Our other integrators have good experience with IdentityModel.OidcClient, especially if you code in .NET.\nYou do not need to think about code_challenge and code_verifier and etc. It might make your development a lot quicker to use a library.\nIt is your own choice and responsibility to choose the solution that fits you the best.  See library ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/IdentityModel/IdentityModel.OidcClient2/"},"here"),"."),(0,o.yg)("h2",{id:"endpoints"},"Endpoints"),(0,o.yg)("p",null,"Explanation of endpoints "),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Parameters"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"/authorize")),(0,o.yg)("td",{parentName:"tr",align:null},"Interact with the resouce owner and obtain an authorization grant")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"/token")),(0,o.yg)("td",{parentName:"tr",align:null},"Obtain an access and/or ID token by presenting an authorization grant or refresh token")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"/.well-known/openid-configuration\t")),(0,o.yg)("td",{parentName:"tr",align:null},"Returns OpenID Connect metadata related to the specific authorization server")))),(0,o.yg)("h2",{id:"limitations"},"Limitations"),(0,o.yg)("p",null,"We return unauthorized in several circumstances, including when an access token is revoked. The error message is purposefully vague\nto avoid leaking information to potential hackers. Therefore, you should assume that, if you receive this error message as a response,\nyour request is invalid, and you might want to refresh your access token using your refresh token. "),(0,o.yg)("h2",{id:"developer-tutorial"},"Developer Tutorial"),(0,o.yg)("p",null,"We've created a ",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/GUht9gG5uLs"},"video tutorial")," as well as ",(0,o.yg)("a",{target:"_blank",href:n(48827).A,title:"download"},"code examples"),", so you can get an overview how easy it is, while also utilizing the provided code examples."),(0,o.yg)("h2",{id:"standard-hybrid-flow"},"Standard Hybrid Flow"),(0,o.yg)("p",null,"You are going to integrate using a standard hybrid flow in OpenID Connect (OIDC).\n",(0,o.yg)("img",{alt:"OpenId flow",src:n(43255).A,width:"1088",height:"752"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The Hybrid Flow follows the following steps:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Client prepares an Authentication Request containing the desired request parameters"),(0,o.yg)("li",{parentName:"ol"},"Client sends the request to the Authorization Server."),(0,o.yg)("li",{parentName:"ol"},"Authorization Server Authenticates the End-User."),(0,o.yg)("li",{parentName:"ol"},"Authorization Server obtains End-User Consent/Authorization."),(0,o.yg)("li",{parentName:"ol"},"Authorization Server sends the End-User back to the Client with an Authorization Code "),(0,o.yg)("li",{parentName:"ol"},"Client requests a response using the Authorization Code at the Token Endpoint"),(0,o.yg)("li",{parentName:"ol"},"Client receives a response that contains an ID Token and Access Token in the response body."),(0,o.yg)("li",{parentName:"ol"},"Client validates the ID Token and retrieves the End-User's Subject Identifier.")),(0,o.yg)("h3",{id:"token-process"},"Token process"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Token process",src:n(12256).A,width:"1587",height:"256"})))}s.isMDXComponent=!0},48827:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/files/oidc-sample-deeacb5f42613ae31af91f2685cc5f04.zip"},5376:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/oidc-diagram-05065cf3641267dbf3773e9613480c82.png"},43255:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/oidc-flow-44b0e339484ccff6fb75394de514a916.png"},12256:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/oidc-token-process-116595fe817f650178a74bd6f5c9bb8c.png"}}]);