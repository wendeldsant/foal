"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={title:"Initialisation"},o=void 0,c={unversionedId:"architecture/initialization",id:"architecture/initialization",title:"Initialisation",description:"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/architecture/initialization.md",sourceDirName:"architecture",slug:"/architecture/initialization",permalink:"/fr/docs/architecture/initialization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/initialization.md",tags:[],version:"current",frontMatter:{title:"Initialisation"},sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/fr/docs/architecture/hooks"},next:{title:"Gestion des Erreurs",permalink:"/fr/docs/architecture/error-handling"}},l={},s=[{value:"Initializing the Application",id:"initializing-the-application",level:2},{value:"Initializing a Service",id:"initializing-a-service",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In many situations, we need to initialize the application (i.e perform certain actions) before listening to incoming HTTP requests. This is the case, for example, if you need to establish a connection to the database."),(0,r.kt)("p",null,"There are two ways to achieve this in FoalTS."),(0,r.kt)("h2",{id:"initializing-the-application"},"Initializing the Application"),(0,r.kt)("p",null,"The first approach is to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," method to the root controller class which will be called before the application is fully created. This method can be synchronous or asynchronous."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example 1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\n\nimport { ServiceA } from '../services';\n\nexport class AppController {\n\n  @dependency\n  serviceA: ServiceA;\n\n  async init() {\n    await this.serviceA.doSomething();\n  }\n\n}\n")),(0,r.kt)("h2",{id:"initializing-a-service"},"Initializing a Service"),(0,r.kt)("p",null,"The second approach is to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," method in your services. This method can be synchronous or asynchronous."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ServiceA {\n\n  async boot() {\n    await doSomething();\n  }\n\n}\n")),(0,r.kt)("p",null,"Boot methods are executed before ",(0,r.kt)("inlineCode",{parentName:"p"},"AppController.init")," gets called."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you manually inject services to your service manager and you want their ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," methods to be called, you must specify this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," method options."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const serviceManager = new ServiceManager();\nserviceManager.set(ServiceA, myServiceInstance, { boot: true });\n"))),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"If your initialization consists of several asynchronous tasks, you may want to perform them in ",(0,r.kt)("em",{parentName:"p"},"parallel"),". This will reduce the initialization time, which has an impact if you use a serverless architecture."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n\n  async init() {\n    // Don't do\n    await createConnection();\n    await createAnotherConnection();\n\n    // Do\n    await Promise.all([\n      createConnection(),\n      createAnotherConnection()\n    ])\n  }\n\n}\n")))}u.isMDXComponent=!0}}]);