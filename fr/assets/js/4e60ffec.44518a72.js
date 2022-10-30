"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(b,l(l({ref:t},d),{},{components:n})):o.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(67294),a=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),a=n(67294),r=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:m,values:b,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:g.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[S,C]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==S&&v.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),o=v[n].value;o!==S&&(T(t),C(o),null!=f&&N(f,String(o)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=O.indexOf(e.currentTarget)+1;n=null!=(o=O[t])?o:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:j,onClick:j},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},45823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={title:"Visual Studio Code",sidebar_label:"VSCode"},s=void 0,u={unversionedId:"development-environment/vscode",id:"development-environment/vscode",title:"Visual Studio Code",description:"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development-environment/vscode.md",sourceDirName:"development-environment",slug:"/development-environment/vscode",permalink:"/fr/docs/development-environment/vscode",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/vscode.md",tags:[],version:"current",frontMatter:{title:"Visual Studio Code",sidebar_label:"VSCode"},sidebar:"someSidebar",previous:{title:"Linting & Style de Code",permalink:"/fr/docs/development-environment/linting-and-code-style"},next:{title:"Introduction",permalink:"/fr/docs/testing/introduction"}},d={},p=[{value:"Configuring the linting",id:"configuring-the-linting",level:2},{value:"Debugging with VS Code",id:"debugging-with-vs-code",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.")),(0,a.kt)("p",{parentName:"blockquote"},"Source:  ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs"},"https://code.visualstudio.com/docs"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," has become ",(0,a.kt)("strong",{parentName:"p"},"one of the most popular code editors in the JavaScript ecosystem"),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."),(0,a.kt)("p",null,"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."),(0,a.kt)("h2",{id:"configuring-the-linting"},"Configuring the linting"),(0,a.kt)("p",null,"In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," extension."),(0,a.kt)("p",null,"It can be installed by launching ",(0,a.kt)("em",{parentName:"p"},"VS Code Quick Open")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"P"),"), pasting the following command, and pressing enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ext install dbaeumer.vscode-eslint\n")),(0,a.kt)("p",null,"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("em",{parentName:"p"},"Command Palette")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"P"),") and type ",(0,a.kt)("inlineCode",{parentName:"p"},"Open Settings (JSON)"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Open VSCode Settings",src:n(18077).Z,width:"2560",height:"1600"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then extend the settings to add the options below."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n')))),(0,a.kt)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),(0,a.kt)("p",null,"Add the following two files in a new ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/")," directory at the root of your project:"),(0,a.kt)(r.Z,{defaultValue:"tasks",values:[{label:"tasks.json",value:"tasks"},{label:"launch.json",value:"launch"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"tasks",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // See https://go.microsoft.com/fwlink/?LinkId=733558\n  // for the documentation about the tasks.json format\n  "version": "2.0.0",\n  "tasks": [\n    {\n      "type": "npm",\n      "script": "build",\n      "label": "build",\n      "problemMatcher": []\n    },\n    {\n      "type": "npm",\n      "script": "build:test",\n      "label": "build:test",\n      "problemMatcher": []\n    },\n    {\n      "type": "npm",\n      "script": "build:e2e",\n      "label": "build:e2e",\n      "problemMatcher": []\n    }\n  ]\n}\n'))),(0,a.kt)(l.Z,{value:"launch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Start the server",\n      "program": "${workspaceFolder}/build/index.js",\n      "preLaunchTask": "build",\n      "outFiles": [\n        "${workspaceFolder}/build/**/*.js"\n      ],\n      "internalConsoleOptions": "openOnSessionStart"\n    },\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Run unit tests",\n      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",\n      "args": [\n        "--timeout",\n        "999999",\n        "--colors",\n        "--file",\n        "./build/test.js",\n        "${workspaceFolder}/build/**/*.spec.js"\n      ],\n      "preLaunchTask": "build:test",\n      "outFiles": [\n        "${workspaceFolder}/build/**/*.js"\n      ],\n      "internalConsoleOptions": "openOnSessionStart"\n    },\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Run e2e tests",\n      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",\n      "args": [\n        "--timeout",\n        "999999",\n        "--colors",\n        "--file",\n        "./build/e2e.js",\n        "${workspaceFolder}/build/e2e/**/*.js"\n      ],\n      "preLaunchTask": "build:e2e",\n      "outFiles": [\n        "${workspaceFolder}/build/**/*.js"\n      ],\n      "internalConsoleOptions": "openOnSessionStart"\n    }\n  ]\n}\n')))),(0,a.kt)("p",null,"Now you can add a breakpoint in your code and start the app in debug mode."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debugging demo",src:n(79643).Z,width:"800",height:"500"})),(0,a.kt)("p",null,"The generated files also include configurations to run your unit and end-to-end tests."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Debug configurations",src:n(92064).Z,width:"634",height:"214"})))}m.isMDXComponent=!0},92064:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"},79643:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},18077:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"}}]);