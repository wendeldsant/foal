"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{44101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),o=t(28453);const s={title:"Installation",id:"tuto-1-installation",slug:"1-installation"},r=void 0,l={id:"tutorials/simple-todo-list/tuto-1-installation",title:"Installation",description:"In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks.",source:"@site/versioned_docs/version-2.x/tutorials/simple-todo-list/1-installation.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/1-installation",permalink:"/docs/2.x/tutorials/simple-todo-list/1-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/1-installation.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{title:"Installation",id:"tuto-1-installation",slug:"1-installation"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/2.x/"},next:{title:"Introduction",permalink:"/docs/2.x/tutorials/simple-todo-list/2-introduction"}},a={},c=[{value:"Create a New Project",id:"create-a-new-project",level:2},{value:"Start The Server",id:"start-the-server",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," 10 or greater"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-project",children:"Create a New Project"}),"\n",(0,i.jsxs)(n.p,{children:["First you need to install globaly the ",(0,i.jsx)(n.em,{children:"Command Line Interface (CLI)"})," of FoalTS. It will help you create a new project and generate files all along your development."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install -g @foal/cli\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then create a new application."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"foal createapp my-app\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Having trouble installing Foal? \ud83d\udc49 Checkout our ",(0,i.jsx)(n.a,{href:"./installation-troubleshooting",children:"troubleshooting page"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["This command generates a new directory with the basic structure of the new application. It also installs all the dependencies. Let's look at what ",(0,i.jsx)(n.code,{children:"createapp"})," created:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  ormconfig.js\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The outer ",(0,i.jsx)(n.code,{children:"my-app"})," root directory is just a container for your project."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"config/"})," directory contains configuration files for your different environments (production, test, development, e2e, etc)."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"node_modules/"})," directory contains all the prod and dev dependencies of your project."]}),"\n",(0,i.jsxs)(n.li,{children:["The static files are located in the ",(0,i.jsx)(n.code,{children:"public/"})," directory. They are usually images, CSS and client JavaScript files and are served directly when the server is running."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"src/"})," directory contains all the source code of the application.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The inner ",(0,i.jsx)(n.code,{children:"app/"})," directory includes the components of your server (controllers, services and hooks)."]}),"\n",(0,i.jsxs)(n.li,{children:["End-to-end tests are located in the ",(0,i.jsx)(n.code,{children:"e2e/"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["The inner ",(0,i.jsx)(n.code,{children:"scripts/"})," folder contains scripts intended to be called from the command line (ex: create-user)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ormconfig.js"})," file defines the configuration and credentials of the database(s) connection(s). They can also be passed through environment variables."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"package.json"})," lists the dependencies and commands of the project."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"tsconfig.*.json"})," files list the TypeScript compiler configuration for each ",(0,i.jsx)(n.code,{children:"npm"})," command."]}),"\n",(0,i.jsxs)(n.li,{children:["Finally the linting configuration can be found in the ",(0,i.jsx)(n.code,{children:".eslintrc.js"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TypeScript"})}),"\n",(0,i.jsxs)(n.p,{children:["The language used to develop a FoalTS application is ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),". It is a typed superset of JavaScript that compiles to plain JavaScript. The benefits of using TypeScript are many, but in summary, the language provides great tools and the future features of JavaScript."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-the-server",children:"Start The Server"}),"\n",(0,i.jsx)(n.p,{children:"Let's verify that the FoalTS project works. Run the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd my-app\nnpm run develop\n"})}),"\n",(0,i.jsx)(n.p,{children:"You've started the development server."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"development server"})," watches at your files and automatically compiles and reloads your code. You don\u2019t need to restart the server each time you make code changes. Note that it is only intended to be used in development, do not use it on production."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Port 3001 already in use?"})}),"\n",(0,i.jsxs)(n.p,{children:["You can define in ",(0,i.jsx)(n.code,{children:"config/default.json"})," which port the application is using."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"http://localhost:3001",children:"http://localhost:3001"})," in your browser. You should see the text ",(0,i.jsx)(n.em,{children:"Welcome on board"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Congratulations, you now have a server running!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);