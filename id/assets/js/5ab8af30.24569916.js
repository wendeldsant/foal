"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5771],{56276:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(74848),s=o(28453);const r={title:"Generate Tokens"},i=void 0,c={id:"common/generate-tokens",title:"Generate Tokens",description:"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/common/generate-tokens.md",sourceDirName:"common",slug:"/common/generate-tokens",permalink:"/id/docs/2.x/common/generate-tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/common/generate-tokens.md",tags:[],version:"2.x",frontMatter:{title:"Generate Tokens"},sidebar:"someSidebar",previous:{title:"Logging & Debugging",permalink:"/id/docs/2.x/common/logging-and-debugging"},next:{title:"Conversions",permalink:"/id/docs/2.x/common/conversions"}},a={},d=[{value:"Unsigned Tokens (simple case)",id:"unsigned-tokens-simple-case",level:2},{value:"Signed Tokens",id:"signed-tokens",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In many situations, we need to generate tokens and then verify them (for example in the flow of a password reset). This document shows how to do so with FoalTS."}),"\n",(0,t.jsx)(n.h2,{id:"unsigned-tokens-simple-case",children:"Unsigned Tokens (simple case)"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"generateToken"})," function generates a cryptographically secure random token encoded in base64url (128 bits)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { generateToken } from '@foal/core';\n\nconst token = await generateToken();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"signed-tokens",children:"Signed Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["You can also generate a token using a secret. The secret is used to ",(0,t.jsx)(n.em,{children:"sign"})," the token to provide extra security. It must be encoded in base64. You can generate one with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal createsecret\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Generate a signed token"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { generateSignedToken } from '@foal/core';\n\nconst token = await generateSignedToken(secret);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Verify and read a signed token"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { verifySignedToken } from '@foal/core';\n\nconst signedTokenToVerify = 'xxx.yyy';\nconst result = await verifySignedToken(signedTokenToVerify, secret);\nif (result === false) {\n  console.log('incorrect signature');\n} else {\n  console.log('The token is ', result);\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);