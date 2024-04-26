"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3963],{6208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(74848),s=n(28453);const i={title:"The Shell Script create-todo",id:"tuto-4-the-shell-script-create-todo",slug:"4-the-shell-script-create-todo"},r=void 0,c={id:"tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/4-the-shell-script-create-todo",permalink:"/id/docs/2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"The Shell Script create-todo",id:"tuto-4-the-shell-script-create-todo",slug:"4-the-shell-script-create-todo"},sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/id/docs/2.x/tutorials/simple-todo-list/3-the-todo-model"},next:{title:"The REST API",permalink:"/id/docs/2.x/tutorials/simple-todo-list/5-the-rest-api"}},a={},l=[];function d(e){const t={blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Now it is time to populate the database with some tasks."}),"\n",(0,o.jsxs)(t.p,{children:["You could run the command line interface of your database (in that case ",(0,o.jsx)(t.em,{children:"SQLite"}),") and enter some SQL queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases (relations many-to-many, etc)."]}),"\n",(0,o.jsxs)(t.p,{children:["That's why you are going to create and use a ",(0,o.jsx)(t.em,{children:"shell script"})," instead."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"foal generate script create-todo\n"})}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.em,{children:"shell script"})," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["a ",(0,o.jsx)(t.code,{children:"schema"})," object which defines the specification of the command line arguments,"]}),"\n",(0,o.jsxs)(t.li,{children:["and a ",(0,o.jsx)(t.code,{children:"main"})," function which gets these arguments as an object and executes some code."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Open the new generated file in the ",(0,o.jsx)(t.code,{children:"src/scripts"})," directory and update its content."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const connection = await createConnection();\n\n  try {\n    // Create a new task with the text given in the command line.\n    const todo = new Todo();\n    todo.text = args.text;\n\n    // Save the task in the database and then display it in the console.\n    console.log(await todo.save());\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    await connection.close();\n  }\n}\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"Build the script."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"npm run build\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then run the script to create tasks in the database."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"Error: The command line arguments should have required property 'text'."})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);