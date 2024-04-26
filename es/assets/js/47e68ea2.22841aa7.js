"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6209],{22832:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(74848),s=o(28453);const r={title:"The Shell Script create-todo"},i=void 0,c={id:"tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo.md",sourceDirName:"tutorials/mongodb-todo-list",slug:"/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/mongodb-todo-list/tuto-4-the-shell-script-create-todo.md",tags:[],version:"1.x",frontMatter:{title:"The Shell Script create-todo"},sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-3-the-todo-model"},next:{title:"The REST API",permalink:"/es/docs/1.x/tutorials/mongodb-todo-list/tuto-5-the-rest-api"}},a={},d=[];function l(e){const t={blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Now it is time to populate the database with some tasks."}),"\n",(0,n.jsx)(t.p,{children:"You could run the command line interface of your database and enter some MongoDB queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases."}),"\n",(0,n.jsxs)(t.p,{children:["That's why you are going to create and use a ",(0,n.jsx)(t.em,{children:"shell script"})," instead."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"foal generate script create-todo\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.em,{children:"shell script"})," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.code,{children:"schema"})," object which defines the specification of the command line arguments,"]}),"\n",(0,n.jsxs)(t.li,{children:["and a ",(0,n.jsx)(t.code,{children:"main"})," function which gets these arguments as an object and executes some code."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Open the new generated file in the ",(0,n.jsx)(t.code,{children:"src/scripts"})," directory and update its content."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// 3p\nimport { Config } from '@foal/core';\nimport { connect, disconnect } from 'mongoose';\n\n// App\nimport { Todo } from '../app/models';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const uri = Config.getOrThrow('mongodb.uri', 'string');\n  connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });\n\n  // Create a new task with the text given in the command line.\n  const todo = new Todo();\n  todo.text = args.text;\n\n  try {\n  // Save the task in the database and then display it in the console.\n    console.log(\n      await todo.save()\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    disconnect();\n  }\n}\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"Build the script."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm run build:scripts\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then run the script to create tasks in the database."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Error: The command line arguments should have required property 'text'."})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);