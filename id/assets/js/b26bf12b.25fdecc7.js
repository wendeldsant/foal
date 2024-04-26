"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4776],{44777:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(74848),r=t(28453);const i={title:"Nuxt.js"},o=void 0,d={id:"frontend-integration/nuxt.js",title:"Nuxt.js",description:"Nuxt.js is a frontend framework based on Vue.JS.",source:"@site/versioned_docs/version-1.x/frontend-integration/nuxt.js.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/nuxt.js",permalink:"/id/docs/1.x/frontend-integration/nuxt.js",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/nuxt.js.md",tags:[],version:"1.x",frontMatter:{title:"Nuxt.js"},sidebar:"someSidebar",previous:{title:"JSX Server-Side Rendering",permalink:"/id/docs/1.x/frontend-integration/jsx-server-side-rendering"},next:{title:"Local & Cloud Storage",permalink:"/id/docs/1.x/file-system/local-and-cloud-storage"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Set Up",id:"set-up",level:2}];function a(n){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://nuxtjs.org/",children:"Nuxt.js"})," is a frontend framework based on ",(0,s.jsx)(e.a,{href:"http://vuejs.org",children:"Vue.JS"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["This document explains how to use it in conjunction with FoalTS. A sample source code can be found on ",(0,s.jsx)(e.a,{href:"https://github.com/FoalTS/foal/tree/master/samples/nuxt.js",children:"Github"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(e.p,{children:"Create your frontend and backend projects in two different folders."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"foal createapp backend\nnpx create-nuxt-app frontend\n"})}),"\n",(0,s.jsxs)(e.p,{children:["When the CLI asks which server framework to choose, select ",(0,s.jsx)(e.em,{children:"None"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"set-up",children:"Set Up"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to your server directory and install ",(0,s.jsx)(e.code,{children:"nuxt"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npm install nuxt\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Then update your ",(0,s.jsx)(e.code,{children:"src/index.ts"})," file as follows:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Builder, Nuxt } from 'nuxt';\n// ...\n\n// Import and Set Nuxt.js options\nconst config = require('../../frontend/nuxt.config.js');\nconfig.dev = Config.get('settings.debug', true);\n\nasync function main() {\n  // Init Nuxt.js\n  const nuxt = new Nuxt(config);\n\n  // Build only in dev mode\n  if (config.dev) {\n    const builder = new Builder(nuxt);\n    await builder.build();\n  } else {\n    await nuxt.ready();\n  }\n\n  // ...\n\n  const app = createApp(AppController, {\n    postMiddlewares: [\n      nuxt.render\n    ]\n  });\n\n  // ...\n}\n\nmain();\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Delete the file ",(0,s.jsx)(e.code,{children:"index.html"})," in ",(0,s.jsx)(e.code,{children:"backend/public"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Open the file ",(0,s.jsx)(e.code,{children:"nuxt.config.js"})," in the ",(0,s.jsx)(e.code,{children:"frontend/"})," directory and update its first lines as follows:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"module.exports = {\n  srcDir: '../frontend',\n  // ...\n}\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);