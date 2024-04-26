"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3633],{438:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(74848),a=i(28453);const o={title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},s=void 0,r={id:"tutorials/real-world-example-with-react/tuto-1-introduction",title:"Introduction",description:"This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide How to build a Simple To-Do List and that you have a basic knowledge of React.",source:"@site/docs/tutorials/real-world-example-with-react/1-introduction.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/docs/tutorials/real-world-example-with-react/1-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Database Set Up",permalink:"/docs/tutorials/real-world-example-with-react/2-database-set-up"}},l={},c=[{value:"Application Overview",id:"application-overview",level:2},{value:"Get Started",id:"get-started",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the first guide ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"/docs/tutorials/simple-todo-list/1-installation",children:"How to build a Simple To-Do List"})})," and that you have a basic knowledge of React."]}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, you will learn to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"establish a connection with MySQL or Postgres,"}),"\n",(0,n.jsx)(t.li,{children:"provide credentials to the application in a secure way,"}),"\n",(0,n.jsx)(t.li,{children:"create models with many-to-one relations,"}),"\n",(0,n.jsx)(t.li,{children:"use a query builder,"}),"\n",(0,n.jsx)(t.li,{children:"generate an interface to test your API (Swagger UI),"}),"\n",(0,n.jsx)(t.li,{children:"fix same-origin policy errors,"}),"\n",(0,n.jsx)(t.li,{children:"allow users to log in and register with an email and a password,"}),"\n",(0,n.jsx)(t.li,{children:"authenticate users on the frontend and the backend,"}),"\n",(0,n.jsx)(t.li,{children:"manage access control,"}),"\n",(0,n.jsx)(t.li,{children:"protect against CSRF attacks,"}),"\n",(0,n.jsx)(t.li,{children:"upload and save files,"}),"\n",(0,n.jsx)(t.li,{children:"allow users to connect with a social provider (Google),"}),"\n",(0,n.jsx)(t.li,{children:"and build the application for production."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["For the sake of simplicity, the front-end application will not use a state management library (such as ",(0,n.jsx)(t.a,{href:"https://redux.js.org/",children:"redux"}),"). But you can of course add one if you wish. The logic to follow will remain mainly the same."]})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"application-overview",children:"Application Overview"}),"\n",(0,n.jsx)(t.p,{children:"The application you will create is a social website where users can share interesting links to tutorials. All posts will be public, so no authentication will be required to view them. Publishing a post, on the other hand, will require the creation of an account."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Feed page"}),"\n",(0,n.jsx)(t.img,{alt:"Feed page",src:i(56823).A+"",width:"2560",height:"1452"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Profile page"}),"\n",(0,n.jsx)(t.img,{alt:"Profile page",src:i(89012).A+"",width:"2560",height:"1450"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Registration and login pages"}),"\n",(0,n.jsx)(t.img,{alt:"Registration and login pages",src:i(82049).A+"",width:"2560",height:"1448"})]}),"\n",(0,n.jsx)(t.h2,{id:"get-started",children:"Get Started"}),"\n",(0,n.jsx)(t.p,{children:"Let's get started. First of all, create a new directory."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mkdir foal-react-tuto\n"})}),"\n",(0,n.jsx)(t.p,{children:"Generate the backend application."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd foal-react-tuto\nfoal createapp backend-app\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then start the development server."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd backend-app\nnpm run dev\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Go to ",(0,n.jsx)(t.a,{href:"http://localhost:3001",children:"http://localhost:3001"})," in your browser. You should see the ",(0,n.jsx)(t.em,{children:"Welcome on board"})," message."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},56823:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},89012:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},82049:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);