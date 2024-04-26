"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6025],{58097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=t(74848),o=t(28453);const r={title:"Comunicaci\xf3n en Tiempo Real",sidebar_label:"WebSockets"},c=void 0,i={id:"common/websockets",title:"Comunicaci\xf3n en Tiempo Real",description:"Foal allows you to establish two-way interactive communication between your server(s) and your clients. For this, it uses the socket.io v4 library which is primarily based on the WebSocket protocol. It supports disconnection detection and automatic reconnection and works with proxies and load balancers.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/websockets.md",sourceDirName:"common",slug:"/common/websockets",permalink:"/es/docs/common/websockets",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/websockets.md",tags:[],version:"current",frontMatter:{title:"Comunicaci\xf3n en Tiempo Real",sidebar_label:"WebSockets"},sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/es/docs/common/graphql"},next:{title:"gRPC",permalink:"/es/docs/common/gRPC"}},l={},a=[{value:"Get Started",id:"get-started",level:2},{value:"Server",id:"server",level:3},{value:"Client",id:"client",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Controllers and hooks",id:"controllers-and-hooks",level:3},{value:"Contexts",id:"contexts",level:4},{value:"Responses",id:"responses",level:4},{value:"Hooks",id:"hooks",level:4},{value:"Summary table",id:"summary-table",level:4},{value:"Send a message",id:"send-a-message",level:3},{value:"Broadcast a message",id:"broadcast-a-message",level:3},{value:"Grouping clients in rooms",id:"grouping-clients-in-rooms",level:3},{value:"Accessing the socket.io server",id:"accessing-the-socketio-server",level:3},{value:"Error-handling",id:"error-handling",level:3},{value:"Customizing the error handler",id:"customizing-the-error-handler",level:4},{value:"Payload Validation",id:"payload-validation",level:2},{value:"Unit Testing",id:"unit-testing",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Multiple node servers",id:"multiple-node-servers",level:3},{value:"Handling connection",id:"handling-connection",level:3},{value:"Error-handling",id:"error-handling-1",level:4},{value:"Custom server options",id:"custom-server-options",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Foal allows you to establish two-way interactive communication between your server(s) and your clients. For this, it uses the ",(0,s.jsx)(n.a,{href:"https://socket.io/",children:"socket.io v4"})," library which is primarily based on the ",(0,s.jsx)(n.strong,{children:"WebSocket"})," protocol. It supports disconnection detection and automatic reconnection and works with proxies and load balancers."]}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,s.jsx)(n.h3,{id:"server",children:"Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @foal/socket.io\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"services/websocket.service.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, ValidatePayload, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  @EventName('create product')\n  @ValidatePayload({\n    additionalProperties: false,\n    properties: { name: { type: 'string' }},\n    required: [ 'name' ],\n    type: 'object'\n  })\n  async createProduct(ctx: WebsocketContext, payload: { name: string }) {\n    const product = new Product();\n    product.name = payload.name;\n    await product.save();\n\n    // Send a message to all clients.\n    ctx.socket.broadcast.emit('refresh products');\n    return new WebsocketResponse();\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"src/index.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// ...\n\nimport * as http from 'http';\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n\n  const app = await createApp(AppController, { serviceManager });\n\n  const httpServer = http.createServer(app);\n  // Instanciate, init and connect websocket controllers.\n  await serviceManager.get(WebsocketController).attachHttpServer(httpServer);\n  httpServer.listen(port, () => displayServerURL(port));\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"client",children:"Client"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This example uses JavaScript code as client, but socket.io supports also ",(0,s.jsx)(n.a,{href:"https://socket.io/docs/v4",children:"many other languages"})," (python, java, etc)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install socket.io-client@4\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { io } from 'socket.io-client';\n\nconst socket = io('ws://localhost:3001');\n\nsocket.on('connect', () => {\n\n  socket.emit('create product', { name: 'product 1' }, response => {\n    if (response.status === 'error') {\n      console.log(response.error);\n    }\n  });\n\n});\n\nsocket.on('connect_error', () => {\n  console.log('Impossible to establish the socket.io connection');\n});\n\nsocket.on('refresh products', () => {\n  console.log('refresh products!');\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["When using socket.io with FoalTS, the client function ",(0,s.jsx)(n.code,{children:"emit"})," can only take one, two or three arguments."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"socket.emit('event name');\nsocket.emit('event name', { /* payload */ });\nsocket.emit('event name', { /* payload */ }, response => { /* do something */ });\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"controllers-and-hooks",children:"Controllers and hooks"}),"\n",(0,s.jsx)(n.p,{children:"The WebSocket architecture is very similar to the HTTP architecture. They both have controllers and hooks. While HTTP controllers use paths to handle the various application endpoints, websocket controllers use event names. As with HTTP, event names can be extended with subcontrollers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"user.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, WebsocketContext } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    // ...\n  }\n\n  @EventName('delete')\n  deleteUser(ctx: WebsocketContext) {\n    // ...\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"websocket.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { SocketIOController, wsController } from '@foal/socket.io';\n\nimport { UserController } from './user.controller.ts';\n\nexport class WebsocketController extends SocketIOController {\n  subControllers = [\n    wsController('users ', UserController)\n  ];\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note that the event names are simply concatenated. So you have to manage the spaces between the words yourself if there are any."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"contexts",children:"Contexts"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Context"})," and ",(0,s.jsx)(n.code,{children:"WebsocketContext"})," classes share common properties such as the ",(0,s.jsx)(n.code,{children:"state"}),", the ",(0,s.jsx)(n.code,{children:"user"})," and the ",(0,s.jsx)(n.code,{children:"session"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, unlike their HTTP version, instances of ",(0,s.jsx)(n.code,{children:"WebsocketContext"})," do not have a ",(0,s.jsx)(n.code,{children:"request"})," property but a ",(0,s.jsx)(n.code,{children:"socket"})," property which is the object provided by socket.io. They also have two other attributes: the ",(0,s.jsx)(n.code,{children:"eventName"})," and the ",(0,s.jsx)(n.code,{children:"payload"})," of the request."]}),"\n",(0,s.jsx)(n.h4,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(n.p,{children:["A controller method returns a response which is either a ",(0,s.jsx)(n.code,{children:"WebsocketResponse"})," or a ",(0,s.jsx)(n.code,{children:"WebsocketErrorResponse"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"WebsocketResponse(data)"})," is returned, the server will return to the client an object of this form:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"{\n  status: 'ok',\n  data: data\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If it is a ",(0,s.jsx)(n.code,{children:"WebsocketErrorResponse(error)"}),", the returned object will look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"{\n  status: 'error',\n  error: error\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"data"})," and ",(0,s.jsx)(n.code,{children:"error"})," parameters are both optional."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"hooks",children:"Hooks"}),"\n",(0,s.jsxs)(n.p,{children:["In the same way, Foal provides hooks for websockets. They work the same as their HTTP version except that some types are different (",(0,s.jsx)(n.code,{children:"WebsocketContext"}),", ",(0,s.jsx)(n.code,{children:"WebsocketResponse|WebsocketErrorResponse"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, WebsocketContext, WebsocketErrorResponse, WebsocketHook } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  @WebsocketHook((ctx, services) => {\n    if (typeof ctx.payload.name !== 'string') {\n      return new WebsocketErrorResponse('Invalid name type');\n    }\n  })\n  createUser(ctx: WebsocketContext) {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"summary-table",children:"Summary table"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"HTTP"}),(0,s.jsx)(n.th,{children:"Websocket"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"@Get"}),", ",(0,s.jsx)(n.code,{children:"@Post"}),", etc"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@EventName"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"controller"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"wsController"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Context"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WebsocketContext"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"HttpResponse"}),"(s)"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"WebsocketResponse"}),", ",(0,s.jsx)(n.code,{children:"WebsocketErrorResponse"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Hook"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WebsocketHook"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MergeHooks"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MergeWebsocketHooks"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"getHookFunction"}),", ",(0,s.jsx)(n.code,{children:"getHookFunctions"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"getWebsocketHookFunction"}),", ",(0,s.jsx)(n.code,{children:"getWebsocketHookFunctions"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"send-a-message",children:"Send a message"}),"\n",(0,s.jsxs)(n.p,{children:["At any time, the server can send one or more messages to the client using its ",(0,s.jsx)(n.code,{children:"socket"})," object."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Server code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.emit('event 1', 'first message');\n    ctx.socket.emit('event 1', 'second message');\n    return new WebsocketResponse();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Client code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"socket.on('event 1', payload => {\n  console.log('Message: ', payload);\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"broadcast-a-message",children:"Broadcast a message"}),"\n",(0,s.jsxs)(n.p,{children:["If a message is to be broadcast to all clients, you can use the ",(0,s.jsx)(n.code,{children:"broadcast"})," property for this."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Server code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.broadcast.emit('event 1', 'first message');\n    ctx.socket.broadcast.emit('event 1', 'second message');\n    return new WebsocketResponse();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Client code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"socket.on('event 1', payload => {\n  console.log('Message: ', payload);\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"grouping-clients-in-rooms",children:"Grouping clients in rooms"}),"\n",(0,s.jsxs)(n.p,{children:["Socket.io uses the concept of ",(0,s.jsx)(n.a,{href:"https://socket.io/docs/v4/rooms/",children:"rooms"})," to gather clients in groups. This can be useful if you need to send a message to a particular subset of clients."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  onConnection(ctx: WebsocketContext) {\n    ctx.socket.join('some room');\n  }\n\n  @EventName('event 1')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.to('some room').emit('event 2');\n    return new WebsocketResponse();\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"accessing-the-socketio-server",children:"Accessing the socket.io server"}),"\n",(0,s.jsxs)(n.p,{children:["You can access the socket.io server anywhere in your code (including your HTTP controllers) by injecting the ",(0,s.jsx)(n.code,{children:"WsServer"})," service."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { dependency, HttpResponseOK, Post } from '@foal/core';\nimport { WsServer } from '@foal/socket.io';\n\nexport class UserController {\n  @dependency\n  wsServer: WsServer;\n\n  @Post('/users')\n  createUser() {\n    // ...\n    this.wsServer.io.emit('refresh users');\n\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error-handling"}),"\n",(0,s.jsxs)(n.p,{children:["Any error thrown or rejected in a websocket controller, hook or service, if not caught, is converted to a ",(0,s.jsx)(n.code,{children:"WebsocketResponseError"}),". If the ",(0,s.jsx)(n.code,{children:"settings.debug"})," configuration parameter is ",(0,s.jsx)(n.code,{children:"true"}),", then the error is returned as is to the client. Otherwise, the server returns this response:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"({\n  status: 'error',\n  error: {\n    code: 'INTERNAL_SERVER_ERROR',\n    message: 'An internal server error has occurred.'\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h4,{id:"customizing-the-error-handler",children:"Customizing the error handler"}),"\n",(0,s.jsxs)(n.p,{children:["Just as its HTTP version, the ",(0,s.jsx)(n.code,{children:"SocketIOController"})," class supports an optional ",(0,s.jsx)(n.code,{children:"handleError"})," to override the default error handler."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, renderWebsocketError, SocketIOController, WebsocketContext, WebsocketErrorResponse } from '@foal/socket.io';\n\nclass PermissionDenied extends Error {}\n\nexport class WebsocketController extends SocketIOController implements ISocketIOController {\n  @EventName('create user')\n  createUser() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: WebsocketContext){\n    if (error instanceof PermissionDenied) {\n      return new WebsocketErrorResponse('Permission is denied');\n    }\n\n    return renderWebsocketError(error, ctx);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"payload-validation",children:"Payload Validation"}),"\n",(0,s.jsxs)(n.p,{children:["Foal provides a default hook ",(0,s.jsx)(n.code,{children:"@ValidatePayload"})," to validate the request payload. It is very similar to its HTTP version ",(0,s.jsx)(n.code,{children:"@ValidateBody"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Server code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  @EventName('create product')\n  @ValidatePayload({\n    additionalProperties: false,\n    properties: { name: { type: 'string' }},\n    required: [ 'name' ],\n    type: 'object'\n  })\n  async createProduct(ctx: WebsocketContext, payload: { name: string }) {\n    const product = new Product();\n    product.name = payload.name;\n    await product.save();\n\n    // Send a message to all clients.\n    ctx.socket.broadcast.emit('refresh products');\n    return new WebsocketResponse();\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Validation error response"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"({\n  status: 'error',\n  error: {\n    code: 'VALIDATION_PAYLOAD_ERROR',\n    payload: [\n      // errors\n    ]\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unit-testing",children:"Unit Testing"}),"\n",(0,s.jsxs)(n.p,{children:["Testing WebSocket controllers and hooks is very similar to testing their HTTP equivalent. The ",(0,s.jsx)(n.code,{children:"WebsocketContext"})," takes three parameters."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"eventName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The name of the event."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"payload"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any"})}),(0,s.jsx)(n.td,{children:"The request payload."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"socket"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any"})}),(0,s.jsxs)(n.td,{children:["The socket (optional). Default: ",(0,s.jsx)(n.code,{children:"{}"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsx)(n.h3,{id:"multiple-node-servers",children:"Multiple node servers"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to manage multiple node servers using a redis adapter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install socket.io-adapter @socket.io/redis-adapter@8 redis@4\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"src/index.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { createApp, ServiceManager } from '@foal/core';\nimport { WebsocketController, pubClient, subClient } from './services/websocket.controller';\nasync function main() {\n  const serviceManager = new ServiceManager();\n  const app = await createApp(AppController, { serviceManager });\n  const httpServer = http.createServer(app);\n  // Connect the redis clients to the database.\n  await Promise.all([pubClient.connect(), subClient.connect()]);\n  await serviceManager.get(WebsocketController).attachHttpServer(httpServer);\n  // ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"websocket.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\nimport { createAdapter } from '@socket.io/redis-adapter';\nimport { createClient } from 'redis';\n\nexport const pubClient = createClient({ url: 'redis://localhost:6379' });\nexport const subClient = pubClient.duplicate();\n\nexport class WebsocketController extends SocketIOController {\n  adapter = createAdapter(pubClient, subClient);\n\n  @EventName('create user')\n  createUser(ctx: WebsocketContext) {\n    // Broadcast an event to all clients of all servers.\n    ctx.socket.broadcast.emit('refresh users');\n    return new WebsocketResponse();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"handling-connection",children:"Handling connection"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to run some code when a Websocket connection is established (for example to join a room or forward the session), you can use the ",(0,s.jsx)(n.code,{children:"onConnection"})," method of the ",(0,s.jsx)(n.code,{children:"SocketIOController"})," for this."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { SocketIOController, WebsocketContext } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  onConnection(ctx: WebsocketContext) {\n    // ...\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The context passed in the ",(0,s.jsx)(n.code,{children:"onConnection"})," method has an undefined payload and an empty event name."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"error-handling-1",children:"Error-handling"}),"\n",(0,s.jsxs)(n.p,{children:["Any errors thrown or rejected in the ",(0,s.jsx)(n.code,{children:"onConnection"})," is sent back to the client. So you may need to add a ",(0,s.jsx)(n.code,{children:"try {} catch {}"})," in some cases."]}),"\n",(0,s.jsxs)(n.p,{children:["This error can be read on the client using the ",(0,s.jsx)(n.code,{children:"connect_error"})," event listener."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'socket.on("connect_error", () => {\n  // Do some stuff\n  socket.connect();\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"custom-server-options",children:"Custom server options"}),"\n",(0,s.jsxs)(n.p,{children:["Custom options can be passed to the socket.io server as follows. The complete list of options can be found ",(0,s.jsx)(n.a,{href:"https://socket.io/docs/v4/server-options/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { SocketIOController } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  options = {\n    connectTimeout: 60000\n  }\n\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);