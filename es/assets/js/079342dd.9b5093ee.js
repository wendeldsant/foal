"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2686],{5488:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var t=r(74848),o=r(28453),s=r(11470),a=r(19365);const l={title:"Logging"},i=void 0,c={id:"common/logging",title:"Logging",description:"HTTP Request Logging",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/logging.md",sourceDirName:"common",slug:"/common/logging",permalink:"/es/docs/common/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/logging.md",tags:[],version:"current",frontMatter:{title:"Logging"},sidebar:"someSidebar",previous:{title:"Serializaci\xf3n",permalink:"/es/docs/common/serialization"},next:{title:"Programaci\xf3n de Tareas",permalink:"/es/docs/common/task-scheduling"}},u={},g=[{value:"HTTP Request Logging",id:"http-request-logging",level:2},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",level:2},{value:"Disabling Error Logging",id:"disabling-error-logging",level:2},{value:"Logging Hook",id:"logging-hook",level:2},{value:"Advanced Logging",id:"advanced-logging",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"http-request-logging",children:"HTTP Request Logging"}),"\n",(0,t.jsxs)(n.p,{children:["FoalTS uses ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/morgan",children:"morgan"})," to log the HTTP requests. You can specify the output format using the environment variable ",(0,t.jsx)(n.code,{children:"SETTINGS_LOGGER_FORMAT"})," or the ",(0,t.jsx)(n.code,{children:"config/default.json"})," file:"]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(a.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  loggerFormat: tiny\n"})})}),(0,t.jsx)(a.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n'})})}),(0,t.jsx)(a.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    loggerFormat: "tiny"\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-http-request-logging",children:"Disabling HTTP Request Logging"}),"\n",(0,t.jsxs)(n.p,{children:["In some scenarios and environments, you might want to disable http request logging. You can achieve this by setting the ",(0,t.jsx)(n.code,{children:"loggerFormat"})," configuration option to ",(0,t.jsx)(n.code,{children:"none"}),"."]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(a.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  loggerFormat: none\n"})})}),(0,t.jsx)(a.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "loggerFormat": "none"\n  }\n}\n'})})}),(0,t.jsx)(a.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    loggerFormat: "none"\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"disabling-error-logging",children:"Disabling Error Logging"}),"\n",(0,t.jsxs)(n.p,{children:["In some scenarios, you might want to disable error logging (error stack traces that are displayed when an error is thrown in a controller or hook). You can achieve this by setting the ",(0,t.jsx)(n.code,{children:"allErrors"})," configuration option to false."]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(a.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  allErrors: false\n"})})}),(0,t.jsx)(a.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "allErrors": false\n  }\n}\n'})})}),(0,t.jsx)(a.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    allErrors: false\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"logging-hook",children:"Logging Hook"}),"\n",(0,t.jsxs)(n.p,{children:["FoalTS provides a convenient hook for logging debug messages: ",(0,t.jsx)(n.code,{children:"Log(message: string, options: LogOptions = {})"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-logging",children:"Advanced Logging"}),"\n",(0,t.jsxs)(n.p,{children:["If you need advanced logging, you might be interested in using ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/winston",children:"winston"}),", a popular logger in the Node.js ecosystem."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example on how to use it with Foal:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"LoggerService"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import * as winston from 'winston';\n\nexport class LoggerService {\n  private logger: any;\n\n  constructor() {\n    this.logger = winston.createLogger({\n      transports: [\n        new winston.transports.Console(),\n        new winston.transports.File({\n          filename: 'logs.txt'\n        })\n      ]\n    });\n  }\n\n  info(msg: string) {\n    this.logger.info(msg);\n  }\n\n  warn(msg: string) {\n    this.logger.warn(msg);\n  }\n\n  error(msg: string) {\n    this.logger.error(msg);\n  }\n\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"LogUserId hook"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Hook } from '@foal/core';\n// LoggerService import.\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(LoggerService);\n    logger.info(`UserId is: ${ctx.user.id}`);\n  });\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"ProductController"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get } from '@foal/core';\n// LogUserId import.\n\nexport class ProductController {\n\n  @Get('/')\n  @LogUserId()\n  readProducts() {\n    ...\n  }\n\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"AuthController"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Post } from '@foal/core';\n// LoggerService import.\n\nexport class AuthController {\n  @dependency\n  logger: LoggerService;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),o=r(34164),s=r(23104),a=r(56347),l=r(205),i=r(57485),c=r(31682),u=r(89466);function g(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return g(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=d(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,g]=p({queryString:r,groupId:o}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),f=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),x(e)}),[g,x,s]),tabValues:s}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),o=l[r].value;o!==t&&(c(n),a(o))},g=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:g,onClick:u,...s,className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:g(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);