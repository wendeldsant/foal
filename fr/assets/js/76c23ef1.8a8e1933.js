"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Validation & Assainissement",id:"tuto-6-validation-and-sanitization",slug:"6-validation-and-sanitization"},i=void 0,s={unversionedId:"tutorials/simple-todo-list/tuto-6-validation-and-sanitization",id:"version-2.x/tutorials/simple-todo-list/tuto-6-validation-and-sanitization",title:"Validation & Assainissement",description:"Actuellement, les entr\xe9es re\xe7ues par le serveur ne sont pas v\xe9rifi\xe9es. Tout le monde peut envoyer n'importe quoi en lan\xe7ant une requ\xeate \xe0 POST /api/todos. C'est pourquoi les entr\xe9es du client ne sont pas consid\xe9r\xe9es comme fiables.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/tutorials/simple-todo-list/6-validation-and-sanitization.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/6-validation-and-sanitization",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/6-validation-and-sanitization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/simple-todo-list/6-validation-and-sanitization.md",tags:[],version:"2.x",sidebarPosition:6,frontMatter:{title:"Validation & Assainissement",id:"tuto-6-validation-and-sanitization",slug:"6-validation-and-sanitization"},sidebar:"someSidebar",previous:{title:"L'API REST",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/5-the-rest-api"},next:{title:"Tests Unitaires",permalink:"/fr/docs/2.x/tutorials/simple-todo-list/7-unit-testing"}},l={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Actuellement, les entr\xe9es re\xe7ues par le serveur ne sont pas v\xe9rifi\xe9es. Tout le monde peut envoyer n'importe quoi en lan\xe7ant une requ\xeate \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/todos"),". C'est pourquoi les entr\xe9es du client ne sont pas consid\xe9r\xe9es comme fiables."),(0,r.kt)("p",null,"Vous utiliserez les ",(0,r.kt)("em",{parentName:"p"},"hooks")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateBody")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatePathParam")," pour valider et nettoyer les donn\xe9es entrantes."),(0,r.kt)("p",null,"Un ",(0,r.kt)("em",{parentName:"p"},"hook")," est un d\xe9corateur qui est attach\xe9 \xe0 un gestionnaire de route (une m\xe9thode de contr\xf4leur). Il est ex\xe9cut\xe9 avant la m\xe9thode et est donc particuli\xe8rement adapt\xe9 \xe0 la validation ou au contr\xf4le d'acc\xe8s."),(0,r.kt)("p",null,"Les m\xe9thodes ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateBody")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatePathParam")," v\xe9rifient respectivement les propri\xe9t\xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," de l'objet de requ\xeate. Ils prennent un sch\xe9ma comme argument unique."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"FoalTS utilise ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epoberezkin/ajv"},"Ajv"),", un validateur de sch\xe9ma JSON rapide, pour d\xe9finir ses sch\xe9mas.")),(0,r.kt)("p",null,"Ajoutons la validation et l'assainissement \xe0 votre application. En fait, vous avez d\xe9j\xe0 d\xe9fini le sch\xe9ma todo dans le script ",(0,r.kt)("inlineCode",{parentName:"p"},"create-todo")," plus t\xf4t."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ...\n  ValidateBody, ValidatePathParam\n} from '@foal/core';\n\nexport class ApiController {\n\n  ...\n\n  @Post('/todos')\n  @ValidateBody({\n    // Every additional properties that are not defined in the \"properties\"\n    // object should be removed.\n    additionalProperties: false,\n    properties: {\n      // The \"text\" property of ctx.request.body should be a string if it exists.\n      text: { type: 'string' }\n    },\n    // The property \"text\" is required.\n    required: [ 'text' ],\n    // The body request should be an object once parsed by the framework.\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    await todo.save();\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  // The id should be a number. If it is not, the hook returns a \"400 - Bad Request\" error.\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await todo.remove();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")))}u.isMDXComponent=!0}}]);