"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8713],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(k,i(i({ref:a},p),{},{components:t})):n.createElement(k,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65087:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const o={title:"Instalaci\xf3n",id:"tuto-1-installation",slug:"1-installation"},i=void 0,l={unversionedId:"tutorials/simple-todo-list/tuto-1-installation",id:"version-2.x/tutorials/simple-todo-list/tuto-1-installation",title:"Instalaci\xf3n",description:"En este tutorial aprender\xe1 a crear una aplicaci\xf3n web b\xe1sica con FoalTS. La aplicaci\xf3n de demostraci\xf3n es una simple lista de tareas con la que los usuarios pueden ver, crear y eliminar sus tareas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/1-installation.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/1-installation",permalink:"/es/docs/2.x/tutorials/simple-todo-list/1-installation",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/1-installation.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{title:"Instalaci\xf3n",id:"tuto-1-installation",slug:"1-installation"},sidebar:"someSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/2.x/"},next:{title:"Introducci\xf3n",permalink:"/es/docs/2.x/tutorials/simple-todo-list/2-introduction"}},s={},c=[{value:"Crear un Nuevo Proyecto",id:"crear-un-nuevo-proyecto",level:2},{value:"Iniciar el Servidor",id:"iniciar-el-servidor",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En este tutorial aprender\xe1 a crear una aplicaci\xf3n web b\xe1sica con FoalTS. La aplicaci\xf3n de demostraci\xf3n es una simple lista de tareas con la que los usuarios pueden ver, crear y eliminar sus tareas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Requisitos:")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," 10 o superior")),(0,r.kt)("h2",{id:"crear-un-nuevo-proyecto"},"Crear un Nuevo Proyecto"),(0,r.kt)("p",null,"Primero necesita instalar globalmente la Interfaz de L\xednea de Comando (",(0,r.kt)("em",{parentName:"p"},"Command Line Interface")," o ",(0,r.kt)("em",{parentName:"p"},"CLI"),") de FoalTS. Le ayudar\xe1 a crear un nuevo proyecto y a generar archivos a lo largo de su desarrollo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @foal/cli\n")),(0,r.kt)("p",null,"A continuaci\xf3n, cree una nueva aplicaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal createapp my-app\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xbfTiene problemas para instalar Foal? \ud83d\udc49 Revise nuestra ",(0,r.kt)("a",{parentName:"p",href:"./installation-troubleshooting"},"p\xe1gina de soluci\xf3n de problemas"),".")),(0,r.kt)("p",null,"Este comando genera un nuevo directorio con la estructura b\xe1sica de la nueva aplicaci\xf3n. Tambi\xe9n instala todas las dependencias. Veamos lo que ha creado ",(0,r.kt)("inlineCode",{parentName:"p"},"createapp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"my-app/\n  config/\n  node_modules/\n  public/\n  src/\n    app/\n    e2e/\n    scripts/\n  ormconfig.js\n  package.json\n  tsconfig.*.json\n  .eslintrc.js\n")),(0,r.kt)("p",null,"El directorio ra\xedz externo ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," es s\xf3lo un contenedor para su proyecto."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"config/")," contiene los archivos de configuraci\xf3n para sus diferentes entornos (producci\xf3n, prueba, desarrollo, e2e, etc)."),(0,r.kt)("li",{parentName:"ul"},"El directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules/")," contiene todas las dependencias prod y dev de su proyecto."),(0,r.kt)("li",{parentName:"ul"},"Los archivos est\xe1ticos se encuentran en el directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"public/"),". Suelen ser im\xe1genes, CSS y archivos JavaScript del cliente y se sirven directamente cuando el servidor est\xe1 en funcionamiento."),(0,r.kt)("li",{parentName:"ul"},"El directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"src/")," contiene todo el c\xf3digo fuente de la aplicaci\xf3n.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"El directorio interno ",(0,r.kt)("inlineCode",{parentName:"li"},"app/")," incluye los componentes de su servidor (controladores, servicios y hooks)."),(0,r.kt)("li",{parentName:"ul"},"Las pruebas de lado a lado se encuentran en el directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/"),"."),(0,r.kt)("li",{parentName:"ul"},"La carpeta interior ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts/")," contiene los scripts destinados a ser llamados desde la l\xednea de comandos (por ejemplo: create-user)."))),(0,r.kt)("li",{parentName:"ul"},"El archivo ",(0,r.kt)("inlineCode",{parentName:"li"},"ormconfig.js")," define la configuraci\xf3n y las credenciales de conexi\xf3n de la(s) base(s) de datos. Tambi\xe9n se pueden pasar a trav\xe9s de variables de entorno."),(0,r.kt)("li",{parentName:"ul"},"El ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," enumera las dependencias y comandos del proyecto."),(0,r.kt)("li",{parentName:"ul"},"Los archivos ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.*.json")," listan la configuraci\xf3n del compilador de TypeScript para cada comando ",(0,r.kt)("inlineCode",{parentName:"li"},"npm"),"."),(0,r.kt)("li",{parentName:"ul"},"Finalmente, la configuraci\xf3n de linting se encuentra en el archivo ",(0,r.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TypeScript")),(0,r.kt)("p",{parentName:"blockquote"},"El lenguaje utilizado para desarrollar una aplicaci\xf3n FoalTS es ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),". Se trata de un superconjunto tipado de JavaScript que se compila en JavaScript simple. Las ventajas de utilizar TypeScript son muchas, pero en resumen, el lenguaje proporciona grandes herramientas y las caracter\xedsticas futuras de JavaScript.")),(0,r.kt)("h2",{id:"iniciar-el-servidor"},"Iniciar el Servidor"),(0,r.kt)("p",null,"Verifiquemos que el proyecto FoalTS funciona. Ejecute los siguientes comandos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd my-app\nnpm run develop\n")),(0,r.kt)("p",null,"Ha iniciado el servidor de desarrollo."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"El ",(0,r.kt)("strong",{parentName:"p"},"servidor de desarrollo")," vigila sus archivos y compila y recarga autom\xe1ticamente su c\xf3digo. No necesita reiniciar el servidor cada vez que realice cambios en el c\xf3digo. Tenga en cuenta que s\xf3lo est\xe1 pensado para ser utilizado en desarrollo, no lo utilice en producci\xf3n.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\xbfEl puerto 3001 ya est\xe1 en uso?")),(0,r.kt)("p",{parentName:"blockquote"},"Puede definir en ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.json")," qu\xe9 puerto utiliza la aplicaci\xf3n.")),(0,r.kt)("p",null,"Vaya a ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," en su navegador. Deber\xeda ver el texto ",(0,r.kt)("em",{parentName:"p"},"Welcome on board"),"."),(0,r.kt)("p",null,"Enhorabuena, \xa1ya tiene un servidor en funcionamiento!"))}u.isMDXComponent=!0}}]);