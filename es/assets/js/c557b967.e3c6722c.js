"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4937],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(t),d=n,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55738:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const o={title:"Prueba de la API con Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-6-swagger-interface",id:"tutorials/real-world-example-with-react/tuto-6-swagger-interface",title:"Prueba de la API con Swagger",description:"Ahora que se ha implementado el primer punto final de la API, el siguiente paso es probarlo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/6-swagger-interface.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/6-swagger-interface",permalink:"/es/docs/tutorials/real-world-example-with-react/6-swagger-interface",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/6-swagger-interface.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Prueba de la API con Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},sidebar:"someSidebar",previous:{title:"Su Primera Ruta",permalink:"/es/docs/tutorials/real-world-example-with-react/5-our-first-route"},next:{title:"La Aplicaci\xf3n Frontend",permalink:"/es/docs/tutorials/real-world-example-with-react/7-add-frontend"}},p={},s=[],c={toc:s};function u(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ahora que se ha implementado el primer punto final de la API, el siguiente paso es probarlo."),(0,n.kt)("p",null,"Para ello, generar\xe1 una p\xe1gina de documentaci\xf3n completa de su API desde la que podr\xe1 enviar solicitudes. Esta p\xe1gina se generar\xe1 utilizando ",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger UI")," y la ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/"},"especificaci\xf3n OpenAPI"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/swagger\n")),(0,n.kt)("p",null,"En primer lugar, proporcione alguna informaci\xf3n para describir su API de forma global."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, controller } from '@foal/core';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),(0,n.kt)("p",null,"A continuaci\xf3n, genere un nuevo controlador. Este se encargar\xe1 de renderizar la nueva p\xe1gina."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller openapi --register\n")),(0,n.kt)("p",null,"Haga que la clase generada extienda la clase abstracta ",(0,n.kt)("inlineCode",{parentName:"p"},"SwaggerController"),". Y luego proporcione el controlador ra\xedz de su API como una opci\xf3n al controlador."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\nexport class OpenapiController extends SwaggerController  {\n\n  options = {\n    controllerClass: ApiController\n  }\n\n}\n")),(0,n.kt)("p",null,"Por \xfaltimo, actualice su archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," para que la p\xe1gina Swagger UI est\xe9 disponible en ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"/swagger"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n\n")),(0,n.kt)("p",null,"Si navega hasta ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger"),", ver\xe1 la p\xe1gina de documentaci\xf3n generada a partir de su c\xf3digo."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Swagger page",src:t(75791).Z,width:"2560",height:"1394"})),(0,n.kt)("p",null,"Ahora haga clic en el bot\xf3n ",(0,n.kt)("em",{parentName:"p"},"Try it out"),". Los campos se vuelven editables y puede enviar solicitudes para probar su API."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Swagger page",src:t(55696).Z,width:"2560",height:"1386"})))}u.isMDXComponent=!0},75791:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/swagger1-3abe32cd345086f35f191e1284daa45e.png"},55696:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/swagger2-a7c73effa7473d646ed981f1f55acd4f.png"}}]);