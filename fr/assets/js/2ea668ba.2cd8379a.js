"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1792],{53570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>i,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),r=t(28453);const s={title:"404 Page"},c=void 0,a={id:"frontend/not-found-page",title:"404 Page",description:"Here's a way to implement custom 404 pages.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/frontend/not-found-page.md",sourceDirName:"frontend",slug:"/frontend/not-found-page",permalink:"/fr/docs/frontend/not-found-page",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend/not-found-page.md",tags:[],version:"current",frontMatter:{title:"404 Page"},sidebar:"someSidebar",previous:{title:"Nuxt",permalink:"/fr/docs/frontend/nuxt.js"},next:{title:"Commandes",permalink:"/fr/docs/cli/commands"}},l={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Here's a way to implement custom 404 pages."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseNotFound, HttpResponseOK } from '@foal/core';\n\nclass ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page you are looking for does not exist.');\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In case you want to intercept all HTTP verbs (POST, PUT, etc), you can also use the ",(0,o.jsx)(n.code,{children:"@All"})," decorator for this."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { All, HttpResponseNotFound } from '@foal/core';\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @All('*')\n  notFound() {\n    return new HttpResponseNotFound('The route you are looking for does not exist.');\n  }\n}\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);