(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=["components"],i={title:"Validation & Sanitization"},s=void 0,p={unversionedId:"validation-and-sanitization",id:"version-1.x/validation-and-sanitization",isDocsHomePage:!1,title:"Validation & Sanitization",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/versioned_docs/version-1.x/validation-and-sanitization.md",sourceDirName:".",slug:"/validation-and-sanitization",permalink:"/id/docs/1.x/validation-and-sanitization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/validation-and-sanitization.md",version:"1.x",frontMatter:{title:"Validation & Sanitization"},sidebar:"someSidebar",previous:{title:"Groups & Permissions",permalink:"/id/docs/1.x/authentication-and-access-control/groups-and-permissions"},next:{title:"Serializing & Deserializing",permalink:"/id/docs/1.x/serializing-and-deserializing"}},d=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",children:[{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",children:[]},{value:"Options",id:"options",children:[]},{value:"The <code>validate</code> util",id:"the-validate-util",children:[]},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",children:[]},{value:"Sanitization Example",id:"sanitization-example",children:[]}]},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",children:[{value:"Usage with a Hook",id:"usage-with-a-hook",children:[]},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",children:[]}]}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Validation")," checks if an input meets a set of criteria (such as the value of a property is a string)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sanitization")," modifies the input to ensure that it is valid (such as coercing a type)."),(0,o.kt)("p",null,"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."),(0,o.kt)("h2",{id:"with-a-json-schema-ajv"},"With a JSON Schema (AJV)"),(0,o.kt)("h3",{id:"ajv-the-json-schema-validator"},"Ajv, the JSON Schema Validator"),(0,o.kt)("p",null,"FoalTS default validation and sanitization system is based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epoberezkin/ajv"},"Ajv"),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",(0,o.kt)("a",{parentName:"p",href:"http://epoberezkin.github.io/ajv/"},"website"),". "),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("p",null,"Here is the list of AJV options that can be overridden with FoalTS configuration system."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Ajv option"),(0,o.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,o.kt)("th",{parentName:"tr",align:null},"FoalTS default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coerceTypes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings.ajv.coerceType")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"removeAdditional"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings.ajv.removeAdditional")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useDefaults"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings.ajv.useDefaults")),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nullable"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings.ajv.nullable")),(0,o.kt)("td",{parentName:"tr",align:null},"/")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"allErrors"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings.ajv.allErrors")),(0,o.kt)("td",{parentName:"tr",align:null},"/")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example: config/default.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"the-validate-util"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"validate")," util"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," util throws a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationError")," if the given data does not fit the shema."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { validate } from '@foal/core';\n\nconst schema = {\n  properties: {\n    a: { type: 'number' }\n  },\n  type: 'object'\n};\nconst data = {\n  a: 'foo'\n};\n\nvalidate(schema, data);\n// => Throws an error (ValidationError)\n// => error.content contains the details of the validation error.\n")),(0,o.kt)("h3",{id:"validation--sanitization-of-http-requests"},"Validation & Sanitization of HTTP Requests"),(0,o.kt)("p",null,"FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpResponseBadRequest")," object whose body contains the validation errors."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,o.kt)("h4",{id:"validatebody"},"ValidateBody"),(0,o.kt)("p",null,"It validates the request body (",(0,o.kt)("inlineCode",{parentName:"p"},"Context.request.body"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /products\n\n{\n  "price": "hello world"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": [\n    {\n      "dataPath": ".price",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"validateheader--validateheaders"},"ValidateHeader & ValidateHeaders"),(0,o.kt)("p",null,"It validates the request headers (",(0,o.kt)("inlineCode",{parentName:"p"},"Context.request.headers"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /products\nAuthorization: xxx\nA-Number: hello\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (third example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeaders } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateHeader instead.\n  @ValidateHeaders({\n    properties: {\n      // All properties should be in lower case.\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": [\n    {\n      "dataPath:" "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"validatecookie--validatecookies"},"ValidateCookie & ValidateCookies"),(0,o.kt)("p",null,"It validates the request cookies (",(0,o.kt)("inlineCode",{parentName:"p"},"Context.request.cookies"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /products\nCookies: Authorization=xxx; A-Number=hello\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (third example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookies } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @Hook(ctx => console.log(ctx.request.cookies))\n  // Deprecated since v1.12. Use @ValidateCookie instead.\n  @ValidateCookies({\n    properties: {\n      'A-Number': { type: 'integer' },\n      'Authorization': { type: 'string' },\n    },\n    required: [ 'Authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cookies": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"validatepathparam--validateparams"},"ValidatePathParam & ValidateParams"),(0,o.kt)("p",null,"It validates the request path parameter (",(0,o.kt)("inlineCode",{parentName:"p"},"Context.request.params"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /products/xxx\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (third example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateParams } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  // Deprecated since v1.12. Use @ValidatePathParam instead.\n  @ValidateParams({\n    properties: {\n      productId: { type: 'integer' }\n    },\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pathParams": [\n    {\n      "dataPath": ".productId",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"validatequeryparam--validatequery"},"ValidateQueryParam & ValidateQuery"),(0,o.kt)("p",null,"It validates the request query (",(0,o.kt)("inlineCode",{parentName:"p"},"Context.request.query"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /products?authorization=xxx&a-number=hello\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Controller (third example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  // Deprecated since v1.12. Use @ValidateQueryParam instead.\n  @ValidateQuery({\n    properties: {\n      'a-number': { type: 'integer' },\n      'authorization': { type: 'string' },\n    },\n    required: [ 'authorization' ],\n    type: 'object'\n  })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"sanitization-example"},"Sanitization Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, HttpResponseOK, ValidateQuery } from '@foal/core';\n\nexport class AppController {\n\n  @Get('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n  @Get('/sanitization')\n  @ValidateQuery({\n    additionalProperties: false,\n    properties: {\n      apiKey: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'apiKey' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.query);\n  }\n\n}\n\n")),(0,o.kt)("p",null,"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Request"),(0,o.kt)("th",{parentName:"tr",align:null},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GET ",(0,o.kt)("inlineCode",{parentName:"td"},"/no-sanitization?name=Alex&apiKey=34&city=Paris")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', apiKey: '34', city: 'Paris' }"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GET ",(0,o.kt)("inlineCode",{parentName:"td"},"/sanitization?name=Alex&apiKey=34&city=Paris")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', apiKey: 34 }"))))),(0,o.kt)("h2",{id:"with-a-validation-class-class-validator"},"With a Validation Class (class-validator)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," library can also be used in Foal to validate an object against a validation class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install class-validator\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n')),(0,o.kt)("h3",{id:"usage-with-a-hook"},"Usage with a Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install class-transformer class-validator @foal/typestack\n")),(0,o.kt)("p",null,"If you want to use it within a hook to validate request bodies, you can install the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"@ValidateBody")," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"social-post.validator.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"social-post.controller.ts (first example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"social-post.controller.ts (second example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP request (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /\n\n{\n  "text": "foo"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"HTTP response (example)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "children": [],\n    "constraints": { "length": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n')),(0,o.kt)("p",null,"The hook takes also an optional parameter to specify the options of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," libraries."),(0,o.kt)("h3",{id:"usage-with-typeorm-entities"},"Usage with TypeORM entities"),(0,o.kt)("p",null,"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n")))}m.isMDXComponent=!0}}]);