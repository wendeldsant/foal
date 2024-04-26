"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9398],{36695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),o=t(28453);const i={title:"Checklist du D\xe9ploiement",sidebar_label:"Checklist"},r=void 0,c={id:"deployment-and-environments/checklist",title:"Checklist du D\xe9ploiement",description:"Set the Node.JS environment to production",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/deployment-and-environments/checklist.md",sourceDirName:"deployment-and-environments",slug:"/deployment-and-environments/checklist",permalink:"/fr/docs/3.x/deployment-and-environments/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/deployment-and-environments/checklist.md",tags:[],version:"3.x",frontMatter:{title:"Checklist du D\xe9ploiement",sidebar_label:"Checklist"},sidebar:"someSidebar",previous:{title:"Limitation de la Taille du Corps de Requ\xeate",permalink:"/fr/docs/3.x/security/body-size-limiting"},next:{title:"Express / Fastify",permalink:"/fr/docs/3.x/comparison-with-other-frameworks/express-fastify"}},d={},l=[{value:"Set the Node.JS environment to <code>production</code>",id:"set-the-nodejs-environment-to-production",level:2},{value:"Use HTTPS",id:"use-https",level:2},{value:"Generate Different Secrets",id:"generate-different-secrets",level:2},{value:"Database Credentials &amp; Migrations",id:"database-credentials--migrations",level:2},{value:"Files to Upload",id:"files-to-upload",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"set-the-nodejs-environment-to-production",children:["Set the Node.JS environment to ",(0,s.jsx)(n.code,{children:"production"})]}),"\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," (or ",(0,s.jsx)(n.code,{children:"FOAL_ENV"}),") environment variable to ",(0,s.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"NODE_ENV=production npm run start\n"})}),"\n",(0,s.jsx)(n.h2,{id:"use-https",children:"Use HTTPS"}),"\n",(0,s.jsxs)(n.p,{children:["You must use HTTPS to prevent ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",children:"man-in-the-middle attacks"}),". Otherwise, your credentials and authentication tokens will appear in clear on the network."]}),"\n",(0,s.jsxs)(n.p,{children:["If you use cookies, make sure to let them only be sent to the server when the request is made using SSL. You can do such thing with the cookie ",(0,s.jsx)(n.code,{children:"secure"})," directive."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"config/production.yml (example)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"settings:\n  // If you use sessions\n  session:\n    cookie:\n      secure: true\n  // If you use JWT\n  jwt:\n    cookie:\n      secure: true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generate-different-secrets",children:"Generate Different Secrets"}),"\n",(0,s.jsxs)(n.p,{children:["Use different secrets for your production environment (JWT, etc). Specify them using environment variables or a ",(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:".env (example)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SETTINGS_JWT_SECRET=YZP0iv6gM+VBTxk61l8nKUno2QxsQHO9hm8XfeedZUw\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can generate 256-bit secrets encoded in base64 with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"foal createsecret\n"})}),"\n",(0,s.jsx)(n.h2,{id:"database-credentials--migrations",children:"Database Credentials & Migrations"}),"\n",(0,s.jsxs)(n.p,{children:["Use different credentials for your production database. Specify them using environment variables or a ",(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"If you use database migrations, run them on your production server with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run migrations\n"})}),"\n",(0,s.jsx)(n.h2,{id:"files-to-upload",children:"Files to Upload"}),"\n",(0,s.jsx)(n.p,{children:"If you install dependencies and build the app on the remote host, then you should upload these files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"config/\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\nsrc/\ntsconfig.app.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you will need to run ",(0,s.jsx)(n.code,{children:"npm install"})," and ",(0,s.jsx)(n.code,{children:"npm run build"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you get an error such as ",(0,s.jsx)(n.code,{children:"Foal not found error"}),", it is probably because the dev dependencies (which include the ",(0,s.jsx)(n.code,{children:"@foal/cli"})," package) have not been installed. To force the installation of these dependencies, you can use the following command: ",(0,s.jsx)(n.code,{children:"npm install --production=false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you install dependencies and build the app on your local host directly, then you should upload these files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"build/\nconfig/\nnode_modules/\npackage-lock.json\npackage.json\npublic/ # this may depend on how the platform manages static files\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);