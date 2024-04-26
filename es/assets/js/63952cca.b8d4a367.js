"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[413],{8399:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(74848),t=s(28453);const a={title:"Los Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},o=void 0,i={id:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",title:"Los Scripts Shell",description:"Sus modelos est\xe1n listos para ser utilizados. Como en el tutorial anterior, utilizar\xe1 scripts shell para alimentar la base de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/4-the-shell-scripts.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/4-the-shell-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/4-the-shell-scripts.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"Los Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},sidebar:"someSidebar",previous:{title:"Los Modelos User y Story",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Su Primera Ruta",permalink:"/es/docs/2.x/tutorials/real-world-example-with-react/5-our-first-route"}},l={},c=[{value:"El script <code>create-user</code>",id:"el-script-create-user",level:2},{value:"El script <code>create-story</code>",id:"el-script-create-story",level:2}];function d(e){const r={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Sus modelos est\xe1n listos para ser utilizados. Como en el tutorial anterior, utilizar\xe1 scripts shell para alimentar la base de datos."}),"\n",(0,n.jsxs)(r.h2,{id:"el-script-create-user",children:["El script ",(0,n.jsx)(r.code,{children:"create-user"})]}),"\n",(0,n.jsxs)(r.p,{children:["Ya existe un script llamado ",(0,n.jsx)(r.code,{children:"create-user"})," en el directorio ",(0,n.jsx)(r.code,{children:"scripts"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Abra el archivo y sustituya su contenido por el siguiente:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"// 3p\nimport { hashPassword } from '@foal/core';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await createConnection();\n\n  try {\n    console.log(await user.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n\n"})}),"\n",(0,n.jsx)(r.p,{children:"Algunas partes de este c\xf3digo deber\xedan resultarle familiares."}),"\n",(0,n.jsxs)(r.p,{children:["El objeto ",(0,n.jsx)(r.code,{children:"schema"})," se utiliza para validar los argumentos introducidos en la l\xednea de comandos. En este caso, el script espera dos par\xe1metros obligatorios ",(0,n.jsx)(r.code,{children:"email"})," y ",(0,n.jsx)(r.code,{children:"password"})," y un ",(0,n.jsx)(r.code,{children:"name"})," opcional. La propiedad ",(0,n.jsx)(r.code,{children:"format"})," comprueba que la cadena ",(0,n.jsx)(r.code,{children:"email"})," es un correo electr\xf3nico (presencia del car\xe1cter ",(0,n.jsx)(r.code,{children:"@"}),", etc)."]}),"\n",(0,n.jsxs)(r.p,{children:["La funci\xf3n ",(0,n.jsx)(r.code,{children:"main"})," se llama despu\xe9s de la validaci\xf3n exitosa. Se divide en varias partes. Primero, crea un nuevo usuario con los argumentos especificados en la l\xednea de comandos. Luego establece una conexi\xf3n con la base de datos y guarda el usuario."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["La funci\xf3n ",(0,n.jsx)(r.code,{children:"hashPassword"})," se utiliza para aplicar hash y sal a las contrase\xf1as antes de almacenarlas en la base de datos. Por razones de seguridad, debe utilizar esta funci\xf3n antes de guardar las contrase\xf1as."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Construya el script."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,n.jsx)(r.p,{children:"A continuaci\xf3n, cree dos nuevos usuarios."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n'})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Si intenta volver a ejecutar uno de estos comandos, obtendr\xe1 el siguiente error de MySQL, ya que la clave de correo electr\xf3nico es \xfanica."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"})}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"el-script-create-story",children:["El script ",(0,n.jsx)(r.code,{children:"create-story"})]}),"\n",(0,n.jsxs)(r.p,{children:["El script ",(0,n.jsx)(r.code,{children:"create-story"})," es un poco m\xe1s complejo ya que ",(0,n.jsx)(r.code,{children:"Story"})," tiene una relaci\xf3n de muchos a uno con ",(0,n.jsx)(r.code,{children:"User"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"foal generate script create-story\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Abra el archivo ",(0,n.jsx)(r.code,{children:"create-story.ts"})," y sustituya su contenido."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { createConnection } from 'typeorm';\nimport { Story, User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  const connection = await createConnection();\n\n  const user = await User.findOneOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error) {\n    console.error(error);\n  } finally {\n    await connection.close();\n  }\n}\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Hemos a\xf1adido un par\xe1metro ",(0,n.jsx)(r.code,{children:"author"})," para saber qu\xe9 usuario ha publicado el post. Se espera el correo electr\xf3nico del usuario."]}),"\n",(0,n.jsxs)(r.p,{children:["La funci\xf3n ",(0,n.jsx)(r.code,{children:"main"})," intenta entonces encontrar al usuario que tiene este correo electr\xf3nico. Si existe, el usuario se a\xf1ade al post como autor. Si no lo hace, el script termina con un mensaje mostrado en la consola."]}),"\n",(0,n.jsx)(r.p,{children:"Construya el script."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,n.jsx)(r.p,{children:"Y cree nuevas publicaciones para cada usuario."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication-and-access-control/quick-start"\n'})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>i});var n=s(96540);const t={},a=n.createContext(t);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);