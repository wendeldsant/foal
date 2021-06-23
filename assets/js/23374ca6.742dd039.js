(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8421],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Introduction",slug:"/"},s=void 0,c={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Introduction",description:"License: MIT",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/README.md",version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/tutorials/simple-todo-list/1-installation"}},p=[{value:"What is Foal?",id:"what-is-foal",children:[]},{value:"Development Policy",id:"development-policy",children:[{value:"Thousands of Tests",id:"thousands-of-tests",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Product Stability",id:"product-stability",children:[]}]},{value:"Get Started",id:"get-started",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,a.kt)("h2",{id:"what-is-foal"},"What is Foal?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Foal")," (or ",(0,a.kt)("em",{parentName:"p"},"FoalTS"),") is a Node.JS framework for creating web applications."),(0,a.kt)("p",null,"It provides a set of ready-to-use components so you don't have to reinvent the wheel every time. In one single place, you have a complete environment to build web applications. This includes a CLI, testing tools, frontend utilities, scripts, advanced authentication, ORM, deployment environments, GraphQL and Swagger API, AWS utilities, and more. You no longer need to get lost on npm searching for packages and making them work together. All is provided."),(0,a.kt)("p",null,"But while offering all these features, the framework remains simple. Complexity and unnecessary abstractions are put aside to provide the most intuitive and expressive syntax. We believe that concise and elegant code is the best way to develop an application and maintain it in the future. It also allows you to spend more time coding rather than trying to understand how the framework works."),(0,a.kt)("p",null,"Finally, the framework is entirely written in TypeScript. The language brings you optional static type-checking along with the latest ECMAScript features. This allows you to detect most silly errors during compilation and improve the quality of your code. It also offers you autocompletion and a well documented API."),(0,a.kt)("h2",{id:"development-policy"},"Development Policy"),(0,a.kt)("h3",{id:"thousands-of-tests"},"Thousands of Tests"),(0,a.kt)("p",null,"Testing FoalTS is put on a very high priority. Providing a reliable product is really important to us. As of December 2020, the framework is covered by more than 2100 tests."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"New features, no matter what they offer, are useless if they are not well documented. Maintaining complete and quality documentation is key to the framework. If you think something is missing or unclear, feel free to open an issue on Github!"),(0,a.kt)("h3",{id:"product-stability"},"Product Stability"),(0,a.kt)("p",null,"Great attention is paid to the stability of the product. You can find out more by consulting our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"},"dependency policy"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"},"semantic versioning rules")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"long-term support policy"),"."),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),(0,a.kt)("p",null,"The development server is started! Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," and find our welcoming page!"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"./tutorials/simple-todo-list/1-installation"},"Continue with the tutorial")," \ud83c\udf31"))}d.isMDXComponent=!0}}]);