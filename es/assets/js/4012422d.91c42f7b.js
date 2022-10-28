"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Introducci\xf3n",slug:"/"},i=void 0,l={unversionedId:"README",id:"version-2.x/README",title:"Introducci\xf3n",description:"License: MIT",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/README.md",sourceDirName:".",slug:"/",permalink:"/es/docs/2.x/",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/README.md",tags:[],version:"2.x",frontMatter:{title:"Introducci\xf3n",slug:"/"},sidebar:"someSidebar",next:{title:"Instalaci\xf3n",permalink:"/es/docs/2.x/tutorials/simple-todo-list/1-installation"}},s={},c=[{value:"\xbfQu\xe9 es Foal?",id:"qu\xe9-es-foal",level:2},{value:"Pol\xedtica de Desarrollo",id:"pol\xedtica-de-desarrollo",level:2},{value:"Miles de Pruebas",id:"miles-de-pruebas",level:3},{value:"Documentaci\xf3n",id:"documentaci\xf3n",level:3},{value:"Estabilidad del Producto",id:"estabilidad-del-producto",level:3},{value:"Empezar",id:"empezar",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,r.kt)("h2",{id:"qu\xe9-es-foal"},"\xbfQu\xe9 es Foal?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Foal")," (o ",(0,r.kt)("em",{parentName:"p"},"FoalTS"),") es un framework Node.JS para crear aplicaciones web."),(0,r.kt)("p",null,"Proporciona un conjunto de componentes listos para usar, de modo que no tenga que reinventar la rueda cada vez. En un solo lugar, tiene un entorno completo para construir aplicaciones web. Esto incluye una CLI, herramientas de prueba, utilidades frontales, scripts, autenticaci\xf3n avanzada, ORM, entornos de despliegue, API GraphQL y Swagger, utilidades AWS, y mucho m\xe1s. Ya no necesita perderse en npm buscando paquetes y haciendo que funcionen juntos. Todo est\xe1 previsto."),(0,r.kt)("p",null,"Pero a la vez que ofrece todas estas caracter\xedsticas, el framework sigue siendo sencillo. La complejidad y las abstracciones innecesarias se dejan de lado para proporcionar la sintaxis m\xe1s intuitiva y expresiva. Creemos que un c\xf3digo conciso y elegante es la mejor manera de desarrollar una aplicaci\xf3n y mantenerla en el futuro. Tambi\xe9n le permite dedicar m\xe1s tiempo a la codificaci\xf3n en lugar de intentar comprender c\xf3mo funciona el framework."),(0,r.kt)("p",null,"Y por \xfaltimo, el framework est\xe1 enteramente escrito en TypeScript. Este lenguaje le aporta una comprobaci\xf3n de tipos est\xe1tica opcional junto con las \xfaltimas caracter\xedsticas de ECMAScript. Esto le permite detectar la mayor\xeda de los errores tontos durante la compilaci\xf3n y mejorar la calidad de su c\xf3digo. Tambi\xe9n le ofrece autocompletado y una API bien documentada."),(0,r.kt)("h2",{id:"pol\xedtica-de-desarrollo"},"Pol\xedtica de Desarrollo"),(0,r.kt)("h3",{id:"miles-de-pruebas"},"Miles de Pruebas"),(0,r.kt)("p",null,"Las pruebas de FoalTS tienen una prioridad muy alta. Proporcionar un producto fiable es realmente importante para nosotros. En diciembre de 2020, el framework est\xe1 cubierto por m\xe1s de 2100 pruebas."),(0,r.kt)("h3",{id:"documentaci\xf3n"},"Documentaci\xf3n"),(0,r.kt)("p",null,"Las nuevas caracter\xedsticas, independientemente de lo que ofrezcan, no sirven de nada si no est\xe1n bien documentadas. Mantener una documentaci\xf3n completa y de calidad es clave para el framework. Si cree que falta algo o no est\xe1 claro, \xa1no dude en abrir una issue en Github!"),(0,r.kt)("h3",{id:"estabilidad-del-producto"},"Estabilidad del Producto"),(0,r.kt)("p",null,"Se presta gran atenci\xf3n a la estabilidad del producto. Puede obtener m\xe1s informaci\xf3n consultando nuestras ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"},"pol\xedtica de dependencia"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"},"reglas de versionado sem\xe1ntico")," y ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"pol\xedtica de soporte a largo plazo"),"."),(0,r.kt)("h2",{id:"empezar"},"Empezar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),(0,r.kt)("p",null,"\xa1El servidor de desarrollo ha comenzado! \xa1Vaya a ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," y encuentre nuestra p\xe1gina de bienvenida!"),(0,r.kt)("p",null,"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/simple-todo-list/1-installation"},"Continuar con el tutorial")," \ud83c\udf31"))}d.isMDXComponent=!0}}]);