"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7836],{84883:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(74848),t=n(28453);const o={title:"ExpressJS"},a=void 0,i={id:"common/expressjs",title:"ExpressJS",description:"FoalTS applications are created with the createApp function in the src/index.ts file. This function takes the root controller class (known as AppController) as parameter.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/common/expressjs.md",sourceDirName:"common",slug:"/common/expressjs",permalink:"/fr/docs/3.x/common/expressjs",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/common/expressjs.md",tags:[],version:"3.x",frontMatter:{title:"ExpressJS"},sidebar:"someSidebar",previous:{title:"Utilitaires",permalink:"/fr/docs/3.x/common/utilities"},next:{title:"Introduction",permalink:"/fr/docs/3.x/databases/typeorm/introduction"}},p={},l=[{value:"Custom Express Instance",id:"custom-express-instance",level:2},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",level:2},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",level:2},{value:"Integrating Foal with an existing Express application",id:"integrating-foal-with-an-existing-express-application",level:3},{value:"Calling services from outside the Foal application",id:"calling-services-from-outside-the-foal-application",level:3}];function c(e){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["FoalTS applications are created with the ",(0,r.jsx)(s.code,{children:"createApp"})," function in the ",(0,r.jsx)(s.code,{children:"src/index.ts"})," file. This function takes the root controller class (known as ",(0,r.jsx)(s.code,{children:"AppController"}),") as parameter."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",(0,r.jsx)(s.strong,{children:"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"}),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."]}),"\n",(0,r.jsx)(s.h2,{id:"custom-express-instance",children:"Custom Express Instance"}),"\n",(0,r.jsxs)(s.p,{children:["You can provide your own express instance to ",(0,r.jsx)(s.code,{children:"createApp"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n\n"})}),"\n",(0,r.jsx)(s.h2,{id:"pre-and-post-express-middlewares",children:"Pre and Post Express Middlewares"}),"\n",(0,r.jsxs)(s.p,{children:["You can also pass global Express middlewares as options to the ",(0,r.jsx)(s.code,{children:"createApp"})," function."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = await createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n"})}),"\n",(0,r.jsx)(s.p,{children:"Pre-middlewares are executed before Foal's controllers and hooks and before the internal Express middlewares of the framework. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["In the rare case that you need to run middleware after Foal's internal Express middlewares, you can also use the ",(0,r.jsx)(s.code,{children:"afterPreMiddlewares"})," option for this."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"migrating-from-express-to-foalts",children:"Migrating from Express to FoalTS"}),"\n",(0,r.jsx)(s.h3,{id:"integrating-foal-with-an-existing-express-application",children:"Integrating Foal with an existing Express application"}),"\n",(0,r.jsxs)(s.p,{children:["In your ",(0,r.jsx)(s.code,{children:"tsconfig.json"}),", set the following two options to ",(0,r.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    // ...\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n  }\n}\n'})}),"\n",(0,r.jsx)(s.p,{children:"Then, in your existing code, create the FoalTS application and use it as if it were a simple Express router."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"const app = await createApp(AppController);\n\nconst expressApp = express();\nexpressApp.use('/api', app);\nexpressApp.listen(3000, () => console.log('Listening on port 3000...'));\n"})}),"\n",(0,r.jsx)(s.h3,{id:"calling-services-from-outside-the-foal-application",children:"Calling services from outside the Foal application"}),"\n",(0,r.jsxs)(s.p,{children:["In case your are migrating your ExpressJS application to FoalTS, you can also access FoalTS service manager using ",(0,r.jsx)(s.code,{children:"app.foal.services"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(96540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);