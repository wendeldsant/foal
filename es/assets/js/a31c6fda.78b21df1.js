(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7229],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2945:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"Authentication with JWT",sidebar_label:"JSON Web Tokens (authentication)"},s=void 0,p={unversionedId:"authentication-and-access-control/jwt",id:"version-1.x/authentication-and-access-control/jwt",isDocsHomePage:!1,title:"Authentication with JWT",description:"`",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/jwt.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/jwt",permalink:"/es/docs/1.x/authentication-and-access-control/jwt",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/jwt.md",version:"1.x",frontMatter:{title:"Authentication with JWT",sidebar_label:"JSON Web Tokens (authentication)"},sidebar:"someSidebar",previous:{title:"Session Tokens (authentication)",permalink:"/es/docs/1.x/authentication-and-access-control/session-tokens"},next:{title:"Social Auth",permalink:"/es/docs/1.x/authentication-and-access-control/social-auth"}},c=[{value:"Example of a <code>LoginController</code>",id:"example-of-a-logincontroller",children:[]},{value:"Blacklist Tokens",id:"blacklist-tokens",children:[]},{value:"Refresh the tokens",id:"refresh-the-tokens",children:[]},{value:"Make a Database Call to Get More User Properties",id:"make-a-database-call-to-get-more-user-properties",children:[]},{value:"Specifying a Different Encoding for Secrets",id:"specifying-a-different-encoding-for-secrets",children:[]},{value:"Store JWTs in a cookie",id:"store-jwts-in-a-cookie",children:[]},{value:"Use RSA or ECDSA public/private keys",id:"use-rsa-or-ecdsa-publicprivate-keys",children:[{value:"Provide the Public/Private Key",id:"provide-the-publicprivate-key",children:[]},{value:"Generate Temporary Tokens",id:"generate-temporary-tokens",children:[]},{value:"Receive &amp; Verify Tokens",id:"receive--verify-tokens-1",children:[]}]},{value:"Audience, Issuer and Other Options",id:"audience-issuer-and-other-options",children:[]},{value:"Retreive a Dynamic Secret Or Public Key",id:"retreive-a-dynamic-secret-or-public-key",children:[{value:"Retreive a Public Key from a JWKS endpoint",id:"retreive-a-public-key-from-a-jwks-endpoint",children:[]}]},{value:"Auth0 and AWS Cognito (examples)",id:"auth0-and-aws-cognito-examples",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install jsonwebtoken @foal/jwt\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.")),(0,o.kt)("p",{parentName:"blockquote"},"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"https://jwt.io/introduction/"))),(0,o.kt)("p",null,"Foal offers a package, named ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/jwt"),", to manage authentication / authorization with JSON Web Tokens. When the user logs in, a token is generated and sent to the client. Then, each subsequent request must include this JWT, allowing the user to access routes, services, and resources that are permitted with that token. "),(0,o.kt)("h1",{id:"generate--provide-a-secret"},"Generate & Provide a Secret"),(0,o.kt)("p",null,"In order to use JWTs, you must provide a secret to ",(0,o.kt)("em",{parentName:"p"},"sign")," your tokens. If you do not already have your own, you can generate one with the ",(0,o.kt)("inlineCode",{parentName:"p"},"foal createsecret")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ foal createsecret\nAk0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8=\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alternatively you can use a public/private key pair to sign your tokens. In this case, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"#Use-RSA-or-ECDSA-public/private-keys"},"advanced section")," below.")),(0,o.kt)("p",null,"Once the secret is in hand, there are several ways to provide it to the future hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"using the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY"),",")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," in the root directory,"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY=Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8=\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"or in a YAML or JSON file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"development.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  jwt:\n    secretOrPublicKey: "Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"development.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secretOrPublicKey": "Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n    }\n  }\n}\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that if the production secret is stored in a file, this file should not be committed.")),(0,o.kt)("h1",{id:"generate--send-temporary-tokens"},"Generate & Send Temporary Tokens"),(0,o.kt)("p",null,"JSON Web Tokens are generated from JavaScript objects that usually contain information about the user."),(0,o.kt)("p",null,"The below example shows how to generate a one-hour token using a secret."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\nimport { sign } from 'jsonwebtoken';\n\nconst token = sign(\n  {\n    sub: '90485234',\n    id: 90485234,\n    email: 'mary@foalts.org'\n  },\n  Config.get<string>('settings.jwt.secretOrPublicKey'),\n  { expiresIn: '1h' }\n);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"subject")," property (or ",(0,o.kt)("inlineCode",{parentName:"li"},"sub"),") is only required when ",(0,o.kt)("a",{parentName:"li",href:"#Make-a-Database-Call-to-Get-More-User-Properties"},"making a database call to get more user properties"),"."),(0,o.kt)("li",{parentName:"ul"},"Each token should have an expiration time. Otherwise, the JWT will be valid indefinitely, which will raise security issues.")),(0,o.kt)("h2",{id:"example-of-a-logincontroller"},"Example of a ",(0,o.kt)("inlineCode",{parentName:"h2"},"LoginController")),(0,o.kt)("p",null,"The below example shows how to implement a login controller with an email and a password."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"login.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Config, Context, HttpResponseOK, HttpResponseUnauthorized,\n  Post, ValidateBody, verifyPassword\n} from '@foal/core';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nexport class LoginController {\n\n  @Post('/login')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const token = sign(\n      { email: user.email },\n      Config.get<string>('settings.jwt.secretOrPublicKey'),\n      { expiresIn: '1h' }\n    );\n\n    return new HttpResponseOK({ token });\n  }\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  async setPassword(password: string) {\n    this.password = await hashPassword(password);\n  }\n\n}\n\n")),(0,o.kt)("h1",{id:"receive--verify-tokens"},"Receive & Verify Tokens"),(0,o.kt)("p",null,"Foal provides two hooks to authenticate users upon subsequent requests: ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTOptional")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTRequired"),". They both expect the client to send the JWT in the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," header using the ",(0,o.kt)("strong",{parentName:"p"},"Bearer")," schema. "),(0,o.kt)("p",null,"In other words, the content of the header should look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer <token>\n")),(0,o.kt)("p",null,"If no token is provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTRequired")," hook returns an error ",(0,o.kt)("em",{parentName:"p"},"400 - BAD REQUEST")," while ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTOptional")," does nothing."),(0,o.kt)("p",null,"If a token is provided and valid, the hooks set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.user")," with the decoded payload (default behavior)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nexport class ApiController {\n\n  @Get('/products')\n  readProducts(ctx: Context) {\n    console.log(ctx.user);\n    return new HttpResponseOK([]);\n  }\n\n}\n")),(0,o.kt)("h1",{id:"advanced"},"Advanced"),(0,o.kt)("h2",{id:"blacklist-tokens"},"Blacklist Tokens"),(0,o.kt)("p",null,"In the event that a jwt has been stolen by an attacker, the application must be able to revoke the compromised token. This can be done by establishing a ",(0,o.kt)("em",{parentName:"p"},"black list"),". Revoked tokens are no longer considered valid and the hooks return a 401 error - UNAUTHORIZED when they receive one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { isInFile } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ blackList: isInFile('./blacklist.txt') })\nexport class ApiController {\n  // ...\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"isInFile")," function takes a token and returns a boolean specifying if the token is revoked or not."),(0,o.kt)("p",null,"You can provide your own function (in the case you want to use a cache database for example). This function must have this signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(token: string) => boolean|Promise<boolean>;\n")),(0,o.kt)("h2",{id:"refresh-the-tokens"},"Refresh the tokens"),(0,o.kt)("p",null,"Having a too-long expiration date for JSON Web Tokens is not recommend as it increases exposure to attacks based on token hijacking. If an attacker succeeds in stealing a token with an insufficient expiration date, he/she will have plenty of time to make other attacks and harm your application."),(0,o.kt)("p",null,"In order to minimize the exposure, it is recommend to set a short expiration date (15 minutes for common applications) to quickly invalidate tokens. In this way, even if a token is stolen, it will quickly become unusable since it will have expired."),(0,o.kt)("p",null,"One of the disadvantages of having short expiration dates, however, is that users get logged out too often which is not very user-friendly."),(0,o.kt)("p",null,"One way to get around this problem is to generate and send a new token on each request. The client then saves this new token and uses it on further requests. In this way, if users are inactive more than 15 minutes, they are disconnected. Otherwise, the user will still be connected but the application will use a different token."),(0,o.kt)("p",null,"The below code shows how to implement this technique with a hook. On each request, the client will receive a new token in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header of the response. Other implementations are still possible (especially if you use cookies)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Note that when a new token is generated, the previous one is still valid until its expiration date."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"refresh-jwt.hook.ts (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Hook, HookDecorator, HttpResponse } from '@foal/core';\nimport { sign } from 'jsonwebtoken';\n\nexport function RefreshJWT(): HookDecorator {\n  return Hook(ctx => {\n    if (!ctx.user) {\n      return;\n    }\n\n    return (response: HttpResponse) => {\n      const newToken = sign(\n        // The below object assumes that ctx.user is\n        // the decoded payload (default behavior).\n        {\n          email: ctx.user.email,\n          // id: ctx.user.id,\n          // sub: ctx.user.subject,\n        },\n        Config.get<string>('settings.jwt.secretOrPublicKey'),\n        { expiresIn: '15m' }\n      );\n      response.setHeader('Authorization', newToken);\n    };\n\n  });\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired()\n@RefreshJWT()\nexport class ApiController {\n  // ...\n}\n")),(0,o.kt)("h2",{id:"make-a-database-call-to-get-more-user-properties"},"Make a Database Call to Get More User Properties"),(0,o.kt)("p",null,"In several cases, the decoded payload is not sufficient. We may need to fetch extra properties from the database, such as the user permissions for example, or simply want the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.user")," to a be a model instance instead of a plain object."),(0,o.kt)("p",null,"In these cases, the two hooks ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTRequired")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTOptional")," offer a ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," option to transform the decoded payload into something else. To do this,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Each JSON Web Token must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," property (or ",(0,o.kt)("inlineCode",{parentName:"p"},"sub"),") which is a string containing the user id. If the id is a number, it must be converted to a string using, for example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"toString()")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\nimport { sign } from 'jsonwebtoken';\n\nconst token = sign(\n  {\n    // TypeScript v3.5.1 and v3.5.2 have a bug which makes the compilation fail\n    // with the property \"sub\". This can be fixed by adding \"as any\" after the object.\n    sub: '90485234', // Required\n    id: 90485234,\n    email: 'mary@foalts.org'\n  },\n  Config.get<string>('settings.jwt.secretOrPublicKey'),\n  { expiresIn: '1h' }\n);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The hook must be provided a function that takes a string id (the ",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),") as parameter and returns the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.user"),". If the function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", the hooks returns an error ",(0,o.kt)("em",{parentName:"p"},"401 - UNAUTHORIZED"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Example with TypeORM")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User } from '../entities';\n\n// fetchUser fetches the user from the database using the entity User. It returns an instance of User.\n@JWTRequired({ user: fetchUser(User) })\nexport class ApiController {\n  @Get('/do-something')\n  get(ctx: Context) {\n    // ctx.user is the instance returned by fetchUser.\n    // ...\n  }\n}\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Example with Mongoose")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUser } from '@foal/mongoose';\n\nimport { User } from '../models';\n\n// fetchUser fetches the user from the database using the model User. It returns an instance of User.\n@JWTRequired({ user: fetchUser(User) })\nexport class ApiController {\n  @Get('/do-something')\n  get(ctx: Context) {\n    // ctx.user is the instance returned by fetchUser.\n    // ...\n  }\n}\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Example with a custom function")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nconst users = [\n  { id: 1, email: 'mary@foalts.org', isAdmin: true },\n  { id: 2, email: 'john@foalts.org', isAdmin: false },\n];\n\nfunction getUserById(id: string) {\n  return users.find(user => user.id.toString() === id);\n}\n\n@JWTRequired({ user: getUserById })\nexport class ApiController {\n  @Get('/do-something')\n  get(ctx: Context) {\n    // ctx.user is an item of the `users` array.\n    // ...\n  }\n}\n")))),(0,o.kt)("h2",{id:"specifying-a-different-encoding-for-secrets"},"Specifying a Different Encoding for Secrets"),(0,o.kt)("p",null,"By default, UTF-8 is used to encode the secret string into bytes when verifying the token. However, you can use another character encoding with the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretEncoding")," configuration key."),(0,o.kt)("p",null,"Available encodings are listed ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings"},"here"),"."),(0,o.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secretOrPublicKey: HEwh0TW7w6a5yUwIrpHilUqetAqTFAVSHx2rg6DWNtg=\n    secretEncoding: base64\n")),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secretOrPublicKey": "HEwh0TW7w6a5yUwIrpHilUqetAqTFAVSHx2rg6DWNtg=",\n      "secretEncoding": "base64",\n    }\n  }\n}\n')),(0,o.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY=HEwh0TW7w6a5yUwIrpHilUqetAqTFAVSHx2rg6DWNtg=\nSETTINGS_JWT_SECRET_ENCODING=base64\n")),(0,o.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,o.kt)("h2",{id:"store-jwts-in-a-cookie"},"Store JWTs in a cookie"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be aware that if you use cookies, your application must provide a ",(0,o.kt)("a",{parentName:"p",href:"/es/docs/1.x/security/csrf-protection"},"CSRF defense"),".")),(0,o.kt)("p",null,"By default, the hooks expect the token to be sent in the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," header using the ",(0,o.kt)("strong",{parentName:"p"},"Bearer")," schema. But it is also possible to send the token in a cookie with the ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ cookie: true })\nexport class ApiController {\n  // ...\n}\n")),(0,o.kt)("p",null,"In this case, the token must be sent in a cookie named ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," by default. This name can be changed with the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.cookieName"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"using the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS_JWT_COOKIE_NAME"),",")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," in the root directory,"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"SETTINGS_JWT_COOKIE_NAME=custom_name\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"or in a YAML or JSON file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"development.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  jwt:\n    cookieName: "custom_name"\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"development.json")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "cookieName": "custom_name"\n    }\n  }\n}\n')))),(0,o.kt)("h2",{id:"use-rsa-or-ecdsa-publicprivate-keys"},"Use RSA or ECDSA public/private keys"),(0,o.kt)("p",null,"JWTs can also be signed using a public/private key pair using RSA or ECDSA."),(0,o.kt)("h3",{id:"provide-the-publicprivate-key"},"Provide the Public/Private Key"),(0,o.kt)("p",null,"The name of the private key is arbitrary."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example with a ",(0,o.kt)("inlineCode",{parentName:"em"},".env")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SETTINGS_JWT_SECRET_OR_PUBLIC_KEY=my_public_key\nJWT_PRIVATE_KEY=my_private_key\n")),(0,o.kt)("h3",{id:"generate-temporary-tokens"},"Generate Temporary Tokens"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\nimport { sign } from 'jsonwebtoken';\n\nconst token = sign(\n  {\n    email: 'john@foalts.org'\n  },\n  Config.get<string>('jwt.privateKey'),\n  { expiresIn: '1h' }\n);\n")),(0,o.kt)("h3",{id:"receive--verify-tokens-1"},"Receive & Verify Tokens"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example with RSA")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({}, { algorithm: 'RSA' })\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("h2",{id:"audience-issuer-and-other-options"},"Audience, Issuer and Other Options"),(0,o.kt)("p",null,"The second parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTOptional")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTRequired")," allows to specify the required audience or issuer as well as other properties. It is passed as options to the ",(0,o.kt)("inlineCode",{parentName:"p"},"verify")," function of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsonwebtoken"},"jsonwebtoken")," library."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example checking the audience")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({}, { audience: [ /urn:f[o]{2}/, 'urn:bar' ] })\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example checking the issuer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({}, { issuer: 'foo' })\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("h2",{id:"retreive-a-dynamic-secret-or-public-key"},"Retreive a Dynamic Secret Or Public Key"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTRequired")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JWTOptional")," use the value of the configuration key ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.jwt.secretOrPublicKey")," as a static secret (or public key)."),(0,o.kt)("p",null,"But it is also possible to dynamically retrieve a key to verify the token. To do so, you can specify a function with the below signature to the ",(0,o.kt)("inlineCode",{parentName:"p"},"secretOrPublicKey")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"(header: any, payload: any) => Promise<string>;\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  secretOrPublicKey: async (header, payload) => {\n    // ...\n    return 'my-secret';\n  }\n})\nexport class ApiController {\n  // ...\n}\n")),(0,o.kt)("p",null,"If needed, this function can throw an ",(0,o.kt)("inlineCode",{parentName:"p"},"InvalidTokenError")," to return a 401 error to the client."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  secretOrPublicKey: async (header, payload) => {\n    if (header.alg !== 'RS256') {\n      throw new InvalidTokenError('invalid algorithm');\n    }\n    return 'my-secret';\n  }\n})\nexport class ApiController {\n  // ...\n}\n")),(0,o.kt)("p",null,"In the above example, if the algorithm specified in the token is not ",(0,o.kt)("inlineCode",{parentName:"p"},"RS256"),", then the server will respond a ",(0,o.kt)("inlineCode",{parentName:"p"},"401 - UNAUTHORIZED")," error with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  code: 'invalid_token',\n  description: 'invalid algorithm'\n}\n")),(0,o.kt)("h3",{id:"retreive-a-public-key-from-a-jwks-endpoint"},"Retreive a Public Key from a JWKS endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/jwks-rsa\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getRSAPublicKeyFromJWKS")," allows you to retreive a public key from a JWKS endpoint. It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jwks-rsa"},(0,o.kt)("inlineCode",{parentName:"a"},"jwks-rsa")," library"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  secretOrPublicKey: getRSAPublicKeyFromJWKS({\n    cache: true,\n    cacheMaxEntries: 5, // Default value\n    cacheMaxAge: ms('10h'), // Default value\n    jwksUri: 'http://localhost:3000/.well-known/jwks.json',\n  })\n})\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("h2",{id:"auth0-and-aws-cognito-examples"},"Auth0 and AWS Cognito (examples)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @foal/jwks-rsa\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Auth0 & AWS Cognito are both platforms to manage authentication & authorization.")),(0,o.kt)("p",null,"This section provides examples on how to decode and verify JWTs generated by these platforms (the ",(0,o.kt)("inlineCode",{parentName:"p"},"id_token"),"). It assumes that you are already familiar with them."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Auth0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n// These lines assume that you provided your DOMAIN and AUDIENCE in either\n// an .env file, in environment variables or in one the configuration file \n// in `config/`.\nconst domain = Config.get('auth0.domain');\nconst audience = Config.get('auth0.audience');\n\n@JWTRequired({\n  secretOrPublicKey: getRSAPublicKeyFromJWKS({\n    cache: true,\n    jwksRequestsPerMinute: 5,\n    jwksUri: `https://${domain}/.well-known/jwks.json`,\n    rateLimit: true,\n  })\n}, {\n  algorithms: [ 'RS256' ],\n  audience,\n  issuer: `https://${domain}/`,\n})\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"AWS Cognito")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n// These lines assume that you provided your CLIENT_ID, DOMAIN and USER_POOL_ID\n// in either an .env file, in environment variables or in one the configuration \n// file in `config/`.\nconst clientId = Config.get('cognito.clientId');\nconst domain = Config.get('cognito.domain');\nconst userPoolId = Config.get('cognito.userPoolId');\n\n@JWTRequired({\n  secretOrPublicKey: getRSAPublicKeyFromJWKS({\n    cache: true,\n    jwksRequestsPerMinute: 5,\n    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,\n    rateLimit: true,\n  })\n}, {\n  algorithms: [ 'RS256' ],\n  audience: clientId,\n  issuer: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,\n})\nexport class ApiController {\n  // ...\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Note: The above example does not use a secret for simplicity."))),(0,o.kt)("h1",{id:"hook-errors"},"Hook Errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error"),(0,o.kt)("th",{parentName:"tr",align:null},"Response Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Response Body"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"WWW-Authenticate")," Response Header"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No secret or public key is provided in ",(0,o.kt)("inlineCode",{parentName:"td"},"default.json")," or as environment variable."),(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"Authorization")," header does not exist (only for ",(0,o.kt)("inlineCode",{parentName:"td"},"JWTRequired"),")."),(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_request', description: 'Authorization header not found.' }")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The auth cookie does not exist (only for ",(0,o.kt)("inlineCode",{parentName:"td"},"JWTRequired"),")."),(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_request', description: 'Auth cookie not found.' }")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"Authorization")," header does use the Bearer scheme."),(0,o.kt)("td",{parentName:"tr",align:null},"400"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_request', description: 'Expected a bearer token. Scheme is Authorization: Bearer <token>.' }")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The token is black listed."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt revoked' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt revoked"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The token is not a JWT."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt malformed' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt malformed"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The signature is invalid."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt signature' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt signature"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The token is expired."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt expired' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt expired"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The audience is not expected."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt audience invalid. expected: xxx' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt audience invalid. expected: xxx"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The issuer is not expected."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'jwt issuer invalid. expected: xxx' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="jwt issuer invalid. expected: xxx"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"There is no subject claim and ",(0,o.kt)("inlineCode",{parentName:"td"},"options.user")," is defined."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'The token must include a subject which is the id of the user.' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="The token must include a subject which is the id of the user."')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"options.user")," is defined and no user was found from its value (function)."),(0,o.kt)("td",{parentName:"tr",align:null},"401"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ code: 'invalid_token', description: 'The token subject does not match any user.' }")),(0,o.kt)("td",{parentName:"tr",align:null},'error="invalid_token", error_description="The token subject does not match any user."')))))}u.isMDXComponent=!0}}]);