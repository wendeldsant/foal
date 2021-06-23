(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8589],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5021:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),l=["components"],i={title:"Construcci\xf3n de Producci\xf3n",id:"tuto-14-production-build",slug:"14-production-build"},c=void 0,p={unversionedId:"tutorials/real-world-example-with-react/tuto-14-production-build",id:"tutorials/real-world-example-with-react/tuto-14-production-build",isDocsHomePage:!1,title:"Construcci\xf3n de Producci\xf3n",description:"Hasta ahora, las aplicaciones front-end y back-end est\xe1n compiladas y servidas por dos servidores de desarrollo diferentes. El siguiente paso es construirlas en una sola lista para producci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/14-production-build.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/14-production-build",permalink:"/es/docs/tutorials/real-world-example-with-react/14-production-build",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/14-production-build.md",version:"current",sidebarPosition:14,frontMatter:{title:"Construcci\xf3n de Producci\xf3n",id:"tuto-14-production-build",slug:"14-production-build"},sidebar:"someSidebar",previous:{title:"Protecci\xf3n contra CSRF",permalink:"/es/docs/tutorials/real-world-example-with-react/13-csrf"},next:{title:"Autenticaci\xf3n Social con Google",permalink:"/es/docs/tutorials/real-world-example-with-react/15-social-auth"}},u=[{value:"Construir la aplicaci\xf3n React",id:"construir-la-aplicaci\xf3n-react",children:[]},{value:"Prevenci\xf3n de errores 404",id:"prevenci\xf3n-de-errores-404",children:[]},{value:"Construir la aplicaci\xf3n Foal",id:"construir-la-aplicaci\xf3n-foal",children:[]}],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hasta ahora, las aplicaciones front-end y back-end est\xe1n compiladas y servidas por dos servidores de desarrollo diferentes. El siguiente paso es construirlas en una sola lista para producci\xf3n."),(0,a.kt)("h2",{id:"construir-la-aplicaci\xf3n-react"},"Construir la aplicaci\xf3n React"),(0,a.kt)("p",null,"En su directorio de front-end, ejecute el siguiente comando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"Este comando construye la aplicaci\xf3n React para producci\xf3n y guarda los archivos en el directorio ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("p",null,"\xc1bralo y copie todo su contenido en el directorio ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," de su aplicaci\xf3n Foal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cuando utilice ",(0,a.kt)("inlineCode",{parentName:"p"},"foal connect")," con Angular o Vue, el frontend build guardar\xe1 autom\xe1ticamente los archivos en ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),".")),(0,a.kt)("p",null,"Ahora, si navega a ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001"),", ver\xe1 la aplicaci\xf3n frontend servida por el servidor backend."),(0,a.kt)("h2",{id:"prevenci\xf3n-de-errores-404"},"Prevenci\xf3n de errores 404"),(0,a.kt)("p",null,"Abra el enlace ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," en una nueva pesta\xf1a. El servidor devuelve un error 404."),(0,a.kt)("p",null,"Esto es perfectamente normal. En este momento, el servidor no tiene un manejador para la ruta ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," y por lo tanto devuelve este error. Anteriormente, este problema era manejado por el servidor de desarrollo de React, por lo que no exist\xeda este error."),(0,a.kt)("p",null,"Para resolver este problema, a\xf1adir\xe1 un m\xe9todo de controlador que procesar\xe1 las peticiones no gestionadas."),(0,a.kt)("p",null,"Abra ",(0,a.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," y actualice su contenido."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, Get, HttpResponseNotFound, IAppController, render } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n\n  async init() {\n    await createConnection();\n  }\n\n  @Get('*')\n  renderApp(ctx: Context) {\n    if (!ctx.request.accepts('html')) {\n      return new HttpResponseNotFound();\n    }\n\n    return render('./public/index.html');\n  }\n}\n\n")),(0,a.kt)("p",null,"Este m\xe9todo devuelve la aplicaci\xf3n React para cualquier solicitud GET que acepte contenido HTML y que no haya sido manejada por los otros m\xe9todos del controlador y sus subcontroladores."),(0,a.kt)("p",null,"Si vuelve a ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," y actualiza la p\xe1gina, deber\xeda aparecer la p\xe1gina de acceso."),(0,a.kt)("h2",{id:"construir-la-aplicaci\xf3n-foal"},"Construir la aplicaci\xf3n Foal"),(0,a.kt)("p",null,"Ahora, si quiere construir la aplicaci\xf3n backend para no utilizar la opci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run develop"),", puede ejecutar este comando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"Luego, para lanzar la aplicaci\xf3n, simplemente ejecute lo siguiente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))}d.isMDXComponent=!0}}]);