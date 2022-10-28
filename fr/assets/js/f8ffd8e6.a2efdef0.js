"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={title:"Custom Express Instance"},a=void 0,p={unversionedId:"upgrade-to-v2/custom-express-instance",id:"version-2.x/upgrade-to-v2/custom-express-instance",title:"Custom Express Instance",description:"FoalTS allows to provide a custom Express instance to the createApp function. In version 1, there were two ways to do it. In version 2, there is only one.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/upgrade-to-v2/custom-express-instance.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/custom-express-instance",permalink:"/fr/docs/2.x/upgrade-to-v2/custom-express-instance",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/upgrade-to-v2/custom-express-instance.md",tags:[],version:"2.x",frontMatter:{title:"Custom Express Instance"}},c={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FoalTS allows to provide a custom Express instance to the ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," function. In version 1, there were two ways to do it. In version 2, there is only one."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = createApp(AppController, expressApp);\n// OR\nconst app = createApp(AppController, {\n  expressInstance: expressApp\n});\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Version 2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n")))}u.isMDXComponent=!0}}]);