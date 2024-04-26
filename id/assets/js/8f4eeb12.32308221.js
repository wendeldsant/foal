"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2496],{5366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(74848),r=t(28453);const s={title:"Version 2.4 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.4-release-notes.png",tags:["release"]},a=void 0,i={permalink:"/id/blog/2021/05/19/version-2.4-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-05-19-version-2.4-release-notes.md",source:"@site/blog/2021-05-19-version-2.4-release-notes.md",title:"Version 2.4 release notes",description:"Banner",date:"2021-05-19T00:00:00.000Z",formattedDate:"19 Mei 2021",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:1.01,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.4 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.4-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"Version 2.5 release notes",permalink:"/id/blog/2021/06/11/version-2.5-release-notes"},nextItem:{title:"Version 2.3 release notes",permalink:"/id/blog/2021/04/22/version-2.3-release-notes"}},l={authorsImageUrls:[void 0]},c=[{value:"<code>$data</code> references for validation",id:"data-references-for-validation",level:2},{value:"Cache option for file downloading",id:"cache-option-for-file-downloading",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Contributors",id:"contributors",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Banner",src:t(57529).A+"",width:"914",height:"315"})}),"\n",(0,o.jsx)(n.p,{children:"Version 2.4 of Foal has been released! Here are the improvements that it brings."}),"\n",(0,o.jsxs)(n.h2,{id:"data-references-for-validation",children:[(0,o.jsx)(n.code,{children:"$data"})," references for validation"]}),"\n",(0,o.jsxs)(n.p,{children:["Version 2.4 allows you to enable the AJV ",(0,o.jsx)(n.code,{children:"$data"})," option so that you can use the verified data values as validators for other values."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"config/default.json"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "ajv": {\n      "$data": true\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example of auth controller"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Context, Post, ValidateBody } from '@foal/core';\n\nexport class AuthController {\n  @Post('/signup')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      username: { type: 'string' },\n      password: { type: 'string' },\n      // \"password\" and \"confirmPassword\" should be identical.\n      confirmPassword: {\n        const: {\n          $data: '1/password',\n        },\n        type: 'string',\n      },\n    }\n    required: [ 'username', 'password', 'confirmPassword' ],\n    additionalProperties: false\n  })\n  signup(ctx: Context) {\n    // Do something.\n  }\n}\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"cache-option-for-file-downloading",children:"Cache option for file downloading"}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version 2.4 the ",(0,o.jsx)(n.code,{children:"Disk.createHttpResponse"})," method accepts an optional parameter to specify the value of the ",(0,o.jsx)(n.code,{children:"Cache-Control"})," header."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Context, dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nimport { User } from '../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  async readProfileImage(ctx: Context<User>) {\n    return this.disk.createHttpResponse(ctx.user.avatar, {\n      cache: 'no-cache'\n    });\n  }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,o.jsxs)(n.p,{children:["See issue ",(0,o.jsx)(n.a,{href:"https://github.com/FoalTS/foal/issues/930",children:"#930"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"contributors",children:"Contributors"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/ZakRabe",children:"@ZakRabe"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},57529:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/banner-1a892e7cbebe358fc06789a6968738f1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);