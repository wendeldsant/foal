"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"Limit Repeated Requests"},a=void 0,i={unversionedId:"cookbook/limit-repeated-requests",id:"version-1.x/cookbook/limit-repeated-requests",title:"Limit Repeated Requests",description:"To prevent brute force attacks or overloads on your application, you need to implement a rate limiter to limit the number of requests a user is able to send to your application.",source:"@site/versioned_docs/version-1.x/cookbook/limit-repeated-requests.md",sourceDirName:"cookbook",slug:"/cookbook/limit-repeated-requests",permalink:"/id/docs/1.x/cookbook/limit-repeated-requests",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/limit-repeated-requests.md",tags:[],version:"1.x",frontMatter:{title:"Limit Repeated Requests"},sidebar:"someSidebar",previous:{title:"Root Imports",permalink:"/id/docs/1.x/cookbook/root-imports"},next:{title:"Configuration",permalink:"/id/docs/1.x/deployment-and-environments/configuration"}},p={},l=[{value:"Rate limiting with CORS",id:"rate-limiting-with-cors",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To prevent brute force attacks or overloads on your application, you need to implement a rate limiter to limit the number of requests a user is able to send to your application."),(0,o.kt)("p",null,"In FoalTS you can implement a rate limiter like the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nfriedly/express-rate-limit"},"express-rate-limit")," package by creating a customized ",(0,o.kt)("inlineCode",{parentName:"p"},"express")," object and passing it as a parameter to the FoalTS ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Because the rate limiter response for rate limited requests does not get handled by FoalTS and its hooks, you need to manually set the default FoalTS headers to the response object of the rate limiter in its ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," function.\nIf you don't manually set any headers only the default Express.js headers will be set in the response.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"src/index.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport * as http from 'http';\n\n// 3p\nimport { Config, createApp } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  // Connection to the database(s)...\n    \n  const expressApp = express();\n  expressApp.use(rateLimit({\n    max: 100, // limit each IP to 100 requests per windowMs\n    windowMs: 15 * 60 * 1000, // 15 minutes\n    handler: function (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-DNS-Prefetch-Control', 'off');\n      res.setHeader('X-Download-Options', 'noopen');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode).send(this.message);\n    }\n  }));\n    \n  const app = createApp(AppController, expressApp);\n    \n  const httpServer = http.createServer(app);\n  const port = Config.get('port', 3001);\n  httpServer.listen(port, () => {\n    console.log(`Listening on port ${port}...`);\n  });\n}\n\nmain();\n")),(0,o.kt)("h2",{id:"rate-limiting-with-cors"},"Rate limiting with CORS"),(0,o.kt)("p",null,"If you need CORS headers in a rate limited response, you will need to manually add the headers in the rate limiter ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," function accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler: function (req, res, next) {\n    // Set default FoalTS headers to the response of limited requests\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-DNS-Prefetch-Control', 'off');\n    res.setHeader('X-Download-Options', 'noopen');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need.\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    // Send the response with the default statusCode and message from rateLimit\n    res.status(this.statusCode).send(this.message);\n  }\n}));\n")),(0,o.kt)("p",null,"You can find more options for ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express-rate-limit"},"express-rate-limit")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nfriedly/express-rate-limit"},"documentation"),"."))}d.isMDXComponent=!0}}]);