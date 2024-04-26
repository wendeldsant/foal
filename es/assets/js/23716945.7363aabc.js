"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5404],{19404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(74848),r=t(28453);const s={title:"Validation & Sanitization"},i=void 0,o={id:"validation-and-sanitization",title:"Validation & Sanitization",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/versioned_docs/version-1.x/validation-and-sanitization.md",sourceDirName:".",slug:"/validation-and-sanitization",permalink:"/es/docs/1.x/validation-and-sanitization",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/validation-and-sanitization.md",tags:[],version:"1.x",frontMatter:{title:"Validation & Sanitization"},sidebar:"someSidebar",previous:{title:"Groups & Permissions",permalink:"/es/docs/1.x/authentication-and-access-control/groups-and-permissions"},next:{title:"Serializing & Deserializing",permalink:"/es/docs/1.x/serializing-and-deserializing"}},l={},d=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",level:2},{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",level:3},{value:"Options",id:"options",level:3},{value:"The <code>validate</code> util",id:"the-validate-util",level:3},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",level:3},{value:"ValidateBody",id:"validatebody",level:4},{value:"ValidateHeader &amp; ValidateHeaders",id:"validateheader--validateheaders",level:4},{value:"ValidateCookie &amp; ValidateCookies",id:"validatecookie--validatecookies",level:4},{value:"ValidatePathParam &amp; ValidateParams",id:"validatepathparam--validateparams",level:4},{value:"ValidateQueryParam &amp; ValidateQuery",id:"validatequeryparam--validatequery",level:4},{value:"Sanitization Example",id:"sanitization-example",level:3},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",level:3},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Validation"})," checks if an input meets a set of criteria (such as the value of a property is a string)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Sanitization"})," modifies the input to ensure that it is valid (such as coercing a type)."]}),"\n",(0,a.jsx)(n.p,{children:"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."}),"\n",(0,a.jsx)(n.h2,{id:"with-a-json-schema-ajv",children:"With a JSON Schema (AJV)"}),"\n",(0,a.jsx)(n.h3,{id:"ajv-the-json-schema-validator",children:"Ajv, the JSON Schema Validator"}),"\n",(0,a.jsxs)(n.p,{children:["FoalTS default validation and sanitization system is based on ",(0,a.jsx)(n.a,{href:"https://github.com/epoberezkin/ajv",children:"Ajv"}),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",(0,a.jsx)(n.a,{href:"http://epoberezkin.github.io/ajv/",children:"website"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.p,{children:"Here is the list of AJV options that can be overridden with FoalTS configuration system."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ajv option"}),(0,a.jsx)(n.th,{children:"Configuration key"}),(0,a.jsx)(n.th,{children:"FoalTS default"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"coerceTypes"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.coerceType"})}),(0,a.jsx)(n.td,{children:"true"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"removeAdditional"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.removeAdditional"})}),(0,a.jsx)(n.td,{children:"true"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"useDefaults"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.useDefaults"})}),(0,a.jsx)(n.td,{children:"true"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nullable"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.nullable"})}),(0,a.jsx)(n.td,{children:"/"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"allErrors"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"settings.ajv.allErrors"})}),(0,a.jsx)(n.td,{children:"/"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example: config/default.json"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"the-validate-util",children:["The ",(0,a.jsx)(n.code,{children:"validate"})," util"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"validate"})," util throws a ",(0,a.jsx)(n.code,{children:"ValidationError"})," if the given data does not fit the shema."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { validate } from '@foal/core';\n\nconst schema = {\n  properties: {\n    a: { type: 'number' }\n  },\n  type: 'object'\n};\nconst data = {\n  a: 'foo'\n};\n\nvalidate(schema, data);\n// => Throws an error (ValidationError)\n// => error.content contains the details of the validation error.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"validation--sanitization-of-http-requests",children:"Validation & Sanitization of HTTP Requests"}),"\n",(0,a.jsxs)(n.p,{children:["FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",(0,a.jsx)(n.code,{children:"HttpResponseBadRequest"})," object whose body contains the validation errors."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"validatebody",children:"ValidateBody"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request body (",(0,a.jsx)(n.code,{children:"Context.request.body"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /products\n\n{\n  "price": "hello world"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "body": [\n    {\n      "dataPath": ".price",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validateheader--validateheaders",children:"ValidateHeader & ValidateHeaders"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request headers (",(0,a.jsx)(n.code,{children:"Context.request.headers"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products\nAuthorization: xxx\nA-Number: hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (third example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateHeaders } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateHeader instead.\n  @ValidateHeaders({\n    properties: {\n      // All properties should be in lower case.\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "headers": [\n    {\n      "dataPath:" "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatecookie--validatecookies",children:"ValidateCookie & ValidateCookies"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request cookies (",(0,a.jsx)(n.code,{children:"Context.request.cookies"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products\nCookies: Authorization=xxx; A-Number=hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (third example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateCookies } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @Hook(ctx => console.log(ctx.request.cookies))\n  // Deprecated since v1.12. Use @ValidateCookie instead.\n  @ValidateCookies({\n    properties: {\n      'A-Number': { type: 'integer' },\n      'Authorization': { type: 'string' },\n    },\n    required: [ 'Authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatepathparam--validateparams",children:"ValidatePathParam & ValidateParams"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request path parameter (",(0,a.jsx)(n.code,{children:"Context.request.params"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products/xxx\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (third example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateParams } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  // Deprecated since v1.12. Use @ValidatePathParam instead.\n  @ValidateParams({\n    properties: {\n      productId: { type: 'integer' }\n    },\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "pathParams": [\n    {\n      "dataPath": ".productId",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"validatequeryparam--validatequery",children:"ValidateQueryParam & ValidateQuery"}),"\n",(0,a.jsxs)(n.p,{children:["It validates the request query (",(0,a.jsx)(n.code,{children:"Context.request.query"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /products?authorization=xxx&a-number=hello\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Controller (third example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Post, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateQueryParam instead.\n  @ValidateQuery({\n    properties: {\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (400 - BAD REQUEST)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "query": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sanitization-example",children:"Sanitization Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, Get, HttpResponseOK, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n\n  @Get('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n  @Get('/sanitization')\n  @ValidateQuery({\n    additionalProperties: false,\n    properties: {\n      apiKey: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'apiKey' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Request"}),(0,a.jsx)(n.th,{children:"Response"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["GET ",(0,a.jsx)(n.code,{children:"/no-sanitization?name=Alex&apiKey=34&city=Paris"})]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ name: 'Alex', apiKey: '34', city: 'Paris' }"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["GET ",(0,a.jsx)(n.code,{children:"/sanitization?name=Alex&apiKey=34&city=Paris"})]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ name: 'Alex', apiKey: 34 }"})})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"with-a-validation-class-class-validator",children:"With a Validation Class (class-validator)"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-validator",children:"class-validator"})," library can also be used in Foal to validate an object against a validation class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install class-validator\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage-with-a-hook",children:"Usage with a Hook"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install class-transformer class-validator @foal/typestack\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use it within a hook to validate request bodies, you can install the package ",(0,a.jsx)(n.code,{children:"@foal/typestack"})," for this. It provides a ",(0,a.jsx)(n.code,{children:"@ValidateBody"})," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.validator.ts"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.controller.ts (first example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"social-post.controller.ts (second example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP request (example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /\n\n{\n  "text": "foo"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"HTTP response (example)"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "children": [],\n    "constraints": { "length": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The hook takes also an optional parameter to specify the options of the ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-transformer",children:"class-transformer"})," and ",(0,a.jsx)(n.a,{href:"https://github.com/typestack/class-validator",children:"class-validator"})," libraries."]}),"\n",(0,a.jsx)(n.h3,{id:"usage-with-typeorm-entities",children:"Usage with TypeORM entities"}),"\n",(0,a.jsx)(n.p,{children:"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);