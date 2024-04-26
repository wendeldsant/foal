"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294),r=n(86010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(87462),r=n(67294),a=n(86010),s=n(72389),l=n(67392),i=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:s,block:m,defaultValue:u,values:k,groupId:h,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),N=(0,l.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===u?u:null!=(t=null!=u?u:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:C}=(0,i.U)(),[x,w]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=f[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&w(e)}const W=e=>{const t=e.currentTarget,n=S.indexOf(t),o=b[n].value;o!==x&&(T(t),w(o),null!=h&&C(h,String(o)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=S.indexOf(e.currentTarget)+1;n=null!=(o=S[t])?o:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},g)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:W,onClick:W},s,{className:(0,a.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,s.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(65488),s=n(85162);const l={title:"Version 2.8 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.8-release-notes.png",tags:["release"]},i=void 0,c={permalink:"/es/blog/2022/02/13/version-2.8-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-02-13-version-2.8-release-notes.md",source:"@site/blog/2022-02-13-version-2.8-release-notes.md",title:"Version 2.8 release notes",description:"Banner",date:"2022-02-13T00:00:00.000Z",formattedDate:"13 de febrero de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:9.735,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.8 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.8-release-notes.png",tags:["release"]},prevItem:{title:"Version 2.9 release notes",permalink:"/es/blog/2022/05/29/version-2.9-release-notes"},nextItem:{title:"Version 2.7 release notes",permalink:"/es/blog/2021/12/12/version-2.7-release-notes"}},p={authorsImageUrls:[void 0]},d=[{value:"WebSocket support and <code>socket.io</code> integration",id:"websocket-support-and-socketio-integration",level:2},{value:"Get Started",id:"get-started",level:3},{value:"Server",id:"server",level:4},{value:"Client",id:"client",level:4},{value:"Architecture",id:"architecture",level:3},{value:"Controllers and hooks",id:"controllers-and-hooks",level:4},{value:"Contexts",id:"contexts",level:5},{value:"Responses",id:"responses",level:5},{value:"Hooks",id:"hooks",level:5},{value:"Summary table",id:"summary-table",level:5},{value:"Send a message",id:"send-a-message",level:4},{value:"Broadcast a message",id:"broadcast-a-message",level:4},{value:"Grouping clients in rooms",id:"grouping-clients-in-rooms",level:4},{value:"Accessing the socket.io server",id:"accessing-the-socketio-server",level:4},{value:"Error-handling",id:"error-handling",level:4},{value:"Customizing the error handler",id:"customizing-the-error-handler",level:5},{value:"Payload Validation",id:"payload-validation",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Multiple node servers",id:"multiple-node-servers",level:4},{value:"Handling connection",id:"handling-connection",level:4},{value:"Error-handling",id:"error-handling-1",level:5},{value:"Custom server options",id:"custom-server-options",level:4},{value:"Passing a custom database client to a session store",id:"passing-a-custom-database-client-to-a-session-store",level:2},{value:"<code>TypeORMStore</code>",id:"typeormstore",level:3},{value:"<code>RedisStore</code>",id:"redisstore",level:3},{value:"<code>MongoDBStore</code>",id:"mongodbstore",level:3},{value:"Support for AWS S3 Server-Side Encryption",id:"support-for-aws-s3-server-side-encryption",level:2}],m={toc:d};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(58594).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"Version 2.8 of Foal has been released! Here are the improvements that it brings."),(0,r.kt)("h2",{id:"websocket-support-and-socketio-integration"},"WebSocket support and ",(0,r.kt)("inlineCode",{parentName:"h2"},"socket.io")," integration"),(0,r.kt)("p",null,"As of version 2.8, Foal officially supports WebSockets, allowing you to establish two-way interactive communication between your server(s) and your clients."),(0,r.kt)("p",null,"The architecture includes: controllers and sub-controllers, hooks, success and error responses, message broadcasting, rooms, use from HTTP controllers, DI, error-handling, validation, unit testing, horizontal scalability, auto-reconnection, etc"),(0,r.kt)("h3",{id:"get-started"},"Get Started"),(0,r.kt)("h4",{id:"server"},"Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/socket.io\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"services/websocket.service.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, ValidatePayload, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  @EventName('create product')\n  @ValidatePayload({\n    additionalProperties: false,\n    properties: { name: { type: 'string' }},\n    required: [ 'name' ],\n    type: 'object'\n  })\n  async createProduct(ctx: WebsocketContext, payload: { name: string }) {\n    const product = new Product();\n    product.name = payload.name;\n    await product.save();\n\n    // Send a message to all clients.\n    ctx.socket.broadcast.emit('refresh products');\n    return new WebsocketResponse();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"src/index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\n\nasync function main() {\n  const serviceManager = new ServiceManager();\n\n  const app = await createApp(AppController, { serviceManager });\n  const httpServer = http.createServer(app);\n\n  // Instanciate, init and connect websocket controllers.\n  await serviceManager.get(WebsocketController).attachHttpServer(httpServer);\n\n  // ...\n}\n\n")),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This example uses JavaScript code as client, but socket.io supports also ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4"},"many other languages")," (python, java, etc).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install socket.io-client@4\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { io } from 'socket.io-client';\n\nconst socket = io('ws://localhost:3001');\n\nsocket.on('connect', () => {\n\n  socket.emit('create product', { name: 'product 1' }, response => {\n    if (response.status === 'error') {\n      console.log(response.error);\n    }\n  });\n\n});\n\nsocket.on('connect_error', () => {\n  console.log('Impossible to establish the socket.io connection');\n});\n\nsocket.on('refresh products', () => {\n  console.log('refresh products!');\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using socket.io with FoalTS, the client function ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," can only take one, two or three arguments."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"socket.emit('event name');\nsocket.emit('event name', { /* payload */ });\n// The acknowledgement callback must always be passed in third position.\nsocket.emit('event name', { /* payload */ }, response => { /* do something */ });\n"))),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("h4",{id:"controllers-and-hooks"},"Controllers and hooks"),(0,r.kt)("p",null,"The WebSocket architecture is very similar to the HTTP architecture. They both have controllers and hooks. While HTTP controllers use paths to handle the various application endpoints, websocket controllers use event names. As with HTTP, event names can be extended with subcontrollers."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, WebsocketContext } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    // ...\n  }\n\n  @EventName('delete')\n  deleteUser(ctx: WebsocketContext) {\n    // ...\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"websocket.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SocketIOController, wsController } from '@foal/socket.io';\n\nimport { UserController } from './user.controller.ts';\n\nexport class WebsocketController extends SocketIOController {\n  subControllers = [\n    wsController('users ', UserController)\n  ];\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the event names are simply concatenated. So you have to manage the spaces between the words yourself if there are any.")),(0,r.kt)("h5",{id:"contexts"},"Contexts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketContext")," classes share common properties such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"session"),"."),(0,r.kt)("p",null,"However, unlike their HTTP version, instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketContext")," do not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," property but a ",(0,r.kt)("inlineCode",{parentName:"p"},"socket")," property which is the object provided by socket.io. They also have two other attributes: the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," of the request."),(0,r.kt)("h5",{id:"responses"},"Responses"),(0,r.kt)("p",null,"A controller method returns a response which is either a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketResponse")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketErrorResponse"),"."),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketResponse(data)")," is returned, the server will return to the client an object of this form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  status: 'ok',\n  data: data\n}\n")),(0,r.kt)("p",null,"If it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketErrorResponse(error)"),", the returned object will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  status: 'error',\n  error: error\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," parameters are both optional.")),(0,r.kt)("h5",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"In the same way, Foal provides hooks for websockets. They work the same as their HTTP version except that some types are different (",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketContext"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketResponse|WebsocketErrorResponse"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, WebsocketContext, WebsocketErrorResponse, WebsocketHook } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  @WebsocketHook((ctx, services) => {\n    if (typeof ctx.payload.name !== 'string') {\n      return new WebsocketErrorResponse('Invalid name type');\n    }\n  })\n  createUser(ctx: WebsocketContext) {\n    // ...\n  }\n}\n")),(0,r.kt)("h5",{id:"summary-table"},"Summary table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP"),(0,r.kt)("th",{parentName:"tr",align:null},"Websocket"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@Get"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"@Post"),", etc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@EventName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wsController"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WebsocketContext"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HttpResponse"),"(s)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WebsocketResponse"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WebsocketErrorResponse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Hook")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WebsocketHook"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MergeHooks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MergeWebsocketHooks"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getHookFunction"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getHookFunctions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getWebsocketHookFunction"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getWebsocketHookFunctions"))))),(0,r.kt)("h4",{id:"send-a-message"},"Send a message"),(0,r.kt)("p",null,"At any time, the server can send one or more messages to the client using its ",(0,r.kt)("inlineCode",{parentName:"p"},"socket")," object."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Server code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.emit('event 1', 'first message');\n    ctx.socket.emit('event 1', 'second message');\n    return new WebsocketResponse();\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Client code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"socket.on('event 1', payload => {\n  console.log('Message: ', payload);\n});\n")),(0,r.kt)("h4",{id:"broadcast-a-message"},"Broadcast a message"),(0,r.kt)("p",null,"If a message is to be broadcast to all clients, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," property for this."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Server code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class UserController {\n\n  @EventName('create')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.broadcast.emit('event 1', 'first message');\n    ctx.socket.broadcast.emit('event 1', 'second message');\n    return new WebsocketResponse();\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Client code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"socket.on('event 1', payload => {\n  console.log('Message: ', payload);\n});\n")),(0,r.kt)("h4",{id:"grouping-clients-in-rooms"},"Grouping clients in rooms"),(0,r.kt)("p",null,"Socket.io uses the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/rooms/"},"rooms")," to gather clients in groups. This can be useful if you need to send a message to a particular subset of clients."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  onConnection(ctx: WebsocketContext) {\n    ctx.socket.join('some room');\n  }\n\n  @EventName('event 1')\n  createUser(ctx: WebsocketContext) {\n    ctx.socket.to('some room').emit('event 2');\n    return new WebsocketResponse();\n  }\n\n}\n")),(0,r.kt)("h4",{id:"accessing-the-socketio-server"},"Accessing the socket.io server"),(0,r.kt)("p",null,"You can access the socket.io server anywhere in your code (including your HTTP controllers) by injecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"WsServer")," service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, HttpResponseOK, Post } from '@foal/core';\nimport { WsServer } from '@foal/socket.io';\n\nexport class UserController {\n  @dependency\n  wsServer: WsServer;\n\n  @Post('/users')\n  createUser() {\n    // ...\n    this.wsServer.io.emit('refresh users');\n\n    return new HttpResponseOK();\n  }\n}\n")),(0,r.kt)("h4",{id:"error-handling"},"Error-handling"),(0,r.kt)("p",null,"Any error thrown or rejected in a websocket controller, hook or service, if not caught, is converted to a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketResponseError"),". If the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.debug")," configuration parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", then the error is returned as is to the client. Otherwise, the server returns this response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"({\n  status: 'error',\n  error: {\n    code: 'INTERNAL_SERVER_ERROR',\n    message: 'An internal server error has occurred.'\n  }\n})\n")),(0,r.kt)("h5",{id:"customizing-the-error-handler"},"Customizing the error handler"),(0,r.kt)("p",null,"Just as its HTTP version, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SocketIOController")," class supports an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"handleError")," to override the default error handler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, renderWebsocketError, SocketIOController, WebsocketContext, WebsocketErrorResponse } from '@foal/socket.io';\n\nclass PermissionDenied extends Error {}\n\nexport class WebsocketController extends SocketIOController implements ISocketIOController {\n  @EventName('create user')\n  createUser() {\n    throw new PermissionDenied();\n  }\n\n  handleError(error: Error, ctx: WebsocketContext){\n    if (error instanceof PermissionDenied) {\n      return new WebsocketErrorResponse('Permission is denied');\n    }\n\n    return renderWebsocketError(error, ctx);\n  }\n}\n")),(0,r.kt)("h3",{id:"payload-validation"},"Payload Validation"),(0,r.kt)("p",null,"Foal provides a default hook ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidatePayload")," to validate the request payload. It is very similar to its HTTP version ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateBody"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Server code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  @EventName('create product')\n  @ValidatePayload({\n    additionalProperties: false,\n    properties: { name: { type: 'string' }},\n    required: [ 'name' ],\n    type: 'object'\n  })\n  async createProduct(ctx: WebsocketContext, payload: { name: string }) {\n    const product = new Product();\n    product.name = payload.name;\n    await product.save();\n\n    // Send a message to all clients.\n    ctx.socket.broadcast.emit('refresh products');\n    return new WebsocketResponse();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Validation error response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"({\n  status: 'error',\n  error: {\n    code: 'VALIDATION_PAYLOAD_ERROR',\n    payload: [\n      // errors\n    ]\n  }\n})\n")),(0,r.kt)("h3",{id:"unit-testing"},"Unit Testing"),(0,r.kt)("p",null,"Testing WebSocket controllers and hooks is very similar to testing their HTTP equivalent. The ",(0,r.kt)("inlineCode",{parentName:"p"},"WebsocketContext")," takes three parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The request payload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"socket")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The socket (optional). Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"{}"),".")))),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("h4",{id:"multiple-node-servers"},"Multiple node servers"),(0,r.kt)("p",null,"This example shows how to manage multiple node servers using a redis adapter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @socket.io/redis-adapter@7 redis@3\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"websocket.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EventName, SocketIOController, WebsocketContext, WebsocketResponse } from '@foal/socket.io';\nimport { createAdapter } from '@socket.io/redis-adapter';\nimport { createClient } from 'redis';\n\nexport const pubClient = createClient({ url: 'redis://localhost:6379' });\nexport const subClient = pubClient.duplicate();\n\nexport class WebsocketController extends SocketIOController {\n  adapter = createAdapter(pubClient, subClient);\n\n  @EventName('create user')\n  createUser(ctx: WebsocketContext) {\n    // Broadcast an event to all clients of all servers.\n    ctx.socket.broadcast.emit('refresh users');\n    return new WebsocketResponse();\n  }\n}\n")),(0,r.kt)("h4",{id:"handling-connection"},"Handling connection"),(0,r.kt)("p",null,"If you want to run some code when a Websocket connection is established (for example to join a room or forward the session), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"onConnection")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SocketIOController")," for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SocketIOController, WebsocketContext } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  onConnection(ctx: WebsocketContext) {\n    // ...\n  }\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The context passed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onConnection")," method has an undefined payload and an empty event name.")),(0,r.kt)("h5",{id:"error-handling-1"},"Error-handling"),(0,r.kt)("p",null,"Any errors thrown or rejected in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onConnection")," is sent back to the client. So you may need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"try {} catch {}")," in some cases."),(0,r.kt)("p",null,"This error can be read on the client using the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect_error")," event listener."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'socket.on("connect_error", () => {\n  // Do some stuff\n  socket.connect();\n});\n')),(0,r.kt)("h4",{id:"custom-server-options"},"Custom server options"),(0,r.kt)("p",null,"Custom options can be passed to the socket.io server as follows. The complete list of options can be found ",(0,r.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/server-options/"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SocketIOController } from '@foal/socket.io';\n\nexport class WebsocketController extends SocketIOController {\n\n  options = {\n    connectTimeout: 60000\n  }\n\n}\n")),(0,r.kt)("h2",{id:"passing-a-custom-database-client-to-a-session-store"},"Passing a custom database client to a session store"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDBStore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisStore")," create a new client to connect to their respective databases. The ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeORMStore")," uses the default TypeORM connection."),(0,r.kt)("p",null,"It is now possible to override this behavior by providing a custom client to the stores at initialization."),(0,r.kt)("h3",{id:"typeormstore"},(0,r.kt)("inlineCode",{parentName:"h3"},"TypeORMStore")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"First example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport class AppController {\n  @dependency\n  store: TypeORMStore;\n\n  // ...\n\n  async init() {\n    const connection = await createConnection('connection2');\n    this.store.setConnection(connection);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Second example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, ServiceManager } from '@foal/core';\nimport { TypeORMStore } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nasync function main() {\n  const connection = await createConnection('connection2');\n\n  const serviceManager = new ServiceManager();\n  serviceManager.get(TypeORMStore).setConnection(connection);\n\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n")),(0,r.kt)("h3",{id:"redisstore"},(0,r.kt)("inlineCode",{parentName:"h3"},"RedisStore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install redis@3\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, ServiceManager } from '@foal/core';\nimport { RedisStore } from '@foal/redis';\nimport { createClient } from 'redis';\n\nasync function main() {\n  const redisClient = createClient('redis://localhost:6379');\n\n  const serviceManager = new ServiceManager();\n  serviceManager.get(RedisStore).setRedisClient(redisClient);\n\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n")),(0,r.kt)("h3",{id:"mongodbstore"},(0,r.kt)("inlineCode",{parentName:"h3"},"MongoDBStore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install mongodb@3\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, ServiceManager } from '@foal/core';\nimport { MongoDBStore } from '@foal/mongodb';\nimport { MongoClient } from 'mongodb';\n\nasync function main() {\n  const mongoDBClient = await MongoClient.connect('mongodb://localhost:27017/db', {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n\n  const serviceManager = new ServiceManager();\n  serviceManager.get(MongoDBStore).setMongoDBClient(mongoDBClient);\n\n  const app = await createApp(AppController, { serviceManager });\n\n  // ...\n}\n")),(0,r.kt)("h2",{id:"support-for-aws-s3-server-side-encryption"},"Support for AWS S3 Server-Side Encryption"),(0,r.kt)("p",null,"A new configuration option can be provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"S3Disk")," to support server-side encryption."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)(a.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n      serverSideEncryption: 'AES256'\n"))),(0,r.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded",\n        "serverSideEncryption": "AES256"\n      }\n    }\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    aws: {\n      accessKeyId: "xxx",\n      secretAccessKey: "yyy"\n    },\n    disk: {\n      driver: "@foal/aws-s3",\n      s3: {\n        bucket: "uploaded",\n        serverSideEncryption: "AES256"\n      }\n    }\n  }\n}\n')))))}u.isMDXComponent=!0},58594:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/banner-976f26971fd42460aab743ca07f3579e.png"}}]);