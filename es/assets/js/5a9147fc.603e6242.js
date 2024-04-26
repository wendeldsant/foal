"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5101],{6448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(74848),i=s(28453);const o={title:"Firebase"},r=void 0,c={id:"cloud/firebase",title:"Firebase",description:"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases.",source:"@site/versioned_docs/version-1.x/cloud/firebase.md",sourceDirName:"cloud",slug:"/cloud/firebase",permalink:"/es/docs/1.x/cloud/firebase",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cloud/firebase.md",tags:[],version:"1.x",frontMatter:{title:"Firebase"},sidebar:"someSidebar",previous:{title:"AWS Beanstalk",permalink:"/es/docs/1.x/cloud/aws-beanstalk"},next:{title:"HTTP Headers Protection",permalink:"/es/docs/1.x/security/http-headers-protection"}},a={},l=[{value:"Set Up the Firebase CLI",id:"set-up-the-firebase-cli",level:2},{value:"Create the Firebase Project",id:"create-the-firebase-project",level:2},{value:"Create the Foal Application",id:"create-the-foal-application",level:2},{value:"Configure the Project to Make it Work with Firebase",id:"configure-the-project-to-make-it-work-with-firebase",level:2},{value:"Deploy the Application",id:"deploy-the-application",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document explains how to create and deploy an application with Firebase. It assumes that you do not use TypeORM since Firebase does not provide SQL databases."}),"\n",(0,t.jsx)(n.h2,{id:"set-up-the-firebase-cli",children:"Set Up the Firebase CLI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install -g firebase-tools\nfirebase login\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-the-firebase-project",children:"Create the Firebase Project"}),"\n",(0,t.jsxs)(n.p,{children:["First create an empty project on the ",(0,t.jsx)(n.a,{href:"https://console.firebase.google.com/",children:"Firebase platform"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Then create your project locally."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"mkdir my-app\ncd my-app\nfirebase init\n"})}),"\n",(0,t.jsx)(n.p,{children:"The CLI displays some prompts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the ",(0,t.jsx)(n.code,{children:"Hosting"})," option. You may select other options as well but do not select ",(0,t.jsx)(n.code,{children:"Functions"})," (otherwise you will have to delete the ",(0,t.jsx)(n.code,{children:"functions/"})," directory just after)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The default static path must be changed to ",(0,t.jsx)(n.code,{children:"functions/public"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-the-foal-application",children:"Create the Foal Application"}),"\n",(0,t.jsx)(n.p,{children:"Create the Foal application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal createapp functions\ncd functions\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can run locally your application using ",(0,t.jsx)(n.code,{children:"npm run develop"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"npm run develop"})," over ",(0,t.jsx)(n.code,{children:"firebase serve"})," has the advantage to restart the development server when a file is changed."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-project-to-make-it-work-with-firebase",children:"Configure the Project to Make it Work with Firebase"}),"\n",(0,t.jsx)(n.p,{children:"Install the dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install firebase-functions firebase-admin\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Update the file ",(0,t.jsx)(n.code,{children:"package.json"})," in ",(0,t.jsx)(n.code,{children:"functions/"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "main": "build/index.firebase.js",\n  "engines": {\n    "node": "8"\n  }\n  ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Create a file named ",(0,t.jsx)(n.code,{children:"index.firebase.ts"})," in ",(0,t.jsx)(n.code,{children:"functions/src/"})," and export the express application."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import 'source-map-support/register';\n\n// 3p\nimport { createApp } from '@foal/core';\nimport * as functions from 'firebase-functions';\n\n// App\nimport { AppController } from './app/app.controller';\n\nexport const app = functions.https.onRequest(createApp(AppController));\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the file to ",(0,t.jsx)(n.code,{children:"tsconfig.app.json"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/app/**/*.ts",\n    "src/index.firebase.ts",\n    "src/index.ts"\n  ],\n  "exclude": [\n    "src/app/**/*.spec.ts"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Update the ",(0,t.jsx)(n.code,{children:"firebase.json"})," file to specify that the server should use the previously exported application."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "hosting": {\n    "public": "functions/public",\n    "ignore": [\n      "firebase.json",\n      "**/.*",\n      "**/node_modules/**"\n    ],\n    "rewrites": [ {\n      "source": "**",\n      "function": "app"\n    } ]\n  }\n}\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-the-application",children:"Deploy the Application"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm run build:app\nfirebase deploy\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);