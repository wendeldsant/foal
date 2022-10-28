"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},o=void 0,l={unversionedId:"databases/using-another-orm",id:"databases/using-another-orm",title:"Using Another ORM or Query Builder",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/databases/using-another-orm.md",sourceDirName:"databases",slug:"/databases/using-another-orm",permalink:"/id/docs/databases/using-another-orm",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/using-another-orm.md",tags:[],version:"current",frontMatter:{title:"Using Another ORM or Query Builder",sidebar_label:"Using Another ORM"},sidebar:"someSidebar",previous:{title:"NoSQL",permalink:"/id/docs/databases/mongodb"},next:{title:"Quick Start",permalink:"/id/docs/authentication-and-access-control/quick-start"}},s={},p=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",level:2},{value:"Functions to Be Added",id:"functions-to-be-added",level:2},{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function",level:3},{value:"Examples",id:"examples",level:2},{value:"Prisma",id:"prisma",level:3},{value:"Warning on Configuration",id:"warning-on-configuration",level:4},{value:"Basic Set Up",id:"basic-set-up",level:4},{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function-1",level:4},{value:"Limitations",id:"limitations",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),(0,a.kt)("p",null,"To do so, you will have to remove TypeORM and all its utilities and implement some functions yourself like the authentication function ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUser"),"."),(0,a.kt)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First uninstall the dependencies."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall typeorm @foal/typeorm\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then remove the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove or replace the script ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the file ",(0,a.kt)("inlineCode",{parentName:"p"},"app.controller.ts"),", delete the connection creation call ",(0,a.kt)("inlineCode",{parentName:"p"},"createConnection"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, remove in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),(0,a.kt)("h2",{id:"functions-to-be-added"},"Functions to Be Added"),(0,a.kt)("h3",{id:"the-fetchuser-function"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"fetchUser")," function"),(0,a.kt)("p",null,"If you wish to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," option of ",(0,a.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions")," to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.user")," property, then you will need to implement your own ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUser")," function."),(0,a.kt)("p",null,"This utility returns a function that takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as parameter which might be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," and returns a promise. The promise value must be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," is no user matches the given ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and the ",(0,a.kt)("em",{parentName:"p"},"user object")," otherwise."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FetchUser, ServiceManager } from '@foal/core';\n\nexport function fetchUser(userModel: any): FetchUser {\n  return async (id: number|string, services: ServiceManager) => {\n    if (typeof id === 'string') {\n      throw new Error('The user ID must be a number.');\n    }\n    const user = await userModel.findOne({ id });\n    if (user === null) {\n      return undefined;\n    }\n    return user;\n  };\n}\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"prisma"},"Prisma"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This example uses an SQLite database."))),(0,a.kt)("h4",{id:"warning-on-configuration"},"Warning on Configuration"),(0,a.kt)("p",null,"Prisma uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv library")," under the hood which handles ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files and environment variables differently."),(0,a.kt)("p",null,"Therefore, when using Prisma, you can only use one single ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. Using other files such as ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," will lead to unexpected variable values."),(0,a.kt)("h4",{id:"basic-set-up"},"Basic Set Up"),(0,a.kt)("p",null,"Install the latest version of TypeScript (Prisma v2.21 requires at least v4.1)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript@latest\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"If you get compile-time errors referencing the file ",(0,a.kt)("inlineCode",{parentName:"em"},"node_modules/.prisma/client/index.d.ts"),", it is likely that your version of TypeScript is too old."))),(0,a.kt)("p",null,"Install the Prisma dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install prisma --save-dev\nnpm install @prisma/client\n")),(0,a.kt)("p",null,"Init the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma init\n")),(0,a.kt)("p",null,"Set up the database configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"prisma/schema.prisma"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n')),(0,a.kt)("p",null,"Specify the database URL in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'DATABASE_URL="file:./db.sqlite3"\n')),(0,a.kt)("p",null,"Generate and run the migration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name init\n")),(0,a.kt)("p",null,"Generate the TypeScript interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,a.kt)("p",null,"Update your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," to create the prisma connection and pass it to the service manager."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\n// App\nimport { AppController } from './app/app.controller';\n\nconst prisma = new PrismaClient();\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n  serviceManager.set(PrismaClient, prisma);\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); })\n  .finally(() => prisma.$disconnect());\n")),(0,a.kt)("p",null,"Finally, inject the prisma client into your controllers and start using it."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, IAppController } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport class AppController implements IAppController {\n  @dependency\n  prisma: PrismaClient;\n\n  @Get('/users')\n  async getAllUsers() {\n    const allUsers = await this.prisma.user.findMany();\n    return new HttpResponseOK(allUsers);\n  }\n}\n")),(0,a.kt)("h4",{id:"the-fetchuser-function-1"},"The ",(0,a.kt)("inlineCode",{parentName:"h4"},"fetchUser")," function"),(0,a.kt)("p",null,"In case your application uses the hooks ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," and you want to assign a value to ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.user"),", then you will need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUser")," function."),(0,a.kt)("p",null,"First, make sure your have a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},"// ...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n")),(0,a.kt)("p",null,"If you haven't already done so, generate and run the migration and generate the TypeScript interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma migrate dev --name add-user\nnpx prisma generate\n")),(0,a.kt)("p",null,"Then create the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchPrismaUser")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceManager } from '@foal/core';\nimport { PrismaClient } from '@prisma/client';\n\nexport async function fetchPrismaUser(id: number|string, services: ServiceManager) {\n  if (typeof id === 'string') {\n    throw new Error('The user ID must be a number.');\n  }\n\n  const user = await services.get(PrismaClient).user.findFirst({\n    where: { id }\n  });\n\n  if (user === null) {\n    return undefined;\n  }\n  \n  return user;\n}\n")),(0,a.kt)("p",null,"You're now ready to use it in your hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({ user: fetchPrismaUser })\n// OR\n@UseSessions({ user: fetchPrismaUser })\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"When using another ORM than TypeORM some features, are not available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("em",{parentName:"li"},"Groups & Permissions")," system,"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}c.isMDXComponent=!0}}]);