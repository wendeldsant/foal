(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(263)),c={title:"Unit Testing"},a={unversionedId:"testing/unit-testing",id:"testing/unit-testing",isDocsHomePage:!1,title:"Unit Testing",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/testing/unit-testing.md",slug:"/testing/unit-testing",permalink:"/docs/testing/unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/unit-testing.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/testing/introduction"},next:{title:"E2E Testing",permalink:"/docs/testing/e2e-testing"}},s=[{value:"Convention",id:"convention",children:[]},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",children:[{value:"Watch mode (for development)",id:"watch-mode-for-development",children:[]},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",children:[]}]},{value:"Testing Controllers",id:"testing-controllers",children:[]},{value:"Testing Services",id:"testing-services",children:[]},{value:"Testing Hooks",id:"testing-hooks",children:[]},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(i.b)("h2",{id:"convention"},"Convention"),Object(i.b)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",Object(i.b)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),Object(i.b)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),Object(i.b)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run test\n")),Object(i.b)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),Object(i.b)("p",null,"The process runs forever until you stop it."),Object(i.b)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),Object(i.b)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),Object(i.b)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),Object(i.b)("h2",{id:"testing-controllers"},"Testing Controllers"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/architecture/controllers"}),"Controllers"),"."),Object(i.b)("h2",{id:"testing-services"},"Testing Services"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/architecture/services-and-dependency-injection"}),"Services & Dependency Injection"),"."),Object(i.b)("h2",{id:"testing-hooks"},"Testing Hooks"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/architecture/hooks"}),"Hooks"),"."),Object(i.b)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),Object(i.b)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/architecture/services-and-dependency-injection"}),"Services & Dependency Injection"),"."))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);