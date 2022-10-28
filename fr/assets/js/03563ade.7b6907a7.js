"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Unit Testing"},s=void 0,l={unversionedId:"testing/unit-testing",id:"version-1.x/testing/unit-testing",title:"Unit Testing",description:"Convention",source:"@site/versioned_docs/version-1.x/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/fr/docs/1.x/testing/unit-testing",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/unit-testing.md",tags:[],version:"1.x",frontMatter:{title:"Unit Testing"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/1.x/testing/introduction"},next:{title:"E2E Testing",permalink:"/fr/docs/1.x/testing/e2e-testing"}},a={},c=[{value:"Convention",id:"convention",level:2},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"Testing Controllers",id:"testing-controllers",level:2},{value:"Testing Services",id:"testing-services",level:2},{value:"Testing Hooks",id:"testing-hooks",level:2},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"convention"},"Convention"),(0,i.kt)("p",null,"Every unit test file should be placed next to the file it tests with the same name and the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.ts")," extension. If this extension is not present then the file won't be executed when running the test commands."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n")),(0,i.kt)("h2",{id:"build-and-run-unit-tests"},"Build and Run Unit Tests"),(0,i.kt)("h3",{id:"watch-mode-for-development"},"Watch mode (for development)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run test\n")),(0,i.kt)("p",null,"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."),(0,i.kt)("p",null,"The process runs forever until you stop it."),(0,i.kt)("h3",{id:"simple-mode-for-ci-and-git-hooks"},"Simple mode (for CI and Git hooks)"),(0,i.kt)("p",null,"If you need to build and run the tests only once, you can use these two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n")),(0,i.kt)("p",null,"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."),(0,i.kt)("h2",{id:"testing-controllers"},"Testing Controllers"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.x/architecture/controllers"},"Controllers"),"."),(0,i.kt)("h2",{id:"testing-services"},"Testing Services"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."),(0,i.kt)("h2",{id:"testing-hooks"},"Testing Hooks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.x/architecture/hooks"},"Hooks"),"."),(0,i.kt)("h2",{id:"dependency-injection--unit-testing"},"Dependency Injection & Unit Testing"),(0,i.kt)("p",null,"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/1.x/architecture/services-and-dependency-injection"},"Services & Dependency Injection"),"."))}d.isMDXComponent=!0}}]);