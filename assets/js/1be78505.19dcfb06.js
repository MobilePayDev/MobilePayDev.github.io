"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9514,4204],{19963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var n=a(67294),o=a(86010),l=a(1944),r=a(35281),i=a(43320),c=a(53438),s=a(74477),d=a(1116),m=a(63929),u=a(95999),b=a(12466),p=a(85936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,o]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(l.current?l.current=!1:n>=r?(i(),o(!1)):n<t?o(!1):n+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var g=a(16550),f=a(87524),v=a(86668),_=a(21327),k=a(87462);function C(e){return n.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},n.createElement(C,{className:I.collapseSidebarButtonIcon}))}var y=a(59689),N=a(902);const T=Symbol("EmptyContext"),w=n.createContext(T);function Z(e){let{children:t}=e;const[a,o]=(0,n.useState)(null),l=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:o})),[a]);return n.createElement(w.Provider,{value:l},t)}var x=a(86043),B=a(48596),L=a(39960),A=a(72389);function H(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){let{item:t,onItemClick:a,activePath:l,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),g=function(e){const t=(0,A.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),f=(0,c._F)(t,l),_=(0,B.Mg)(h,l),{collapsed:C,setCollapsed:I}=(0,x.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:S,setExpandedItem:y}=function(){const e=(0,n.useContext)(w);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!C),y(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:o}=e;const l=(0,N.D9)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:f,collapsed:C,updateCollapsed:Z}),(0,n.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),n.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},n.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},n.createElement(L.Z,(0,k.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{a?.(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{a?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?g??"#":g},d),u),h&&b&&n.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),n.createElement(x.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(K,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:i+1})))}var W=a(13919),F=a(39471);const P={menuExternalLink:"menuExternalLink_NmtK"};function D(e){let{item:t,onItemClick:a,activePath:l,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,l),E=(0,W.Z)(m);return n.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},n.createElement(L.Z,(0,k.Z)({className:(0,o.Z)("menu__link",!E&&P.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(F.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function V(e){let{item:t,level:a,index:l}=e;const{value:i,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),c&&[R.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}function z(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(M,(0,k.Z)({item:t},a));case"html":return n.createElement(V,(0,k.Z)({item:t},a));default:return n.createElement(D,(0,k.Z)({item:t},a))}}function U(e){let{items:t,...a}=e;return n.createElement(Z,null,t.map(((e,t)=>n.createElement(z,(0,k.Z)({key:t,item:e,index:t},a)))))}const K=(0,n.memo)(U),j={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function q(e){let{path:t,sidebar:a,className:l}=e;const i=function(){const{isActive:e}=(0,y.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",j.menu,i&&j.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(K,{items:a,activePath:t,level:1})))}const G={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function Y(e){let{path:t,sidebar:a,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,v.L)();return n.createElement("div",{className:(0,o.Z)(G.sidebar,i&&G.sidebarWithHideableNavbar,r&&G.sidebarHidden)},i&&n.createElement(_.Z,{tabIndex:-1,className:G.sidebarLogo}),n.createElement(q,{path:t,sidebar:a}),c&&n.createElement(S,{onClick:l}))}const O=n.memo(Y);var X=a(13102),J=a(93163);const Q=e=>{let{sidebar:t,path:a}=e;const l=(0,J.e)();return n.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(K,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function $(e){return n.createElement(X.Zo,{component:Q,props:e})}const ee=n.memo($);function te(e){const t=(0,f.i)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(O,e),o&&n.createElement(ee,e))}const ae={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ne(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ae.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:ae.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function le(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:l}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),l((e=>!e))}),[l,c]);return n.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,oe.docSidebarContainer,a&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&a&&s(!0)}},n.createElement(le,null,n.createElement("div",{className:(0,o.Z)(oe.sidebarViewport,c&&oe.sidebarViewportHidden)},n.createElement(te,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&n.createElement(ne,{toggleSidebar:d}))))}const ie={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ce(e){let{hiddenSidebarContainer:t,children:a}=e;const l=(0,d.V)();return n.createElement("main",{className:(0,o.Z)(ie.docMainContainer,(t||!l)&&ie.docMainContainerEnhanced)},n.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},a))}const se={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function de(e){let{children:t}=e;const a=(0,d.V)(),[o,l]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:se.docsWrapper},n.createElement(E,null),n.createElement("div",{className:se.docPage},a&&n.createElement(re,{sidebar:a.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),n.createElement(ce,{hiddenSidebarContainer:o},t)))}var me=a(84204),ue=a(90197);function be(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ue.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function pe(e){const{versionMetadata:t}=e,a=(0,c.hI)(e);if(!a)return n.createElement(me.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(be,e),n.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(de,null,i)))))}},84204:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),o=a(95999),l=a(1944),r=a(63929);function i(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Whoops")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We tried really hard but we could not find whatever you were looking for. But we are sure it is here somewhere. We have been rearranging a lot lately so it may have been lost in the moving process. Although fear not as we are here to help! If you know what product it concerns you could try the menu right at the very top. If you look to the right there is also a search option which we think might be really helpfull in times of need.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"If everything else fails you are very welcome to contact us at developer@mobilepay.dk. We will gladly help you find what you are looking for or answer any questions you might have.")))))))}}}]);