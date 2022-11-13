"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},l=void 0,o={unversionedId:"databases/using-another-orm",id:"databases/using-another-orm",title:"Using Another ORM or Query Builder",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/databases/using-another-orm.md",sourceDirName:"databases",slug:"/databases/using-another-orm",permalink:"/id/docs/databases/using-another-orm",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/using-another-orm.md",tags:[],version:"current",frontMatter:{title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},sidebar:"someSidebar",previous:{title:"NoSQL",permalink:"/id/docs/databases/mongodb"},next:{title:"Quick Start",permalink:"/id/docs/authentication/quick-start"}},s={},p=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",level:2},{value:"Examples",id:"examples",level:2},{value:"Prisma",id:"prisma",level:3},{value:"Warning on Configuration",id:"warning-on-configuration",level:4},{value:"Basic Set Up",id:"basic-set-up",level:4},{value:"Authenticating users",id:"authenticating-users",level:4},{value:"Limitations",id:"limitations",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),(0,r.kt)("p",null,"To do so, you will have to remove TypeORM and all its utilities."),(0,r.kt)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First uninstall the dependencies."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall typeorm @foal/typeorm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then remove the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/entities")," and the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/db.ts"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove or replace the script ",(0,r.kt)("inlineCode",{parentName:"p"},"create-user")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts"),", delete the connection creation called ",(0,r.kt)("inlineCode",{parentName:"p"},"dataSource.initialize()"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, remove in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"prisma"},"Prisma"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"This example uses an SQLite database."))),(0,r.kt)("h4",{id:"warning-on-configuration"},"Warning on Configuration"),(0,r.kt)("p",null,"Prisma uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv library")," under the hood which handles ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files and environment variables differently."),(0,r.kt)("p",null,"Therefore, when using Prisma, you can only use one single ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. Using other files such as ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".env.production")," will lead to unexpected variable values."),(0,r.kt)("h4",{id:"basic-set-up"},"Basic Set Up"),(0,r.kt)("p",null,"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript@latest\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"If you get compile-time errors referencing the file ",(0,r.kt)("inlineCode",{parentName:"em"},"node_modules/.prisma/client/index.d.ts"),", it is likely that your version of TypeScript is too old."))),(0,r.kt)("p",null,"Install the Prisma dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install prisma --save-dev\nnpm install @prisma/client\n")),(0,r.kt)("p",null,"Init the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init\n")),(0,r.kt)("p",null,"Set up the database configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n')),(0,r.kt)("p",null,"Specify the database URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'DATABASE_URL="file:./db.sqlite3"\n')),(0,r.kt)("p",null,"Generate and run the migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name init\n")),(0,r.kt)("p",null,"Generate the TypeScript interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/db.ts")," to create the prisma connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PrismaClient } from '@prisma/client';\n\nexport const prisma = new PrismaClient();\n")),(0,r.kt)("p",null,"Then update your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts")," to inject it into the service manager."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\nimport { prisma } from './db';\n\nasync function main() {\n  const serviceManager = new ServiceManager()\n    .set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => { prisma.$disconnect().catch(err => console.error(err)) });\n")),(0,r.kt)("p",null,"Finally, inject the prisma client into your controllers and start using it."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n")),(0,r.kt)("h4",{id:"authenticating-users"},"Authenticating users"),(0,r.kt)("p",null,"First, make sure your have a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma"},"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n")),(0,r.kt)("p",null,"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name add-user\nnpx prisma generate\n")),(0,r.kt)("p",null,"Then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," option to your authentication hooks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n// OR\n@UseSessions({\n  user: (id: number, services: ServiceManager) => services.get(PrismaClient).user.findFirst({\n    where: { id }\n  })\n})\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"When using another ORM than TypeORM some features, are not available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"Groups & Permissions")," system,"),(0,r.kt)("li",{parentName:"ul"},"and the ",(0,r.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}c.isMDXComponent=!0}}]);