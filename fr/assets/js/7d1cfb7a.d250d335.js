"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Version 2.7 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.7-release-notes.png",tags:["release"]},i=void 0,s={permalink:"/fr/blog/2021/12/12/version-2.7-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-12-12-version-2.7-release-notes.md",source:"@site/blog/2021-12-12-version-2.7-release-notes.md",title:"Version 2.7 release notes",description:"Banner",date:"2021-12-12T00:00:00.000Z",formattedDate:"12 d\xe9cembre 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:1.83,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.7 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.7-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.8 release notes",permalink:"/fr/blog/2022/02/13/version-2.8-release-notes"},nextItem:{title:"Version 2.6 release notes",permalink:"/fr/blog/2021/09/19/version-2.6-release-notes"}},l={authorsImageUrls:[void 0]},p=[{value:"The body of <code>HttpResponse</code> can be typed",id:"the-body-of-httpresponse-can-be-typed",level:2},{value:"Support for signed cookies",id:"support-for-signed-cookies",level:2},{value:"Environment name can be provided via <code>NODE_ENV</code> or <code>FOAL_ENV</code>",id:"environment-name-can-be-provided-via-node_env-or-foal_env",level:2},{value:"<code>foal generate entity</code> and <code>foal generate hook</code> support sub-directories",id:"foal-generate-entity-and-foal-generate-hook-support-sub-directories",level:2},{value:"Example with entities (models)",id:"example-with-entities-models",level:3},{value:"Example with hooks",id:"example-with-hooks",level:3},{value:"New <code>afterPreMiddlewares</code> option in <code>createApp</code>",id:"new-afterpremiddlewares-option-in-createapp",level:2},{value:"Contributors",id:"contributors",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(73590).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"Version 2.7 of Foal has been released! Here are the improvements that it brings."),(0,r.kt)("h2",{id:"the-body-of-httpresponse-can-be-typed"},"The body of ",(0,r.kt)("inlineCode",{parentName:"h2"},"HttpResponse")," can be typed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse")," class becomes generic so as to enforce the type of its ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," property if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponse } from '@foal/core';\n\nimport { Product } from '../entities';\n\nexport class AppController {\n  @Get('/products')\n  async products(): HttpResponse<Product[]> {\n    const products = await Product.find({});\n    return new HttpResponse(products);\n  }\n}\n")),(0,r.kt)("p",null,"It also allows you to infer the type of the body in your tests:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic HttpResponse",src:n(24307).Z,width:"1096",height:"208"})),(0,r.kt)("h2",{id:"support-for-signed-cookies"},"Support for signed cookies"),(0,r.kt)("p",null,"Starting from this version, you can sign cookies and read them through the ",(0,r.kt)("inlineCode",{parentName:"p"},"signedCookies")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Get, Post } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const cookie1: string|undefined = ctx.request.signedCookies.cookie1;\n    // Do something.\n    return new HttpResponseOK();\n  }\n\n  @Post('/sign-cookie')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('cookie1', 'value1', {\n        signed: true\n      });\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In order to use signed cookies, you must provide a secret with the configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.cookieParser.secret"),".")),(0,r.kt)("h2",{id:"environment-name-can-be-provided-via-node_env-or-foal_env"},"Environment name can be provided via ",(0,r.kt)("inlineCode",{parentName:"h2"},"NODE_ENV")," or ",(0,r.kt)("inlineCode",{parentName:"h2"},"FOAL_ENV")),(0,r.kt)("p",null,"Version 2.7 allows to you to specify the environment name (production, development, etc) with the ",(0,r.kt)("inlineCode",{parentName:"p"},"FOAL_ENV")," environment variable."),(0,r.kt)("p",null,"This can be useful if you have third party libraries whose behavior also depends on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/issues/1004"},"Github issue here"),")."),(0,r.kt)("h2",{id:"foal-generate-entity-and-foal-generate-hook-support-sub-directories"},(0,r.kt)("inlineCode",{parentName:"h2"},"foal generate entity")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"foal generate hook")," support sub-directories"),(0,r.kt)("h3",{id:"example-with-entities-models"},"Example with entities (models)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"foal g entity user\nfoal g entity business/product\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- entities/\n   |- business/\n   | |- product.entity.ts\n   | '- index.ts\n   |- user.entity.ts\n   '- index.ts\n")),(0,r.kt)("h3",{id:"example-with-hooks"},"Example with hooks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"foal g hook log\nfoal g hook auth/admin-required\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src/\n '- app/\n  '- hooks/\n   |- auth/\n   | |- admin-required.hook.ts\n   | '- index.ts\n   |- log.hook.ts\n   '- index.ts\n")),(0,r.kt)("h2",{id:"new-afterpremiddlewares-option-in-createapp"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"afterPreMiddlewares")," option in ",(0,r.kt)("inlineCode",{parentName:"h2"},"createApp")),(0,r.kt)("p",null,"It is now possible to run a custom middleware after all internal Express middlewares of the framework."),(0,r.kt)("p",null,"This can be useful in rare situations, for example when using the ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/identity-map/#-requestcontext-helper-for-di-containers"},"RequestContext helper")," in Mikro-ORM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = await createApp({\n   afterPreMiddlewares: [\n      (req, res, next) => {\n         RequestContext.create(orm.em, next);\n      }\n   ]\n})\n")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MCluck90"},"@MCluck90")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kingdun3284"},"@kingdun3284"))))}u.isMDXComponent=!0},73590:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner-190c7b228be95a70c374e2baada10395.png"},24307:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/generic-http-response-e03d9894b29b2a8389cc7edd29c24e7b.png"}}]);