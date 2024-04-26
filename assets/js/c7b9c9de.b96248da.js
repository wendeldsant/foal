"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2075],{70570:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(74848),r=n(28453);const o={title:"Password Management",sidebar_label:"Passwords"},a=void 0,i={id:"authentication-and-access-control/password-management",title:"Password Management",description:"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords.",source:"@site/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/password-management",permalink:"/docs/1.x/authentication-and-access-control/password-management",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/authentication-and-access-control/password-management.md",tags:[],version:"1.x",frontMatter:{title:"Password Management",sidebar_label:"Passwords"},sidebar:"someSidebar",previous:{title:"User Class and create-user Script",permalink:"/docs/1.x/authentication-and-access-control/user-class"},next:{title:"Session Tokens (authentication)",permalink:"/docs/1.x/authentication-and-access-control/session-tokens"}},d={},c=[{value:"The <code>hashPassword</code> function",id:"the-hashpassword-function",level:2},{value:"The <code>verifyPassword</code> function",id:"the-verifypassword-function",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Every application must store passwords using a cryptographic technique. FoalTS provides two functions to hash and verify passwords."}),"\n",(0,t.jsxs)(s.h2,{id:"the-hashpassword-function",children:["The ",(0,t.jsx)(s.code,{children:"hashPassword"})," function"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"hashPassword"})," utility uses the ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/PBKDF2",children:"PBKDF2"})," algorithm with a SHA256 hash. It takes as parameters the password in plain text and an optional ",(0,t.jsx)(s.code,{children:"options"})," object. It returns a promise which value is a password hash."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The function generates a unique cryptographically-strong random salt for each password. This salt is returned by the function beside the password hash."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"plainTextPassword"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"options"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"{ legacy?: boolean }"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"{}"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Return type"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"Promise<string>\n"})}),"\n",(0,t.jsxs)(s.h2,{id:"the-verifypassword-function",children:["The ",(0,t.jsx)(s.code,{children:"verifyPassword"})," function"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"verifyPassword"})," takes three arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"the password to check in plain text,"}),"\n",(0,t.jsx)(s.li,{children:"the password hash (usually fetched from the database),"}),"\n",(0,t.jsxs)(s.li,{children:["and an optional ",(0,t.jsx)(s.code,{children:"options"})," object (see below)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Default value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"plainTextPassword"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"passwordHash"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"options"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"{ legacy?: boolean }"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"{}"})})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Return type"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"Promise<boolean>\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["If you used the ",(0,t.jsx)(s.code,{children:"parsePassword"})," function in previous versions of Foal (< 0.7.0), you must pass the ",(0,t.jsx)(s.code,{children:"legacy: true"})," option to ",(0,t.jsx)(s.code,{children:"verifyPassword"})," and ",(0,t.jsx)(s.code,{children:"hashPassword"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(96540);const r={},o=t.createContext(r);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);