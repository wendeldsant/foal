"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9743],{10582:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Rate Limiting"},o=void 0,a={id:"security/rate-limiting",title:"Rate Limiting",description:"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/security/rate-limiting.md",sourceDirName:"security",slug:"/security/rate-limiting",permalink:"/es/docs/security/rate-limiting",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/rate-limiting.md",tags:[],version:"current",frontMatter:{title:"Rate Limiting"},sidebar:"someSidebar",previous:{title:"CORS",permalink:"/es/docs/security/cors"},next:{title:"Limitaci\xf3n Tama\xf1o del Cuerpo de las Solicitudes",permalink:"/es/docs/security/body-size-limiting"}},c={},l=[{value:"Basic Example",id:"basic-example",level:2},{value:"Usage with CORS",id:"usage-with-cors",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application."}),"\n",(0,n.jsx)(t.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,n.jsxs)(t.p,{children:["Foal does not provide a built-in utility for this, but you can use the ",(0,n.jsx)(t.a,{href:"https://github.com/nfriedly/express-rate-limit",children:"express-rate-limit"})," package to handle it."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npm install express express-rate-limit\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"src/index.ts"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// 3p\nimport { Config, createApp, displayServerURL } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const expressApp = express();\n  expressApp.use(rateLimit({\n    // Limit each IP to 100 requests per windowMs\n    max: 100,\n    // 15 minutes\n    windowMs: 15 * 60 * 1000,\n    handler (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode || 429).send(this.message);\n    }\n  }));\n    \n  const app = await createApp(AppController, { expressInstance: expressApp });\n\n  const port = Config.get('port', 'number', 3001);\n  app.listen(port, () => displayServerURL(port));\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); });\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage-with-cors",children:"Usage with CORS"}),"\n",(0,n.jsxs)(t.p,{children:["In case your application needs to allow CORS requests, you can also update your ",(0,n.jsx)(t.code,{children:"index.ts"})," as follows."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler (req, res, next) {\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need (Authorization, etc).\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    res.status(this.statusCode || 429).send(this.message);\n  }\n}));\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);