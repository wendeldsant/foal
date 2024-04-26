"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},i=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-1-introduction",id:"version-3.x/tutorials/real-world-example-with-react/tuto-1-introduction",title:"Introduction",description:"Ce tutoriel montre comment construire une application du monde r\xe9el avec React et Foal. Il suppose que vous avez d\xe9j\xe0 lu le premier guide Comment cr\xe9er une To-Do Liste Simple et que vous avez une connaissance de base de React.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/tutorials/real-world-example-with-react/1-introduction.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/1-introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/1-introduction.md",tags:[],version:"3.x",sidebarPosition:1,frontMatter:{title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},sidebar:"someSidebar",previous:{title:"Tests Unitaires",permalink:"/fr/docs/3.x/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Base de Donn\xe9es (configuration)",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/2-database-set-up"}},u={},s=[{value:"Aper\xe7u de l&#39;Application",id:"aper\xe7u-de-lapplication",level:2},{value:"D\xe9buter",id:"d\xe9buter",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ce tutoriel montre comment construire une application du monde r\xe9el avec React et Foal. Il suppose que vous avez d\xe9j\xe0 lu le premier guide ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/fr/docs/3.x/tutorials/simple-todo-list/1-installation"},"Comment cr\xe9er une To-Do Liste Simple"))," et que vous avez une connaissance de base de React."),(0,a.kt)("p",null,"Dans ce tutoriel, vous apprendrez \xe0 :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xe9tablir une connexion avec MySQL ou Postgres,"),(0,a.kt)("li",{parentName:"ul"},"fournir des informations d'identification \xe0 l'application de mani\xe8re s\xe9curis\xe9e,"),(0,a.kt)("li",{parentName:"ul"},"cr\xe9er des mod\xe8les avec des relations many-to-one,"),(0,a.kt)("li",{parentName:"ul"},"utiliser un constructeur de requ\xeates,"),(0,a.kt)("li",{parentName:"ul"},"g\xe9n\xe9rer une interface pour tester votre API (Swagger UI),"),(0,a.kt)("li",{parentName:"ul"},"corriger les erreurs de politique ",(0,a.kt)("em",{parentName:"li"},"same-origin"),","),(0,a.kt)("li",{parentName:"ul"},"permettre aux utilisateurs de se connecter et de s'enregistrer avec un email et un mot de passe,"),(0,a.kt)("li",{parentName:"ul"},"authentifier les utilisateurs sur le frontend et le backend,"),(0,a.kt)("li",{parentName:"ul"},"g\xe9rer le contr\xf4le d'acc\xe8s,"),(0,a.kt)("li",{parentName:"ul"},"se prot\xe9ger contre les attaques CSRF,"),(0,a.kt)("li",{parentName:"ul"},"t\xe9l\xe9charger et enregistrer des fichiers ",(0,a.kt)("em",{parentName:"li"},"(file upload)"),","),(0,a.kt)("li",{parentName:"ul"},"permettre aux utilisateurs de se connecter avec un fournisseur social (Google),"),(0,a.kt)("li",{parentName:"ul"},"et construire l'application pour la production.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Pour des raisons de simplicit\xe9, l'application frontend n'utilisera pas de biblioth\xe8que de gestion d'\xe9tat (telle que ",(0,a.kt)("a",{parentName:"em",href:"https://redux.js.org/"},"redux"),"). Mais vous pouvez bien s\xfbr en ajouter une si vous le souhaitez. La logique \xe0 suivre restera principalement la m\xeame."))),(0,a.kt)("h2",{id:"aper\xe7u-de-lapplication"},"Aper\xe7u de l'Application"),(0,a.kt)("p",null,"L'application que vous allez cr\xe9er est un site Web social o\xf9 les utilisateurs peuvent partager des liens int\xe9ressants vers des tutoriaux. Tous les messages seront publics, donc aucune authentification ne sera n\xe9cessaire pour les consulter. La publication d'un post, par contre, n\xe9cessitera la cr\xe9ation d'un compte."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Page d'accueil"),"\n",(0,a.kt)("img",{alt:"Feed page",src:r(49047).Z,width:"2560",height:"1452"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Page de profile"),"\n",(0,a.kt)("img",{alt:"Profile page",src:r(68455).Z,width:"2560",height:"1450"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pages d'inscription et de connexion"),"\n",(0,a.kt)("img",{alt:"Registration and login pages",src:r(58097).Z,width:"2560",height:"1448"})),(0,a.kt)("h2",{id:"d\xe9buter"},"D\xe9buter"),(0,a.kt)("p",null,"C'est parti. Tout d'abord, cr\xe9ez un nouveau r\xe9pertoire."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir foal-react-tuto\n")),(0,a.kt)("p",null,"G\xe9n\xe9rez l'application backend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd foal-react-tuto\nfoal createapp backend-app\n")),(0,a.kt)("p",null,"Puis, d\xe9marrez le serveur de d\xe9veloppement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend-app\nnpm run dev\n")),(0,a.kt)("p",null,"Allez sur ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," dans votre navigateur. Vous devriez voir le message ",(0,a.kt)("em",{parentName:"p"},"Welcome on board"),"."))}c.isMDXComponent=!0},49047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},68455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},58097:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"}}]);