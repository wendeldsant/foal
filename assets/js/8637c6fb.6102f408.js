"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7052],{31276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const o={title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},i=void 0,a={id:"authentication-and-access-control/administrators-and-roles",title:"Administrators and Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/versioned_docs/version-2.x/authentication-and-access-control/administrators-and-roles.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/administrators-and-roles",permalink:"/docs/2.x/authentication-and-access-control/administrators-and-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/authentication-and-access-control/administrators-and-roles.md",tags:[],version:"2.x",frontMatter:{title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/docs/2.x/authentication-and-access-control/social-auth"},next:{title:"Groups & Permissions",permalink:"/docs/2.x/authentication-and-access-control/groups-and-permissions"}},c={},d=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",level:2},{value:"Static Roles",id:"static-roles",level:3}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In simple applications, access control can be managed with static roles or even with an ",(0,s.jsx)(n.code,{children:"isAdmin"})," column in the simplest cases."]}),"\n",(0,s.jsx)(n.h2,{id:"admin-and-non-admins",children:"Admin and Non-Admins"}),"\n",(0,s.jsxs)(n.p,{children:["If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,s.jsx)(n.code,{children:"isAdmin"})," column to the ",(0,s.jsx)(n.code,{children:"user"})," table. Then authorization is handled by looking at the ",(0,s.jsx)(n.code,{children:"isAdmin"})," property of the ",(0,s.jsx)(n.code,{children:"User"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"entities/user.entity.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  isAdmin: boolean;\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"hooks/admin-required.hook.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"controllers/api.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"static-roles",children:"Static Roles"}),"\n",(0,s.jsxs)(n.p,{children:["If there exists more than two categories and/or a user can belong to several categories then defining a ",(0,s.jsx)(n.code,{children:"roles"})," property can also be a solution."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"entities/user.entity.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"hooks/role-required.hook.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"controllers/api.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);