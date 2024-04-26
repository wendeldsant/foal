"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[152],{80611:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(74848),o=t(28453);const r={title:"Administrators & Roles"},i=void 0,c={id:"authentication-and-access-control/administrators-and-roles",title:"Administrators & Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/administrators-and-roles",permalink:"/docs/1.x/authentication-and-access-control/administrators-and-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/administrators-and-roles.md",tags:[],version:"1.x",frontMatter:{title:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/docs/1.x/authentication-and-access-control/social-auth"},next:{title:"Groups & Permissions",permalink:"/docs/1.x/authentication-and-access-control/groups-and-permissions"}},a={},d=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",level:2},{value:"Static Roles",id:"static-roles",level:3}];function l(n){const e={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["In simple applications, access control can be managed with static roles or even with an ",(0,s.jsx)(e.code,{children:"isAdmin"})," column in the simplest cases."]}),"\n",(0,s.jsx)(e.h2,{id:"admin-and-non-admins",children:"Admin and Non-Admins"}),"\n",(0,s.jsxs)(e.p,{children:["If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,s.jsx)(e.code,{children:"isAdmin"})," column to the ",(0,s.jsx)(e.code,{children:"user"})," table. Then authorization is handled by looking at the ",(0,s.jsx)(e.code,{children:"isAdmin"})," property of the ",(0,s.jsx)(e.code,{children:"User"})," objects."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"entities/user.entity.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column()\n  isAdmin: boolean;\n\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"hooks/admin-required.hook.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Context, Hook } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"app.controller.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"static-roles",children:"Static Roles"}),"\n",(0,s.jsxs)(e.p,{children:["If it exists more than two categories and/or a user can belong to several categories then defining a ",(0,s.jsx)(e.code,{children:"roles"})," property can also be a solution."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"entities/user.entity.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Column, Entity } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"hooks/role-required.hook.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Context, Hook } from '@foal/core';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"app.controller.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class AppController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var s=t(96540);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);