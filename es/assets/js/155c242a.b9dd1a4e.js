"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9660],{74150:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=t(74848),r=t(28453);const n={title:"Root Imports"},i=void 0,c={id:"cookbook/root-imports",title:"Root Imports",description:"FoalTS build does not resolve root imports by default. You must install the module-alias package if you want to use them. Here's how to configure the library with Foal:",source:"@site/versioned_docs/version-1.x/cookbook/root-imports.md",sourceDirName:"cookbook",slug:"/cookbook/root-imports",permalink:"/es/docs/1.x/cookbook/root-imports",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/root-imports.md",tags:[],version:"1.x",frontMatter:{title:"Root Imports"},sidebar:"someSidebar",previous:{title:"ExpressJS",permalink:"/es/docs/1.x/cookbook/expressjs"},next:{title:"Limit Repeated Requests",permalink:"/es/docs/1.x/cookbook/limit-repeated-requests"}},l={},a=[];function d(e){const o={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"// Relative import\nimport { User } from '../../entities';\n\n// Root import\nimport { User } from 'app/entities';\n"})}),"\n",(0,s.jsxs)(o.p,{children:["FoalTS build does not resolve root imports by default. You must install the ",(0,s.jsx)(o.a,{href:"https://www.npmjs.com/package/module-alias",children:"module-alias"})," package if you want to use them. Here's how to configure the library with Foal:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"npm install module-alias\n"})}),"\n",(0,s.jsx)(o.p,{children:"Specify the directory from which root imports should be resolved during compilation."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"tsconfig.json"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "baseUrl": "src",\n    ...\n  }\n}\n'})}),"\n",(0,s.jsx)(o.p,{children:"Specify the directory from which root imports should be resolved at runtime."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"package.json"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  ...\n   "_moduleDirectories": ["./build"]\n}\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Then register the loader at the top of the file ",(0,s.jsx)(o.code,{children:"src/index.ts"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"src/index.ts"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"import 'module-alias/register';\n\n// ...\n"})}),"\n",(0,s.jsx)(o.p,{children:"If you use shell scripts, the loader must also be registered at the top of each one."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"src/scripts/create-user.ts (example)"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"import 'module-alias/register';\n\n// ...\n"})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>c});var s=t(96540);const r={},n=s.createContext(r);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);