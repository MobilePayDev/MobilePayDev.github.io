"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[444],{15680:(l,n,e)=>{e.d(n,{xA:()=>g,yg:()=>p});var t=e(96540);function r(l,n,e){return n in l?Object.defineProperty(l,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[n]=e,l}function a(l,n){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable}))),e.push.apply(e,t)}return e}function y(l){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(l,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(e,n))}))}return l}function u(l,n){if(null==l)return{};var e,t,r=function(l,n){if(null==l)return{};var e,t,r={},a=Object.keys(l);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||(r[e]=l[e]);return r}(l,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(l,e)&&(r[e]=l[e])}return r}var d=t.createContext({}),o=function(l){var n=t.useContext(d),e=n;return l&&(e="function"==typeof l?l(n):y(y({},n),l)),e},g=function(l){var n=o(l.components);return t.createElement(d.Provider,{value:n},l.children)},i="mdxType",s={inlineCode:"code",wrapper:function(l){var n=l.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(l,n){var e=l.components,r=l.mdxType,a=l.originalType,d=l.parentName,g=u(l,["components","mdxType","originalType","parentName"]),i=o(e),c=r,p=i["".concat(d,".").concat(c)]||i[c]||s[c]||a;return e?t.createElement(p,y(y({ref:n},g),{},{components:e})):t.createElement(p,y({ref:n},g))}));function p(l,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof l||r){var a=e.length,y=new Array(a);y[0]=c;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=l,u[i]="string"==typeof l?l:r,y[1]=u;for(var o=2;o<a;o++)y[o]=e[o];return t.createElement.apply(null,y)}return t.createElement.apply(null,e)}c.displayName="MDXCreateElement"},76581:(l,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>y,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var t=e(58168),r=(e(96540),e(15680));const a={sidebar_position:10},y="API Errors",u={unversionedId:"pos/api-errors",id:"pos/api-errors",title:"API Errors",description:"This page contains information regarding all the non-successful status-codes and different error-codes that can occur in the V10 API. The first section contains all combinations of StatusCodes and ErrorCodes that can occur in all endpoints, and then follows sections for the individual endpoints.",source:"@site/docs/pos/api-errors.mdx",sourceDirName:"pos",slug:"/pos/api-errors",permalink:"/docs/pos/api-errors",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"API Principles",permalink:"/docs/pos/api-principles"},next:{title:"Input and Output Formats",permalink:"/docs/pos/input-and-output-formats"}},d={},o=[{value:"Common for all endpoints",id:"common-for-all-endpoints",level:2},{value:"Payments",id:"payments",level:2},{value:"Point of Sales",id:"point-of-sales",level:2},{value:"Refunds",id:"refunds",level:2},{value:"Stores",id:"stores",level:2}],g={toc:o},i="wrapper";function s(l){let{components:n,...e}=l;return(0,r.yg)(i,(0,t.A)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"api-errors"},"API Errors"),(0,r.yg)("p",null,"This page contains information regarding all the non-successful status-codes and different error-codes that can occur in the V10 API. The first section contains all combinations of StatusCodes and ErrorCodes that can occur in all endpoints, and then follows sections for the individual endpoints."),(0,r.yg)("h2",{id:"common-for-all-endpoints"},"Common for all endpoints"),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"ALL endpoints"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1099 ",(0,r.yg)("br",null)," 1151",(0,r.yg)("br",null)," 1152",(0,r.yg)("br",null)," 1153",(0,r.yg)("br",null)," 1155",(0,r.yg)("br",null)," 1156",(0,r.yg)("br",null)," 1157",(0,r.yg)("br",null)," 1159",(0,r.yg)("br",null)," 1160",(0,r.yg)("br",null)," 1161",(0,r.yg)("br",null)," 1182"),(0,r.yg)("td",null,"Unknown BadRequest error ",(0,r.yg)("br",null)," Missing x-mobilepay-merchant-vat-number header ",(0,r.yg)("br",null)," Missing x-mobilepay-client-system-name header ",(0,r.yg)("br",null)," Missing x-mobilepay-client-system-version header ",(0,r.yg)("br",null)," Duplicated x-mobilepay-merchant-vat-number header ",(0,r.yg)("br",null)," Duplicated x-mobilepay-client-system-name header ",(0,r.yg)("br",null)," Duplicated x-mobilepay-client-system-version header ",(0,r.yg)("br",null)," Invalid x-mobilepay-merchant-vat-number header ",(0,r.yg)("br",null)," Invalid x-mobilepay-client-system-name header ",(0,r.yg)("br",null)," Invalid x-mobilepay-client-system-version header ",(0,r.yg)("br",null)," Invalid merchant_vat claim in access token")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"401"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Unauthorized")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"500"),(0,r.yg)("td",null,"2000 - 2999"),(0,r.yg)("td",null,"Internal server error - Please attach error code when communicating with MobilePay for quicker support"))))),(0,r.yg)("h2",{id:"payments"},"Payments"),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/payments/paymentid - Query a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1401",(0,r.yg)("br",null),"1411"),(0,r.yg)("td",null,"Cannot query payments created by a different integrator",(0,r.yg)("br",null),"Cannot query payments created on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Payment not found"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/payments - Query Payments by a filter"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1109"),(0,r.yg)("td",null,"Payment filter not specific enough"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/payments - Initiate a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1102",(0,r.yg)("br",null),"1113",(0,r.yg)("br",null),"1117",(0,r.yg)("br",null),"1162",(0,r.yg)("br",null),"1163",(0,r.yg)("br",null),"1164"),(0,r.yg)("td",null,"Invalid Amount",(0,r.yg)("br",null),"Invalid OrderId",(0,r.yg)("br",null),"Invalid MerchantPaymentLabel",(0,r.yg)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1400"),(0,r.yg)("td",null,"Cannot initiate payments on a point of sale created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1000",(0,r.yg)("br",null),"1204",(0,r.yg)("br",null),"1301",(0,r.yg)("br",null),"1306"),(0,r.yg)("td",null,"Point of Sale not found ",(0,r.yg)("br",null),"The store for the given point of sale is not activated. Please activate the store before starting a payment ",(0,r.yg)("br",null)," A payment is already active. Cancel it before starting a new one ",(0,r.yg)("br",null),"x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/payments/prepare - Prepare a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1113",(0,r.yg)("br",null),"1162",(0,r.yg)("br",null),"1163",(0,r.yg)("br",null),"1164"),(0,r.yg)("td",null,"Invalid OrderId",(0,r.yg)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1400"),(0,r.yg)("td",null,"Cannot prepare payments on a point of sale created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1000",(0,r.yg)("br",null),"1204",(0,r.yg)("br",null),"1301",(0,r.yg)("br",null),"1306"),(0,r.yg)("td",null,"Point of sale not found ",(0,r.yg)("br",null)," The store for the given point of sale is not activated. Please activate the store before starting a payment ",(0,r.yg)("br",null)," A payment is already active. Cancel it before starting a new one ",(0,r.yg)("br",null),"x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/payments/paymentid/ready - Ready a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1102",(0,r.yg)("br",null),"1117"),(0,r.yg)("td",null,"Invalid Amount",(0,r.yg)("br",null),"Invalid MerchantPaymentLabel")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1401",(0,r.yg)("br",null),"1406"),(0,r.yg)("td",null,"Cannot ready payments prepared by a different integrator",(0,r.yg)("br",null),"Cannot ready payments prepared on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Payment not found")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1303"),(0,r.yg)("td",null,"Payment needs to be prepared before it can be marked as ready"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/payments/paymentid/capture - Capture a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1102"),(0,r.yg)("td",null,"Invalid Amount")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1401",(0,r.yg)("br",null),"1407"),(0,r.yg)("td",null,"Cannot capture payments created by a different integrator",(0,r.yg)("br",null),"Cannot capture payments created on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Payment not found")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1304 ",(0,r.yg)("br",null)," 1305 ",(0,r.yg)("br",null)," 1307 ",(0,r.yg)("br",null)," 1308"),(0,r.yg)("td",null,"Cannot capture payment when payment is not reserved ",(0,r.yg)("br",null)," Capture Amount cannot exceed the reserved amount ",(0,r.yg)("br",null),"Payment has already been captured with a different amount ",(0,r.yg)("br",null)," Partial capture not possible on this payment"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/payments/paymentid/cancel - Cancel a Payment"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1401",(0,r.yg)("br",null),"1408"),(0,r.yg)("td",null,"Cannot cancel payments created by a different integrator",(0,r.yg)("br",null),"Cannot cancel payments created on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Payment not found")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1300"),(0,r.yg)("td",null,"The payment cannot be cancelled in the current state"))))),(0,r.yg)("h2",{id:"point-of-sales"},"Point of Sales"),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/pointofsales/posid - Query a Point of Sale"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1400",(0,r.yg)("br",null),"1410"),(0,r.yg)("td",null,"Cannot query point of sales created by a different integrator",(0,r.yg)("br",null),"Cannot query point of sales created on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Point of sale not found"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/pointofsales - Query Point of Sales by a filter"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1121"),(0,r.yg)("td",null,"Point of sale filter not specific enough"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/pointofsales/posid/checkin - Query a checkin on a Point of Sale"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1400"),(0,r.yg)("td",null,"Cannot query checkin on a point of sale created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Point of sale not found"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/pointofsales - Create a Point of Sale"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1100",(0,r.yg)("br",null),"1111",(0,r.yg)("br",null),"1112",(0,r.yg)("br",null),"1116",(0,r.yg)("br",null),"1118",(0,r.yg)("br",null),"1162",(0,r.yg)("br",null),"1163",(0,r.yg)("br",null),"1164"),(0,r.yg)("td",null,"Invalid BeaconId ",(0,r.yg)("br",null),"Invalid MerchantPosId ",(0,r.yg)("br",null),"Invalid PosName ",(0,r.yg)("br",null),"Invalid CallbackAlias ",(0,r.yg)("br",null),"Invalid CalibrationType ",(0,r.yg)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.yg)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1403"),(0,r.yg)("td",null,"Cannot create point of sale on store that does not belong to the merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1002",(0,r.yg)("br",null),"1200",(0,r.yg)("br",null),"1202",(0,r.yg)("br",null),"1306"),(0,r.yg)("td",null,"Store not found ",(0,r.yg)("br",null)," A point of sale with that MerchantPosId already exist ",(0,r.yg)("br",null)," A point of sale with that BeaconId already exist ",(0,r.yg)("br",null)," x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"DELETE /v10/pointofsales/posid - Delete a Point of Sale"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1400",(0,r.yg)("br",null),"1409"),(0,r.yg)("td",null,"Cannot delete point of sales created by a different integrator",(0,r.yg)("br",null),"Cannot delete point of sales created on behalf of a different merchant")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Point of sale not found"))))),(0,r.yg)("h2",{id:"refunds"},"Refunds"),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/refunds/refundid - Query a Refund"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1402"),(0,r.yg)("td",null,"Cannot query refunds created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Refund not found"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/refunds - Query Refunds by a filter"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1110"),(0,r.yg)("td",null,"Refund filter not specific enough"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/refunds - Create a Refund"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1102",(0,r.yg)("br",null),"1114",(0,r.yg)("br",null),"1162",(0,r.yg)("br",null),"1163",(0,r.yg)("br",null),"1164"),(0,r.yg)("td",null,"Invalid Amount",(0,r.yg)("br",null),"Invalid RefundOrderId ",(0,r.yg)("br",null)," Invalid x-mobilepay-idempotency-key header ",(0,r.yg)("br",null)," Duplicated x-mobilepay-idempotency-key header ",(0,r.yg)("br",null)," Missing x-mobilepay-idempotency-key header")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1401"),(0,r.yg)("td",null,"Cannot refund payments created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1001",(0,r.yg)("br",null),"1306",(0,r.yg)("br",null)," ",(0,r.yg)("br",null)," 1354",(0,r.yg)("br",null),"1365 ",(0,r.yg)("br",null),"1366 ",(0,r.yg)("br",null),"1367 ",(0,r.yg)("br",null),"1368"),(0,r.yg)("td",null,"Payment not found ",(0,r.yg)("br",null)," x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request ",(0,r.yg)("br",null)," Refund of payment not possible when payment is not captured ",(0,r.yg)("br",null)," Refund CurrencyCode is different than payment CurrencyCode ",(0,r.yg)("br",null)," Payment is too old ",(0,r.yg)("br",null)," Refund Amount is too high ",(0,r.yg)("br",null)," Cannot refund Amount as it exceeds the available balance on the store"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/refunds/refundid/capture - Capture a reserved Refund"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1402"),(0,r.yg)("td",null,"Cannot capture refunds created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"1004"),(0,r.yg)("td",null,"Refund not found")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1351"),(0,r.yg)("td",null,"Cannot capture refund when refund is not reserved"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"POST /v10/refunds/refundid/cancel - Cancel a reserved Refund"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"403"),(0,r.yg)("td",null,"1402"),(0,r.yg)("td",null,"Cannot cancel refunds created by a different integrator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Refund not found")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"409"),(0,r.yg)("td",null,"1352"),(0,r.yg)("td",null,"The refund cannot be cancelled in the current state"))))),(0,r.yg)("h2",{id:"stores"},"Stores"),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/stores/storeid - Query a Store"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"404"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Store not found"))))),(0,r.yg)("details",{className:"plain-details"},(0,r.yg)("summary",null,"GET /v10/stores - Query a Store by MerchantBrandId and MerchantLocationId"),(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusCode"),(0,r.yg)("td",null,"ErrorCodes"),(0,r.yg)("td",null,"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"400"),(0,r.yg)("td",null,"1122",(0,r.yg)("br",null),"1119",(0,r.yg)("br",null)," 1120"),(0,r.yg)("td",null,"Store filter not specific enough ",(0,r.yg)("br",null)," Invalid MerchantBrandId",(0,r.yg)("br",null)," Invalid MerchantLocationId")),(0,r.yg)("tr",null,(0,r.yg)("td",null),(0,r.yg)("td",null),(0,r.yg)("td",null)),(0,r.yg)("tr",null,(0,r.yg)("td",null),(0,r.yg)("td",null),(0,r.yg)("td",null))))))}s.isMDXComponent=!0}}]);