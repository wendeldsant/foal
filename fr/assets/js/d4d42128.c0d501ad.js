"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[578],{1165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(74848),o=n(28453);const r={title:"L'API REST",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},i=void 0,a={id:"tutorials/simple-todo-list/tuto-5-the-rest-api",title:"L'API REST",description:"Bien, pour l'instant, vous avez un frontend qui fonctionne correctement et quelques todos dans votre base de donn\xe9es. Il est maintenant temps de coder une API REST pour relier les deux.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/5-the-rest-api.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/5-the-rest-api",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/5-the-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/5-the-rest-api.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"L'API REST",id:"tuto-5-the-rest-api",slug:"5-the-rest-api"},sidebar:"someSidebar",previous:{title:"Le Script Shell create-todo",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo"},next:{title:"Validation & Assainissement",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/6-validation-and-sanitization"}},l={},d=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Bien, pour l'instant, vous avez un frontend qui fonctionne correctement et quelques todos dans votre base de donn\xe9es. Il est maintenant temps de coder une API REST pour relier les deux."}),"\n",(0,s.jsxs)(t.p,{children:["Pour ce faire, vous allez utiliser un ",(0,s.jsx)(t.em,{children:"contr\xf4leur"}),". Les contr\xf4leurs re\xe7oivent les requ\xeates HTTP et les traitent. Ils peuvent appeler des ",(0,s.jsx)(t.em,{children:"services"})," en arri\xe8re-plan pour les aider \xe0 le faire. Nous n'\xe9tudierons pas les services dans ce tutoriel."]}),"\n",(0,s.jsxs)(t.p,{children:["Ouvrez le fichier ",(0,s.jsx)(t.code,{children:"api.controller.ts"})," dans le r\xe9pertoire ",(0,s.jsx)(t.code,{children:"src/app/controllers/"})," et remplacez son contenu."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nexport class ApiController {\n\n  @Get('/todos')\n  getTodos() {\n    const todos = [\n      { id: 1, text: 'My task 1' },\n      { id: 2, text: 'My task 2' }\n    ];\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Les contr\xf4leurs disposent de m\xe9thodes sp\xe9ciales qui d\xe9finissent les routes et leurs gestionnaires respectifs. Ces fonctions sont d\xe9cor\xe9es par l'un des d\xe9corateurs ",(0,s.jsx)(t.code,{children:"Get"}),", ",(0,s.jsx)(t.code,{children:"Post"}),", ",(0,s.jsx)(t.code,{children:"Patch"}),", ",(0,s.jsx)(t.code,{children:"Put"})," ou ",(0,s.jsx)(t.code,{children:"Delete"})," qui d\xe9finissent la m\xe9thode HTTP et le chemin de la route."]}),"\n",(0,s.jsxs)(t.p,{children:["Dans ce cas, le contr\xf4leur r\xe9pond avec un statut 200 et une donn\xe9e ",(0,s.jsx)(t.em,{children:"mock"})," (les deux faux todos)."]}),"\n",(0,s.jsx)(t.p,{children:"Rafra\xeechissez votre navigateur, vous devriez voir les deux todos affich\xe9s."}),"\n",(0,s.jsx)(t.p,{children:"Maintenant, nous aimerions retourner les todos stock\xe9s dans la base de donn\xe9es. Mettez \xe0 jour le code comme suit :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import {\n  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,\n  HttpResponseNotFound, HttpResponseOK, Post\n} from '@foal/core';\n\nimport { Todo } from '../entities';\n\nexport class ApiController {\n\n  @Get('/todos')\n  async getTodos() {\n    const todos = await Todo.find();\n    return new HttpResponseOK(todos);\n  }\n\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Si vous rafra\xeechissez votre navigateur, vous devriez maintenant voir les t\xe2ches que nous avons cr\xe9\xe9es avec la ligne de commande."}),"\n",(0,s.jsx)(t.p,{children:"Ajoutez les fonctionnalit\xe9s de cr\xe9ation et de suppression."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"  @Post('/todos')\n  async postTodo(ctx: Context) {\n    // Create a new todo with the body of the HTTP request.\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    // Save the todo in the database.\n    await todo.save();\n\n    // Return the new todo with the id generated by the database. The status is 201.\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  async deleteTodo(ctx: Context) {\n    // Get the todo with the id given in the URL if it exists.\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n\n    // Return a 404 Not Found response if no such todo exists.\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n\n    // Remove the todo from the database.\n    await todo.remove();\n\n    // Returns an successful empty response. The status is 204.\n    return new HttpResponseNoContent();\n  }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["L'objet ",(0,s.jsx)(t.code,{children:"Context"}),", qui est transmis \xe0 chaque gestionnaire de route, contient l'",(0,s.jsx)(t.a,{href:"https://expressjs.com/en/4x/api.html#req",children:"objet requ\xeate d'Express"}),". Celui-ci repr\xe9sente la requ\xeate HTTP et poss\xe8de des propri\xe9t\xe9s pour les param\xe8tres d'URL de la requ\xeate, son corps, ses en-t\xeates HTTP, etc."]}),"\n",(0,s.jsx)(t.p,{children:"Tapez maintenant un nouveau todo dans le champs de texte et appuyez sur Entr\xe9e. La t\xe2che appara\xeet dans la liste des t\xe2ches. Rafra\xeechissez la page, elle devrait toujours y \xeatre. Si vous cliquez sur la case \xe0 cocher, le todo est supprim\xe9 avec succ\xe8s."}),"\n",(0,s.jsxs)(t.p,{children:["La derni\xe8re chose \xe0 savoir est la mani\xe8re dont l'",(0,s.jsx)(t.code,{children:"ApiController"})," est li\xe9 au gestionnaire de requ\xeates. Vous avez d\xe9fini jusqu'\xe0 pr\xe9sent des routes dans ce contr\xf4leur mais vous n'avez jamais li\xe9 le contr\xf4leur nulle part. Cela se fait dans le fichier ",(0,s.jsx)(t.code,{children:"app.controller.ts"}),", le point d'entr\xe9e de votre application."]}),"\n",(0,s.jsxs)(t.p,{children:["Ouvrez le fichier ",(0,s.jsx)(t.code,{children:"app.controller.ts"})," dans ",(0,s.jsx)(t.code,{children:"src/app"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Ce contr\xf4leur est le contr\xf4leur principal de l'application. Il est directement appel\xe9 lorsqu'une requ\xeate est re\xe7ue. Il peut avoir des sous-contr\xf4leurs qui vont dans le r\xe9pertoire ",(0,s.jsx)(t.code,{children:"controllers/"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);