"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Su Primera Ruta",id:"tuto-5-our-first-route",slug:"5-our-first-route"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-5-our-first-route",id:"tutorials/real-world-example-with-react/tuto-5-our-first-route",title:"Su Primera Ruta",description:"La base de datos est\xe1 ahora llena de algunas publicaciones. Implementemos la primera ruta para recuperarlas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/5-our-first-route",permalink:"/es/docs/tutorials/real-world-example-with-react/5-our-first-route",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/5-our-first-route.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Su Primera Ruta",id:"tuto-5-our-first-route",slug:"5-our-first-route"},sidebar:"someSidebar",previous:{title:"Los Scripts Shell",permalink:"/es/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"},next:{title:"Prueba de la API con Swagger",permalink:"/es/docs/tutorials/real-world-example-with-react/6-swagger-interface"}},u={},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La base de datos est\xe1 ahora llena de algunas publicaciones. Implementemos la primera ruta para recuperarlas."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Punto final"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9todo"),(0,a.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/stories")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GET")),(0,a.kt)("td",{parentName:"tr",align:null},"Enumera las publicaciones de todos los usuarios. Se puede proporcionar un par\xe1metro de consulta opcional ",(0,a.kt)("inlineCode",{parentName:"td"},"authorId")," para filtrar las publicaciones a devolver.")))),(0,a.kt)("p",null,"Primero, genere el controlador de las publicaciones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/stories --register\n")),(0,a.kt)("p",null,"Aparece un nuevo archivo en el subdirectorio ",(0,a.kt)("inlineCode",{parentName:"p"},"api"),". \xc1bralo y sustituya su contenido."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n  @Get()\n  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })\n  async readStories(ctx: Context) {\n    const authorId = ctx.request.query.authorId as number|undefined;\n\n    let queryBuilder = Story\n      .createQueryBuilder('story')\n      .leftJoinAndSelect('story.author', 'author')\n      .select([\n        'story.id',\n        'story.title',\n        'story.link',\n        'author.id',\n        'author.name'\n      ]);\n\n    if (authorId !== undefined) {\n      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });\n    }\n\n    const stories = await queryBuilder.getMany();\n\n    return new HttpResponseOK(stories);\n  }\n}\n\n")),(0,a.kt)("p",null,"El m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"readStories")," recupera y devuelve las publicaciones junto con alguna informaci\xf3n sobre sus autores."),(0,a.kt)("p",null,"Al enviar una consulta a este punto final, el cuerpo de la respuesta tendr\xe1 el siguiente aspecto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "title": "How to build a simple to-do list",\n    "link": "https://foalts.org/docs/tutorials/simple-todo-list/1-installation",\n    "author": {\n      "id": 1,\n      "name": "John"\n    }\n  },\n  {\n    "id": 2,\n    "title": "FoalTS architecture overview",\n    "link": "https://foalts.org/docs/architecture/architecture-overview",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n  {\n    "id": 3,\n    "title": "Authentication with Foal",\n    "link": "https://foalts.org/docs/authentication-and-access-control/quick-start",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n]\n')))}p.isMDXComponent=!0}}]);