"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},i=void 0,s={permalink:"/es/blog/2022/05/29/version-2.9-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-05-29-version-2.9-release-notes.md",source:"@site/blog/2022-05-29-version-2.9-release-notes.md",title:"Version 2.9 release notes",description:"Banner",date:"2022-05-29T00:00:00.000Z",formattedDate:"29 de mayo de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:1.19,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.9 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.9-release-notes.png",tags:["release"]},prevItem:{title:"FoalTS 2022 survey is open!",permalink:"/es/blog/2022/06/13/FoalTS-2022-survey-is-open"},nextItem:{title:"Version 2.8 release notes",permalink:"/es/blog/2022/02/13/version-2.8-release-notes"}},l={authorsImageUrls:[void 0]},p=[{value:"New OAuth2 Twitter Provider",id:"new-oauth2-twitter-provider",level:2},{value:"OAuth2 Providers support PKCE Code Flow",id:"oauth2-providers-support-pkce-code-flow",level:2},{value:"Support for version 15 of <code>graphql</code> and latest version of <code>type-graphql</code>",id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Banner",src:r(27404).Z,width:"914",height:"315"})),(0,n.kt)("p",null,"Version 2.9 of ",(0,n.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," has been released! Here are the improvements that it brings."),(0,n.kt)("h2",{id:"new-oauth2-twitter-provider"},"New OAuth2 Twitter Provider"),(0,n.kt)("p",null,"After LinkedIn, Google, Github and Facebook, Foal now supports Twitter for social authentication."),(0,n.kt)("p",null,"\ud83d\udc49 ",(0,n.kt)("a",{parentName:"p",href:"https://foalts.org/docs/authentication-and-access-control/social-auth/"},"Link to the documentation")),(0,n.kt)("p",null,"A big thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LeonardoSalvucci"},"@LeonardoSalvucci")," for having implemented this feature."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { TwitterProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  twitter: TwitterProvider;\n\n  @Get('/signin/twitter')\n  redirectToTwitter() {\n    // Your \"Login In with Twitter\" button should point to this route.\n    // The user will be redirected to Twitter auth page.\n    return this.twitter.redirect();\n  }\n\n  @Get('/signin/twitter/callback')\n  async handleTwitterRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Twitter, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.twitter.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),(0,n.kt)("h2",{id:"oauth2-providers-support-pkce-code-flow"},"OAuth2 Providers support PKCE Code Flow"),(0,n.kt)("p",null,"OAuth2 abstract provider now supports PKCE code flow. If you wish to implement your own provider using PKCE, it's now possible!"),(0,n.kt)("h2",{id:"support-for-version-15-of-graphql-and-latest-version-of-type-graphql"},"Support for version 15 of ",(0,n.kt)("inlineCode",{parentName:"h2"},"graphql")," and latest version of ",(0,n.kt)("inlineCode",{parentName:"h2"},"type-graphql")),(0,n.kt)("p",null,"Foal's dependencies have been updated so as to support the latest version of ",(0,n.kt)("a",{parentName:"p",href:"https://typegraphql.com/"},"TypeGraphQL"),"."))}u.isMDXComponent=!0},27404:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/banner-806ff1a639dfecd02edfc7b99c9af462.png"}}]);