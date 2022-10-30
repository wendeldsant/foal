"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),c=n(67392),i=n(7094),l=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:g,groupId:v,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,c.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[S,C]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=v){const e=N[v];null!=e&&e!==S&&f.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==S&&(x(t),C(r),null!=v&&w(v,String(r)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:j,onClick:j},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},50345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),s=n(85162);const c={title:"Servicios e Inyecci\xf3n de Dependencias"},i=void 0,l={unversionedId:"architecture/services-and-dependency-injection",id:"architecture/services-and-dependency-injection",title:"Servicios e Inyecci\xf3n de Dependencias",description:"Description",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/services-and-dependency-injection.md",sourceDirName:"architecture",slug:"/architecture/services-and-dependency-injection",permalink:"/es/docs/architecture/services-and-dependency-injection",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/services-and-dependency-injection.md",tags:[],version:"current",frontMatter:{title:"Servicios e Inyecci\xf3n de Dependencias"},sidebar:"someSidebar",previous:{title:"Controladores",permalink:"/es/docs/architecture/controllers"},next:{title:"Hooks",permalink:"/es/docs/architecture/hooks"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Use &amp; Dependency Injection",id:"use--dependency-injection",level:2},{value:"Testing services",id:"testing-services",level:2},{value:"Services (or Controllers) with Dependencies",id:"services-or-controllers-with-dependencies",level:3},{value:"Injecting other Instances",id:"injecting-other-instances",level:2},{value:"Abstract Services",id:"abstract-services",level:2},{value:"Default Concrete Services",id:"default-concrete-services",level:3},{value:"Usage with Interfaces and Generic Classes",id:"usage-with-interfaces-and-generic-classes",level:2},{value:"Accessing the <code>ServiceManager</code>",id:"accessing-the-servicemanager",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate service my-service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MyService {\n\n}\n")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Services are useful to organize your code in domains. They can be used in a wide variety of situations: logging, interaction with a database, calculations, communication with an external API, etc."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Basically, a service can be any class with a narrow and well defined purpose. They are instantiated as singletons."),(0,a.kt)("h2",{id:"use--dependency-injection"},"Use & Dependency Injection"),(0,a.kt)("p",null,"You can access a service from a controller using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@dependency")," decorator."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass AppController {\n  @dependency\n  logger: Logger\n\n  @Get('/')\n  index() {\n    this.logger.log('index has been called!');\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When instantiating the controller, FoalTS will provide the service instance. This mechanism is called ",(0,a.kt)("em",{parentName:"p"},"dependency injection")," and is particularly interesting in unit testing (see section below).")),(0,a.kt)("p",null,"In the same way, you can access a service from another service."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\n\nclass MyService {\n  run() {\n    console.log('hello world');\n  }\n}\n\nclass MyServiceA {\n  @dependency\n  myService: MyService;\n\n  foo() {\n    this.myService.run();\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Dependencies are injected after the instantiation of the controller/service. So they will appear as ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if you try to read them inside a constructor. If you want to access the dependencies when initializing a controller/service, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/architecture/initialization"},(0,a.kt)("inlineCode",{parentName:"a"},"boot")," method"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Circular dependencies are not supported. In most cases, when two services are dependent on each other, the creation of a third service containing the functionalities required by both services solves the dependency problem.")),(0,a.kt)("h2",{id:"testing-services"},"Testing services"),(0,a.kt)("p",null,"Services are classes and so can be tested as is."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// calculator.service.ts\nexport class CalculatorService {\n  sum(a: number, b: number): number {\n    return a + b;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// calculator.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { CalculatorService } from './calculator.service';\n\nit('CalculatorService', () => {\n  const service = new CalculatorService();\n  strictEqual(service.sum(1, 2), 3);\n});\n")),(0,a.kt)("h3",{id:"services-or-controllers-with-dependencies"},"Services (or Controllers) with Dependencies"),(0,a.kt)("p",null,"If your service has dependencies, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"createService")," function to instantiate the service with them."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// weather.service.ts\nimport { dependency } from '@foal/core';\n\nclass ConversionService {\n  celsiusToFahrenheit(temperature: number): number {\n    return temperature * 9 / 5 + 32;\n  }\n}\n\nclass WeatherService {\n  temp = 14;\n\n  @dependency\n  conversion: ConversionService;\n\n  getWeather(): string {\n    const temp = this.conversion.celsiusToFahrenheit(this.temp);\n    return `The outside temperature is ${temp} \xb0F.`;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// weather.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { WeatherService } from './weather.service';\n\nit('WeatherService', () => {\n  const service = createService(WeatherService);\n\n  const expected = 'The outside temperature is 57.2 \xb0F.';\n  const actual = service.getWeather();\n\n  strictEqual(actual, expected);\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A similar function exists to instantiate controllers with their dependencies: ",(0,a.kt)("inlineCode",{parentName:"p"},"createController"),".")),(0,a.kt)("p",null,"In many situations, it is necessary to mock the dependencies to truly write ",(0,a.kt)("em",{parentName:"p"},"unit")," tests. This can be done by passing a second argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"createService")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"createController"),")."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// detector.service.ts\nimport { dependency } from '@foal/core';\n\nclass TwitterService {\n  fetchLastTweets(): { msg: string }[] {\n    // Make a call to the Twitter API to get the last tweets.\n    return [];\n  }\n}\n\nclass DetectorService {\n  @dependency\n  twitter: TwitterService;\n\n  isFoalTSMentionedInTheLastTweets() {\n    const tweets = this.twitter.fetchLastTweets();\n    if (tweets.find(tweet => tweet.msg.includes('FoalTS'))) {\n      return true;\n    }\n    return false;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// detector.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { DetectorService } from './weather.service';\n\nit('DetectorService', () => {\n  const twitterMock = {\n    fetchLastTweets() {\n      return [\n        { msg: 'Hello world!' },\n        { msg: 'I LOVE FoalTS' },\n      ]\n    }\n  }\n  const service = createService(DetectorService, {\n    twitter: twitterMock\n  });\n\n  const actual = service.isFoalTSMentionedInTheLastTweets();\n\n  strictEqual(actual, true);\n});\n")),(0,a.kt)("h2",{id:"injecting-other-instances"},"Injecting other Instances"),(0,a.kt)("p",null,"To manually inject instances into the identity mapper, you can also provide your own ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceManager")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function (usually located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts"),")."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, ServiceManager } from '@foal/core';\nimport { DataSource } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\nimport { dataSource } from './db';\n\nasync function main() {\n  await dataSource.initialize();\n\n  const serviceManager = new ServiceManager();\n  serviceManager.set(DataSource, dataSource);\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Interfaces cannot be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," method.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK } from '@foal/core';\nimport { DataSource } from 'typeorm';\n\nimport { Product } from '../entities';\n\nclass ApiController {\n\n  @dependency\n  dataSource: DataSource;\n\n  @Get('/products')\n  async readProducts() {\n    const products = await this.dataSource.getRepository(Product).find();\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),(0,a.kt)("h2",{id:"abstract-services"},"Abstract Services"),(0,a.kt)("p",null,"If you want to use a different service implementation depending on your environment (production, development, etc.), you can use an abstract service for this."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"logger.service.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n\n  abstract log(str: string): void;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," the two properties must be static.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"console-logger.service.ts (concrete service)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class ConsoleLogger extends Logger {\n  log(str: string) {\n    console.log(str);\n  }\n}\n\nexport { ConsoleLogger as ConcreteLogger };\n")),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"logger:\n  driver: ./app/services/console-logger.service\n"))),(0,a.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "logger": {\n    "driver": "./app/services/console-logger.service"\n  }\n}\n'))),(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  logger: {\n    driver: "./app/services/console-logger.service"\n  }\n}\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The configuration value can be a package name or a path relative to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/")," directory. If it is a path, it ",(0,a.kt)("strong",{parentName:"p"},"must")," start with ",(0,a.kt)("inlineCode",{parentName:"p"},"./")," and ",(0,a.kt)("strong",{parentName:"p"},"must not")," have an extension (",(0,a.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),", etc).")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"a random service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Service {\n  @dependency\n  logger: Logger;\n\n  // ...\n}\n")),(0,a.kt)("h3",{id:"default-concrete-services"},"Default Concrete Services"),(0,a.kt)("p",null,"An abstract service can have a default concrete service that is used when no configuration value is specified or when the configuration value is ",(0,a.kt)("inlineCode",{parentName:"p"},"local"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { join } from 'path';\n\nexport abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n  static defaultConcreteClassPath = join(__dirname, './console-logger.service');\n\n  abstract log(str: string): void;\n}\n")),(0,a.kt)("h2",{id:"usage-with-interfaces-and-generic-classes"},"Usage with Interfaces and Generic Classes"),(0,a.kt)("p",null,"Interfaces and generic classes can be injected using strings as IDs. To do this, you will need the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Dependency")," decorator."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/services/logger.interface.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ILogger {\n  log(message: any): void;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/services/logger.service.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ILogger } from './logger.interface';\n\nexport class ConsoleLogger implements ILogger {\n  log(message: any): void {\n    console.log(message);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/index.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, ServiceManager } from '@foal/core';\n\nimport { AppController } from './app/app.controller';\nimport { Product } from './app/entities';\nimport { ConsoleLogger } from './app/services';\nimport { dataSource } from './db';\n\nasync function main() {\n  await dataSource.initialize();\n  const productRepository = dataSource.getRepository(Product);\n\n  const serviceManager = new ServiceManager()\n    .set('product', productRepository)\n    .set('logger', new ConsoleLogger());\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Repository } from 'typeorm';\n\nimport { Product } from '../entities';\nimport { ILogger } from '../services';\n\nexport class ApiController {\n\n  @Dependency('product')\n  productRepository: Repository<Product>;\n\n  @Dependency('logger')\n  logger: ILogger;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.productRepository.find();\n    this.logger.log(products);\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),(0,a.kt)("h2",{id:"accessing-the-servicemanager"},"Accessing the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ServiceManager")),(0,a.kt)("p",null,"In very rare situations, you may want to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceManager")," which is the identity mapper that contains all the service instances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get, HttpResponseOK, ServiceManager } from '@foal/core';\n\nclass MyService {\n  foo() {\n    return 'foo';\n  }\n}\n\nclass MyController {\n  @dependency\n  services: ServiceManager;\n\n  @Get('/bar')\n  bar() {\n    const msg = this.services.get(MyService).foo();\n    return new HttpResponseOK(msg);\n  }\n}\n")))}m.isMDXComponent=!0}}]);