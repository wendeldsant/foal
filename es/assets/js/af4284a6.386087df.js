"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Los Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},s=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",id:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",title:"Los Scripts Shell",description:"Sus modelos est\xe1n listos para ser utilizados. Como en el tutorial anterior, utilizar\xe1 scripts shell para alimentar la base de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/4-the-shell-scripts.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/es/docs/tutorials/real-world-example-with-react/4-the-shell-scripts",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/4-the-shell-scripts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Los Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},sidebar:"someSidebar",previous:{title:"Los Modelos User y Story",permalink:"/es/docs/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Su Primera Ruta",permalink:"/es/docs/tutorials/real-world-example-with-react/5-our-first-route"}},i={},c=[{value:"El script <code>create-user</code>",id:"el-script-create-user",level:2},{value:"El script <code>create-story</code>",id:"el-script-create-story",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sus modelos est\xe1n listos para ser utilizados. Como en el tutorial anterior, utilizar\xe1 scripts shell para alimentar la base de datos."),(0,n.kt)("h2",{id:"el-script-create-user"},"El script ",(0,n.kt)("inlineCode",{parentName:"h2"},"create-user")),(0,n.kt)("p",null,"Ya existe un script llamado ",(0,n.kt)("inlineCode",{parentName:"p"},"create-user")," en el directorio ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,n.kt)("p",null,"Abra el archivo y sustituya su contenido por el siguiente:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { hashPassword } from '@foal/core';\n\n// App\nimport { User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await dataSource.initialize();\n\n  try {\n    console.log(await user.save());\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n")),(0,n.kt)("p",null,"Algunas partes de este c\xf3digo deber\xedan resultarle familiares."),(0,n.kt)("p",null,"El objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"schema")," se utiliza para validar los argumentos introducidos en la l\xednea de comandos. En este caso, el script espera dos par\xe1metros obligatorios ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"password")," y un ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," opcional. La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"format")," comprueba que la cadena ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," es un correo electr\xf3nico (presencia del car\xe1cter ",(0,n.kt)("inlineCode",{parentName:"p"},"@"),", etc). "),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," se llama despu\xe9s de la validaci\xf3n exitosa. Se divide en varias partes. Primero, crea un nuevo usuario con los argumentos especificados en la l\xednea de comandos. Luego establece una conexi\xf3n con la base de datos y guarda el usuario."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"hashPassword")," se utiliza para aplicar hash y sal a las contrase\xf1as antes de almacenarlas en la base de datos. Por razones de seguridad, debe utilizar esta funci\xf3n antes de guardar las contrase\xf1as.")),(0,n.kt)("p",null,"Construya el script."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"A continuaci\xf3n, cree dos nuevos usuarios."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si intenta volver a ejecutar uno de estos comandos, obtendr\xe1 el siguiente error de MySQL, ya que la clave de correo electr\xf3nico es \xfanica."),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"))),(0,n.kt)("h2",{id:"el-script-create-story"},"El script ",(0,n.kt)("inlineCode",{parentName:"h2"},"create-story")),(0,n.kt)("p",null,"El script ",(0,n.kt)("inlineCode",{parentName:"p"},"create-story")," es un poco m\xe1s complejo ya que ",(0,n.kt)("inlineCode",{parentName:"p"},"Story")," tiene una relaci\xf3n de muchos a uno con ",(0,n.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate script create-story\n")),(0,n.kt)("p",null,"Abra el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"create-story.ts")," y sustituya su contenido."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Story, User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  await dataSource.initialize();\n\n  const user = await User.findOneByOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error: any) {\n    console.error(error);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n")),(0,n.kt)("p",null,"Hemos a\xf1adido un par\xe1metro ",(0,n.kt)("inlineCode",{parentName:"p"},"author")," para saber qu\xe9 usuario ha publicado el post. Se espera el correo electr\xf3nico del usuario."),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," intenta entonces encontrar al usuario que tiene este correo electr\xf3nico. Si existe, el usuario se a\xf1ade al post como autor. Si no lo hace, el script termina con un mensaje mostrado en la consola."),(0,n.kt)("p",null,"Construya el script."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"Y cree nuevas publicaciones para cada usuario."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication/quick-start"\n')))}u.isMDXComponent=!0}}]);