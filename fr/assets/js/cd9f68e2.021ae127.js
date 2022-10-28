"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:g,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&b.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==T&&(S(t),C(a),null!=g&&N(g,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},78794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},s=void 0,p={permalink:"/fr/blog/2021/03/02/whats-new-in-version-2-part-2",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-02-whats-new-in-version-2-part-2.md",source:"@site/blog/2021-03-02-whats-new-in-version-2-part-2.md",title:"What's new in version 2 (part 2/4)",description:"Banner",date:"2021-03-02T00:00:00.000Z",formattedDate:"2 mars 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:5.055,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},prevItem:{title:"What's new in version 2 (part 3/4)",permalink:"/fr/blog/2021/03/11/whats-new-in-version-2-part-3"},nextItem:{title:"Version 2.2 release notes",permalink:"/fr/blog/2021/02/25/version-2.2-release-notes"}},u={authorsImageUrls:[void 0]},c=[{value:"New Config System",id:"new-config-system",level:2},{value:"Type safety",id:"type-safety",level:3},{value:"Multiple <code>.env</code> files support",id:"multiple-env-files-support",level:3},{value:"Three config formats (JS, JSON, YAML)",id:"three-config-formats-js-json-yaml",level:3},{value:"More Liberty in Naming Environment Variables",id:"more-liberty-in-naming-environment-variables",level:3},{value:"OpenAPI Schemas &amp; Validation",id:"openapi-schemas--validation",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(18883).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuration and type safety"),(0,r.kt)("li",{parentName:"ul"},"Configuration and ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," files (",(0,r.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".env.test"),", etc)"),(0,r.kt)("li",{parentName:"ul"},"Available configuration file formats (JSON, YAML and JS)"),(0,r.kt)("li",{parentName:"ul"},"OpenAPI schemas and validation")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article is the part 2 of the series of articles ",(0,r.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 1 can be found ",(0,r.kt)("a",{parentName:"p",href:"/fr/blog/2021/02/17/whats-new-in-version-2-part-1"},"here"),".")),(0,r.kt)("h2",{id:"new-config-system"},"New Config System"),(0,r.kt)("h3",{id:"type-safety"},"Type safety"),(0,r.kt)("p",null,"Starting from version 2, a great attention is paid to type safety in the configuration. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.get")," method allows you specify which type you expect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const timeout = Config.get('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number|undefined.\n")),(0,r.kt)("p",null,"In this example, when calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method, the framework will look at the configuration files to retrieve the desired value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the value is not defined, the function returns ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,r.kt)("li",{parentName:"ul"},"If the value is a number, the function returns it."),(0,r.kt)("li",{parentName:"ul"},"If the value is a string that can be converted to a number (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},'"1"'),"), the function converts and returns it."),(0,r.kt)("li",{parentName:"ul"},"If the value is not a number and cannot be converted, then the function throws a ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigTypeError")," with the details. Note that the config value is not logged to avoid leaking sensitive information.")),(0,r.kt)("p",null,"If you wish to make the config parameter mandatory, you can do it by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOrThrow")," method. If no value is found, then a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigNotFound")," error is thrown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const timeout = Config.getOrThrow('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number.\n")),(0,r.kt)("p",null,"Supported types are ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean|string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number|string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,r.kt)("h3",{id:"multiple-env-files-support"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," files support"),(0,r.kt)("p",null,"Version 2 allows you to use different ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files depending on your environment."),(0,r.kt)("p",null,"If you configuration is as follows and ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," equals ",(0,r.kt)("inlineCode",{parentName:"p"},"production"),", then the framework will look at ",(0,r.kt)("inlineCode",{parentName:"p"},".env.production")," to retrieve the value and if it does not exist (the file or the value), Foal will look at ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),(0,r.kt)("h3",{id:"three-config-formats-js-json-yaml"},"Three config formats (JS, JSON, YAML)"),(0,r.kt)("p",null,"JSON and YAML were already supported in version 1. Starting from version 2, JS is also allowed."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n'))),(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"more-liberty-in-naming-environment-variables"},"More Liberty in Naming Environment Variables"),(0,r.kt)("p",null,"In version 1, the names of the environment variables were depending on the names of the configuration keys. For example, when using ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.get('settings.mongodbUri')"),", Foal was looking at ",(0,r.kt)("inlineCode",{parentName:"p"},"SETTINGS_MONGODB_URI"),"."),(0,r.kt)("p",null,"Starting from version 2, it is your responsability to choose the environement variable that you want to use (if you use one). This gives more flexibility especially when a Cloud provider defines its own variable names."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  mongodbUri: env(MONGODB_URI)\n"))),(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "mongodbUri": "env(MONGODB_URI)"\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    mongodbUri: Env.get('MONGODB_URI')\n  }\n}\n")))),(0,r.kt)("h2",{id:"openapi-schemas--validation"},"OpenAPI Schemas & Validation"),(0,r.kt)("p",null,"Starting from version 1, Foal has allowed you to generate a complete ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger")," interface by reading your code. If your application has validation and auth hooks for example, Foal will use them to generate the proper interface."),(0,r.kt)("p",null,"This is a handy if you want to quickly test and document your API. Then you can customize it in your own way if you wish and complete and override the OpenAPI spec generated by the framework."),(0,r.kt)("p",null,"In version 2, support of Swagger has been increased to allow you to define OpenAPI schemas and re-use them for validation."),(0,r.kt)("p",null,"Here is an example."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"product.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiDefineSchema, ApiResponse, Context, Get, HttpResponseNotFound, HttpResponseOK, Post, ValidateBody, ValidatePathParam } from '@foal/core';\nimport { Product } from '../../entities';\n\n// First we define the OpenAPI schema \"Product\".\n@ApiDefineSchema('Product', {\n  type: 'object',\n  properties: {\n    id: { type: 'number' },\n    name: { type: 'string' }\n  },\n  additionalProperties: false,\n  required: ['id', 'name'],\n})\nexport class ProductController {\n\n  @Post('/')\n  // We use the schema \"Product\" here to validate the request body.\n  @ValidateBody({ $ref: '#/components/schemas/Product' })\n  async createProduct(ctx: Context) {\n    const result = await Product.insert(ctx.request.body);\n    return new HttpResponseOK(result.identifiers[0]);\n  }\n\n  @Get('/:productId')\n  // We use the schema \"Product\" here to validate the URL parameter.\n  @ValidatePathParam('productId', { $ref: '#/components/schemas/Product/properties/id' })\n  // We give some extra information on the format of the response.\n  @ApiResponse(200, {\n    description: 'Product found in the database',\n    content: {\n      'application/json': { schema: { $ref: '#/components/schemas/Product' } }\n    }\n  })\n  async readProduct(ctx: Context, { productId }) {\n    const product = await Product.findOne({ id: productId });\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, Context, controller, Get, HttpResponseOK } from '@foal/core';\nimport { ProductController } from './api';\n\n// We provide the \"info\" metadata to describe the API.\n@ApiInfo({\n  title: 'My API',\n  version: '0.1.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n  \n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"openapi.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\n// This controller generates the Swagger interface.\nexport class OpenapiController extends SwaggerController {\n\n  options = {\n    controllerClass: ApiController,\n  }\n\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swagger 1",src:n(75715).Z,width:"2560",height:"1396"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swagger 2",src:n(53995).Z,width:"2560",height:"1374"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swagger 3",src:n(402).Z,width:"2560",height:"1394"})))}d.isMDXComponent=!0},18883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-b1bb8a7ff5057bbac324ac1a22b55703.png"},75715:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/swagger-6ab4ff6257c5e238ae690231405c7d1e.png"},53995:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/swagger2-f3ff9ccbaae2615eaf0b49d0c9bd4db9.png"},402:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/swagger3-824905ff483b6e38bd753b750f0884dc.png"}}]);