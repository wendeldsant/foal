"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1361],{20661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(74848),s=r(28453),c=r(11470),i=r(19365);const o={title:"Servicios e Inyecci\xf3n de Dependencias"},a=void 0,l={id:"architecture/services-and-dependency-injection",title:"Servicios e Inyecci\xf3n de Dependencias",description:"Description",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-2.x/architecture/services-and-dependency-injection.md",sourceDirName:"architecture",slug:"/architecture/services-and-dependency-injection",permalink:"/es/docs/2.x/architecture/services-and-dependency-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/architecture/services-and-dependency-injection.md",tags:[],version:"2.x",frontMatter:{title:"Servicios e Inyecci\xf3n de Dependencias"},sidebar:"someSidebar",previous:{title:"Controladores",permalink:"/es/docs/2.x/architecture/controllers"},next:{title:"Hooks",permalink:"/es/docs/2.x/architecture/hooks"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Use &amp; Dependency Injection",id:"use--dependency-injection",level:2},{value:"Testing services",id:"testing-services",level:2},{value:"Services (or Controllers) with Dependencies",id:"services-or-controllers-with-dependencies",level:3},{value:"Injecting other Instances",id:"injecting-other-instances",level:2},{value:"Abstract Services",id:"abstract-services",level:2},{value:"Default Concrete Services",id:"default-concrete-services",level:3},{value:"Usage with Interfaces and Generic Classes",id:"usage-with-interfaces-and-generic-classes",level:2},{value:"Accessing the <code>ServiceManager</code>",id:"accessing-the-servicemanager",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"foal generate service my-service\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export class MyService {\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Services are useful to organize your code in domains. They can be used in a wide variety of situations: logging, interaction with a database, calculations, communication with an external API, etc."}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"Basically, a service can be any class with a narrow and well defined purpose. They are instantiated as singletons."}),"\n",(0,t.jsx)(n.h2,{id:"use--dependency-injection",children:"Use & Dependency Injection"}),"\n",(0,t.jsxs)(n.p,{children:["You can access a service from a controller using the ",(0,t.jsx)(n.code,{children:"@dependency"})," decorator."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass AppController {\n  @dependency\n  logger: Logger\n\n  @Get('/')\n  index() {\n    this.logger.log('index has been called!');\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["When instantiating the controller, FoalTS will provide the service instance. This mechanism is called ",(0,t.jsx)(n.em,{children:"dependency injection"})," and is particularly interesting in unit testing (see section below)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the same way, you can access a service from another service."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency } from '@foal/core';\n\nclass MyService {\n  run() {\n    console.log('hello world');\n  }\n}\n\nclass MyServiceA {\n  @dependency\n  myService: MyService;\n\n  foo() {\n    this.myService.run();\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Dependencies are injected after the instantiation of the controller/service. So they will appear as ",(0,t.jsx)(n.code,{children:"undefined"})," if you try to read them inside a constructor. If you want to access the dependencies when initializing a controller/service, refer to the ",(0,t.jsxs)(n.a,{href:"/es/docs/2.x/architecture/initialization",children:[(0,t.jsx)(n.code,{children:"boot"})," method"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Circular dependencies are not supported. In most cases, when two services are dependent on each other, the creation of a third service containing the functionalities required by both services solves the dependency problem."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing-services",children:"Testing services"}),"\n",(0,t.jsx)(n.p,{children:"Services are classes and so can be tested as is."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// calculator.service.ts\nexport class CalculatorService {\n  sum(a: number, b: number): number {\n    return a + b;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// calculator.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { CalculatorService } from './calculator.service';\n\nit('CalculatorService', () => {\n  const service = new CalculatorService();\n  strictEqual(service.sum(1, 2), 3);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"services-or-controllers-with-dependencies",children:"Services (or Controllers) with Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["If your service has dependencies, you can use the ",(0,t.jsx)(n.code,{children:"createService"})," function to instantiate the service with them."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// weather.service.ts\nimport { dependency } from '@foal/core';\n\nclass ConversionService {\n  celsiusToFahrenheit(temperature: number): number {\n    return temperature * 9 / 5 + 32;\n  }\n}\n\nclass WeatherService {\n  temp = 14;\n\n  @dependency\n  conversion: ConversionService;\n\n  getWeather(): string {\n    const temp = this.conversion.celsiusToFahrenheit(this.temp);\n    return `The outside temperature is ${temp} \xb0F.`;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// weather.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { WeatherService } from './weather.service';\n\nit('WeatherService', () => {\n  const service = createService(WeatherService);\n\n  const expected = 'The outside temperature is 57.2 \xb0F.';\n  const actual = service.getWeather();\n\n  strictEqual(actual, expected);\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["A similar function exists to instantiate controllers with their dependencies: ",(0,t.jsx)(n.code,{children:"createController"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In many situations, it is necessary to mock the dependencies to truly write ",(0,t.jsx)(n.em,{children:"unit"})," tests. This can be done by passing a second argument to ",(0,t.jsx)(n.code,{children:"createService"})," (or ",(0,t.jsx)(n.code,{children:"createController"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// detector.service.ts\nimport { dependency } from '@foal/core';\n\nclass TwitterService {\n  fetchLastTweets(): { msg: string }[] {\n    // Make a call to the Twitter API to get the last tweets.\n    return [];\n  }\n}\n\nclass DetectorService {\n  @dependency\n  twitter: TwitterService;\n\n  isFoalTSMentionedInTheLastTweets() {\n    const tweets = this.twitter.fetchLastTweets();\n    if (tweets.find(tweet => tweet.msg.includes('FoalTS'))) {\n      return true;\n    }\n    return false;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// detector.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { DetectorService } from './weather.service';\n\nit('DetectorService', () => {\n  const twitterMock = {\n    fetchLastTweets() {\n      return [\n        { msg: 'Hello world!' },\n        { msg: 'I LOVE FoalTS' },\n      ]\n    }\n  }\n  const service = createService(DetectorService, {\n    twitter: twitterMock\n  });\n\n  const actual = service.isFoalTSMentionedInTheLastTweets();\n\n  strictEqual(actual, true);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"injecting-other-instances",children:"Injecting other Instances"}),"\n",(0,t.jsxs)(n.p,{children:["To manually inject instances into the identity mapper, you can also provide your own ",(0,t.jsx)(n.code,{children:"ServiceManager"})," to the ",(0,t.jsx)(n.code,{children:"createApp"})," function (usually located at ",(0,t.jsx)(n.code,{children:"src/index.ts"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/index.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { createApp, ServiceManager } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const connection = await createConnection();\n\n  const serviceManager = new ServiceManager();\n  serviceManager.set(Connection, connection);\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: Interfaces cannot be passed to the ",(0,t.jsx)(n.code,{children:"set"})," method."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/controllers/api.controller.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Connection } from 'typeorm';\n\nimport { Product } from '../entities';\n\nclass ApiController {\n\n  @dependency\n  connection: Connection;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.connection.getRepository(Product).find();\n    return new HttpResponseOK(products);\n  }\n\n}\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"abstract-services",children:"Abstract Services"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use a different service implementation depending on your environment (production, development, etc.), you can use an abstract service for this."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"logger.service.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n\n  abstract log(str: string): void;\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," the two properties must be static."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"console-logger.service.ts (concrete service)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export class ConsoleLogger extends Logger {\n  log(str: string) {\n    console.log(str);\n  }\n}\n\nexport { ConsoleLogger as ConcreteLogger };\n"})}),"\n",(0,t.jsxs)(c.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,t.jsx)(i.A,{value:"yaml",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"logger:\n  driver: ./app/services/console-logger.service\n"})})}),(0,t.jsx)(i.A,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "logger": {\n    "driver": "./app/services/console-logger.service"\n  }\n}\n'})})}),(0,t.jsx)(i.A,{value:"js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  logger: {\n    driver: "./app/services/console-logger.service"\n  }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The configuration value can be a package name or a path relative to the ",(0,t.jsx)(n.code,{children:"src/"})," directory. If it is a path, it ",(0,t.jsx)(n.strong,{children:"must"})," start with ",(0,t.jsx)(n.code,{children:"./"})," and ",(0,t.jsx)(n.strong,{children:"must not"})," have an extension (",(0,t.jsx)(n.code,{children:".js"}),", ",(0,t.jsx)(n.code,{children:".ts"}),", etc)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"a random service"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export class Service {\n  @dependency\n  logger: Logger;\n\n  // ...\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"default-concrete-services",children:"Default Concrete Services"}),"\n",(0,t.jsxs)(n.p,{children:["An abstract service can have a default concrete service that is used when no configuration value is specified or when the configuration value is ",(0,t.jsx)(n.code,{children:"local"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { join } from 'path';\n\nexport abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n  static defaultConcreteClassPath = join(__dirname, './console-logger.service');\n\n  abstract log(str: string): void;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-interfaces-and-generic-classes",children:"Usage with Interfaces and Generic Classes"}),"\n",(0,t.jsxs)(n.p,{children:["Interfaces and generic classes can be injected using strings as IDs. To do this, you will need the ",(0,t.jsx)(n.code,{children:"@Dependency"})," decorator."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/services/logger.interface.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface ILogger {\n  log(message: any): void;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/services/logger.service.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { ILogger } from './logger.interface';\n\nexport class ConsoleLogger implements ILogger {\n  log(message: any): void {\n    console.log(message);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/index.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { createApp, ServiceManager } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\nimport { Product } from './app/entities';\nimport { ConsoleLogger } from './app/services';\n\nasync function main() {\n  const connection = await createConnection();\n  const productRepository = connection.getRepository(Product);\n\n  const serviceManager = new ServiceManager()\n    .set('product', productRepository)\n    .set('logger', new ConsoleLogger());\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"src/controllers/api.controller.ts (example)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Repository } from 'typeorm';\n\nimport { Product } from '../entities';\nimport { ILogger } from '../services';\n\nexport class ApiController {\n\n  @Dependency('product')\n  productRepository: Repository<Product>;\n\n  @Dependency('logger')\n  logger: ILogger;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.productRepository.find();\n    this.logger.log(products);\n    return new HttpResponseOK(products);\n  }\n\n}\n\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"accessing-the-servicemanager",children:["Accessing the ",(0,t.jsx)(n.code,{children:"ServiceManager"})]}),"\n",(0,t.jsxs)(n.p,{children:["In very rare situations, you may want to access the ",(0,t.jsx)(n.code,{children:"ServiceManager"})," which is the identity mapper that contains all the service instances."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get, HttpResponseOK, ServiceManager } from '@foal/core';\n\nclass MyService {\n  foo() {\n    return 'foo';\n  }\n}\n\nclass MyController {\n  @dependency\n  services: ServiceManager;\n\n  @Get('/bar')\n  bar() {\n    const msg = this.services.get(MyService).foo();\n    return new HttpResponseOK(msg);\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var c=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(34164),c=r(23104),i=r(56347),o=r(205),a=r(57485),l=r(31682),d=r(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(s.location.search);n.set(c,e),s.replace({...s.location,search:n.toString()})}),[c,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,c=p(e),[i,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[l,u]=g({queryString:r,groupId:s}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,c]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:s}),x=(()=>{const e=l??m;return h({value:e,tabValues:c})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),v(e)}),[u,v,c]),tabValues:c}}var v=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,c.a_)(),d=e=>{const n=e.currentTarget,r=a.indexOf(n),s=o[r].value;s!==t&&(l(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...c,className:(0,s.A)("tabs__item",x.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);