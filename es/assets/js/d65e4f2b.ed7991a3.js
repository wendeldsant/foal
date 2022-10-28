"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"El Script Shell create-todo",id:"tuto-4-the-shell-script-create-todo",slug:"4-the-shell-script-create-todo"},l=void 0,s={unversionedId:"tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",id:"version-2.x/tutorials/simple-todo-list/tuto-4-the-shell-script-create-todo",title:"El Script Shell create-todo",description:"Ahora es el momento de poblar la base de datos con algunas tareas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/4-the-shell-script-create-todo",permalink:"/es/docs/2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"El Script Shell create-todo",id:"tuto-4-the-shell-script-create-todo",slug:"4-the-shell-script-create-todo"},sidebar:"someSidebar",previous:{title:"El Modelo Todo",permalink:"/es/docs/2.x/tutorials/simple-todo-list/3-the-todo-model"},next:{title:"La API REST",permalink:"/es/docs/2.x/tutorials/simple-todo-list/5-the-rest-api"}},i={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ahora es el momento de poblar la base de datos con algunas tareas."),(0,r.kt)("p",null,"Podr\xeda ejecutar la interfaz de l\xednea de comandos de su base de datos (en este caso ",(0,r.kt)("em",{parentName:"p"},"SQLite"),") e introducir algunas consultas SQL. Pero esto es arriesgado y poco pr\xe1ctico. Se vuelve especialmente cierto cuando la complejidad de sus modelos aumenta (relaciones many-to-many, etc)."),(0,r.kt)("p",null,"Por eso va a crear y utilizar en su lugar un ",(0,r.kt)("em",{parentName:"p"},"script shell"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate script create-todo\n")),(0,r.kt)("p",null,"Un ",(0,r.kt)("em",{parentName:"p"},"script shell")," es una pieza de c\xf3digo destinada a ser llamada desde la l\xednea de comandos. Tiene acceso a todos los componentes de su aplicaci\xf3n, incluyendo sus modelos. Un script shell se divide en dos partes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"un objeto ",(0,r.kt)("inlineCode",{parentName:"li"},"schema")," que define la especificaci\xf3n de los argumentos de la l\xednea de comandos,"),(0,r.kt)("li",{parentName:"ul"},"y una funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," que obtiene estos argumentos como un objeto y ejecuta alg\xfan c\xf3digo.")),(0,r.kt)("p",null,"Abra el nuevo archivo generado en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"src/scripts")," y actualice su contenido."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const connection = await createConnection();\n\n  try {\n    // Create a new task with the text given in the command line.\n    const todo = new Todo();\n    todo.text = args.text;\n\n    // Save the task in the database and then display it in the console.\n    console.log(await todo.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    await connection.close();\n  }\n}\n\n")),(0,r.kt)("p",null,"Construya el script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,r.kt)("p",null,"A continuaci\xf3n, ejecute el script para crear tareas en la base de datos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Observe que si intenta crear una nueva tarea sin especificar el argumento del texto, obtendr\xe1 el siguiente error."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}d.isMDXComponent=!0}}]);