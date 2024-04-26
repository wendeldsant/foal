"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8997],{59891:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(74848),i=s(28453);const r={title:"Introducci\xf3n",id:"tuto-2-introduction",slug:"2-introduction"},o=void 0,l={id:"tutorials/simple-todo-list/tuto-2-introduction",title:"Introducci\xf3n",description:"La aplicaci\xf3n que crear\xe1 es una simple lista de tareas. Consiste en una parte frontend que ya ha sido escrita para usted y una parte backend que ser\xe1 el tema de este tutorial.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/2-introduction.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/2-introduction",permalink:"/es/docs/2.x/tutorials/simple-todo-list/2-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/2-introduction.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{title:"Introducci\xf3n",id:"tuto-2-introduction",slug:"2-introduction"},sidebar:"someSidebar",previous:{title:"Instalaci\xf3n",permalink:"/es/docs/2.x/tutorials/simple-todo-list/1-installation"},next:{title:"El Modelo Todo",permalink:"/es/docs/2.x/tutorials/simple-todo-list/3-the-todo-model"}},a={},d=[];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"La aplicaci\xf3n que crear\xe1 es una simple lista de tareas. Consiste en una parte frontend que ya ha sido escrita para usted y una parte backend que ser\xe1 el tema de este tutorial."}),"\n",(0,t.jsxs)(n.p,{children:["Primero descargue los archivos html, css y js haciendo clic ",(0,t.jsx)(n.a,{href:"https://foalts.org/simple-todo-list.zip",children:"aqu\xed"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Ponga los archivos descargados y descomprimidos en el directorio est\xe1tico ",(0,t.jsx)(n.code,{children:"public/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"El c\xf3digo que se ejecuta en el navegador har\xe1 llamadas a la API del servidor para ver, crear y eliminar las tareas."}),"\n",(0,t.jsx)(n.p,{children:"Actualice la p\xe1gina. Ahora deber\xeda ver esto:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Browser view",src:s(55797).A+"",width:"902",height:"882"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Como todav\xeda no ha implementado la API del servidor, el frontend obtiene un error al recuperar las tareas. Aparece en la parte inferior de la p\xe1gina. Si intenta escribir algo en la entrada de texto y pulsa Enter para crear una nueva tarea, tambi\xe9n obtendr\xe1 un error."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Veamos los detalles de la API que queremos construir."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enumerar las tareas"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Solicitud:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["m\xe9todo: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n",(0,t.jsxs)(n.li,{children:["ruta: ",(0,t.jsx)(n.code,{children:"/api/todos"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Respuesta:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"estado: 200 (OK)"}),"\n",(0,t.jsxs)(n.li,{children:["cuerpo:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  { "id": 1, "text": "Task 1" },\n  { "id": 2, "text": "Task 2" },\n]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Crear una tarea"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Solicitud:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["m\xe9todo: ",(0,t.jsx)(n.code,{children:"POST"})]}),"\n",(0,t.jsxs)(n.li,{children:["ruta: ",(0,t.jsx)(n.code,{children:"/api/todos"})]}),"\n",(0,t.jsxs)(n.li,{children:["cuerpo:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "text": "Task 3"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Respuesta:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"estado: 201 (Created)"}),"\n",(0,t.jsxs)(n.li,{children:["cuerpo:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": 3,\n  "text": "Task 3"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Eliminar una tarea"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Solicitud:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["m\xe9todo: ",(0,t.jsx)(n.code,{children:"DELETE"})]}),"\n",(0,t.jsxs)(n.li,{children:["ruta: ",(0,t.jsx)(n.code,{children:"/api/todos/3"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Respuesta:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"estado: 204 (No Content)"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},55797:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/app-b81e09e80e2feb22c160df3e54d2106e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);