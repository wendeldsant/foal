"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3155],{25588:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=o(74848),s=o(28453);const r={title:"The REST API",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},i=void 0,d={id:"tutorials/simple-todo-list/tuto-5-the-rest-api",title:"The REST API",description:"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both.",source:"@site/docs/tutorials/simple-todo-list/5-the-rest-api.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/5-the-rest-api",permalink:"/docs/tutorials/simple-todo-list/5-the-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/5-the-rest-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"The REST API",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},sidebar:"someSidebar",previous:{title:"The Shell Script create-todo",permalink:"/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"},next:{title:"Validation & Sanitization",permalink:"/docs/tutorials/simple-todo-list/6-validation-and-sanitization"}},a={},l=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Good, so far you have a frontend working properly and some todos in your database. Now it is time to code a REST API to link them both."}),"\n",(0,n.jsxs)(t.p,{children:["To do so, you are going to use a ",(0,n.jsx)(t.em,{children:"controller"}),". Controllers receive the HTTP requests and process them. They may call ",(0,n.jsx)(t.em,{children:"services"})," in the background to help them do this. We will not study the services in this tutorial."]}),"\n",(0,n.jsxs)(t.p,{children:["Open the file ",(0,n.jsx)(t.code,{children:"api.controller.ts"})," in the ",(0,n.jsx)(t.code,{children:"src/app/controllers/"})," directory and replace its content."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Controllers have special methods that define the routes and their respective handlers. These functions are decorated by one of the decorators ",(0,n.jsx)(t.code,{children:"Get"}),", ",(0,n.jsx)(t.code,{children:"Post"}),", ",(0,n.jsx)(t.code,{children:"Patch"}),", ",(0,n.jsx)(t.code,{children:"Put"})," or ",(0,n.jsx)(t.code,{children:"Delete"})," which define the http method and the path of the route."]}),"\n",(0,n.jsx)(t.p,{children:"In this case the controller responds with a 200 status and a mock data (the two fake todos)."}),"\n",(0,n.jsx)(t.p,{children:"Refresh your browser, you should see the two todos printed."}),"\n",(0,n.jsx)(t.p,{children:"Now, we would like to return the todos stored in the database. Update the code as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\n\nimport { Todo } from '../entities';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await Todo.find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you refresh your browser, you should now see the tasks that we created through the command line."}),"\n",(0,n.jsx)(t.p,{children:"Add the create and delete features."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await todo.save();\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await Todo.findOneBy({ id: ctx.request.params.id });\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await todo.remove();\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Context"})," object, which is passed to each route handler, contains the express ",(0,n.jsx)(t.a,{href:"https://expressjs.com/en/4x/api.html#req",children:"request object"}),". This represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on."]}),"\n",(0,n.jsx)(t.p,{children:"Now type a new todo in the input text and press Enter. The task appears in the todo list. Refresh the page, it should still be there. If you click on the checkbox, the todo is successfully deleted."}),"\n",(0,n.jsxs)(t.p,{children:["The last thing to know is how the ",(0,n.jsx)(t.code,{children:"ApiController"})," is bound to the request handler. You defined so far routes in this controller but never registered the controller anywhere. This is done in the ",(0,n.jsx)(t.code,{children:"app.controller.ts"})," file, the entry point of your application."]}),"\n",(0,n.jsxs)(t.p,{children:["Open the file ",(0,n.jsx)(t.code,{children:"app.controller.ts"})," in ",(0,n.jsx)(t.code,{children:"src/app"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n  ];\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This controller is the main controller of the application. It is directly called when a request comes in. It may have sub-controllers that go in the ",(0,n.jsx)(t.code,{children:"controllers/"})," directory."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var n=o(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);