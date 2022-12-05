"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:8},o="API Principles",l={unversionedId:"pos/api-principles",id:"pos/api-principles",title:"API Principles",description:"This is a preliminary list of architectural principles.",source:"@site/docs/pos/api-principles.md",sourceDirName:"pos",slug:"/pos/api-principles",permalink:"/docs/pos/api-principles",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Best Practices",permalink:"/docs/pos/best-practices"},next:{title:"API Errors",permalink:"/docs/pos/api-errors"}},s={},d=[{value:"Backend Has the Truth",id:"backend-has-the-truth",level:2},{value:"API Versus Implementation",id:"api-versus-implementation",level:2},{value:"RESTful API",id:"restful-api",level:2},{value:"Security Model",id:"security-model",level:2},{value:"Client Versioning",id:"client-versioning",level:2},{value:"API Responses",id:"api-responses",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Network and server errors",id:"network-and-server-errors",level:3},{value:"Idempotency keys",id:"idempotency-keys",level:3},{value:"Retrying requests",id:"retrying-requests",level:3},{value:"Client errors",id:"client-errors",level:3},{value:"Handling Timeouts",id:"handling-timeouts",level:3},{value:"Call Throttling",id:"call-throttling",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-principles"},"API Principles"),(0,a.kt)("p",null,"This is a preliminary list of architectural principles."),(0,a.kt)("h2",{id:"backend-has-the-truth"},"Backend Has the Truth"),(0,a.kt)("p",null,"One of the architectural principles in MobilePay PoS is that the backend has the truth. This means that in a situation where certainty is required, for instance whether the payment has been approved, the app and client will have to wait for confirmation from the backend."),(0,a.kt)("h2",{id:"api-versus-implementation"},"API Versus Implementation"),(0,a.kt)("p",null,"The API does not describe the abstractions of the underlying backend or client implementations. Instead the API serves as the joint interface for backend and frontend. The ramification for this is that both frontend and backend can move independently from the API. However, they must always support the API specification and not only support perceived details of current implementations. Any valid HTTP request must be handled appropriately by the backend and produce a useful informative HTTP response. Any valid HTTP response received in the client must be handled appropriately by the client."),(0,a.kt)("h2",{id:"restful-api"},"RESTful API"),(0,a.kt)("p",null,"The API is defined using the RESTful principles."),(0,a.kt)("h2",{id:"security-model"},"Security Model"),(0,a.kt)("p",null,"The MobilePay PoS V10 API uses TLS for communication security and data integrity (secure channel between the client and the backend). The API currently uses TLS 1.2. It is the integrator's responsibility to plan for an upgrade to TLS 1.3, when TLS 1.2 is deprecated. The MobilePay PoS V10 API uses access tokens to authenticate calls from clients. After ",(0,a.kt)("a",{parentName:"p",href:"/docs/pos/authentication"},"obtaining an access token"),", the client must send the access token in an Authorization header along with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," as follows in all calls to the MobilePay PoS V10 API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"--header 'x-ibm-client-id: {client_id}'\n--header 'Authorization: Bearer {access_token}'\n")),(0,a.kt)("h2",{id:"client-versioning"},"Client Versioning"),(0,a.kt)("p",null,"In addition to the access token which identifies the client calling the MobilePay PoS V10 API, all calls must also include the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-mobilepay-client-system-version")," header to identify the version of the client software. The Client Version (",(0,a.kt)("inlineCode",{parentName:"p"},"x-mobilepay-client-system-version"),") is a 3 dimensional number Major.Minor.Build. It is recommended that when the client software is updated, the client version is updated accordingly. The client version will be used by MobilePay to block versions of clients that are not ",(0,a.kt)("a",{parentName:"p",href:"/docs/pos/development-guide/verification"},"certified")," and/or are misbehaving. An example of misbehavior is spamming irrelevant HTTP calls that endanger fast response times for other clients."),(0,a.kt)("p",null,"The three parts of the Client Version is defined as described below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Major version represents major changes to the client version, perhaps representing breaking changes on the clients interfaces or representing major changes communicated to merchants. A major change requires recertification."),(0,a.kt)("li",{parentName:"ul"},"Minor version represents minor changes to the client version, changes that introduces new features or a change in the way internal logic is handled. Minor version changes are perhaps not communicated to merchants. A minor change requires recertification."),(0,a.kt)("li",{parentName:"ul"},"Build version represents a new build of the client, including minor bug-fixes and changes of the lowest magnitude. A new build version does not require recertification.")),(0,a.kt)("p",null,"Certification requirements in regard to changes to Client Version are as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changes in major version or minor version require a new Certification."),(0,a.kt)("li",{parentName:"ul"},"Changes in Build version do not require a new Certification.")),(0,a.kt)("p",null,"The Client Version should be added in all calls as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"--header 'x-mobilepay-client-system-version: 2.1.1'\n")),(0,a.kt)("h2",{id:"api-responses"},"API Responses"),(0,a.kt)("p",null,"The MobilePay PoS V10 API uses HTTP 2XX status codes for successful requests, HTTP 4XX status codes for failed requests that failed due to a client error and HTTP 5XX status codes for failed requests that failed due to a server error. An overview of error codes used in the V10 API is given below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"200 OK")),(0,a.kt)("td",{parentName:"tr",align:null},"The request succeeded.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"204 No Content")),(0,a.kt)("td",{parentName:"tr",align:null},"The request succeeded but no response was returned.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"400 Bad Request")),(0,a.kt)("td",{parentName:"tr",align:null},"The request is syntactically ill-formed or violates ",(0,a.kt)("a",{parentName:"td",href:"/docs/pos/input-and-output-formats"},"validation rules"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"401 Unauthorized")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/pos/api-principles#security-model"},"Authentication")," of the caller failed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"403 Forbidden")),(0,a.kt)("td",{parentName:"tr",align:null},"The call was rejected due to insufficient permissions of the caller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"404 Not Found")),(0,a.kt)("td",{parentName:"tr",align:null},"The specified resource does not exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"409 Conflict")),(0,a.kt)("td",{parentName:"tr",align:null},"The request was rejected due to the state of the underlying resource.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"500 Internal Server Error")),(0,a.kt)("td",{parentName:"tr",align:null},"An unrecoverable internal server error occurred.")))),(0,a.kt)("p",null,"For most errors, the V10 API returns an error response body that includes an error code and an error description. The error response has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "code": "19999",\n  "message": "Tiny elves have invaded V10; we surrender",\n  "CorrelationId": "197b2e31-787d-423f-ba00-0bd1f19291df"\n}\n')),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"Clients integrating against the MobilePay PoS V10 API should expect intermittent errors and ",(0,a.kt)("strong",{parentName:"p"},"must")," implement suitable error handling. Errors can generally be classified into three categories: ",(0,a.kt)("em",{parentName:"p"},"network errors"),", ",(0,a.kt)("em",{parentName:"p"},"server errors")," and ",(0,a.kt)("em",{parentName:"p"},"client errors"),". Network and server errors should be handled by retrying requests, while client errors should be handled by fixing the client request."),(0,a.kt)("h3",{id:"network-and-server-errors"},"Network and server errors"),(0,a.kt)("p",null,"Network errors typically present themselves as timeouts or connections that are closed prematurely. Network errors and server errors (HTTP 5XX responses) should initially be handled by retrying requests. If errors persist despite retries, the flow should be cleaned up e.g. by cancelling. The PoS V10 API uses ",(0,a.kt)("em",{parentName:"p"},"idempotency")," to ensure that requests can always be safely retried. Idempotency ensures that performing the same call multiple times will not cause additional state changes beyond those caused by the first call."),(0,a.kt)("p",null,"For instance, if a capture call on a payment is successful on the backend, but the connection to the client is closed before the client receives the response, then it is safe for the client to retry the capture call. The second capture call will immediately return with a ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")," response as the capture was already completed on the first capture call."),(0,a.kt)("h3",{id:"idempotency-keys"},"Idempotency keys"),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," endpoints that create new resources (e.g., initiating a payment or a refund) the backend cannot determine on its own whether two requests with identical request bodies is due to a retry or a request to create two resources. The PoS V10 API thus requires the client to set an ",(0,a.kt)("em",{parentName:"p"},"idempotency-key")," header (",(0,a.kt)("inlineCode",{parentName:"p"},"X-MobilePay-Idempotency-Key"),") on each request when calling the following endpoints, to allow the backend to identify retried calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"POST /v10/payments\nPOST /v10/payments/prepare\nPOST /v10/refunds\nPOST /v10/pointofsales\n")),(0,a.kt)("p",null,"For each call to the endpoints above, the client must generate a unique idempotency key for the given call. In case the client decides to retry a call due to a failure, the client ",(0,a.kt)("strong",{parentName:"p"},"must")," use the same idempotency key, to allow the backend to identify it as a retried call. We recommend using a client-generated ",(0,a.kt)("em",{parentName:"p"},"GUID")," as the idempotency key."),(0,a.kt)("p",null,"For instance, if a client calls to initiate a payment with a unique idempotency key, ",(0,a.kt)("em",{parentName:"p"},"key1"),", and the initiate call is successful but the client never receives the response due to an intermittent network issue, then it is safe to retry the initiate payment call with the same idempotency key, ",(0,a.kt)("em",{parentName:"p"},"key1"),". Because the idempotency key is the same, the second call will not initiate a new payment, but rather return the ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentId")," of the already initiated payment."),(0,a.kt)("p",null,"All other endpoints in the PoS V10 API are naturally idempotent and do not require explicit idempotency keys to be set by the client."),(0,a.kt)("p",null,"The PoS V10 API stores idempotency keys for at least 24 hours. If a call is retried with the same idempotency key more than 24 hours after the original call, then the PoS V10 API does not guarantee that it will be handled as a retried call."),(0,a.kt)("h3",{id:"retrying-requests"},"Retrying requests"),(0,a.kt)("p",null,"We recommend retrying failed requests due to network and server errors using one of these strategies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Retrying requests up to a fixed number of times with a constant delay between each call."),(0,a.kt)("li",{parentName:"ul"},"Retrying requests up to a fixed number of times using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend).")),(0,a.kt)("p",null,"We suggest retrying a failed request ",(0,a.kt)("strong",{parentName:"p"},"2")," times (which results in 3 requests including the first one)."),(0,a.kt)("p",null,"You may at ",(0,a.kt)("strong",{parentName:"p"},"max")," retry ",(0,a.kt)("strong",{parentName:"p"},"5")," times (which results in 6 requests)."),(0,a.kt)("h3",{id:"client-errors"},"Client errors"),(0,a.kt)("p",null,"Client errors (HTTP 4XX) indicate a problem with the client request and can typically not be resolved by retrying the request. HTTP 409 errors typically indicate that the client and the PoS backend is out-of-sync about the state of a given resource (e.g. trying to capture a reservation that is not yet reserved or initiating\na payment on a PoS that already has an active payment). If possible, the client should try to query the given resource to fix any inconsistencies between the client and the PoS backend."),(0,a.kt)("h3",{id:"handling-timeouts"},"Handling Timeouts"),(0,a.kt)("p",null,"For requests that are slow to produce responses, the client has to set a timeout on the request using one of the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For POST, DELETE, PUT requests set the timeout to 2 seconds using a suitable retry strategy from section ",(0,a.kt)("a",{parentName:"li",href:"/docs/pos/api-principles#retrying-requests"},"Retrying requests"),". Remember to use the idempotency key for the POST requests that create a ressource."),(0,a.kt)("li",{parentName:"ul"},"For non-polling GET requests set the timeout to 0.5 seconds using a suitable retry strategy from section ",(0,a.kt)("a",{parentName:"li",href:"/docs/pos/api-principles#retrying-requests"},"Retrying requests")),(0,a.kt)("li",{parentName:"ul"},"For polling GET requests set the timeout to 0.5 seconds and continue polling using the polling delay from the last received response.")),(0,a.kt)("h2",{id:"call-throttling"},"Call Throttling"),(0,a.kt)("p",null,"Several flows in the PoS V10 API require the client to poll the PoS backend for state changes. To help protect against excessive polling, all endpoints used for polling in the PoS V10 API include a poll delay field to allow the backend to throttle polling calls from clients. The following polling endpoints include a ",(0,a.kt)("inlineCode",{parentName:"p"},"pollDelayInMs")," field in the response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"GET /v10/payments/{paymentId}\nGET /v10/refunds/{refundId}\nGET /v10/pointofsales/{posId}/checkin\n")),(0,a.kt)("p",null,"If a response includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"pollDelayInMs")," of 1000, the client ",(0,a.kt)("strong",{parentName:"p"},"must")," wait at least 1000ms (i.e. 1 second) before polling the same endpoint."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We recommend that clients directly use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pollDelayInMs")," response since a low polling delay can ensure a faster payment flow.")),(0,a.kt)("p",null,"In case no response is received when querying one of the above polling endpoints, then clients should either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"pollDelayInMs")," from the last successful call to the given endpoint."),(0,a.kt)("li",{parentName:"ul"},"Continue polling using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend).")))}p.isMDXComponent=!0}}]);