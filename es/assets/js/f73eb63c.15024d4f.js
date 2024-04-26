"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3304],{67955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=s(74848),r=s(28453),o=s(11470),i=s(19365);const a={title:"Comenzar"},l=void 0,c={id:"authentication-and-access-control/quick-start",title:"Comenzar",description:"Authentication is the process of verifying that a user is who he or she claims to be. It answers the question Who is the user?.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/authentication-and-access-control/quick-start.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/quick-start",permalink:"/es/docs/2.x/authentication-and-access-control/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/authentication-and-access-control/quick-start.md",tags:[],version:"2.x",frontMatter:{title:"Comenzar"},sidebar:"someSidebar",previous:{title:"Utilizar Otro ORM",permalink:"/es/docs/2.x/databases/using-another-orm"},next:{title:"Clase User & script create-user",permalink:"/es/docs/2.x/authentication-and-access-control/user-class"}},d={},u=[{value:"The Basics",id:"the-basics",level:2},{value:"The Available Tokens (step 1)",id:"the-available-tokens-step-1",level:3},{value:"The Authentication Hooks (step 2)",id:"the-authentication-hooks-step-2",level:3},{value:"Examples",id:"examples",level:2},{value:"SPA, 3rd party APIs, Mobile (cookies)",id:"spa-3rd-party-apis-mobile-cookies",level:3},{value:"Using Session Tokens",id:"using-session-tokens",level:4},{value:"Using JSON Web Tokens",id:"using-json-web-tokens",level:4},{value:"SPA, 3rd party APIs, Mobile (Authorization header)",id:"spa-3rd-party-apis-mobile-authorization-header",level:3},{value:"Using Session Tokens",id:"using-session-tokens-1",level:4},{value:"Using JSON Web Tokens",id:"using-json-web-tokens-1",level:4},{value:"SSR Applications (cookies)",id:"ssr-applications-cookies",level:3},{value:"Using Session Tokens",id:"using-session-tokens-2",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Authentication"})," is the process of verifying that a user is who he or she claims to be. It answers the question ",(0,t.jsx)(n.em,{children:"Who is the user?"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Example: a user enters their login credentials to connect to the application"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Authorization"}),", also known as ",(0,t.jsx)(n.em,{children:"Access Control"}),", is the process of determining what an authenticated user is allowed to do. It answers the question ",(0,t.jsx)(n.em,{children:"Does the user has the right to do what they ask?"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Example: a user tries to access the administrator page"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document focuses on explaining how authentication works in FoalTS and gives several code examples to get started quickly. Further explanations are given in other pages of the documentation."}),"\n",(0,t.jsx)(n.h2,{id:"the-basics",children:"The Basics"}),"\n",(0,t.jsx)(n.p,{children:"The strength of FoalTS authentication system is that it can be used in a wide variety of applications. Whether you want to build a stateless REST API that uses social ID tokens or a traditional web application with templates, cookies and redirects, FoalTS provides you with the tools to do so. You can choose the elements you need and build your own authentication process."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Auth Support"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kind of Application"}),(0,t.jsx)(n.td,{children:"API, Regular Web App, SPA+API, Mobile+API"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"State management"}),(0,t.jsx)(n.td,{children:"Stateful (Session Tokens), Stateless (JSON Web Tokens)\xa0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Credentials"}),(0,t.jsx)(n.td,{children:"Passwords, Social\xa0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Token storage"}),(0,t.jsx)(n.td,{children:"Cookies, localStorage, Mobile, etc"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Whatever architecture you choose, the authentication process will always follow the same pattern."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1: the user logs in."})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"In some architectures, this step might be delegated to an external service: Google, Cognito, Auth0, etc"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verify the credentials (email & password, username & password, social, etc)."}),"\n",(0,t.jsx)(n.li,{children:"Generate a token (stateless or stateful)."}),"\n",(0,t.jsx)(n.li,{children:"Return the token to the client (in a cookie, in the response body or in a header)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 2: once logged in, the user keeps being authenticated on subsequent requests."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"On each request, receive and check the token and retrieve the associated user if the token is valid."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Authentication architecture",src:s(82242).A+"",width:"522",height:"370"})}),"\n",(0,t.jsx)(n.h3,{id:"the-available-tokens-step-1",children:"The Available Tokens (step 1)"}),"\n",(0,t.jsx)(n.p,{children:"FoalTS provides two ways to generate tokens:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Session Tokens"})," (stateful): They are probably the easiest way to manage authentication with Foal. Creation is straightforward, expiration is managed automatically and revocation is easy. Using session tokens keeps your code concise and does not require additional knowledge."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Unlike other restrictive session management systems, FoalTS sessions are not limited to traditional applications that use cookies, redirection and server-side rendering. You can choose to use sessions without cookies, in a SPA+API or Mobile+API architecture and deploy your application to a serverless environment."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JSON Web Tokens"})," (stateless): For more advanced developers, JWTs can be used to create stateless authentication or authentication that works with external social providers."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"the-authentication-hooks-step-2",children:"The Authentication Hooks (step 2)"}),"\n",(0,t.jsxs)(n.p,{children:["In step 2, the hook ",(0,t.jsx)(n.code,{children:"@UseSessions"})," takes care of checking the session tokens and retrieve their associated user. The same applies to ",(0,t.jsx)(n.code,{children:"JWTRequired"})," and ",(0,t.jsx)(n.code,{children:"JWTOptional"})," with JSON Web Tokens."]}),"\n",(0,t.jsx)(n.p,{children:"You will find more information in the documentation pages dedicated to them."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"The examples below can be used directly in your application to configure login, logout and signup routes. You can use them as they are or customize them to meet your specific needs."}),"\n",(0,t.jsxs)(n.p,{children:["For these examples, we will use TypeORM as default ORM and emails and passwords as credentials. An API will allow authenticated users to list ",(0,t.jsx)(n.em,{children:"products"})," with the request ",(0,t.jsx)(n.code,{children:"GET /api/products"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The definition of the ",(0,t.jsx)(n.code,{children:"User"})," entity is common to all the examples and is as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/entities/user.entity.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n}\n\n// Exporting this line is required\n// when using session tokens with TypeORM.\n// It will be used by `npm run makemigrations`\n// to generate the SQL session table.\nexport { DatabaseSession } from '@foal/typeorm';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"spa-3rd-party-apis-mobile-cookies",children:"SPA, 3rd party APIs, Mobile (cookies)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["As you use cookies, you must add a ",(0,t.jsx)(n.a,{href:"/es/docs/2.x/security/csrf-protection",children:"CSRF protection"})," to your application."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In these implementations, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: If you develop a native Mobile application, you may need to enable a ",(0,t.jsx)(n.em,{children:"cookie"})," plugin in your code."]})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: If your server and client do not have the same origins, you may also need to enable ",(0,t.jsx)(n.a,{href:"/es/docs/2.x/api-section/public-api-and-cors-requests",children:"CORS requests"}),"."]})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-session-tokens",children:"Using Session Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["First, make sure that the ",(0,t.jsx)(n.code,{children:"DatabaseSession"})," entity is exported in ",(0,t.jsx)(n.code,{children:"user.entity.ts"}),". Then build and run the migrations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller, dependency, IAppController, Store, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nimport { User } from './entities';\nimport { ApiController, AuthController } from './controllers';\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/auth.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<any, Session>) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<any, Session>) {\n    await ctx.session.destroy();\n\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-json-web-tokens",children:"Using JSON Web Tokens"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"First, generate a base64-encoded secret."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"foal createsecret\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Save this secret in a ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n'})}),"\n",(0,t.jsx)(n.p,{children:"Update your configuration to retrieve the secret."}),"\n",(0,t.jsxs)(o.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(i.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"})})}),(0,t.jsx)(i.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'})})}),(0,t.jsx)(i.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/auth.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey, removeAuthCookie, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    const response = new HttpResponseOK();\n    removeAuthCookie(response);\n    return response;\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from './entities';\n\n@JWTRequired({\n  cookie: true,\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: fetchUser(User)\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"spa-3rd-party-apis-mobile-authorization-header",children:"SPA, 3rd party APIs, Mobile (Authorization header)"}),"\n",(0,t.jsxs)(n.p,{children:["In these implementations, the user logs in with the route ",(0,t.jsx)(n.code,{children:"POST /auth/login"})," and receives a token in exchange in the response body. Then, when the client makes a request to the API, the token must be included in the ",(0,t.jsx)(n.code,{children:"Authorization"})," header using the bearer sheme."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Authorization: Bearer my-token\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: If your server and client do not have the same origins, you may also need to enable ",(0,t.jsx)(n.a,{href:"/es/docs/2.x/api-section/public-api-and-cors-requests",children:"CORS requests"}),"."]})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-session-tokens-1",children:"Using Session Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["First, make sure that the ",(0,t.jsx)(n.code,{children:"DatabaseSession"})," entity is exported in ",(0,t.jsx)(n.code,{children:"user.entity.ts"}),". Then build and run the migrations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/auth.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, createSession, dependency, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, Store, UseSessions, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, UserRequired, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-json-web-tokens-1",children:"Using JSON Web Tokens"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"First, generate a base64-encoded secret."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"foal createsecret\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Save this secret in a ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n'})}),"\n",(0,t.jsx)(n.p,{children:"Update your configuration to retrieve the secret."}),"\n",(0,t.jsxs)(o.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(i.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"})})}),(0,t.jsx)(i.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'})})}),(0,t.jsx)(i.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/auth.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from '../entities';\n\n@JWTRequired({\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: fetchUser(User)\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ssr-applications-cookies",children:"SSR Applications (cookies)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["As you use cookies, you must add a ",(0,t.jsx)(n.a,{href:"/es/docs/2.x/security/csrf-protection",children:"CSRF protection"})," to your application."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this implementation, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies and redirections."}),"\n",(0,t.jsx)(n.h4,{id:"using-session-tokens-2",children:"Using Session Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["First, make sure that the ",(0,t.jsx)(n.code,{children:"DatabaseSession"})," entity is exported in ",(0,t.jsx)(n.code,{children:"user.entity.ts"}),". Then build and run the migrations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, controller, dependency, Get, IAppController, render, Session, Store, UserRequired, UseSessions } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, AuthController } from './controllers';\nimport { User } from './entities';\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n  \n  async init() {\n    await createConnection();\n  }\n\n  @Get('/')\n  @UserRequired({ redirectTo: '/login' })\n  index() {\n    return render('./templates/index.html');\n  }\n\n  @Get('/login')\n  login(ctx: Context<any, Session>) {\n    return render('./templates/login.html', {\n      errorMessage: ctx.session.get<string>('errorMessage', '')\n    });\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/auth.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseRedirect, Post, Session, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context<any, Session>) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      ctx.session.set('errorMessage', 'Unknown email.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      ctx.session.set('errorMessage', 'Invalid password.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session.setUser(user);\n    await ctx.session.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context<any, Session>) {\n    await ctx.session.destroy();\n\n    return new HttpResponseRedirect('/login');\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/app/controllers/api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"templates/login.html"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Login</title>\n</head>\n<body>\n  {{ errorMessage }}\n  <form action="/auth/login" method="post">\n    <input type="email" name="email" id="email">\n    <input type="password" name="password" id="password">\n    <input type="submit" value="Log In">\n  </form>\n</body>\n</html>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var o=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>v});var t=s(96540),r=s(34164),o=s(23104),i=s(56347),a=s(205),l=s(57485),c=s(31682),d=s(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,o=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),j=(()=>{const e=c??x;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=s(74848);function f(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:r}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=x(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,y.jsx)(f,{...e,...n}),(0,y.jsx)(w,{...e,...n})]})}function v(e){const n=(0,g.A)();return(0,y.jsx)(b,{...e,children:u(e.children)},String(n))}},82242:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/auth-architecture-b33065fc731227be200c1fb1a412bf37.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);