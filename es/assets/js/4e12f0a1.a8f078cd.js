"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7939],{89576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const r={title:"Limit Repeated Requests"},i=void 0,a={id:"cookbook/limit-repeated-requests",title:"Limit Repeated Requests",description:"To prevent brute force attacks or overloads on your application, you need to implement a rate limiter to limit the number of requests a user is able to send to your application.",source:"@site/versioned_docs/version-1.x/cookbook/limit-repeated-requests.md",sourceDirName:"cookbook",slug:"/cookbook/limit-repeated-requests",permalink:"/es/docs/1.x/cookbook/limit-repeated-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/limit-repeated-requests.md",tags:[],version:"1.x",frontMatter:{title:"Limit Repeated Requests"},sidebar:"someSidebar",previous:{title:"Root Imports",permalink:"/es/docs/1.x/cookbook/root-imports"},next:{title:"Configuration",permalink:"/es/docs/1.x/deployment-and-environments/configuration"}},d={},l=[{value:"Rate limiting with CORS",id:"rate-limiting-with-cors",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"To prevent brute force attacks or overloads on your application, you need to implement a rate limiter to limit the number of requests a user is able to send to your application."}),"\n",(0,o.jsxs)(t.p,{children:["In FoalTS you can implement a rate limiter like the ",(0,o.jsx)(t.a,{href:"https://github.com/nfriedly/express-rate-limit",children:"express-rate-limit"})," package by creating a customized ",(0,o.jsx)(t.code,{children:"express"})," object and passing it as a parameter to the FoalTS ",(0,o.jsx)(t.code,{children:"createApp"})," function."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: Because the rate limiter response for rate limited requests does not get handled by FoalTS and its hooks, you need to manually set the default FoalTS headers to the response object of the rate limiter in its ",(0,o.jsx)(t.code,{children:"handle"})," function.\nIf you don't manually set any headers only the default Express.js headers will be set in the response."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"src/index.ts"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  // Connection to the database(s)...\n    \n  const expressApp = express();\n  expressApp.use(rateLimit({\n    max: 100, // limit each IP to 100 requests per windowMs\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    handler: function (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-DNS-Prefetch-Control', 'off');\n      res.setHeader('X-Download-Options', 'noopen');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode).send(this.message);\n    }\n  }));\n    \n  const app = createApp(AppController, expressApp);\n    \n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 3001);\n  httpServer.listen(port, () => {\n    console.log(`Listening on port ${port}...`);\n  });\n}\n\nmain();\n"})}),"\n",(0,o.jsx)(t.h2,{id:"rate-limiting-with-cors",children:"Rate limiting with CORS"}),"\n",(0,o.jsxs)(t.p,{children:["If you need CORS headers in a rate limited response, you will need to manually add the headers in the rate limiter ",(0,o.jsx)(t.code,{children:"handler"})," function accordingly."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler: function (req, res, next) {\n    // Set default FoalTS headers to the response of limited requests\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-DNS-Prefetch-Control', 'off');\n    res.setHeader('X-Download-Options', 'noopen');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need.\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    // Send the response with the default statusCode and message from rateLimit\n    res.status(this.statusCode).send(this.message);\n  }\n}));\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can find more options for ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/express-rate-limit",children:"express-rate-limit"})," in the ",(0,o.jsx)(t.a,{href:"https://github.com/nfriedly/express-rate-limit",children:"documentation"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);