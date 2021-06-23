(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4107],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1611:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={title:"Conversiones"},c=void 0,l={unversionedId:"common/conversions",id:"common/conversions",isDocsHomePage:!1,title:"Conversiones",description:"This page lists common functions to convert one type or format to another.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/conversions.md",sourceDirName:"common",slug:"/common/conversions",permalink:"/es/docs/common/conversions",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/conversions.md",version:"current",frontMatter:{title:"Conversiones"},sidebar:"someSidebar",previous:{title:"Generar tokens",permalink:"/es/docs/common/generate-tokens"},next:{title:"Bases de datos SQL",permalink:"/es/docs/databases/typeorm"}},p=[{value:"Base64 to Base64URL",id:"base64-to-base64url",children:[]},{value:"Base64URL to Base64",id:"base64url-to-base64",children:[]},{value:"Stream to Buffer",id:"stream-to-buffer",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page lists common functions to convert one type or format to another."),(0,a.kt)("h2",{id:"base64-to-base64url"},"Base64 to Base64URL"),(0,a.kt)("p",null,"This function converts a base64-encoded string into a base64URL-encoded string. "),(0,a.kt)("p",null,"It replaces the characters ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," and omits the ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," sign."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { convertBase64ToBase64url } from '@foal/core';\n\nconst foo = convertBase64ToBase64url('bar');\n")),(0,a.kt)("h2",{id:"base64url-to-base64"},"Base64URL to Base64"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This feature is available from version 2.3 onwards."))),(0,a.kt)("p",null,"This function converts a base64URL-encoded string into a base64-encoded string. "),(0,a.kt)("p",null,"It replaces the characters ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," and adds the ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," padding character(s) if any."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { convertBase64urlToBase64 } from '@foal/core';\n\nconst foo = convertBase64urlToBase64('bar');\n")),(0,a.kt)("h2",{id:"stream-to-buffer"},"Stream to Buffer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This feature is available from version 2.3 onwards."))),(0,a.kt)("p",null,"This function converts a stream of buffers into a concatenated buffer. It returns a promise."),(0,a.kt)("p",null,"If the stream emits an error, the promise is rejected with the emitted error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n")))}m.isMDXComponent=!0}}]);