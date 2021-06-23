(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7246],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),l=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2729:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],c={title:"Unit Testing"},a=void 0,l={unversionedId:"testing/unit-testing",id:"version-1.x/testing/unit-testing",isDocsHomePage:!1,title:"Unit Testing",description:"Convention",source:"@site/versioned_docs/version-1.x/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/id/docs/1.x/testing/unit-testing",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/unit-testing.md",version:"1.x",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/id/docs/1.x/testing/introduction"},next:{title:"E2E Testing",permalink:"/id/docs/1.x/testing/e2e-testing"}},u=[{value:"Convention",id:"convention",children:[]},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",children:[{value:"Watch mode (for development)",id:"watch-mode-for-development",children:[]},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",children:[]}]},{value:"Testing Controllers",id:"testing-controllers",children:[]},{value:"Testing Services",id:"testing-services",children:[]},{value:"Testing Hooks",id:"testing-hooks",children:[]},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"convention"},"Convention"),(0,o.kt)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),(0,o.kt)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),(0,o.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run test\n")),(0,o.kt)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,o.kt)("p",null,"The process runs forever until you stop it."),(0,o.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,o.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),(0,o.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,o.kt)("h2",{id:"testing-controllers"},"Testing Controllers"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/id/docs/1.x/architecture/controllers"},"Controllers"),"."),(0,o.kt)("h2",{id:"testing-services"},"Testing Services"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/id/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."),(0,o.kt)("h2",{id:"testing-hooks"},"Testing Hooks"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/id/docs/1.x/architecture/hooks"},"Hooks"),"."),(0,o.kt)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),(0,o.kt)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/id/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."))}p.isMDXComponent=!0}}]);