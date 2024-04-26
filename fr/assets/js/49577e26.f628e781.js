"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6018],{96261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const o={title:"Tests Unitaires"},r=void 0,c={id:"testing/unit-testing",title:"Tests Unitaires",description:"Convention",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/fr/docs/testing/unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/unit-testing.md",tags:[],version:"current",frontMatter:{title:"Tests Unitaires"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/testing/introduction"},next:{title:"Tests de Bout en Bout",permalink:"/fr/docs/testing/e2e-testing"}},d={},l=[{value:"Convention",id:"convention",level:2},{value:"Build and Run Unit Tests",id:"build-and-run-unit-tests",level:2},{value:"Watch mode (for development)",id:"watch-mode-for-development",level:3},{value:"Simple mode (for CI and Git hooks)",id:"simple-mode-for-ci-and-git-hooks",level:3},{value:"Testing Controllers",id:"testing-controllers",level:2},{value:"Testing Services",id:"testing-services",level:2},{value:"Testing Hooks",id:"testing-hooks",level:2},{value:"Dependency Injection &amp; Unit Testing",id:"dependency-injection--unit-testing",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"convention",children:"Convention"}),"\n",(0,s.jsxs)(n.p,{children:["Every unit test file should be placed next to the file it tests with the same name and the ",(0,s.jsx)(n.code,{children:".spec.ts"})," extension. If this extension is not present then the file won't be executed when running the test commands."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"'- services\n  |- my-service.service.ts\n  '- my-service.service.spec.ts\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-and-run-unit-tests",children:"Build and Run Unit Tests"}),"\n",(0,s.jsx)(n.h3,{id:"watch-mode-for-development",children:"Watch mode (for development)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run test\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command builds and executes the unit tests. If you modify a file and save it, the code is rebuilt and the tests are run again. This is particularly useful in development: you do not need to re-run the command every time you make code changes."}),"\n",(0,s.jsx)(n.p,{children:"The process runs forever until you stop it."}),"\n",(0,s.jsx)(n.h3,{id:"simple-mode-for-ci-and-git-hooks",children:"Simple mode (for CI and Git hooks)"}),"\n",(0,s.jsx)(n.p,{children:"If you need to build and run the tests only once, you can use these two commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm run build:test # Build the unit tests code (compile the typescript files and copy the templates)\nnpm run start:test # Execute the unit tests from the built files\n"})}),"\n",(0,s.jsx)(n.p,{children:"These commands are particularly useful when you want to integrate your tests into a CI pipeline or a Git hook."}),"\n",(0,s.jsx)(n.h2,{id:"testing-controllers",children:"Testing Controllers"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/fr/docs/architecture/controllers",children:"Controllers"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"testing-services",children:"Testing Services"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/fr/docs/architecture/services-and-dependency-injection",children:"Services & Dependency Injection"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"testing-hooks",children:"Testing Hooks"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/fr/docs/architecture/hooks",children:"Hooks"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"dependency-injection--unit-testing",children:"Dependency Injection & Unit Testing"}),"\n",(0,s.jsx)(n.p,{children:"FoalTS uses dependency injection to keep the code loosely coupled and so enhance testatibility."}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/fr/docs/architecture/services-and-dependency-injection",children:"Services & Dependency Injection"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);