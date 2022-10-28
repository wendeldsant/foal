"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),o=a(86010),s=a(72389),l=a(67392),i=a(7094),p=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a;const{lazy:s,block:m,defaultValue:d,values:f,groupId:h,className:y}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:x}=(0,i.U)(),[N,T]=(0,n.useState)(w),F=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=g[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=F.indexOf(t),r=b[a].value;r!==N&&(E(t),T(r),null!=h&&x(h,String(r)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=F.indexOf(e.currentTarget)+1;a=null!=(r=F[t])?r:F[0];break}case"ArrowLeft":{var n;const t=F.indexOf(e.currentTarget)-1;a=null!=(n=F[t])?n:F[F.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},y)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>F.push(e),onKeyDown:S,onFocus:O,onClick:O},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},52979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(65488),s=a(85162);const l={title:"Foal vs Express or Fastify",sidebar_label:"Express / Fastify"},i=void 0,p={unversionedId:"comparison-with-other-frameworks/express-fastify",id:"version-2.x/comparison-with-other-frameworks/express-fastify",title:"Foal vs Express or Fastify",description:"These pages are definitely the most difficult to write. If you are here, it is probably because you want to know if you should choose Foal over another framework. There are many in the Node ecosystem and choosing one is not always an easy task. These pages are meant to help you on your way.",source:"@site/versioned_docs/version-2.x/comparison-with-other-frameworks/express-fastify.md",sourceDirName:"comparison-with-other-frameworks",slug:"/comparison-with-other-frameworks/express-fastify",permalink:"/id/docs/2.x/comparison-with-other-frameworks/express-fastify",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/comparison-with-other-frameworks/express-fastify.md",tags:[],version:"2.x",frontMatter:{title:"Foal vs Express or Fastify",sidebar_label:"Express / Fastify"},sidebar:"someSidebar",previous:{title:"Checklist",permalink:"/id/docs/2.x/deployment-and-environments/checklist"},next:{title:"To v2",permalink:"/id/docs/2.x/upgrade-to-v2/"}},u={},c=[{value:"Comparison Overview",id:"comparison-overview",level:2},{value:"Express and Fastify are Minimalist",id:"express-and-fastify-are-minimalist",level:3},{value:"TypeScript vs JavaScript",id:"typescript-vs-javascript",level:3},{value:"Activity and Maintenance",id:"activity-and-maintenance",level:3},{value:"Community",id:"community",level:3},{value:"Code Examples",id:"code-examples",level:2},{value:"A simple route",id:"a-simple-route",level:3},{value:"Unit testing on a simple route",id:"unit-testing-on-a-simple-route",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"These pages are definitely the most difficult to write. If you are here, it is probably because you want to know if you should choose Foal over another framework. There are many in the Node ecosystem and choosing one is not always an easy task. These pages are meant to help you on your way."),(0,n.kt)("p",null,"Of course, we prefer FoalTS because we sincerely believe that it solves a number of problems better than other existing frameworks. And so we may have some bias. However, we will try in these pages to be as objective and sincere as possible to show you the differences between FoalTS and other frameworks."),(0,n.kt)("p",null,"In addition, we would also recommend that you download and test them yourself. You'll be able to make your own opinion about each of them and choose the one that suits you best."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This page is evolutive. Feel free to suggest changes if you think something is missing, incorrect or outdated!")),(0,n.kt)("h2",{id:"comparison-overview"},"Comparison Overview"),(0,n.kt)("h3",{id:"express-and-fastify-are-minimalist"},"Express and Fastify are Minimalist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," are both low-level frameworks that mainly take care of routing requests, handling errors, and parsing cookies, URLs, headers and bodies. They present themselves as ",(0,n.kt)("em",{parentName:"p"},"fast"),", ",(0,n.kt)("em",{parentName:"p"},"minimalist")," and ",(0,n.kt)("em",{parentName:"p"},"low overhead")," and are not intented to be provided with a complete environment (CLI, ORM, auth, access control, test tools, etc)."),(0,n.kt)("p",null,"Foal, on the other hand, aims to provide in one place all the code and tools needed to build a complete Web application. When you start a new project with Foal, for example, you have a CLI to generate files, utilities to handle authentication and access control, and a dependency injection system to test your application."),(0,n.kt)("p",null,"If you want to have as much freedom as possible and are ready to start a project completely from scratch, Express or Fastify seems to be the right choice for you. You will then have to search for the packages you need on npm and the documentation to use and assemble them."),(0,n.kt)("p",null,"If you are looking for a more complete framework that provides everything needed to build a web application in one place and in a consistent manner, then Foal is probably the best option."),(0,n.kt)("p",null,"FoalTS is not a closed framework though. If you want to use other libraries than those offered by the framework (password hashing, ORM) at some point, you still can. Its architecture is not restrictive either and it will adapt to you as the application grows."),(0,n.kt)("h3",{id:"typescript-vs-javascript"},"TypeScript vs JavaScript"),(0,n.kt)("p",null,"Express and Fastify are frameworks written in vanilla JavaScript. Foal is written in TypeScript."),(0,n.kt)("p",null,"It is possible to use Express and Fastify with TypeScript, but this has some disadvantages compared to Foal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Express does not provide TypeScript types by itself, so you have to import the ",(0,n.kt)("inlineCode",{parentName:"li"},"@types/express")," package which has already been unstable between patch versions in the past."),(0,n.kt)("li",{parentName:"ul"},"Fastify provides TS types but, as they are separate from the code base, some parts of the API will not be typed or may be typed incorrectly as mentioned in the ",(0,n.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#typescript"},"official documentation"),".")),(0,n.kt)("p",null,"Foal, on the other hand, is written entirely in TypeScript, designed to be used with TypeScript, with API types always up-to-date."),(0,n.kt)("h3",{id:"activity-and-maintenance"},"Activity and Maintenance"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Framework"),(0,n.kt)("th",{parentName:"tr",align:null},"First 0.x release"),(0,n.kt)("th",{parentName:"tr",align:null},"First 1.x release"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Express"),(0,n.kt)("td",{parentName:"tr",align:null},"2010"),(0,n.kt)("td",{parentName:"tr",align:null},"2010")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fastify"),(0,n.kt)("td",{parentName:"tr",align:null},"2016"),(0,n.kt)("td",{parentName:"tr",align:null},"2018")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Foal"),(0,n.kt)("td",{parentName:"tr",align:null},"2017"),(0,n.kt)("td",{parentName:"tr",align:null},"2019")))),(0,n.kt)("p",null,"Express is in maintenance mode. As of March 2022, the last minor release was 3 years ago."),(0,n.kt)("p",null,"Fastify and Foal are both actively maintained with regular releases of new versions in recent years."),(0,n.kt)("h3",{id:"community"},"Community"),(0,n.kt)("p",null,"Express and Fastify have much larger communities than Foal."),(0,n.kt)("p",null,"Foal's community is smaller but it's growing. If you're looking for help, feel free to join us on our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/QUrJv98"},"Discord server"),"."),(0,n.kt)("h2",{id:"code-examples"},"Code Examples"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We're looking for small and concrete examples to complete this section. Feel free to suggest one on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/tree/master/docs/docs/comparison-with-other-frameworks/express-fastify.md"},"Github"),". \ud83d\udc4d")),(0,n.kt)("h3",{id:"a-simple-route"},"A simple route"),(0,n.kt)(o.Z,{defaultValue:"FoalTS",values:[{label:"FoalTS",value:"FoalTS"},{label:"Express",value:"Express"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"FoalTS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\nimport { Product } from '../entities';\n\nexport class ProdutController {\n  @Get('/products')\n  readProducts() {\n    const products = await Product.find({});\n    return new HttpResponseOK(products);\n  }\n}\n"))),(0,n.kt)(s.Z,{value:"Express",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Router } from 'express';\nimport { Product } from '../entities';\n\nconst productRouter = Router();\n\n// Express router does not support promises, so those that are rejected must be caught.\nproductRouter.get('/products', async (req, res) => {\n  try {\n    const products = await Product.find({});\n    res.send(products);\n  } catch (err) {\n    next(err);\n  }\n})\n\nexport { productRouter }\n")))),(0,n.kt)("h3",{id:"unit-testing-on-a-simple-route"},"Unit testing on a simple route"),(0,n.kt)(o.Z,{defaultValue:"FoalTS",values:[{label:"FoalTS",value:"FoalTS"},{label:"Express",value:"Express"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"FoalTS",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context Get, HttpResponseOK } from '@foal/core';\n\nexport class ComputerController {\n  @Get('/fullname')\n  computeFullname({ request }: Context) {\n    const firstName = request.params.firstName;\n    const lastName = request.params.lastName;\n    return new HttpResponseOK(`${firstName} ${lastName}`);\n  }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Test")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\nimport { Context, HttpResponseOK } from '@foal/core';\n\nimport { ComputerController } from './computer.controller';\n\nit('computeFullname should return the full name.', () => {\n  const ctx = new Context({\n    params: { firstName: 'Hello', lastName: 'World' }\n  });\n\n  const controller = new ComputerController();\n  const response = controller.computeFullname(ctx);\n\n  if (!(response instanceof HttpResponseOK)) {\n    throw new Error('The returned status shoud be 200.');\n  }\n\n  strictEqual(response.body, 'Hello World');\n});\n"))),(0,n.kt)(s.Z,{value:"Express",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Router } from 'express';\n\nconst computerRouter = Router();\n\nasync function computeFullname(req, res) {\n  const firstName = req.params.firstName;\n  const lastName = req.params.lastName;\n  res.status(200).send(`${firstName} ${lastName}`)\n}\n\ncomputerRouter.get('/fullname', computeFullname);\n\nexport { computerRouter, computeFullname }\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Test")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\n\nimport { computeFullname } from './computer.controller';\n\nit('computeFullname should return the full name.', () => {\n  let actualStatus;\n  let actualBody;\n\n  const req = {\n    params: { firstName: 'Hello', lastName: 'World' }\n  };\n  const res = {\n    status(status) {\n      actualStatus = status;\n      return status;\n    }\n    send(body) {\n      actualBody = body;\n    }\n  }\n\n  computeFullname(req, res);\n\n  strictEqual(actualStatus, 200);\n  strictEqual(actualBody, 'Hello World');\n});\n")))))}d.isMDXComponent=!0}}]);