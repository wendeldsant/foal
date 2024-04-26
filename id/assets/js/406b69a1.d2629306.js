"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2650],{74009:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(74848),i=n(28453);const a={title:"Validation & Sanitization",id:"tuto-6-validation-and-sanitization",slug:"6-validation-and-sanitization"},s=void 0,d={id:"tutorials/simple-todo-list/tuto-6-validation-and-sanitization",title:"Validation & Sanitization",description:"Currently inputs received by the server are not checked. Everyone could send anything when requesting POST /api/todos. That's why client inputs cannot be trusted.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/6-validation-and-sanitization.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/6-validation-and-sanitization",permalink:"/id/docs/2.x/tutorials/simple-todo-list/6-validation-and-sanitization",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/6-validation-and-sanitization.md",tags:[],version:"2.x",sidebarPosition:6,frontMatter:{title:"Validation & Sanitization",id:"tuto-6-validation-and-sanitization",slug:"6-validation-and-sanitization"},sidebar:"someSidebar",previous:{title:"The REST API",permalink:"/id/docs/2.x/tutorials/simple-todo-list/5-the-rest-api"},next:{title:"Unit Testing",permalink:"/id/docs/2.x/tutorials/simple-todo-list/7-unit-testing"}},r={},l=[];function c(t){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Currently inputs received by the server are not checked. Everyone could send anything when requesting ",(0,o.jsx)(e.code,{children:"POST /api/todos"}),". That's why client inputs cannot be trusted."]}),"\n",(0,o.jsxs)(e.p,{children:["You will use the ",(0,o.jsx)(e.code,{children:"ValidateBody"})," and ",(0,o.jsx)(e.code,{children:"ValidatePathParam"})," hooks to validate and sanitize incoming data."]}),"\n",(0,o.jsxs)(e.p,{children:["A ",(0,o.jsx)(e.em,{children:"hook"})," is a decorator that is attached to a route handler (a controller method). It is executed before the method and is therefore particularly suitable for validation or access control."]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"ValidateBody"})," and ",(0,o.jsx)(e.code,{children:"ValidatePathParam"})," check respectively the ",(0,o.jsx)(e.code,{children:"body"})," and ",(0,o.jsx)(e.code,{children:"params"})," properties of the request object. They take a schema as unique argument."]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["FoalTS uses ",(0,o.jsx)(e.a,{href:"https://github.com/epoberezkin/ajv",children:"Ajv"}),", a fast JSON Schema validator, to define its schemas."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Let's add validation and sanitization to your application. In fact, you have already defined the todo schema in the ",(0,o.jsx)(e.code,{children:"create-todo"})," script earlier."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"import {\n  ...\n  ValidateBody, ValidatePathParam\n} from '@foal/core';\n\nexport class ApiController {\n\n  ...\n\n  @Post('/todos')\n  @ValidateBody({\n    // Every additional properties that are not defined in the \"properties\"\n    // object should be removed.\n    additionalProperties: false,\n    properties: {\n      // The \"text\" property of ctx.request.body should be a string if it exists.\n      text: { type: 'string' }\n    },\n    // The property \"text\" is required.\n    required: [ 'text' ],\n    // The body request should be an object once parsed by the framework.\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    await todo.save();\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  // The id should be a number. If it is not, the hook returns a \"400 - Bad Request\" error.\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await todo.remove();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>d});var o=n(96540);const i={},a=o.createContext(i);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);