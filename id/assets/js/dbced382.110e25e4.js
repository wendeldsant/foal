"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={title:"User Class and create-user Script"},o=void 0,i={unversionedId:"authentication-and-access-control/user-class",id:"version-1.x/authentication-and-access-control/user-class",title:"User Class and create-user Script",description:"The User Entity",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/user-class.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/user-class",permalink:"/id/docs/1.x/authentication-and-access-control/user-class",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/user-class.md",tags:[],version:"1.x",frontMatter:{title:"User Class and create-user Script"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/id/docs/1.x/authentication-and-access-control/quick-start"},next:{title:"Passwords",permalink:"/id/docs/1.x/authentication-and-access-control/password-management"}},l={},c=[{value:"The User Entity",id:"the-user-entity",level:2},{value:"Creating Users ...",id:"creating-users-",level:2},{value:"... Programmatically",id:"-programmatically",level:3},{value:"... with a Shell Script (CLI)",id:"-with-a-shell-script-cli",level:3},{value:"Example (email and password)",id:"example-email-and-password",level:2},{value:"The User Entity",id:"the-user-entity-1",level:3},{value:"The create-user Shell Script",id:"the-create-user-shell-script",level:3},{value:"Using another ORM/ODM",id:"using-another-ormodm",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-user-entity"},"The User Entity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGenerateColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number\n\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity is the core of the authentication and authorization system. It is a class that represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," table in the database and each of its instances represents a row in this table."),(0,r.kt)("p",null,"The class definition is usually located in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts"),". Its attributes represent the columns of the table. "),(0,r.kt)("p",null,"In FoalTS you can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class to suit your needs. The framework makes no assumptions about the attributes required by the user objects. Maybe you'll need a ",(0,r.kt)("inlineCode",{parentName:"p"},"firstName")," column, maybe not. Maybe the authentication will be processed with an email and a password or maybe you will use an authentication token. The choice is yours!"),(0,r.kt)("p",null,"However, FoalTS provides abstract classes from which you can extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity. Such classes, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"UserWithPermissions"),", have useful utilities for handling authentication and authorization, so that you do not have to reinvent the wheel."),(0,r.kt)("h2",{id:"creating-users-"},"Creating Users ..."),(0,r.kt)("p",null,"There are several ways to create users."),(0,r.kt)("h3",{id:"-programmatically"},"... Programmatically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getManager, getRepository } from 'typeorm';\n\nimport { User } from './src/app/entities';\n\nasync function main() {\n  const user = new User();\n  user.foo = 1;\n  await getManager().save(user);\n  // OR\n  await getManager().save(User, {\n    foo: 1\n  });\n  // OR\n  await getRepository(User).save({\n    foo: 1\n  });\n}\n")),(0,r.kt)("h3",{id:"-with-a-shell-script-cli"},"... with a Shell Script (CLI)"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-user")," shell script (located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts"),") to create a new user through the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\nfoal run create-user\n")),(0,r.kt)("h2",{id:"example-email-and-password"},"Example (email and password)"),(0,r.kt)("p",null,"This section describes how to create users with an email and a password."),(0,r.kt)("h3",{id:"the-user-entity-1"},"The User Entity"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts")," and add two new columns: an email and a password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @BeforeInsert()\n  @BeforeUpdate()\n  async hashPassword() {\n    // Hash the password before storing it in the database\n    this.password = await hashPassword(this.password);\n  }\n\n}\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeInsert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeUpdate")," are TypeORM decorators for Entity Listeners that run before the entity is saved in the db. In this example they take care of hashing the password. More info about ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity Listeners")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://typeorm.io/#/listeners-and-subscribers"},"TypeORM docs"))),(0,r.kt)("h3",{id:"the-create-user-shell-script"},"The create-user Shell Script"),(0,r.kt)("p",null,"Running the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-user")," script will result in an error since we do not provide an email and a password as arguments."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts")," and uncomment the lines mentionning the emails and passwords."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To get it work, you will also need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," package: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save @foal/password"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"isCommon")," util helps you to detect if a password is too common (ex: 12345) and thus prevents the script from creating a new user with an unsecured password.")),(0,r.kt)("p",null,"You can now create a new user with these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\nfoal run create-user email=mary@foalts.org password=mary_password\n")),(0,r.kt)("h2",{id:"using-another-ormodm"},"Using another ORM/ODM"),(0,r.kt)("p",null,"In this document, we used TypeORM to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class and the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-user")," shell script. However, you can still use another ORM/ODM if you want to."))}u.isMDXComponent=!0}}]);