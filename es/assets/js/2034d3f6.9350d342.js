"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8591],{48592:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=o(74848),r=o(28453);const t={title:"Conversiones"},c=void 0,a={id:"common/conversions",title:"Conversiones",description:"This page lists common functions to convert one type or format to another.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/common/conversions.md",sourceDirName:"common",slug:"/common/conversions",permalink:"/es/docs/2.x/common/conversions",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/common/conversions.md",tags:[],version:"2.x",frontMatter:{title:"Conversiones"},sidebar:"someSidebar",previous:{title:"Generar tokens",permalink:"/es/docs/2.x/common/generate-tokens"},next:{title:"Bases de datos SQL",permalink:"/es/docs/2.x/databases/typeorm"}},i={},d=[{value:"Base64 to Base64URL",id:"base64-to-base64url",level:2},{value:"Base64URL to Base64",id:"base64url-to-base64",level:2},{value:"Stream to Buffer",id:"stream-to-buffer",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page lists common functions to convert one type or format to another."}),"\n",(0,s.jsx)(n.h2,{id:"base64-to-base64url",children:"Base64 to Base64URL"}),"\n",(0,s.jsx)(n.p,{children:"This function converts a base64-encoded string into a base64URL-encoded string."}),"\n",(0,s.jsxs)(n.p,{children:["It replaces the characters ",(0,s.jsx)(n.code,{children:"+"})," and ",(0,s.jsx)(n.code,{children:"/"})," with ",(0,s.jsx)(n.code,{children:"-"})," and ",(0,s.jsx)(n.code,{children:"_"})," and omits the ",(0,s.jsx)(n.code,{children:"="})," sign."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { convertBase64ToBase64url } from '@foal/core';\n\nconst foo = convertBase64ToBase64url('bar');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"base64url-to-base64",children:"Base64URL to Base64"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This feature is available from version 2.3 onwards."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function converts a base64URL-encoded string into a base64-encoded string."}),"\n",(0,s.jsxs)(n.p,{children:["It replaces the characters ",(0,s.jsx)(n.code,{children:"-"})," and ",(0,s.jsx)(n.code,{children:"_"})," with ",(0,s.jsx)(n.code,{children:"+"})," and ",(0,s.jsx)(n.code,{children:"/"})," and adds the ",(0,s.jsx)(n.code,{children:"="})," padding character(s) if any."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { convertBase64urlToBase64 } from '@foal/core';\n\nconst foo = convertBase64urlToBase64('bar');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"stream-to-buffer",children:"Stream to Buffer"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This feature is available from version 2.3 onwards."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function converts a stream of buffers into a concatenated buffer. It returns a promise."}),"\n",(0,s.jsx)(n.p,{children:"If the stream emits an error, the promise is rejected with the emitted error."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var s=o(96540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);