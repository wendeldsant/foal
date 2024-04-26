"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2775],{88823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const o={title:"Version 4.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.1-release-notes.png",tags:["release"]},a=void 0,i={permalink:"/fr/blog/2023/10/24/version-4.1-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2023-10-24-version-4.1-release-notes.md",source:"@site/blog/2023-10-24-version-4.1-release-notes.md",title:"Version 4.1 release notes",description:"Banner",date:"2023-10-24T00:00:00.000Z",formattedDate:"24 octobre 2023",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:.625,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 4.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-4.1-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"Version 4.2 release notes",permalink:"/fr/blog/2023/10/29/version-4.2-release-notes"},nextItem:{title:"Version 4.0 release notes",permalink:"/fr/blog/2023/09/11/version-4.0-release-notes"}},l={authorsImageUrls:[void 0]},c=[{value:"Better logging",id:"better-logging",level:2},{value:"New recommended configuration",id:"new-recommended-configuration",level:3},{value:"Request IDs",id:"request-ids",level:2},{value:"XML requests",id:"xml-requests",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Banner",src:n(37104).A+"",width:"914",height:"315"})}),"\n",(0,r.jsxs)(t.p,{children:["Version 4.1 of ",(0,r.jsx)(t.a,{href:"https://foalts.org/",children:"Foal"})," is out!"]}),"\n",(0,r.jsx)(t.h2,{id:"better-logging",children:"Better logging"}),"\n",(0,r.jsxs)(t.p,{children:["Foal now features a true logging system. Full documentation can be found ",(0,r.jsx)(t.a,{href:"/docs/common/logging",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"new-recommended-configuration",children:"New recommended configuration"}),"\n",(0,r.jsx)(t.p,{children:"It is recommended to switch to this configuration to take full advantage of the new logging system."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"config/default.json"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "settings": {\n    "loggerFormat": "foal"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"config/development.json"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "settings": {\n    "logger": {\n      "format": "dev"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"request-ids",children:"Request IDs"}),"\n",(0,r.jsxs)(t.p,{children:["On each request, a request ID is now generated randomly. It can be read through ",(0,r.jsx)(t.code,{children:"ctx.request.id"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If the ",(0,r.jsx)(t.code,{children:"X-Request-ID"})," header exists in the request, then the header value is used as the request identifier."]}),"\n",(0,r.jsx)(t.h2,{id:"xml-requests",children:"XML requests"}),"\n",(0,r.jsxs)(t.p,{children:["If a request is sent with the ",(0,r.jsx)(t.code,{children:"application/xml"})," header, the XML content is now available under ",(0,r.jsx)(t.code,{children:"ctx.request.body"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},37104:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/banner-e7ec7319084abaffc73e0997f9d12fd1.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);