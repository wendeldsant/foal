"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5260],{89045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(74848),r=n(28453);const i={title:"CSRF Protection",id:"tuto-13-csrf",slug:"13-csrf"},s=void 0,a={id:"tutorials/real-world-example-with-react/tuto-13-csrf",title:"CSRF Protection",description:"Since you use authentication with cookies, you need to add CSRF protection to your application.  This is really easy with Foal, even when building a SPA.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/13-csrf.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/13-csrf",permalink:"/id/docs/tutorials/real-world-example-with-react/13-csrf",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/13-csrf.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"CSRF Protection",id:"tuto-13-csrf",slug:"13-csrf"},sidebar:"someSidebar",previous:{title:"Image Upload and Download",permalink:"/id/docs/tutorials/real-world-example-with-react/12-file-upload"},next:{title:"Production Build",permalink:"/id/docs/tutorials/real-world-example-with-react/14-production-build"}},c={},l=[];function d(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Since you use authentication with cookies, you need to add CSRF protection to your application.  This is really easy with Foal, even when building a SPA."}),"\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"default.json"})," config file and enable the CSRF protection."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "port": "env(PORT)",\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n      "csrf": {\n        "enabled": true\n      }\n    },\n    ...\n  }\n  ...\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Now, when using sessions with cookies, the server will send an additional token to the client in a cookie named ",(0,o.jsx)(t.code,{children:"XSRF-Token"}),". This token will have to be retrieved by the front-end application and sent back in every subsequent POST, PATCH, PUT and DELETE request with the ",(0,o.jsx)(t.code,{children:"X-XSRF-Token"})," header. If it is not, the server will return a 403 error."]}),"\n",(0,o.jsxs)(t.p,{children:["If you use ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/axios",children:"axios"})," as your request library, as in this tutorial, you don't have to do anything. Everything is handled in the background."]}),"\n",(0,o.jsx)(t.p,{children:"If you restart your development server and open your browser's development tools, you will see that axios automatically includes the token for you when creating a new story."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"X-XSRF-Token header example",src:n(85031).A+"",width:"1928",height:"116"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},85031:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/csrf-a395cf4e61edfeaa39c97b11c168dc86.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);