"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2668],{26751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453);const i={title:"JSX Server-Side Rendering"},o=void 0,c={id:"frontend-integration/jsx-server-side-rendering",title:"JSX Server-Side Rendering",description:'If you are interested in SSR without JSX, then you might take a look at the "templating" page.',source:"@site/versioned_docs/version-1.x/frontend-integration/jsx-server-side-rendering.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/jsx-server-side-rendering",permalink:"/es/docs/1.x/frontend-integration/jsx-server-side-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/jsx-server-side-rendering.md",tags:[],version:"1.x",frontMatter:{title:"JSX Server-Side Rendering"},sidebar:"someSidebar",previous:{title:"Angular, React & Vue",permalink:"/es/docs/1.x/frontend-integration/angular-react-vue"},next:{title:"Nuxt.js",permalink:"/es/docs/1.x/frontend-integration/nuxt.js"}},d={},l=[{value:"Compile JSX Files",id:"compile-jsx-files",level:2},{value:"Example with React",id:"example-with-react",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you are interested in SSR without JSX, then you might take a look at ",(0,r.jsx)(n.a,{href:"/es/docs/1.x/utilities/templating",children:'the "templating" page'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compile-jsx-files",children:"Compile JSX Files"}),"\n",(0,r.jsx)(n.p,{children:"The TypeScript compiler supports JSX."}),"\n",(0,r.jsxs)(n.p,{children:["To enable this feature, update the ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    ...\n    "jsx": "react",\n  },\n  "include": [\n    "src/**/*.ts"\n    "src/**/*.tsx"\n  ]\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then, add the file extension ",(0,r.jsx)(n.code,{children:"tsx"})," in every ",(0,r.jsx)(n.code,{children:"tsconfig.*.json"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Example with ",(0,r.jsx)(n.code,{children:"tsconfig.app.json"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/app/**/*.ts",\n    "src/app/**/*.tsx",\n    "src/index.ts"\n  ],\n  "exclude": [\n    "src/app/**/*.spec.ts"\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Every file using JSX must now have the extension ",(0,r.jsx)(n.code,{children:".tsx"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example-with-react",children:"Example with React"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install react react-dom @types/react-dom\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This example shows how to use JSX SSR with React. It assumes that ",(0,r.jsx)(n.code,{children:"templates"})," directory is in the root, next to ",(0,r.jsx)(n.code,{children:"src"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"view.controller.tsx"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Get, render } from '@foal/core';\nimport * as React from 'react';\nimport * as ReactDOMServer from 'react-dom/server';\n\nexport class ViewController {\n\n  @Get('/')\n  async index() {\n    const content = ReactDOMServer.renderToString(<div>Hello world!</div>);\n\n    return render('./templates/index.html', {\n      content,\n    });\n  }\n\n}\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"./templates/index.html"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);