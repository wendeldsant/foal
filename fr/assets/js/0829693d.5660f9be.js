"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(o),m=n,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return o?r.createElement(u,i(i({ref:t},c),{},{components:o})):r.createElement(u,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},97786:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={title:"Why FoalTS?",slug:"/"},i=void 0,s={unversionedId:"README",id:"version-1.x/README",title:"Why FoalTS?",description:"License: MIT",source:"@site/versioned_docs/version-1.x/README.md",sourceDirName:".",slug:"/",permalink:"/fr/docs/1.x/",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/README.md",tags:[],version:"1.x",frontMatter:{title:"Why FoalTS?",slug:"/"},sidebar:"someSidebar",next:{title:"Installation",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-1-installation"}},l={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Philosophy",id:"philosophy",level:2},{value:"Simple",id:"simple",level:3},{value:"Testable",id:"testable",level:3},{value:"Progressive",id:"progressive",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D8-brightgreen.svg",alt:"node version"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,n.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"In recent years Node.js has become one of the most popular servers on the web. And for good reason, it is fast, simple while being powerful and flexible. Creating a server with only a few lines of code has never been easier. "),(0,n.kt)("p",null,"But when it comes to setting up a complete and scalable project, things get harder. You have to put everything in place. The authorization system, database migrations, development tools or even hashing of passwords are just the tip of the iceberg. Working on this is time consuming and may slow down the release frequency or even lead to undesired bugs. As the codebase grows up and the complexity increases, it becomes harder and harder to develop new features and maintain the app."),(0,n.kt)("p",null,"This is where FoalTS comes in. Based on express, this lightweight framework provides everything needed to create enterprise-grade applications. From the support of TypeScript to the integration of security tools, it offers the basic bricks to build robust webapps. But FoalTS does not pretend to be a closed framework. You can still import and use your favorite libraries from the rich ecosystem of Node.js."),(0,n.kt)("h2",{id:"philosophy"},"Philosophy"),(0,n.kt)("h3",{id:"simple"},"Simple"),(0,n.kt)("p",null,"Keeping things simple is a challenge when creating an application. Simple code is easier to handle and understand, and therefore easier to maintain, debug and extend. Many frameworks, in trying to provide a large number of features and tools, tend to become complex, cumbersome and sometimes incomprehensible. In Foal, the architecture and components are designed to keep the code as simple as possible. Complexity is only used when there is no other option. "),(0,n.kt)("h3",{id:"testable"},"Testable"),(0,n.kt)("p",null,"Too often, tests are set aside in web projects. Considered secondary, many frameworks do not encourage developers to write them and often make this task difficult. This is a pity, because writing tests really improves the long-term reliability of the product. They help to detect bugs in advance, prevent regressions and even improve application design as they are developed. FoalTS is different and aims to help developers write unit and acceptance tests. The entire framework provides both the architecture and the tools necessary for this purpose."),(0,n.kt)("h3",{id:"progressive"},"Progressive"),(0,n.kt)("p",null,"Building a proof of concept or a global application is not the same thing. The first one tests an idea and must be built quickly. The other is a large production system that must be reliable and serve thousands of customers. They both have different objectives and technical concerns. However, it is highly likely that the PoC built today will one day become the global application of tomorrow, with evolving technical goals and needs. FoalTS is designed to support you along the way. At first, the framework provides a default configuration, lightweight components and practical templates to quickly start a new project. Then, as the application evolves, Foal's components, tools and architecture adapt to allow you to customize and scale your product."))}d.isMDXComponent=!0}}]);