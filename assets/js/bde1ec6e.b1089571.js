"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7912],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>f});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96788:(e,t,n)=>{n.d(t,{c:()=>g});var r=n(11504),o=n(14971),i=n(35492),c=n(76016),a=n(18136),l=n(84357);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(c.c,{href:t,className:(0,o.c)("card padding--lg",s.cardContainer)},n)}function m(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.c)("text--truncate",s.cardTitle),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.c)("text--truncate",s.cardDescription),title:c},c))}function u(e){let{item:t}=e;const n=(0,i.OQ)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,a.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i._4)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.wt)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const c=(0,i.ML)(t);return r.createElement("section",{className:(0,o.c)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},56548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(45072),o=(n(11504),n(95788)),i=n(96788);const c={},a="Development Guide",l={unversionedId:"online/development-guide/development-guide",id:"online/development-guide/development-guide",title:"Development Guide",description:"",source:"@site/docs/online/development-guide/development-guide.md",sourceDirName:"online/development-guide",slug:"/online/development-guide/",permalink:"/docs/online/development-guide/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"MobilePay Online",permalink:"/docs/online/"},next:{title:"Getting started",permalink:"/docs/online/development-guide/getting-started"}},s={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"development-guide"},"Development Guide"),(0,o.yg)(i.c,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);