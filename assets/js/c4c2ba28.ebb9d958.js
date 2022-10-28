"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1305],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},i=void 0,s={unversionedId:"authentication-and-access-control/administrators-and-roles",id:"authentication-and-access-control/administrators-and-roles",title:"Administrators and Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/docs/authentication-and-access-control/administrators-and-roles.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/administrators-and-roles",permalink:"/docs/authentication-and-access-control/administrators-and-roles",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication-and-access-control/administrators-and-roles.md",tags:[],version:"current",frontMatter:{title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/docs/authentication-and-access-control/social-auth"},next:{title:"Groups & Permissions",permalink:"/docs/authentication-and-access-control/groups-and-permissions"}},l={},p=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",level:2},{value:"Static Roles",id:"static-roles",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In simple applications, access control can be managed with static roles or even with an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column in the simplest cases."),(0,o.kt)("h2",{id:"admin-and-non-admins"},"Admin and Non-Admins"),(0,o.kt)("p",null,"If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column to the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," table. Then authorization is handled by looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," objects."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  isAdmin: boolean;\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/admin-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User|null>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"controllers/api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")),(0,o.kt)("h3",{id:"static-roles"},"Static Roles"),(0,o.kt)("p",null,"If there exists more than two categories and/or a user can belong to several categories then defining a ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," property can also be a solution."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/role-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User|null>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"controllers/api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")))}d.isMDXComponent=!0}}]);