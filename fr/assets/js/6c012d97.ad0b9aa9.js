"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[501],{56818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(74848),o=t(28453);const s={title:"Version 4.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.3-release-notes.png",tags:["release"]},a=void 0,i={permalink:"/fr/blog/2024/04/16/version-4.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2024-04-16-version-4.3-release-notes.md",source:"@site/blog/2024-04-16-version-4.3-release-notes.md",title:"Version 4.3 release notes",description:"Banner",date:"2024-04-16T00:00:00.000Z",formattedDate:"16 avril 2024",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:1.125,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 4.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.3-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"Version 4.4 release notes",permalink:"/fr/blog/2024/04/25/version-4.4-release-notes"},nextItem:{title:"Version 4.2 release notes",permalink:"/fr/blog/2023/10/29/version-4.2-release-notes"}},l={authorsImageUrls:[void 0]},c=[{value:"Better CLI ouput when script arguments are invalid",id:"better-cli-ouput-when-script-arguments-are-invalid",level:2},{value:"[Fix] the logger no longer throws an error in development when the client request is interrupted",id:"fix-the-logger-no-longer-throws-an-error-in-development-when-the-client-request-is-interrupted",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Banner",src:t(78314).A+"",width:"914",height:"315"})}),"\n",(0,n.jsxs)(r.p,{children:["Version 4.3 of ",(0,n.jsx)(r.a,{href:"https://foalts.org/",children:"Foal"})," is out!"]}),"\n",(0,n.jsx)(r.h2,{id:"better-cli-ouput-when-script-arguments-are-invalid",children:"Better CLI ouput when script arguments are invalid"}),"\n",(0,n.jsxs)(r.p,{children:["Previously, when executing ",(0,n.jsx)(r.code,{children:"foal run my-script"})," with invalid arguments, the CLI would only display one error at a time."]}),"\n",(0,n.jsx)(r.p,{children:"For example, with the following schema and arguments, we would only get this error message:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export const schema = {\n  type: 'object', \n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 2 },\n    password: { type: 'string' },\n    n: { type: 'number', maximum: 10 }\n  },\n  required: ['password']\n};\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"foal run my-script email=bar n=11\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'Error: The command line arguments must match format "email".\n'})}),"\n",(0,n.jsx)(r.p,{children:"From version 4.3 onwards, the CLI logs all validation errors and with a more meaningful description."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'Script error: arguments must have required property \'password\'.\nScript error: the value of "email" must NOT have more than 2 characters.\nScript error: the value of "email" must match format "email".\nScript error: the value of "n" must be <= 10.\n'})}),"\n",(0,n.jsx)(r.h2,{id:"fix-the-logger-no-longer-throws-an-error-in-development-when-the-client-request-is-interrupted",children:"[Fix] the logger no longer throws an error in development when the client request is interrupted"}),"\n",(0,n.jsxs)(r.p,{children:["Using the logger's ",(0,n.jsx)(r.code,{children:"dev"})," format, Foal would occasionally throw the error ",(0,n.jsx)(r.code,{children:"TypeError: Cannot read properties of null"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"This would occur when the connection with the client was lost, which happens, for example, when the React client server hotly reloads."}),"\n",(0,n.jsx)(r.p,{children:"This version fixes this error."})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},78314:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/banner-c762193ef5065a7b3181f07f6d3bd9f2.png"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);