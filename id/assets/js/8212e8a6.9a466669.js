"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3698],{18970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(74848),r=s(28453);const o={title:"Update Guide to Version 3",sidebar_label:"To v3"},t=void 0,d={id:"upgrade-to-v3/README",title:"Update Guide to Version 3",description:"This guide will take you step by step through the upgrade to version 3. If something is missing or incorrect, feel free to submit an issue or a PR on Github.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/upgrade-to-v3/README.md",sourceDirName:"upgrade-to-v3",slug:"/upgrade-to-v3/",permalink:"/id/docs/3.x/upgrade-to-v3/",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/upgrade-to-v3/README.md",tags:[],version:"3.x",frontMatter:{title:"Update Guide to Version 3",sidebar_label:"To v3"},sidebar:"someSidebar",previous:{title:"Express / Fastify",permalink:"/id/docs/3.x/comparison-with-other-frameworks/express-fastify"},next:{title:"Awesome Foal",permalink:"/id/docs/3.x/community/awesome-foal"}},c={},l=[{value:"Contents",id:"contents",level:2},{value:"What&#39;s new in version 3?",id:"whats-new-in-version-3",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported versions",id:"supported-versions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"CLI",id:"cli",level:2},{value:"Validation",id:"validation",level:2},{value:"Validation with JSON schemas",id:"validation-with-json-schemas",level:3},{value:"The <code>ajv-errors</code> plugin",id:"the-ajv-errors-plugin",level:4},{value:"Validation with classes",id:"validation-with-classes",level:3},{value:"File upload",id:"file-upload",level:2},{value:"AWS S3",id:"aws-s3",level:3},{value:"Databases",id:"databases",level:2},{value:"TypeORM (all databases)",id:"typeorm-all-databases",level:3},{value:"redis",id:"redis",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Authentication and contexts",id:"authentication-and-contexts",level:2},{value:"The <code>ctx.user</code> property",id:"the-ctxuser-property",level:3},{value:"The <code>ctx.session</code> property",id:"the-ctxsession-property",level:3},{value:"The <code>ctx.state</code> property",id:"the-ctxstate-property",level:3},{value:"The <code>fetchUser</code> functions",id:"the-fetchuser-functions",level:3},{value:"The <code>userCookie</code> auth hook option",id:"the-usercookie-auth-hook-option",level:3},{value:"Passwords",id:"passwords",level:3},{value:"The <code>jwks-rsa</code> package",id:"the-jwks-rsa-package",level:3},{value:"Access control",id:"access-control",level:2},{value:"Permissions",id:"permissions",level:3},{value:"GraphQL",id:"graphql",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide will take you step by step through the upgrade to version 3. If something is missing or incorrect, feel free to submit an issue or a PR on Github."}),"\n",(0,i.jsx)(n.h2,{id:"contents",children:"Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What's new in version 3?"}),"\n",(0,i.jsx)(n.li,{children:"Prerequisites"}),"\n",(0,i.jsx)(n.li,{children:"Supported versions"}),"\n",(0,i.jsx)(n.li,{children:"Configuration"}),"\n",(0,i.jsx)(n.li,{children:"CLI"}),"\n",(0,i.jsx)(n.li,{children:"Validation"}),"\n",(0,i.jsx)(n.li,{children:"File upload"}),"\n",(0,i.jsx)(n.li,{children:"Database"}),"\n",(0,i.jsx)(n.li,{children:"Authentication and contexts"}),"\n",(0,i.jsx)(n.li,{children:"Access control"}),"\n",(0,i.jsx)(n.li,{children:"GraphQL"}),"\n",(0,i.jsx)(n.li,{children:"Miscellaneous"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-new-in-version-3",children:"What's new in version 3?"}),"\n",(0,i.jsx)(n.p,{children:"Between version 2 and version 3, some parts of the framework have been improved and some new features have been added. Here are the notable improvements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"all dependencies that Foal relies on have been updated, including TypeORM,"}),"\n",(0,i.jsx)(n.li,{children:"the framework offers more advanced and secure typing,"}),"\n",(0,i.jsx)(n.li,{children:"some features have been simplified,"}),"\n",(0,i.jsx)(n.li,{children:"some bugs have been fixed,"}),"\n",(0,i.jsx)(n.li,{children:"packages are smaller in size,"}),"\n",(0,i.jsx)(n.li,{children:"and some parts of the framework are less tied to TypeORM to make it easier to use another ORM."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"First, upgrade to the latest minor release of version 2 and check that everything is working properly."}),"\n",(0,i.jsx)(n.h2,{id:"supported-versions",children:"Supported versions"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Supported node versions"}),(0,i.jsx)(n.th,{children:"TS min version"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"16.x, 18.x"}),(0,i.jsx)(n.td,{children:"4.7"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"The framework requires at least version 4.7 of TypeScript. When upgrading from v4.0, there are usually two things to do:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add an ",(0,i.jsx)(n.code,{children:"any"})," type in all ",(0,i.jsx)(n.code,{children:"catch(error)"})," (i.e they become ",(0,i.jsx)(n.code,{children:"catch(error: any)"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Add a returned type to the ",(0,i.jsx)(n.code,{children:"new Promise"}),": ",(0,i.jsx)(n.code,{children:"new Promise<void>(...)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["If you upgrade to TypeORM@0.3, use Prisma or any other dependency that calls the ",(0,i.jsx)(n.code,{children:"dotenv"})," library under the hood, you won't be able to use custom ",(0,i.jsx)(n.code,{children:".env"})," files such as ",(0,i.jsx)(n.code,{children:".env.production"})," and ",(0,i.jsx)(n.code,{children:".env.local"}),"."]})}),"\n",(0,i.jsxs)(n.li,{children:["If the same variable is provided both as environment variable and in the ",(0,i.jsx)(n.code,{children:".env"})," file, now the value of the environment variable is used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"undefined"})," values do not override other defined config values anymore. See ",(0,i.jsx)(n.a,{href:"https://github.com/FoalTS/foal/issues/1071",children:"issue #1071"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In new projects, the ",(0,i.jsx)(n.code,{children:"npm run develop"})," command has been renamed to ",(0,i.jsx)(n.code,{children:"npm run dev"})," to be consistent with the JS ecosystem."]}),"\n",(0,i.jsxs)(n.li,{children:["Generated entities extend ",(0,i.jsx)(n.code,{children:"BaseEntity"})," by default to not use ",(0,i.jsx)(n.code,{children:"connection.getRepository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["REST generated files use ",(0,i.jsx)(n.code,{children:"BaseEntity"})," methods to facilitate the use of other ORMs."]}),"\n",(0,i.jsx)(n.li,{children:"Generated scripts do not include TypeORM code to make it make it easier to use other ORM."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"foal g vscode-config"})," has been removed to not make the framework code dependent on an IDE. Documentation on how to configure VSCode with Foal has been added though."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(n.h3,{id:"validation-with-json-schemas",children:"Validation with JSON schemas"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://ajv.js.org/",children:"AJV"})," dependency has been upgraded to version 8, which allows us to take advantage of its TypeScript types. In particular, it is now possible to link a JSON schema with an interface:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { JSONSchemaType } from 'ajv';\n\ninterface MyData {\n  foo: number;\n  bar?: string\n}\n\nconst schema: JSONSchemaType<MyData> = {\n  type: 'object',\n  properties: {\n    foo: { type: 'integer' },\n    bar: { type: 'string', nullable: true }\n  },\n  required: ['foo'],\n  additionalProperties: false\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As this is a major upgrade of the library, there are some breaking changes in the results returned by the validation function which is used by ",(0,i.jsx)(n.code,{children:"ValidateQueryParam"}),", ",(0,i.jsx)(n.code,{children:"ValidatePathParam"}),", ",(0,i.jsx)(n.code,{children:"ValidateHeader"}),", ",(0,i.jsx)(n.code,{children:"ValidateCookie"}),", ",(0,i.jsx)(n.code,{children:"ValidateBody"}),", ",(0,i.jsx)(n.code,{children:"ValidatePayload"}),", ",(0,i.jsx)(n.code,{children:"GraphQLController"})," and ",(0,i.jsx)(n.code,{children:"ValidateMultipartFormDataBody"})," (renamed to ",(0,i.jsx)(n.code,{children:"ParseAndValidateFiles"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Here are the more notable payload changes:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"AJV version 6"}),(0,i.jsx)(n.th,{children:"AJV version 8"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"dataPath": ".price"'})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"instancePath": "/price"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"dataPath": "[\'a-number\']"'})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"instancePath": "a-number"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message: 'should have required property \\'name\\''"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message: 'must have required property \\'name\\''"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Note also that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The option ",(0,i.jsx)(n.code,{children:"'settings.ajv.nullable'"})," does not exist anymore."]}),"\n",(0,i.jsxs)(n.li,{children:["The configuration ",(0,i.jsx)(n.code,{children:"'settings.ajv.useDefaults'"})," does not accept ",(0,i.jsx)(n.code,{children:"'shared'"})," as allowed value anymore."]}),"\n",(0,i.jsxs)(n.li,{children:["As of AJV v8, the ",(0,i.jsx)(n.a,{href:"https://ajv.js.org/strict-mode.html",children:"strict mode"})," is added to ",(0,i.jsx)(n.em,{children:"reduce the mistakes in JSON schemas and unexpected validation results"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["More details can be found in ",(0,i.jsx)(n.a,{href:"https://ajv.js.org/v6-to-v8-migration.html",children:"AJV migration guide"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Note: ",(0,i.jsx)(n.code,{children:"@ValidateXXX"})," hooks still take an ",(0,i.jsx)(n.code,{children:"object"})," as argument. The typing of the parameter was difficult and AJV TS types are sometimes inconsistent with their corresponding JSON schemas. For example, a ",(0,i.jsx)(n.code,{children:"foobar? : string"})," is converted to ",(0,i.jsx)(n.code,{children:"{ type : 'string', nullable : true }"})," whereas ",(0,i.jsx)(n.code,{children:"null"})," !== ",(0,i.jsx)(n.code,{children:"undefined"}),". The choice was therefore made to let users use the ",(0,i.jsx)(n.code,{children:"JSONSchemaType"})," themselves to type the argument if they wish."]})}),"\n",(0,i.jsxs)(n.h4,{id:"the-ajv-errors-plugin",children:["The ",(0,i.jsx)(n.code,{children:"ajv-errors"})," plugin"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're using the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/ajv-errors",children:"ajv-errors"})," plugin, you will need to upgrade its version and update your code as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install ajv-errors@3 ajv@8\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nimport * as ajvErrors from 'ajv-errors';\n// After\nimport ajvErrors from 'ajv-errors';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"validation-with-classes",children:"Validation with classes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@foal/typestack"})," require version ",(0,i.jsx)(n.code,{children:"~0.5.1"})," of ",(0,i.jsx)(n.code,{children:"class-transformer"})," and version ",(0,i.jsx)(n.code,{children:"~0.13.2"})," of ",(0,i.jsx)(n.code,{children:"class-validator"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"file-upload",children:"File upload"}),"\n",(0,i.jsx)(n.p,{children:"The hook for uploading files has been updated so as to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"support optional fields,"}),"\n",(0,i.jsx)(n.li,{children:"make its parameters less verbose,"}),"\n",(0,i.jsxs)(n.li,{children:["remove the very large number of nested objects to access the files and fields from the ",(0,i.jsx)(n.code,{children:"ctx"}),","]}),"\n",(0,i.jsx)(n.li,{children:"have a better and safer typing,"}),"\n",(0,i.jsx)(n.li,{children:"return an error to the client when multiple files are uploaded whereas we expect a single one,"}),"\n",(0,i.jsx)(n.li,{children:"and make the hook name more meaningful to people not knowing multipart requests."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here are the breaking changes and new features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValidateMultipartFormDataBody"})," is renamed to ",(0,i.jsx)(n.code,{children:"ParseAndValidateFiles"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The interface of the hook has changed and accepts optional fields:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"@ParseAndValidateFiles(\n  {\n    profile: { required: true }\n  },\n  // The second parameter is optional\n  // and is used to add fields. It expects an AJV object.\n  {\n    type: 'object',\n    properties: {\n      description: { type: 'string' }\n    },\n    required: ['description'],\n    additionalProperties: false\n  }\n)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Context"})," has a new property ",(0,i.jsx)(n.code,{children:"files"})," which has two methods ",(0,i.jsx)(n.code,{children:"push"})," and ",(0,i.jsx)(n.code,{children:"get"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The access to the fields and files in the controller method has changed:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nconst name = ctx.request.body.fields.name;\nconst file = ctx.request.body.files.avatar as File;\nconst files = ctx.request.body.files.images as File[];\n\n// After\nconst name = ctx.request.body.name;\nconst file = ctx.files.get('avatar')[0];\nconst files = ctx.files.get('images');\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Previously ",(0,i.jsx)(n.code,{children:"saveTo: ''"})," was regarded as an upload with buffer and is saved as file in v3."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"File"})," is exported from ",(0,i.jsx)(n.code,{children:"@foal/core"})," and not ",(0,i.jsx)(n.code,{children:"@foal/storage"})," anymore."]}),"\n",(0,i.jsxs)(n.li,{children:["New error ",(0,i.jsx)(n.code,{children:"MULTIPLE_FILES_NOT_ALLOWED"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All ",(0,i.jsx)(n.code,{children:"Disk.write"})," methods take a ",(0,i.jsx)(n.code,{children:"Readable"})," as parameter and not a ",(0,i.jsx)(n.code,{children:"NodeJS.ReadableStream"})," anymore."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"aws-s3",children:"AWS S3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The AWS region must be provided to connect to S3. One way to achieve this is to use the configuration key ",(0,i.jsx)(n.code,{children:"settings.aws.region"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"databases",children:"Databases"}),"\n",(0,i.jsx)(n.h3,{id:"typeorm-all-databases",children:"TypeORM (all databases)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Foal v3 now supports the latest version of TypeORM (v0.3)"}),". This version has some breaking changes with v0.2 which requires some changes to be made:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createConnection"})," has been deprecated in favor of ",(0,i.jsx)(n.code,{children:"new DataSource"}),". There is no more global connection and the ",(0,i.jsx)(n.code,{children:"DataSource"})," instance must be passed everywhere (unless you extend your entities from ",(0,i.jsx)(n.code,{children:"BaseEntity"}),").","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nconst connection = await createConnection(opts);\n\n// After\nconst dataSource = await DataSource(opts);\nawait dataSource.initialize();\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["As if it was no longer supported in v0.3, the ",(0,i.jsx)(n.code,{children:"ormconfig.js"})," file has been removed. It is replaced by a new ",(0,i.jsx)(n.code,{children:"src/db.ts"})," file with the following content. Whether you need to access the data source instance or create a new one, use this file.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@foal/core';\nimport { DataSource } from 'typeorm';\n\nexport function createDataSource(): DataSource {\n  return new DataSource({\n    type: Config.getOrThrow('database.type', 'string') as any,\n\n    url: Config.get('database.url', 'string'),\n    host: Config.get('database.host', 'string'),\n    port: Config.get('database.port', 'number'),\n    username: Config.get('database.username', 'string'),\n    password: Config.get('database.password', 'string'),\n    database: Config.get('database.database', 'string'),\n\n    dropSchema: Config.get('database.dropSchema', 'boolean', false),\n    synchronize: Config.get('database.synchronize', 'boolean', false),\n\n    entities: ['build/app/**/*.entity.js'],\n    migrations: ['build/migrations/*.js'],\n  });\n}\n\nexport const dataSource = createDataSource();\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Migration commands have been updated accordingly:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "makemigrations": "foal rmdir build && tsc -p tsconfig.app.json && npx typeorm migration:generate src/migrations/migration -d build/db -p && tsc -p tsconfig.app.json",\n  "migrations": "npx typeorm migration:run -d build/db",\n  "revertmigration": "npx typeorm migration:revert -d build/db"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["In new projects (and in the documentation), the call of ",(0,i.jsx)(n.code,{children:"createConnection"})," in in ",(0,i.jsx)(n.code,{children:"app.controller.ts"})," has been replaced by a ",(0,i.jsx)(n.code,{children:"dataSource.initilize()"})," in ",(0,i.jsx)(n.code,{children:"src/index.ts"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { dataSource } from './db';\n\nasync function main() {\n  await dataSource.initialize();\n\n  const app = await createApp(AppController);\n\n  const port = Config.get('port', 'number', 3001);\n  app.listen(port, () => displayServerURL(port));\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If you need to create a connection in your tests (E2E or unit), import ",(0,i.jsx)(n.code,{children:"createDataSource"})," from ",(0,i.jsx)(n.code,{children:"db.ts"})," and initialize the connection."]}),"\n",(0,i.jsxs)(n.li,{children:["If you use the methods ",(0,i.jsx)(n.code,{children:"TypeORMStore.getSessionIDsOf"})," and ",(0,i.jsx)(n.code,{children:"TypeORMStore.destroyAllSessionsOf"}),", they take the user ID as parameter and no longer the user object."]}),"\n",(0,i.jsxs)(n.li,{children:["The complete migration guide to ",(0,i.jsx)(n.code,{children:"typeorm@0.3"})," can be found ",(0,i.jsx)(n.a,{href:"https://github.com/typeorm/typeorm/releases/tag/0.3.0",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Quick migration guide"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"TypeORM v0.2"}),(0,i.jsx)(n.th,{children:"TypeORM v0.3"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOneOrFail"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOneByOrFail"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOne"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOneBy"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"find"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findBy"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"undefined"})," (return value)"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"find({ owner: ctx.user })"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findBy({ owner: { id: ctx.user.id } })"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOne(1)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"findOneBy({ id: 1 })"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"await createConnection(opts)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"const dataSource = new DataSource(opts); await dataSource.initialize()"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"connection.close()"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dataSource.destroy()"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Foobar.findOneOrFail({}, { relations: ['permissions']\xa0})"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Foobar.findOneOrFail({}, { relations: { permissions: true }\xa0})"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"redis",children:"redis"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@foal/redis"})," package uses ",(0,i.jsx)(n.code,{children:"redis@4"})," under the hood. If you used to pass a custom client to the redis store with ",(0,i.jsx)(n.code,{children:"setRedisClient"}),", don't forget to update your dependency and call the new ",(0,i.jsx)(n.code,{children:".connect()"})," client method before injecting it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nredisClient = createClient(REDIS_URI)\n// After\nredisClient = createClient({ url: REDIS_URI });\nawait redisClient.connect();\n"})}),"\n",(0,i.jsx)(n.p,{children:"The same applies if you uses socket.io with redis (see Websockets documentation)."}),"\n",(0,i.jsx)(n.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,i.jsxs)(n.p,{children:["The package ",(0,i.jsx)(n.code,{children:"@foal/mongodb"})," and its Mongo store uses ",(0,i.jsx)(n.code,{children:"mongodb@4"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You might need to upgrade ",(0,i.jsx)(n.code,{children:"@types/node"}),". It is used under the hood by the library and you might face compilation errors otherwise."]}),"\n",(0,i.jsxs)(n.li,{children:["If you pass a custom Mongo client to the store, don't forget to upgrade your ",(0,i.jsx)(n.code,{children:"mongodb"})," dependency to version 4.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nconst mongoDBClient = await MongoClient.connect('mongodb://localhost:27017/db', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n// After\nconst mongoDBClient = await MongoClient.connect('mongodb://localhost:27017/db');\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Important notes on the use of MongoDB with TypeORM:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["TypeORM still requires ",(0,i.jsx)(n.code,{children:"mongodb@3"}),". If you are using the MongoDB store, then you will have two connections established to the database. If you want to pass a custom client to the store, you can make the two versions coexist with the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "mongodb": "~3.7.3",\n  "mongodb4": "npm:mongodb@~4.3.1",\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { MongoClient } from 'mongodb4';\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["TypeORM v0.3 works very badly with using the name ",(0,i.jsx)(n.code,{children:"id"})," in entities. Consider to use ",(0,i.jsx)(n.code,{children:"_id"})," instead:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { ObjectId } from 'mongodb';\n\n@Entity()\nclass Foobar {\n    @ObjectIdColumn()\n    // DO NO use\n    id: ObjectID;\n    // Use\n    _id: ObjectID;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nimport { getMongoRepository } from 'typeorm';\nconst user = await getMongoRepository(User).findOne('xxxx');\n\n// After\nimport { ObjectId } from 'mongodb';\nconst user = await User.findOneBy({ _id: new ObjectId('xxxx') });\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authentication-and-contexts",children:"Authentication and contexts"}),"\n",(0,i.jsxs)(n.h3,{id:"the-ctxuser-property",children:["The ",(0,i.jsx)(n.code,{children:"ctx.user"})," property"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["These changes apply to both classes ",(0,i.jsx)(n.code,{children:"Context"})," and ",(0,i.jsx)(n.code,{children:"WebsocketContext"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["When the user is not authenticated, the value of ",(0,i.jsx)(n.code,{children:"ctx.user"})," is now ",(0,i.jsx)(n.code,{children:"null"})," and not ",(0,i.jsx)(n.code,{children:"undefined"}),"."]})," The motivation behind this change is to be as close as possible to the semantics of JavaScript and to be consistent with the ",(0,i.jsx)(n.code,{children:"findOne"})," functions of the major ORMs (TypeORM@0.3, Prisma, Mikro-ORM, Mongoose)."]}),"\n",(0,i.jsxs)(n.li,{children:["The default type of ",(0,i.jsx)(n.code,{children:"ctx.user"})," is now ",(0,i.jsx)(n.code,{children:"{ [key: string]: any } | null"})," and not ",(0,i.jsx)(n.code,{children:"any"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"the-ctxsession-property",children:["The ",(0,i.jsx)(n.code,{children:"ctx.session"})," property"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["These changes apply to both classes ",(0,i.jsx)(n.code,{children:"Context"})," and ",(0,i.jsx)(n.code,{children:"WebsocketContext"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["When there is no session, the value of ",(0,i.jsx)(n.code,{children:"ctx.session"})," is now ",(0,i.jsx)(n.code,{children:"null"})," and not ",(0,i.jsx)(n.code,{children:"undefined"}),"."]})," See ",(0,i.jsx)(n.code,{children:"ctx.user"})," for information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ctx.session"})," is now always of type ",(0,i.jsx)(n.code,{children:"Session | null"}),". As consequencies, the class ",(0,i.jsx)(n.code,{children:"Context"})," takes only two generic type arguments: ",(0,i.jsx)(n.code,{children:"User"})," and ",(0,i.jsx)(n.code,{children:"ContextSession"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nlet ctx: Context<User, ContextSession, ContextState>;\n\n// After\nlet ctx: Context<User, ContextState>;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\nlet ctx: Context<any, Session>;\nctx.session.set('foo', 'bar');\n\n// After\nlet ctx: Context;\nctx.session!.set('foo', 'bar');\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"the-ctxstate-property",children:["The ",(0,i.jsx)(n.code,{children:"ctx.state"})," property"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["These changes apply to both classes ",(0,i.jsx)(n.code,{children:"Context"})," and ",(0,i.jsx)(n.code,{children:"WebsocketContext"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The default type of ",(0,i.jsx)(n.code,{children:"ctx.state"})," is now ",(0,i.jsx)(n.code,{children:"{ [key : string] : any }"})," and not ",(0,i.jsx)(n.code,{children:"any"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"the-fetchuser-functions",children:["The ",(0,i.jsx)(n.code,{children:"fetchUser"})," functions"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["These changes apply to the hooks ",(0,i.jsx)(n.code,{children:"JWTRequired"}),", ",(0,i.jsx)(n.code,{children:"JWTOptional"})," and ",(0,i.jsx)(n.code,{children:"UseSessions"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"FetchUser"})," interface and all ",(0,i.jsx)(n.code,{children:"fetchUser"}),", ",(0,i.jsx)(n.code,{children:"fetchMongoDBUser"})," and ",(0,i.jsx)(n.code,{children:"fetchUserWithPermissions"})," functions have been removed. They were convulated functions that could make difficult the understanding of the hooks behavior at first glance."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"user"})," option in ",(0,i.jsx)(n.code,{children:"@JWTxxx"})," and ",(0,i.jsx)(n.code,{children:"@UseSessions"})," now expects a ",(0,i.jsx)(n.code,{children:"(id: number) => Promise<{ [key: string]: any } | null>"})," by default. If the subject of a JWT (of type string) cannot be converted to a number, then an error is thrown. If the user ID must be a string then, you must add ",(0,i.jsx)(n.code,{children:"userIdType: 'string'"})," to the options."]}),"\n",(0,i.jsxs)(n.li,{children:["To be consistent with the type of ",(0,i.jsx)(n.code,{children:"ctx.user"}),", if the user cannot be authenticated, the hook ",(0,i.jsx)(n.code,{children:"user"})," option must be given the ",(0,i.jsx)(n.code,{children:"null"})," value."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\n@UseSessions({ user: fetchUser(User) })\n\n// After\n@UseSessions({ user: (id: number) => User.findOneBy({ id }) })\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\n@UseSessions({ user: fetchUserWithPermissions(User) })\n\n// After\n@UseSessions({ user: (id: number) => User.findOneWithPermissionsBy({ id }) })\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\n@UseSessions({ user: fetchMongoDBUser(User) })\n\n// After\nimport { ObjectId } from 'mongodb';\n@UseSessions({\n  user: (id: string) => User.findOneBy({ _id: new ObjectId(id) }),\n  userIdType: 'string'\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"the-usercookie-auth-hook-option",children:["The ",(0,i.jsx)(n.code,{children:"userCookie"})," auth hook option"]}),"\n",(0,i.jsxs)(n.p,{children:["If you use the ",(0,i.jsx)(n.code,{children:"userCookie"})," option, you may face type issues. Update your code as follows if necessary:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Before\n{ userCookie: (ctx: Context<User|undefined>, services) => userToJSON(ctx.user) }\n// After\n{ userCookie: (ctx, services) => userToJSON(ctx.user as User|null) }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"passwords",children:"Passwords"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"@foal/password"})," package has been removed: the ",(0,i.jsx)(n.code,{children:"isCommon"})," feature was very specific to native English speakers and therefore not very useful for other speakers. The package was also not used by the community (between 30 and 67 downloads per week)."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"the-jwks-rsa-package",children:["The ",(0,i.jsx)(n.code,{children:"jwks-rsa"})," package"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The interface of the ",(0,i.jsx)(n.code,{children:"options"})," argument in the ",(0,i.jsx)(n.code,{children:"getRSAPublicKeyFromJWKS"})," hook has changed. See the ",(0,i.jsxs)(n.a,{href:"https://www.npmjs.com/package/jwks-rsa",children:[(0,i.jsx)(n.code,{children:"jwks-rsa"})," library version 2"]})," options for more information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"access-control",children:"Access control"}),"\n",(0,i.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PermissionRequired"})," hook was closely tied to the TypeORM ",(0,i.jsx)(n.code,{children:"UserWithPermissions"})," model making it difficult to use with another ORM."]}),"\n",(0,i.jsx)(n.p,{children:"As of version 3:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"PermissionRequired"})," hook has been moved to ",(0,i.jsx)(n.code,{children:"@foal/core"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["It can be used with any ",(0,i.jsx)(n.code,{children:"ctx.user"})," implementing the ",(0,i.jsx)(n.code,{children:"IUserWithPermissions"})," interface (exported in ",(0,i.jsx)(n.code,{children:"@foal/core"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@foal/graphql"})," requires at least version ",(0,i.jsx)(n.code,{children:"^15.8.0"})," of ",(0,i.jsx)(n.code,{children:"graphql"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The returned values of ",(0,i.jsx)(n.code,{children:"schemaFromTypePaths"}),", ",(0,i.jsx)(n.code,{children:"schemaFromTypeDefs"})," and ",(0,i.jsx)(n.code,{children:"schemaFromTypeGlob"})," are better typed as well as ",(0,i.jsx)(n.code,{children:"GraphQLController.schema"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GraphQLController.schema"})," is now typed with the interface ",(0,i.jsx)(n.code,{children:"GraphQLSchema"}),". Same with all ",(0,i.jsx)(n.code,{children:"schemaFrom*"})," functions."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The functions ",(0,i.jsx)(n.code,{children:"escape"})," et ",(0,i.jsx)(n.code,{children:"escapeProp"})," have been removed. Modern frontend frameworks (React, Angular, Vue, etc) already take care of escaping characters and these functions are easy to implement on one's own one."]}),"\n",(0,i.jsxs)(n.li,{children:["All Foal packages are compiled to ",(0,i.jsx)(n.code,{children:"es2021"})," making packages smaller than before."]}),"\n",(0,i.jsxs)(n.li,{children:["Most properties of ",(0,i.jsx)(n.code,{children:"Context"}),", ",(0,i.jsx)(n.code,{children:"WebsocketContext"})," and ",(0,i.jsx)(n.code,{children:"HttpResponse"})," are read-only."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DatabaseSession"})," now extends ",(0,i.jsx)(n.code,{children:"BaseEntity"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TypeORMStore.setConnection"})," and ",(0,i.jsx)(n.code,{children:"TypeORMStore.close"})," do not exist anymore. Instead, use a different datasource when registering the ",(0,i.jsx)(n.code,{children:"DatabaseSession"})," entity."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);