"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7537],{1720:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(74848),t=s(28453);const o={title:"Version 2.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.3-release-notes.png",tags:["release"]},i=void 0,a={permalink:"/blog/2021/04/22/version-2.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-22-version-2.3-release-notes.md",source:"@site/blog/2021-04-22-version-2.3-release-notes.md",title:"Version 2.3 release notes",description:"Banner",date:"2021-04-22T00:00:00.000Z",formattedDate:"April 22, 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.07,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.3-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"Version 2.4 release notes",permalink:"/blog/2021/05/19/version-2.4-release-notes"},nextItem:{title:"What's new in version 2 (part 4/4)",permalink:"/blog/2021/04/08/whats-new-in-version-2-part-4"}},l={authorsImageUrls:[void 0]},c=[{value:"GraphiQL",id:"graphiql",level:2},{value:"Support for <code>.env.local</code> files",id:"support-for-envlocal-files",level:2},{value:"Prisma documentation",id:"prisma-documentation",level:2},{value:"Base 64 and base 64 URL utilities",id:"base-64-and-base-64-url-utilities",level:2},{value:"Converting Streams to Buffers",id:"converting-streams-to-buffers",level:2},{value:"Accessing services during authentication",id:"accessing-services-during-authentication",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Social authentication",id:"social-authentication",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Banner",src:s(78156).A+"",width:"914",height:"315"})}),"\n",(0,r.jsx)(n.p,{children:"Version 2.3 of Foal has been released! Here are the improvements that it brings."}),"\n",(0,r.jsx)(n.h2,{id:"graphiql",children:"GraphiQL"}),"\n",(0,r.jsx)(n.p,{children:"From version 2.3, it is possible to generate a GraphiQL page in one line of code. This can be useful if you quickly need to test your API."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @foal/graphiql\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"GraphiQL",src:s(69252).A+"",width:"988",height:"601"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { GraphiQLController } from '@foal/graphiql';\n\nimport { GraphqlApiController } from './services';\n\nexport class AppController {\n\n  subControllers = [\n    // ...\n    controller('/graphql', GraphqlApiController),\n    controller('/graphiql', GraphiQLController)\n  ];\n\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The page is also customizable and you can provide additional options to change the UI or the API endpoint."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export class GraphiQL2Controller extends GraphiQLController {\n\n  cssThemeURL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/solarized.css';\n\n  apiEndpoint = '/api';\n\n  options: GraphiQLControllerOptions = {\n    docExplorerOpen: true,\n    editorTheme: 'solarized light'\n  }\n\n}\n\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"support-for-envlocal-files",children:["Support for ",(0,r.jsx)(n.code,{children:".env.local"})," files"]}),"\n",(0,r.jsxs)(n.p,{children:["Foal's configuration system already supported ",(0,r.jsx)(n.code,{children:".env"})," files in previous versions. As of version 2.3, the framework also supports ",(0,r.jsx)(n.code,{children:".env.local"})," files."]}),"\n",(0,r.jsxs)(n.p,{children:["This can be useful in case you want to have two ",(0,r.jsx)(n.code,{children:".env"})," files, one to define the default env vars needed by the application and another to override these values on your local machine."]}),"\n",(0,r.jsxs)(n.p,{children:["If a variable is defined in both files, the value in the ",(0,r.jsx)(n.code,{children:".env.local"})," file will take precedence."]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, you can also define environment-specific local files (",(0,r.jsx)(n.code,{children:".env.development.local"}),", ",(0,r.jsx)(n.code,{children:".env.production.local"}),", etc)."]}),"\n",(0,r.jsx)(n.h2,{id:"prisma-documentation",children:"Prisma documentation"}),"\n",(0,r.jsxs)(n.p,{children:["The documentation has been expanded to include ",(0,r.jsx)(n.a,{href:"https://foalts.org/docs/databases/other-orm/introduction",children:"examples"})," of how to use Prisma with Foal."]}),"\n",(0,r.jsx)(n.h2,{id:"base-64-and-base-64-url-utilities",children:"Base 64 and base 64 URL utilities"}),"\n",(0,r.jsx)(n.p,{children:"Two functions are provided to convert base64 encoded strings to base64url encoded strings and vice versa."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { convertBase64ToBase64url, convertBase64urlToBase64 } from '@foal/core';\n\nconst str = convertBase64ToBase64url(base64Str);\nconst str2 = convertBase64urlToBase64(base64urlStr);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"converting-streams-to-buffers",children:"Converting Streams to Buffers"}),"\n",(0,r.jsxs)(n.p,{children:["In case you need to convert a readable stream to a concatenated buffer during testing, you can now use the ",(0,r.jsx)(n.code,{children:"streamToBuffer"})," function for this."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"accessing-services-during-authentication",children:"Accessing services during authentication"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"user"})," option of ",(0,r.jsx)(n.code,{children:"@JWTRequired"})," and ",(0,r.jsx)(n.code,{children:"@UseSessions"})," now gives you the possibility to access services."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class UserService {\n  getUser(id) {\n    return User.findOne({ id });\n  }\n}\n\n@JWTRequired({\n  user: (id, services) => services.get(UserService).getUser(id)\n})\nclass ApiController {\n  @Get('/products')\n  getProducts(ctx: Context) {\n    // ctx.user is the object returned by UserService.\n  }\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,r.jsx)(n.h3,{id:"social-authentication",children:"Social authentication"}),"\n",(0,r.jsx)(n.p,{children:"Social authentication controllers could sometimes return 500 errors, depending on the social provider you were using. This was due to a problem of string encoding in the callback URL. This bug has been fixed in this version."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78156:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/banner-eff22c27909b97d4b8e82b0ebe849046.png"},69252:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/graphiql-f099ed2191f41190bd6569d1b5cd1267.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);