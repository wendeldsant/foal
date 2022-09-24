"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"Imports Racines"},l=void 0,s={unversionedId:"cookbook/root-imports",id:"cookbook/root-imports",title:"Imports Racines",description:"FoalTS build does not resolve root imports by default. You must install the module-alias package if you want to use them. Here's how to configure the library with Foal:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbook/root-imports.md",sourceDirName:"cookbook",slug:"/cookbook/root-imports",permalink:"/fr/docs/cookbook/root-imports",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/root-imports.md",tags:[],version:"current",frontMatter:{title:"Imports Racines"},sidebar:"someSidebar",previous:{title:"ExpressJS",permalink:"/fr/docs/cookbook/expressjs"},next:{title:"Limiter les Requ\xeates R\xe9p\xe9t\xe9es",permalink:"/fr/docs/cookbook/limit-repeated-requests"}},i={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// Relative import\nimport { User } from '../../entities';\n\n// Root import\nimport { User } from 'app/entities';\n")),(0,n.kt)("p",null,"FoalTS build does not resolve root imports by default. You must install the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/module-alias"},"module-alias")," package if you want to use them. Here's how to configure the library with Foal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install module-alias\n")),(0,n.kt)("p",null,"Specify the directory from which root imports should be resolved during compilation."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"tsconfig.json")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": "src",\n    ...\n  }\n}\n')),(0,n.kt)("p",null,"Specify the directory from which root imports should be resolved at runtime."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"package.json")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n   "_moduleDirectories": ["./build"]\n}\n')),(0,n.kt)("p",null,"Then register the loader at the top of the file ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"src/index.ts")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'module-alias/register';\n\n// ...\n")),(0,n.kt)("p",null,"If you use shell scripts, the loader must also be registered at the top of each one."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"src/scripts/create-user.ts (example)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'module-alias/register';\n\n// ...\n")))}u.isMDXComponent=!0}}]);