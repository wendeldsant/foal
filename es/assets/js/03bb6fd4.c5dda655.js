"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"XSS Protection"},s=void 0,c={unversionedId:"security/xss-protection",id:"version-1.x/security/xss-protection",title:"XSS Protection",description:"FoalTS provides some utils to protect you against XSS attacks.",source:"@site/versioned_docs/version-1.x/security/xss-protection.md",sourceDirName:"security",slug:"/security/xss-protection",permalink:"/es/docs/1.x/security/xss-protection",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/security/xss-protection.md",tags:[],version:"1.x",frontMatter:{title:"XSS Protection"},sidebar:"someSidebar",previous:{title:"CSRF Protection",permalink:"/es/docs/1.x/security/csrf-protection"},next:{title:"Templates (SSR)",permalink:"/es/docs/1.x/utilities/templating"}},a={},p=[{value:"<code>escape(str: string): string</code>",id:"escapestr-string-string",level:2},{value:"<code>escapeProp(object: object, propName: string): void</code>",id:"escapepropobject-object-propname-string-void",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FoalTS provides some utils to protect you against XSS attacks."),(0,o.kt)("h2",{id:"escapestr-string-string"},(0,o.kt)("inlineCode",{parentName:"h2"},"escape(str: string): string")),(0,o.kt)("p",null,"Escapes HTML and returns a new string."),(0,o.kt)("h2",{id:"escapepropobject-object-propname-string-void"},(0,o.kt)("inlineCode",{parentName:"h2"},"escapeProp(object: object, propName: string): void")),(0,o.kt)("p",null,"Escapes HTML in the given property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"escapeProp(myObject, 'foobar')\n")),(0,o.kt)("p",null,"is equivalent to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"myObject.foobar = escape(myObject.foobar)\n")))}u.isMDXComponent=!0}}]);