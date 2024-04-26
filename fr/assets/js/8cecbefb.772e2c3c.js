"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8463],{63968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const r={title:"Version 2.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.2-release-notes.png",tags:["release"]},i=void 0,a={permalink:"/fr/blog/2021/02/25/version-2.2-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-25-version-2.2-release-notes.md",source:"@site/blog/2021-02-25-version-2.2-release-notes.md",title:"Version 2.2 release notes",description:"Banner",date:"2021-02-25T00:00:00.000Z",formattedDate:"25 f\xe9vrier 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:1.955,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.2-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"What's new in version 2 (part 2/4)",permalink:"/fr/blog/2021/03/02/whats-new-in-version-2-part-2"},nextItem:{title:"What's new in version 2 (part 1/4)",permalink:"/fr/blog/2021/02/17/whats-new-in-version-2-part-1"}},c={authorsImageUrls:[void 0]},l=[{value:"New Look of the <code>createapp</code> Command",id:"new-look-of-the-createapp-command",level:2},{value:"Authentication Improvement for Single-Page Applications (SPA)",id:"authentication-improvement-for-single-page-applications-spa",level:2},{value:"Support of Nested Routes in <code>foal generate|g rest-api &lt;name&gt;</code>",id:"support-of-nested-routes-in-foal-generateg-rest-api-name",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Banner",src:t(6955).A+"",width:"914",height:"315"})}),"\n",(0,o.jsx)(n.p,{children:"Version 2.2 of Foal has been released! Here are the improvements that it brings."}),"\n",(0,o.jsxs)(n.h2,{id:"new-look-of-the-createapp-command",children:["New Look of the ",(0,o.jsx)(n.code,{children:"createapp"})," Command"]}),"\n",(0,o.jsxs)(n.p,{children:["The output of the ",(0,o.jsx)(n.code,{children:"createapp"}),' command has been prettified to be more "welcoming".']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"New createapp look",src:t(39216).A+"",width:"1338",height:"959"})}),"\n",(0,o.jsx)(n.h2,{id:"authentication-improvement-for-single-page-applications-spa",children:"Authentication Improvement for Single-Page Applications (SPA)"}),"\n",(0,o.jsxs)(n.p,{children:["When building a SPA with cookie-based authentication, it can sometimes be difficult to know if the user is logged in or to obtain certain information about the user (",(0,o.jsx)(n.code,{children:"isAdmin"}),", etc)."]}),"\n",(0,o.jsxs)(n.p,{children:["Since the authentication token is stored in a cookie with the ",(0,o.jsx)(n.code,{children:"httpOnly"})," directive set to ",(0,o.jsx)(n.code,{children:"true"})," (to mitigate XSS attacks), the front-end application has no way of knowing if a user is logged in, except by making an additional request to the server."]}),"\n",(0,o.jsxs)(n.p,{children:["To solve this problem, version 2.2 adds a new option called ",(0,o.jsx)(n.code,{children:"userCookie"})," that allows you to set an additional cookie that the frontend can read with the content you choose. This cookie is synchronized with the session and is refreshed at each request and destroyed when the session expires or when the user logs out."]}),"\n",(0,o.jsxs)(n.p,{children:["In the following example, the ",(0,o.jsx)(n.code,{children:"user"})," cookie is empty if no user is logged in or contains certain information about him/her otherwise. This is particularly useful if you need to display UI elements based on user characteristics."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Server-side code"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function userToJSON(user: User|undefined) {\n  if (!user) {\n    return 'null';\n  }\n\n  return JSON.stringify({\n    email: user.email,\n    isAdmin: user.isAdmin\n  });\n}\n\n@UseSessions({\n  cookie: true,\n  user: fetchUser(User),\n  userCookie: (ctx, services) => userToJSON(ctx.user)\n})\nexport class ApiController {\n\n  @Get('/products')\n  @UserRequired()\n  async readProducts(ctx: Context) {\n    const products = await Product.find({ owner: ctx.user });\n    return new HttpResponseOK(products);\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Cookies"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"User cookie",src:t(27513).A+"",width:"995",height:"41"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Client-side code"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const user = JSON.parse(decodeURIComponent(/* cookie value */));\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"support-of-nested-routes-in-foal-generateg-rest-api-name",children:["Support of Nested Routes in ",(0,o.jsx)(n.code,{children:"foal generate|g rest-api <name>"})]}),"\n",(0,o.jsxs)(n.p,{children:["Like the command ",(0,o.jsx)(n.code,{children:"g controller"}),", ",(0,o.jsx)(n.code,{children:"g rest-api"})," now supports nested routes."]}),"\n",(0,o.jsx)(n.p,{children:"Let's say we have the following file structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"src/\n '- app/\n  |- controllers/\n  | |- api.controller.ts\n  | '- index.ts\n  '- entities/\n    |- user.entity.ts\n    '- index.ts\n"})}),"\n",(0,o.jsx)(n.p,{children:"Running these commands will add and register the following files:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"foal generate rest-api api/product --auth --register\nfoal generate rest-api api/order --auth --register\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"src/\n '- app/\n  |- controllers/\n  | |- api/\n  | | |- product.controller.ts\n  | | |- order.controller.ts\n  | | '- index.ts\n  | |- api.controller.ts\n  | '- index.ts\n  '- entities/\n    |- product.entity.ts\n    |- order.entity.ts\n    |- user.entity.ts\n    '- index.ts\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6955:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/banner-6265743e69efeb2a40aebb31b003df5c.png"},39216:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/new-create-app-57f238581922bd8f8f05bcb788175c98.png"},27513:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/user-cookie-c3f0e06d9ced0800240ac2b5ee368b8c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);