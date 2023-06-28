"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),i=n(67294),r=n(86010),o=n(12466),l=n(16550),s=n(91980),p=n(67392),u=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=y({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},o,{className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(f,(0,a.Z)({},e,t)))}function E(e){const t=(0,k.Z)();return i.createElement(g,(0,a.Z)({key:String(t)},e))}},30005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(74866),o=n(85162);const l={sidebar_position:2},s="Build on Mobile",p={unversionedId:"app-payments/guides/build-on-mobile",id:"app-payments/guides/build-on-mobile",title:"Build on Mobile",description:"This page details how MobilePay app payments should be implemented in your Android/iOS app.",source:"@site/docs/app-payments/guides/build-on-mobile.mdx",sourceDirName:"app-payments/guides",slug:"/app-payments/guides/build-on-mobile",permalink:"/docs/app-payments/guides/build-on-mobile",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"How It Works",permalink:"/docs/app-payments/guides/how-it-works"},next:{title:"Build on Web",permalink:"/docs/app-payments/guides/build-on-web"}},u={},d=[{value:"Prerequisites and Assumptions",id:"prerequisites-and-assumptions",level:2},{value:"Create Payment",id:"create-payment",level:2},{value:"Starting MobilePay",id:"starting-mobilepay",level:2},{value:"Handling the Result",id:"handling-the-result",level:2},{value:"Returning to Your App",id:"returning-to-your-app",level:2},{value:"App Switching",id:"app-switching",level:3},{value:"Redirect from MobilePay",id:"redirect-from-mobilepay",level:3},{value:"Prerequisites and Assumptions",id:"prerequisites-and-assumptions-1",level:2},{value:"Create Payment",id:"create-payment-1",level:2},{value:"Redirect to MobilePay",id:"redirect-to-mobilepay",level:2},{value:"Returning to Your App",id:"returning-to-your-app-1",level:2},{value:"App Switching",id:"app-switching-1",level:3},{value:"Redirect from MobilePay",id:"redirect-from-mobilepay-1",level:3},{value:"All done",id:"all-done",level:2}],c={toc:d},m="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-on-mobile"},"Build on Mobile"),(0,i.kt)("p",null,"This page details how MobilePay app payments should be implemented in your Android/iOS app."),(0,i.kt)(r.Z,{groupId:"operating-systems",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("h2",{id:"prerequisites-and-assumptions"},"Prerequisites and Assumptions"),(0,i.kt)("p",null,"This guide assumes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You already have backend services integrated with ",(0,i.kt)("a",{parentName:"li",href:"/docs/app-payments/guides/how-it-works"},"MobilePay APIs"),"."),(0,i.kt)("li",{parentName:"ul"},"Your app uses ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/basics/supporting-devices/platforms.html#sdk-versions"},"minSdkVersion")," API 23 (Marshmallow, 6.0) or later."),(0,i.kt)("li",{parentName:"ul"},"You are generally familiar with developing applications on Android.")),(0,i.kt)("admonition",{title:"Make sure you are compliant with mobile application distribution service rules!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Using app payments for digital sales might not be allowed by some mobile application distribution services (Google Play, App Store, etc.) and might result in your application being removed. Please review the terms of service for the respective mobile application distribution services you use to ensure that you are compliant with their guidelines.")),(0,i.kt)("h2",{id:"create-payment"},"Create Payment"),(0,i.kt)("p",null,"First, you'll need to create payment. To do this you should call your backend service that is implemented as described ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-payments/payments-refunds/create-payments"},"here"),". This service call should return a response that contains a deep link needed to launch the MobilePay app."),(0,i.kt)("h2",{id:"starting-mobilepay"},"Starting MobilePay"),(0,i.kt)("p",null,"MobilePay supports navigation via native Activity Result APIs and deep linking."),(0,i.kt)(r.Z,{groupId:"android-navigation-method",defaultValue:"result",values:[{label:"Result APIs",value:"result"},{label:"Deep Links",value:"deep_link"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("p",null,"Activity Result or ",(0,i.kt)("inlineCode",{parentName:"p"},"startActivityForResult")," APIs use standard Android functions and will launch MobilePay in your app process. This is the preferred way when integrating into a native Android app."),(0,i.kt)("p",null,"Let's open MobilePay with the deep link received from your backend."),(0,i.kt)(r.Z,{groupId:"android-language",defaultValue:"kotlin",values:[{label:"Kotlin using Activity Result APIs",value:"kotlin"},{label:"Kotlin using startActivityForResult",value:"activity_result_kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Kotlin using Activity Result APIs (requires AndroidX Activity 1.2.0 (or above) or Fragment 1.3.0 (or above))"',title:'"Kotlin',using:!0,Activity:!0,Result:!0,APIs:!0,"(requires":!0,AndroidX:!0,"1.2.0":!0,"(or":!0,"above)":!0,or:!0,Fragment:!0,"1.3.0":!0,'above))"':!0},"private val mobilePayContract = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {\n  when (it.resultCode) {\n    SUCCESS_RESULT_CODE -> {}\n    REJECT_RESULT_CODE -> {}\n    FAILED_RESULT_CODE -> {}\n    UNKNOWN_RESULT_CODE -> {}\n  }\n}\n\n// Use the link received from your backend to launch MobilePay.\nfun openMobilePay(deepLink: String) {\n  try {\n      val intent = Intent(Intent.ACTION_VIEW).apply {\n          data = Uri.parse(deepLink)\n      }\n      mobilePayContract.launch(intent)\n  } catch (exception: ActivityNotFoundException) {\n      // Inform the user that MobilePay is not installed or use these links to redirect the user to Play Store:\n      // DK: market://details?id=dk.danskebank.mobilepay\n      // FI: market://details?id=fi.danskebank.mobilepay\n  }\n}\n\ncompanion object {\n    private const val SUCCESS_RESULT_CODE = Activity.RESULT_OK\n    private const val REJECT_RESULT_CODE = Activity.RESULT_CANCELED\n    private const val FAILED_RESULT_CODE = 1\n    private const val UNKNOWN_RESULT_CODE = 2\n}\n"))),(0,i.kt)(o.Z,{value:"activity_result_kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Kotlin"',title:'"Kotlin"'},"// Use the link received from your backend to launch MobilePay.\nfun openMobilePay(deepLink: String) {\n    try {\n        val intent = Intent(Intent.ACTION_VIEW).apply {\n            data = Uri.parse(deepLink)\n        }\n        startActivityForResult(intent, MOBILEPAY_PAYMENT_REQUEST_CODE)\n    } catch (exception: ActivityNotFoundException) {\n        // Inform the user that MobilePay is not installed or use these links to redirect the user to Play Store:\n        // DK: market://details?id=dk.danskebank.mobilepay\n        // FI: market://details?id=fi.danskebank.mobilepay\n    }\n}\n\noverride fun onActivityResult(\n    requestCode: Int,\n    resultCode: Int,\n    data: Intent?\n) {\n  super.onActivityResult(requestCode, resultCode, data)\n  if (requestCode == MOBILEPAY_PAYMENT_REQUEST_CODE) {\n    when (resultCode) {\n      SUCCESS_RESULT_CODE -> {}\n      REJECT_RESULT_CODE -> {}\n      FAILED_RESULT_CODE -> {}\n      UNKNOWN_RESULT_CODE -> {}\n    }\n  }\n}\n\ncompanion object {\n  const val MOBILEPAY_PAYMENT_REQUEST_CODE = 1337 // Any request code you choose\n\n  private const val SUCCESS_RESULT_CODE = Activity.RESULT_OK\n  private const val REJECT_RESULT_CODE = Activity.RESULT_CANCELED\n  private const val FAILED_RESULT_CODE = 1\n  private const val UNKNOWN_RESULT_CODE = 2\n}\n"))),(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"private static final int MOBILEPAY_PAYMENT_REQUEST_CODE = 1337; // Any request code you choose\n\nprivate static final int SUCCESS_RESULT_CODE = Activity.RESULT_OK;\nprivate static final int REJECT_RESULT_CODE = Activity.RESULT_CANCELED;\nprivate static final int FAILED_RESULT_CODE = 1;\nprivate static final int UNKNOWN_RESULT_CODE = 2;\n\n// Use the link received from your backend to launch MobilePay.\nvoid openMobilePay(String deepLink) {\n    try {\n        Intent intent = new Intent(Intent.ACTION_VIEW);\n        intent.setData(Uri.parse(deepLink));\n        startActivityForResult(intent, MOBILEPAY_PAYMENT_REQUEST_CODE);\n    } catch (android.content.ActivityNotFoundException exception) {\n        // Inform the user that MobilePay is not installed or use these links to redirect the user to Play Store:\n        // DK: market://details?id=dk.danskebank.mobilepay\n        // FI: market://details?id=fi.danskebank.mobilepay\n    } catch (NullPointerException exception) {\n        // Null deepLink was passed in.\n    }\n}\n\n@Override\nprotected void onActivityResult(int requestCode, int resultCode, Intent data) {\n    super.onActivityResult(requestCode, resultCode, data);\n\n    if (requestCode == MOBILEPAY_PAYMENT_REQUEST_CODE) {\n        if (resultCode == SUCCESS_RESULT_CODE) {\n          \n        } else if (resultCode == REJECT_RESULT_CODE) {\n            \n        } else if (resultCode == FAILED_RESULT_CODE) {\n            \n        } else if (resultCode == UNKNOWN_RESULT_CODE) {\n            \n        }\n    }\n}\n")))),(0,i.kt)("h2",{id:"handling-the-result"},"Handling the Result"),(0,i.kt)("p",null,"MobilePay can return these result codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"SUCCESS_RESULT_CODE")," (Activity.RESULT_OK) - payment was successful and it is in reserved state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"REJECT_RESULT_CODE")," (Activity.RESULT_CANCELED) - user rejected the payment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"FAILED_RESULT_CODE")," (1) - user could not complete the payment due to invalid state of payment or the user's MobilePay account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"UNKNOWN_RESULT_CODE")," (2) - user attempted to do a payment, but because of network issues we could not determine if it was successful. (E.g., the user tries to do a payment, but it does not succeed due to network issues. Then the user decides to reject the payment and again receives a network error. At this point we cannot leave the user blocked in the MobilePay app, so we finish with this result code.) You should try to capture or at least check the state of these payments as they can be successful."))),(0,i.kt)(o.Z,{value:"deep_link",mdxType:"TabItem"},(0,i.kt)("p",null,"Deep link approach is used when the MobilePay app is launched with the ",(0,i.kt)("inlineCode",{parentName:"p"},"startActivity")," function. When using this navigation method, the MobilePay app will run in a separate process and invoke your app with a deep link after the payment flow is finished."),(0,i.kt)("p",null,"Let's open MobilePay with the deep link received from your backend."),(0,i.kt)(r.Z,{groupId:"android-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Kotlin"',title:'"Kotlin"'},"fun openMobilePay(deepLink: String) {\n    try {\n        val intent = Intent(Intent.ACTION_VIEW).apply {\n            data = Uri.parse(deepLink)\n        }\n        startActivity(intent)\n        // At this point we know that MobilePay will be launched.\n        // Consider navigating to a new screen here.\n    } catch (exception: ActivityNotFoundException) {\n        // Inform the user that MobilePay is not installed or use these links to redirect the user to Play Store:\n        // DK: market://details?id=dk.danskebank.mobilepay\n        // FI: market://details?id=fi.danskebank.mobilepay\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Java"',title:'"Java"'},"void openMobilePay(String deepLink) {\n    try {\n        Intent intent = new Intent(Intent.ACTION_VIEW);\n        intent.setData(Uri.parse(deepLink));\n        startActivity(intent);\n        // At this point we know that MobilePay will be launched.\n        // Consider navigating to a new screen here.\n    } catch (android.content.ActivityNotFoundException exception) {\n        // Inform the user that MobilePay is not installed or use these links to redirect the user to Play Store:\n        // DK: market://details?id=dk.danskebank.mobilepay\n        // FI: market://details?id=fi.danskebank.mobilepay\n    } catch (NullPointerException exception) {\n        // Null deepLink was passed in.\n    }\n}\n")))),(0,i.kt)("p",null,"After this, the MobilePay app will be launched and the user will be able to proceed with the payment flow."),(0,i.kt)("h2",{id:"returning-to-your-app"},"Returning to Your App"),(0,i.kt)("p",null,"There are multiple ways a user can return to your app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User approves the payment and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User cancels the payment and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User fails to complete the payment due to some kind of error and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User closes the app before/after reservation using the native app switcher."),(0,i.kt)("li",{parentName:"ul"},"User presses back in the MobilePay Login screen.")),(0,i.kt)("p",null,"All these can be grouped into:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App switching."),(0,i.kt)("li",{parentName:"ul"},"Redirect.")),(0,i.kt)("p",null,"The following section addresses how each one should be handled."),(0,i.kt)("h3",{id:"app-switching"},"App Switching"),(0,i.kt)("p",null,"At any point the user can close the MobilePay app and just return to your app. ",(0,i.kt)("strong",{parentName:"p"},"This can happen even if the payment is already reserved!")," Since it is unknown if your app was opened after a completed payment, you'll need to check the payment state each time your app returns to the foreground. For this, you should use your backend service that provides the current state of a payment (more details ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-payments/payments-refunds/create-payments"},"here"),")."),(0,i.kt)("h3",{id:"redirect-from-mobilepay"},"Redirect from MobilePay"),(0,i.kt)("p",null,"The other scenario is that the MobilePay app tries to automatically navigate back to your app. For this to work you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Valid deep link to a place that knows how to proceed with the flow (",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/app-links/deep-linking"},"official deep linking guide"),")."),(0,i.kt)("li",{parentName:"ul"},"Provide this deep link during ",(0,i.kt)("a",{parentName:"li",href:"#create-payment"},"payment creation"),".")),(0,i.kt)("p",null,'In the general case, this deep link should open the app screen which handles the "App switching" scenario described above, and just treat it the same way as if the user manually navigated to your app.'),(0,i.kt)("admonition",{title:"Payment state in your deep link",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When redirecting back to your app, MobilePay appends a query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," to the end of a deep link. It can contain these values:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"successful"),(0,i.kt)("li",{parentName:"ul"},"failed"),(0,i.kt)("li",{parentName:"ul"},"rejected")),(0,i.kt)("p",{parentName:"admonition"},"Consider checking this parameter and triggering a capture without checking the payment's state in your backend (capture can only succeed if ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," returned value is ",(0,i.kt)("inlineCode",{parentName:"p"},"successful"),")."),(0,i.kt)("p",{parentName:"admonition"},"P.S. It's not required for a successful app payments integration."))))),(0,i.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("h2",{id:"prerequisites-and-assumptions-1"},"Prerequisites and Assumptions"),(0,i.kt)("p",null,"This guide assumes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You already have backend services integrated with ",(0,i.kt)("a",{parentName:"li",href:"/docs/app-payments/guides/how-it-works"},"MobilePay APIs"),"."),(0,i.kt)("li",{parentName:"ul"},"Your app handles a custom URL scheme. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Apple documentation")," for more details."),(0,i.kt)("li",{parentName:"ul"},"You are generally familiar with developing applications on iOS.")),(0,i.kt)("admonition",{title:"Make sure you are compliant with mobile application distribution service rules!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Using app payments for digital sales might not be allowed by some mobile application distribution services (Google Play, App Store, etc.) and might result in your application being removed. Please review the terms of service for the respective mobile application distribution services you use to ensure that you are compliant with their guidelines.")),(0,i.kt)("h2",{id:"create-payment-1"},"Create Payment"),(0,i.kt)("p",null,"First, you'll need to create payment. To do this you should call your backend service that is implemented as described ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-payments/payments-refunds/create-payments"},"here"),". This service call should return a response that contains a deep link needed to launch the MobilePay app."),(0,i.kt)("h2",{id:"redirect-to-mobilepay"},"Redirect to MobilePay"),(0,i.kt)("p",null,"Now that we have the deep link let's open MobilePay app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Swift"',title:'"Swift"'},"UIApplication.shared.open(redirectUrl, options: [:], completionHandler: { success in\n    if success {\n        // Handle success.\n    } else {\n        // Handle failure. Most likely MobilePay app is not present on the user's device. You can redirect to App Store using these links:\n        // DK: itms-apps://itunes.apple.com/app/id624499138\n        // FI: itms-apps://itunes.apple.com/app/id768172577\n    }\n})\n")),(0,i.kt)("p",null,"After this, the MobilePay app will be launched and the user will be able to proceed with the payment flow."),(0,i.kt)("h2",{id:"returning-to-your-app-1"},"Returning to Your App"),(0,i.kt)("p",null,"There are multiple ways a user can return to your app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User approves the payment and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User cancels the payment and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User fails to complete the payment due to some kind of error and is redirected back to your app."),(0,i.kt)("li",{parentName:"ul"},"User closes the app before/after reservation using the native app switcher."),(0,i.kt)("li",{parentName:"ul"},"User presses back in the MobilePay Login screen.")),(0,i.kt)("p",null,"All these can be grouped into:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App switching."),(0,i.kt)("li",{parentName:"ul"},"Redirect.")),(0,i.kt)("p",null,"The following section addresses how each one should be handled."),(0,i.kt)("h3",{id:"app-switching-1"},"App Switching"),(0,i.kt)("p",null,"At any point a user can close MobilePay app and just return to your app. ",(0,i.kt)("strong",{parentName:"p"},"This can happen even if payment is already reserved!")," Since it is unknown if your app was opened after completed payment, you'll need to check payment state each time your app returns to the foreground. For this, you should use your backend service that provides current state of payment (more details ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-payments/payments-refunds/create-payments"},"here"),")."),(0,i.kt)("p",null,"Example how to handle case when user manually switches to your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Swift"',title:'"Swift"'},"let observer = NotificationCenter.default.addObserver(forName: UIApplication.didBecomeActiveNotification, object: nil, queue: nil, using: { _ in\n    // Check payment status - poll if needed.\n})\n")),(0,i.kt)("p",null,"Don't forget to unregister from notification when it's not needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Swift"',title:'"Swift"'},"NotificationCenter.default.removeObserver(observer)\n")),(0,i.kt)("h3",{id:"redirect-from-mobilepay-1"},"Redirect from MobilePay"),(0,i.kt)("p",null,"Example how to handle automatic redirect from the MobilePay app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"class AppDelegate: NSObject, UIApplicationDelegate {\n\n    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {\n        // Validate that url is from MobilePay and check payment status - poll if needed.\n        return true\n    }\n}\n")),(0,i.kt)("admonition",{title:"Payment state in your deep link",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When redirecting back to your app, MobilePay appends a query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," to the end of a deep link. It can contain these values:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"successful"),(0,i.kt)("li",{parentName:"ul"},"failed"),(0,i.kt)("li",{parentName:"ul"},"rejected")),(0,i.kt)("p",{parentName:"admonition"},"P.S. It's not required for a successful app payments integration. You must rely on webhooks and status polling to know whether a payment is succesful or not.")))),(0,i.kt)("h2",{id:"all-done"},"All done"),(0,i.kt)("p",null,"Now everything should be ready for testing! Sandbox testing guide is ",(0,i.kt)("a",{parentName:"p",href:"/docs/app-payments/development-guide/test"},"here"),"."),(0,i.kt)("admonition",{title:"Make sure you are using the correct MobilePay app!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"MobilePay supports multiple countries, but cross-country payments are not enabled.")),(0,i.kt)("p",null,"Having troubles with this guide? Be sure to ",(0,i.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"contact us")," ."))}y.isMDXComponent=!0}}]);