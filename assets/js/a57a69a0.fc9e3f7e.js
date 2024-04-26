"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1773],{2216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=t(74848),r=t(28453),s=t(11470),o=t(19365);const i={title:"Validation & Sanitization",sidebar_label:"Validation"},l=void 0,c={id:"common/validation-and-sanitization",title:"Validation & Sanitization",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/versioned_docs/version-3.x/common/validation-and-sanitization.md",sourceDirName:"common",slug:"/common/validation-and-sanitization",permalink:"/docs/3.x/common/validation-and-sanitization",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/common/validation-and-sanitization.md",tags:[],version:"3.x",frontMatter:{title:"Validation & Sanitization",sidebar_label:"Validation"},sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/3.x/architecture/configuration"},next:{title:"Local & Cloud Storage",permalink:"/docs/3.x/common/file-storage/local-and-cloud-storage"}},d={},h=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",level:2},{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",level:3},{value:"Options",id:"options",level:3},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",level:3},{value:"ValidateBody",id:"validatebody",level:4},{value:"ValidateHeader",id:"validateheader",level:4},{value:"ValidateCookie",id:"validatecookie",level:4},{value:"ValidatePathParam",id:"validatepathparam",level:4},{value:"ValidateQueryParam",id:"validatequeryparam",level:4},{value:"Sanitization Example",id:"sanitization-example",level:3},{value:"Custom Error Messages",id:"custom-error-messages",level:3},{value:"Referencing Schemas",id:"referencing-schemas",level:3},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",level:3},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Validation"})," checks if an input meets a set of criteria (such as the value of a property is a string)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Sanitization"})," modifies the input to ensure that it is valid (such as coercing a type)."]}),"\n",(0,a.jsx)(n.p,{children:"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."}),"\n",(0,a.jsx)(n.h2,{id:"with-a-json-schema-ajv",children:"With a JSON Schema (AJV)"}),"\n",(0,a.jsx)(n.h3,{id:"ajv-the-json-schema-validator",children:"Ajv, the JSON Schema Validator"}),"\n",(0,a.jsxs)(n.p,{children:["FoalTS default validation and sanitization system is based on ",(0,a.jsx)(n.a,{href:"https://github.com/ajv-validator/ajv/",children:"AJV version 8"}),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",(0,a.jsx)(n.a,{href:"https://ajv.js.org/",children:"website"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.p,{children:"Here is the list of AJV options that can be overridden with FoalTS configuration system."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ajv option"}),(0,a.jsx)(n.th,{children:"Configuration key"}),(0,a.jsx)(n.th,{children:"FoalTS default"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$data"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.$data"})}),(0,a.jsx)(n.td,{children:"-"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"allErrors"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.allErrors"})}),(0,a.jsx)(n.td,{children:"-"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"coerceTypes"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.coerceType"})}),(0,a.jsx)(n.td,{children:"true"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"removeAdditional"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.removeAdditional"})}),(0,a.jsx)(n.td,{children:"true"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"useDefaults"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.useDefaults"})}),(0,a.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,a.jsx)(o.A,{value:"yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"settings:\n  ajv:\n    coerceTypes: true\n"})})}),(0,a.jsx)(o.A,{value:"json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n'})})}),(0,a.jsx)(o.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    ajv: {\n      coerceTypes: true\n    }\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"validation--sanitization-of-http-requests",children:"Validation & Sanitization of HTTP Requests"}),"\n",(0,a.jsxs)(n.p,{children:["FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",(0,a.jsx)(n.code,{children:"HttpResponseBadRequest"})," object whose body contains the validation errors."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"validatebody",children:"ValidateBody"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request body (",(0,a.jsx)(n.code,{children:"Context.request.body"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /products\n\n{\n  "price": "hello world"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "body": [\n    {\n      "instancePath": "/price",\n      "keyword": "type",\n      "message": "must be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validateheader",children:"ValidateHeader"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request headers (",(0,a.jsx)(n.code,{children:"Context.request.headers"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products\nAuthorization: xxx\nA-Number: hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "headers": [\n    {\n      "instancePath": "/a-number",\n      "keyword": "type",\n      "message": "must be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatecookie",children:"ValidateCookie"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request cookies (",(0,a.jsx)(n.code,{children:"Context.request.cookies"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products\nCookies: Authorization=xxx; A-Number=hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": [\n    {\n      "instancePath": "/A-Number",\n      "keyword": "type",\n      "message": "must be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/A-Number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatepathparam",children:"ValidatePathParam"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request path parameter (",(0,a.jsx)(n.code,{children:"Context.request.params"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products/xxx\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "pathParams": [\n    {\n      "instancePath": "/productId",\n      "keyword": "type",\n      "message": "must be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatequeryparam",children:"ValidateQueryParam"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request query (",(0,a.jsx)(n.code,{children:"Context.request.query"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products?authorization=xxx&a-number=hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "query": [\n    {\n      "instancePath": "/a-number",\n      "keyword": "type",\n      "message": "must be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sanitization-example",children:"Sanitization Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n\n  @Post('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n  @Post('/sanitization')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      age: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'age' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Request"}),(0,a.jsx)(n.th,{children:"Response"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["POST ",(0,a.jsx)(n.code,{children:"/no-sanitization"})," ",(0,a.jsx)(n.code,{children:"{ name: 'Alex', age: '34', city: 'Paris' }"})]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ name: 'Alex', age: '34', city: 'Paris' }"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["POST ",(0,a.jsx)(n.code,{children:"/sanitization"})," ",(0,a.jsx)(n.code,{children:"{ name: 'Alex', age: '34', city: 'Paris' }"})]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ name: 'Alex', age: 34 }"})})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"custom-error-messages",children:"Custom Error Messages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install ajv-errors@3 ajv@8\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can customize the errors returned by the validation hooks by using the ",(0,a.jsx)(n.a,{href:"https://ajv.js.org/packages/ajv-errors.html",children:"ajv-errors"})," plugin."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Configuration"})}),"\n",(0,a.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,a.jsx)(o.A,{value:"yaml",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"settings:\n  ajv:\n    allErrors: true\n"})})}),(0,a.jsx)(o.A,{value:"json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "ajv": {\n      "allErrors": true\n    }\n  }\n}\n'})})}),(0,a.jsx)(o.A,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    ajv: {\n      allErrors: true\n    }\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\nimport ajvErrors from 'ajv-errors';\n\nexport class AppController {\n\n  init() {\n    ajvErrors(getAjvInstance());\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    errorMessage: 'The submitted product is incorrect.',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"referencing-schemas",children:"Referencing Schemas"}),"\n",(0,a.jsx)(n.p,{children:"The example below shows how a schema can be defined and reused in several hooks."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nconst productSchema = {\n  additionalProperties: false,\n  properties: {\n    name: { type: 'string' }\n  },\n  required: [ 'name' ],\n  type: 'object',\n};\n\nexport class ProductController {\n\n  boot() {\n    getAjvInstance()\n      .addSchema(productSchema, 'Product');\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: 'Product'\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"with-a-validation-class-class-validator",children:"With a Validation Class (class-validator)"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-validator",children:"class-validator"})," library can also be used in Foal to validate an object against a validation class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install class-validator\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage-with-a-hook",children:"Usage with a Hook"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install class-transformer@0.5 class-validator@0.13 @foal/typestack\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use it within a hook to validate request bodies, you can install the package ",(0,a.jsx)(n.code,{children:"@foal/typestack"})," for this. It provides a ",(0,a.jsx)(n.code,{children:"@ValidateBody"})," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.validator.ts"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.controller.ts (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.controller.ts (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request (example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /\n\n{\n  "text": "foo"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "children": [],\n    "constraints": { "isLength": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The hook takes also an optional parameter to specify the options of the ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-transformer",children:"class-transformer"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-validator",children:"class-validator"})," libraries."]}),"\n",(0,a.jsx)(n.h3,{id:"usage-with-typeorm-entities",children:"Usage with TypeORM entities"}),"\n",(0,a.jsx)(n.p,{children:"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>P});var a=t(96540),r=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=c??x;return u({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function P(e){const n=(0,j.A)();return(0,v.jsx)(b,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);