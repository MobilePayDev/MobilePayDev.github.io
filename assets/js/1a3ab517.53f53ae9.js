"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(85075);const o={sidebar_position:1},l="Authorize",s={unversionedId:"reporting/authentication/open-id/authorize",id:"reporting/authentication/open-id/authorize",title:"Authorize",description:"",source:"@site/docs/reporting/authentication/open-id/authorize.mdx",sourceDirName:"reporting/authentication/open-id",slug:"/reporting/authentication/open-id/authorize",permalink:"/docs/reporting/authentication/open-id/authorize",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"OAuth access token",permalink:"/docs/reporting/authentication/open-id/"},next:{title:"Get code",permalink:"/docs/reporting/authentication/open-id/code"}},d={},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorize"},"Authorize"),(0,i.kt)(r.ZP,{mdxType:"OpenIdPage"}))}h.isMDXComponent=!0},85075:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={toc:[{value:"Step 1: Initiate consent",id:"step-1-initiate-consent",level:2},{value:"OpenID Connect Discovery",id:"openid-connect-discovery",level:2},{value:"OpenID Connect Discovery",id:"openid-connect-discovery-1",level:3},{value:"Call /authorize to initiate user login and consent",id:"call-authorize-to-initiate-user-login-and-consent",level:2},{value:"Explanation of mandatory parameters",id:"explanation-of-mandatory-parameters",level:3},{value:"Consent screen",id:"consent-screen",level:3},{value:"Unauthorized and error response",id:"unauthorized-and-error-response",level:3}]},o="wrapper";function l(e){let{components:t,...l}=e;return(0,i.kt)(o,(0,a.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"step-1-initiate-consent"},"Step 1: Initiate consent"),(0,i.kt)("p",null,"The 1st step is forming an authorization request with the appropriate URI parameters at the authorization endpoint"),(0,i.kt)("p",null,"You can find detailed information about this request in the OpenID Connect specification ",(0,i.kt)("a",{parentName:"p",href:"http://openid.net/specs/openid-connect-core-1_0.html#AuthRequest"},"here"),"\nSpecification of parameters are found ",(0,i.kt)("a",{parentName:"p",href:"http://openid.net/specs/openid-connect-core-1_0.html#HybridAuthRequest"},"here")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sandbox Authorization Endpoint DK: ",(0,i.kt)("a",{parentName:"li",href:"https://sandprod-admin.mobilepay.dk/account/connect/authorize"},"https://sandprod-admin.mobilepay.dk/account/connect/authorize")),(0,i.kt)("li",{parentName:"ul"},"Sandbox Authorization Endpoint FI: ",(0,i.kt)("a",{parentName:"li",href:"https://sandprod-admin.mobilepay.fi/account/connect/authorize"},"https://sandprod-admin.mobilepay.fi/account/connect/authorize")),(0,i.kt)("li",{parentName:"ul"},"Production Authorization Endpoint DK: ",(0,i.kt)("a",{parentName:"li",href:"https://admin.mobilepay.dk/account/connect/authorize"},"https://admin.mobilepay.dk/account/connect/authorize")),(0,i.kt)("li",{parentName:"ul"},"Production Authorization Endpoint FI: ",(0,i.kt)("a",{parentName:"li",href:"https://admin.mobilepay.fi/account/connect/authorize"},"https://admin.mobilepay.fi/account/connect/authorize"))),(0,i.kt)("h2",{id:"openid-connect-discovery"},"OpenID Connect Discovery"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The OpenID Connect protocol requires the use of multiple endpoints for authenticating users, and for requesting resources including tokens. "),(0,i.kt)("li",{parentName:"ul"},'To simplify implementations and increase simplicity, OIDC allows the use of a "Discovery document" ',(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery"),", where an OpenID server publishes its metadata at a well-known URL, typically\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://admin.mobilepay.dk/account/.well-known/openid-configuration")),(0,i.kt)("li",{parentName:"ul"},"This URL returns a JSON listing of the OpenID/OAuth endpoints, supported scopes and claims, public keys used to sign the tokens, and other details. The clients can use this information to construct a request to the OpenID server. The field names and values are defined in the ",(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery Specification"),"."),(0,i.kt)("li",{parentName:"ul"},"Find the links for the discovery document below. It will be used by you to download the necessary configuration data.  This should not be attempted without a solid grasp of the OAuth2 and Open ID Connect standards. All endpoints needed for integration can be found in our openid connect discovery endpoint. These endpoints should be fetched dynamically by your application, since they are prone for change."),(0,i.kt)("li",{parentName:"ul"},"The metadata is a simple JavaScript Object Notation (JSON) document.  ")),(0,i.kt)("p",null,"Here is an example of data returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{ \n"issuer": "https://api.mobilepay.dk/merchant",\n"jwks_uri": "https://api.mobilepay.dk/merchant-authentication-openidconnect/.well-known/openid-configuration/jwks",\n"authorization_endpoint":"https://admin.mobilepay.dk/account/connect/authorize",\n"token_endpoint":"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/token",\n"end_session_endpoint":"https://admin.mobilepay.dk/account/connect/endsession",\n"introspection_endpoint":"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/introspect",\n"frontchannel_logout_supported":true,\n"frontchannel_logout_session_supported":true,\n}\n')),(0,i.kt)("h3",{id:"openid-connect-discovery-1"},"OpenID Connect Discovery"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment"),(0,i.kt)("th",{parentName:"tr",align:null},"Link to configuration data"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sandbox"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://sandprod-admin.mobilepay.dk/account/.well-known/openid-configuration"},"Denmark")," - ",(0,i.kt)("a",{parentName:"td",href:"https://sandprod-admin.mobilepay.fi/account/.well-known/openid-configuration"},"Finland"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Production"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://admin.mobilepay.dk/account/.well-known/openid-configuration"},"Denmark")," - ",(0,i.kt)("a",{parentName:"td",href:"https://admin.mobilepay.fi/account/.well-known/openid-configuration"},"Finland"))))),(0,i.kt)("h2",{id:"call-authorize-to-initiate-user-login-and-consent"},"Call /authorize to initiate user login and consent"),(0,i.kt)("p",null,"Before a client can access a protected resource, it must first obtain an authorization grant from the resource owner, and then exchange the authorization grant for an access token. You should retrieve the base URI from the Discovery document using the authorization endpoint. The next step is forming an authorization request with the appropriate URI parameters at the authorization endpoint, which can be done by ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP GET")," - using query string serialization as described ",(0,i.kt)("a",{parentName:"p",href:"http://openid.net/specs/openid-connect-core-1_0.html#QuerySerialization"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sample raw request using GET"',title:'"Sample',raw:!0,request:!0,using:!0,'GET"':!0},"GET https://sandprod-admin.mobilepay.dk/account/connect/authorize\n{\n&response_type=code%20id_token\n&response_mode=form_post\n&client_id=some.test.client.usually.your.company.name.in.small.letters\n&redirect_uri=https%3A%2F%2Fmyredirect%40uri.com\n&scope=openid%20invoice%20subscriptions%20offline_access%20transactionreporting\n&state=228eaa0b1a2819a77f055171edb7d9d6\n&code_challenge=Ge5p0wzlM_2SrxcCy9WAplP_CupB2xu2uiwFq_BBUmY\n&code_challenge_method=S256\n&nonce=28b32545bee64100a6e92eddbc13f562\n&merchant_vat=DK12345678\n}\n")),(0,i.kt)("h3",{id:"explanation-of-mandatory-parameters"},"Explanation of mandatory parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"response_type")),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Response Type value that determines the authorization processing flow to be used, including what parameters are returned from the endpoints used."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code id_token")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"response_mode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_post")," sends the token response as a form post instead of a fragment encoded redirect . In this mode, Authorization Response parameters are encoded as HTML form values that are auto-submitted in the User Agent, and thus are transmitted via the HTTP POST method to the Client, with the result parameters being encoded in the body using the application/x-www-form-urlencoded format. ",(0,i.kt)("inlineCode",{parentName:"td"},"fragment")," - Parameters are encoded in the URL fragment added to the redirect_uri when redirecting back to the client."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"form_post")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"fragment")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_id")),(0,i.kt)("td",{parentName:"tr",align:null},"The client_id that you received by zip file. This is not the same as the MerchantID or the e-mail log-in to ",(0,i.kt)("a",{parentName:"td",href:"https://sandprod-admin.mobilepay.dk"},"https://sandprod-admin.mobilepay.dk")),(0,i.kt)("td",{parentName:"tr",align:null},"Customer redirect uri as registered by ",(0,i.kt)("a",{parentName:"td",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:null},"A space list of scopes. For this flow, the full list of possible scopes is ",(0,i.kt)("inlineCode",{parentName:"td"},"openid offline_access subscriptions invoice transactionreporting merchantpayments webhooks"),". The scopes ",(0,i.kt)("inlineCode",{parentName:"td"},"openid offline_access")," is required, the rest is product specific. It is a space-separated list."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"openid offline_access subscriptions invoice transactionreporting merchantpayments webhooks")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"State is used to maintain state between the request and the callback. You generate a new value for each request, and we return it in response for you to validate."),(0,i.kt)("td",{parentName:"tr",align:null},"Unique random value"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge")),(0,i.kt)("td",{parentName:"tr",align:null},"A challenge for PKCE. The challenge is verified in the access token request, it will be used in combination with the next call. Read more ",(0,i.kt)("a",{parentName:"td",href:"https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce#2-create-a-code-challenge"},"here")),(0,i.kt)("td",{parentName:"tr",align:null},"The value should be a SHA-256 hash of a crypto random byte array."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge_method")),(0,i.kt)("td",{parentName:"tr",align:null},"The method that was used to derive code challenge."),(0,i.kt)("td",{parentName:"tr",align:null},"S256"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nonce")),(0,i.kt)("td",{parentName:"tr",align:null},"String value used to associate a client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the authentication request to the ID Token. Sufficient entropy must be present in the nonce values used to prevent attackers from guessing values. Should be a new random value for each request. We invalidate a nonce once our back-end has received it, so next time we get a request with the same nonce, we then reject it. Read more ",(0,i.kt)("a",{parentName:"td",href:"http://openid.net/specs/openid-connect-core-1_0.html#NonceNotes"},"here")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique random value"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"merchant_vat")),(0,i.kt)("td",{parentName:"tr",align:null},"A string value equal to the VAT number for the merchant. This is used to identify which merchant that should be given consent to if a user has multiple merchants assigned. We support FI and DK VAT numbers. The VAT number consists of country prefix (either FI or DK) and 8 digits. Note: merchant_vat is required when granting consent to a specific merchant"),(0,i.kt)("td",{parentName:"tr",align:null},"Country prefix + VAT number of merchant"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By using the value that you used when creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"code_challenge"),", we have a way for MobilePay to verify the call. You execute the Authorization call once, and you also make the ",(0,i.kt)("inlineCode",{parentName:"p"},"code_challenge")," once with one ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier"),". But you need to save your ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier")," so you can use it every time you utilize your ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),". This means that you\u2019ll not need to go through the Authorize call again, but that you simply need to utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier")," from the the original authorization call. ")),(0,i.kt)("h3",{id:"consent-screen"},"Consent screen"),(0,i.kt)("p",null,"When the Merchant is logged in, the MobilePay Portal presents the Merchant with a consent screen that describes the information that the Merchant is granting to. For example, when the user wants to have MobilePay Subscriptions, the consent screen asks to give access to Subscriptions. The request access to this information using the scope parameter which you include in the authorize request. You can also use scopes to request access to other MobilePay API's. When the Merchant clicks yes (gives consent), the Merchant is redirected back to the integrators website/environment)."),(0,i.kt)("p",null,"Integrator has been provided with a test merchant to our ",(0,i.kt)("a",{parentName:"p",href:"https://sandprod-admin.mobilepay.dk/"},"MobilePay Portal - Sandbox"),". Integrator should use the e-mail and password provided in the invitational e-mail to log-on to it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sandprod admin screen",src:n(577).Z,width:"1754",height:"813"})),(0,i.kt)("img",{src:n(36070).Z,alt:"PoS confirmation screen",width:"700"}),(0,i.kt)("p",null,"Once the user authenticates successfully, the application will be redirected to the redirect_uri, with a code as part of the URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://redirect_url#code=xxx")," You can exchange this code with an Access Token using the token endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.sandbox.mobilepay.dk/merchant-authentication-openidconnect/connect/token")," "),(0,i.kt)("h3",{id:"unauthorized-and-error-response"},"Unauthorized and error response"),(0,i.kt)("p",null,"You might see this page when trying to obtain an ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization_code"),". If you see this page, it is most often due to an invalid request. The request is missing a required parameter, includes an invalid parameter value or a redirect_uri, that hasn't been whitelisted. MobilePay does not provide additional information, used to assist the client developer with additional information about the error, in order to mitigate against cross-site request forgery. ",(0,i.kt)("strong",{parentName:"p"},"Ensure that all required parameters are present and valid.")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sandprod consent screen",src:n(21490).Z,width:"1236",height:"587"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Error"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalid_client"),(0,i.kt)("td",{parentName:"tr",align:null},"Client authentication failed, such as if the request contains an invalid client ID or secret.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unauthorized_client"),(0,i.kt)("td",{parentName:"tr",align:null},"This client is not authorized to use the requested grant type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalid_grant"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization code is invalid or expired. This is also the error you would return if the redirect URL given in the authorization grant does not match the URL provided in this access token request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalid_scope"),(0,i.kt)("td",{parentName:"tr",align:null},"This error indicates an invalid scope value in the request")))))}l.isMDXComponent=!0},36070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oidc-consent_screen-d8ad84a657350fa124b273a6dd7d263f.png"},577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oidc-sandprod_admin_screen_testmerchant-ec437be361efd9909e53aca7f5227645.png"},21490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oidc-unauthorized-a6d282dc69328f8b7b9b870791bd2135.jpg"}}]);