(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5026],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=g(t),m=o,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var g=2;g<a;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),o=t(944),a=t(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,g=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=(0,o.Z)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,k=(0,r.useState)(u),b=k[0],y=k[1],h=r.Children.toArray(e.children),N=[];if(null!=p){var T=f[p];null!=T&&T!==b&&c.some((function(e){return e.value===T}))&&y(T)}var w=function(e){var n=e.currentTarget,t=N.indexOf(n),r=c[t].value;y(r),null!=p&&(v(p,r),setTimeout((function(){var e,t,r,o,a,l,s,g;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,l=window,s=l.innerHeight,g=l.innerWidth,t>=0&&a<=g&&o<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case g:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var o=N.indexOf(e.target)-1;t=N[o]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":b===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),o=t(9443);n.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},8610:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),l=t(1395),i=t(8215),s=["components"],g={title:"Logging & Debugging"},u=void 0,c={unversionedId:"common/logging-and-debugging",id:"common/logging-and-debugging",isDocsHomePage:!1,title:"Logging & Debugging",description:"HTTP Request Logging",source:"@site/docs/common/logging-and-debugging.md",sourceDirName:"common",slug:"/common/logging-and-debugging",permalink:"/docs/common/logging-and-debugging",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/logging-and-debugging.md",version:"current",frontMatter:{title:"Logging & Debugging"},sidebar:"someSidebar",previous:{title:"Templates (SSR)",permalink:"/docs/common/templating"},next:{title:"Generate Tokens",permalink:"/docs/common/generate-tokens"}},p=[{value:"HTTP Request Logging",id:"http-request-logging",children:[]},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",children:[]},{value:"Disabling Error Logging",id:"disabling-error-logging",children:[]},{value:"Logging Hook",id:"logging-hook",children:[]},{value:"Advanced Logging",id:"advanced-logging",children:[]}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"http-request-logging"},"HTTP Request Logging"),(0,a.kt)("p",null,"FoalTS uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/morgan"},"morgan")," to log the HTTP requests. You can specify the output format using the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SETTINGS_LOGGER_FORMAT")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/default.json")," file:"),(0,a.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  loggerFormat: tiny\n"))),(0,a.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    loggerFormat: "tiny"\n  }\n}\n')))),(0,a.kt)("h2",{id:"disabling-http-request-logging"},"Disabling HTTP Request Logging"),(0,a.kt)("p",null,"In some scenarios and environments, you might want to disable http request logging. You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"loggerFormat")," configuration option to ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),". "),(0,a.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  loggerFormat: none\n"))),(0,a.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "none"\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    loggerFormat: "none"\n  }\n}\n')))),(0,a.kt)("h2",{id:"disabling-error-logging"},"Disabling Error Logging"),(0,a.kt)("p",null,"In some scenarios, you might want to disable error logging (error stack traces that are displayed when an error is thrown in a controller or hook). You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"allErrors")," configuration option to false. "),(0,a.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  allErrors: false\n"))),(0,a.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "allErrors": false\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    allErrors: false\n  }\n}\n")))),(0,a.kt)("h2",{id:"logging-hook"},"Logging Hook"),(0,a.kt)("p",null,"FoalTS provides a convenient hook for logging debug messages: ",(0,a.kt)("inlineCode",{parentName:"p"},"Log(message: string, options: LogOptions = {})"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h2",{id:"advanced-logging"},"Advanced Logging"),(0,a.kt)("p",null,"If you need advanced logging, you might be interested in using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston"),", a popular logger in the Node.js ecosystem."),(0,a.kt)("p",null,"Here's an example on how to use it with Foal:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"LoggerService")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as winston from 'winston';\n\nexport class LoggerService {\n  private logger: any;\n\n  constructor() {\n    this.logger = winston.createLogger({\n      transports: [\n        new winston.transports.Console(),\n        new winston.transports.File({\n          filename: 'logs.txt'\n        })\n      ]\n    });\n  }\n\n  info(msg: string) {\n    this.logger.info(msg);\n  }\n\n  warn(msg: string) {\n    this.logger.warn(msg);\n  }\n\n  error(msg: string) {\n    this.logger.error(msg);\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"LogUserId hook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Hook } from '@foal/core';\n// LoggerService import.\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(LoggerService);\n    logger.info(`UserId is: ${ctx.user.id}`);\n  });\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ProductController")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get } from '@foal/core';\n// LogUserId import.\n\nexport class ProductController {\n\n  @Get('/')\n  @LogUserId()\n  readProducts() {\n    ...\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"AuthController")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Post } from '@foal/core';\n// LoggerService import.\n\nexport class AuthController {\n  @dependency\n  logger: LoggerService;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n\n")))}d.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);