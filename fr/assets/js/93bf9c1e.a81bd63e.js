"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"The Shell Script create-todo"},i=void 0,s={unversionedId:"tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",id:"version-1.x/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo.md",tags:[],version:"1.x",frontMatter:{title:"The Shell Script create-todo"},sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-3-the-todo-model"},next:{title:"The REST API",permalink:"/fr/docs/1.x/tutorials/simple-todo-list/tuto-5-the-rest-api"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now it is time to populate the database with some tasks."),(0,r.kt)("p",null,"You could run the command line interface of your database (in that case ",(0,r.kt)("em",{parentName:"p"},"SQLite"),") and enter some SQL queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases (relations many-to-many, etc)."),(0,r.kt)("p",null,"That's why you are going to create and use a ",(0,r.kt)("em",{parentName:"p"},"shell script")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate script create-todo\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"shell script")," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"schema")," object which defines the specification of the command line arguments,"),(0,r.kt)("li",{parentName:"ul"},"and a ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," function which gets these arguments as an object and executes some code.")),(0,r.kt)("p",null,"Open the new generated file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts")," directory and update its content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const connection = await createConnection();\n  try {\n    // Create a new task with the text given in the command line.\n    const todo = new Todo();\n    todo.text = args.text;\n\n    // Save the task in the database and then display it in the console.\n    console.log(\n      await connection.manager.save(todo)\n    );\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    await connection.close();\n  }\n}\n\n")),(0,r.kt)("p",null,"Build the script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:scripts\n")),(0,r.kt)("p",null,"Then run the script to create tasks in the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}u.isMDXComponent=!0}}]);