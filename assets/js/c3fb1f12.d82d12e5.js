"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8477],{85839:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=n(74848),i=n(28453);const t={title:"Groups and Permissions",sidebar_label:"Groups & Permissions"},o=void 0,a={id:"authentication-and-access-control/groups-and-permissions",title:"Groups and Permissions",description:"In advanced applications, access control can be managed through permissions and groups.",source:"@site/versioned_docs/version-2.x/authentication-and-access-control/groups-and-permissions.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/groups-and-permissions",permalink:"/docs/2.x/authentication-and-access-control/groups-and-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/authentication-and-access-control/groups-and-permissions.md",tags:[],version:"2.x",frontMatter:{title:"Groups and Permissions",sidebar_label:"Groups & Permissions"},sidebar:"someSidebar",previous:{title:"Administrators & Roles",permalink:"/docs/2.x/authentication-and-access-control/administrators-and-roles"},next:{title:"REST API",permalink:"/docs/2.x/api-section/rest-blueprints"}},c={},d=[{value:"Permissions",id:"permissions",level:2},{value:"The <code>Permission</code> Entity",id:"the-permission-entity",level:3},{value:"Creating Permissions Programmatically",id:"creating-permissions-programmatically",level:3},{value:"Creating Permissions with a Shell Script (CLI)",id:"creating-permissions-with-a-shell-script-cli",level:3},{value:"Groups",id:"groups",level:2},{value:"The Group Entity",id:"the-group-entity",level:3},{value:"Creating Groups Programmatically",id:"creating-groups-programmatically",level:3},{value:"Creating Groups with a Shell Script (CLI)",id:"creating-groups-with-a-shell-script-cli",level:3},{value:"Users",id:"users",level:2},{value:"The <code>UserWithPermissions</code> Entity",id:"the-userwithpermissions-entity",level:3},{value:"The <code>hasPerm</code> Method",id:"the-hasperm-method",level:3},{value:"Creating Users with Groups and Permissions with a Shell Script (CLI)",id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli",level:3},{value:"Fetching a User with their Permissions",id:"fetching-a-user-with-their-permissions",level:2},{value:"The PermissionRequired Hook",id:"the-permissionrequired-hook",level:2},{value:"BaseEntity Inheritance",id:"baseentity-inheritance",level:2},{value:"Get All Users with a Given Permission",id:"get-all-users-with-a-given-permission",level:2}];function l(e){const s={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"In advanced applications, access control can be managed through permissions and groups."}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.em,{children:"permission"})," gives a user the right to perform a given action (such as accessing a route)."]}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.em,{children:"group"})," brings together a set of users (a user can belong to more than one group)."]}),"\n",(0,r.jsx)(s.p,{children:"Permissions can be attached to a user or a group. Attaching a permission to a group is equivalent to attaching the permission to each of its users."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Examples of ",(0,r.jsx)(s.em,{children:"groups"}),' are the "Free", "Pro" and "Enterprise" plans of a SaaS application. Depending of the price paid by the customers, they have access to certain features whose access are managed by ',(0,r.jsx)(s.em,{children:"permissions"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(s.h3,{id:"the-permission-entity",children:["The ",(0,r.jsx)(s.code,{children:"Permission"})," Entity"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Database Link"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Primary auto generated key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"codeName"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Unique, Length: 100"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"creating-permissions-programmatically",children:"Creating Permissions Programmatically"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'secret-perm';\n  perm.name = 'Permission to access the secret';\n  await perm.save();\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"creating-permissions-with-a-shell-script-cli",children:"Creating Permissions with a Shell Script (CLI)"}),"\n",(0,r.jsx)(s.p,{children:"Create a new script with this command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"foal generate script create-perm\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Replace the content of the new created file ",(0,r.jsx)(s.code,{children:"src/scripts/create-perm.ts"})," with the following:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"// 3p\nimport { Permission } from '@foal/typeorm';\nimport { createConnection, getConnection } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string' },\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string }) {\n  const permission = new Permission();\n  permission.codeName = args.codeName;\n  permission.name = args.name;\n\n  await createConnection();\n\n  try {\n    console.log(\n      await permission.save()\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"Then you can create a permission through the command line."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'npm run build\nfoal run create-perm name="Permission to access the secret" codeName="access-secret"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"groups",children:"Groups"}),"\n",(0,r.jsx)(s.p,{children:"Groups are used to categorize users. A user can belong to several groups and a group can have several users."}),"\n",(0,r.jsx)(s.p,{children:"A group can have permissions. They then apply to all its users."}),"\n",(0,r.jsx)(s.h3,{id:"the-group-entity",children:"The Group Entity"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Database Link"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Primary auto generated key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Length: 80"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"codeName"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Unique, Length: 100"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"permissions"}),(0,r.jsx)(s.td,{children:"Permission[]"}),(0,r.jsx)(s.td,{children:"A many-to-many relation with the table permission"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"creating-groups-programmatically",children:"Creating Groups Programmatically"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Group, Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'delete-users';\n  perm.name = 'Permission to delete users';\n  await perm.save();\n\n  const group = new Group();\n  group.codeName = 'admin';\n  group.name = 'Administrators';\n  group.permissions = [ perm ];\n  await group.save();\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"creating-groups-with-a-shell-script-cli",children:"Creating Groups with a Shell Script (CLI)"}),"\n",(0,r.jsx)(s.p,{children:"Create a new script with this command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"foal generate script create-group\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Replace the content of the new created file ",(0,r.jsx)(s.code,{children:"src/scripts/create-group.ts"})," with the following:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"// 3p\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string', maxLength: 80 },\n    permissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] }\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string, permissions: string[] }) {\n  const group = new Group();\n  group.permissions = [];\n  group.codeName = args.codeName;\n  group.name = args.name;\n\n  const connection = await createConnection();\n  try {\n    for (const codeName of args.permissions) {\n      const permission = await Permission.findOne({ codeName });\n      if (!permission) {\n        console.log(\n          `No permission with the code name \"${codeName}\" was found.`\n        );\n        return;\n      }\n      group.permissions.push(permission);\n    }\n\n    console.log(\n      await group.save()\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n"})}),"\n",(0,r.jsx)(s.p,{children:"Then you can create a group through the command line."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'npm run build\nfoal run create-perm name="Permission to delete users" codeName="delete-users"\nfoal run create-group name="Administrators" codeName="admin" permissions="[ \\"delete-users\\" ]"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"users",children:"Users"}),"\n",(0,r.jsxs)(s.h3,{id:"the-userwithpermissions-entity",children:["The ",(0,r.jsx)(s.code,{children:"UserWithPermissions"})," Entity"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { UserWithPermissions } from '@foal/typeorm';\nimport { Entity } from 'typeorm';\n\n@Entity()\nexport class User extends UserWithPermissions {\n\n}\n\n// You MUST export Group and Permission so that TypeORM can generate migrations.\nexport { Group, Permission } from '@foal/typeorm';\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"UserWithPermissions"})," is an abstract class that has useful features to handle access control through permissions and groups. You must extend your ",(0,r.jsx)(s.code,{children:"User"})," entity from this class to use permissions and groups."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Database Link"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"Primary auto generated key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"groups"}),(0,r.jsx)(s.td,{children:"Group[]"}),(0,r.jsx)(s.td,{children:"A many-to-many relation with the table group"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userPermissions"}),(0,r.jsx)(s.td,{children:"Permission[]"}),(0,r.jsx)(s.td,{children:"A many-to-many relation with the table permission"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Relations between Users, Groups and Permissions",src:n(59915).A+"",width:"480",height:"280"})}),"\n",(0,r.jsxs)(s.h3,{id:"the-hasperm-method",children:["The ",(0,r.jsx)(s.code,{children:"hasPerm"})," Method"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"hasPerm(permissionCodeName: string)"})," method of the ",(0,r.jsx)(s.code,{children:"UserWithPermissions"})," class returns true if one of these conditions is true:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The user has the required permission."}),"\n",(0,r.jsx)(s.li,{children:"The user belongs to a group that has the required permission."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli",children:"Creating Users with Groups and Permissions with a Shell Script (CLI)"}),"\n",(0,r.jsxs)(s.p,{children:["Replace the content of the new created file ",(0,r.jsx)(s.code,{children:"src/scripts/create-user.ts"})," with the following:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"// 3p\nimport { hashPassword } from '@foal/core';\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection, getConnection, getManager } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    groups: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] },\n    password: { type: 'string' },\n    userPermissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args) {\n  const user = new User();\n  user.userPermissions = [];\n  user.groups = [];\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n\n  await createConnection();\n\n  for (const codeName of args.userPermissions as string[]) {\n    const permission = await Permission.findOne({ codeName });\n    if (!permission) {\n      console.log(`No permission with the code name \"${codeName}\" was found.`);\n      return;\n    }\n    user.userPermissions.push(permission);\n  }\n\n  for (const codeName of args.groups as string[]) {\n    const group = await Group.findOne({ codeName });\n    if (!group) {\n      console.log(`No group with the code name \"${codeName}\" was found.`);\n      return;\n    }\n    user.groups.push(group);\n  }\n\n  try {\n    console.log(\n      await getManager().save(user)\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"Then you can create a user with their permissions and groups through the command line."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'npm run build\nfoal run create-user userPermissions="[ \\"my-first-perm\\" ]" groups="[ \\"my-group\\" ]"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"fetching-a-user-with-their-permissions",children:"Fetching a User with their Permissions"}),"\n",(0,r.jsxs)(s.p,{children:["If you want the ",(0,r.jsx)(s.code,{children:"hasPerm"})," method to work on the context ",(0,r.jsx)(s.code,{children:"user"})," property, you must use the ",(0,r.jsx)(s.code,{children:"fetchUserWithPermissions"})," function in the authentication hook."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Example with JSON Web Tokens"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUserWithPermissions } from '@foal/typeorm';\n\n@JWTRequired({\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Example with Sessions Tokens"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Context, Get, UseSessions } from '@foal/core';\nimport { fetchUserWithPermissions, TypeORMStore } from '@foal/typeorm';\n\n@UseSessions({\n  store: TypeORMStore,\n  required: true,\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"the-permissionrequired-hook",children:"The PermissionRequired Hook"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["This requires the use of ",(0,r.jsx)(s.code,{children:"fetchUserWithPermissions"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"@PermissionRequired('perm')\n"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Context"}),(0,r.jsx)(s.th,{children:"Response"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ctx.user"})," is undefined"]}),(0,r.jsx)(s.td,{children:"401 - UNAUTHORIZED"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ctx.user.hasPerm('perm')"})," is false"]}),(0,r.jsx)(s.td,{children:"403 - FORBIDDEN"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"@PermissionRequired('perm', { redirect: '/login' })\n"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Context"}),(0,r.jsx)(s.th,{children:"Response"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ctx.user"})," is undefined"]}),(0,r.jsxs)(s.td,{children:["Redirects to ",(0,r.jsx)(s.code,{children:"/login"})," (302 - FOUND)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ctx.user.hasPerm('perm')"})," is false"]}),(0,r.jsx)(s.td,{children:"403 - FORBIDDEN"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Example"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Context, Get } from '@foal/core';\nimport { fetchUserWithPermissions, PermissionRequired } from '@foal/typeorm';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ user: fetchUserWithPermissions(User) })\nexport class ProductController {\n  @Get('/products')\n  @PermissionRequired('read-products')\n  readProduct(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"baseentity-inheritance",children:"BaseEntity Inheritance"}),"\n",(0,r.jsxs)(s.p,{children:["The classes ",(0,r.jsx)(s.code,{children:"Permission"}),", ",(0,r.jsx)(s.code,{children:"Group"})," and ",(0,r.jsx)(s.code,{children:"UserWithPermissions"})," all extends the ",(0,r.jsx)(s.code,{children:"BaseEntity"})," class so you can access its static and instance methods."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Example"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"const perm = await Permission.findOneOrFail({ codeName: 'perm1' });\nperm.name = 'Permission1';\nawait perm.save();\n"})}),"\n",(0,r.jsx)(s.h2,{id:"get-all-users-with-a-given-permission",children:"Get All Users with a Given Permission"}),"\n",(0,r.jsxs)(s.p,{children:["The class ",(0,r.jsx)(s.code,{children:"UserWithPermissions"})," provides a static method ",(0,r.jsx)(s.code,{children:"withPerm"})," to get all users with a given permission. It returns all users that have this permission on their own or through the groups they belong to."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"@Entity()\nclass User extends UserWithPermissions {}\n  \nconst users = await User.withPerm<User>('perm1');\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},59915:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/permissions-groups-and-users-ec7a479e022323aca7ea069ba9622d31.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(96540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);