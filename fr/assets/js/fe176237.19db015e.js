"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1206],{53577:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(74848),i=r(28453);const a={title:"Prisma"},t=void 0,o={id:"databases/other-orm/prisma",title:"Prisma",description:"This document shows how to configure Prisma in a FoalTS project. It assumes that you have already uninstalled TypeORM.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/databases/other-orm/prisma.md",sourceDirName:"databases/other-orm",slug:"/databases/other-orm/prisma",permalink:"/fr/docs/3.x/databases/other-orm/prisma",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/databases/other-orm/prisma.md",tags:[],version:"3.x",frontMatter:{title:"Prisma"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/3.x/databases/other-orm/introduction"},next:{title:"D\xe9marrage Rapide",permalink:"/fr/docs/3.x/authentication/quick-start"}},c={},l=[{value:"Warning on Configuration",id:"warning-on-configuration",level:2},{value:"Basic Set Up",id:"basic-set-up",level:2},{value:"Authenticating users",id:"authenticating-users",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This document shows how to configure Prisma in a FoalTS project. It assumes that you have already ",(0,s.jsx)(n.a,{href:"/fr/docs/3.x/databases/other-orm/introduction",children:"uninstalled TypeORM"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"warning-on-configuration",children:"Warning on Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Prisma uses the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv library"})," under the hood which handles ",(0,s.jsx)(n.code,{children:".env"})," files and environment variables differently."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, when using Prisma, you can only use one single ",(0,s.jsx)(n.code,{children:".env"})," file. Using other files such as ",(0,s.jsx)(n.code,{children:".env.local"})," or ",(0,s.jsx)(n.code,{children:".env.production"})," will lead to unexpected variable values."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-set-up",children:"Basic Set Up"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This example uses an SQLite database."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install typescript@latest\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["If you get compile-time errors referencing the file ",(0,s.jsx)(n.code,{children:"node_modules/.prisma/client/index.d.ts"}),", it is likely that your version of TypeScript is too old."]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Install the Prisma dependencies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install prisma --save-dev\nnpm install @prisma/client\n"})}),"\n",(0,s.jsx)(n.p,{children:"Init the project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx prisma init\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Set up the database configuration in ",(0,s.jsx)(n.code,{children:"prisma/schema.prisma"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prisma",children:'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Specify the database URL in the ",(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'DATABASE_URL="file:./db.sqlite3"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Generate and run the migration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx prisma migrate dev --name init\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate the TypeScript interfaces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx prisma generate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Update your ",(0,s.jsx)(n.code,{children:"src/app/db.ts"})," to create the prisma connection:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { PrismaClient } from '@prisma/client';\n\nexport const prisma = new PrismaClient();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then update your ",(0,s.jsx)(n.code,{children:"src/index.ts"})," to inject it into the service manager."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"src/index.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\nimport { prisma } from './db';\n\nasync function main() {\n  const serviceManager = new ServiceManager()\n    .set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => { prisma.$disconnect().catch(err => console.error(err)) });\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, inject the prisma client into your controllers and start using it."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"authenticating-users",children:"Authenticating users"}),"\n",(0,s.jsxs)(n.p,{children:["First, make sure your have a ",(0,s.jsx)(n.code,{children:"User"})," model defined in ",(0,s.jsx)(n.code,{children:"schema.prisma"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-prisma",children:"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx prisma migrate dev --name add-user\nnpx prisma generate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add the ",(0,s.jsx)(n.code,{children:"user"})," option to your authentication hooks as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n// OR\n@UseSessions({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(96540);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);