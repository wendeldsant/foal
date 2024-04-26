"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6244],{68488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453),s=t(11470),o=t(19365);const a={title:"Social Authentication",sidebar_label:"Social Auth"},l=void 0,c={id:"authentication/social-auth",title:"Social Authentication",description:"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/authentication/social-auth.md",sourceDirName:"authentication",slug:"/authentication/social-auth",permalink:"/id/docs/3.x/authentication/social-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/authentication/social-auth.md",tags:[],version:"3.x",frontMatter:{title:"Social Authentication",sidebar_label:"Social Auth"},sidebar:"someSidebar",previous:{title:"JSON Web Tokens",permalink:"/id/docs/3.x/authentication/jwt"},next:{title:"Administrators & Roles",permalink:"/id/docs/3.x/authorization/administrators-and-roles"}},d={},h=[{value:"Get Started",id:"get-started",level:2},{value:"General overview",id:"general-overview",level:3},{value:"Registering an application",id:"registering-an-application",level:3},{value:"Installation and configuration",id:"installation-and-configuration",level:3},{value:"Adding controllers",id:"adding-controllers",level:3},{value:"Techniques",id:"techniques",level:2},{value:"Usage with sessions",id:"usage-with-sessions",level:3},{value:"Usage with JWT",id:"usage-with-jwt",level:3},{value:"Custom Provider",id:"custom-provider",level:2},{value:"Sending the Client Credentials in an Authorization Header",id:"sending-the-client-credentials-in-an-authorization-header",level:3},{value:"Enabling Code Flow with PKCE",id:"enabling-code-flow-with-pkce",level:3},{value:"Official Providers",id:"official-providers",level:2},{value:"Google",id:"google",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application",level:4},{value:"Redirection parameters",id:"redirection-parameters",level:4},{value:"Facebook",id:"facebook",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-1",level:4},{value:"Redirection parameters",id:"redirection-parameters-1",level:4},{value:"User info parameters",id:"user-info-parameters",level:4},{value:"Github",id:"github",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-2",level:4},{value:"Redirection parameters",id:"redirection-parameters-2",level:4},{value:"LinkedIn",id:"linkedin",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-3",level:4},{value:"User info parameters",id:"user-info-parameters-1",level:4},{value:"Twitter",id:"twitter",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-4",level:4},{value:"Community Providers",id:"community-providers",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"Security",id:"security",level:2},{value:"HTTPS",id:"https",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Google"}),"\n",(0,i.jsx)(n.li,{children:"Facebook"}),"\n",(0,i.jsx)(n.li,{children:"Github"}),"\n",(0,i.jsx)(n.li,{children:"Linkedin"}),"\n",(0,i.jsx)(n.li,{children:"Twitter"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If your provider is not listed here but supports OAuth 2.0, then you can still ",(0,i.jsxs)(n.a,{href:"#custom-provider",children:["extend the ",(0,i.jsx)(n.code,{children:"AbstractProvider"})]})," class to integrate it or use a ",(0,i.jsx)(n.a,{href:"#community-providers",children:"community provider"})," below."]}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,i.jsx)(n.h3,{id:"general-overview",children:"General overview"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Social auth schema",src:t(29281).A+"",width:"3872",height:"2608"})}),"\n",(0,i.jsx)(n.p,{children:"The authentication process works as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The user clicks the ",(0,i.jsx)(n.em,{children:"Log In with xxx"})," button in the browser and the client sends a request to the server."]}),"\n",(0,i.jsx)(n.li,{children:"The server redirects the user to the consent page where they are asked to give permission to log in with their account and/or give access to some of their personal information."}),"\n",(0,i.jsxs)(n.li,{children:["The user approves and the consent page redirects the user with an authorization code to the ",(0,i.jsx)(n.em,{children:"redirect"})," URI specified in the configuration."]}),"\n",(0,i.jsx)(n.li,{children:"Your application then makes one or more requests to the OAuth servers to obtain an access token and information about the user."}),"\n",(0,i.jsx)(n.li,{children:"The social provider servers return this information."}),"\n",(0,i.jsx)(n.li,{children:"Finally, your server-side application logs the user in based on this information and redirects the user when done."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This explanation of OAuth 2 is intentionally simplified. It highlights only the parts of the protocol that are necessary to successfully implement social authentication with Foal. But the framework also performs other tasks under the hood to fully comply with the OAuth 2.0 protocol and it adds security protection against CSRF attacks."})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"registering-an-application",children:"Registering an application"}),"\n",(0,i.jsx)(n.p,{children:"To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website."}),"\n",(0,i.jsx)(n.p,{children:"Usually your are required to provide:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["an ",(0,i.jsx)(n.em,{children:"application name"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.em,{children:"logo"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["and ",(0,i.jsx)(n.em,{children:"redirect URIs"})," where the social provider should redirect the users once they give their consent on the provider page (ex: ",(0,i.jsx)(n.code,{children:"http://localhost:3001/signin/google/callback"}),", ",(0,i.jsx)(n.code,{children:"https://example.com/signin/google/callback"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once done, you should receive:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.em,{children:"client ID"})," that is public and identifies your application,"]}),"\n",(0,i.jsxs)(n.li,{children:["and a ",(0,i.jsx)(n.em,{children:"client secret"})," that must not be revealed and can therefore only be used on the backend side. It is used when your server communicates with the OAuth provider's servers."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You must obtain a ",(0,i.jsx)(n.em,{children:"client secret"}),". If you do not have one, it means you probably chose the wrong option at some point."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installation-and-configuration",children:"Installation and configuration"}),"\n",(0,i.jsx)(n.p,{children:"Once you have registered your application, install the appropriate package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @foal/social\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, you will need to provide your client ID, client secret and your redirect URIs to Foal. This can be done through the usual ",(0,i.jsx)(n.a,{href:"/id/docs/3.x/architecture/configuration",children:"configuration files"}),"."]}),"\n",(0,i.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,i.jsx)(o.A,{value:"yaml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"settings:\n  social:\n    google:\n      clientId: 'xxx'\n      clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)'\n      redirectUri: 'http://localhost:3001/signin/google/callback'\n"})})}),(0,i.jsx)(o.A,{value:"json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "social": {\n      "google": {\n        "clientId": "xxx",\n        "clientSecret": "env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/signin/google/callback"\n      }\n    }\n  }\n}\n'})})}),(0,i.jsx)(o.A,{value:"js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    social: {\n      google: {\n        clientId: 'xxx',\n        clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)',\n        redirectUri: 'http://localhost:3001/signin/google/callback'\n      }\n    }\n  }\n}\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:".env"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET=yyy\n"})}),"\n",(0,i.jsx)(n.h3,{id:"adding-controllers",children:"Adding controllers"}),"\n",(0,i.jsxs)(n.p,{children:["The last step is to add a controller that will call methods of a ",(0,i.jsx)(n.em,{children:"social service"})," to handle authentication. The example below uses Google as provider."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    // Your \"Login In with Google\" button should point to this route.\n    // The user will be redirected to Google auth page.\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Google, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.google.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also override in the ",(0,i.jsx)(n.code,{children:"redirect"})," method the scopes you want:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"return this.google.redirect({ scopes: [ 'email' ] });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Additional parameters can passed to the ",(0,i.jsx)(n.code,{children:"redirect"})," and ",(0,i.jsx)(n.code,{children:"getUserInfo"})," methods depending on the provider."]}),"\n",(0,i.jsx)(n.h2,{id:"techniques",children:"Techniques"}),"\n",(0,i.jsx)(n.h3,{id:"usage-with-sessions",children:"Usage with sessions"}),"\n",(0,i.jsx)(n.p,{children:"This example shows how to manage authentication (login and registration) with sessions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"auth.controller.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  Store,\n  UseSessions,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  store: Store;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  @UseSessions({\n    cookie: true,\n  })\n  async handleGoogleRedirection(ctx: Context<User>) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOneBy({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    ctx.session!.setUser(user);\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage-with-jwt",children:"Usage with JWT"}),"\n",(0,i.jsx)(n.p,{children:"This example shows how to manage authentication (login and registration) with JWT."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"auth.controller.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// std\nimport { promisify } from 'util';\n\n// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOneBy({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    const jwt = await promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n\n    const response = new HttpResponseRedirect('/');\n    await setAuthCookie(response, jwt);\n    return response;\n  }\n\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-provider",children:"Custom Provider"}),"\n",(0,i.jsxs)(n.p,{children:["If your provider is not officially supported by Foal but supports the OAuth 2.0 protocol, you can still implement your own social service. All you need to do is to make it inherit from the ",(0,i.jsx)(n.code,{children:"AbstractProvider"})," class."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// 3p\nimport { AbstractProvider, SocialTokens } from '@foal/core';\n\nexport interface GithubAuthParameter {\n  // ...\n}\n\nexport interface GithubUserInfoParameter {\n  // ...\n}\n\nexport class GithubProvider extends AbstractProvider<GithubAuthParameter, GithubUserInfoParameter> {\n\n  protected configPaths = {\n    clientId: 'social.github.clientId',\n    clientSecret: 'social.github.clientSecret',\n    redirectUri: 'social.github.redirectUri',\n  };\n\n  protected authEndpoint = '...';\n  protected tokenEndpoint = '...';\n  protected userInfoEndpoint = '...'; // Optional. Depending on the provider.\n\n  protected defaultScopes: string[] = [ 'email' ]; // Optional\n\n  async getUserInfoFromTokens(tokens: SocialTokens, params?: GithubUserInfoParameter) {\n    // ...\n\n    // In case the server returns an error when requesting \n    // user information, you can throw a UserInfoError.\n  }\n\n} \n"})}),"\n",(0,i.jsx)(n.h3,{id:"sending-the-client-credentials-in-an-authorization-header",children:"Sending the Client Credentials in an Authorization Header"}),"\n",(0,i.jsxs)(n.p,{children:["When requesting the token endpoint, the provider sends the client ID and secret as a query parameter by default. If you want to send them in an ",(0,i.jsx)(n.code,{children:"Authorization"})," header using the ",(0,i.jsx)(n.em,{children:"basic"})," scheme, you can do so by setting the ",(0,i.jsx)(n.code,{children:"useAuthorizationHeaderForTokenEndpoint"})," property to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"enabling-code-flow-with-pkce",children:"Enabling Code Flow with PKCE"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to enable code flow with PKCE, you can do so by setting the ",(0,i.jsx)(n.code,{children:"usePKCE"})," property to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, the provider will perform a SHA256 hash to generate the code challenge. If you wish to use the plaintext code verifier string as code challenge, you can do so by setting the ",(0,i.jsx)(n.code,{children:"useCodeVerifierAsCodeChallenge"})," property to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When using this feature, the provider encrypts the code verifier and stores it in a cookie on the client. In order to do this, you need to provide a secret using the configuration key ",(0,i.jsx)(n.code,{children:"settings.social.secret.codeVerifierSecret"}),"."]}),"\n",(0,i.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,i.jsx)(o.A,{value:"yaml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"settings:\n  social:\n    secret:\n      codeVerifierSecret: 'xxx'\n"})})}),(0,i.jsx)(o.A,{value:"json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "social": {\n      "secret": {\n        "codeVerifierSecret": "xxx"\n      }\n    }\n  }\n}\n'})})}),(0,i.jsx)(o.A,{value:"js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    social: {\n      secret: {\n        codeVerifierSecret: 'xxx'\n      }\n    }\n  }\n}\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"official-providers",children:"Official Providers"}),"\n",(0,i.jsx)(n.h3,{id:"google",children:"Google"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Service name"}),(0,i.jsx)(n.th,{children:"Default scopes"}),(0,i.jsx)(n.th,{children:"Available scopes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GoogleProvider"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"openid"}),", ",(0,i.jsx)(n.code,{children:"profile"}),", ",(0,i.jsx)(n.code,{children:"email"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/googlescopes",children:"Google scopes"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"register-an-oauth-application",children:"Register an OAuth application"}),"\n",(0,i.jsxs)(n.p,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"Google API Console"})," to obtain a client ID and a client secret."]}),"\n",(0,i.jsx)(n.h4,{id:"redirection-parameters",children:"Redirection parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"redirect"})," method of the ",(0,i.jsx)(n.code,{children:"GoogleProvider"})," accepts additional parameters. These parameters and their description are listed ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters",children:"here"})," and are all optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"this.google.redirect({ /* ... */ }, {\n  access_type: 'offline'\n})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"facebook",children:"Facebook"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Service name"}),(0,i.jsx)(n.th,{children:"Default scopes"}),(0,i.jsx)(n.th,{children:"Available scopes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FacebookProvider"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"email"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/permissions/",children:"Facebook permissions"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"register-an-oauth-application-1",children:"Register an OAuth application"}),"\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/",children:"Facebook's developer website"})," to create an application and obtain a client ID and a client secret."]}),"\n",(0,i.jsx)(n.h4,{id:"redirection-parameters-1",children:"Redirection parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"redirect"})," method of the ",(0,i.jsx)(n.code,{children:"FacebookProvider"})," accepts an additional ",(0,i.jsx)(n.code,{children:"auth_type"})," parameter which is optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"this.facebook.redirect({ /* ... */ }, {\n  auth_type: 'rerequest'\n});\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"auth_type"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'rerequest'"})}),(0,i.jsxs)(n.td,{children:["If a user has already declined a permission, the Facebook Login Dialog box will no longer ask for this permission. The ",(0,i.jsx)(n.code,{children:"auth_type"})," parameter explicity tells Facebook to ask the user again for the denied permission."]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"user-info-parameters",children:"User info parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"getUserInfo"})," and ",(0,i.jsx)(n.code,{children:"getUserInfoFromTokens"})," methods of the ",(0,i.jsx)(n.code,{children:"FacebookProvider"})," accept an additional ",(0,i.jsx)(n.code,{children:"fields"})," parameter which is optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const { userInfo } = await this.facebook.getUserInfo(ctx, {\n  fields: [ 'email' ]\n})\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fields"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string[]"})}),(0,i.jsxs)(n.td,{children:["List of fields that the returned user info object should contain. These fields may or may not be available depending on the permissions (",(0,i.jsx)(n.code,{children:"scopes"}),") that were requested with the ",(0,i.jsx)(n.code,{children:"redirect"})," method. Default: ",(0,i.jsx)(n.code,{children:"['id', 'name', 'email']"}),"."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"github",children:"Github"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Service name"}),(0,i.jsx)(n.th,{children:"Default scopes"}),(0,i.jsx)(n.th,{children:"Available scopes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GithubProvider"})}),(0,i.jsx)(n.td,{children:"none"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes",children:"Github scopes"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"register-an-oauth-application-2",children:"Register an OAuth application"}),"\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://github.com/settings/applications/new",children:"this page"})," to create an application and obtain a client ID and a client secret."]}),"\n",(0,i.jsxs)(n.p,{children:["Additional documentation on Github's redirect URLs can be found ",(0,i.jsx)(n.a,{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#redirect-urls",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"redirection-parameters-2",children:"Redirection parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"redirect"})," method of the ",(0,i.jsx)(n.code,{children:"GithubProvider"})," accepts additional parameters. These parameters and their description are listed below and are all optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"this.github.redirect({ /* ... */ }, {\n  allow_signup: false\n})\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"login"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Suggests a specific account to use for signing in and authorizing the app."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"allow_signup"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsxs)(n.td,{children:["Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is ",(0,i.jsx)(n.code,{children:"true"}),". Use ",(0,i.jsx)(n.code,{children:"false"})," in the case that a policy prohibits signups."]})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Source: ",(0,i.jsx)(n.a,{href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters",children:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters"})]})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"linkedin",children:"LinkedIn"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Service name"}),(0,i.jsx)(n.th,{children:"Default scopes"}),(0,i.jsx)(n.th,{children:"Available scopes\xa0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"LinkedInProvider"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"r_liteprofile"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api",children:"API documentation"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"register-an-oauth-application-3",children:"Register an OAuth application"}),"\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/developers/apps/new",children:"this page"})," to create an application and obtain a client ID and a client secret."]}),"\n",(0,i.jsx)(n.h4,{id:"user-info-parameters-1",children:"User info parameters"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"getUserInfo"})," and ",(0,i.jsx)(n.code,{children:"getUserInfoFromTokens"})," methods of the ",(0,i.jsx)(n.code,{children:"LinkedInProvider"})," accept an additional ",(0,i.jsx)(n.code,{children:"projection"})," parameter which is optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const { userInfo } = await this.linkedin.getUserInfo(ctx, {\n  fields: [ 'id', 'firstName' ]\n})\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fields"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string[]"})}),(0,i.jsxs)(n.td,{children:["List of fields that the returned user info object should contain. Additional documentation on ",(0,i.jsx)(n.a,{href:"https://developer.linkedin.com/docs/guide/v2/concepts/projections",children:"field projections"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"projection"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"LinkedIn projection parameter."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"twitter",children:"Twitter"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Service name"}),(0,i.jsx)(n.th,{children:"Default scopes"}),(0,i.jsx)(n.th,{children:"Available scopes\xa0"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TwitterProvider"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"users.read tweet.read"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me",children:"API documentation"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"register-an-oauth-application-4",children:"Register an OAuth application"}),"\n",(0,i.jsxs)(n.p,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://developer.twitter.com/en/portal/dashboard",children:"this page"})," to create an application and obtain a client ID and a client secret. You must configure Oauth2 settings to be used with public client;"]}),"\n",(0,i.jsx)(n.h2,{id:"community-providers",children:"Community Providers"}),"\n",(0,i.jsxs)(n.p,{children:["There are no community providers available yet! If you want to share one, feel free to ",(0,i.jsx)(n.a,{href:"https://github.com/FoalTS/foal",children:"open a PR"})," on Github."]}),"\n",(0,i.jsx)(n.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Error"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"InvalidStateError"})}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"state"})," query does not match the value found in the cookie."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CodeVerifierNotFound"})}),(0,i.jsx)(n.td,{children:"The encrypted code verifier was not found in the cookie (only when using PKCE)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AuthorizationError"})}),(0,i.jsx)(n.td,{children:"The authorization server returns an error. This can happen when a user does not give consent on the provider page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"UserInfoError"})}),(0,i.jsxs)(n.td,{children:["Thrown in ",(0,i.jsx)(n.code,{children:"AbstractProvider.getUserFromTokens"})," if the request to the resource server is unsuccessful."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,i.jsx)(n.h3,{id:"https",children:"HTTPS"}),"\n",(0,i.jsx)(n.p,{children:"When deploying the application, you application must use HTTPS."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"production.yml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"settings:\n  social:\n    cookie:\n      # Only pass the state cookie if the request is transmitted over a secure channel (HTTPS).\n      secure: true\n    google:\n      # Your redirect URI in production\n      redirectUri: 'https://example.com/signin/google/callback'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),r=t(34164),s=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=x({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==i&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},29281:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/social-auth-overview-6bc9023be73ed5c7e9514909afc68f7e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);