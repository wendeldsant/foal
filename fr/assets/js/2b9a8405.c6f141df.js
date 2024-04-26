"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1932],{98441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(74848),o=r(28453);const s={title:"L'Application Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},a=void 0,i={id:"tutorials/real-world-example-with-react/tuto-7-add-frontend",title:"L'Application Frontend",description:"Tr\xe8s bien, jusqu'\xe0 pr\xe9sent vous avez une premi\xe8re version fonctionnelle de votre API. Il est temps d'ajouter le frontend.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/tutorials/real-world-example-with-react/7-add-frontend.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/7-add-frontend",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/7-add-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/7-add-frontend.md",tags:[],version:"2.x",sidebarPosition:7,frontMatter:{title:"L'Application Frontend",id:"tuto-7-add-frontend",slug:"7-add-frontend"},sidebar:"someSidebar",previous:{title:"Test de l'API avec Swagger",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/6-swagger-interface"},next:{title:"Connecter les Utilisateurs",permalink:"/fr/docs/2.x/tutorials/real-world-example-with-react/8-authentication"}},d={},l=[];function c(e){const t={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Tr\xe8s bien, jusqu'\xe0 pr\xe9sent vous avez une premi\xe8re version fonctionnelle de votre API. Il est temps d'ajouter le frontend."}),"\n",(0,n.jsxs)(t.p,{children:["T\xe9l\xe9chargez le fichier zip ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(94653).A+"",children:"ici"}),". Il contient une base de code front-end que vous compl\xe9terez au fur et \xe0 mesure. La plupart de l'application est d\xe9j\xe0 impl\xe9ment\xe9e pour vous. Vous n'aurez \xe0 vous occuper que de l'authentification et du t\xe9l\xe9chargement de fichiers pendant ce tutoriel."]}),"\n",(0,n.jsxs)(t.p,{children:["Cr\xe9ez un nouveau r\xe9pertoire ",(0,n.jsx)(t.code,{children:"frontend-app"})," \xe0 la racine de votre projet et d\xe9placez-y le contenu du zip."]}),"\n",(0,n.jsx)(t.p,{children:"Allez dans le r\xe9pertoire nouvellement cr\xe9\xe9 et d\xe9marrez le serveur de d\xe9veloppement."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd frontend-app\nnpm install\nnpm run start\n"})}),"\n",(0,n.jsxs)(t.p,{children:["L'application frontend se charge \xe0 ",(0,n.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Feed page",src:r(38829).A+"",width:"2560",height:"1392"})}),"\n",(0,n.jsx)(t.p,{children:"L'interface affiche une erreur et vous invite \xe0 rafra\xeechir la page. Cette erreur est due au fait que les applications frontend et backend sont servies sur des ports diff\xe9rents. Ainsi, lorsqu'il envoie une requ\xeate, le frontend l'envoie au mauvais port."}),"\n",(0,n.jsxs)(t.p,{children:["Une fa\xe7on de r\xe9soudre ce probl\xe8me est de mettre \xe0 jour temporairement le fichier ",(0,n.jsx)(t.code,{children:"requests/stories.ts"})," pour utiliser le port ",(0,n.jsx)(t.code,{children:"3001"})," en d\xe9veloppement. Mais cela vous oblige \xe0 ajouter un code diff\xe9rent de celui qui est r\xe9ellement utilis\xe9 en production, et cela g\xe9n\xe8re \xe9galement des erreurs de ",(0,n.jsx)(t.em,{children:"same-origin policy"})," que vous devrez toujours g\xe9rer."]}),"\n",(0,n.jsxs)(t.p,{children:["Une autre fa\xe7on de r\xe9soudre ce probl\xe8me est de ",(0,n.jsx)(t.em,{children:"connecter"})," votre serveur de d\xe9veloppement frontend au port 3001 en d\xe9veloppement. Ceci peut \xeatre fait avec la commande suivante."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ../backend-app\nfoal connect react ../frontend-app\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Si vous red\xe9marrez le serveur React, les posts devraient s'afficher correctement sur la page ",(0,n.jsx)(t.em,{children:"feed"})," (sauf pour les images)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Feed page",src:r(53063).A+"",width:"2556",height:"1394"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},94653:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/frontend-app-0e74b55d8f0360c4a779ce9fbba99114.zip"},38829:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/feed-error-8554029aeece9fa1bcc5f6bb0aeba30d.png"},53063:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/feed-no-images-8fea5ef99aff64389b1318caef2a3937.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);