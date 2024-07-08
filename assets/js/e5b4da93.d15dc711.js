"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[3402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1},a="Getting started",l={unversionedId:"online/development-guide/getting-started",id:"online/development-guide/getting-started",title:"Getting started",description:"In order to implement MobilePay Online you must first obtain an agreement by contacting partner@vippsmobilepay.com. Once the agreement is signed you will get access to our sandbox environment and can test the API.",source:"@site/docs/online/development-guide/getting-started.md",sourceDirName:"online/development-guide",slug:"/online/development-guide/getting-started",permalink:"/docs/online/development-guide/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Development Guide",permalink:"/docs/online/development-guide/"},next:{title:"Test",permalink:"/docs/online/development-guide/test"}},p={},c=[{value:"PublicKey",id:"publickey",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"In order to implement MobilePay Online you must first obtain an agreement by contacting ",(0,i.kt)("a",{parentName:"p",href:"mailto:partner@vippsmobilepay.com."},"partner@vippsmobilepay.com.")," Once the agreement is signed you will get access to our sandbox environment and can test the API."),(0,i.kt)("h3",{id:"publickey"},"PublicKey"),(0,i.kt)("p",null,"You must supply two PublicKeys for Card encryption: The RSA public key should be provided as X.509 SubjectPublicKeyInfo (using ASN.1 DER Encoding) represented in PEM encoding (use PEM file extension). The public key must have a length of 4096 bits. You must clearly state in the file name which one is for Sandbox and which is for Prod."),(0,i.kt)("p",null,"Naming template for public key: ",(0,i.kt)("inlineCode",{parentName:"p"},"{integratorname}-{environment}-public")),(0,i.kt)("p",null,"Example for sandprod: ",(0,i.kt)("inlineCode",{parentName:"p"},"company-sandprod-public")),(0,i.kt)("p",null,"Example for production: ",(0,i.kt)("inlineCode",{parentName:"p"},"company-prod-public")),(0,i.kt)("p",null,"Please send the PublicKeys in a ZIP-file. We will register the keys and supply you with a PublicKeyId to be used when initiating payments."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please note that if a publicKey is unused for 6 month we will delete it. If this happens you must supply a new publicKey.")))}u.isMDXComponent=!0}}]);