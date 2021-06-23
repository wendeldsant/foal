(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7652],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=s,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2812:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(2122),s=n(9756),r=(n(7294),n(3905)),a=["components"],i={title:"Quick Start"},l=void 0,p={unversionedId:"authentication-and-access-control/quick-start",id:"version-1.x/authentication-and-access-control/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Authentication is the process of verifying that a user is who he or she claims to be. It answers the question Who is the user?.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/quick-start.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/quick-start",permalink:"/es/docs/1.x/authentication-and-access-control/quick-start",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/quick-start.md",version:"1.x",frontMatter:{title:"Quick Start"},sidebar:"someSidebar",previous:{title:"Using Another ORM",permalink:"/es/docs/1.x/databases/using-another-orm"},next:{title:"User Class and create-user Script",permalink:"/es/docs/1.x/authentication-and-access-control/user-class"}},c=[{value:"The Basics",id:"the-basics",children:[{value:"The Available Tokens (step 1)",id:"the-available-tokens-step-1",children:[]},{value:"The Authentication Hooks (step 2)",id:"the-authentication-hooks-step-2",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"SPA + API / Mobile + API (no cookies)",id:"spa--api--mobile--api-no-cookies",children:[{value:"Sessions Tokens",id:"sessions-tokens",children:[]},{value:"JSON Web Tokens",id:"json-web-tokens",children:[]}]},{value:"SPA + API (with cookies)",id:"spa--api-with-cookies",children:[{value:"Session Tokens",id:"session-tokens",children:[]}]},{value:"Regular Web Applications (with cookies and redirections)",id:"regular-web-applications-with-cookies-and-redirections",children:[]}],u={toc:c};function d(e){var t=e.components,i=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authentication")," is the process of verifying that a user is who he or she claims to be. It answers the question ",(0,r.kt)("em",{parentName:"p"},"Who is the user?"),". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Example: a user enters their login credentials to connect to the application"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authorization"),", also known as ",(0,r.kt)("em",{parentName:"p"},"Access Control"),", is the process of determining what an authenticated user is allowed to do. It answers the question ",(0,r.kt)("em",{parentName:"p"},"Does the user has the right to do what they ask?"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Example: a user tries to access the administrator page"),".")),(0,r.kt)("p",null,"This document focuses on explaining how authentication works in FoalTS and gives several code examples to get started quickly. Further explanations are given in other pages of the documentation."),(0,r.kt)("h2",{id:"the-basics"},"The Basics"),(0,r.kt)("p",null,"The strength of FoalTS authentication system is that it can be used in a wide variety of applications. Whether you want to build a stateless REST API that uses social ID tokens or a traditional web application with templates, cookies and redirects, FoalTS provides you with the tools to do so. You can choose the elements you need and build your own authentication process."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Auth Support"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kind of Application"),(0,r.kt)("td",{parentName:"tr",align:null},"API, Regular Web App, SPA+API, Mobile+API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State management"),(0,r.kt)("td",{parentName:"tr",align:null},"Stateful (Session Tokens), Stateless (JSON Web Tokens)\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Passwords, Social\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Cookies, localStorage, Mobile, etc")))),(0,r.kt)("p",null,"Whatever architecture you choose, the authentication process will always follow the same pattern."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: the user logs in.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"In some architectures, this step might be delegated to an external service: Google, Cognito, Auth0, etc"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify the credentials (email & password, username & password, social, etc)."),(0,r.kt)("li",{parentName:"ol"},"Generate a token (stateless or stateful)."),(0,r.kt)("li",{parentName:"ol"},"Return the token to the client (in a cookie, in the response body or in a header).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: once logged in, the user keeps being authenticated on subsequent requests.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On each request, receive and check the token and retrieve the associated user if the token is valid.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Authentication architecture",src:n(3066).Z})),(0,r.kt)("h3",{id:"the-available-tokens-step-1"},"The Available Tokens (step 1)"),(0,r.kt)("p",null,"FoalTS provides two ways to generate tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Session Tokens")," (stateful): They are probably the easiest way to manage authentication with Foal. Creation is straightforward, expiration is managed automatically and revocation is easy. Using session tokens keeps your code concise and does not require additional knowledge.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unlike other restrictive session management systems, FoalTS sessions are not limited to traditional applications that use cookies, redirection and server-side rendering. You can choose to use sessions without cookies, in a SPA+API or Mobile+API architecture and deploy your application to a serverless environment.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON Web Tokens")," (stateless): For more advanced developers, JWTs can be used to create stateless authentication or authentication that works with external social providers.")),(0,r.kt)("h3",{id:"the-authentication-hooks-step-2"},"The Authentication Hooks (step 2)"),(0,r.kt)("p",null,"In step 2, the hooks ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenRequired"),"  and ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenOptional")," take care of checking the session tokens and retrieve their associated user. The same applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"JWTRequired")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JWTOptional")," with JSON Web Tokens."),(0,r.kt)("p",null,"You will find more information in the documentation pages dedicated to them."),(0,r.kt)("h2",{id:"code-examples"},"Code Examples"),(0,r.kt)("p",null,"The four examples below can be used directly in your application to configure login, logout and signup routes. You can use them as they are or customize them to meet your specific needs."),(0,r.kt)("p",null,"For these examples, we will use TypeORM as default ORM and emails and passwords as credentials. An API will allow authenticated users to list ",(0,r.kt)("em",{parentName:"p"},"products")," with the request ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/products"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nexport class AppController {\n  subControllers = [\n    AuthController,\n    controller('/api', ApiController),\n  ];\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/entities/user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n}\n")),(0,r.kt)("h2",{id:"spa--api--mobile--api-no-cookies"},"SPA + API / Mobile + API (no cookies)"),(0,r.kt)("p",null,"With these implementations, the user logs in with the route ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /login")," and receives a token in exchange in the response body. Then, when the user makes a request to the API, the token must be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer sheme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: Bearer my-token\n")),(0,r.kt)("p",null,"You may need to enable ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/api-section/public-api-and-cors-requests"},"CORS")," or use ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/frontend-integration/angular-react-vue"},"Frontend Integration")," to get this example  work with an SPA."),(0,r.kt)("h3",{id:"sessions-tokens"},"Sessions Tokens"),(0,r.kt)("p",null,"First generate a secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,r.kt)("p",null,"And save this secret in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=my-secret\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, Post, Session, TokenRequired, ValidateBody } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\n// ... to complete\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  @TokenRequired({ store: TypeORMStore, extendLifeTimeOrUpdate: false })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    return new HttpResponseNoContent();\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("h3",{id:"json-web-tokens"},"JSON Web Tokens"),(0,r.kt)("p",null,"First generate a secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,r.kt)("p",null,"And save this secret in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY=my-secret\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    return this.generateLoginResponse(user);\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    return this.generateLoginResponse(user);\n  }\n\n  private async generateLoginResponse(user: User): Promise<HttpResponseOK> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    const secret = Config.get<string>('settings.jwt.secretOrPublicKey');\n\n    const token = await new Promise<string>((resolve, reject) => {\n      sign(payload, secret, { subject: user.id.toString() }, (err, value: string) => {\n        if (err) {\n          return reject(err);\n        }\n        resolve(value);\n      });\n    });\n\n    return new HttpResponseOK({\n      token\n    });\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("h2",{id:"spa--api-with-cookies"},"SPA + API (with cookies)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/security/csrf-protection"},"CSRF protection")," to your application.")),(0,r.kt)("p",null,"In this implementation, the authentication is managed with cookies."),(0,r.kt)("p",null,"You may need to enable ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/api-section/public-api-and-cors-requests"},"CORS")," or use ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/frontend-integration/angular-react-vue"},"Frontend Integration")," to get this example  work with an SPA."),(0,r.kt)("h3",{id:"session-tokens"},"Session Tokens"),(0,r.kt)("p",null,"First generate a secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,r.kt)("p",null,"And save this secret in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=my-secret\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, cookie: true })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,r.kt)("h2",{id:"regular-web-applications-with-cookies-and-redirections"},"Regular Web Applications (with cookies and redirections)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/1.x/security/csrf-protection"},"CSRF protection")," to your application.")),(0,r.kt)("p",null,"In this implementation, the authentication is managed with cookies and redirections."),(0,r.kt)("p",null,"First generate a secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createsecret\n")),(0,r.kt)("p",null,"And save this secret in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SESSION_SECRET=my-secret\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nexport class AppController {\n  subControllers = [\n    AuthController,\n    ViewController,\n    controller('/api', ApiController),\n  ];\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await getRepository(User).save(user);\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseRedirect('/home');\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseRedirect('/home');\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    redirectTo: '/login',\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n    const response = new HttpResponseRedirect('/login');\n    removeSessionCookie(response);\n    return response;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/view.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ViewController {\n  @Get('/home')\n  @TokenRequired({ store: TypeORMStore, cookie: true, redirectTo: '/login' })\n  home() {\n    return new HttpResponseOK('Home page');\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, cookie: true })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")))}d.isMDXComponent=!0},3066:function(e,t,n){"use strict";t.Z=n.p+"assets/images/auth-architecture-b33065fc731227be200c1fb1a412bf37.png"}}]);