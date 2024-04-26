"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9354],{72242:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453);const r={title:"Introduction"},i=void 0,a={id:"testing/introduction",title:"Introduction",description:"Every shipped app should come with a minimum set of tests. Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away.",source:"@site/versioned_docs/version-1.x/testing/introduction.md",sourceDirName:"testing",slug:"/testing/introduction",permalink:"/docs/1.x/testing/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/testing/introduction.md",tags:[],version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"VSCode",permalink:"/docs/1.x/development-environment/vscode"},next:{title:"Unit Testing",permalink:"/docs/1.x/testing/unit-testing"}},d={},c=[{value:"The Mocha Framework",id:"the-mocha-framework",level:2},{value:"The <code>assert</code> Node.js module",id:"the-assert-nodejs-module",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Every shipped app should come with a ",(0,n.jsx)(t.strong,{children:"minimum set of tests"}),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."]}),"\n",(0,n.jsx)(t.h2,{id:"the-mocha-framework",children:"The Mocha Framework"}),"\n",(0,n.jsxs)(t.p,{children:["The testing ecosystem is based on the ",(0,n.jsx)(t.a,{href:"https://mochajs.org/",children:"Mocha"})," framework. It provides functions to help you structuring your tests and also making assertions."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"describe"})," function groups tests (or groups of tests) together."]}),"\n",(0,n.jsxs)(t.li,{children:["And the ",(0,n.jsx)(t.code,{children:"it"})," function defines an individual test."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n"})}),"\n",(0,n.jsx)(t.p,{children:"Running this file with mocha gives you the below report:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Test report",src:s(47487).A+"",width:"494",height:"224"})}),"\n",(0,n.jsxs)(t.h2,{id:"the-assert-nodejs-module",children:["The ",(0,n.jsx)(t.code,{children:"assert"})," Node.js module"]}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the Mocha framework, you can use the Node.js built-in ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/assert.html",children:"assert"})," module. It provides some useful functions such as ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message",children:"ok"}),", ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message",children:"strictEqual"})," or ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message",children:"deepStrictEqual"})," to make your tests more readable and concise."]}),"\n",(0,n.jsx)(t.p,{children:"The previous code can be refactored as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},47487:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);