(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5693],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(944),o=n(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),g=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,r.useState)(c),b=y[0],k=y[1],h=r.Children.toArray(e.children),j=[];if(null!=m){var w=g[m];null!=w&&w!==b&&p.some((function(e){return e.value===w}))&&k(w)}var T=function(e){var t=e.currentTarget,n=j.indexOf(t),r=p[n].value;k(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,l,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=j.indexOf(e.target)+1;n=j[r]||j[0];break;case s:var a=j.indexOf(e.target)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},6805:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=n(1395),i=n(8215),s=["components"],u={title:"Template Engine"},c=void 0,p={unversionedId:"upgrade-to-v2/template-engine",id:"upgrade-to-v2/template-engine",isDocsHomePage:!1,title:"Template Engine",description:"Starting from version 2, only Express-compatible template engines are supported (EJS, pug, Jade, Twig, etc).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/template-engine.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/template-engine",permalink:"/fr/docs/upgrade-to-v2/template-engine",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/template-engine.md",version:"current",frontMatter:{title:"Template Engine"}},m=[{value:"The <code>@foal/ejs</code> package",id:"the-foalejs-package",children:[]}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from version 2, only Express-compatible template engines are supported (",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ejs"},"EJS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pug"},"pug"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jade"},"Jade"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/twig"},"Twig"),", etc)."),(0,o.kt)("h2",{id:"the-foalejs-package"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"@foal/ejs")," package"),(0,o.kt)("p",null,"Therefore the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/ejs")," has been removed. If you used it, update your configuration file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm uninstall @foal/ejs\nnpm install ejs\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 1")),(0,o.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  templateEngine: '@foal/ejs'\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "templateEngine": "@foal/ejs"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    templateEngine: "@foal/ejs"\n  }\n}\n')))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 2")),(0,o.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  templateEngine: ejs\n"))),(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "templateEngine": "ejs"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    templateEngine: "ejs"\n  }\n}\n')))))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);