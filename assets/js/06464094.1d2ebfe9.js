"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1336],{51275:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(74848),o=s(28453);const r={title:"Serialization"},a=void 0,i={id:"common/serialization",title:"Serialization",description:"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the class-transformer library.",source:"@site/versioned_docs/version-3.x/common/serialization.md",sourceDirName:"common",slug:"/common/serialization",permalink:"/docs/3.x/common/serialization",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/common/serialization.md",tags:[],version:"3.x",frontMatter:{title:"Serialization"},sidebar:"someSidebar",previous:{title:"Upload & Download Files",permalink:"/docs/3.x/common/file-storage/upload-and-download-files"},next:{title:"Logging",permalink:"/docs/3.x/common/logging"}},l={},c=[{value:"The <code>class-transformer</code> library",id:"the-class-transformer-library",level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the ",(0,t.jsx)(n.a,{href:"https://github.com/typestack/class-transformer",children:"class-transformer"})," library."]}),"\n",(0,t.jsx)(n.p,{children:"Serialization is particularly interesting if you need to transform HTTP request bodies into model instances or, inversely, convert model instances into plain objects to be returned in HTTP responses."}),"\n",(0,t.jsxs)(n.h2,{id:"the-class-transformer-library",children:["The ",(0,t.jsx)(n.code,{children:"class-transformer"})," library"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install class-transformer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"class-transformer"})," has two main functions to transform objects: ",(0,t.jsx)(n.code,{children:"plainToClass"})," and ",(0,t.jsx)(n.code,{children:"classToPlain"}),". Some examples of their use are given below."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Other functions also exist and can be found in the README of the ",(0,t.jsx)(n.a,{href:"https://github.com/typestack/class-transformer",children:"library repository"}),"."]})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"plainToClass"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { plainToClass } from 'class-transformer';\n\nclass User {\n  firstName: string;\n  lastName: string;\n\n  getFullName() {\n    return firstName +  ' ' + lastName;\n  }\n}\n\nconst user = {\n  firstName: 'John',\n  lastName: 'Doe'\n}\n\nconst user2 = plainToClass(User, user);\n// user2 is an instance of User\nconsole.log(user2.getFullName());\n// John Doe\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"classToPlain"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { classToPlain, Exclude } from 'class-transformer';\n \nexport class User {\n  id: number;\n  email: string;\n  \n  @Exclude()\n  password: string;\n}\n\nconst user = new User();\nuser.id = 1;\nuser.email = 'jane.doe@foalts.org';\nuser.password = 'xxx';\n\nconst serializedUser = classToPlain(user);\nconsole.log(serializedUser instanceof User);\n// false\nconsole.log(serializedUser);\n// {\n//   id: 1,\n//   email: 'jane.doe@foalts.org'\n// }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Additional options can be provided to the ",(0,t.jsx)(n.code,{children:"classToPlain"})," or ",(0,t.jsx)(n.code,{children:"plainToClass"})," functions. ",(0,t.jsx)(n.code,{children:"class-transformer"})," also offers other interesting features (nested objects, property renaming, etc) that can be found ",(0,t.jsx)(n.a,{href:"https://github.com/typestack/class-transformer#readme",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Caution: These functions do not validate data."})," They do not guarantee that all declared properties are assigned and that no additional properties are assigned to the object. They behave more or less like a call to ",(0,t.jsx)(n.code,{children:"Object.assign"}),". Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/3.x/common/validation-and-sanitization",children:"validation page"})," if you need to validate data."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-a-hook",children:"Usage with a Hook"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install class-transformer @foal/typestack\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use ",(0,t.jsx)(n.code,{children:"class-transformer"})," within a hook to transform request bodies, you can install the package ",(0,t.jsx)(n.code,{children:"@foal/typestack"})," for this. It provides a ",(0,t.jsx)(n.code,{children:"@UnserializeBody"})," hook that transforms the request body into an instance of a given class."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"product.entity.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\n// BaseEntity adds the method \"save\" to the class.\nexport class Product extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post, ValidateBody } from '@foal/core';\nimport { UnserializeBody } from '@foal/typestack';\nimport { Product } from '../entities';\n\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  @UnserializeBody(Product)\n  async createProduct(ctx: Context) {\n    // ctx.request.body is an instance of Product\n    const product = ctx.request.body;\n    await product.save();\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The hook takes also an optional parameter to specify the options of the ",(0,t.jsx)(n.a,{href:"https://github.com/typestack/class-transformer",children:"class-transformer"})," library."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);