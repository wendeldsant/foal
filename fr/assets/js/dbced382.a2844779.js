(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[729],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],i={title:"User Class and create-user Script"},l=void 0,c={unversionedId:"authentication-and-access-control/user-class",id:"version-1.x/authentication-and-access-control/user-class",isDocsHomePage:!1,title:"User Class and create-user Script",description:"The User Entity",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/user-class.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/user-class",permalink:"/fr/docs/1.x/authentication-and-access-control/user-class",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/user-class.md",version:"1.x",frontMatter:{title:"User Class and create-user Script"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/fr/docs/1.x/authentication-and-access-control/quick-start"},next:{title:"Passwords",permalink:"/fr/docs/1.x/authentication-and-access-control/password-management"}},u=[{value:"The User Entity",id:"the-user-entity",children:[]},{value:"Creating Users ...",id:"creating-users-",children:[{value:"... Programmatically",id:"-programmatically",children:[]},{value:"... with a Shell Script (CLI)",id:"-with-a-shell-script-cli",children:[]}]},{value:"Example (email and password)",id:"example-email-and-password",children:[{value:"The User Entity",id:"the-user-entity-1",children:[]},{value:"The create-user Shell Script",id:"the-create-user-shell-script",children:[]}]},{value:"Using another ORM/ODM",id:"using-another-ormodm",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"the-user-entity"},"The User Entity"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGenerateColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number\n\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," entity is the core of the authentication and authorization system. It is a class that represents the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," table in the database and each of its instances represents a row in this table."),(0,s.kt)("p",null,"The class definition is usually located in the file ",(0,s.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts"),". Its attributes represent the columns of the table. "),(0,s.kt)("p",null,"In FoalTS you can customize the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class to suit your needs. The framework makes no assumptions about the attributes required by the user objects. Maybe you'll need a ",(0,s.kt)("inlineCode",{parentName:"p"},"firstName")," column, maybe not. Maybe the authentication will be processed with an email and a password or maybe you will use an authentication token. The choice is yours!"),(0,s.kt)("p",null,"However, FoalTS provides abstract classes from which you can extend the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," entity. Such classes, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"UserWithPermissions"),", have useful utilities for handling authentication and authorization, so that you do not have to reinvent the wheel."),(0,s.kt)("h2",{id:"creating-users-"},"Creating Users ..."),(0,s.kt)("p",null,"There are several ways to create users."),(0,s.kt)("h3",{id:"-programmatically"},"... Programmatically"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getManager, getRepository } from 'typeorm';\n\nimport { User } from './src/app/entities';\n\nasync function main() {\n  const user = new User();\n  user.foo = 1;\n  await getManager().save(user);\n  // OR\n  await getManager().save(User, {\n    foo: 1\n  });\n  // OR\n  await getRepository(User).save({\n    foo: 1\n  });\n}\n")),(0,s.kt)("h3",{id:"-with-a-shell-script-cli"},"... with a Shell Script (CLI)"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"create-user")," shell script (located in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/scripts"),") to create a new user through the command line."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\nfoal run create-user\n")),(0,s.kt)("h2",{id:"example-email-and-password"},"Example (email and password)"),(0,s.kt)("p",null,"This section describes how to create users with an email and a password."),(0,s.kt)("h3",{id:"the-user-entity-1"},"The User Entity"),(0,s.kt)("p",null,"Go to ",(0,s.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts")," and add two new columns: an email and a password."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @BeforeInsert()\n  @BeforeUpdate()\n  async hashPassword() {\n    // Hash the password before storing it in the database\n    this.password = await hashPassword(this.password);\n  }\n\n}\n\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note: The ",(0,s.kt)("inlineCode",{parentName:"p"},"BeforeInsert")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"BeforeUpdate")," are TypeORM decorators for Entity Listeners that run before the entity is saved in the db. In this example they take care of hashing the password. More info about ",(0,s.kt)("inlineCode",{parentName:"p"},"Entity Listeners")," in the ",(0,s.kt)("a",{parentName:"p",href:"https://typeorm.io/#/listeners-and-subscribers"},"TypeORM docs"))),(0,s.kt)("h3",{id:"the-create-user-shell-script"},"The create-user Shell Script"),(0,s.kt)("p",null,"Running the ",(0,s.kt)("inlineCode",{parentName:"p"},"create-user")," script will result in an error since we do not provide an email and a password as arguments."),(0,s.kt)("p",null,"Go to ",(0,s.kt)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts")," and uncomment the lines mentionning the emails and passwords."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To get it work, you will also need to install the ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," package: ",(0,s.kt)("inlineCode",{parentName:"p"},"npm install --save @foal/password"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"isCommon")," util helps you to detect if a password is too common (ex: 12345) and thus prevents the script from creating a new user with an unsecured password.")),(0,s.kt)("p",null,"You can now create a new user with these commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\nfoal run create-user email=mary@foalts.org password=mary_password\n")),(0,s.kt)("h2",{id:"using-another-ormodm"},"Using another ORM/ODM"),(0,s.kt)("p",null,"In this document, we used TypeORM to define the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class and the ",(0,s.kt)("inlineCode",{parentName:"p"},"create-user")," shell script. However, you can still use another ORM/ODM if you want to."))}d.isMDXComponent=!0}}]);