"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5205],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=r.createContext({}),u=function(t){var e=r.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(o),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(f,a(a({ref:e},c),{},{components:o})):r.createElement(f,a({ref:e},c))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30752:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={title:"Introduction"},a=void 0,l={unversionedId:"tutorials/multi-user-todo-list/tuto-1-Introduction",id:"version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction",title:"Introduction",description:"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-1-Introduction",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/tuto-1-Introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-1-Introduction.md",tags:[],version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"Unit Testing",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-7-unit-testing"},next:{title:"The User & Todo Models",permalink:"/fr/docs/1.x/tutorials/multi-user-todo-list/tuto-2-the-user-and-todo-models"}},s={},u=[],c={toc:u};function p(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial you will learn how to manage users, authentication and authorization in FoalTS. You will also have a quick overview of end-to-end testing."),(0,n.kt)("p",null,"For that, you are going to create a multi-user to-do list. It will extend the application created in the previous tutorial ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-1-installation"},"Simple To-Do List")," that you must follow before going through this one."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The source code of the first tutorial is available ",(0,n.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list-source-code-v1.zip"},"here"),".")),(0,n.kt)("p",null,"The application will have three pages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a sign up page where users can create a new account with an email and a password,"),(0,n.kt)("li",{parentName:"ul"},"a login page that expects an email and a password to sign in,"),(0,n.kt)("li",{parentName:"ul"},"and the todo-list page where the tasks are listed, created and deleted.")),(0,n.kt)("p",null,"Each user will have her/his own todos and will not be able to view, create or delete other people's todos."),(0,n.kt)("p",null,"The pages look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sign up page",src:o(94685).Z,width:"914",height:"1002"}),"\n",(0,n.kt)("img",{alt:"Login page",src:o(65565).Z,width:"914",height:"1002"}),"\n",(0,n.kt)("img",{alt:"To-do list page",src:o(62598).Z,width:"914",height:"1002"})),(0,n.kt)("p",null,"Let's get started!"))}p.isMDXComponent=!0},65565:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/signin-d9b7a51ae39f660381153f16f7735a7f.png"},94685:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/signup-24e5a30a94173658dc445232caddae9b.png"},62598:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/todo-list-f4c43484fae484238862186d723f3934.png"}}]);