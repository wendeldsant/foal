"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6979],{39929:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(74848),s=o(28453);const a={title:"La API REST",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},r=void 0,i={id:"tutorials/simple-todo-list/tuto-5-the-rest-api",title:"La API REST",description:"Bien, hasta ahora tiene un frontend que funciona correctamente y algunos todos en su base de datos. Ahora es el momento de codificar una API REST para vincular ambos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/5-the-rest-api.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/5-the-rest-api",permalink:"/es/docs/2.x/tutorials/simple-todo-list/5-the-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/5-the-rest-api.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"La API REST",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},sidebar:"someSidebar",previous:{title:"El Script Shell create-todo",permalink:"/es/docs/2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo"},next:{title:"Validaci\xf3n & Sanitizaci\xf3n",permalink:"/es/docs/2.x/tutorials/simple-todo-list/6-validation-and-sanitization"}},l={},d=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Bien, hasta ahora tiene un frontend que funciona correctamente y algunos todos en su base de datos. Ahora es el momento de codificar una API REST para vincular ambos."}),"\n",(0,n.jsxs)(t.p,{children:["Para ello, va a utilizar un ",(0,n.jsx)(t.em,{children:"controlador"}),". Los controladores reciben las peticiones HTTP y las procesan. Pueden llamar a ",(0,n.jsx)(t.em,{children:"servicios"})," en segundo plano para ayudarles a hacerlo. No estudiaremos los servicios en este tutorial."]}),"\n",(0,n.jsxs)(t.p,{children:["Abra el archivo ",(0,n.jsx)(t.code,{children:"api.controller.ts"})," en el directorio ",(0,n.jsx)(t.code,{children:"src/app/controllers/"})," y sustituya su contenido."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Los controladores tienen m\xe9todos especiales que definen las rutas y sus respectivos gestores. Estas funciones est\xe1n decoradas por uno de los decoradores ",(0,n.jsx)(t.code,{children:"Get"}),", ",(0,n.jsx)(t.code,{children:"Post"}),", ",(0,n.jsx)(t.code,{children:"Patch"}),", ",(0,n.jsx)(t.code,{children:"Put"})," o ",(0,n.jsx)(t.code,{children:"Delete"})," que definen el m\xe9todo http y la ruta."]}),"\n",(0,n.jsx)(t.p,{children:"En este caso el controlador responde con un estado 200 y un mock data (los dos falsos todos)."}),"\n",(0,n.jsx)(t.p,{children:"Refresque su navegador, deber\xeda ver los dos todos impresos."}),"\n",(0,n.jsx)(t.p,{children:"Ahora queremos devolver los todos almacenados en la base de datos. Actualice el c\xf3digo como sigue:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\n\nimport { Todo } from '../entities';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await Todo.find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Si actualiza su navegador, deber\xeda ver ahora las tareas que hemos creado a trav\xe9s de la l\xednea de comandos."}),"\n",(0,n.jsx)(t.p,{children:"A\xf1ada las funciones de creaci\xf3n y eliminaci\xf3n."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await todo.save();\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await todo.remove();\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["El objeto ",(0,n.jsx)(t.code,{children:"Context"}),", que se pasa a cada gestor de rutas, contiene el objeto ",(0,n.jsx)(t.a,{href:"https://expressjs.com/es/4x/api.html#req",children:"request"})," de Express. \xc9ste representa la petici\xf3n HTTP y tiene propiedades para leer los par\xe1metros, el cuerpo, las cabeceras HTTP de la petici\xf3n, etc."]}),"\n",(0,n.jsx)(t.p,{children:"Ahora escriba una nueva tarea en el texto de entrada y pulse Enter. La tarea aparece en la lista de tareas. Actualice la p\xe1gina, deber\xeda seguir ah\xed. Si hace clic en la casilla de verificaci\xf3n, la tarea se ha eliminado con \xe9xito."}),"\n",(0,n.jsxs)(t.p,{children:["Lo \xfaltimo que hay que saber es c\xf3mo se vincula el ",(0,n.jsx)(t.code,{children:"ApiController"})," con el gestor de peticiones. Usted ha definido hasta ahora las rutas en este controlador pero no ha registrado el controlador en ning\xfan sitio. Esto se hace en el archivo ",(0,n.jsx)(t.code,{children:"app.controller.ts"}),", el punto de entrada de su aplicaci\xf3n."]}),"\n",(0,n.jsxs)(t.p,{children:["Abra el archivo ",(0,n.jsx)(t.code,{children:"app.controller.ts"})," en ",(0,n.jsx)(t.code,{children:"src/app"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Este controlador es el principal de la aplicaci\xf3n. Se llama directamente cuando entra una solicitud. Puede tener subcontroladores que van en el directorio ",(0,n.jsx)(t.code,{children:"controllers/"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);