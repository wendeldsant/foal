"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6257],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Aper\xe7u de l'Architecture"},s=void 0,i={unversionedId:"architecture/architecture-overview",id:"version-3.x/architecture/architecture-overview",title:"Aper\xe7u de l'Architecture",description:"FoalTS is a framework for creating server-side Node.js applications. It is written in TypeScript, a typed superset of JavaScript that provides advanced development tools and the latest language features.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-3.x/architecture/architecture-overview.md",sourceDirName:"architecture",slug:"/architecture/architecture-overview",permalink:"/fr/docs/3.x/architecture/architecture-overview",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/architecture/architecture-overview.md",tags:[],version:"3.x",frontMatter:{title:"Aper\xe7u de l'Architecture"},sidebar:"someSidebar",previous:{title:"Authentification Sociale avec Google",permalink:"/fr/docs/3.x/tutorials/real-world-example-with-react/15-social-auth"},next:{title:"Contr\xf4leurs",permalink:"/fr/docs/3.x/architecture/controllers"}},l={},c=[{value:"Controllers",id:"controllers",level:2},{value:"Services",id:"services",level:2},{value:"Hooks",id:"hooks",level:2},{value:"A Simple Application",id:"a-simple-application",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FoalTS is a framework for creating server-side ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," applications. It is written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", a typed superset of JavaScript that provides advanced development tools and the latest language features."),(0,o.kt)("p",null,"FoalTS architecture is organized around three main components: controllers, services and hooks."),(0,o.kt)("h2",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"Controllers are classes instantiated as singletons. Their methods process the incoming HTTP requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"Services are also classes instantiated as singletons. They are used by the controllers (or hooks) to perform specific tasks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass FormatService {\n  withDate(message: string): string {\n    return `${new Date()} - ${message}`;\n  }\n}\n\nclass AppController {\n  @dependency\n  format: FormatService;\n\n  @Get('/')\n  index() {\n    const message = this.format.withDate('Hello world!');\n    return new HttpResponseOK(message);\n  }\n\n}\n")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Hooks are small functions that add extra logic before or after the execution of a controller method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nclass AppController {\n\n  @Get('/')\n  @JWTRequired()\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,o.kt)("h2",{id:"a-simple-application"},"A Simple Application"),(0,o.kt)("p",null,"Controllers may have sub-controllers. Hooks can be attached to the controllers or their methods. "),(0,o.kt)("p",null,"Here's an example of what a FoalTS application may look like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, Get, HttpResponseNotFound, HttpResponseOK, Log } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass ApiController {\n  private products = [\n    { id: 1, name: 'phone' },\n    { id: 2, name: 'computer' },\n  ]\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Get('/products/:id')\n  getProduct(ctx: Context) {\n    const product = this.products.find(\n      p => p.id === parseInt(ctx.request.params.id, 10)\n    );\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n}\n\n@Log('Receiving a request...')\nclass AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  @Get('/')\n  index() {\n    return new HttpResponseOK('Welcome!');\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request Lifecycle",src:r(10529).Z,width:"677",height:"359"})))}u.isMDXComponent=!0},10529:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/request_lifecycle-6483154b08c8a22d7412d0fa953a7304.png"}}]);