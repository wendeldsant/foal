"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Linting and Code Style",sidebar_label:"Linting"},a=void 0,l={unversionedId:"cli/linting-and-code-style",id:"version-3.x/cli/linting-and-code-style",title:"Linting and Code Style",description:"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/cli/linting-and-code-style.md",sourceDirName:"cli",slug:"/cli/linting-and-code-style",permalink:"/id/docs/3.x/cli/linting-and-code-style",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/cli/linting-and-code-style.md",tags:[],version:"3.x",frontMatter:{title:"Linting and Code Style",sidebar_label:"Linting"},sidebar:"someSidebar",previous:{title:"Code Generation",permalink:"/id/docs/3.x/cli/code-generation"},next:{title:"Introduction",permalink:"/id/docs/3.x/testing/introduction"}},s={},c=[{value:"ESLint &amp; TypeScript",id:"eslint--typescript",level:2},{value:"Adding New Rules",id:"adding-new-rules",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A linter is a tool that analizes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. In particular, it helps teams to keep the code consistent between their members."),(0,i.kt)("p",null,"For example, with ESLint, the rule ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/quotes: single")," enforces the use of single quotes throughout the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Valid\nconst foo = 'bar';\n// Invalid\nconst foo = \"bar\";\n")),(0,i.kt)("h2",{id:"eslint--typescript"},"ESLint & TypeScript"),(0,i.kt)("p",null,"FoalTS offers a pre-configuration for the linter ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),". It is the most commonly used in the JavaScript ecosystem and can work with TypeScript through the ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/parser")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/eslint-plugin")," packages."),(0,i.kt)("p",null,"You can run the linting with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint\n")),(0,i.kt)("p",null,"And if the linting issues can be automatically fixed, you can also fix them with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,i.kt)("h2",{id:"adding-new-rules"},"Adding New Rules"),(0,i.kt)("p",null,"The rules are specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file located at the root of the project."),(0,i.kt)("p",null,"The list of available JavaScript rules can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/"},"ESLint website"),". Some of them are compatible with TypeScript. Others are not and you will need to find equivalents ",(0,i.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/rules/"},"here"),"."))}u.isMDXComponent=!0}}]);