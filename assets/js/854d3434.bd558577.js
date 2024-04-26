"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6674],{38289:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=r(74848),o=r(28453),s=r(11470),i=r(19365);const l={title:"OpenAPI & Swagger UI"},a=void 0,c={id:"api-section/openapi-and-swagger-ui",title:"OpenAPI & Swagger UI",description:"Introduction",source:"@site/versioned_docs/version-2.x/api-section/openapi-and-swagger-ui.md",sourceDirName:"api-section",slug:"/api-section/openapi-and-swagger-ui",permalink:"/docs/2.x/api-section/openapi-and-swagger-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/api-section/openapi-and-swagger-ui.md",tags:[],version:"2.x",frontMatter:{title:"OpenAPI & Swagger UI"},sidebar:"someSidebar",previous:{title:"REST API",permalink:"/docs/2.x/api-section/rest-blueprints"},next:{title:"Public API & CORS Requests",permalink:"/docs/2.x/api-section/public-api-and-cors-requests"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"The Basics",id:"the-basics",level:3},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",level:3},{value:"Use Existing Hooks",id:"use-existing-hooks",level:3},{value:"Generate the API Document",id:"generate-the-api-document",level:3},{value:"from the controllers",id:"from-the-controllers",level:4},{value:"from a shell script",id:"from-a-shell-script",level:4},{value:"using the Swagger UI controller",id:"using-the-swagger-ui-controller",level:4},{value:"Swagger UI",id:"swagger-ui",level:2},{value:"Simple case",id:"simple-case",level:3},{value:"With an URL",id:"with-an-url",level:3},{value:"Several APIs or Versions",id:"several-apis-or-versions",level:3},{value:"Using a Static File",id:"using-a-static-file",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Using Controller Properties",id:"using-controller-properties",level:3},{value:"In-Depth Overview",id:"in-depth-overview",level:3},{value:"Define and Reuse Components",id:"define-and-reuse-components",level:3},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",level:3},{value:"Common Errors",id:"common-errors",level:3},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OpenAPI Specification"})," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",(0,t.jsx)(n.em,{children:"document"})," allows developers to describe entirely an API."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Swagger UI"})," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"https://editor.swagger.io/",children:"Example of OpenAPI document and Swagger Visualisation"})})}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This example shows how to generate a documentation page of your API directly from your hooks and controllers."})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller } from '@foal/core';\n\nimport { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController),\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiInfo, ApiServer, Context, Post, ValidateBody } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@JWTRequired()\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    additionalProperties: false,\n  })\n  createProduct(ctx: Context) {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"openapi.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Result"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Swagger page",src:r(79015).A+"",width:"2560",height:"1600"})}),"\n",(0,t.jsx)(n.h2,{id:"openapi",children:"OpenAPI"}),"\n",(0,t.jsx)(n.h3,{id:"the-basics",children:"The Basics"}),"\n",(0,t.jsxs)(n.p,{children:["The first thing to do is to add the ",(0,t.jsx)(n.code,{children:"@ApiInfo"})," decorator to the root controller of the API. Two attributes are required: the ",(0,t.jsx)(n.code,{children:"title"})," and the ",(0,t.jsx)(n.code,{children:"version"})," of the API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then each controller method can be documented with the ",(0,t.jsx)(n.code,{children:"@ApiOperation"})," decorator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                },\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        },\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Beside the ",(0,t.jsx)(n.code,{children:"@ApiOperation"})," decorator, you can also use other decorators more specific to improve the readability of the code."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"Operation Decorators"})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiOperationSummary"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiOperationId"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiOperationDescription"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiServer"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiRequestBody"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiSecurityRequirement"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineTag"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiExternalDoc"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiUseTag"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiParameter"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiResponse"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiCallback"})})})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dont-repeat-yourself-and-decorate-sub-controllers",children:"Don't Repeat Yourself and Decorate Sub-Controllers"}),"\n",(0,t.jsx)(n.p,{children:"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The generated document will then look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-existing-hooks",children:"Use Existing Hooks"}),"\n",(0,t.jsx)(n.p,{children:"The addition of these decorators can be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"To avoid this, the framework hooks already expose an API specification which is directly included in the generated OpenAPI document."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired()\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  createProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can disable this behavior globally with the ",(0,t.jsx)(n.a,{href:"/docs/2.x/architecture/configuration",children:"configuration key"})," ",(0,t.jsx)(n.code,{children:"setting.openapi.useHooks"}),"."]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(i.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"settings:\n  openapi:\n    useHooks: false\n"})})}),(0,t.jsx)(i.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "openapi": {\n      "useHooks": false\n    }\n  }\n}\n'})})}),(0,t.jsx)(i.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  settings: {\n    openapi: {\n      useHooks: false\n    }\n  }\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also disable it on a specific hook with the ",(0,t.jsx)(n.code,{children:"openapi"})," option."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"generate-the-api-document",children:"Generate the API Document"}),"\n",(0,t.jsx)(n.p,{children:"Once the controllers are decorated, there are several ways to generate the OpenAPI document."}),"\n",(0,t.jsx)(n.h4,{id:"from-the-controllers",children:"from the controllers"}),"\n",(0,t.jsxs)(n.p,{children:["Documents can be retrieved with the ",(0,t.jsx)(n.code,{children:"OpenApi"})," service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency, OpenApi } from '@foal/core';\n\nclass Service {\n  @dependency\n  openApi: OpenApi;\n\n  foo() {\n    const document = this.openApi.getDocument(ApiController);\n  }\n}\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"from-a-shell-script",children:"from a shell script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal generate script generate-openapi-doc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"createOpenApiDocument"})," function can also be used in a shell script to generate the document. You can provide it with an optional serviceManager if needed."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note that this function instantiates the controllers. So if you have logic in your constructors, you may prefer to put it in ",(0,t.jsx)(n.code,{children:"init"})," methods."]})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/scripts/generate-openapi-doc.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build:scripts\nfoal run generate-openapi-doc\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-the-swagger-ui-controller",children:"using the Swagger UI controller"}),"\n",(0,t.jsxs)(n.p,{children:["Another alternative is to use the  ",(0,t.jsx)(n.a,{href:"#Swagger%20UI",children:"SwaggerController"})," directly. This allows you to serve the document(s) at ",(0,t.jsx)(n.code,{children:"/openapi.json"})," and to use it (them) in a Swagger interface."]}),"\n",(0,t.jsx)(n.h2,{id:"swagger-ui",children:"Swagger UI"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example of Swagger UI",src:r(4326).A+"",width:"964",height:"1162"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @foal/swagger\n"})}),"\n",(0,t.jsx)(n.h3,{id:"simple-case",children:"Simple case"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"open-api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Opening the browser at the path ",(0,t.jsx)(n.code,{children:"/swagger"})," will display the documentation of the ",(0,t.jsx)(n.code,{children:"ApiController"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"with-an-url",children:"With an URL"}),"\n",(0,t.jsx)(n.p,{children:"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"several-apis-or-versions",children:"Several APIs or Versions"}),"\n",(0,t.jsx)(n.p,{children:"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example of several versions",src:r(26159).A+"",width:"1680",height:"504"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"open-api.controller.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-a-static-file",children:"Using a Static File"}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer to write manually your OpenAPI document, you can add an ",(0,t.jsx)(n.code,{children:"openapi.yml"})," file in the ",(0,t.jsx)(n.code,{children:"public/"})," directory and configure your ",(0,t.jsx)(n.code,{children:"SwaggerController"})," as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsx)(n.h3,{id:"using-controller-properties",children:"Using Controller Properties"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"in-depth-overview",children:"In-Depth Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"FoalTS automatically resolves the path items and operations based on your controller paths."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The decorators ",(0,t.jsx)(n.code,{children:"@ApiServer"}),", ",(0,t.jsx)(n.code,{children:"@ApiSecurityRequirement"})," and ",(0,t.jsx)(n.code,{children:"@ApiExternalDocs"})," have a different behavior depending on if they decorate the root controller or a subcontroller / a method."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with the root controller"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example with a subcontroller / a method"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"define-and-reuse-components",children:"Define and Reuse Components"}),"\n",(0,t.jsx)(n.p,{children:"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    description: 'successful operation'\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schemas/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    description: 'successful operation',\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schemas/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"Component Decorators"})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineSchema"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineResponse"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineParameter"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineExample"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineRequestBody"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineHeader"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineSecurityScheme"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineLink"})})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ApiDefineCallback"})})})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@ApiDefineXXX"})," decorators can be added to any controllers or methods but they always define components in the global scope of the API the controller belongs to."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"--"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The schemas defined with these decorators can also be re-used in the ",(0,t.jsx)(n.code,{children:"@ValidateXXX"})," hooks."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const productSchema = {\n  // ...\n}\n\n@ApiDefineSchema('product', productSchema)\n@ValidateBody({\n  $ref: '#/components/schemas/product'\n})\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"generate-and-save-a-specification-file-with-a-shell-script",children:"Generate and Save a Specification File with a Shell Script"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"foal generate script generate-openapi-doc\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/scripts/generate-openapi-doc.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm run build\nfoal run generate-openapi-doc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"common-errors",children:"Common Errors"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This example will throw this error."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n"})}),"\n",(0,t.jsx)(n.p,{children:"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"extend-swagger-ui-options",children:"Extend Swagger UI options"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/",children:"Swagger UI options"})," can be extended using the ",(0,t.jsx)(n.code,{children:"uiOptions"})," property."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>b});var t=r(96540),o=r(34164),s=r(23104),i=r(56347),l=r(205),a=r(57485),c=r(31682),d=r(89466);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[i,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,p]=m({queryString:r,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),g=(()=>{const e=c??x;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),p(e),j(e)}),[p,j,s]),tabValues:s}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function A(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=a.indexOf(n),o=l[r].value;o!==t&&(c(n),i(o))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:p,onClick:d,...s,className:(0,o.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,f.jsx)(A,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function b(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(n))}},79015:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/openapi-quick-start-4ec0b3bb97350bd038b2015be28a1381.png"},4326:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},26159:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);