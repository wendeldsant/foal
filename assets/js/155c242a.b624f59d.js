(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9172],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2154:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],p={title:"Root Imports"},s=void 0,l={unversionedId:"cookbook/root-imports",id:"version-1.x/cookbook/root-imports",isDocsHomePage:!1,title:"Root Imports",description:"`typescript",source:"@site/versioned_docs/version-1.x/cookbook/root-imports.md",sourceDirName:"cookbook",slug:"/cookbook/root-imports",permalink:"/docs/1.x/cookbook/root-imports",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/root-imports.md",version:"1.x",frontMatter:{title:"Root Imports"},sidebar:"someSidebar",previous:{title:"ExpressJS",permalink:"/docs/1.x/cookbook/expressjs"},next:{title:"Limit Repeated Requests",permalink:"/docs/1.x/cookbook/limit-repeated-requests"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Relative import\nimport { User } from '../../entities';\n\n// Root import\nimport { User } from 'app/entities';\n")),(0,a.kt)("p",null,"FoalTS build does not resolve root imports by default. You must install the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/module-alias"},"module-alias")," package if you want to use them. Here's how to configure the library with Foal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install module-alias\n")),(0,a.kt)("p",null,"Specify the directory from which root imports should be resolved during compilation."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"tsconfig.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": "src",\n    ...\n  }\n}\n')),(0,a.kt)("p",null,"Specify the directory from which root imports should be resolved at runtime."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n   "_moduleDirectories": ["./build"]\n}\n')),(0,a.kt)("p",null,"Then register the loader at the top of the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'module-alias/register';\n\n// ...\n")),(0,a.kt)("p",null,"If you use shell scripts, the loader must also be registered at the top of each one."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/scripts/create-user.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'module-alias/register';\n\n// ...\n")))}m.isMDXComponent=!0}}]);