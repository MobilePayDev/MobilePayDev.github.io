"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2192],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>f});var r=n(11504);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=c,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:c,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96788:(e,t,n)=>{n.d(t,{c:()=>b});var r=n(11504),c=n(14971),i=n(35492),a=n(76016),o=n(18136),s=n(84357);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(a.c,{href:t,className:(0,c.c)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,c.c)("text--truncate",l.cardTitle),title:i},n," ",i),a&&r.createElement("p",{className:(0,c.c)("text--truncate",l.cardDescription),title:a},a))}function p(e){let{item:t}=e;const n=(0,i.OQ)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,o.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i._4)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.wt)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const a=(0,i.ML)(t);return r.createElement("section",{className:(0,c.c)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},45635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(45072),c=(n(11504),n(95788)),i=n(96788);const a={},o="Basics",s={unversionedId:"online/basics/basics",id:"online/basics/basics",title:"Basics",description:"",source:"@site/docs/online/basics/basics.md",sourceDirName:"online/basics",slug:"/online/basics/",permalink:"/docs/online/basics/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Production",permalink:"/docs/online/development-guide/production"},next:{title:"Merchants",permalink:"/docs/online/basics/merchants"}},l={},m=[],u={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,c.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.yg)("h1",{id:"basics"},"Basics"),(0,c.yg)(i.c,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);