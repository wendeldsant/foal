"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),o=t(86010),l=t(72389),p=t(67392),i=t(7094),s=t(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:m,values:k,groupId:g,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),N=(0,p.l)(y,((e,n)=>e.value===n.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const A=null===m?m:null!=(n=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==A&&!y.some((e=>e.value===A)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:b}=(0,i.U)(),[w,C]=(0,a.useState)(A),P=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==w&&y.some((n=>n.value===e))&&C(e)}const S=e=>{const n=e.currentTarget,t=P.indexOf(n),r=y[t].value;r!==w&&(I(n),C(r),null!=g&&b(g,String(r)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=P.indexOf(e.currentTarget)+1;t=null!=(r=P[n])?r:P[0];break}case"ArrowLeft":{var a;const n=P.indexOf(e.currentTarget)-1;t=null!=(a=P[n])?a:P[P.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},y.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>P.push(e),onKeyDown:x,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},35008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=t(87462),a=(t(67294),t(3905)),o=t(65488),l=t(85162);const p={title:"OpenAPI & Swagger UI"},i=void 0,s={unversionedId:"api-section/openapi-and-swagger-ui",id:"version-2.x/api-section/openapi-and-swagger-ui",title:"OpenAPI & Swagger UI",description:"Introduction",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/api-section/openapi-and-swagger-ui.md",sourceDirName:"api-section",slug:"/api-section/openapi-and-swagger-ui",permalink:"/es/docs/2.x/api-section/openapi-and-swagger-ui",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/api-section/openapi-and-swagger-ui.md",tags:[],version:"2.x",frontMatter:{title:"OpenAPI & Swagger UI"},sidebar:"someSidebar",previous:{title:"API REST",permalink:"/es/docs/2.x/api-section/rest-blueprints"},next:{title:"API P\xfablicas & Solicitudes CORS",permalink:"/es/docs/2.x/api-section/public-api-and-cors-requests"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"The Basics",id:"the-basics",level:3},{value:"Don&#39;t Repeat Yourself and Decorate Sub-Controllers",id:"dont-repeat-yourself-and-decorate-sub-controllers",level:3},{value:"Use Existing Hooks",id:"use-existing-hooks",level:3},{value:"Generate the API Document",id:"generate-the-api-document",level:3},{value:"from the controllers",id:"from-the-controllers",level:4},{value:"from a shell script",id:"from-a-shell-script",level:4},{value:"using the Swagger UI controller",id:"using-the-swagger-ui-controller",level:4},{value:"Swagger UI",id:"swagger-ui",level:2},{value:"Simple case",id:"simple-case",level:3},{value:"With an URL",id:"with-an-url",level:3},{value:"Several APIs or Versions",id:"several-apis-or-versions",level:3},{value:"Using a Static File",id:"using-a-static-file",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Using Controller Properties",id:"using-controller-properties",level:3},{value:"In-Depth Overview",id:"in-depth-overview",level:3},{value:"Define and Reuse Components",id:"define-and-reuse-components",level:3},{value:"Generate and Save a Specification File with a Shell Script",id:"generate-and-save-a-specification-file-with-a-shell-script",level:3},{value:"Common Errors",id:"common-errors",level:3},{value:"Extend Swagger UI options",id:"extend-swagger-ui-options",level:3}],d={toc:u};function m(e){let{components:n,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OpenAPI Specification")," (formerly known as Swagger Specification) is an API description format for REST APIs. An OpenAPI ",(0,a.kt)("em",{parentName:"p"},"document")," allows developers to describe entirely an API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Swagger UI")," is a graphical interface to visualize and interact with the API\u2019s resources. It is automatically generated from one or several OpenAPI documents."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://editor.swagger.io/"},"Example of OpenAPI document and Swagger Visualisation"))),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"This example shows how to generate a documentation page of your API directly from your hooks and controllers."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nimport { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, Context, Post, ValidateBody } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\n@JWTRequired()\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    additionalProperties: false,\n  })\n  createProduct(ctx: Context) {\n    // ...\n  }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"openapi.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swagger page",src:t(58729).Z,width:"2560",height:"1600"})),(0,a.kt)("h2",{id:"openapi"},"OpenAPI"),(0,a.kt)("h3",{id:"the-basics"},"The Basics"),(0,a.kt)("p",null,"The first thing to do is to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiInfo")," decorator to the root controller of the API. Two attributes are required: the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," of the API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n// @ApiServer({\n//   url: '/api'\n// })\nexport class ApiController {\n  // ...\n}\n")),(0,a.kt)("p",null,"Then each controller method can be documented with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiOperation, Get } from '@foal/core';\n\n// ...\nexport class ApiController {\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        content: {\n          'application/json': {\n            schema: {\n              items: {\n                properties: {\n                  name: { type: 'string' }\n                },\n                type: 'object',\n                required: [ 'name' ]\n              },\n              type: 'array',\n            }\n          }\n        },\n        description: 'successful operation'\n      }\n    },\n    summary: 'Return a list of all the products.'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Beside the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiOperation")," decorator, you can also use other decorators more specific to improve the readability of the code."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation Decorators"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationSummary"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationId"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiOperationDescription"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiServer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiRequestBody"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiSecurityRequirement"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineTag"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiExternalDoc"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiUseTag"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiParameter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiResponse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiCallback"))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiOperation, ApiResponse, Get } from '@foal/core';\n// ...\nexport class ApiController {\n\n  @Get('/products')\n  @ApiOperation({\n    responses: {\n      200: {\n        description: 'successful operation'\n      },\n      404: {\n        description: 'not found'\n      },\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  // is equivalent to\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h3",{id:"dont-repeat-yourself-and-decorate-sub-controllers"},"Don't Repeat Yourself and Decorate Sub-Controllers"),(0,a.kt)("p",null,"Large applications can have many subcontrollers. FoalTS automatically resolves the paths for you and allows you to share common specifications between several operations."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiDeprecated, ApiInfo, ApiResponse, controller, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n}\n\n// All the operations of this controller and\n// its subcontrollers should be deprecated.\n@ApiDeprecated()\nclass ProductController {\n\n  @Get()\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/:productId')\n  @ApiResponse(200, { description: 'successful operation' })\n  @ApiResponse(404, { description: 'not found' })\n  readProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("p",null,"The generated document will then look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /products: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n  /products/{productId}: # The path is computed automatically\n    get:\n      deprecated: true # The operation is deprecated\n      responses:\n        200:\n          description: successful operation\n        404:\n          description: not found\n")),(0,a.kt)("h3",{id:"use-existing-hooks"},"Use Existing Hooks"),(0,a.kt)("p",null,"The addition of these decorators can be quite redundant with existing hooks. For example, if we want to write OpenAPI documentation for authentication and validation of the request body, we may end up with something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired()\n@ApiSecurityRequirement({ bearerAuth: [] })\n@ApiDefineSecurityScheme('bearerAuth', {\n  type: 'http',\n  scheme: 'bearer',\n  bearerFormat: 'JWT'\n})\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  @ApiRequestBody({\n     required: true,\n     content: {\n       'application/json': { schema }\n     }\n  })\n  createProducts() {\n    \n  }\n\n}\n")),(0,a.kt)("p",null,"To avoid this, the framework hooks already expose an API specification which is directly included in the generated OpenAPI document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired()\nexport class ApiController {\n  \n  @Post('/products')\n  @ValidateBody(schema)\n  createProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("p",null,"You can disable this behavior globally with the ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/2.x/architecture/configuration"},"configuration key")," ",(0,a.kt)("inlineCode",{parentName:"p"},"setting.openapi.useHooks"),"."),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  openapi:\n    useHooks: false\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "openapi": {\n      "useHooks": false\n    }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  settings: {\n    openapi: {\n      useHooks: false\n    }\n  }\n}\n")))),(0,a.kt)("p",null,"You can also disable it on a specific hook with the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ApiController {\n  \n  @Post('/products')\n  // Generate automatically the OpenAPI spec for the request body\n  @ValidateBody(schema)\n  // Choose to write a customize spec for the path parameters\n  @ValidateParams(schema2, { openapi: false })\n  @ApiParameter( ... )\n  createProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h3",{id:"generate-the-api-document"},"Generate the API Document"),(0,a.kt)("p",null,"Once the controllers are decorated, there are several ways to generate the OpenAPI document."),(0,a.kt)("h4",{id:"from-the-controllers"},"from the controllers"),(0,a.kt)("p",null,"Documents can be retrieved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenApi")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, OpenApi } from '@foal/core';\n\nclass Service {\n  @dependency\n  openApi: OpenApi;\n\n  foo() {\n    const document = this.openApi.getDocument(ApiController);\n  }\n}\n\n")),(0,a.kt)("h4",{id:"from-a-shell-script"},"from a shell script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate script generate-openapi-doc\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createOpenApiDocument")," function can also be used in a shell script to generate the document. You can provide it with an optional serviceManager if needed."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Note that this function instantiates the controllers. So if you have logic in your constructors, you may prefer to put it in ",(0,a.kt)("inlineCode",{parentName:"em"},"init")," methods."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:scripts\nfoal run generate-openapi-doc\n")),(0,a.kt)("h4",{id:"using-the-swagger-ui-controller"},"using the Swagger UI controller"),(0,a.kt)("p",null,"Another alternative is to use the  ",(0,a.kt)("a",{parentName:"p",href:"#Swagger%20UI"},"SwaggerController")," directly. This allows you to serve the document(s) at ",(0,a.kt)("inlineCode",{parentName:"p"},"/openapi.json")," and to use it (them) in a Swagger interface."),(0,a.kt)("h2",{id:"swagger-ui"},"Swagger UI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of Swagger UI",src:t(92608).Z,width:"964",height:"1162"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @foal/swagger\n")),(0,a.kt)("h3",{id:"simple-case"},"Simple case"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiController, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenApiController)\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"open-api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n}\n\n")),(0,a.kt)("p",null,"Opening the browser at the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/swagger")," will display the documentation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiController"),"."),(0,a.kt)("h3",{id:"with-an-url"},"With an URL"),(0,a.kt)("p",null,"If needed, you can also specify the URL of a custom OpenAPI file (YAML or JSON)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: 'https://petstore.swagger.io/v2/swagger.json' };\n}\n\n")),(0,a.kt)("h3",{id:"several-apis-or-versions"},"Several APIs or Versions"),(0,a.kt)("p",null,"Some applications may serve several APIs (for example two versions of a same API). Here is an example on how to handle this."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of several versions",src:t(6087).Z,width:"1680",height:"504"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\n\nimport { ApiV1Controller, ApiV2ontroller, OpenApiController } from './controllers';\n\nexport class AppController {\n  subControllers = [\n    controller('/api', ApiV1Controller),\n    controller('/api2', ApiV2Controller),\n    controller('/swagger', OpenApiController),\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"open-api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiV1Controller } from './api-v1.controller';\nimport { ApiV2Controller } from './api-v2.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = [\n    { name: 'v1', controllerClass: ApiV1Controller },\n    { name: 'v2', controllerClass: ApiV2Controller, primary: true },\n  ]\n}\n")),(0,a.kt)("h3",{id:"using-a-static-file"},"Using a Static File"),(0,a.kt)("p",null,"If you prefer to write manually your OpenAPI document, you can add an ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi.yml")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"public/")," directory and configure your ",(0,a.kt)("inlineCode",{parentName:"p"},"SwaggerController")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nexport class OpenApiController extends SwaggerController {\n  options = { url: '/openapi.yml' };\n}\n\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"using-controller-properties"},"Using Controller Properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiRequestBody, IApiRequestBody, Post } from '@foal/core';\n\nclass ApiController {\n\n  requestBody: IApiRequestBody = {\n    content: {\n      'application/json': {\n        schema: {\n          type: 'object'\n        }\n      }\n    },\n    required: true\n  };\n\n  @Post('/products')\n  // This is invalid:\n  // @ApiRequestBody(this.requestBody)\n  // This is valid:\n  @ApiRequestBody(controller => controller.requestBody)\n  createProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("h3",{id:"in-depth-overview"},"In-Depth Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FoalTS automatically resolves the path items and operations based on your controller paths.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, Get, Post } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  readProducts() {\n    // ...\n  }\n\n  @Post('/products')\n  @ApiResponse(200, { description: 'successful operation' })\n  createProduct() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'openapi: 3.0.0\ninfo:\n  title: \'A Great API\'\n  version: 1.0.0\npaths:\n  /products: # Foal automatically puts the "get" and "post" operations under the same path item as required by OpenAPI rules.\n    get:\n      responses:\n        200:\n          description: successful operation\n    post:\n      responses:\n        200:\n          description: successful operation\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The decorators ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiServer"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiSecurityRequirement")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@ApiExternalDocs")," have a different behavior depending on if they decorate the root controller or a subcontroller / a method.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with the root controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, ApiServer } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiServer({ url: 'http://example.com' })\nexport class ApiController {\n\n  // ...\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  # ...\nservers:\n- url: http://example.com\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with a subcontroller / a method")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiResponse, ApiServer, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\nexport class ApiController {\n\n  @Get('/')\n  @ApiServer({ url: 'http://example.com' })\n  @ApiResponse(200, { description: 'successful operation' })\n  index() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: 'A Great API'\n  version: 1.0.0\npaths:\n  /:\n    get:\n      responses:\n        200:\n          description: successful operation\n      servers:\n      - url: http://example.com\n")),(0,a.kt)("h3",{id:"define-and-reuse-components"},"Define and Reuse Components"),(0,a.kt)("p",null,"OpenAPI allows you to define and reuse components. Here is a way to achieve this with Foal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiDefineSchema, Get } from '@foal/core';\n\n@ApiInfo({\n  title: 'A Great API',\n  version: '1.0.0'\n})\n@ApiDefineSchema('product', {\n  type: 'object',\n  properties: {\n    name: { type: 'string' }\n  }\n  required: [ 'name' ]\n})\nexport class ApiController {\n\n  @Get('/products/:productId')\n  @ApiResponse(200, {\n    description: 'successful operation'\n    content: {\n      'application/json': {\n        schema: { $ref: '#/components/schemas/product' }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n  @Get('/products')\n  @ApiResponse(200, {\n    description: 'successful operation',\n    content: {\n      'application/json': {\n        schema: {\n          type: 'array',\n          items: { $ref: '#/components/schemas/product' }\n        }\n      }\n    }\n  })\n  readProducts() {\n    // ...\n  }\n\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component Decorators"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineSchema"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineResponse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineParameter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineExample"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineRequestBody"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineHeader"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineSecurityScheme"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineLink"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@ApiDefineCallback"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The ",(0,a.kt)("inlineCode",{parentName:"p"},"@ApiDefineXXX")," decorators can be added to any controllers or methods but they always define components in the global scope of the API the controller belongs to.")),(0,a.kt)("p",null,"--"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The schemas defined with these decorators can also be re-used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ValidateXXX")," hooks."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const productSchema = {\n  // ...\n}\n\n@ApiDefineSchema('product', productSchema)\n@ValidateBody({\n  $ref: '#/components/schemas/product'\n})\n"))),(0,a.kt)("h3",{id:"generate-and-save-a-specification-file-with-a-shell-script"},"Generate and Save a Specification File with a Shell Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate script generate-openapi-doc\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/scripts/generate-openapi-doc.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { writeFileSync } from 'fs';\n\n// 3p\nimport { createOpenApiDocument } from '@foal/core';\nimport { stringify } from 'yamljs';\n\n// App\nimport { ApiController } from '../app/controllers';\n\nexport async function main() {\n  const document = createOpenApiDocument(ApiController);\n  const yamlDocument = stringify(document);\n\n  writeFileSync('openapi.yml', yamlDocument, 'utf8');\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run build\nfoal run generate-openapi-doc\n")),(0,a.kt)("h3",{id:"common-errors"},"Common Errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class ApiController {\n  @Get('/products/:id')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("p",null,"This example will throw this error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.\n  Path 1: /products/{id}\n  Path 2: /products/{productId}\n")),(0,a.kt)("p",null,"OpenAPI does not support paths that are identical with different parameter names. Here is a way to solve this issue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class ApiController {\n  @Get('/products/:productId')\n  getProduct() {\n    return new HttpResponseOK();\n  }\n\n  @Put('/products/:productId')\n  updateProduct() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h3",{id:"extend-swagger-ui-options"},"Extend Swagger UI options"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/"},"Swagger UI options")," can be extended using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiOptions")," property."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\n\nimport { ApiController } from './api.controller';\n\nexport class OpenApiController extends SwaggerController {\n  options = { controllerClass: ApiController };\n\n  uiOptions = { docExpansion: 'full' };\n}\n\n")))}m.isMDXComponent=!0},58729:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/openapi-quick-start-4ec0b3bb97350bd038b2015be28a1381.png"},92608:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/swagger-a641f2dfd065149a6d8c2e98ccad465e.png"},6087:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/swagger3-3d35a6bde1ec1156853e65e4be372e6e.png"}}]);