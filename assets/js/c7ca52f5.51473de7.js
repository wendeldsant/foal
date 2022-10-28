"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Social Authentication",sidebar_label:"Social Auth"},o=void 0,l={unversionedId:"authentication-and-access-control/social-auth",id:"version-1.x/authentication-and-access-control/social-auth",title:"Social Authentication",description:"Social authentication is available in Foal v1.3.0 onwards.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/social-auth.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/social-auth",permalink:"/docs/1.x/authentication-and-access-control/social-auth",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/social-auth.md",tags:[],version:"1.x",frontMatter:{title:"Social Authentication",sidebar_label:"Social Auth"},sidebar:"someSidebar",previous:{title:"JSON Web Tokens (authentication)",permalink:"/docs/1.x/authentication-and-access-control/jwt"},next:{title:"Administrators & Roles",permalink:"/docs/1.x/authentication-and-access-control/administrators-and-roles"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Social Providers",id:"social-providers",level:2},{value:"Google",id:"google",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application",level:4},{value:"Redirection parameters",id:"redirection-parameters",level:4},{value:"Facebook",id:"facebook",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-1",level:4},{value:"Redirection parameters",id:"redirection-parameters-1",level:4},{value:"User info parameters",id:"user-info-parameters",level:4},{value:"Github",id:"github",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-2",level:4},{value:"Redirection parameters",id:"redirection-parameters-2",level:4},{value:"LinkedIn",id:"linkedin",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-3",level:4},{value:"User info parameters",id:"user-info-parameters-1",level:4},{value:"Sign In and Sign Up Example",id:"sign-in-and-sign-up-example",level:2},{value:"Custom Provider",id:"custom-provider",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Social authentication is available in Foal v1.3.0 onwards.")),(0,r.kt)("p",null,"FoalTS social authentication is based on OAuth2 protocol. To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website."),(0,r.kt)("p",null,"Usually your are required to provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("em",{parentName:"li"},"application name"),","),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"logo"),","),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("em",{parentName:"li"},"redirect URIs")," where the social provider should redirect the users after successful authentication (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3001/signin/google/callback"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https://example.com/signin/facebook/callback"),")")),(0,r.kt)("p",null,"Once done, you should receive:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"client ID")," that is public and identifies your application,"),(0,r.kt)("li",{parentName:"ul"},"and a ",(0,r.kt)("em",{parentName:"li"},"client secret")," that must not be revealed and can therefore only be used on the backend side.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You must obtain a ",(0,r.kt)("em",{parentName:"p"},"client secret"),". If you do not have one, it means you probably chose the wrong option at some point.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"First install the appropriate package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/social\n")),(0,r.kt)("p",null,"Then, you will need to provide your client ID, client secret and your redirect URIs to Foal. This can be done through the usual ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/deployment-and-environments/configuration"},"configuration files"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"default.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    google:\n      clientId: xxx\n      redirectUri: 'http://localhost:3001/signin/google/callback'\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"production.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    cookie:\n      secure: true # In production, your website should use HTTPS.\n    google:\n      redirectUri: 'https://example.com/signin/google/callback' # Your redirect URI in production\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET=yyy\n")),(0,r.kt)("h2",{id:"social-providers"},"Social Providers"),(0,r.kt)("p",null,"Authentication is managed by ",(0,r.kt)("em",{parentName:"p"},"social providers"),". These are services whose methods can be called within a controller to build a social login."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  setSessionCookie,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    // Your \"Login In with Google\" button should point to this route.\n    // The user will be redirected to Google auth page.\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    // Once the user gives their permission to login with Google, the provider\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.google.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),(0,r.kt)("p",null,"You can also override the scopes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return this.google.redirect({ scopes: [ 'email' ] });\n")),(0,r.kt)("p",null,"Additional parameters can passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," methods depending on the provider."),(0,r.kt)("h3",{id:"google"},"Google"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/googlescopes"},"Google scopes"))))),(0,r.kt)("h4",{id:"register-an-oauth-application"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"Google API Console")," to obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"redirection-parameters"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleProvider")," accepts additional parameters. These parameters and their description are listed ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters"},"here")," and are all optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.google.redirect({ /* ... */ }, {\n  access_type: 'offline'\n})\n")),(0,r.kt)("h3",{id:"facebook"},"Facebook"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FacebookProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.facebook.com/docs/facebook-login/permissions/"},"Facebook permissions"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-1"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook's developper website")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"redirection-parameters-1"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accepts an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_type")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.facebook.redirect({ /* ... */ }, {\n  auth_type: 'rerequest'\n});\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'rerequest'")),(0,r.kt)("td",{parentName:"tr",align:null},"If a user has already declined a permission, the Facebook Login Dialog box will no longer ask for this permission. The ",(0,r.kt)("inlineCode",{parentName:"td"},"auth_type")," parameter explicity tells Facebook to ask the user again for the denied permission.")))),(0,r.kt)("h4",{id:"user-info-parameters"},"User info parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accept an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.facebook.getUserInfo(ctx, {\n  fields: [ 'email' ]\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. These fields may or may not be available depending on the permissions (",(0,r.kt)("inlineCode",{parentName:"td"},"scopes"),") that were requested with the ",(0,r.kt)("inlineCode",{parentName:"td"},"redirect")," method. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"['id', 'name', 'email']."))))),(0,r.kt)("h3",{id:"github"},"Github"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Github provider is available in Foal v1.4.0 onwards.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GithubProvider")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes"},"Github scopes"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-2"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("p",null,"Additional documentation on Github's redirect URLs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#redirect-urls"},"here"),"."),(0,r.kt)("h4",{id:"redirection-parameters-2"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubProvider")," accepts additional parameters. These parameters and their description are listed below and are all optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.github.redirect({ /* ... */ }, {\n  allow_signup: false\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"login")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Suggests a specific account to use for signing in and authorizing the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow_signup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Use ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," in the case that a policy prohibits signups.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters"},"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters")))),(0,r.kt)("h3",{id:"linkedin"},"LinkedIn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LinkedIn provider is available in Foal v1.4.0 onwards.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LinkedInProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"r_liteprofile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api"},"API documentation"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-3"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"user-info-parameters-1"},"User info parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedInProvider")," accept an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.linkedin.getUserInfo(ctx, {\n  fields: [ 'id', 'firstName' ]\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. Additional documentation on ",(0,r.kt)("a",{parentName:"td",href:"https://developer.linkedin.com/docs/guide/v2/concepts/projections"},"field projections"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"LinkedIn projection parameter.")))),(0,r.kt)("h2",{id:"sign-in-and-sign-up-example"},"Sign In and Sign Up Example"),(0,r.kt)("p",null,"This example shows how to implement a sign in and sign up flow with sessions and a TypeORM ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  setSessionCookie,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { getRepository } from 'typeorm';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  store: TypeORMStore;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    const { userInfo } = await this.google.getUserInfo(ctx);\n\n    let user = await getRepository(User).findOne({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await getRepository(User).save(user);\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseRedirect('/');\n    setSessionCookie(response, session.getToken());\n    return response;\n  }\n\n}\n")),(0,r.kt)("h2",{id:"custom-provider"},"Custom Provider"),(0,r.kt)("p",null,"If necessary, you can also implement your own provider. This one must inherit the abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractProvider"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { AbstractProvider, SocialTokens } from '@foal/core';\n\nexport interface GithubAuthParameter {\n  // ...\n}\n\nexport interface GithubUserInfoParameter {\n  // ...\n}\n\nexport class GithubProvider extends AbstractProvider<GithubAuthParameter, GithubUserInfoParameter> {\n\n  protected configPaths = {\n    clientId: 'social.github.clientId',\n    clientSecret: 'social.github.clientSecret',\n    redirectUri: 'social.github.redirectUri',\n  };\n\n  protected authEndpoint = '...';\n  protected tokenEndpoint = '...';\n  protected userInfoEndpoint = '...'; // Optional. Depending on the provider.\n\n  protected defaultScopes: string[] = [ 'email' ]; // Optional\n\n  async getUserInfoFromTokens(tokens: SocialTokens, params?: GithubUserInfoParameter) {\n    // ...\n  }\n\n} \n")))}c.isMDXComponent=!0}}]);