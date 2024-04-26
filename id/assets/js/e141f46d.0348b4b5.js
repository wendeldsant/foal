"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[268],{66920:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=o(74848),n=o(28453);const r={title:"Todos & Ownership"},i=void 0,d={id:"tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",title:"Todos & Ownership",description:"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks.",source:"@site/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",sourceDirName:"tutorials/multi-user-todo-list",slug:"/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/multi-user-todo-list/tuto-6-todos-and-ownership.md",tags:[],version:"1.x",frontMatter:{title:"Todos & Ownership"},sidebar:"someSidebar",previous:{title:"Auth Controllers and Hooks",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-5-auth-controllers-and-hooks"},next:{title:"The Sign Up Page",permalink:"/id/docs/1.x/tutorials/multi-user-todo-list/tuto-7-the-signup-page"}},l={},c=[];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Currently the API returns everyone's todos to each user. This is not the expected behavior. We would like that each user has access to only his or her tasks."}),"\n",(0,s.jsxs)(t.p,{children:["Go back to the ",(0,s.jsx)(t.code,{children:"ApiController"})," and update the ",(0,s.jsx)(t.code,{children:"getTodos"})," route."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"  @Get('/todos')\n  async getTodos(ctx: Context) {\n    const todos = await getRepository(Todo).find({ owner: ctx.user });\n    return new HttpResponseOK(todos);\n  }\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Context"})," object contains four properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["the express ",(0,s.jsx)(t.a,{href:"https://expressjs.com/en/4x/api.html#req",children:"request object"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["an empty object called ",(0,s.jsx)(t.code,{children:"state"})," which can be used to share data between hooks,"]}),"\n",(0,s.jsxs)(t.li,{children:["a ",(0,s.jsx)(t.code,{children:"session"})," object,"]}),"\n",(0,s.jsxs)(t.li,{children:["and the ",(0,s.jsx)(t.code,{children:"user"})," object that is defined if a user logged in."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Refresh the todo-list page. You should only see the todos of the user with whom you logged in."}),"\n",(0,s.jsx)(t.p,{children:"Yet, if you try to create a new to-do, it will disappear upon page refresh. This is perfectly normal since we do not specify its owner upon creation."}),"\n",(0,s.jsx)(t.p,{children:"As for the delete feature, you also need to restrict its access. Users should only be able to delete their todos."}),"\n",(0,s.jsx)(t.p,{children:"Update the api controller."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"  @Post('/todos')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      text: { type: 'string' }\n    },\n    required: [ 'text' ],\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n    // Make the current user the owner of the todo.\n    todo.owner = ctx.user;\n\n    await getRepository(Todo).save(todo);\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await getRepository(Todo).findOne({\n      id: +ctx.request.params.id,\n      // Do not return the todo if it does not belong to the current user.\n      owner: ctx.user\n    });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await getRepository(Todo).remove(todo);\n    return new HttpResponseNoContent();\n  }\n"})}),"\n",(0,s.jsx)(t.p,{children:"The application is now working properly."})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var s=o(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);