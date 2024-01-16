"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var y=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function P(e){const t=(0,y.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},88020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(27133);const i={sidebar_position:2},l="Test",s={unversionedId:"online/development-guide/test",id:"online/development-guide/test",title:"Test",description:"Testing a MobilePay Online payment",source:"@site/docs/online/development-guide/test.mdx",sourceDirName:"online/development-guide",slug:"/online/development-guide/test",permalink:"/docs/online/development-guide/test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/online/development-guide/getting-started"},next:{title:"verification",permalink:"/docs/online/development-guide/verification"}},u={},p=[{value:"Testing a MobilePay Online payment",id:"testing-a-mobilepay-online-payment",level:2},{value:"Test app",id:"test-app",level:2},{value:"User simulation API",id:"user-simulation-api",level:2},{value:"Automated integration tests in Sandbox",id:"automated-integration-tests-in-sandbox",level:3},{value:"Test user",id:"test-user",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test"},"Test"),(0,r.kt)("h2",{id:"testing-a-mobilepay-online-payment"},"Testing a MobilePay Online payment"),(0,r.kt)("p",null,"As PSP, you can now initiate a MobilePay Online payment against our Sandprod environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a test merchant by calling: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/v1/merchants")),(0,r.kt)("li",{parentName:"ol"},"Initiate a payment by calling: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/v1/payments")," You will receive redirectToMobilePayUrl in response"),(0,r.kt)("li",{parentName:"ol"},"Open redirectToMobilePayUrl  in a browser to access MobiePay landing page (or from an app). On the landing page enter the test phone number you have received during the technical onoarding."),(0,r.kt)("li",{parentName:"ol"},"Use either ",(0,r.kt)("a",{parentName:"li",href:"#test-app"},"test app")," or user ",(0,r.kt)("a",{parentName:"li",href:"#user-simulation-api"},"simulation API")," to accept the payment."),(0,r.kt)("li",{parentName:"ol"},"Receive token or cardData callback. In production you will call the aquire at this point."),(0,r.kt)("li",{parentName:"ol"},"Update authorization attempt with succeeded true or false by calling: ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/v1/payments/{paymentId}/authorizationattempts/{authorizationAttemptId}")),(0,r.kt)("li",{parentName:"ol"},"Create capture by calling: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/v1/payments/{paymentId}/captures"))),(0,r.kt)("h2",{id:"test-app"},"Test app"),(0,r.kt)("p",null,"In order to complete a payment flow in the sandprod environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandprod environment."),(0,r.kt)(o.ZP,{mdxType:"TestApp"}),(0,r.kt)("h2",{id:"user-simulation-api"},"User simulation API"),(0,r.kt)("p",null,"To complete a payment flow in the sandprod environment you will need to make user actions. We have made an API that can mimick the actions of a user. You find it in the API overview: Choose 'Online User Simulation'"),(0,r.kt)("p",null,"With the API simulate user behavior:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User enter phone number for payment."),(0,r.kt)("li",{parentName:"ol"},"User selects the first eligible card for payment."),(0,r.kt)("li",{parentName:"ol"},"User swipes to accept payment.")),(0,r.kt)("p",null,"How to use the User simulation API:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initiate a payment: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/v3/payments")),(0,r.kt)("li",{parentName:"ol"},"Accept the payment: ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/v1/product/payments/simulation/enter-phone-and-swipe/{paymentId}"))),(0,r.kt)("p",null,"The test user may have more than one card available. In order to choose a specific card use ",(0,r.kt)("inlineCode",{parentName:"p"},"LastFourDigits"),". Last for digit of the decired payment card to be used. These can be found in the test app or by contacting Developer Support. If not defined the first eligible card will be used."),(0,r.kt)("h3",{id:"automated-integration-tests-in-sandbox"},"Automated integration tests in Sandbox"),(0,r.kt)("p",null,"The API supports automated integration tests running in Sandbox using the Online User Simulation API.\nPlease refrain from any overly aggressive testing strategies, we expect any continously running tests to call at most once per second."),(0,r.kt)("h2",{id:"test-user"},"Test user"),(0,r.kt)("p",null,"Through the technical onboarding you will receive a sandbox test user. If you have not yet received one, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")," to request a test user. The test user is assigned to your integration and not shared with others."),(0,r.kt)("p",null,"If you are a ",(0,r.kt)("strong",{parentName:"p"},"merchant")," please contact your MobilePay Online integrator/PSP to receive a test user from them. Test setup varies from PSP to PSP and therefore MobilePay cannot directly assist with this."),(0,r.kt)("p",null,"If you experience any issues with the test user, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@vippsmobilepay.com"},"developer@vippsmobilepay.com")))}m.isMDXComponent=!0},27133:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={toc:[{value:"Log on to test app",id:"log-on-to-test-app",level:3}]},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,"To install, you will have to allow installation from \u201cunknown sources\u201d."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-dk-android-sandbox/distribution_groups/external"},"MobilePay DK Sandbox app")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-fi-android-sandbox/distribution_groups/external"},"MobilePay FI Sandbox app"))),(0,r.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("p",null,"iOS MobilePay Sandbox app is available through Apple TestFlight. Therefore Apple TestFlight must be installed to the device.  Using below link on a mobile device will initiate download of and registration to TestFlight. No prior registration or invitation needed.\nPlease open below link on your mobile device:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/xarydQZ4"},"MobilePay DK Sandbox app")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/hP92EaBR"},"MobilePay FI Sandbox app")))),(0,r.kt)("h3",{id:"log-on-to-test-app"},"Log on to test app"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and open the MobilePay DK/FI Vendor app"),(0,r.kt)("li",{parentName:"ol"},'Select "Log p\xe5 (Eksisterende bruger)" / "Kirjaudu sovellukseen / "Log on (existing user)"'),(0,r.kt)("li",{parentName:"ol"},"Enter a valid Sandbox phone number (see below section about test users)"),(0,r.kt)("li",{parentName:"ol"},"Enter SSN (Only relevant on fresh install)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Denmark CPR no.: 000000-0000"),(0,r.kt)("li",{parentName:"ul"},"Finland henkil\xf6tunnus: 00000000000"))),(0,r.kt)("li",{parentName:"ol"},"Enter PIN: \u201c1234\u201d"),(0,r.kt)("li",{parentName:"ol"},'Enter activation code: \u201c123456\u201d and press "OK" / "Jatka"')))}u.isMDXComponent=!0}}]);