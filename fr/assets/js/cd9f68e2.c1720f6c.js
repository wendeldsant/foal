(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2210],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,p=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,r.useState)(u),y=v[0],k=v[1],b=r.Children.toArray(e.children),N=[];if(null!=m){var w=g[m];null!=w&&w!==y&&c.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=c[n].value;k(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,a,o,i,s,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},6232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(1395),l=n(8215),s=["components"],p={title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},u=void 0,c={permalink:"/fr/blog/2021/03/02/whats-new-in-version-2-part-2",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-02-whats-new-in-version-2-part-2.md",source:"@site/blog/2021-03-02-whats-new-in-version-2-part-2.md",title:"What's new in version 2 (part 2/4)",description:"Banner",date:"2021-03-02T00:00:00.000Z",formattedDate:"March 2, 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:5.055,truncated:!0,prevItem:{title:"What's new in version 2 (part 3/4)",permalink:"/fr/blog/2021/03/11/whats-new-in-version-2-part-3"},nextItem:{title:"Version 2.2 release notes",permalink:"/fr/blog/2021/02/25/version-2.2-release-notes"}},m=[{value:"New Config System",id:"new-config-system",children:[{value:"Type safety",id:"type-safety",children:[]},{value:"Multiple <code>.env</code> files support",id:"multiple-env-files-support",children:[]},{value:"Three config formats (JS, JSON, YAML)",id:"three-config-formats-js-json-yaml",children:[]},{value:"More Liberty in Naming Environment Variables",id:"more-liberty-in-naming-environment-variables",children:[]}]},{value:"OpenAPI Schemas &amp; Validation",id:"openapi-schemas--validation",children:[]}],d={toc:m};function f(e){var t=e.components,p=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:n(7823).Z})),(0,o.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration and type safety"),(0,o.kt)("li",{parentName:"ul"},"Configuration and ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," files (",(0,o.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".env.test"),", etc)"),(0,o.kt)("li",{parentName:"ul"},"Available configuration file formats (JSON, YAML and JS)"),(0,o.kt)("li",{parentName:"ul"},"OpenAPI schemas and validation")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article is the part 2 of the series of articles ",(0,o.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 1 can be found ",(0,o.kt)("a",{parentName:"p",href:"/fr/blog/2021/02/17/whats-new-in-version-2-part-1"},"here"),".")),(0,o.kt)("h2",{id:"new-config-system"},"New Config System"),(0,o.kt)("h3",{id:"type-safety"},"Type safety"),(0,o.kt)("p",null,"Starting from version 2, a great attention is paid to type safety in the configuration. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.get")," method allows you specify which type you expect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const timeout = Config.get('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number|undefined.\n")),(0,o.kt)("p",null,"In this example, when calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," method, the framework will look at the configuration files to retrieve the desired value."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the value is not defined, the function returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,o.kt)("li",{parentName:"ul"},"If the value is a number, the function returns it."),(0,o.kt)("li",{parentName:"ul"},"If the value is a string that can be converted to a number (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},'"1"'),"), the function converts and returns it."),(0,o.kt)("li",{parentName:"ul"},"If the value is not a number and cannot be converted, then the function throws a ",(0,o.kt)("inlineCode",{parentName:"li"},"ConfigTypeError")," with the details. Note that the config value is not logged to avoid leaking sensitive information.")),(0,o.kt)("p",null,"If you wish to make the config parameter mandatory, you can do it by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrThrow")," method. If no value is found, then a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigNotFound")," error is thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const timeout = Config.getOrThrow('custom.timeout', 'number');\n// The TypeScript type returned by `get` is number.\n")),(0,o.kt)("p",null,"Supported types are ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean|string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number|string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,o.kt)("h3",{id:"multiple-env-files-support"},"Multiple ",(0,o.kt)("inlineCode",{parentName:"h3"},".env")," files support"),(0,o.kt)("p",null,"Version 2 allows you to use different ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files depending on your environment."),(0,o.kt)("p",null,"If you configuration is as follows and ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"production"),", then the framework will look at ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production")," to retrieve the value and if it does not exist (the file or the value), Foal will look at ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),(0,o.kt)("h3",{id:"three-config-formats-js-json-yaml"},"Three config formats (JS, JSON, YAML)"),(0,o.kt)("p",null,"JSON and YAML were already supported in version 1. Starting from version 2, JS is also allowed."),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n'))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n')))),(0,o.kt)("h3",{id:"more-liberty-in-naming-environment-variables"},"More Liberty in Naming Environment Variables"),(0,o.kt)("p",null,"In version 1, the names of the environment variables were depending on the names of the configuration keys. For example, when using ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.get('settings.mongodbUri')"),", Foal was looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS_MONGODB_URI"),"."),(0,o.kt)("p",null,"Starting from version 2, it is your responsability to choose the environement variable that you want to use (if you use one). This gives more flexibility especially when a Cloud provider defines its own variable names."),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  mongodbUri: env(MONGODB_URI)\n"))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "mongodbUri": "env(MONGODB_URI)"\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    mongodbUri: Env.get('MONGODB_URI')\n  }\n}\n")))),(0,o.kt)("h2",{id:"openapi-schemas--validation"},"OpenAPI Schemas & Validation"),(0,o.kt)("p",null,"Starting from version 1, Foal has allowed you to generate a complete ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger")," interface by reading your code. If your application has validation and auth hooks for example, Foal will use them to generate the proper interface."),(0,o.kt)("p",null,"This is a handy if you want to quickly test and document your API. Then you can customize it in your own way if you wish and complete and override the OpenAPI spec generated by the framework."),(0,o.kt)("p",null,"In version 2, support of Swagger has been increased to allow you to define OpenAPI schemas and re-use them for validation."),(0,o.kt)("p",null,"Here is an example."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"product.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiDefineSchema, ApiResponse, Context, Get, HttpResponseNotFound, HttpResponseOK, Post, ValidateBody, ValidatePathParam } from '@foal/core';\nimport { Product } from '../../entities';\n\n// First we define the OpenAPI schema \"Product\".\n@ApiDefineSchema('Product', {\n  type: 'object',\n  properties: {\n    id: { type: 'number' },\n    name: { type: 'string' }\n  },\n  additionalProperties: false,\n  required: ['id', 'name'],\n})\nexport class ProductController {\n\n  @Post('/')\n  // We use the schema \"Product\" here to validate the request body.\n  @ValidateBody({ $ref: '#/components/schemas/Product' })\n  async createProduct(ctx: Context) {\n    const result = await Product.insert(ctx.request.body);\n    return new HttpResponseOK(result.identifiers[0]);\n  }\n\n  @Get('/:productId')\n  // We use the schema \"Product\" here to validate the URL parameter.\n  @ValidatePathParam('productId', { $ref: '#/components/schemas/Product/properties/id' })\n  // We give some extra information on the format of the response.\n  @ApiResponse(200, {\n    description: 'Product found in the database',\n    content: {\n      'application/json': { schema: { $ref: '#/components/schemas/Product' } }\n    }\n  })\n  async readProduct(ctx: Context, { productId }) {\n    const product = await Product.findOne({ id: productId });\n\n    if (!product) {\n      return new HttpResponseNotFound();\n    }\n\n    return new HttpResponseOK(product);\n  }\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, Context, controller, Get, HttpResponseOK } from '@foal/core';\nimport { ProductController } from './api';\n\n// We provide the \"info\" metadata to describe the API.\n@ApiInfo({\n  title: 'My API',\n  version: '0.1.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n  subControllers = [\n    controller('/products', ProductController)\n  ];\n  \n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"openapi.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\n// This controller generates the Swagger interface.\nexport class OpenapiController extends SwaggerController {\n\n  options = {\n    controllerClass: ApiController,\n  }\n\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"app.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController),\n  ];\n\n  async init() {\n    await createConnection();\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger 1",src:n(1908).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger 2",src:n(4301).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger 3",src:n(6998).Z})))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},7823:function(e,t,n){"use strict";t.Z=n.p+"assets/images/banner-b1bb8a7ff5057bbac324ac1a22b55703.png"},1908:function(e,t,n){"use strict";t.Z=n.p+"assets/images/swagger-6ab4ff6257c5e238ae690231405c7d1e.png"},4301:function(e,t,n){"use strict";t.Z=n.p+"assets/images/swagger2-f3ff9ccbaae2615eaf0b49d0c9bd4db9.png"},6998:function(e,t,n){"use strict";t.Z=n.p+"assets/images/swagger3-824905ff483b6e38bd753b750f0884dc.png"}}]);