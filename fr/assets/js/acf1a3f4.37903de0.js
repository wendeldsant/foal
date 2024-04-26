"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9430],{95444:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(74848),n=r(28453);const a={title:"Les Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},i=void 0,o={id:"tutorials/real-world-example-with-react/tuto-4-the-shell-scripts",title:"Les Scripts Shell",description:"Vos mod\xe8les sont pr\xeats \xe0 \xeatre utilis\xe9s. Comme dans le tutoriel pr\xe9c\xe9dent, vous allez utiliser des scripts shell pour alimenter la base de donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/tutorials/real-world-example-with-react/4-the-shell-scripts.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/4-the-shell-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/4-the-shell-scripts.md",tags:[],version:"3.x",sidebarPosition:4,frontMatter:{title:"Les Scripts Shell",id:"tuto-4-the-shell-scripts",slug:"4-the-shell-scripts"},sidebar:"someSidebar",previous:{title:"Les Mod\xe8les User et Story",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Votre Premi\xe8re Route",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/5-our-first-route"}},l={},c=[{value:"Le script <code>cr\xe9er-utilisateur</code>",id:"le-script-cr\xe9er-utilisateur",level:2},{value:"Le sc\xe9nario <code>create-story</code>.",id:"le-sc\xe9nario-create-story",level:2}];function d(e){const s={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Vos mod\xe8les sont pr\xeats \xe0 \xeatre utilis\xe9s. Comme dans le tutoriel pr\xe9c\xe9dent, vous allez utiliser des scripts shell pour alimenter la base de donn\xe9es."}),"\n",(0,t.jsxs)(s.h2,{id:"le-script-cr\xe9er-utilisateur",children:["Le script ",(0,t.jsx)(s.code,{children:"cr\xe9er-utilisateur"})]}),"\n",(0,t.jsxs)(s.p,{children:["Un script appel\xe9 ",(0,t.jsx)(s.code,{children:"create-user"})," existe d\xe9j\xe0 dans le r\xe9pertoire ",(0,t.jsx)(s.code,{children:"scripts"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Ouvrez le fichier et remplacez son contenu par ce qui suit :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"// 3p\nimport { hashPassword } from '@foal/core';\n\n// App\nimport { User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await dataSource.initialize();\n\n  try {\n    console.log(await user.save());\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n"})}),"\n",(0,t.jsx)(s.p,{children:"Certaines parties de ce code devraient vous sembler famili\xe8res."}),"\n",(0,t.jsxs)(s.p,{children:["L'objet ",(0,t.jsx)(s.code,{children:"schema"})," est utilis\xe9 pour valider les arguments tap\xe9s sur la ligne de commande. Dans notre cas, le script attend deux param\xe8tres obligatoires ",(0,t.jsx)(s.code,{children:"email"})," et ",(0,t.jsx)(s.code,{children:"password"})," et un optionnel ",(0,t.jsx)(s.code,{children:"name"}),". La propri\xe9t\xe9 ",(0,t.jsx)(s.code,{children:"format"})," v\xe9rifie que la cha\xeene ",(0,t.jsx)(s.code,{children:"email"})," est un email (pr\xe9sence du caract\xe8re ",(0,t.jsx)(s.code,{children:"@"}),", etc)."]}),"\n",(0,t.jsxs)(s.p,{children:["La fonction ",(0,t.jsx)(s.code,{children:"main"})," est appel\xe9e apr\xe8s que la validation ait r\xe9ussi. Elle est divis\xe9e en plusieurs parties. D'abord, elle cr\xe9e un nouvel utilisateur avec les arguments sp\xe9cifi\xe9s dans la ligne de commande. Ensuite, elle \xe9tablit une connexion avec la base de donn\xe9es et enregistre l'utilisateur."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["La fonction ",(0,t.jsx)(s.code,{children:"hashPassword"})," est utilis\xe9e pour hacher et saler les mots de passe avant de les stocker dans la base de donn\xe9es. Pour des raisons de s\xe9curit\xe9, vous devez utiliser cette fonction avant de sauvegarder les mots de passe."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Construisez le script."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsx)(s.p,{children:"Cr\xe9ez ensuite deux nouveaux utilisateurs."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Si vous essayez de r\xe9ex\xe9cuter l'une de ces commandes, vous obtiendrez l'erreur MySQL ci-dessous car la cl\xe9 ",(0,t.jsx)(s.code,{children:"email"})," est unique."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"})}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"le-sc\xe9nario-create-story",children:["Le sc\xe9nario ",(0,t.jsx)(s.code,{children:"create-story"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Le script ",(0,t.jsx)(s.code,{children:"create-story"})," est un peu plus complexe car ",(0,t.jsx)(s.code,{children:"Story"})," a une relation many-to-one avec ",(0,t.jsx)(s.code,{children:"User"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"foal generate script create-story\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Ouvrez le fichier ",(0,t.jsx)(s.code,{children:"create-story.ts"})," et remplacez son contenu."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { Story, User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  await dataSource.initialize();\n\n  const user = await User.findOneByOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error: any) {\n    console.error(error);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Nous avons ajout\xe9 un param\xe8tre ",(0,t.jsx)(s.code,{children:"author"})," pour savoir quel utilisateur a post\xe9 l'article. Il attend l'email de l'utilisateur."]}),"\n",(0,t.jsxs)(s.p,{children:["La fonction ",(0,t.jsx)(s.code,{children:"main"})," essaie alors de trouver l'utilisateur qui poss\xe8de cet email. S'il existe, l'utilisateur est ajout\xe9 \xe0 la ",(0,t.jsx)(s.em,{children:"story"})," en tant qu'auteur. Si ce n'est pas le cas, le script se termine par un message affich\xe9 dans la console."]}),"\n",(0,t.jsx)(s.p,{children:"Construisez le script."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,t.jsx)(s.p,{children:"Et cr\xe9ez de nouveaux posts pour chaque utilisateur."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication/quick-start"\n'})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);