"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5904],{73129:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(74848),o=s(28453);const r={title:"Utilities"},i=void 0,a={id:"common/utilities",title:"Utilities",description:"Random Tokens",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/common/utilities.md",sourceDirName:"common",slug:"/common/utilities",permalink:"/id/docs/3.x/common/utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/common/utilities.md",tags:[],version:"3.x",frontMatter:{title:"Utilities"},sidebar:"someSidebar",previous:{title:"gRPC",permalink:"/id/docs/3.x/common/gRPC"},next:{title:"ExpressJS",permalink:"/id/docs/3.x/common/expressjs"}},c={},d=[{value:"Random Tokens",id:"random-tokens",level:2},{value:"Unsigned Tokens",id:"unsigned-tokens",level:3},{value:"Signed Tokens",id:"signed-tokens",level:3},{value:"String Encoding",id:"string-encoding",level:2},{value:"Base64 to Base64URL",id:"base64-to-base64url",level:3},{value:"Base64URL to Base64",id:"base64url-to-base64",level:3},{value:"Buffers &amp; Streams",id:"buffers--streams",level:2},{value:"Stream to Buffer",id:"stream-to-buffer",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"random-tokens",children:"Random Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["In many situations, we need to generate tokens and then verify them. If your tokens are tied to a state (for example, a user ID), you should refer to the ",(0,t.jsx)(n.a,{href:"/id/docs/3.x/authentication/session-tokens",children:"sessions tokens"})," page. If not, the token generators below may be useful."]}),"\n",(0,t.jsx)(n.h3,{id:"unsigned-tokens",children:"Unsigned Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"generateToken"})," function generates a cryptographically secure random token encoded in base64url (128 bits)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"signed-tokens",children:"Signed Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["You can also generate a token using a secret. The secret is used to ",(0,t.jsx)(n.em,{children:"sign"})," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal createsecret\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Generate a signed token"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Verify and read a signed token"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"string-encoding",children:"String Encoding"}),"\n",(0,t.jsx)(n.h3,{id:"base64-to-base64url",children:"Base64 to Base64URL"}),"\n",(0,t.jsx)(n.p,{children:"This function converts a base64-encoded string into a base64URL-encoded string."}),"\n",(0,t.jsxs)(n.p,{children:["It replaces the characters ",(0,t.jsx)(n.code,{children:"+"})," and ",(0,t.jsx)(n.code,{children:"/"})," with ",(0,t.jsx)(n.code,{children:"-"})," and ",(0,t.jsx)(n.code,{children:"_"})," and omits the ",(0,t.jsx)(n.code,{children:"="})," sign."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { convertBase64ToBase64url } from '@foal/core';\n\nconst foo = convertBase64ToBase64url('bar');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"base64url-to-base64",children:"Base64URL to Base64"}),"\n",(0,t.jsx)(n.p,{children:"This function converts a base64URL-encoded string into a base64-encoded string."}),"\n",(0,t.jsxs)(n.p,{children:["It replaces the characters ",(0,t.jsx)(n.code,{children:"-"})," and ",(0,t.jsx)(n.code,{children:"_"})," with ",(0,t.jsx)(n.code,{children:"+"})," and ",(0,t.jsx)(n.code,{children:"/"})," and adds the ",(0,t.jsx)(n.code,{children:"="})," padding character(s) if any."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { convertBase64urlToBase64 } from '@foal/core';\n\nconst foo = convertBase64urlToBase64('bar');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"buffers--streams",children:"Buffers & Streams"}),"\n",(0,t.jsx)(n.h3,{id:"stream-to-buffer",children:"Stream to Buffer"}),"\n",(0,t.jsx)(n.p,{children:"This function converts a stream of buffers into a concatenated buffer. It returns a promise."}),"\n",(0,t.jsx)(n.p,{children:"If the stream emits an error, the promise is rejected with the emitted error."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);