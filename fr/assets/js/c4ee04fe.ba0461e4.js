"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2131],{38748:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(74848),t=o(28453);const i={title:"MongoDB",sidebar_label:"MongoDB (TypeORM or Mongoose)"},r=void 0,a={id:"databases/mongodb",title:"MongoDB",description:"FoalTS provides two ways to interact with a MongoDB database in your application: Mongoose and TypeORM.",source:"@site/versioned_docs/version-1.x/databases/mongodb.md",sourceDirName:"databases",slug:"/databases/mongodb",permalink:"/fr/docs/1.x/databases/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/mongodb.md",tags:[],version:"1.x",frontMatter:{title:"MongoDB",sidebar_label:"MongoDB (TypeORM or Mongoose)"},sidebar:"someSidebar",previous:{title:"Generate & Run Migrations",permalink:"/fr/docs/1.x/databases/generate-and-run-migrations"},next:{title:"Using Another ORM",permalink:"/fr/docs/1.x/databases/using-another-orm"}},d={},c=[{value:"Usage with Mongoose",id:"usage-with-mongoose",level:2},{value:"Generating a new project with Mongoose",id:"generating-a-new-project-with-mongoose",level:3},{value:"Generating a model",id:"generating-a-model",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Authentication",id:"authentication",level:3},{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore",level:4},{value:"The <code>fetchUser</code> function",id:"the-fetchuser-function",level:4},{value:"Usage with TypeORM",id:"usage-with-typeorm",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"Authentication",id:"authentication-1",level:3},{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore-1",level:4},{value:"The <code>fetchMongoDBUser</code> function",id:"the-fetchmongodbuser-function",level:4},{value:"Limitations",id:"limitations",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["FoalTS provides two ways to interact with a MongoDB database in your application: ",(0,s.jsx)(n.a,{href:"https://mongoosejs.com/",children:"Mongoose"})," and ",(0,s.jsx)(n.a,{href:"https://typeorm.io/#/",children:"TypeORM"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-mongoose",children:"Usage with Mongoose"}),"\n",(0,s.jsx)(n.h3,{id:"generating-a-new-project-with-mongoose",children:"Generating a new project with Mongoose"}),"\n",(0,s.jsxs)(n.p,{children:["When creating an application with the ",(0,s.jsx)(n.code,{children:"--mongodb"})," flag, the CLI generates a new project with ",(0,s.jsx)(n.code,{children:"mongoose"})," and ",(0,s.jsx)(n.code,{children:"@foal/mongoose"})," installed. The ",(0,s.jsx)(n.code,{children:"User"})," model is defined using this ODM as well as the ",(0,s.jsx)(n.code,{children:"create-user"})," script."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"foal createapp my-app --mongodb\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generating-a-model",children:"Generating a model"}),"\n",(0,s.jsxs)(n.p,{children:["You cannot create ",(0,s.jsx)(n.em,{children:"entities"})," in a Mongoose project, as it is specific to TypeORM. Instead, you can use this command to generate a new model:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"foal g model <name>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The URI of the MongoDB database can be passed through:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the config file ",(0,s.jsx)(n.code,{children:"config/default.json"})," with the ",(0,s.jsx)(n.code,{children:"mongodb.uri"})," key,"]}),"\n",(0,s.jsxs)(n.li,{children:["or with the environment variable ",(0,s.jsx)(n.code,{children:"MONGODB_URI"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["Example (",(0,s.jsx)(n.code,{children:"config/default.json"}),")"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "mongodb": {\n    "uri": "mongodb://localhost:27017/db"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.h4,{id:"the-mongodbstore",children:["The ",(0,s.jsx)(n.code,{children:"MongoDBStore"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install @foal/mongodb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you use sessions with ",(0,s.jsx)(n.code,{children:"@TokenRequired"})," or ",(0,s.jsx)(n.code,{children:"@TokenOptional"}),", you must use the ",(0,s.jsx)(n.code,{children:"MongoDBStore"})," from ",(0,s.jsx)(n.code,{children:"@foal/mongodb"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"the-fetchuser-function",children:["The ",(0,s.jsx)(n.code,{children:"fetchUser"})," function"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Example with JSON Web Tokens"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/mongoose';\n\nimport { User } from '../models';\n\n@JWTRequired({ user: fetchUser(User) })\nclass MyController {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-typeorm",children:"Usage with TypeORM"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm uninstall sqlite3\nnpm install mongodb\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"ormconfig.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: \"mongodb\",\n  database: Config.get2('database.database', 'string'),\n  dropSchema: Config.get2('database.dropSchema', 'boolean', false),\n  entities: [\"build/app/**/*.entity.js\"],\n  host: Config.get2('database.host', 'string'),\n  port: Config.get2('database.port', 'number'),\n  synchronize: Config.get2('database.synchronize', 'boolean', false)\n}\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"config/default.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "database": {\n    "database": "mydb",\n    "host": "localhost",\n    "port": 27017\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"authentication-1",children:"Authentication"}),"\n",(0,s.jsxs)(n.h4,{id:"the-mongodbstore-1",children:["The ",(0,s.jsx)(n.code,{children:"MongoDBStore"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install @foal/mongodb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you use sessions with ",(0,s.jsx)(n.code,{children:"@TokenRequired"})," or ",(0,s.jsx)(n.code,{children:"@TokenOptional"}),", you must use the ",(0,s.jsx)(n.code,{children:"MongoDBStore"})," from ",(0,s.jsx)(n.code,{children:"@foal/mongodb"}),". ",(0,s.jsx)(n.strong,{children:"The TypeORMStore does not work with noSQL databases."})]}),"\n",(0,s.jsxs)(n.h4,{id:"the-fetchmongodbuser-function",children:["The ",(0,s.jsx)(n.code,{children:"fetchMongoDBUser"})," function"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Entity, ObjectID, ObjectIdColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @ObjectIdColumn()\n  id: ObjectID;\n\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Example with JSON Web Tokens"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { JWTRequired } from '@foal/jwt';\nimport { fetchMongoDBUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n@JWTRequired({ user: fetchMongoDBUser(User) })\nclass MyController {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(n.p,{children:"When using MongoDB, there are some features that are not available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"foal g rest-api <name>"})," command,"]}),"\n",(0,s.jsxs)(n.li,{children:["and the ",(0,s.jsx)(n.em,{children:"Groups & Permissions"})," system."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);