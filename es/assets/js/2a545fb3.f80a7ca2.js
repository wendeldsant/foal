"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6851],{32275:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(74848),r=n(28453);const a={title:"Usuarios"},i=void 0,o={id:"authentication/user-class",title:"Usuarios",description:"The User Entity",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/authentication/user-class.md",sourceDirName:"authentication",slug:"/authentication/user-class",permalink:"/es/docs/3.x/authentication/user-class",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/authentication/user-class.md",tags:[],version:"3.x",frontMatter:{title:"Usuarios"},sidebar:"someSidebar",previous:{title:"Comenzar",permalink:"/es/docs/3.x/authentication/quick-start"},next:{title:"Contrase\xf1as",permalink:"/es/docs/3.x/authentication/password-management"}},c={},l=[{value:"The User Entity",id:"the-user-entity",level:2},{value:"Creating Users ...",id:"creating-users-",level:2},{value:"... Programmatically",id:"-programmatically",level:3},{value:"... with a Shell Script (CLI)",id:"-with-a-shell-script-cli",level:3},{value:"Example (email and password)",id:"example-email-and-password",level:2},{value:"The User Entity",id:"the-user-entity-1",level:3},{value:"The create-user Shell Script",id:"the-create-user-shell-script",level:3},{value:"Using another ORM/ODM",id:"using-another-ormodm",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"the-user-entity",children:"The User Entity"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { BaseEntity, Entity, PrimaryGenerateColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number\n\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"User"})," entity is the core of the authentication and authorization system. It is a class that represents the ",(0,t.jsx)(s.code,{children:"user"})," table in the database and each of its instances represents a row in this table."]}),"\n",(0,t.jsxs)(s.p,{children:["The class definition is usually located in the file ",(0,t.jsx)(s.code,{children:"src/app/entities/user.entity.ts"}),". Its attributes represent the columns of the table."]}),"\n",(0,t.jsxs)(s.p,{children:["In FoalTS you can customize the ",(0,t.jsx)(s.code,{children:"User"})," class to suit your needs. The framework makes no assumptions about the attributes required by the user objects. Maybe you'll need a ",(0,t.jsx)(s.code,{children:"firstName"})," column, maybe not. Maybe the authentication will be processed with an email and a password or maybe you will use an authentication token. The choice is yours!"]}),"\n",(0,t.jsxs)(s.p,{children:["However, FoalTS provides abstract classes from which you can extend the ",(0,t.jsx)(s.code,{children:"User"})," entity. Such classes, such as ",(0,t.jsx)(s.code,{children:"UserWithPermissions"}),", have useful utilities for handling authentication and authorization, so that you do not have to reinvent the wheel."]}),"\n",(0,t.jsx)(s.h2,{id:"creating-users-",children:"Creating Users ..."}),"\n",(0,t.jsx)(s.p,{children:"There are several ways to create users."}),"\n",(0,t.jsx)(s.h3,{id:"-programmatically",children:"... Programmatically"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { User } from './src/app/entities';\n\nasync function main() {\n  const user = new User();\n  user.foo = 1;\n  await user.save(); 1\n  });\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"-with-a-shell-script-cli",children:"... with a Shell Script (CLI)"}),"\n",(0,t.jsxs)(s.p,{children:["You can use the ",(0,t.jsx)(s.code,{children:"create-user"})," shell script (located in ",(0,t.jsx)(s.code,{children:"src/scripts"}),") to create a new user through the command line."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"npm run build\nfoal run create-user\n"})}),"\n",(0,t.jsx)(s.h2,{id:"example-email-and-password",children:"Example (email and password)"}),"\n",(0,t.jsx)(s.p,{children:"This section describes how to create users with an email and a password."}),"\n",(0,t.jsx)(s.h3,{id:"the-user-entity-1",children:"The User Entity"}),"\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.code,{children:"src/app/entities/user.entity.ts"})," and add two new columns: an email and a password."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @BeforeInsert()\n  @BeforeUpdate()\n  async hashPassword() {\n    // Hash the password before storing it in the database\n    this.password = await hashPassword(this.password);\n  }\n\n}\n\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Note: The ",(0,t.jsx)(s.code,{children:"BeforeInsert"})," and ",(0,t.jsx)(s.code,{children:"BeforeUpdate"})," are TypeORM decorators for Entity Listeners that run before the entity is saved in the db. In this example they take care of hashing the password. More info about ",(0,t.jsx)(s.code,{children:"Entity Listeners"})," in the ",(0,t.jsx)(s.a,{href:"https://typeorm.io/#/listeners-and-subscribers",children:"TypeORM docs"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"the-create-user-shell-script",children:"The create-user Shell Script"}),"\n",(0,t.jsxs)(s.p,{children:["Running the ",(0,t.jsx)(s.code,{children:"create-user"})," script will result in an error since we do not provide an email and a password as arguments."]}),"\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.code,{children:"src/scripts/create-user.ts"})," and replace its content with the following lines:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"// 3p\nimport { hashPassword } from '@foal/core';\n\n// App\nimport { User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args) {\n  await dataSource.initialize();\n\n  try {\n    const user = new User();\n    user.email = args.email;\n    user.password = await hashPassword(args.password);\n\n    console.log(await user.save());\n  } catch (error: any) {\n    console.error(error.message);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can now create a new user with these commands:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"npm run build\nfoal run create-user email=mary@foalts.org password=mary_password\n"})}),"\n",(0,t.jsx)(s.h2,{id:"using-another-ormodm",children:"Using another ORM/ODM"}),"\n",(0,t.jsxs)(s.p,{children:["In this document, we used TypeORM to define the ",(0,t.jsx)(s.code,{children:"User"})," class and the ",(0,t.jsx)(s.code,{children:"create-user"})," shell script. However, you can still use another ORM/ODM if you want to."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);