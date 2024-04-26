"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5528],{6508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(74848),o=n(28453);const i={title:"Introduction"},l=void 0,r={id:"tutorials/mongodb-todo-list/tuto-2-introduction",title:"Introduction",description:"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-2-introduction.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-2-introduction",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-2-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-2-introduction.md",tags:[],version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-1-installation"},next:{title:"The Todo Model",permalink:"/fr/docs/1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model"}},d={},c=[];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial."}),"\n",(0,s.jsxs)(t.p,{children:["First download the html, css and js files by clicking ",(0,s.jsx)(t.a,{href:"https://foalts.org/mongodb-todo-list.zip",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Put the downloaded files in the static directory ",(0,s.jsx)(t.code,{children:"public/"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The code executed in the browser will make API calls to the server to view, create and delete the tasks."}),"\n",(0,s.jsx)(t.p,{children:"Refresh the page. You should now see this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Browser view",src:n(16101).A+"",width:"902",height:"882"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"As you haven't implemented yet the server API, the frontend gets an error when fetching the to-dos. It is displayed in the bottom of the page. If you try to type something in the text input and press Enter to create a new task, you'll get an error as well."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Let's see the details of the API we want to build."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"List the tasks"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Request:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["method: ",(0,s.jsx)(t.code,{children:"GET"})]}),"\n",(0,s.jsxs)(t.li,{children:["path: ",(0,s.jsx)(t.code,{children:"/api/todos"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Response:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"status: 200 (OK)"}),"\n",(0,s.jsxs)(t.li,{children:["body:","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n  { "id": 1, "text": "Task 1" },\n  { "id": 2, "text": "Task 2" },\n]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Create a task"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Request:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["method: ",(0,s.jsx)(t.code,{children:"POST"})]}),"\n",(0,s.jsxs)(t.li,{children:["path: ",(0,s.jsx)(t.code,{children:"/api/todos"})]}),"\n",(0,s.jsxs)(t.li,{children:["body:","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "text": "Task 3"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Response:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"status: 201 (Created)"}),"\n",(0,s.jsxs)(t.li,{children:["body:","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": 3,\n  "text": "Task 3"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Delete a task"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Request:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["method: ",(0,s.jsx)(t.code,{children:"DELETE"})]}),"\n",(0,s.jsxs)(t.li,{children:["path: ",(0,s.jsx)(t.code,{children:"/api/todos/3"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Response:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"status: 204 (No Content)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},16101:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/app-b81e09e80e2feb22c160df3e54d2106e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);