(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(268)),i=(n(272),n(273),{title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]}),c={permalink:"/es/blog/2021/04/08/whats-new-in-version-2-part-4",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-08-whats-new-in-version-2-part-4.md",source:"@site/blog/2021-04-08-whats-new-in-version-2-part-4.md",description:"Banner",date:"2021-04-08T00:00:00.000Z",tags:[{label:"release",permalink:"/es/blog/tags/release"}],title:"What's new in version 2 (part 4/4)",readingTime:5.675,truncated:!0,nextItem:{title:"What's new in version 2 (part 3/4)",permalink:"/es/blog/2021/03/11/whats-new-in-version-2-part-3"}},s=[],l={toc:s};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(298).default})),Object(o.b)("p",null,"This article presents the improvements to the session system in FoalTS version 2."),Object(o.b)("p",null,"The new syntax can be used either with cookies or with the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header. It adds the following new features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"query all sessions of a given user"),Object(o.b)("li",{parentName:"ul"},"query all connected users"),Object(o.b)("li",{parentName:"ul"},"force logout of a specific user"),Object(o.b)("li",{parentName:"ul"},"flash sessions"),Object(o.b)("li",{parentName:"ul"},"session ID regeneration"),Object(o.b)("li",{parentName:"ul"},"anonymous and authenticated sessions")),Object(o.b)("p",null,"FoalTS also simplifies stateful CSRF protection so that all it takes is one setting to enable it."))}u.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},270:function(e,t,n){"use strict";var r=n(0),a=n(271);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},271:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},272:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(270),i=n(269),c=n(56),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(r.useState)(c),O=h[0],y=h[1],g=r.Children.toArray(e.children);if(null!=p){var w=d[p];null!=w&&w!==O&&f.some((function(e){return e.value===w}))&&y(w)}var j=function(e){y(e),null!=p&&v(p,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},273:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-4a0daa4160e81b0b7922d53453c9e04f.png"}}]);