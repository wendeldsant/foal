"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5812],{45947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const s={title:"Visual Studio Code",sidebar_label:"VSCode"},d=void 0,r={id:"development-environment/vscode",title:"Visual Studio Code",description:"--",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/development-environment/vscode.md",sourceDirName:"development-environment",slug:"/development-environment/vscode",permalink:"/fr/docs/2.x/development-environment/vscode",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/development-environment/vscode.md",tags:[],version:"2.x",frontMatter:{title:"Visual Studio Code",sidebar_label:"VSCode"},sidebar:"someSidebar",previous:{title:"Linting & Style de Code",permalink:"/fr/docs/2.x/development-environment/linting-and-code-style"},next:{title:"Introduction",permalink:"/fr/docs/2.x/testing/introduction"}},c={},l=[{value:"Configuring the linting",id:"configuring-the-linting",level:2},{value:"Debugging with VS Code",id:"debugging-with-vs-code",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"--"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js."})}),"\n",(0,i.jsxs)(n.p,{children:["Source:  ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs",children:"https://code.visualstudio.com/docs"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"})," has become ",(0,i.jsx)(n.strong,{children:"one of the most popular code editors in the JavaScript ecosystem"}),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."]}),"\n",(0,i.jsx)(n.p,{children:"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-linting",children:"Configuring the linting"}),"\n",(0,i.jsxs)(n.p,{children:["In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",(0,i.jsx)(n.code,{children:"ESLint"})," extension."]}),"\n",(0,i.jsxs)(n.p,{children:["It can be installed by launching ",(0,i.jsx)(n.em,{children:"VS Code Quick Open"})," (",(0,i.jsx)(n.code,{children:"Ctrl"}),"+",(0,i.jsx)(n.code,{children:"P"})," or ",(0,i.jsx)(n.code,{children:"Cmd"}),"+",(0,i.jsx)(n.code,{children:"P"}),"), pasting the following command, and pressing enter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ext install dbaeumer.vscode-eslint\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.em,{children:"Command Palette"})," (",(0,i.jsx)(n.code,{children:"Ctrl"}),"+",(0,i.jsx)(n.code,{children:"Shift"}),"+",(0,i.jsx)(n.code,{children:"P"})," or ",(0,i.jsx)(n.code,{children:"Cmd"}),"+",(0,i.jsx)(n.code,{children:"Shift"}),"+",(0,i.jsx)(n.code,{children:"P"}),") and type ",(0,i.jsx)(n.code,{children:"Open Settings (JSON)"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Open VSCode Settings",src:t(55076).A+"",width:"2560",height:"1600"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Then extend the settings to add the options below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"debugging-with-vs-code",children:"Debugging with VS Code"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command to create the suitable debug config files."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"foal generate vscode-config\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you can add a breakpoint in your code and start the app in debug mode."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debugging demo",src:t(61765).A+"",width:"800",height:"500"})}),"\n",(0,i.jsx)(n.p,{children:"The generated files also include configurations to run your unit and end-to-end tests."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debug configurations",src:t(9044).A+"",width:"634",height:"214"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9044:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"},61765:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},55076:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);