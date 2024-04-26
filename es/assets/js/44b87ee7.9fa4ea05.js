"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5985],{84146:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=r(74848),t=r(28453);const s={title:"OpenAPI & Swagger UI"},i=void 0,l={id:"api-section/openapi-and-swagger-ui",title:"OpenAPI & Swagger UI",description:"Introduction",source:"@site/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",sourceDirName:"api-section",slug:"/api-section/openapi-and-swagger-ui",permalink:"/es/docs/1.x/api-section/openapi-and-swagger-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/api-section/openapi-and-swagger-ui.md",tags:[],version:"1.x",frontMatter:{title:"OpenAPI & Swagger UI"},sidebar:"someSidebar",previous:{title:"REST API",permalink:"/es/docs/1.x/api-section/rest-blueprints"},next:{title:"Public API & CORS Requests",permalink:"/es/docs/1.x/api-section/public-api-and-cors-requests"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"The Basics",id:"the-basics",level:3},{value:"The Other Operation Decorators",id:"the-other-operation-decorators",level:3},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",level:3},{value:"Use Existing Hooks",id:"use-existing-hooks",level:3},{value:"Swagger UI",id:"swagger-ui",level:2},{value:"Simple case",id:"simple-case",level:3},{value:"With an URL",id:"with-an-url",level:3},{value:"Several APIs or Versions",id:"several-apis-or-versions",level:3},{value:"Using a Static File",id:"using-a-static-file",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Using Controller Properties",id:"using-controller-properties",level:3},{value:"The <code>OpenAPI</code> service",id:"the-openapi-service",level:3},{value:"In-Depth Overview",id:"in-depth-overview",level:3},{value:"Define and Reuse Components",id:"define-and-reuse-components",level:3},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",level:3},{value:"Common Error with <code>createOpenApiDocument</code>",id:"common-error-with-createopenapidocument",level:3},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OpenAPI Specification"})," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",(0,o.jsx)(n.em,{children:"document"})," allows developers to describe entirely an API."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Swagger UI"})," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://editor.swagger.io/",children:"Example of OpenAPI document and Swagger Visualisation"})})}),"\n",(0,o.jsx)(n.h2,{id:"openapi",children:"OpenAPI"}),"\n",(0,o.jsx)(n.h3,{id:"the-basics",children:"The Basics"}),"\n",(0,o.jsxs)(n.p,{children:["The first thing to do is to add the ",(0,o.jsx)(n.code,{children:"@ApiInfo"})," decorator to the root controller of the API. Two attributes are required: the ",(0,o.jsx)(n.code,{children:"title"})," of the application and the ",(0,o.jsx)(n.code,{children:"version"})," of the OpenAPI document."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then each controller method can be documented with the ",(0,o.jsx)(n.code,{children:"@ApiOperation"})," decorator."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                }\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        }\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"createOpenApiDocument(ApiController)"})," will generate and return the below document (presented in YAML here but the actual returned value is a JS object). This function can be imported from the ",(0,o.jsx)(n.code,{children:"@foal/core"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products:\n    get:\n      responses:\n        200:\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  type: object\n                  properties:\n                    name:\n                      type: string\n                  required:\n                  - name\n          description: successful operation\n      summary: 'Return a list of all the products.'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"the-other-operation-decorators",children:"The Other Operation Decorators"}),"\n",(0,o.jsxs)(n.p,{children:["Using the ",(0,o.jsx)(n.code,{children:"@ApiOperation"})," decorator can sometimes be cumbersome. That is why FoalTS provides other alternative decorators to improve code readability."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:"Operation Decorators"})})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiOperationSummary"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiOperationId"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiOperationDescription"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiServer"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiRequestBody"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiSecurityRequirement"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineTag"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiExternalDoc"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiUseTag"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiParameter"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiResponse"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiCallback"})})})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"dont-repeat-yourself-and-decorate-sub-controllers",children:"Don't Repeat Yourself and Decorate Sub-Controllers"}),"\n",(0,o.jsx)(n.p,{children:"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The document generated by ",(0,o.jsx)(n.code,{children:"createOpenAPIDocument"})," will then look like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-existing-hooks",children:"Use Existing Hooks"}),"\n",(0,o.jsx)(n.p,{children:"The addition of these decorators can sometimes be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To avoid this, it is possible to generate the OpenAPI documentation from the validation and authentication hooks using the ",(0,o.jsx)(n.code,{children:"openapi"})," option."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired({ openapi: true })\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema, { openapi: true })\n  createProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["More simply, you can globally set the ",(0,o.jsx)(n.a,{href:"/es/docs/1.x/deployment-and-environments/configuration",children:"configuration key"})," ",(0,o.jsx)(n.code,{children:"setting.openapi.useHooks"})," to ",(0,o.jsx)(n.code,{children:"true"})," so that each authentication and validation hooks generates documentation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"settings:\n  openapi:\n    useHooks: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that this global configuration can always be override by setting the ",(0,o.jsx)(n.code,{children:"openapi"})," option on each hook."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"swagger-ui",children:"Swagger UI"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example of Swagger UI",src:r(44286).A+"",width:"964",height:"1162"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npm install @foal/swagger\n"})}),"\n",(0,o.jsx)(n.h3,{id:"simple-case",children:"Simple case"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"open-api.controller.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Opening the browser at the path ",(0,o.jsx)(n.code,{children:"/swagger"})," will display the documentation of the ",(0,o.jsx)(n.code,{children:"ApiController"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"with-an-url",children:"With an URL"}),"\n",(0,o.jsx)(n.p,{children:"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"several-apis-or-versions",children:"Several APIs or Versions"}),"\n",(0,o.jsx)(n.p,{children:"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example of several versions",src:r(63159).A+"",width:"1680",height:"504"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api/v2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"open-api.controller.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-a-static-file",children:"Using a Static File"}),"\n",(0,o.jsxs)(n.p,{children:["If you prefer to write manually your OpenAPI document, you can add an ",(0,o.jsx)(n.code,{children:"openapi.yml"})," file in the ",(0,o.jsx)(n.code,{children:"public/"})," directory and configure your ",(0,o.jsx)(n.code,{children:"SwaggerController"})," as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,o.jsx)(n.h3,{id:"using-controller-properties",children:"Using Controller Properties"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"the-openapi-service",children:["The ",(0,o.jsx)(n.code,{children:"OpenAPI"})," service"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get, HttpResponseOK, OpenAPI } from '@foal/core';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController {\n  @dependency\n  openapi: OpenAPI;\n\n  @Get('/openapi.json')\n  readDocument() {\n    return new HttpResponseOK(\n      this.openapi.createDocument(ApiController)\n    );\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"in-depth-overview",children:"In-Depth Overview"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"FoalTS automatically resolves the path items and operations based on your controller paths."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The decorators ",(0,o.jsx)(n.code,{children:"@ApiServer"}),", ",(0,o.jsx)(n.code,{children:"@ApiSecurityRequirement"})," and ",(0,o.jsx)(n.code,{children:"@ApiExternalDocs"})," have a different behavior depending on if they decorate the root controller or a subcontroller / a method."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example with the root controller"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example with a subcontroller / a method"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n"})}),"\n",(0,o.jsx)(n.h3,{id:"define-and-reuse-components",children:"Define and Reuse Components"}),"\n",(0,o.jsx)(n.p,{children:"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schema/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schema/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.th,{children:"Component Decorators"})})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineSchema"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineResponse"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineParameter"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineExample"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineRequestBody"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineHeader"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineSecurityScheme"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineLink"})})}),(0,o.jsx)(n.tr,{children:(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@ApiDefineCallback"})})})]})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@ApiDefineXXX"})," decorators can be added to any controllers or methods but they always define components in the global scope."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"generate-and-save-a-specification-file-with-a-shell-script",children:"Generate and Save a Specification File with a Shell Script"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"foal generate script generate-openapi-doc\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"src/scripts/generate-openapi-doc.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npm run build:scripts\nfoal run generate-openapi-doc\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"common-error-with-createopenapidocument",children:["Common Error with ",(0,o.jsx)(n.code,{children:"createOpenApiDocument"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"This example will throw this error."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n"})}),"\n",(0,o.jsx)(n.p,{children:"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"extend-swagger-ui-options",children:"Extend Swagger UI options"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/",children:"Swagger UI options"})," can be extended using the ",(0,o.jsx)(n.code,{children:"uiOptions"})," property."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},44286:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},63159:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);