"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5160],{6388:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=o(74848),r=o(28453);const s={title:"Authentification Sociale avec Google",id:"tuto-15-social-auth",slug:"15-social-auth"},l=void 0,i={id:"tutorials/real-world-example-with-react/tuto-15-social-auth",title:"Authentification Sociale avec Google",description:"Dans cette derni\xe8re partie du tutoriel, nous allons donner aux utilisateurs la possibilit\xe9 de se connecter avec Google. Actuellement, ils ne peuvent se connecter qu'avec un email et un mot de passe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/15-social-auth.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/15-social-auth",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/15-social-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/15-social-auth.md",tags:[],version:"2.x",sidebarPosition:15,frontMatter:{title:"Authentification Sociale avec Google",id:"tuto-15-social-auth",slug:"15-social-auth"},sidebar:"someSidebar",previous:{title:"Construction de Production",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/14-production-build"},next:{title:"Aper\xe7u de l'Architecture",permalink:"/fr/docs/2.x/architecture/architecture-overview"}},a={},c=[{value:"Mots de Passe Nullables",id:"mots-de-passe-nullables",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Le Contr\xf4leur Social",id:"le-contr\xf4leur-social",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Dans cette derni\xe8re partie du tutoriel, nous allons donner aux utilisateurs la possibilit\xe9 de se connecter avec Google. Actuellement, ils ne peuvent se connecter qu'avec un email et un mot de passe."}),"\n",(0,t.jsx)(n.p,{children:"Pour ce faire, vous utiliserez le syst\xe8me d'authentification sociale de Foal."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Cette section suppose que vous avez d\xe9j\xe0 configur\xe9 une application Google et que vous avez r\xe9cup\xe9r\xe9 votre ID client et votre secret. Si ce n'est pas le cas, vous pouvez d'abord consulter cette ",(0,t.jsx)(n.a,{href:"/fr/docs/2.x/authentication-and-access-control/social-auth",children:"page"}),". Les URI de redirection autoris\xe9s dans votre application Google doivent inclure ",(0,t.jsx)(n.code,{children:"http://localhost:3001/api/auth/google/callback"}),"."]})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mots-de-passe-nullables",children:"Mots de Passe Nullables"}),"\n",(0,t.jsxs)(n.p,{children:["La premi\xe8re \xe9tape est de mettre \xe0 jour le mod\xe8le ",(0,t.jsx)(n.code,{children:"User"}),". Certains utilisateurs peuvent n'utiliser que le login social et donc ne pas avoir de mot de passe. Pour prendre cela en compte, nous allons faire en sorte que la colonne ",(0,t.jsx)(n.code,{children:"password"})," accepte des valeurs nulles."]}),"\n",(0,t.jsxs)(n.p,{children:["Ouvrez ",(0,t.jsx)(n.code,{children:"user.entity.ts"})," et mettez \xe0 jour son contenu."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ nullable: true })\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n"})}),"\n",(0,t.jsx)(n.p,{children:"G\xe9n\xe9rez et ex\xe9cutez les migrations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run makemigrations\nnpm run migrations\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ouvrez ensuite ",(0,t.jsx)(n.code,{children:"auth.controller.ts"})," et ajoutez une condition pour v\xe9rifier si la valeur du mot de passe est ",(0,t.jsx)(n.code,{children:"null"})," dans la base de donn\xe9es."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"if (!user.password) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!(await verifyPassword(password, user.password))) {\n  return new HttpResponseUnauthorized();\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Maintenant que le probl\xe8me du mot de passe est r\xe9solu, vous pouvez installer les paquets et fournir vos informations d'identification sociale dans la configuration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @foal/social node-fetch@2\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"config/default.json"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "social": {\n      "google": {\n        "clientId": "env(GOOGLE_CLIENT_ID)",\n        "clientSecret": "env(GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/api/auth/google/callback"\n      }\n    },\n  },\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:".env"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# ...\n\nGOOGLE_CLIENT_ID="your Google client ID"\nGOOGLE_CLIENT_SECRET="your Google client secret"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"le-contr\xf4leur-social",children:"Le Contr\xf4leur Social"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ez le contr\xf4leur."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"foal generate controller api/social-auth --register\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ouvrez le fichier et ajoutez deux nouvelles routes."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Point de terminaison"}),(0,t.jsx)(n.th,{children:"M\xe9thode"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/api/auth/google"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST"})}),(0,t.jsx)(n.td,{children:"Redirige l'utilisateur vers la page de connexion de Google."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/api/auth/google/callback"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET"})}),(0,t.jsx)(n.td,{children:"G\xe8re la redirection depuis Google une fois que l'utilisateur a approuv\xe9 la connexion."})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, dependency, Get, HttpResponseRedirect, Session } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { User } from '../../entities';\nimport * as fetch from 'node-fetch';\nimport { Disk } from '@foal/storage';\n\ninterface GoogleUserInfo {\n  email: string;\n  name?: string;\n  picture?: string;\n}\n\nexport class SocialAuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  disk: Disk;\n\n  @Get('/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/google/callback')\n  async handleGoogleRedirection(ctx: Context<User, Session>) {\n    const { userInfo } = await this.google.getUserInfo<GoogleUserInfo>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      user = new User();\n      user.email = userInfo.email;\n      user.avatar = '';\n      user.name = userInfo.name ?? 'Unknown';\n\n      if (userInfo.picture) {\n        const response = await fetch(userInfo.picture);\n        const { path } = await this.disk.write('images/profiles/uploaded', response.body)\n        user.avatar = path;\n      }\n\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ouvrez ",(0,t.jsx)(n.code,{children:"api.controller.ts"})," et remplacez le pr\xe9fixe du chemin du ",(0,t.jsx)(n.code,{children:"SocialAuthController"})," par ",(0,t.jsx)(n.code,{children:"/auth"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"subControllers = [\n  controller('/stories', StoriesController),\n  controller('/auth', AuthController),\n  controller('/profile', ProfileController),\n  controller('/auth', SocialAuthController)\n];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Allez sur ",(0,t.jsx)(n.a,{href:"http://localhost:3001/login",children:"http://localhost:3001/login"})," et cliquez sur le bouton ",(0,t.jsx)(n.em,{children:"Connect with Google"}),". Vous \xeates redirig\xe9 vers la page de connexion de Google. Une fois que vous avez valid\xe9 la connexion, vous \xeates redirig\xe9 vers la page d'accueil. Si vous avez une photo de profil Google, vous la verrez sur votre page de profil."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Pour que cela fonctionne, vous devez vous assurer que vous utilisez le port ",(0,t.jsx)(n.code,{children:"3001"})," pour tester la connexion sociale. Cela suppose que vous avez cr\xe9\xe9 la build de production dans l'\xe9tape pr\xe9c\xe9dente de ce tutoriel. Vous ne pouvez pas utiliser le serveur de d\xe9veloppement React ici car les redirections ne fonctionneront pas avec les deux ports ",(0,t.jsx)(n.code,{children:"3000"})," et ",(0,t.jsx)(n.code,{children:"3001"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["F\xe9licitations ! Vous avez atteint la fin de ce tutoriel. Vous pouvez trouver le code source complet ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(79028).A+"",children:"ici"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79028:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/files/tutorial-foal-react-eb9413cdda30e58d7bf2efefe643b589.zip"},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var t=o(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);