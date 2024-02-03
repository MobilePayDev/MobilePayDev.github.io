"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8944],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),y=r,m=d["".concat(l,".").concat(y)]||d[y]||h[y]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},37060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(45072),r=(a(11504),a(95788));const o={sidebar_position:7},i="Best Practices",s={unversionedId:"pos/best-practices",id:"pos/best-practices",title:"Best Practices",description:"This section is an overview over best practices when integrating to MobilePay PoS. The purpose of these best practices is to optimize the customer and merchant experience, to reduce errors and to keep the integration as simple as possible without reducing customer and merchant experience.",source:"@site/docs/pos/best-practices.md",sourceDirName:"pos",slug:"/pos/best-practices",permalink:"/docs/pos/best-practices",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Notification Service",permalink:"/docs/pos/notification-service"},next:{title:"API Principles",permalink:"/docs/pos/api-principles"}},l={},p=[{value:"Check-in before or after payment has been initiated",id:"check-in-before-or-after-payment-has-been-initiated",level:2},{value:"Payment and loyalty payment flows",id:"payment-and-loyalty-payment-flows",level:2},{value:"Specify planned capture delay",id:"specify-planned-capture-delay",level:2},{value:"Order IDs",id:"order-ids",level:2},{value:"Capture or cancellation of old payments",id:"capture-or-cancellation-of-old-payments",level:2},{value:"Polling",id:"polling",level:2},{value:"Payment restrictions",id:"payment-restrictions",level:2},{value:"Merchant onboarding",id:"merchant-onboarding",level:2},{value:"Choosing a BeaconId",id:"choosing-a-beaconid",level:2},{value:"Optimal flow",id:"optimal-flow",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"best-practices"},"Best Practices"),(0,r.yg)("p",null,"This section is an overview over best practices when integrating to MobilePay PoS. The purpose of these best practices is to optimize the customer and merchant experience, to reduce errors and to keep the integration as simple as possible without reducing customer and merchant experience."),(0,r.yg)("h2",{id:"check-in-before-or-after-payment-has-been-initiated"},"Check-in before or after payment has been initiated"),(0,r.yg)("p",null,"While the system supports customers checking in both before or after a payment has been initiated, best practice is to urge customers to check in before.\nAs an example: In a supermarket a customer can check in and then start bagging their groceries. When all the groceries have been scanned the cash register will initiate the payment and allow the customer to swipe.\nThis is an advantage over both cash and card payments, as the customer has no need to go back to the terminal/payment area again. This results in a faster transaction for all involved parties."),(0,r.yg)("h2",{id:"payment-and-loyalty-payment-flows"},"Payment and loyalty payment flows"),(0,r.yg)("p",null,"There are two main payment flows in the V10 API.\nInitiating a payment followed by a capture (the ",(0,r.yg)("a",{parentName:"p",href:"/docs/pos/payment-flows/payment-flow"},"Payment Flow"),"), and a flow where initiate payment is split into two parts: Prepare-Ready and then followed by a capture (the ",(0,r.yg)("a",{parentName:"p",href:"/docs/pos/payment-flows/prepared-payment-flow"},"Prepared Payment Flow"),").\nThe recommendation is to use the Payment Flow if there is no need for knowing the customer before setting the amount.\nUsing the Payment Flow will save a call to the API and in the end improve the overall time it takes to complete a payment.\nCases in which knowing the customer before setting the amount includes loyalty payments where a discount is based on the customer's loyalty ID."),(0,r.yg)("h2",{id:"specify-planned-capture-delay"},"Specify planned capture delay"),(0,r.yg)("p",null,"It is required to specify when the payment is expected to be captured. The values are either ",(0,r.yg)("em",{parentName:"p"},"None"),", ",(0,r.yg)("em",{parentName:"p"},"LessThan24Hours"),", and ",(0,r.yg)("em",{parentName:"p"},"LessThan14Days"),". These are values that control how payments are handled by MobilePay Support and it is therefore beneficial that these values are set as accurate as possible.\nThe three values differ in the following way:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"None"),": If payments with this value are not captured ",(0,r.yg)("strong",{parentName:"li"},"the following day")," it is possible for MobilePay Support to reach out to make sure the payments are handled (either cancelled or captured) although this is not guaranteed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"LessThan24Hours"),": If payments with this value are not captured ",(0,r.yg)("strong",{parentName:"li"},"the following 2-3 days")," it is possible for MobilePay Support to reach out to make sure the payments are handled (either cancelled or captured) although this is not guaranteed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"LessThan14Days"),": If payments with this value are not captured MobilePay Support cannot help since the reservation will be expired and, hence, cannot be captured. Make sure this value is only used when appropriate.")),(0,r.yg)("h2",{id:"order-ids"},"Order IDs"),(0,r.yg)("p",null,"Order IDs are not required to be unique however this is highly recommended.\nIn error cases where the ",(0,r.yg)("inlineCode",{parentName:"p"},"paymentId")," is lost it can be retrieved based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"posId")," and the ",(0,r.yg)("inlineCode",{parentName:"p"},"orderId")," by calling the ",(0,r.yg)("inlineCode",{parentName:"p"},"GET /v10/payments")," endpoint. If the ",(0,r.yg)("inlineCode",{parentName:"p"},"orderId")," is unique the endpoint will return the expected ",(0,r.yg)("inlineCode",{parentName:"p"},"paymentId"),". However, if the ",(0,r.yg)("inlineCode",{parentName:"p"},"orderId")," is not unique the mapping is overwritten and the endpoint will return the latest ",(0,r.yg)("inlineCode",{parentName:"p"},"paymentId")," that was associated with the specified ",(0,r.yg)("inlineCode",{parentName:"p"},"orderId"),"."),(0,r.yg)("h2",{id:"capture-or-cancellation-of-old-payments"},"Capture or cancellation of old payments"),(0,r.yg)("p",null,"All payments in ",(0,r.yg)("em",{parentName:"p"},"Reserved")," state should be captured or cancelled as soon as practically possible. If an error occurs that makes it temporarily impossible to neither cancel or capture the payment, the PoS client is responsible for persisting which payments should be captured and which should be cancelled at a later stage. Later when processing old payments in ",(0,r.yg)("em",{parentName:"p"},"Reserved")," state it is important that only payments that should be captured are captured and the same in regards to payments that should be cancelled.\nIt is bad practice to poll for every outstanding payments that are in the ",(0,r.yg)("em",{parentName:"p"},"Reserved")," state, since that could lead to payments being captured which should have been cancelled and vice versa."),(0,r.yg)("h2",{id:"polling"},"Polling"),(0,r.yg)("p",null,"It is possible to get information on a payment using ",(0,r.yg)("inlineCode",{parentName:"p"},"GET /v10/payments/{paymentId}"),", and it is possible to get information about an active check-in using ",(0,r.yg)("inlineCode",{parentName:"p"},"GET /v10/pointofsales/{posId}/checkin"),".\nFor both of these endpoints, it is allowed to do polling at most once per second. Polling times are controlled by the backend. The response will always contain a time interval that specifies, when the endpoint should at the earliest be polled again. The recommendation is to poll as fast as allowed by the backend to ensure maximal merchant and customer experience."),(0,r.yg)("h2",{id:"payment-restrictions"},"Payment restrictions"),(0,r.yg)("p",null,"It is possible to restrict which card types can be used for a payment. This restriction is available in order to support that some countries have restrictions on which cards can be used for certain products.\nThe recommendation is to only set restrictions on payments where it is required to do so by the law or in case there are some business related reasons for restricting the payment. You can put restrictions when starting payments with either ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v10/payments/")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"POST /v10/payments/{paymentId}/ready"),". See ",(0,r.yg)("a",{parentName:"p",href:"/docs/pos/input-and-output-formats#payment-restrictions"},"Restrictions formatting")," for how to provide restrictions."),(0,r.yg)("h2",{id:"merchant-onboarding"},"Merchant onboarding"),(0,r.yg)("p",null,"When a PoS client needs to onboard a merchant to the MobilePay V10 API, the Pos client needs to know the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," for the store they will do payments on behalf of. There are two possible ways to obtain the ",(0,r.yg)("inlineCode",{parentName:"p"},"storeId")," needed."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Merchant VAT number"),": If the merchant that needs onboarding is a new customer for the PoS Integrator, then Merchant VAT number should be used to obtain storeIds. The PoS integrator can call ",(0,r.yg)("inlineCode",{parentName:"li"},"GET /v10/stores")," and the MobilePay backend will use the VAT number to return all storeIds for that merchant. To get details about each store you can then call the endpoint ",(0,r.yg)("inlineCode",{parentName:"li"},"GET /v10/stores/{storeId}")," for each ",(0,r.yg)("inlineCode",{parentName:"li"},"storeId"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"MerchantBrandId + MerchantLocationId"),": If the merchant that needs onboarding is already a customer of the PoS Integrator, then ",(0,r.yg)("inlineCode",{parentName:"li"},"MerchantBrandId")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"MerchantLocationId")," can be used to obtain storeIds. The PoS client can call ",(0,r.yg)("inlineCode",{parentName:"li"},"GET /v10/stores/?merchantBrandId={merchantBrandId}&merchantLocationId={merchantLocationId}")," for each location to get a list of storeIds that only contains the ",(0,r.yg)("inlineCode",{parentName:"li"},"storeId")," for that location. This way the PoS client can avoid the process of looking up specific store data to determine which ",(0,r.yg)("inlineCode",{parentName:"li"},"storeId")," represents which store.")),(0,r.yg)("h2",{id:"choosing-a-beaconid"},"Choosing a BeaconId"),(0,r.yg)("p",null,"There are three principles for choosing a BeaconId."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If you have received a 15-digit Id from MobilePay - use that as your Id."),(0,r.yg)("li",{parentName:"ol"},"If you have an earlier GUID that you need to use because you have it printed or similar - then use that GUID."),(0,r.yg)("li",{parentName:"ol"},"Otherwise let MobilePay generate a new GUID for you everytime you create a PoS.")),(0,r.yg)("p",null,"Following this approach will lead to fewer issues with collisions for everyone."),(0,r.yg)("h2",{id:"optimal-flow"},"Optimal flow"),(0,r.yg)("p",null,"To ensure the best costumer experience, the payment flow from a costumers point of view, ends when the payment has reached Reserved state. At this stage the customer is allowed to leave the store."))}h.isMDXComponent=!0}}]);