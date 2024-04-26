"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4005],{25189:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(74848),r=s(28453);const o={title:"Connecter les Utilisateurs",id:"tuto-8-authentication",slug:"8-authentication"},i=void 0,l={id:"tutorials/real-world-example-with-react/tuto-8-authentication",title:"Connecter les Utilisateurs",description:"Les posts sont affich\xe9es sur la page d'accueil. Si nous voulons que les utilisateurs puissent publier de nouveaux posts et t\xe9l\xe9charger une photo de profil, nous devons leur permettre de se connecter \xe0 l'application.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/tutorials/real-world-example-with-react/8-authentication.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/8-authentication",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/8-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/8-authentication.md",tags:[],version:"3.x",sidebarPosition:8,frontMatter:{title:"Connecter les Utilisateurs",id:"tuto-8-authentication",slug:"8-authentication"},sidebar:"someSidebar",previous:{title:"L'Application Frontend",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/7-add-frontend"},next:{title:"Authentification des Utilisateurs dans l'API",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/9-authenticated-api"}},a={},c=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Les posts sont affich\xe9es sur la page d'accueil. Si nous voulons que les utilisateurs puissent publier de nouveaux posts et t\xe9l\xe9charger une photo de profil, nous devons leur permettre de se connecter \xe0 l'application."}),"\n",(0,n.jsx)(t.p,{children:"Pour ce faire, nous allons utiliser les sessions de Foal avec des cookies."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["FoalTS offre de nombreuses options pour authentifier les utilisateurs. Par exemple, vous pouvez envoyer des jetons (",(0,n.jsx)(t.em,{children:"tokens"}),") de session avec l'en-t\xeate ",(0,n.jsx)(t.code,{children:"Authorization"})," ou utiliser des jetons sans \xe9tat avec JWT. Nous n'allons pas explorer toutes ces possibilit\xe9s dans ce tutoriel mais vous pouvez trouver la documentation compl\xe8te ",(0,n.jsx)(t.a,{href:"/fr/docs/3.x/authentication/quick-start",children:"ici"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Ouvrez le fichier ",(0,n.jsx)(t.code,{children:"api.controller.ts"})," et ajoutez le hook ",(0,n.jsx)(t.code,{children:"@UseSessions"})," en haut de la classe."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { ApiInfo, ApiServer, controller, UseSessions } from '@foal/core';\nimport { User } from '../entities';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@UseSessions({\n  cookie: true,\n  user: (id: number) => User.findOneBy({ id }),\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Lorsqu'il est utilis\xe9 avec l'option ",(0,n.jsx)(t.code,{children:"cookie"}),", ce hook garantit que ",(0,n.jsx)(t.code,{children:"ctx.session"})," est toujours d\xe9fini dans chaque m\xe9thode du contr\xf4leur et de ses sous-contr\xf4leurs. Cet objet peut \xeatre utilis\xe9 pour stocker des informations entre plusieurs requ\xeates, comme un ID d'utilisateur par exemple. Vous l'utiliserez pour authentifier les utilisateurs."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["En arri\xe8re-plan, Foal g\xe9n\xe8re un jeton de session unique pour chaque utilisateur utilisant l'API et le stocke dans un cookie sur l'h\xf4te du client. Lorsque le client effectue une nouvelle requ\xeate, le navigateur envoie automatiquement le jeton avec la requ\xeate afin que le serveur puisse r\xe9cup\xe9rer les informations de session. Les donn\xe9es de session sont stock\xe9es dans la base de donn\xe9es dans la table ",(0,n.jsx)(t.em,{children:"sessions"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Mais vous n'avez pas \xe0 vous en pr\xe9occuper, tout est g\xe9r\xe9 par Foal."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cr\xe9ez un nouveau contr\xf4leur."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"foal generate controller api/auth --register\n"})}),"\n",(0,n.jsx)(t.p,{children:"Ouvrez le nouveau fichier cr\xe9\xe9 et ajoutez deux routes."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Point de terminaison"}),(0,n.jsx)(t.th,{children:"M\xe9thode"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/auth/login"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{children:"Connecte l'utilisateur. Un email et un mot de passe sont attendus dans le corps de la requ\xeate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/auth/logout"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"POST"})}),(0,n.jsx)(t.td,{children:"D\xe9connecte l'utilisateur."})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { User } from '../../entities';\n\nconst credentialsSchema = {\n  type: 'object',\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  additionalProperties: false,\n};\n\nexport class AuthController {\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context<User|null>) {\n    const email = ctx.request.body.email;\n    const password = ctx.request.body.password;\n\n    const user = await User.findOneBy({ email });\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!(await verifyPassword(password, user.password))) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session!.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseOK({\n      id: user.id,\n      name: user.name,\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    await ctx.session!.destroy();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["La m\xe9thode ",(0,n.jsx)(t.code,{children:"login"})," v\xe9rifie d'abord que l'utilisateur existe et que les informations d'identification fournies sont correctes. Si c'est le cas, elle associe l'utilisateur \xe0 la session en cours."]}),"\n",(0,n.jsxs)(t.p,{children:["Lors des requ\xeates suivantes, le hook ",(0,n.jsx)(t.em,{children:"UseSessions"})," r\xe9cup\xe9rera l'ID de l'utilisateur dans la session et d\xe9finira la propri\xe9t\xe9 ",(0,n.jsx)(t.code,{children:"ctx.user"})," en cons\xe9quence. Si l'utilisateur ne s'est pas encore connect\xe9, la propri\xe9t\xe9 ",(0,n.jsx)(t.code,{children:"ctx.user"})," sera ",(0,n.jsx)(t.code,{children:"null"}),". Dans le cas contraire, ",(0,n.jsx)(t.code,{children:"ctx.user"})," sera une instance de ",(0,n.jsx)(t.code,{children:"User"}),". Ceci est rendu possible par l'option ",(0,n.jsx)(t.code,{children:"user"})," que nous avons fournie au hook plus t\xf4t. Il s'agit en fait la fonction qui prend l'ID de l'utilisateur comme param\xe8tre et retourne la valeur \xe0 assigner \xe0 ",(0,n.jsx)(t.code,{children:"ctx.user"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);