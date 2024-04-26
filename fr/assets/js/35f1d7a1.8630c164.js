"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[961],{24170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=s(74848),r=s(28453);const o={title:"Controllers"},c=void 0,d={id:"architecture/controllers",title:"Controllers",description:"Description",source:"@site/versioned_docs/version-1.x/architecture/controllers.md",sourceDirName:"architecture",slug:"/architecture/controllers",permalink:"/fr/docs/1.x/architecture/controllers",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/architecture/controllers.md",tags:[],version:"1.x",frontMatter:{title:"Controllers"},sidebar:"someSidebar",previous:{title:"Architecture Overview",permalink:"/fr/docs/1.x/architecture/architecture-overview"},next:{title:"Services & Dependency Injection",permalink:"/fr/docs/1.x/architecture/services-and-dependency-injection"}},l={},i=[{value:"Description",id:"description",level:2},{value:"Controller Architecture",id:"controller-architecture",level:2},{value:"The <code>AppController</code>",id:"the-appcontroller",level:2},{value:"Contexts &amp; HTTP Requests",id:"contexts--http-requests",level:2},{value:"The <code>Context</code> object",id:"the-context-object",level:3},{value:"HTTP Requests",id:"http-requests",level:3},{value:"Read the Body",id:"read-the-body",level:4},{value:"Read Path Parameters",id:"read-path-parameters",level:4},{value:"Read Query Parameters",id:"read-query-parameters",level:4},{value:"Read Headers",id:"read-headers",level:4},{value:"Read Cookies",id:"read-cookies",level:4},{value:"The Controller Method Arguments",id:"the-controller-method-arguments",level:4},{value:"HTTP Responses",id:"http-responses",level:2},{value:"Adding Headers",id:"adding-headers",level:3},{value:"Adding cookies",id:"adding-cookies",level:3},{value:"Testing Controllers",id:"testing-controllers",level:2},{value:"Inheriting Controllers",id:"inheriting-controllers",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"foal generate controller my-controller\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get, HttpResponseOK } from '@foal/core';\n\nexport class MyController {\n\n  @Get('/flights')\n  listFlights(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Controllers are the front door of your application. They intercept all incoming requests and return the responses to the client."}),"\n",(0,t.jsx)(n.p,{children:"The code of a controller should be concise. If necessary, controllers can delegate some tasks to services (usually the business logic)."}),"\n",(0,t.jsx)(n.h2,{id:"controller-architecture",children:"Controller Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["A controller is simply a class of which some methods are responsible for a route. These methods must be decorated by one of theses decorators ",(0,t.jsx)(n.code,{children:"Get"}),", ",(0,t.jsx)(n.code,{children:"Post"}),", ",(0,t.jsx)(n.code,{children:"Patch"}),", ",(0,t.jsx)(n.code,{children:"Put"}),", ",(0,t.jsx)(n.code,{children:"Delete"}),", ",(0,t.jsx)(n.code,{children:"Head"})," or ",(0,t.jsx)(n.code,{children:"Options"}),". They may be asynchronous."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK('I\\'m listening to GET /foo requests.');\n  }\n\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK('I\\'m listening to POST /bar requests.');\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Controllers may have sub-controllers declared in the ",(0,t.jsx)(n.code,{children:"subControllers"})," property."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, Post } from '@foal/core';\n\nclass MySubController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK('I\\'m listening to GET /barfoo/foo requests.');\n  }\n}\n\nclass MyController {\n  subControllers = [\n    controller('/barfoo', MySubController)\n  ]\n\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK('I\\'m listening to POST /bar requests.');\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"the-appcontroller",children:["The ",(0,t.jsx)(n.code,{children:"AppController"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AppController"})," is the main controller of your application. It is directly bound to the request handler. Every controller must be, directly or indirectly, a sub-controller of the ",(0,t.jsx)(n.code,{children:"AppController"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller } from '@foal/core';\n\nimport { ApiController } from './controllers/api.controller';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"contexts--http-requests",children:"Contexts & HTTP Requests"}),"\n",(0,t.jsxs)(n.h3,{id:"the-context-object",children:["The ",(0,t.jsx)(n.code,{children:"Context"})," object"]}),"\n",(0,t.jsxs)(n.p,{children:["On every request, the controller method is called with a ",(0,t.jsx)(n.code,{children:"Context"})," object. This context is unique and specific to the request."]}),"\n",(0,t.jsx)(n.p,{children:"It has four properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"request"})," (type: ",(0,t.jsx)(n.code,{children:"Request"}),") giving information about the HTTP request received,"]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"state"})," (type: ",(0,t.jsx)(n.code,{children:"object"}),") which can be used to share data between hooks (see ",(0,t.jsx)(n.a,{href:"/fr/docs/1.x/architecture/hooks",children:"Hooks"}),"),"]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"user"})," (type: ",(0,t.jsx)(n.code,{children:"any"})," or ",(0,t.jsx)(n.code,{children:"undefined"}),") giving information on the current user (see ",(0,t.jsx)(n.a,{href:"/fr/docs/1.x/authentication-and-access-control/quick-start",children:"Authentication"}),"),"]}),"\n",(0,t.jsxs)(n.li,{children:["and a ",(0,t.jsx)(n.code,{children:"session"})," (type: ",(0,t.jsx)(n.code,{children:"Session"})," or ",(0,t.jsx)(n.code,{children:"undefined"}),") containing the session data if you use sessions."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"http-requests",children:"HTTP Requests"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"request"})," property is an ",(0,t.jsx)(n.a,{href:"http://expressjs.com/",children:"ExpressJS"})," request object. Its complete documentation can be consulted ",(0,t.jsx)(n.a,{href:"http://expressjs.com/en/4x/api.html#req",children:"here"}),". The below sections detail common use cases."]}),"\n",(0,t.jsx)(n.h4,{id:"read-the-body",children:"Read the Body"}),"\n",(0,t.jsxs)(n.p,{children:["The request body is accessible with the ",(0,t.jsx)(n.code,{children:"body"})," attribute. Form data and JSON objects are automatically converted to JavaScript objects in FoalTS."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'POST /products\n\n{\n  "name": "milk"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post } from '@foal/core';\n\nclass AppController {\n  @Post('/products')\n  createProduct(ctx: Context) {\n    const body = ctx.request.body;\n    // Do something.\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"read-path-parameters",children:"Read Path Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Path parameters are accessible with the ",(0,t.jsx)(n.code,{children:"params"})," attribute."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"GET /products/3\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post } from '@foal/core';\n\nclass AppController {\n  @Get('/products/:id')\n  readProduct(ctx: Context) {\n    const productId = ctx.request.params.id;\n    // Do something.\n    return new HttpResponseOK(/* something */);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"read-query-parameters",children:"Read Query Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Query parameters are accessible with the ",(0,t.jsx)(n.code,{children:"query"})," attribute."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"GET /products?limit=3\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post } from '@foal/core';\n\nclass AppController {\n  @Get('/products')\n  readProducts(ctx: Context) {\n    const limit = ctx.request.query.limit;\n    // Do something.\n    return new HttpResponseOK(/* something */);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"read-headers",children:"Read Headers"}),"\n",(0,t.jsxs)(n.p,{children:["Headers are accessible with the ",(0,t.jsx)(n.code,{children:"get"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const token: string|undefined = ctx.request.get('Authorization');\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"read-cookies",children:"Read Cookies"}),"\n",(0,t.jsxs)(n.p,{children:["Cookies are accessible with the ",(0,t.jsx)(n.code,{children:"cookies"})," attribute."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index(ctx: Context) {\n    const sessionID: string|undefined = ctx.request.cookies.sessionID;\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"the-controller-method-arguments",children:"The Controller Method Arguments"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Available in Foal v1.9.0 onwards."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The path paramaters and request body are also passed as second and third arguments to the controller method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Put } from '@foal/core';\n\nclass AppController {\n  @Put('/products/:id')\n  updateProduct(ctx: Context, { id }, body) {\n    // Do something.\n    return new HttpResponseCreated();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"http-responses",children:"HTTP Responses"}),"\n",(0,t.jsxs)(n.p,{children:["HTTP responses are defined using ",(0,t.jsx)(n.code,{children:"HttpResponse"})," objects. Each controller method must return an instance of this class (or a ",(0,t.jsx)(n.em,{children:"promise"})," of this instance)."]}),"\n",(0,t.jsx)(n.p,{children:"Here are subclasses that you can use:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"HTTP method"}),(0,t.jsx)(n.th,{children:"Response class"}),(0,t.jsx)(n.th,{children:"Is abstract?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2XX Success"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2XX"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseSuccess"})}),(0,t.jsx)(n.td,{children:"yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseOK"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"201"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseCreated"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"3XX Redirection"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3XX"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseRedirection"})}),(0,t.jsx)(n.td,{children:"yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"301"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseMovedPermanently"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"302"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseRedirect"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"4XX Client errors"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4XX"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseClientError"})}),(0,t.jsx)(n.td,{children:"yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"400"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseBadRequest"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseUnauthorized"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseForbidden"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseNotFound"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"405"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseMethodNotAllowed"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"409"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseConflict"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"5XX Server errors"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5XX"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseServerError"})}),(0,t.jsx)(n.td,{children:"yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseInternalServerError"})}),(0,t.jsx)(n.td,{children:"no"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"501"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpResponseNotImplemented"})}),(0,t.jsx)(n.td,{children:"no"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Most of these responses accept a ",(0,t.jsx)(n.code,{children:"body"})," at instantiation. It can be a ",(0,t.jsx)(n.code,{children:"Buffer"})," object, a string, an object, a number, an array, or even a Node.JS stream."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with a body"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"new HttpResponseBadRequest({\n  message: 'The foo field is missing.'\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In case the body parameter is a stream, you must specify it using the ",(0,t.jsx)(n.code,{children:"stream"})," option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with a Node.JS stream as body"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"new HttpResponseOK(myStream, { stream: true })\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adding-headers",children:"Adding Headers"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setHeader('Cache-Control', 'max-age=604800, public');\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adding-cookies",children:"Adding cookies"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with no cookie directives"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('state', 'foobar');\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with cookie directives"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\n\nclass AppController {\n  @Get('/')\n  index() {\n    return new HttpResponseOK()\n      .setCookie('sessionID', 'xxxx', {\n        domain: 'example.com',\n        // expires: new Date(2020, 12, 12),\n        httpOnly: true,\n        maxAge: 3600,\n        path: '/',\n        secure: true,\n        sameSite: 'lax',\n      });\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"maxAge"})," cookie directive defines the number of ",(0,t.jsx)(n.strong,{children:"seconds"})," until the cookie expires."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing-controllers",children:"Testing Controllers"}),"\n",(0,t.jsxs)(n.p,{children:["A controller is a simple class and so can be tested as is. Note that ",(0,t.jsx)(n.a,{href:"/fr/docs/1.x/architecture/hooks",children:"hooks"})," are ignored upon testing."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"api.controller.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ApiController {\n  @Get('/users/me')\n  @JWTRequired()\n  getCurrentUser(ctx: Context) {\n    return new HttpResponseOK(ctx.user):\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"api.controller.spec.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { strictEqual } from 'assert';\n\nimport { Context, createController, HttpResponseOK, isHttpResponseOK } from '@foal/core';\n\nimport { ApiController } from './api.controller';\n\ndescribe('ApiController', () => {\n\n  it('should return the current user.', () => {\n    // Instantiate the controller.\n    const controller = createController(ApiController);\n\n    // Create a fake user (the current user)\n    const user = { name: 'Alix' };\n\n    // Create a fake Context object to simulate the request.\n    const ctx = new Context({}); // \"{}\" is the request body.\n    ctx.user = user;\n\n    // Execute the controller method and save the response.\n    const response = controller.getCurrentUser(ctx);\n\n    if (!isHttpResponseOK(response)) {\n      throw new Error('The response should be an HttpResponseOK');\n    }\n\n    strictEqual(response.body, user);\n  });\n\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Due to the way packages are managed by npm, you should always use ",(0,t.jsx)(n.code,{children:"isHttpResponseOK(response)"})," rather than ",(0,t.jsx)(n.code,{children:"response instanceof HttpResponseOK"})," to avoid reference bugs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"inheriting-controllers",children:"Inheriting Controllers"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"abstract class ParentController {\n  @Get('/foo')\n  foo() {\n    return new HttpResponseOK();\n  }\n}\n\n\nclass ChildController extends ParentController {\n  @Post('/bar')\n  bar() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also override ",(0,t.jsx)(n.code,{children:"foo"}),". If you don't add a ",(0,t.jsx)(n.code,{children:"Get"}),", ",(0,t.jsx)(n.code,{children:"Post"}),", ",(0,t.jsx)(n.code,{children:"Patch"}),", ",(0,t.jsx)(n.code,{children:"Put"}),", ",(0,t.jsx)(n.code,{children:"Delete"}),", ",(0,t.jsx)(n.code,{children:"Head"})," or ",(0,t.jsx)(n.code,{children:"Options"})," decorator then the parent path and HTTP method are used. If you don't add a hook, then the parent hooks are used. Otherwise they are all discarded."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(96540);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);