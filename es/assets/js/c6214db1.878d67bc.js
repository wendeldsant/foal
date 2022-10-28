"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),p=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:c,values:k,groupId:h,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,s.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(t=null!=c?c:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:x}=(0,i.U)(),[P,C]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==P&&v.some((t=>t.value===e))&&C(e)}const V=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==P&&(j(t),C(n),null!=h&&x(h,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>T.push(e),onKeyDown:w,onFocus:V,onClick:V},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},95377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={title:"Validaci\xf3n & Sanitizaci\xf3n"},i=void 0,p={unversionedId:"common/validation-and-sanitization",id:"version-2.x/common/validation-and-sanitization",title:"Validaci\xf3n & Sanitizaci\xf3n",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/common/validation-and-sanitization.md",sourceDirName:"common",slug:"/common/validation-and-sanitization",permalink:"/es/docs/2.x/common/validation-and-sanitization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/common/validation-and-sanitization.md",tags:[],version:"2.x",frontMatter:{title:"Validaci\xf3n & Sanitizaci\xf3n"},sidebar:"someSidebar",previous:{title:"Configuraci\xf3n",permalink:"/es/docs/2.x/architecture/configuration"},next:{title:"Serializaci\xf3n y Deserializaci\xf3n",permalink:"/es/docs/2.x/common/serializing-and-deserializing"}},d={},u=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",level:2},{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",level:3},{value:"Options",id:"options",level:3},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",level:3},{value:"ValidateBody",id:"validatebody",level:4},{value:"ValidateHeader",id:"validateheader",level:4},{value:"ValidateCookie",id:"validatecookie",level:4},{value:"ValidatePathParam",id:"validatepathparam",level:4},{value:"ValidateQueryParam",id:"validatequeryparam",level:4},{value:"Sanitization Example",id:"sanitization-example",level:3},{value:"Custom Error Messages",id:"custom-error-messages",level:3},{value:"Referencing Schemas",id:"referencing-schemas",level:3},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",level:3},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Validation")," checks if an input meets a set of criteria (such as the value of a property is a string)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sanitization")," modifies the input to ensure that it is valid (such as coercing a type)."),(0,r.kt)("p",null,"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."),(0,r.kt)("h2",{id:"with-a-json-schema-ajv"},"With a JSON Schema (AJV)"),(0,r.kt)("h3",{id:"ajv-the-json-schema-validator"},"Ajv, the JSON Schema Validator"),(0,r.kt)("p",null,"FoalTS default validation and sanitization system is based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv/tree/v6"},"AJV version 6"),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",(0,r.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"website"),". "),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Here is the list of AJV options that can be overridden with FoalTS configuration system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Ajv option"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,r.kt)("th",{parentName:"tr",align:null},"FoalTS default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.$data")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allErrors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.allErrors")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coerceTypes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.coerceType")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nullable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.nullable")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeAdditional"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.removeAdditional")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useDefaults"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"settings.ajv.useDefaults")),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  ajv:\n    coerceTypes: true\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    ajv: {\n      coerceTypes: true\n    }\n  }\n}\n")))),(0,r.kt)("h3",{id:"validation--sanitization-of-http-requests"},"Validation & Sanitization of HTTP Requests"),(0,r.kt)("p",null,"FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponseBadRequest")," object whose body contains the validation errors."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,r.kt)("h4",{id:"validatebody"},"ValidateBody"),(0,r.kt)("p",null,"It validates the request body (",(0,r.kt)("inlineCode",{parentName:"p"},"Context.request.body"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST /products\n\n{\n  "price": "hello world"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": [\n    {\n      "dataPath": ".price",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"validateheader"},"ValidateHeader"),(0,r.kt)("p",null,"It validates the request headers (",(0,r.kt)("inlineCode",{parentName:"p"},"Context.request.headers"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /products\nAuthorization: xxx\nA-Number: hello\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": [\n    {\n      "dataPath:" "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"validatecookie"},"ValidateCookie"),(0,r.kt)("p",null,"It validates the request cookies (",(0,r.kt)("inlineCode",{parentName:"p"},"Context.request.cookies"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /products\nCookies: Authorization=xxx; A-Number=hello\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cookies": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"validatepathparam"},"ValidatePathParam"),(0,r.kt)("p",null,"It validates the request path parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"Context.request.params"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /products/xxx\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pathParams": [\n    {\n      "dataPath": ".productId",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"validatequeryparam"},"ValidateQueryParam"),(0,r.kt)("p",null,"It validates the request query (",(0,r.kt)("inlineCode",{parentName:"p"},"Context.request.query"),")."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /products?authorization=xxx&a-number=hello\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Controller (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"sanitization-example"},"Sanitization Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n\n  @Post('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n  @Post('/sanitization')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      age: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'age' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n\n")),(0,r.kt)("p",null,"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST ",(0,r.kt)("inlineCode",{parentName:"td"},"/no-sanitization")," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST ",(0,r.kt)("inlineCode",{parentName:"td"},"/sanitization")," ",(0,r.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: 34 }"))))),(0,r.kt)("h3",{id:"custom-error-messages"},"Custom Error Messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install ajv-errors@1\n")),(0,r.kt)("p",null,"You can customize the errors returned by the validation hooks by using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv-errors/tree/v1"},"ajv-errors")," plugin (version 1)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Configuration")),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  ajv:\n    allErrors: true\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "allErrors": true\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    ajv: {\n      allErrors: true\n    }\n  }\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\nimport * as ajvErrors from 'ajv-errors';\n\nexport class AppController {\n\n  init() {\n    ajvErrors(getAjvInstance());\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    errorMessage: 'The submitted product is incorrect.',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n")),(0,r.kt)("h3",{id:"referencing-schemas"},"Referencing Schemas"),(0,r.kt)("p",null,"The example below shows how a schema can be defined and reused in several hooks."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nconst productSchema = {\n  additionalProperties: false,\n  properties: {\n    name: { type: 'string' }\n  },\n  required: [ 'name' ],\n  type: 'object',\n};\n\nexport class ProductController {\n\n  boot() {\n    getAjvInstance()\n      .addSchema(productSchema, 'Product');\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: 'Product'\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n")),(0,r.kt)("h2",{id:"with-a-validation-class-class-validator"},"With a Validation Class (class-validator)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," library can also be used in Foal to validate an object against a validation class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install class-validator\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n')),(0,r.kt)("h3",{id:"usage-with-a-hook"},"Usage with a Hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install class-transformer class-validator @foal/typestack\n")),(0,r.kt)("p",null,"If you want to use it within a hook to validate request bodies, you can install the package ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateBody")," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"social-post.validator.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"social-post.controller.ts (first example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"social-post.controller.ts (second example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP request (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST /\n\n{\n  "text": "foo"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP response (example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "children": [],\n    "constraints": { "length": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n')),(0,r.kt)("p",null,"The hook takes also an optional parameter to specify the options of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," libraries."),(0,r.kt)("h3",{id:"usage-with-typeorm-entities"},"Usage with TypeORM entities"),(0,r.kt)("p",null,"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n")))}c.isMDXComponent=!0}}]);