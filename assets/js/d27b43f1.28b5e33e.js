"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8524],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return i?n.createElement(m,r(r({ref:t},p),{},{components:i})):n.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},76967:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const a={sidebar_position:3},r="Self-certification",s={unversionedId:"pos/development-guide/verification",id:"pos/development-guide/verification",title:"Self-certification",description:"After your test is complete you must complete a self-certification in order to get access to the production API and go live with your integration. MobilePay provides an automatic certification process where it is possible for most integrators to create a fully automated self-certification. The certification concludes with an automated report on how the certification went. For the PoS API all Major and Minor versions of clients must be certified.",source:"@site/docs/pos/development-guide/verification.md",sourceDirName:"pos/development-guide",slug:"/pos/development-guide/verification",permalink:"/docs/pos/development-guide/verification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Test",permalink:"/docs/pos/development-guide/test"},next:{title:"Production",permalink:"/docs/pos/development-guide/production"}},l={},c=[{value:"Access to self-certification",id:"access-to-self-certification",level:2},{value:"Self-certification process",id:"self-certification-process",level:2},{value:"Identification Step",id:"identification-step",level:3},{value:"Selection Step",id:"selection-step",level:3},{value:"Certification Step",id:"certification-step",level:3},{value:"Approval step",id:"approval-step",level:3},{value:"Configuration details",id:"configuration-details",level:3}],p={toc:c},d="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-certification"},"Self-certification"),(0,o.kt)("p",null,"After your test is complete you must complete a self-certification in order to get access to the production API and go live with your integration. MobilePay provides an automatic certification process where it is possible for most integrators to create a fully automated self-certification. The certification concludes with an automated report on how the certification went. For the PoS API all Major and Minor versions of clients must be certified."),(0,o.kt)("h2",{id:"access-to-self-certification"},"Access to self-certification"),(0,o.kt)("p",null,"Before you can start self-certification you must have a signed agreement with MobilePay and receive a production clientId.\nWhen your test is completed and you wish to start self-certification please ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk?subject=Request%20access%20to%20production%20for%20MobilePay%20PoS&body=Hi%20Developer%20support%2C%0A%0AWe%20have%20completede%20our%20test%20and%20request%20access%20to%20production%20for%20organization%3A%0A%0APlease%20invite%20following%20users%20to%20the%20portal%3A%0A%20%0ABest%20regards"},"contact Developer support")," to request production security credentials that will include the production clientId needed for the certification."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Production security credentials are not to be used for self-certification because this is performed in sandbox. Therefore you must use your security credentials from sandbox. The production security credentials should be used for production after self-certification. ")),(0,o.kt)("h2",{id:"self-certification-process"},"Self-certification process"),(0,o.kt)("p",null,"The Self Certification process has four steps: Identification, Selection, Certification and Approval."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The bottom of this page contains configuration details for your client. You will need to use our self certification store, merchant and URL instead of your test credentials.")),(0,o.kt)("h3",{id:"identification-step"},"Identification Step"),(0,o.kt)("p",null,"In the first step the Integrator identifies themselves in the tool. The following information is needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client IDs for Sandproduction and Production - ID created on the MobilePay Developer Portal which identifies the client to be certified. Each Integrator is allowed to create multiple Client IDs, however it is also acceptable to have just one Client ID."),(0,o.kt)("li",{parentName:"ul"},"Version numbering - The three dimensional number that defines the version of the Client that needs to be certified. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/pos/api-principles#client-versioning"},"Client Identification")),(0,o.kt)("li",{parentName:"ul"},"Client system name - the name of the software being certified.")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:i(44046).Z},(0,o.kt)("img",{alt:"Identification step",src:i(21102).Z,width:"1205",height:"1108"}))),(0,o.kt)("h3",{id:"selection-step"},"Selection Step"),(0,o.kt)("p",null,"In the second step the Integrator selects which major features to certify. There are the following major features in MobilePay PoS API v10:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Onboarding - The mandatory proces of creating a Point-of-Sale on the MobilePay backend."),(0,o.kt)("li",{parentName:"ul"},"Payments - Certification in sections of the API necessary for doing a simple payment."),(0,o.kt)("li",{parentName:"ul"},"Prepared payments - Certification in sections of the API necessary for doing a prepared payment."),(0,o.kt)("li",{parentName:"ul"},"Payments with restrictions - Certification in sections of the API necessary for handling restrictions to payments."),(0,o.kt)("li",{parentName:"ul"},"Prepared payments with restrictions - Certification in sections of the API necessary for handling restrictions to prepared payments."),(0,o.kt)("li",{parentName:"ul"},"Refunds - Certification in sections of the API necessary for handling refunds.")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:i(99371).Z},(0,o.kt)("img",{alt:"Categories step",src:i(92847).Z,width:"1156",height:"897"}))),(0,o.kt)("h3",{id:"certification-step"},"Certification Step"),(0,o.kt)("p",null,"In the third step the integrator goes through all the different certification cases necessary using their client. In this step it might be necessary to operate the client to go through the different steps of a certification case."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:i(52748).Z},(0,o.kt)("img",{alt:"Onboarding cases",src:i(97922).Z,width:"1097",height:"1025"}))),(0,o.kt)("h3",{id:"approval-step"},"Approval step"),(0,o.kt)("p",null,"In the fourth and final step the Integrator gets a certificate proving that the client is certified. It is now possible for the client to access production."),(0,o.kt)("p",null,"In general, we urge all integrators to use this tool to do continuous testing. It is a requirement to re-certify when upgrading major or minor versions. We also recommended to use the tool when making new build versions. The tool will never retract a certification from a client version that has already been certified. Retraction of a certification will only be done after an individual evaluation by MobilePay based on input from production."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:i(68199).Z},(0,o.kt)("img",{alt:"Approval step",src:i(13592).Z,width:"736",height:"387"}))),(0,o.kt)("h3",{id:"configuration-details"},"Configuration details"),(0,o.kt)("p",null,"Please use the following data for configuring your client before commencing self certification."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Self Certification info"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Website link"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://pos-certification.mobilepay.dk/mobilepay-pos-selfcertification-website/index.html"},"https://pos-certification.mobilepay.dk/mobilepay-pos-selfcertification-website/index.html"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PoS self-certification API base URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://api.sandbox.mobilepay.dk/pos-self-certification-api/pos/v10"},"https://api.sandbox.mobilepay.dk/pos-self-certification-api/pos/v10"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Integrator Authentication API base URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://api.sandbox.mobilepay.dk/integrator-authentication"},"https://api.sandbox.mobilepay.dk/integrator-authentication"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"merchantLocationId"),(0,o.kt)("td",{parentName:"tr",align:null},"00001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"merchantBrandId"),(0,o.kt)("td",{parentName:"tr",align:null},"MPPOSCERT1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VAT number DK"),(0,o.kt)("td",{parentName:"tr",align:null},"90000028")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VAT number FI"),(0,o.kt)("td",{parentName:"tr",align:null},"90000040")))))}f.isMDXComponent=!0},68199:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pos-approvalstep-552f8a9f7e3591d9508f352a558970db.PNG"},99371:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pos-categories_step-461547edbe1f194b2557e91e7e46266c.png"},44046:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pos-identificationstep-006d0abaa47c54d7e390cf8d0938a01b.png"},52748:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/pos-onboarding-cases-23c7a236ecee2d30369993be518b659e.png"},13592:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pos-approvalstep-552f8a9f7e3591d9508f352a558970db.PNG"},92847:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pos-categories_step-461547edbe1f194b2557e91e7e46266c.png"},21102:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pos-identificationstep-006d0abaa47c54d7e390cf8d0938a01b.png"},97922:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pos-onboarding-cases-23c7a236ecee2d30369993be518b659e.png"}}]);