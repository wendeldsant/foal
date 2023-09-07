"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Prisma"},s=void 0,o={unversionedId:"databases/other-orm/prisma",id:"version-3.x/databases/other-orm/prisma",title:"Prisma",description:"This document shows how to configure Prisma in a FoalTS project. It assumes that you have already uninstalled TypeORM.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/databases/other-orm/prisma.md",sourceDirName:"databases/other-orm",slug:"/databases/other-orm/prisma",permalink:"/fr/docs/3.x/databases/other-orm/prisma",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/databases/other-orm/prisma.md",tags:[],version:"3.x",frontMatter:{title:"Prisma"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/3.x/databases/other-orm/introduction"},next:{title:"D\xe9marrage Rapide",permalink:"/fr/docs/3.x/authentication/quick-start"}},l={},p=[{value:"Warning on Configuration",id:"warning-on-configuration",level:2},{value:"Basic Set Up",id:"basic-set-up",level:2},{value:"Authenticating users",id:"authenticating-users",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This document shows how to configure Prisma in a FoalTS project. It assumes that you have already ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/3.x/databases/other-orm/introduction"},"uninstalled TypeORM"),".")),(0,a.kt)("h2",{id:"warning-on-configuration"},"Warning on Configuration"),(0,a.kt)("p",null,"Prisma uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv library")," under the hood which handles ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files and environment variables differently."),(0,a.kt)("p",null,"Therefore, when using Prisma, you can only use one single ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. Using other files such as ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," will lead to unexpected variable values."),(0,a.kt)("h2",{id:"basic-set-up"},"Basic Set Up"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This example uses an SQLite database."))),(0,a.kt)("p",null,"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript@latest\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"If you get compile-time errors referencing the file ",(0,a.kt)("inlineCode",{parentName:"em"},"node_modules/.prisma/client/index.d.ts"),", it is likely that your version of TypeScript is too old."))),(0,a.kt)("p",null,"Install the Prisma dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install prisma --save-dev\nnpm install @prisma/client\n")),(0,a.kt)("p",null,"Init the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init\n")),(0,a.kt)("p",null,"Set up the database configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n')),(0,a.kt)("p",null,"Specify the database URL in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'DATABASE_URL="file:./db.sqlite3"\n')),(0,a.kt)("p",null,"Generate and run the migration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name init\n")),(0,a.kt)("p",null,"Generate the TypeScript interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,a.kt)("p",null,"Update your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/db.ts")," to create the prisma connection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PrismaClient } from '@prisma/client';\n\nexport const prisma = new PrismaClient();\n")),(0,a.kt)("p",null,"Then update your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," to inject it into the service manager."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\nimport { prisma } from './db';\n\nasync function main() {\n  const serviceManager = new ServiceManager()\n    .set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => { prisma.$disconnect().catch(err => console.error(err)) });\n")),(0,a.kt)("p",null,"Finally, inject the prisma client into your controllers and start using it."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n")),(0,a.kt)("h2",{id:"authenticating-users"},"Authenticating users"),(0,a.kt)("p",null,"First, make sure your have a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n")),(0,a.kt)("p",null,"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name add-user\nnpx prisma generate\n")),(0,a.kt)("p",null,"Then add the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," option to your authentication hooks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n// OR\n@UseSessions({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n")))}m.isMDXComponent=!0}}]);