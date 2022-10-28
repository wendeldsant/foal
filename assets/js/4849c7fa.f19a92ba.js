"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1430],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var g={};for(var l in n)hasOwnProperty.call(n,l)&&(g[l]=n[l]);g.originalType=e,g.mdxType="string"==typeof e?e:o,a[1]=g;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>g,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"Logging & Debugging"},a=void 0,g={unversionedId:"utilities/logging-and-debugging",id:"version-1.x/utilities/logging-and-debugging",title:"Logging & Debugging",description:"HTTP Request Logging",source:"@site/versioned_docs/version-1.x/utilities/logging-and-debugging.md",sourceDirName:"utilities",slug:"/utilities/logging-and-debugging",permalink:"/docs/1.x/utilities/logging-and-debugging",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/utilities/logging-and-debugging.md",tags:[],version:"1.x",frontMatter:{title:"Logging & Debugging"},sidebar:"someSidebar",previous:{title:"Templates (SSR)",permalink:"/docs/1.x/utilities/templating"},next:{title:"Error Handling",permalink:"/docs/1.x/cookbook/error-handling"}},l={},s=[{value:"HTTP Request Logging",id:"http-request-logging",level:2},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",level:2},{value:"Disabling Error Logging",id:"disabling-error-logging",level:2},{value:"Logging Hook",id:"logging-hook",level:2},{value:"Advanced Logging",id:"advanced-logging",level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"http-request-logging"},"HTTP Request Logging"),(0,o.kt)("p",null,"FoalTS uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/morgan"},"morgan")," to log the HTTP requests. You can specify the output format using the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS_LOGGER_FORMAT")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n')),(0,o.kt)("h2",{id:"disabling-http-request-logging"},"Disabling HTTP Request Logging"),(0,o.kt)("p",null,"In some scenarios and environments, you might want to disable http request logging. You can achieve this by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"loggerFormat")," configuration option to ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "settings": {\n      "loggerFormat": "none",\n    }\n  }\n')),(0,o.kt)("h2",{id:"disabling-error-logging"},"Disabling Error Logging"),(0,o.kt)("p",null,"In some scenarios, you might want to disable error logging (error stack traces that are displayed when an error is thrown in a controller or hook). You can achieve this by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"allErrors")," configuration option to false. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "settings": {\n      "allErrors": false\n    }\n  }\n')),(0,o.kt)("h2",{id:"logging-hook"},"Logging Hook"),(0,o.kt)("p",null,"FoalTS provides a convenient hook for logging debug messages: ",(0,o.kt)("inlineCode",{parentName:"p"},"Log(message: string, options: LogOptions = {})"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,o.kt)("h2",{id:"advanced-logging"},"Advanced Logging"),(0,o.kt)("p",null,"If you need advanced logging, you might be interested in using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston"),", a popular logger in the Node.js ecosystem."),(0,o.kt)("p",null,"Here's an example on how to use it with Foal:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"LoggerService")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as winston from 'winston';\n\nexport class LoggerService {\n  private logger: any;\n\n  constructor() {\n    this.logger = winston.createLogger({\n      transports: [\n        new winston.transports.Console(),\n        new winston.transports.File({\n          filename: 'logs.txt'\n        })\n      ]\n    });\n  }\n\n  info(msg: string) {\n    this.logger.info(msg);\n  }\n\n  warn(msg: string) {\n    this.logger.warn(msg);\n  }\n\n  error(msg: string) {\n    this.logger.error(msg);\n  }\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"LogUserId hook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Hook } from '@foal/core';\n// LoggerService import.\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(LoggerService);\n    logger.info(`UserId is: ${ctx.user.id}`);\n  });\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ProductController")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get } from '@foal/core';\n// LogUserId import.\n\nexport class ProductController {\n\n  @Get('/')\n  @LogUserId()\n  readProducts() {\n    ...\n  }\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"AuthController")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Post } from '@foal/core';\n// LoggerService import.\n\nexport class AuthController {\n  @dependency\n  logger: LoggerService;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n\n")))}c.isMDXComponent=!0}}]);