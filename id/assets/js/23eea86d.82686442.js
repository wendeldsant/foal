"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8633],{61170:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=n(74848),s=n(28453);const r={title:"404 Page"},c=void 0,i={id:"cookbook/not-found-page",title:"404 Page",description:"Here's a way to implement custom 404 pages.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/cookbook/not-found-page.md",sourceDirName:"cookbook",slug:"/cookbook/not-found-page",permalink:"/id/docs/2.x/cookbook/not-found-page",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/cookbook/not-found-page.md",tags:[],version:"2.x",frontMatter:{title:"404 Page"},sidebar:"someSidebar",previous:{title:"Scheduling Jobs",permalink:"/id/docs/2.x/cookbook/scheduling-jobs"},next:{title:"Request Body Size",permalink:"/id/docs/2.x/cookbook/request-body-size"}},l={},a=[];function d(e){const o={blockquote:"blockquote",code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Here's a way to implement custom 404 pages."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"import { Get, HttpResponseNotFound, HttpResponseOK } from '@foal/core';\n\nclass ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page you are looking for does not exist.');\n  }\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In case you want to intercept all HTTP verbs (POST, PUT, etc), you can also use the ",(0,t.jsx)(o.code,{children:"@All"})," decorator for this."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"This feature is available from version 2.1 onwards."})}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"import { All, HttpResponseNotFound } from '@foal/core';\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @All('*')\n  notFound() {\n    return new HttpResponseNotFound('The route you are looking for does not exist.');\n  }\n}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function c(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);