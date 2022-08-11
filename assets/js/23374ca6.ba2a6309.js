"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8421],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={title:"Introduction",slug:"/"},i=void 0,l={unversionedId:"README",id:"README",title:"Introduction",description:"License: MIT",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/README.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/tutorials/simple-todo-list/1-installation"}},s={},p=[{value:"What is Foal?",id:"what-is-foal",level:2},{value:"Development Policy",id:"development-policy",level:2},{value:"Thousands of Tests",id:"thousands-of-tests",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Product Stability",id:"product-stability",level:3},{value:"Get Started",id:"get-started",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,a.kt)("h2",{id:"what-is-foal"},"What is Foal?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Foal")," (or ",(0,a.kt)("em",{parentName:"p"},"FoalTS"),") is a Node.JS framework for creating web applications."),(0,a.kt)("p",null,"It provides a set of ready-to-use components so you don't have to reinvent the wheel every time. In one single place, you have a complete environment to build web applications. This includes a CLI, testing tools, frontend utilities, scripts, advanced authentication, ORM, deployment environments, GraphQL and Swagger API, AWS utilities, and more. You no longer need to get lost on npm searching for packages and making them work together. All is provided."),(0,a.kt)("p",null,"But while offering all these features, the framework remains simple. Complexity and unnecessary abstractions are put aside to provide the most intuitive and expressive syntax. We believe that concise and elegant code is the best way to develop an application and maintain it in the future. It also allows you to spend more time coding rather than trying to understand how the framework works."),(0,a.kt)("p",null,"Finally, the framework is entirely written in TypeScript. The language brings you optional static type-checking along with the latest ECMAScript features. This allows you to detect most silly errors during compilation and improve the quality of your code. It also offers you autocompletion and a well documented API."),(0,a.kt)("h2",{id:"development-policy"},"Development Policy"),(0,a.kt)("h3",{id:"thousands-of-tests"},"Thousands of Tests"),(0,a.kt)("p",null,"Testing FoalTS is put on a very high priority. Providing a reliable product is really important to us. As of December 2020, the framework is covered by more than 2100 tests."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"New features, no matter what they offer, are useless if they are not well documented. Maintaining complete and quality documentation is key to the framework. If you think something is missing or unclear, feel free to open an issue on Github!"),(0,a.kt)("h3",{id:"product-stability"},"Product Stability"),(0,a.kt)("p",null,"Great attention is paid to the stability of the product. You can find out more by consulting our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"},"dependency policy"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"},"semantic versioning rules")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"long-term support policy"),"."),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),(0,a.kt)("p",null,"The development server is started! Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," and find our welcoming page!"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"./tutorials/simple-todo-list/1-installation"},"Continue with the tutorial")," \ud83c\udf31"))}u.isMDXComponent=!0}}]);