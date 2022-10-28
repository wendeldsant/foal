"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[758],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"Generar tokens"},s=void 0,i={unversionedId:"common/generate-tokens",id:"common/generate-tokens",title:"Generar tokens",description:"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/generate-tokens.md",sourceDirName:"common",slug:"/common/generate-tokens",permalink:"/es/docs/common/generate-tokens",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/generate-tokens.md",tags:[],version:"current",frontMatter:{title:"Generar tokens"},sidebar:"someSidebar",previous:{title:"Logging & Depuraci\xf3n",permalink:"/es/docs/common/logging-and-debugging"},next:{title:"Conversiones",permalink:"/es/docs/common/conversions"}},c={},l=[{value:"Unsigned Tokens (simple case)",id:"unsigned-tokens-simple-case",level:2},{value:"Signed Tokens",id:"signed-tokens",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS."),(0,o.kt)("h2",{id:"unsigned-tokens-simple-case"},"Unsigned Tokens (simple case)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"generateToken")," function generates a cryptographically secure random token encoded in base64url (128 bits)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n")),(0,o.kt)("h2",{id:"signed-tokens"},"Signed Tokens"),(0,o.kt)("p",null,"You can also generate a token using a secret. The secret is used to ",(0,o.kt)("em",{parentName:"p"},"sign")," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate a signed token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Verify and read a signed token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n")))}u.isMDXComponent=!0}}]);