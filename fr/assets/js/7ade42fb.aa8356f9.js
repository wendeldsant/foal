"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3776],{40909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=n(74848),o=n(28453);const i={title:"Construction de Production",id:"tuto-14-production-build",slug:"14-production-build"},l=void 0,s={id:"tutorials/real-world-example-with-react/tuto-14-production-build",title:"Construction de Production",description:"Jusqu'\xe0 pr\xe9sent, les applications frontend et backend sont compil\xe9es et servies par deux serveurs de d\xe9veloppement diff\xe9rents. L'\xe9tape suivante consiste \xe0 les regrouper en un seul serveur pr\xeat pour la production.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/14-production-build.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/14-production-build",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/14-production-build",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/14-production-build.md",tags:[],version:"2.x",sidebarPosition:14,frontMatter:{title:"Construction de Production",id:"tuto-14-production-build",slug:"14-production-build"},sidebar:"someSidebar",previous:{title:"Protection CSRF",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/13-csrf"},next:{title:"Authentification Sociale avec Google",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/15-social-auth"}},c={},a=[{value:"Construction de l&#39;Application React",id:"construction-de-lapplication-react",level:2},{value:"Pr\xe9vention des erreurs 404",id:"pr\xe9vention-des-erreurs-404",level:2},{value:"Construction de l&#39;Application Foal",id:"construction-de-lapplication-foal",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Jusqu'\xe0 pr\xe9sent, les applications frontend et backend sont compil\xe9es et servies par deux serveurs de d\xe9veloppement diff\xe9rents. L'\xe9tape suivante consiste \xe0 les regrouper en un seul serveur pr\xeat pour la production."}),"\n",(0,r.jsx)(t.h2,{id:"construction-de-lapplication-react",children:"Construction de l'Application React"}),"\n",(0,r.jsx)(t.p,{children:"Dans le r\xe9pertoire de votre frontend, ex\xe9cutez la commande suivante :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Cette commande construit l'application React pour la production et enregistre les fichiers dans le r\xe9pertoire ",(0,r.jsx)(t.code,{children:"build"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Ouvrez-le et copiez tout son contenu dans le r\xe9pertoire ",(0,r.jsx)(t.code,{children:"public"})," de votre application Foal."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Lorsque vous utilisez ",(0,r.jsx)(t.code,{children:"foal connect"})," avec Angular ou Vue, le frontend build enregistrera automatiquement les fichiers dans ",(0,r.jsx)(t.code,{children:"public"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Maintenant, si vous naviguez vers ",(0,r.jsx)(t.a,{href:"http://localhost:3001",children:"http://localhost:3001"}),", vous verrez l'application frontend servie par le serveur dorsal."]}),"\n",(0,r.jsx)(t.h2,{id:"pr\xe9vention-des-erreurs-404",children:"Pr\xe9vention des erreurs 404"}),"\n",(0,r.jsxs)(t.p,{children:["Ouvrez le lien ",(0,r.jsx)(t.a,{href:"http://localhost:3001/login",children:"http://localhost:3001/login"})," dans un nouvel onglet. Le serveur renvoie une erreur 404."]}),"\n",(0,r.jsxs)(t.p,{children:["C'est tout \xe0 fait normal. Pour le moment, le serveur n'a pas de gestionnaire pour la route ",(0,r.jsx)(t.code,{children:"/login"})," et renvoie donc cette erreur. Auparavant, ce probl\xe8me \xe9tait g\xe9r\xe9 par le serveur de d\xe9veloppement React, c'est pourquoi cette erreur n'existait pas."]}),"\n",(0,r.jsx)(t.p,{children:"Pour r\xe9soudre ce probl\xe8me, vous allez ajouter une m\xe9thode de contr\xf4leur qui traitera les requ\xeates non trait\xe9es."}),"\n",(0,r.jsxs)(t.p,{children:["Ouvrez ",(0,r.jsx)(t.code,{children:"app.controller.ts"})," et mettez \xe0 jour son contenu."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { Context, controller, Get, HttpResponseNotFound, IAppController, render } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./public/index.html');\n  }\n}\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"Cette m\xe9thode renvoie l'application React pour toute requ\xeate GET qui accepte du contenu HTML et qui n'a pas \xe9t\xe9 trait\xe9e par les autres m\xe9thodes du contr\xf4leur et de ses sous-contr\xf4leurs."}),"\n",(0,r.jsxs)(t.p,{children:["Si vous retournez \xe0 ",(0,r.jsx)(t.a,{href:"http://localhost:3001/login",children:"http://localhost:3001/login"})," et rafra\xeechissez la page, la page de connexion devrait s'afficher."]}),"\n",(0,r.jsx)(t.h2,{id:"construction-de-lapplication-foal",children:"Construction de l'Application Foal"}),"\n",(0,r.jsxs)(t.p,{children:["Maintenant, si vous voulez construire l'application backend sans utiliser l'option ",(0,r.jsx)(t.code,{children:"npm run develop"}),", vous pouvez ex\xe9cuter cette commande :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsx)(t.p,{children:"Ensuite, pour lancer l'application, il suffit d'ex\xe9cuter ce qui suit :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run start\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);