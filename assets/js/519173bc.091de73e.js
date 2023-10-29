"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=g(n),u=a,c=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(c,l(l({ref:t},p),{},{components:n})):o.createElement(c,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var g=2;g<r;g++)l[g]=n[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var o=n(87462),a=(n(67294),n(3905));const r={title:"Logging"},l=void 0,i={unversionedId:"common/logging",id:"common/logging",title:"Logging",description:"Foal provides an advanced built-in logger. This page shows how to use it.",source:"@site/docs/common/logging.md",sourceDirName:"common",slug:"/common/logging",permalink:"/docs/common/logging",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/logging.md",tags:[],version:"current",frontMatter:{title:"Logging"},sidebar:"someSidebar",previous:{title:"Serialization",permalink:"/docs/common/serialization"},next:{title:"Task Scheduling",permalink:"/docs/common/task-scheduling"}},s={},g=[{value:"Recommended Configuration",id:"recommended-configuration",level:2},{value:"Accessing and Using the Logger",id:"accessing-and-using-the-logger",level:2},{value:"Levels of Logs",id:"levels-of-logs",level:2},{value:"Log Ouput Formats",id:"log-ouput-formats",level:2},{value:"The <code>dev</code> format",id:"the-dev-format",level:3},{value:"The <code>raw</code> format",id:"the-raw-format",level:3},{value:"The <code>json</code> format",id:"the-json-format",level:3},{value:"Hiding logs: the <code>none</code> format",id:"hiding-logs-the-none-format",level:3},{value:"HTTP Request Logging",id:"http-request-logging",level:2},{value:"Adding other parameters to the logs",id:"adding-other-parameters-to-the-logs",level:3},{value:"Formatting the log message (deprecated)",id:"formatting-the-log-message-deprecated",level:3},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",level:3},{value:"Socket.io Message Logging",id:"socketio-message-logging",level:2},{value:"Disabling Socket.io Message Logging",id:"disabling-socketio-message-logging",level:3},{value:"Error Logging",id:"error-logging",level:2},{value:"Disabling Error Logging",id:"disabling-error-logging",level:3},{value:"Log correlation (by HTTP request, user ID, etc)",id:"log-correlation-by-http-request-user-id-etc",level:2},{value:"Transports",id:"transports",level:2},{value:"Logging Hook (deprecated)",id:"logging-hook-deprecated",level:2}],p={toc:g};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Foal provides an advanced built-in logger. This page shows how to use it."),(0,a.kt)("h2",{id:"recommended-configuration"},"Recommended Configuration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"config/default.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "foal"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"config/development.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "logger": {\n      "format": "dev"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"accessing-and-using-the-logger"},"Accessing and Using the Logger"),(0,a.kt)("p",null,"To log a message anywhere in the application, you can inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," service and use its ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," method. This methods takes two parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a required ",(0,a.kt)("inlineCode",{parentName:"li"},"message")," string,"),(0,a.kt)("li",{parentName:"ul"},"and an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"params")," object if you wish to add additional data to the log.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Logger, Post } from '@foal/core';\n\nexport class AuthController {\n  @dependency\n  logger: Logger;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a hook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Hook, Logger } from '@foal/core';\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(Logger);\n    logger.info(`Logging user ID`, { userId: ctx.user.id });\n  });\n}\n")),(0,a.kt)("h2",{id:"levels-of-logs"},"Levels of Logs"),(0,a.kt)("p",null,"The logger supports four levels of logs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")," level which is commonly used to log debugging data,"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," level which logs informative data,"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"warn")," level which logs data that requires attention,"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," level which logs errors.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"this.logger.debug('This a debug message');\nthis.logger.info('This an info message');\nthis.logger.warn('This a warn message');\nthis.logger.error('This an error message');\n\nthis.logger.log('debug', 'This a debug message');\n")),(0,a.kt)("p",null,"By default, only the ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," messages are logged in the console. If you wish to log all messages, you can update your configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "logger": {\n      "logLevel": "DEBUG"\n    }\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value of ",(0,a.kt)("inlineCode",{parentName:"th"},"settings.logger.logLevel")),(0,a.kt)("th",{parentName:"tr",align:null},"Levels of logs displayed"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DEBUG")),(0,a.kt)("td",{parentName:"tr",align:null},"error, warn, info, debug")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"INFO")),(0,a.kt)("td",{parentName:"tr",align:null},"error, warn, info")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"WARN")),(0,a.kt)("td",{parentName:"tr",align:null},"error, warn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ERROR")),(0,a.kt)("td",{parentName:"tr",align:null},"error")))),(0,a.kt)("h2",{id:"log-ouput-formats"},"Log Ouput Formats"),(0,a.kt)("p",null,"Foal's logger lets you log your messages in three different ways: ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," (default), ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example of configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "logger": {\n      "format": "json"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"the-dev-format"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"dev")," format"),(0,a.kt)("p",null,"With this format, the logged output contains a small timestamp, beautiful colors and the message. The logger also displays an ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," if one is passed as parameter and it prettifies the HTTP request logs."),(0,a.kt)("p",null,"This format is adapted to a development environment and focuses on reducing noise."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dev format",src:n(29240).Z,width:"1754",height:"260"})),(0,a.kt)("h3",{id:"the-raw-format"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"raw")," format"),(0,a.kt)("p",null,"This format aims to log much more information and is suitable for a production environment."),(0,a.kt)("p",null,"The output contains a complete time stamp, the log level, the message and all parameters passed to the logger if any."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"raw format",src:n(26066).Z,width:"1754",height:"474"})),(0,a.kt)("h3",{id:"the-json-format"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"json")," format"),(0,a.kt)("p",null,"Similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," one, this format prints the same information except that it is displayed with a JSON. This format is useful if you need to diggest the logs with another log tool (such as an aggregator for example)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"raw format",src:n(13043).Z,width:"1754",height:"206"})),(0,a.kt)("h3",{id:"hiding-logs-the-none-format"},"Hiding logs: the ",(0,a.kt)("inlineCode",{parentName:"h3"},"none")," format"),(0,a.kt)("p",null,"If you wish to completly mask logs, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," format."),(0,a.kt)("h2",{id:"http-request-logging"},"HTTP Request Logging"),(0,a.kt)("p",null,"Each request received by Foal is logged with the INFO level."),(0,a.kt)("p",null,"With the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.loggerFormat")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"foal"'),", the messages start with ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP request -")," and end with the request method and URL. The log parameters include the response status code and content length as well as the response time and the request method and URL."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: the query parameters are not logged to avoid logging sensitive data (such as an API key).")),(0,a.kt)("h3",{id:"adding-other-parameters-to-the-logs"},"Adding other parameters to the logs"),(0,a.kt)("p",null,"If the default logged HTTP parameters are not sufficient in your case, you can extend them with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"getHttpLogParams")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, getHttpLogParamsDefault } from '@foal/core';\n\nconst app = await createApp({\n  getHttpLogParams: (tokens, req, res) => ({\n    ...getHttpLogParamsDefault(tokens, req, res),\n    myCustomHeader: req.get('my-custom-header'),\n  })\n})\n")),(0,a.kt)("h3",{id:"formatting-the-log-message-deprecated"},"Formatting the log message (deprecated)"),(0,a.kt)("p",null,"If you wish to customize the HTTP log messages, you can set the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"loggerFormat.loggerFormat")," configuration to a format supported by ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/morgan"},"morgan"),". With this technique, no parameters will be logged though."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n')),(0,a.kt)("h3",{id:"disabling-http-request-logging"},"Disabling HTTP Request Logging"),(0,a.kt)("p",null,"In some scenarios and environments, you might want to disable HTTP request logging. You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"loggerFormat")," configuration option to ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "none"\n  }\n}\n')),(0,a.kt)("h2",{id:"socketio-message-logging"},"Socket.io Message Logging"),(0,a.kt)("p",null,"Each message, connection or disconnection is logged with the INFO level."),(0,a.kt)("p",null,"When a client establishes a connection, ",(0,a.kt)("inlineCode",{parentName:"p"},"Socket.io connection")," is logged with the socket ID as parameter."),(0,a.kt)("p",null,"When a client disconnects, ",(0,a.kt)("inlineCode",{parentName:"p"},"Socket.io disconnection")," is logged with the socket ID and the reason of the disconnection as parameters."),(0,a.kt)("p",null,"When a message is received, ",(0,a.kt)("inlineCode",{parentName:"p"},"Socket.io message received - ${eventName}")," is logged with the event name and the response status as parameters."),(0,a.kt)("h3",{id:"disabling-socketio-message-logging"},"Disabling Socket.io Message Logging"),(0,a.kt)("p",null,"In some scenarios and environments, you might want to disable socket.io message logging. You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.logger.logSocketioMessages")," configuration option to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "logger": {\n      "logSocketioMessages": false\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"error-logging"},"Error Logging"),(0,a.kt)("p",null,"When an error is thrown (or rejected) in a hook, controller or service and is not caught, the error is logged using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger.error")," method."),(0,a.kt)("h3",{id:"disabling-error-logging"},"Disabling Error Logging"),(0,a.kt)("p",null,"In some scenarios, you might want to disable error logging. You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"allErrors")," configuration option to false. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "allErrors": false\n  }\n}\n')),(0,a.kt)("h2",{id:"log-correlation-by-http-request-user-id-etc"},"Log correlation (by HTTP request, user ID, etc)"),(0,a.kt)("p",null,"When logs are generated in large quantities, we often like to aggregate them by request or user. This can be done using Foal's log context."),(0,a.kt)("p",null,"When receiving an HTTP request, Foal adds the request ID to the logger context. On each subsequent call to the logger, it will behave as if the request ID had been passed as a parameter."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  @dependency\n  logger: Logger;\n\n  @Get('/foo')\n  getFoo(ctx: Context) {\n    this.logger.info('Hello world');\n    // equivalent to this.logger.info('Hello world', { requestId: ctx.request.id });\n\n    setTimeout(() => {\n      this.logger.info('Hello world');\n      // equivalent to this.logger.info('Hello world', { requestId: ctx.request.id });\n    }, 1000)\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("p",null,"In the same way, the authentification hooks ",(0,a.kt)("inlineCode",{parentName:"p"},"@JWTRequired"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@JWTOptional")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseSessions")," will add the ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," (if any) to the logger context."),(0,a.kt)("p",null,"When using a Socket.io controller, the socket ID and message ID are also added to the logger context."),(0,a.kt)("p",null,"This mecanism helps filter logs of a specific request or specific user in a logging tool."),(0,a.kt)("p",null,"If needed, you call also add manually custom parameters to the logger context with this fonction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.addLogContext('myKey', 'myValue');\n")),(0,a.kt)("h2",{id:"transports"},"Transports"),(0,a.kt)("p",null,"All logs are printed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," function."),(0,a.kt)("p",null,"If you also wish to consume the logs in another way (for example, to send them to a third-party error-tracking or logging tool), you can add one or more transports to the logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"logger.addTransport((level: 'debug'|'warn'|'info'|'error', log: string) => {\n  // Do something\n})\n")),(0,a.kt)("h2",{id:"logging-hook-deprecated"},"Logging Hook (deprecated)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This hook is deprecated and will be removed in a next release. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," service in a custom hook instead.")),(0,a.kt)("p",null,"FoalTS provides a convenient hook for logging debug messages: ",(0,a.kt)("inlineCode",{parentName:"p"},"Log(message: string, options: LogOptions = {})"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n")))}d.isMDXComponent=!0},29240:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dev-format-38d7e2e0c32975ec1126097a40e983df.png"},13043:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/json-format-3fd891344d40c3b23aeb178c3eb94b6e.png"},26066:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/raw-format-2dccbd1406071bb3c6b3758c4f6055fb.png"}}]);