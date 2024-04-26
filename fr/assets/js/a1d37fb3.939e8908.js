"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6956],{26058:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(74848),s=t(28453);const o={title:"Nuxt"},i=void 0,d={id:"frontend/nuxt.js",title:"Nuxt",description:"Nuxt is a frontend framework based on Vue.JS.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/frontend/nuxt.js.md",sourceDirName:"frontend",slug:"/frontend/nuxt.js",permalink:"/fr/docs/frontend/nuxt.js",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend/nuxt.js.md",tags:[],version:"current",frontMatter:{title:"Nuxt"},sidebar:"someSidebar",previous:{title:"Rendu c\xf4t\xe9 serveur (SSR)",permalink:"/fr/docs/frontend/server-side-rendering"},next:{title:"404 Page",permalink:"/fr/docs/frontend/not-found-page"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Set Up",id:"set-up",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://nuxtjs.org/",children:"Nuxt"})," is a frontend framework based on ",(0,r.jsx)(e.a,{href:"http://vuejs.org",children:"Vue.JS"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"This document explains how to use it in conjunction with FoalTS."}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(e.p,{children:"Create your frontend and backend projects in two different folders."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"foal createapp backend\nnpx create-nuxt-app frontend\n"})}),"\n",(0,r.jsx)(e.h2,{id:"set-up",children:"Set Up"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Open the file ",(0,r.jsx)(e.code,{children:"nuxt.config.js"})," in the ",(0,r.jsx)(e.code,{children:"frontend/"})," directory, move it to your ",(0,r.jsx)(e.code,{children:"backend/"})," directory and update its first lines as follows:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"module.exports = {\n  srcDir: '../frontend',\n  // ...\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Go to your server directory and install ",(0,r.jsx)(e.code,{children:"nuxt"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"npm install nuxt\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Then update your ",(0,r.jsx)(e.code,{children:"src/index.ts"})," file as follows:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"import { loadNuxt, build } from 'nuxt';\n// ...\n\nasync function main() {\n  const isDev = process.env.NODE_ENV !== 'production';\n  // We get Nuxt instance\n  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');\n\n  if (isDev) {\n    build(nuxt)\n  }\n\n  // ...\n\n  const app = await createApp(AppController, {\n    postMiddlewares: [\n      nuxt.render\n    ]\n  });\n\n  // ...\n}\n\nmain();\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Finally, delete the file ",(0,r.jsx)(e.code,{children:"index.html"})," in ",(0,r.jsx)(e.code,{children:"backend/public"}),"."]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>d});var r=t(96540);const s={},o=r.createContext(s);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);