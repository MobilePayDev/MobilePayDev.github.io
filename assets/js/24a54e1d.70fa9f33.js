"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(36589);const o={sidebar_position:3},l="Tokens",s={unversionedId:"reporting/authentication/open-id/tokens",id:"reporting/authentication/open-id/tokens",title:"Tokens",description:"",source:"@site/docs/reporting/authentication/open-id/tokens.mdx",sourceDirName:"reporting/authentication/open-id",slug:"/reporting/authentication/open-id/tokens",permalink:"/docs/reporting/authentication/open-id/tokens",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Get code",permalink:"/docs/reporting/authentication/open-id/code"},next:{title:"Refresh tokens",permalink:"/docs/reporting/authentication/open-id/refresh-tokens"}},c={},p=[],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tokens"},"Tokens"),(0,i.kt)(r.ZP,{mdxType:"OpenIdPage"}))}h.isMDXComponent=!0},36589:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={toc:[{value:"Step 3: Get tokens",id:"step-3-get-tokens",level:2},{value:"Exchange Authorization Code to tokens",id:"exchange-authorization-code-to-tokens",level:3},{value:"Token Request Validation",id:"token-request-validation",level:3},{value:"Best Practice",id:"best-practice",level:3}]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"step-3-get-tokens"},"Step 3: Get tokens"),(0,i.kt)("p",null,"You can find detailed information about token requests in the ",(0,i.kt)("a",{parentName:"p",href:"http://openid.net/specs/openid-connect-core-1_0.html#TokenRequest"},"OpenID Connect specification"),". If the resource owner grants the access request, the authorization server issues an authorization code and delivers it to the client. Once you got the Authorization Code, you can use it to get access and refresh tokens from the token endpoint. "),(0,i.kt)("h3",{id:"exchange-authorization-code-to-tokens"},"Exchange Authorization Code to tokens"),(0,i.kt)("p",null,"The next step is forming an HTTPS  POST request with the appropriate URI parameters to token endpoint."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Sandbox"),(0,i.kt)("th",{parentName:"tr",align:null},"Production"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://api.sandbox.mobilepay.dk/merchant-authentication-openidconnect/connect/token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://api.sandbox.mobilepay.dk/merchant-authentication-openidconnect/connect/token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/token"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Content-Type: application/x-www-form-urlencoded\nhost: api.sandbox.mobilepay.dk\n{\n&grant_type=authorization_code\n&code=e9c66660066fb5a7a54a9db8be02dacc477c9eacc5cced20c47d8a6d7fb659da\n&redirect_uri=https://myredirect_uri.com\n&code_verifier=0396f08effbfdc95e803fd2d855bf8743f9f03097b6aaf6864eaa4081ed3e172\n&client_id=some.test.clientfromzipfile\n&client_secret=mysecretfromzipfile\n}\n")),(0,i.kt)("p",null,"You need to use following parameters: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grant_type")),(0,i.kt)("td",{parentName:"tr",align:null},"Must be set to  (authorization should be typed with z, not s)"),(0,i.kt)("td",{parentName:"tr",align:null},'"authorization_code"'),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:null},'The "authorization code" that you received in the previous step'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_verifier")),(0,i.kt)("td",{parentName:"tr",align:null},"The code_verifier used to create code_challenge used to call /authorization"),(0,i.kt)("td",{parentName:"tr",align:null},"A cryptographically random string, that is used to correlate the authorization request to the token request. CodeVerifierMinLength = 43, CodeVerifierMaxLength = 128"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_id")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"client_id")," that you received by zip file."),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"client_id")," given in the zip file"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_secret")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"client_secret")," that you received by zip file"),(0,i.kt)("td",{parentName:"tr",align:null},"The client_secret given in the zip file"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirect_uri")),(0,i.kt)("td",{parentName:"tr",align:null},"The HTTPS endpoint on your server, that will receive the response from MobilePay. MUST match exactly with the one provided to /connect/authorize."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirect_uri")," as registered and whitelisted by ",(0,i.kt)("a",{parentName:"td",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("p",null,"With a successful response, you will get the following tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access token - The client uses an access token to make authenticated requests on behalf of the end user, by putting the token in the request authorization header. When an access token expires, it will no longer be valid, and you will get an error if you try to use it."),(0,i.kt)("li",{parentName:"ul"},'Refresh token - Used to refresh the access token. A refresh token is valid for 13 months - which is a "sliding lifetime" so every time a refresh tokens is used the lifetime is reset.  Refresh token are a substitute for long-lived tokens. ')),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Content-Type: application/json\n{ "id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI2ODk1MzJCMDIxN0QyMkE0NzEwNDE3QkMxMzI2QjkwQjRGQ0E0N0YiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJKb2xUS3dJWDBpcEhFRUY3d1RKcmtMVDhwSDgifQ.eyJuYmYiOjE1MjgzNzU3MDAsImV4cCI6MTUyODM3NjAwMCwiaXNzIjoiaHR0cHM6Ly9hcGkubW9iaWxlcGF5LmRrL21lcmNoYW50IiwiYXVkIjoiaW52b2ljZS50ZXN0Y2xpZW50Iiwibm9uY2UiOiIyOGIzMjU0NWJlZTY0MTAwYTZlOTJlZGRiYzEzZjU2MiIsImlhdCI6MTUyODM3NTcwMCwiYXRfaGFzaCI6IllGSGZaZDBRLWVKTF92czhvM2Z2MWciLCJzdWIiOiJiYTlkMWU0MS1lZWE1LTQ3ODUtYjJjOC00ZWViOTg0YTIxY2EiLCJhdXRoX3RpbWUiOjE1MjgzNzU2OTksImlkcCI6ImxvY2FsIiwiYW1yIjpbIlVzZXJFbnRlcmVkQ29kZSIsIlNlcnZlclByb3ZpZGVkS2V5Il19.AhUURQWWaD8ASmyWsyZnqzJ8dy5SrvA1v4wGiJB9Kt7GiqZZqWwUXzPRwqtKGvGgwPsDBju5OJQ791IWdKxTUIbxf8dUYRh90ncuHAvjY9jf3ma8orktDf_cSFpoZZLJM8c0ml0FgRwJTc7O0jbRVAMniklgZy1uvtro5b-6gXOfcYHX2XxSw_aDhb3dxC4_TKNF7uzGyuhbmmW7ElCwgw64zKUuAWQw7NKuf5dO2Pakv9PDJ3Isz2dYpXJd2q13cjL_NxfiOldA5PsPBAwfv8cBRjUup5j6pC6phjJ36z3mR4626boDLQgwN1Gl7Mj4gO0WV6eHq5E8tJ8l-6oCKA",\n\n"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI2ODk1MzJCMDIxN0QyMkE0NzEwNDE3QkMxMzI2QjkwQjRGQ0E0N0YiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJKb2xUS3dJWDBpcEhFRUY3d1RKcmtMVDhwSDgifQ.eyJuYmYiOjE1MjgzNzU3MDAsImV4cCI6MTUyODM3NjAwMCwiaXNzIjoiaHR0cHM6Ly9hcGkubW9iaWxlcGF5LmRrL21lcmNoYW50IiwiYXVkIjoiaHR0cHM6Ly9hcGkubW9iaWxlcGF5LmRrL21lcmNoYW50L3Jlc291cmNlcyIsImNsaWVudF9pZCI6Imludm9pY2UudGVzdGNsaWVudCIsInN1YiI6ImJhOWQxZTQxLWVlYTUtNDc4NS1iMmM4LTRlZWI5ODRhMjFjYSIsImF1dGhfdGltZSI6MTUyODM3NTY5OSwiaWRwIjoibG9jYWwiLCJzY29wZSI6WyJvcGVuaWQiLCJpbnZvaWNlIl0sImFtciI6WyJVc2VyRW50ZXJlZENvZGUiLCJTZXJ2ZXJQcm92aWRlZEtleSJdfQ.Mekt_sq6TiBUopacQafQImdo2EanvEKHwDblgrralgEij4AVj_xMVy71rp9c4Iv2WvNAI6iIStnyF7HQ25Kpu9hJp-4192AQMkk8hly7Cm4lRfRJfx0W3soOOCIGkTAvwvUXIdscNT1GOoaibMmiFiZHTlmDMSKhXFcRqg8JdWxjr4khMOByzVebvVS5qrFYpFgO0nAUaI7GB_gVyzNeQCmatTtvZR323-5sJILtIk3jbxHJpq4aTHWdCc44JQuXyUAYWZQPiMgom_tGSwCSuvF5la1hFRFNfDeh6qmiRH_RDF2Ado8-S5sCT-4R3_ns5gaTcC6UQvcSsQFxXqGY_w",\n\n"expires_in":300,\n\n"token_type":"Bearer",\n\n"refresh_token":"69a9393515b4a24d232cf0357463590817fd8f57049a7fe78ce02177880fe592" }\n')),(0,i.kt)("p",null,"You can use the JWT debugger at ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/"},"https://jwt.io/")," to inspect the tokens - it makes it much easier to read."),(0,i.kt)("p",null,"Access token and refresh tokens are issued to a merchant, and are only usable for the specific merchant. Therefore, if a single merchant (e.g. a publisher) has multiple subscription providers (different newspapers or magazines), you can use the same token for all of them, but for a different merchant (another publisher) you would need another token. You need to use the access token when calling the different endpoints in the APIs. And when the access token is expired, you use the refresh token to get a new set of tokens."),(0,i.kt)("p",null,"The Access Token is used to make authenticated calls to a secured API, while the ID Token contains user profile attributes represented in the form of claims. Both JWTs have an expiration date indicated by the exp claim. "),(0,i.kt)("h3",{id:"token-request-validation"},"Token Request Validation"),(0,i.kt)("p",null,"The Authorization Server validates the Token Request as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticate the Client if it was issued Client Credentials or if it uses another Client Authentication method"),(0,i.kt)("li",{parentName:"ul"},"Ensure the ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization_code")," was issued to the authenticated Client."),(0,i.kt)("li",{parentName:"ul"},"Verify that the ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization_code")," is valid."),(0,i.kt)("li",{parentName:"ul"},"If possible, verify that the ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization_code")," has not been previously used."),(0,i.kt)("li",{parentName:"ul"},"Ensure that the  ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," parameter value is identical to the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," parameter value that was included in the initial Authorization Request. If the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," parameter value is not present when there is only one registered ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri"),"  value, the Authorization Server returns an error (since the Client should have included the parameter) "),(0,i.kt)("li",{parentName:"ul"},"Verify that the Authorization Code used was issued in response to an OpenID Connect Authentication Request (so that an ID Token will be returned from the Token Endpoint).")),(0,i.kt)("p",null,"Access token and refresh tokens are issued by a merchant, and so is per merchant. Therefore, if a single merchant (a publisher let us say) has multiple subscription providers (different newspapers), you can use the same token for all of them, but for a different merchant (another publisher) you would need another token. You need to use the access token when calling the API. And when the access token is expired, you use the refresh token to get a new set of tokens. "),(0,i.kt)("h3",{id:"best-practice"},"Best Practice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not")," hard-code any tokens into your code, instead use a database to store tokens."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," the token immediately from production and back-ups, if you no longer have the need for the merchant token"),(0,i.kt)("li",{parentName:"ul"},"Validate TLS certificate chains: the client must validate the TLS certificate chain when making requests to protected resources. Failing to do so may enable DNS hijacking attacks to steal the token and gain unintended access"),(0,i.kt)("li",{parentName:"ul"},"Always use TLS (https): Clients must use TLS (https) or equivalent transport security when making requests with bearer tokens. "),(0,i.kt)("li",{parentName:"ul"},"Don't store bearer tokens in cookies: implementations that do store bearer tokens in cookies MUST take precautions against cross-site request forgery. "),(0,i.kt)("li",{parentName:"ul"},"Use a OpenID Connect library that has built-in token management "),(0,i.kt)("li",{parentName:"ul"},"Ensure that there is no way of exposing the merchant token (or the functionality of that token) to another user by accident. "),(0,i.kt)("li",{parentName:"ul"},"Be aware of the fact that access can be revoked at any time. Once consent is revoked, the integrator will not be able to use the access token or the refresh token. You will need to get consent again.  "),(0,i.kt)("li",{parentName:"ul"},"Protect all types of tokens and secrets. Keep them secret. Keep them safe. It is your responsibility to keep them secret "),(0,i.kt)("li",{parentName:"ul"},"Adhere to the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"principle of least privilege"),". Applications should never request more than the minimum permissions needed to function properly. "),(0,i.kt)("li",{parentName:"ul"},"We recommend that after you complete local development, remove localhost and related domains from your configuration list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not send us your tokens.")," "),(0,i.kt)("li",{parentName:"ul"},"The tokens should never be exposed. "),(0,i.kt)("li",{parentName:"ul"},"We recommend that you use middleware or one of the existing open source third-party libraries to parse and validate JWTs. At JWT.io, you can find libraries for various platforms and languages, such as .NET, Python, Java, Ruby, Objective-C, Swift, and PHP.")))}l.isMDXComponent=!0}}]);