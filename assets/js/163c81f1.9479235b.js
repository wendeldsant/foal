"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4994],{96368:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(74848),s=o(28453);const r={title:"Hooks"},i=void 0,c={id:"architecture/hooks",title:"Hooks",description:"Description",source:"@site/docs/architecture/hooks.md",sourceDirName:"architecture",slug:"/architecture/hooks",permalink:"/docs/architecture/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/hooks.md",tags:[],version:"current",frontMatter:{title:"Hooks"},sidebar:"someSidebar",previous:{title:"Services & Dependency Injection",permalink:"/docs/architecture/services-and-dependency-injection"},next:{title:"Initialization",permalink:"/docs/architecture/initialization"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Built-in Hooks",id:"built-in-hooks",level:2},{value:"Use",id:"use",level:2},{value:"Build Custom Hooks",id:"build-custom-hooks",level:2},{value:"Executing Logic After the Controller Method",id:"executing-logic-after-the-controller-method",level:3},{value:"Grouping Several Hooks into One",id:"grouping-several-hooks-into-one",level:2},{value:"Testing Hooks",id:"testing-hooks",level:2},{value:"Testing Hook Post Functions",id:"testing-hook-post-functions",level:3},{value:"Testing Hooks that Use <code>this</code>",id:"testing-hooks-that-use-this",level:3},{value:"Mocking services",id:"mocking-services",level:3},{value:"Hook factories",id:"hook-factories",level:2},{value:"Forward Data Between Hooks",id:"forward-data-between-hooks",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"foal generate hook my-hook\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Hooks are decorators that execute extra logic before and/or after the execution of a controller method."}),"\n",(0,t.jsx)(n.p,{children:"They are particulary useful in these scenarios:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"authentication & access control"}),"\n",(0,t.jsx)(n.li,{children:"request validation & sanitization"}),"\n",(0,t.jsx)(n.li,{children:"logging"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"They improve code readability and make unit testing easier."}),"\n",(0,t.jsx)(n.h2,{id:"built-in-hooks",children:"Built-in Hooks"}),"\n",(0,t.jsx)(n.p,{children:"Foal provides a number of hooks to handle the most common scenarios."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ValidateBody"}),", ",(0,t.jsx)(n.code,{children:"ValidateHeader"}),", ",(0,t.jsx)(n.code,{children:"ValidatePathParam"}),", ",(0,t.jsx)(n.code,{children:"ValidateCookie"})," and ",(0,t.jsx)(n.code,{children:"ValidateQueryParam"})," validate the format of the incoming HTTP requests (see ",(0,t.jsx)(n.a,{href:"/docs/common/validation-and-sanitization",children:"Validation"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Log"})," displays information on the request (see ",(0,t.jsx)(n.a,{href:"/docs/common/logging",children:"Logging"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"JWTRequired"}),", ",(0,t.jsx)(n.code,{children:"JWTOptional"}),", ",(0,t.jsx)(n.code,{children:"UseSessions"})," authenticate the user by filling the ",(0,t.jsx)(n.code,{children:"ctx.user"})," property."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PermissionRequired"})," restricts the route access to certain users."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,t.jsx)(n.p,{children:"A hook can decorate a controller method or the controller itself. If it decorates the controller then it applies to all its methods and sub-controllers."}),"\n",(0,t.jsxs)(n.p,{children:["In the below example, ",(0,t.jsx)(n.code,{children:"JWTRequired"})," applies to ",(0,t.jsx)(n.code,{children:"listProducts"})," and ",(0,t.jsx)(n.code,{children:"addProduct"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import {\n  Context, Get, HttpResponseCreated, HttpResponseOK, Post, ValidateBody\n} from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired()\nclass AppController {\n  private products = [\n    { name: 'Hoover' }\n  ];\n\n  @Get('/products')\n  listProducts() {\n    return new HttpResponseOK(this.products);\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  addProduct(ctx: Context) {\n    this.products.push(ctx.request.body);\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the user makes a POST request to ",(0,t.jsx)(n.code,{children:"/products"})," whereas she/he is not authenticated, then the server will respond with a 400 error and the ",(0,t.jsx)(n.code,{children:"ValidateBody"})," hook and ",(0,t.jsx)(n.code,{children:"addProduct"})," method won't be executed."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you need to apply a hook globally, you just have to make it decorate the root controller: ",(0,t.jsx)(n.code,{children:"AppController"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@Log('Request body:', { body: true })\nexport class AppController {\n // ...\n}\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"build-custom-hooks",children:"Build Custom Hooks"}),"\n",(0,t.jsx)(n.p,{children:"In addition to the hooks provided by FoalTS, you can also create your own."}),"\n",(0,t.jsx)(n.p,{children:"A hook is made of a small function, synchronous or asynchronous, that is executed before the controller method."}),"\n",(0,t.jsxs)(n.p,{children:["To create one, you need to call the ",(0,t.jsx)(n.code,{children:"Hook"})," function."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    console.log('Receiving GET / request...');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The hook function can take two parameters: the ",(0,t.jsx)(n.code,{children:"Context"})," object and the service manager. The ",(0,t.jsx)(n.a,{href:"/docs/architecture/controllers",children:"Context object"})," is specific to the request and gives you information on it. The service manager lets you access any service through its ",(0,t.jsx)(n.code,{children:"get"})," method."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass MyController {\n\n  @Get('/')\n  @Hook((ctx, services) => {\n    const logger = services.get(Logger);\n    logger.log('IP: ' + ctx.request.ip);\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A hook function can return an ",(0,t.jsx)(n.code,{children:"HttpResponse"})," object. If so, the remaining hooks and the controller method are not executed and the object is used to render the HTTP response."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Hook, HttpResponseBadRequest, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n\n  @Post('/')\n  @Hook((ctx: Context) => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also have access to the controller instance through the ",(0,t.jsx)(n.code,{children:"this"})," keyword."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { getAjvInstance, Hook, HttpResponseBadRequest, HttpResponseOK, Post } from '@foal/core';\n\nclass MyController {\n\n  schema = {\n    properties: {\n      price: { type: 'number' }\n    },\n    type: 'object',\n  };\n\n  @Post('/')\n  @Hook(function (this: MyController, ctx, services) {\n    const ajv = getAjvInstance();\n    const requestBody = ctx.request.body;\n    if (!ajv.validate(this.schema, requestBody)) {\n      return new HttpResponseBadRequest(ajv.errors);\n    }\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"executing-logic-after-the-controller-method",children:"Executing Logic After the Controller Method"}),"\n",(0,t.jsxs)(n.p,{children:["A hook can also be used to execute extra logic after the controller method. To do so, you can return a ",(0,t.jsx)(n.em,{children:"hook post function"})," inside the hook. This function will be executed after the controller method. It takes exactly one parameter: the ",(0,t.jsx)(n.code,{children:"HttpResponse"})," object returned by the controller."]}),"\n",(0,t.jsx)(n.p,{children:"The below example shows how to add a custom cookie to the response returned by the controller."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => response => {\n    response.setCookie('X-CSRF-TOKEN', 'xxx');\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to execute logic both before and after the controller method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nclass MyController {\n\n  @Get('/')\n  @Hook(() => {\n    const time = process.hrtime();\n\n    return () => {\n      const seconds = process.hrtime(time)[0];\n      console.log(`Executed in ${seconds} seconds`);\n    };\n  })\n  index() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"grouping-several-hooks-into-one",children:"Grouping Several Hooks into One"}),"\n",(0,t.jsxs)(n.p,{children:["In case you need to group several hooks together, the ",(0,t.jsx)(n.code,{children:"MergeHooks"})," function can be used to do this."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, HttpResponseOK, MergeHooks, ValidateCookie, ValidateHeader } from '@foal/core';\n\n// Before\n\nclass MyController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateCookie('foo')\n  readProducts() {\n    return new HttpResponseOK();\n  }\n}\n\n// After\n\nfunction ValidateAll() {\n  return MergeHooks(\n    ValidateHeader('Authorization'),\n    ValidateCookie('foo')\n  );\n}\n\nclass MyController {\n  @Get('/products')\n  @ValidateAll()\n  readProducts() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"testing-hooks",children:"Testing Hooks"}),"\n",(0,t.jsxs)(n.p,{children:["Hooks can be tested thanks to the utility ",(0,t.jsx)(n.code,{children:"getHookFunction"})," (or ",(0,t.jsx)(n.code,{children:"getHookFunctions"})," if the hook was made from several functions)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// validate-body.hook.ts\nimport { Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateBody() {\n  return Hook(ctx => {\n    if (typeof ctx.request.body.name !== 'string') {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// validate-body.hook.spec.ts\nimport {\n  Context, getHookFunction,\n  isHttpResponseBadRequest, ServiceManager\n} from '@foal/core';\nimport { ValidateBody } from './validate-body.hook';\n\nit('ValidateBody', () => {\n  const ctx = new Context({\n    // fake request object\n    body: { name: 3 }\n  });\n  const hook = getHookFunction(ValidateBody());\n  \n  const response = hook(ctx, new ServiceManager());\n\n  if (!isHttpResponseBadRequest(response)) {\n    throw new Error('The hook should return an HttpResponseBadRequest object.');\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"testing-hook-post-functions",children:"Testing Hook Post Functions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// add-xxx-header.hook.ts\nimport { Hook } from '@foal/core';\n\nexport function AddXXXHeader() {\n  return Hook(ctx => response => {\n    response.setHeader('XXX', 'YYY');\n  });\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// add-xxx-header.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport {\n  Context, getHookFunction, HttpResponseOK,\n  isHttpResponse, ServiceManager\n} from '@foal/core';\nimport { AddXXXHeader } from './add-xxx-header.hook';\n\nit('AddXXXHeader', async () => {\n  const ctx = new Context({});\n  const hook = getHookFunction(AddXXXHeader());\n  \n  const postHookFunction = await hook(ctx, new ServiceManager());\n  if (postHookFunction === undefined || isHttpResponse(postHookFunction)) {\n    throw new Error('The hook should return a post hook function');\n  }\n\n  const response = new HttpResponseOK();\n  await postHookFunction(response);\n\n  strictEqual(response.getHeader('XXX'), 'YYY');\n});\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"testing-hooks-that-use-this",children:["Testing Hooks that Use ",(0,t.jsx)(n.code,{children:"this"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// validate-param-type.hook.ts\nimport { Context, Hook, HttpResponseBadRequest } from '@foal/core';\n\nexport function ValidateParamType() {\n  return Hook(function(this: any, ctx: Context) {\n    if (typeof ctx.request.params.id !== this.paramType) {\n      return new HttpResponseBadRequest();\n    }\n  });\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// validate-param-type.hook.spec.ts\nimport { Context, getHookFunction, HttpResponseBadRequest } from '@foal/core';\nimport { ValidateParamType } from './validate-param-type';\n\nit('ValidateParamType', () => {\n  const ctx = new Context({\n    // fake request object\n    params: { id: 'xxx' }\n  });\n  const controller = {\n    paramType: 'number'\n  };\n  const hook = getHookFunction(ValidateParamType()).bind(controller);\n\n  const response = hook(ctx, new ServiceManager());\n\n  if (!isHttpResponseBadRequest(response)) {\n    throw new Error('The hook should return an HttpResponseBadRequest object.');\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mocking-services",children:"Mocking services"}),"\n",(0,t.jsxs)(n.p,{children:["You can mock services by using the ",(0,t.jsx)(n.code,{children:"set"})," method of the service manager."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// authenticate.hook.ts\nimport { Hook } from '@foal/core';\n\nexport class UserService {\n  private users: any = {\n    eh4sb: { id: 1, name: 'John' },\n    kadu5: { id: 2, name: 'Mary' }\n  };\n\n  getUser(key: string) {\n    return this.users[key] ?? null;\n  }\n}\n\nexport const authenticate = Hook((ctx, services) => {\n  const users = services.get(UserService);\n  ctx.user = users.getUser(ctx.request.params.key);\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// authenticate.hook.spec.ts\nimport { strictEqual } from 'assert';\nimport { Context, getHookFunction, ServiceManager } from '@foal/core';\nimport { authenticate, UserService } from './authenticate.hook';\n\nit('authenticate', () => {\n  const hook = getHookFunction(authenticate);\n\n  const user = { id: 3, name: 'Bob' };\n\n  new Context({ params: { key: 'xxx' }});\n  const services = new ServiceManager();\n  services.set(UserService, {\n    getUser() {\n      return user;\n    }\n  })\n  \n  hook(ctx, services);\n\n  strictEqual(ctx.user, user);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hook-factories",children:"Hook factories"}),"\n",(0,t.jsx)(n.p,{children:"Usually, we don't create hooks directly but with hook factories. Thus it is easier to customize the hook behavior on each route."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Get, Hook, HttpResponseOK } from '@foal/core';\n\nfunction Log(msg: string) {\n  return Hook(() => { console.log(msg); });\n}\n\nclass MyController {\n  @Get('/route1')\n  @Log('Receiving a GET /route1 request...')\n  route1() {\n    return new HttpResponseOK('Hello world!');\n  }\n\n  @Get('/route2')\n  @Log('Receiving a GET /route2 request...')\n  route2() {\n    return new HttpResponseOK('Hello world!');\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"forward-data-between-hooks",children:"Forward Data Between Hooks"}),"\n",(0,t.jsxs)(n.p,{children:["If you need to transfer data from one hook to another or to the controller method, you can use the ",(0,t.jsx)(n.code,{children:"state"})," property of the ",(0,t.jsx)(n.code,{children:"Context"})," object to do so."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get, Hook, HttpResponseOK, UserRequired } from '@foal/core';\nimport { Org } from '../entities';\n\nfunction AddOrgToContext() {\n  return Hook(async ctx => {\n    if (ctx.user) {\n      ctx.state.org = await Org.findOneByOrFail({ id: ctx.user.orgId });\n    }\n  })\n}\n\nexport class ApiController {\n\n  @Get('/org-name')\n  @UserRequired()\n  @AddOrgToContext()\n  readOrgName(ctx: Context) {\n    return new HttpResponseOK(ctx.state.org.name);\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"If needed, you can also define an interface for your state and pass it as type argument to the context."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface State {\n  org: Org;\n}\n\nexport class ApiController {\n  // ...\n  readOrgName(ctx: Context<any, State>) {\n    // ...\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);