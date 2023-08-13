"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),s=n(86010);const a="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),s=n(67294),a=n(86010),r=n(72389),i=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:r,block:d,defaultValue:m,values:k,groupId:h,className:f}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:b}=(0,l.U)(),[x,S]=(0,s.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&S(e)}const R=e=>{const t=e.currentTarget,n=C.indexOf(t),o=g[n].value;o!==x&&(T(t),S(o),null!=h&&b(h,String(o)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=C.indexOf(e.currentTarget)+1;n=null!=(o=C[t])?o:C[0];break}case"ArrowLeft":{var s;const t=C.indexOf(e.currentTarget)-1;n=null!=(s=C[t])?s:C[C.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},f)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:R,onClick:R},r,{className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,s.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,r.Z)();return s.createElement(d,(0,o.Z)({key:String(t)},e))}},20837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(87462),s=(n(67294),n(3905)),a=n(65488),r=n(85162);const i={title:"Session Tokens & CSRF Protection"},l=void 0,p={unversionedId:"upgrade-to-v2/session-tokens",id:"version-2.x/upgrade-to-v2/session-tokens",title:"Session Tokens & CSRF Protection",description:"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/upgrade-to-v2/session-tokens.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/session-tokens",permalink:"/fr/docs/2.x/upgrade-to-v2/session-tokens",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/upgrade-to-v2/session-tokens.md",tags:[],version:"2.x",frontMatter:{title:"Session Tokens & CSRF Protection"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Session Tokens",id:"session-tokens",level:2},{value:"Choosing and Configuring the Session Store",id:"choosing-and-configuring-the-session-store",level:3},{value:"Specify the Store in The Configuration",id:"specify-the-store-in-the-configuration",level:4},{value:"TypeORM Store",id:"typeorm-store",level:4},{value:"Redis Store",id:"redis-store",level:4},{value:"MongoDB Store",id:"mongodb-store",level:4},{value:"Custom Store",id:"custom-store",level:4},{value:"New Login",id:"new-login",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header",level:4},{value:"Example with cookies",id:"example-with-cookies",level:4},{value:"New Logout",id:"new-logout",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-1",level:4},{value:"Example with cookies",id:"example-with-cookies-1",level:4},{value:"Access Control",id:"access-control",level:3},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header-2",level:4},{value:"Example with cookies",id:"example-with-cookies-2",level:4},{value:"Send the CSRF token in a template",id:"send-the-csrf-token-in-a-template",level:3},{value:"Read or create a session",id:"read-or-create-a-session",level:3},{value:"Revoking sessions",id:"revoking-sessions",level:3},{value:"Breaking Changes that Should not Affect You",id:"breaking-changes-that-should-not-affect-you",level:3},{value:"CSRF Protection",id:"csrf-protection",level:2},{value:"New Features",id:"new-features",level:2},{value:"Session Tokens",id:"session-tokens-1",level:3},{value:"Query all sessions of a user (TypeORM only)",id:"query-all-sessions-of-a-user-typeorm-only",level:4},{value:"Query all connected users (TypeORM only)",id:"query-all-connected-users-typeorm-only",level:4},{value:"Force the disconnection of a user (TypeORM only)",id:"force-the-disconnection-of-a-user-typeorm-only",level:4},{value:"Flash sessions",id:"flash-sessions",level:4},{value:"Regenerate the session ID",id:"regenerate-the-session-id",level:4},{value:"Expired sessions clean up regularly (TypeORM and MongoDB)",id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb",level:4},{value:"Anonymous sessions and templates",id:"anonymous-sessions-and-templates",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The main feature of FoalTS version 2 is the new session management. The new authentication system is intended to be more intuitive and to require less code and configuration. It also offers new functionalities."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note that when upgrading to version 2, all your users will be automatically logged out.")),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Previously, we had to manage a lot of functions and hooks to authenticate users in FoalTS: ",(0,s.kt)("inlineCode",{parentName:"p"},"@TokenRequired"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"@TokenOptional"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"removeSessionCookie"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"setSessionCookie"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"getCsrfToken"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"@CsrfTokenRequired"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"setCsrfCookie"),"."),(0,s.kt)("p",null,"Starting with version 2, they have all been removed and replaced with two unique hooks: ",(0,s.kt)("inlineCode",{parentName:"p"},"@UseSessions")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"@UserRequired"),"."),(0,s.kt)("p",null,"There is also no need for a session secret anymore. The config parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.session.secret")," can therefore be removed."),(0,s.kt)("h2",{id:"session-tokens"},"Session Tokens"),(0,s.kt)("h3",{id:"choosing-and-configuring-the-session-store"},"Choosing and Configuring the Session Store"),(0,s.kt)("h4",{id:"specify-the-store-in-the-configuration"},"Specify the Store in The Configuration"),(0,s.kt)("p",null,"Since v1.11.0, FoalTS allows you to globally specify in the configuration which session store to use. This is now the recommended approach and it is assumed that you use it in all examples in the documentation."),(0,s.kt)("p",null,"To specify the store globally, replace all references to ",(0,s.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," (or redis, mongo, etc) with ",(0,s.kt)("inlineCode",{parentName:"p"},"Store")," and remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"store: TypeORMStore")," option from your hooks."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Store } from '@foal/core';\n\nclass AppController {\n  // Before\n  @dependency\n  store: TypeORMStore;\n\n  // After\n  @dependency\n  store: Store;\n\n\n  @Get('/products')\n  // Before\n  @TokenRequired({ store: TypeStore })\n  // After\n  @TokenRequired()\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,s.kt)("p",null,"Then, in the configuration, specify the package name of your session store (",(0,s.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"@foal/redis"),", etc)."),(0,s.kt)(a.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"yaml",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n'))),(0,s.kt)(r.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n    }\n  }\n}\n'))),(0,s.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm",\n    }\n  }\n}\n')))),(0,s.kt)("h4",{id:"typeorm-store"},"TypeORM Store"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Warning:")," Starting from version 2, ",(0,s.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," only support numbers (not strings) as user IDs."),(0,s.kt)("p",null,"In version 1, when launching the application, Foal was making a request to the database to create the session table if it does not exist."),(0,s.kt)("p",null,"This had two drawbacks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This may make too many undesirable requests to the database in a severless environment."),(0,s.kt)("li",{parentName:"ul"},"The database schema is updated at runtime outside the classical migration process. This practice can be dangerous and it does not allow to keep a traceability of the modifications of the database schema unlike migrations (revert, etc).")),(0,s.kt)("p",null,"Starting from version 2, ",(0,s.kt)("strong",{parentName:"p"},"you must generate and run migrations yourself")," to create the session table."),(0,s.kt)("p",null,"The easier way to achieve this is probably to export the ",(0,s.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," entity from ",(0,s.kt)("inlineCode",{parentName:"p"},"@foal/typeorm")," and to run the following commands."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"user.entity.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\n@Entity()\nexport class User extends BaseEntity {\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to ",(0,s.kt)("em",{parentName:"p"},"manually")," delete the old ",(0,s.kt)("inlineCode",{parentName:"p"},"foal_session")," table. The new table used by the framework is named ",(0,s.kt)("inlineCode",{parentName:"p"},"database_session"),".")),(0,s.kt)("h4",{id:"redis-store"},"Redis Store"),(0,s.kt)("p",null,"The configuration key ",(0,s.kt)("inlineCode",{parentName:"p"},"redis.uri")," has been renamed to ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.redis.uri"),"."),(0,s.kt)("p",null,"See also ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Note: In the Redis database, session keys now start with ",(0,s.kt)("inlineCode",{parentName:"em"},"sessions:")," instead of ",(0,s.kt)("inlineCode",{parentName:"em"},"session:")),".")),(0,s.kt)("h4",{id:"mongodb-store"},"MongoDB Store"),(0,s.kt)("p",null,"The configuration key ",(0,s.kt)("inlineCode",{parentName:"p"},"mongodb.uri")," has been renamed to ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.mongodb.uri"),"."),(0,s.kt)("p",null,"See also ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/upgrade-to-v2/config-system#environment-variables"},"this"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Once you application is migrated to version 2 and works as expected, you will be able to manually delete the old ",(0,s.kt)("inlineCode",{parentName:"p"},"foalSessions")," collection. The new collection used by the framework is named ",(0,s.kt)("inlineCode",{parentName:"p"},"sessions"),".")),(0,s.kt)("h4",{id:"custom-store"},"Custom Store"),(0,s.kt)("p",null,"Due to the complexity of implementing a store in version 1, it is unlikely that one has been implemented."),(0,s.kt)("p",null,"However, if it has, the best way to upgrade it to version 2 is to rewrite it from scratch using the documentation."),(0,s.kt)("h3",{id:"new-login"},"New Login"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,s.kt)("a",{parentName:"em",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,s.kt)("h4",{id:"example-with-the-authorization-header"},"Example with the ",(0,s.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    return new HttpResponseOK({\n      token: session.getToken()\n    });\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n}\n")),(0,s.kt)("h4",{id:"example-with-cookies"},"Example with cookies"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const session = await this.store.createAndSaveSessionFromUser(user);\n    const response = new HttpResponseNoContent();\n    const token = session.getToken();\n    setSessionCookie(response, token);\n    return response;\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UseSessions, Store } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  // user: fetchUser(User)\n})\nexport class AuthController {\n  // This line is required: the store must be injected in at least one controller.\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<any, Session>) {\n    const user = await getRepository(User).findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,s.kt)("h3",{id:"new-logout"},"New Logout"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,s.kt)("a",{parentName:"em",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,s.kt)("p",null,"In version 2, you don't need to talk directly to the store, use weird options (such as ",(0,s.kt)("inlineCode",{parentName:"p"},"extendLifeTimeOrUpdate"),") or manage cookies yourself."),(0,s.kt)("p",null,"Just call ",(0,s.kt)("inlineCode",{parentName:"p"},"session.destroy()")," and FoalTS will take care of everything else."),(0,s.kt)("h4",{id:"example-with-the-authorization-header-1"},"Example with the ",(0,s.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions()\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,s.kt)("h4",{id:"example-with-cookies-1"},"Example with cookies"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @dependency\n  store: TypeORMStore;\n\n  @Post('/logout')\n  @TokenRequired({\n    cookie: true,\n    extendLifeTimeOrUpdate: false,\n    store: TypeORMStore,\n  })\n  async logout(ctx: Context<any, Session>) {\n    await this.store.destroy(ctx.session.sessionID);\n\n    const response = new HttpResponseNoContent();\n    removeSessionCookie(response);\n    return response;\n  }\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/logout')\n  @UseSessions({\n    cookie: true,\n  })\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,s.kt)("h3",{id:"access-control"},"Access Control"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"You may be interested in looking at the ",(0,s.kt)("a",{parentName:"em",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"quick start page")," as well."))),(0,s.kt)("h4",{id:"example-with-the-authorization-header-2"},"Example with the ",(0,s.kt)("inlineCode",{parentName:"h4"},"Authorization")," header"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h4",{id:"example-with-cookies-2"},"Example with cookies"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Before")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@TokenRequired({ store: TypeORMStore, cookie: true, user: fetchUser(User) })\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"After")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseSessions({\n  cookie: true,\n  user: fetchUser(User)\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h3",{id:"send-the-csrf-token-in-a-template"},"Send the CSRF token in a template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nreturn render('templates/home.html', { csrfToken: await getCsrfToken(ctx.session) });\n\n// After\nreturn render('templates/home.html', { csrfToken: ctx.session.get('csrfToken') });\n")),(0,s.kt)("h3",{id:"read-or-create-a-session"},"Read or create a session"),(0,s.kt)("p",null,"To read or create a session manually, use the function ",(0,s.kt)("inlineCode",{parentName:"p"},"createSession")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"readSession")," instead of the store directly."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Session.verifyTokenAndGetId(token)")," is removed. "),(0,s.kt)("h3",{id:"revoking-sessions"},"Revoking sessions"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h3",{id:"breaking-changes-that-should-not-affect-you"},"Breaking Changes that Should not Affect You"),(0,s.kt)("p",null,"If you are affected, it's probably you do not use the component the right way."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Session constructor has changes. You should not instantiate it yourself. Use ",(0,s.kt)("inlineCode",{parentName:"li"},"readSession")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"createSession")," instead."),(0,s.kt)("li",{parentName:"ul"},"Except for the ",(0,s.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"set")," methods, the interface of ",(0,s.kt)("inlineCode",{parentName:"li"},"Session")," has changed."),(0,s.kt)("li",{parentName:"ul"},"The methods ",(0,s.kt)("inlineCode",{parentName:"li"},"getRedisInstance")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"getMongoInstance")," have been removed from the stores.")),(0,s.kt)("h2",{id:"csrf-protection"},"CSRF Protection"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm uninstall @foal/csrf\n")),(0,s.kt)("p",null,"The package ",(0,s.kt)("inlineCode",{parentName:"p"},"@foal/csrf")," has been removed. In version 2, the CSRF protection is directly included in the ",(0,s.kt)("inlineCode",{parentName:"p"},"@UseSessions")," hook and can be enabled with ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.session.csrf.enabled")," (the configuration key ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.csrf.enabled")," does not exist anymore)."),(0,s.kt)("p",null,"You do not need to take care of generating a CSRF token in the session. The framework handles it for you."),(0,s.kt)("p",null,"The best way to use the new CSRF protection is to go directly to the ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/security/csrf-protection"},"CSRF page"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Warning:")," In order to ",(0,s.kt)("em",{parentName:"p"},"work better")," with some popular frontend frameworks, the default name of the CSRF cookie has been changed from ",(0,s.kt)("inlineCode",{parentName:"p"},"csrfToken")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"."),(0,s.kt)("h2",{id:"new-features"},"New Features"),(0,s.kt)("h3",{id:"session-tokens-1"},"Session Tokens"),(0,s.kt)("h4",{id:"query-all-sessions-of-a-user-typeorm-only"},"Query all sessions of a user (TypeORM only)"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"query-all-connected-users-typeorm-only"},"Query all connected users (TypeORM only)"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"force-the-disconnection-of-a-user-typeorm-only"},"Force the disconnection of a user (TypeORM only)"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"flash-sessions"},"Flash sessions"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"regenerate-the-session-id"},"Regenerate the session ID"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb"},"Expired sessions clean up regularly (TypeORM and MongoDB)"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")),(0,s.kt)("h4",{id:"anonymous-sessions-and-templates"},"Anonymous sessions and templates"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/2.x/authentication-and-access-control/session-tokens"},"session tokens")))}m.isMDXComponent=!0}}]);