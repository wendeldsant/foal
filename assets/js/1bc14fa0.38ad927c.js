"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3875],{9747:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(74848),n=o(28453);const s={title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},i=void 0,a={permalink:"/blog/2022/05/29/version-2.9-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-05-29-version-2.9-release-notes.md",source:"@site/blog/2022-05-29-version-2.9-release-notes.md",title:"Version 2.9 release notes",description:"Banner",date:"2022-05-29T00:00:00.000Z",formattedDate:"May 29, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.19,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"FoalTS 2022 survey is open!",permalink:"/blog/2022/06/13/FoalTS-2022-survey-is-open"},nextItem:{title:"Version 2.8 release notes",permalink:"/blog/2022/02/13/version-2.8-release-notes"}},l={authorsImageUrls:[void 0]},c=[{value:"New OAuth2 Twitter Provider",id:"new-oauth2-twitter-provider",level:2},{value:"OAuth2 Providers support PKCE Code Flow",id:"oauth2-providers-support-pkce-code-flow",level:2},{value:"Support for version 15 of <code>graphql</code> and latest version of <code>type-graphql</code>",id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Banner",src:o(42638).A+"",width:"914",height:"315"})}),"\n",(0,r.jsxs)(t.p,{children:["Version 2.9 of ",(0,r.jsx)(t.a,{href:"https://foalts.org/",children:"Foal"})," has been released! Here are the improvements that it brings."]}),"\n",(0,r.jsx)(t.h2,{id:"new-oauth2-twitter-provider",children:"New OAuth2 Twitter Provider"}),"\n",(0,r.jsx)(t.p,{children:"After LinkedIn, Google, Github and Facebook, Foal now supports Twitter for social authentication."}),"\n",(0,r.jsxs)(t.p,{children:["\ud83d\udc49 ",(0,r.jsx)(t.a,{href:"https://foalts.org/docs/authentication/social-auth/",children:"Link to the documentation"})]}),"\n",(0,r.jsxs)(t.p,{children:["A big thanks to ",(0,r.jsx)(t.a,{href:"https://github.com/LeonardoSalvucci",children:"@LeonardoSalvucci"})," for having implemented this feature."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { TwitterProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  twitter: TwitterProvider;\n\n  @Get('/signin/twitter')\n  redirectToTwitter() {\n    // Your \"Login In with Twitter\" button should point to this route.\n    // The user will be redirected to Twitter auth page.\n    return this.twitter.redirect();\n  }\n\n  @Get('/signin/twitter/callback')\n  async handleTwitterRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Twitter, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.twitter.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"oauth2-providers-support-pkce-code-flow",children:"OAuth2 Providers support PKCE Code Flow"}),"\n",(0,r.jsx)(t.p,{children:"OAuth2 abstract provider now supports PKCE code flow. If you wish to implement your own provider using PKCE, it's now possible!"}),"\n",(0,r.jsxs)(t.h2,{id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql",children:["Support for version 15 of ",(0,r.jsx)(t.code,{children:"graphql"})," and latest version of ",(0,r.jsx)(t.code,{children:"type-graphql"})]}),"\n",(0,r.jsxs)(t.p,{children:["Foal's dependencies have been updated so as to support the latest version of ",(0,r.jsx)(t.a,{href:"https://typegraphql.com/",children:"TypeGraphQL"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},42638:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/banner-806ff1a639dfecd02edfc7b99c9af462.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);