(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9906],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return k}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),k=r,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8584:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"Generate Tokens"},c=void 0,l={unversionedId:"cookbook/generate-tokens",id:"version-1.x/cookbook/generate-tokens",isDocsHomePage:!1,title:"Generate Tokens",description:"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS.",source:"@site/versioned_docs/version-1.x/cookbook/generate-tokens.md",sourceDirName:"cookbook",slug:"/cookbook/generate-tokens",permalink:"/id/docs/1.x/cookbook/generate-tokens",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/generate-tokens.md",version:"1.x",frontMatter:{title:"Generate Tokens"},sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/id/docs/1.x/cookbook/error-handling"},next:{title:"Scheduling Jobs",permalink:"/id/docs/1.x/cookbook/scheduling-jobs"}},p=[{value:"Unsigned Tokens (simple case)",id:"unsigned-tokens-simple-case",children:[]},{value:"Signed Tokens",id:"signed-tokens",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS."),(0,a.kt)("h2",{id:"unsigned-tokens-simple-case"},"Unsigned Tokens (simple case)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"generateToken")," function generates a cryptographically secure random token encoded in base64url (128 bits)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n")),(0,a.kt)("h2",{id:"signed-tokens"},"Signed Tokens"),(0,a.kt)("p",null,"You can also generate a token using a secret. The secret is used to ",(0,a.kt)("em",{parentName:"p"},"sign")," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Generate a signed token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verify and read a signed token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n")))}d.isMDXComponent=!0}}]);