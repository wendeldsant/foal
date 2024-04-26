"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2607],{77459:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=s(74848),t=s(28453),r=s(11470),i=s(19365);const a={title:"Session Tokens & CSRF Protection"},l=void 0,c={id:"upgrade-to-v2/session-tokens",title:"Session Tokens & CSRF Protection",description:"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities.",source:"@site/versioned_docs/version-2.x/upgrade-to-v2/session-tokens.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/session-tokens",permalink:"/docs/2.x/upgrade-to-v2/session-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/upgrade-to-v2/session-tokens.md",tags:[],version:"2.x",frontMatter:{title:"Session Tokens & CSRF Protection"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Session Tokens",id:"session-tokens",level:2},{value:"Choosing and Configuring the Session Store",id:"choosing-and-configuring-the-session-store",level:3},{value:"Specify the Store in The Configuration",id:"specify-the-store-in-the-configuration",level:4},{value:"TypeORM Store",id:"typeorm-store",level:4},{value:"Redis Store",id:"redis-store",level:4},{value:"MongoDB Store",id:"mongodb-store",level:4},{value:"Custom Store",id:"custom-store",level:4},{value:"New Login",id:"new-login",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header",level:4},{value:"Example with cookies",id:"example-with-cookies",level:4},{value:"New Logout",id:"new-logout",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-1",level:4},{value:"Example with cookies",id:"example-with-cookies-1",level:4},{value:"Access Control",id:"access-control",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-2",level:4},{value:"Example with cookies",id:"example-with-cookies-2",level:4},{value:"Send the CSRF token in a template",id:"send-the-csrf-token-in-a-template",level:3},{value:"Read or create a session",id:"read-or-create-a-session",level:3},{value:"Revoking sessions",id:"revoking-sessions",level:3},{value:"Breaking Changes that Should not Affect You",id:"breaking-changes-that-should-not-affect-you",level:3},{value:"CSRF Protection",id:"csrf-protection",level:2},{value:"New Features",id:"new-features",level:2},{value:"Session Tokens",id:"session-tokens-1",level:3},{value:"Query all sessions of a user (TypeORM only)",id:"query-all-sessions-of-a-user-typeorm-only",level:4},{value:"Query all connected users (TypeORM only)",id:"query-all-connected-users-typeorm-only",level:4},{value:"Force the disconnection of a user (TypeORM only)",id:"force-the-disconnection-of-a-user-typeorm-only",level:4},{value:"Flash sessions",id:"flash-sessions",level:4},{value:"Regenerate the session ID",id:"regenerate-the-session-id",level:4},{value:"Expired sessions clean up regularly (TypeORM and MongoDB)",id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb",level:4},{value:"Anonymous sessions and templates",id:"anonymous-sessions-and-templates",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note that when upgrading to version 2, all your users will be automatically logged out."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["Previously, we had to manage a lot of functions and hooks to authenticate users in FoalTS: ",(0,o.jsx)(n.code,{children:"@TokenRequired"}),", ",(0,o.jsx)(n.code,{children:"@TokenOptional"}),", ",(0,o.jsx)(n.code,{children:"removeSessionCookie"}),", ",(0,o.jsx)(n.code,{children:"setSessionCookie"}),", ",(0,o.jsx)(n.code,{children:"getCsrfToken"}),", ",(0,o.jsx)(n.code,{children:"@CsrfTokenRequired"}),", ",(0,o.jsx)(n.code,{children:"setCsrfCookie"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Starting with version 2, they have all been removed and replaced with two unique hooks: ",(0,o.jsx)(n.code,{children:"@UseSessions"})," and ",(0,o.jsx)(n.code,{children:"@UserRequired"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["There is also no need for a session secret anymore. The config parameter ",(0,o.jsx)(n.code,{children:"settings.session.secret"})," can therefore be removed."]}),"\n",(0,o.jsx)(n.h2,{id:"session-tokens",children:"Session Tokens"}),"\n",(0,o.jsx)(n.h3,{id:"choosing-and-configuring-the-session-store",children:"Choosing and Configuring the Session Store"}),"\n",(0,o.jsx)(n.h4,{id:"specify-the-store-in-the-configuration",children:"Specify the Store in The Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Since v1.11.0, FoalTS allows you to globally specify in the configuration which session store to use. This is now the recommended approach and it is assumed that you use it in all examples in the documentation."}),"\n",(0,o.jsxs)(n.p,{children:["To specify the store globally, replace all references to ",(0,o.jsx)(n.code,{children:"TypeORMStore"})," (or redis, mongo, etc) with ",(0,o.jsx)(n.code,{children:"Store"})," and remove the ",(0,o.jsx)(n.code,{children:"store: TypeORMStore"})," option from your hooks."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Store } from '@foal/core';\n\nclass AppController {\n  // Before\n  @dependency\n  store: TypeORMStore;\n\n  // After\n  @dependency\n  store: Store;\n\n\n  @Get('/products')\n  // Before\n  @TokenRequired({ store: TypeStore })\n  // After\n  @TokenRequired()\n  readProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, in the configuration, specify the package name of your session store (",(0,o.jsx)(n.code,{children:"@foal/typeorm"}),", ",(0,o.jsx)(n.code,{children:"@foal/redis"}),", etc)."]}),"\n",(0,o.jsxs)(r.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,o.jsx)(i.A,{value:"yaml",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'settings:\n  session:\n    store: "@foal/typeorm"\n'})})}),(0,o.jsx)(i.A,{value:"json",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n    }\n  }\n}\n'})})}),(0,o.jsx)(i.A,{value:"js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm",\n    }\n  }\n}\n'})})})]}),"\n",(0,o.jsx)(n.h4,{id:"typeorm-store",children:"TypeORM Store"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Warning:"})," Starting from version 2, ",(0,o.jsx)(n.code,{children:"TypeORMStore"})," only support numbers (not strings) as user IDs."]}),"\n",(0,o.jsx)(n.p,{children:"In version 1, when launching the application, Foal was making a request to the database to create the session table if it does not exist."}),"\n",(0,o.jsx)(n.p,{children:"This had two drawbacks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This may make too many undesirable requests to the database in a severless environment."}),"\n",(0,o.jsx)(n.li,{children:"The database schema is updated at runtime outside the classical migration process. This practice can be dangerous and it does not allow to keep a traceability of the modifications of the database schema unlike migrations (revert, etc)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version 2, ",(0,o.jsx)(n.strong,{children:"you must generate and run migrations yourself"})," to create the session table."]}),"\n",(0,o.jsxs)(n.p,{children:["The easier way to achieve this is probably to export the ",(0,o.jsx)(n.code,{children:"DatabaseSession"})," entity from ",(0,o.jsx)(n.code,{children:"@foal/typeorm"})," and to run the following commands."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// ...\n\n@Entity()\nexport class User extends BaseEntity {\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Once you application is migrated to version 2 and works as expected, you will be able to ",(0,o.jsx)(n.em,{children:"manually"})," delete the old ",(0,o.jsx)(n.code,{children:"foal_session"})," table. The new table used by the framework is named ",(0,o.jsx)(n.code,{children:"database_session"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"redis-store",children:"Redis Store"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration key ",(0,o.jsx)(n.code,{children:"redis.uri"})," has been renamed to ",(0,o.jsx)(n.code,{children:"settings.redis.uri"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See also ",(0,o.jsx)(n.a,{href:"/docs/2.x/upgrade-to-v2/config-system#environment-variables",children:"this"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.em,{children:["Note: In the Redis database, session keys now start with ",(0,o.jsx)(n.code,{children:"sessions:"})," instead of ",(0,o.jsx)(n.code,{children:"session:"})]}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"mongodb-store",children:"MongoDB Store"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration key ",(0,o.jsx)(n.code,{children:"mongodb.uri"})," has been renamed to ",(0,o.jsx)(n.code,{children:"settings.mongodb.uri"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See also ",(0,o.jsx)(n.a,{href:"/docs/2.x/upgrade-to-v2/config-system#environment-variables",children:"this"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Once you application is migrated to version 2 and works as expected, you will be able to manually delete the old ",(0,o.jsx)(n.code,{children:"foalSessions"})," collection. The new collection used by the framework is named ",(0,o.jsx)(n.code,{children:"sessions"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"custom-store",children:"Custom Store"}),"\n",(0,o.jsx)(n.p,{children:"Due to the complexity of implementing a store in version 1, it is unlikely that one has been implemented."}),"\n",(0,o.jsx)(n.p,{children:"However, if it has, the best way to upgrade it to version 2 is to rewrite it from scratch using the documentation."}),"\n",(0,o.jsx)(n.h3,{id:"new-login",children:"New Login"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["You may be interested in looking at the ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"quick start page"})," as well."]})}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"example-with-the-authorization-header",children:["Example with the ",(0,o.jsx)(n.code,{children:"Authorization"})," header"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"example-with-cookies",children:"Example with cookies"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  // user: fetchUser(User)\n})\nexport class AuthController {\n  // This line is required: the store must be injected in at least one controller.\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK();\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"new-logout",children:"New Logout"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["You may be interested in looking at the ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"quick start page"})," as well."]})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In version 2, you don't need to talk directly to the store, use weird options (such as ",(0,o.jsx)(n.code,{children:"extendLifeTimeOrUpdate"}),") or manage cookies yourself."]}),"\n",(0,o.jsxs)(n.p,{children:["Just call ",(0,o.jsx)(n.code,{children:"session.destroy()"})," and FoalTS will take care of everything else."]}),"\n",(0,o.jsxs)(n.h4,{id:"example-with-the-authorization-header-1",children:["Example with the ",(0,o.jsx)(n.code,{children:"Authorization"})," header"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    return new HttpResponseNoContent();\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions()\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"example-with-cookies-1",children:"Example with cookies"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions({\n    cookie: true,\n  })\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"access-control",children:"Access Control"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["You may be interested in looking at the ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"quick start page"})," as well."]})}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"example-with-the-authorization-header-2",children:["Example with the ",(0,o.jsx)(n.code,{children:"Authorization"})," header"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"@TokenRequired({ store: TypeORMStore, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"example-with-cookies-2",children:"Example with cookies"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Before"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"@TokenRequired({ store: TypeORMStore, cookie: true, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"After"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"send-the-csrf-token-in-a-template",children:"Send the CSRF token in a template"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// Before\nreturn render('templates/home.html', { csrfToken: await getCsrfToken(ctx.session) });\n\n// After\nreturn render('templates/home.html', { csrfToken: ctx.session.get('csrfToken') });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"read-or-create-a-session",children:"Read or create a session"}),"\n",(0,o.jsxs)(n.p,{children:["To read or create a session manually, use the function ",(0,o.jsx)(n.code,{children:"createSession"})," and ",(0,o.jsx)(n.code,{children:"readSession"})," instead of the store directly."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Session.verifyTokenAndGetId(token)"})," is removed."]}),"\n",(0,o.jsx)(n.h3,{id:"revoking-sessions",children:"Revoking sessions"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h3,{id:"breaking-changes-that-should-not-affect-you",children:"Breaking Changes that Should not Affect You"}),"\n",(0,o.jsx)(n.p,{children:"If you are affected, it's probably you do not use the component the right way."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Session constructor has changes. You should not instantiate it yourself. Use ",(0,o.jsx)(n.code,{children:"readSession"})," or ",(0,o.jsx)(n.code,{children:"createSession"})," instead."]}),"\n",(0,o.jsxs)(n.li,{children:["Except for the ",(0,o.jsx)(n.code,{children:"get"})," and ",(0,o.jsx)(n.code,{children:"set"})," methods, the interface of ",(0,o.jsx)(n.code,{children:"Session"})," has changed."]}),"\n",(0,o.jsxs)(n.li,{children:["The methods ",(0,o.jsx)(n.code,{children:"getRedisInstance"})," and ",(0,o.jsx)(n.code,{children:"getMongoInstance"})," have been removed from the stores."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"csrf-protection",children:"CSRF Protection"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npm uninstall @foal/csrf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The package ",(0,o.jsx)(n.code,{children:"@foal/csrf"})," has been removed. In version 2, the CSRF protection is directly included in the ",(0,o.jsx)(n.code,{children:"@UseSessions"})," hook and can be enabled with ",(0,o.jsx)(n.code,{children:"settings.session.csrf.enabled"})," (the configuration key ",(0,o.jsx)(n.code,{children:"settings.csrf.enabled"})," does not exist anymore)."]}),"\n",(0,o.jsx)(n.p,{children:"You do not need to take care of generating a CSRF token in the session. The framework handles it for you."}),"\n",(0,o.jsxs)(n.p,{children:["The best way to use the new CSRF protection is to go directly to the ",(0,o.jsx)(n.a,{href:"/docs/2.x/security/csrf-protection",children:"CSRF page"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Warning:"})," In order to ",(0,o.jsx)(n.em,{children:"work better"})," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",(0,o.jsx)(n.code,{children:"csrfToken"})," to ",(0,o.jsx)(n.code,{children:"XSRF-TOKEN"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,o.jsx)(n.h3,{id:"session-tokens-1",children:"Session Tokens"}),"\n",(0,o.jsx)(n.h4,{id:"query-all-sessions-of-a-user-typeorm-only",children:"Query all sessions of a user (TypeORM only)"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"query-all-connected-users-typeorm-only",children:"Query all connected users (TypeORM only)"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"force-the-disconnection-of-a-user-typeorm-only",children:"Force the disconnection of a user (TypeORM only)"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"flash-sessions",children:"Flash sessions"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"regenerate-the-session-id",children:"Regenerate the session ID"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb",children:"Expired sessions clean up regularly (TypeORM and MongoDB)"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]}),"\n",(0,o.jsx)(n.h4,{id:"anonymous-sessions-and-templates",children:"Anonymous sessions and templates"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.x/authentication-and-access-control/session-tokens",children:"session tokens"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var o=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>k});var o=s(96540),t=s(34164),r=s(23104),i=s(56347),a=s(205),l=s(57485),c=s(31682),d=s(89466);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:o,default:t}}=e;return{value:n,label:s,attributes:o,default:t}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,h]=x({queryString:s,groupId:t}),[m,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(s);return[t,(0,o.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),j=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function y(e){let{className:n,block:s,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=a[s].value;t!==o&&(c(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,t.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":o===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(96540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);