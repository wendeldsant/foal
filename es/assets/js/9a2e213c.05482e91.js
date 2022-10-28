"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?s.createElement(m,r(r({ref:t},p),{},{components:n})):s.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(67294),a=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(87462),a=n(67294),o=n(86010),r=n(72389),i=n(67392),l=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:r,block:d,defaultValue:h,values:m,groupId:f,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===h?h:null!=(t=null!=h?h:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:x}=(0,l.U)(),[N,T]=(0,a.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=b[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),s=k[n].value;s!==N&&(O(t),T(s),null!=f&&x(f,String(s)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var s;const t=S.indexOf(e.currentTarget)+1;n=null!=(s=S[t])?s:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:R,onFocus:C,onClick:C},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,r.Z)();return a.createElement(d,(0,s.Z)({key:String(t)},e))}},52424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var s=n(87462),a=(n(67294),n(3905)),o=n(65488),r=n(85162);const i={title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]},l=void 0,u={permalink:"/es/blog/2021/04/08/whats-new-in-version-2-part-4",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-08-whats-new-in-version-2-part-4.md",source:"@site/blog/2021-04-08-whats-new-in-version-2-part-4.md",title:"What's new in version 2 (part 4/4)",description:"Banner",date:"2021-04-08T00:00:00.000Z",formattedDate:"8 de abril de 2021",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:5.675,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]},prevItem:{title:"Version 2.3 release notes",permalink:"/es/blog/2021/04/22/version-2.3-release-notes"},nextItem:{title:"What's new in version 2 (part 3/4)",permalink:"/es/blog/2021/03/11/whats-new-in-version-2-part-3"}},p={authorsImageUrls:[void 0]},c=[{value:"New Session System",id:"new-session-system",level:2},{value:"Example with the <code>Authorization</code> header",id:"example-with-the-authorization-header",level:3},{value:"Example with cookies",id:"example-with-cookies",level:3},{value:"New features",id:"new-features",level:3},{value:"Query all sessions of a user (TypeORM only)",id:"query-all-sessions-of-a-user-typeorm-only",level:4},{value:"Query all connected users (TypeORM only)",id:"query-all-connected-users-typeorm-only",level:4},{value:"Force the disconnection of a user (TypeORM only)",id:"force-the-disconnection-of-a-user-typeorm-only",level:4},{value:"Flash sessions",id:"flash-sessions",level:4},{value:"Regenerate the session ID",id:"regenerate-the-session-id",level:4},{value:"Expired sessions clean up regularly (TypeORM and MongoDB)",id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb",level:4},{value:"Anonymous sessions and templates",id:"anonymous-sessions-and-templates",level:4},{value:"Stateful CSRF protection simplified",id:"stateful-csrf-protection-simplified",level:2}],d={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:n(40337).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"This article presents the improvements to the session system in FoalTS version 2."),(0,a.kt)("p",null,"The new syntax can be used either with cookies or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header. It adds the following new features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"query all sessions of a given user"),(0,a.kt)("li",{parentName:"ul"},"query all connected users"),(0,a.kt)("li",{parentName:"ul"},"force logout of a specific user"),(0,a.kt)("li",{parentName:"ul"},"flash sessions"),(0,a.kt)("li",{parentName:"ul"},"session ID regeneration"),(0,a.kt)("li",{parentName:"ul"},"anonymous and authenticated sessions")),(0,a.kt)("p",null,"FoalTS also simplifies stateful CSRF protection so that all it takes is one setting to enable it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article is the part 4 of the series of articles ",(0,a.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 3 can be found ",(0,a.kt)("a",{parentName:"p",href:"/es/blog/2021/03/11/whats-new-in-version-2-part-3"},"here"),".")),(0,a.kt)("h2",{id:"new-session-system"},"New Session System"),(0,a.kt)("p",null,"The new authentication system is probably the main new feature of version 2. The old session components have been redesigned so as to serve three purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"be easy to use with very little code,"),(0,a.kt)("li",{parentName:"ul"},"support a large variety of applications and architectures (SPA, Mobile, SSR, API, ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization")," header, cookies, serverless environment, social auth, etc),"),(0,a.kt)("li",{parentName:"ul"},"and add missing features impossible to implement in version 1.")),(0,a.kt)("p",null,"Here is the way to use it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First ",(0,a.kt)("a",{parentName:"li",href:"/docs/authentication-and-access-control/session-tokens#choosing-a-session-store"},"specify in the configuration")," where your sessions should be stored (SQL database, redis, Mongo, etc)."),(0,a.kt)("li",{parentName:"ul"},"Then decorate any route or controller that need authentication with ",(0,a.kt)("inlineCode",{parentName:"li"},"@UseSessions"),".")),(0,a.kt)("h3",{id:"example-with-the-authorization-header"},"Example with the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Authorization")," header"),(0,a.kt)("p",null,"In this first example, we'd like to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header to handle authentication."),(0,a.kt)("p",null,"We want to send an email address and password to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," and retrieve a token in return to authenticate further requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Context, Get, HttpResponseOK, UserRequired, UseSessions, ValidateBody, HttpResponseUnauthorized, Post } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User, Product } from '../entities';\n\n@UseSessions({\n  user: fetchUser(User)\n})\nexport class ApiController {\n  @dependency\n  store: Store;\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context<User>) {\n    return new HttpResponseOK(Product.find({ user: ctx.user }));\n  }\n\n  @Post('/login')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h3",{id:"example-with-cookies"},"Example with cookies"),(0,a.kt)("p",null,"In this second example, we will use cookies to manage authentication. Foal will auto-creates a session when none exists."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Context, Get, HttpResponseOK, UserRequired, UseSessions, ValidateBody, HttpResponseUnauthorized, Post } from '@foal/core';\nimport { fetchUser } from '@foal/typeorm';\n\nimport { User, Product } from '../entities';\n\n@UseSessions({\n  // highlight-next-line\n  cookie: true,\n  user: fetchUser(User)\n})\nexport class ApiController {\n  @dependency\n  store: Store;\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context<User>) {\n    return new HttpResponseOK(Product.find({ user: ctx.user }));\n  }\n\n  @Post('/login')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      email: { type: 'string', format: 'email' },\n      password: { type: 'string' }\n    },\n    required: [ 'email', 'password' ],\n    type: 'object',\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    // highlight-next-line\n    ctx.session.setUser(user);\n\n    // highlight-next-line\n    return new HttpResponseOK();\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h3",{id:"new-features"},"New features"),(0,a.kt)("p",null,"In addition to this redesign, version 2 also offers new features."),(0,a.kt)("h4",{id:"query-all-sessions-of-a-user-typeorm-only"},"Query all sessions of a user (TypeORM only)"),(0,a.kt)("p",null,"This feature allows you to list all sessions associated with a specific user. This can be useful if a user is connected on several devices and you like to audit them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = { id: 1 };\nconst ids = await store.getSessionIDsOf(user);\n")),(0,a.kt)("h4",{id:"query-all-connected-users-typeorm-only"},"Query all connected users (TypeORM only)"),(0,a.kt)("p",null,"This feature lists all users that have at least one session in the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const ids = await store.getAuthenticatedUserIds();\n")),(0,a.kt)("h4",{id:"force-the-disconnection-of-a-user-typeorm-only"},"Force the disconnection of a user (TypeORM only)"),(0,a.kt)("p",null,"In case you want to remove all sessions associated with a specific user, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"destroyAllSessionsOf")," method. This can be useful if you think a session has been corrupted or when you want, for example when a password is changed, to disconnect a user from all other devices to which he/she has previously logged on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = { id: 1 };\nawait store.destroyAllSessionsOf(user);\n")),(0,a.kt)("h4",{id:"flash-sessions"},"Flash sessions"),(0,a.kt)("p",null,"Flash content is used when we want to save data (a message for example) only for the next request. A typical use case is when a user enters wrong credentials. The page is refreshed and an error message is displayed."),(0,a.kt)("p",null,"To use flash content, you only need to add the option ",(0,a.kt)("inlineCode",{parentName:"p"},"flash")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.session.set('error', 'Incorrect email or password', { flash: true });\n")),(0,a.kt)("h4",{id:"regenerate-the-session-id"},"Regenerate the session ID"),(0,a.kt)("p",null,"Regenerating the session ID is a ",(0,a.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#renew-the-session-id-after-any-privilege-level-change"},"recommended practice")," when changing a user's privileges or password. This can now be done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"regenerateID")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await ctx.session.regenerateID();\n")),(0,a.kt)("h4",{id:"expired-sessions-clean-up-regularly-typeorm-and-mongodb"},"Expired sessions clean up regularly (TypeORM and MongoDB)"),(0,a.kt)("p",null,"Starting from version 2, Foal regularly cleanup expired sessions in your database so you don't have to do it manually."),(0,a.kt)("h4",{id:"anonymous-sessions-and-templates"},"Anonymous sessions and templates"),(0,a.kt)("p",null,"In version 2, ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions({ cookie: true })")," automatically creates a session if none exists. This is particularly useful if you're building a shopping website with SSR templates. When the user navigates on the website, he/she can add items to the cart without having to log in the first place. Then, when the user wants to place his/her order, he can log in and the only thing you have to do is this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.session.setUser(user)\n")),(0,a.kt)("h2",{id:"stateful-csrf-protection-simplified"},"Stateful CSRF protection simplified"),(0,a.kt)("p",null,"In version 1, providing a CSRF protection was quite complex. We needed to manage token generation, handle the CSRF cookie (expiration, etc), use an additional hook, etc."),(0,a.kt)("p",null,"Starting from version 2, the CSRF protection is all managed by ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions"),"."),(0,a.kt)(o.Z,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    csrf:\n      enabled: true\n"))),(0,a.kt)(r.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,a.kt)("p",null,"When it is enabled, an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," cookie is sent to the client at the same time as the session cookie. It contains a CSRF token associated with your session."),(0,a.kt)("p",null,"When a request is made to the server, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions")," hooks expects you to include its value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," header."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're building a regular web application and want to include the CSRF token in your templates, you can retrieve it with this statement: ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.session.get('csrfToken')"),".")))}h.isMDXComponent=!0},40337:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/banner-4a0daa4160e81b0b7922d53453c9e04f.png"}}]);