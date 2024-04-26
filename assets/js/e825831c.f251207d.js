"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5160],{61084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),o=r(19365);const i={title:"Foal vs Express or Fastify",sidebar_label:"Express / Fastify"},l=void 0,c={id:"comparison-with-other-frameworks/express-fastify",title:"Foal vs Express or Fastify",description:"These pages are definitely the most difficult to write. If you are here, it is probably because you want to know if you should choose Foal over another framework. There are many in the Node ecosystem and choosing one is not always an easy task. These pages are meant to help you on your way.",source:"@site/versioned_docs/version-3.x/comparison-with-other-frameworks/express-fastify.md",sourceDirName:"comparison-with-other-frameworks",slug:"/comparison-with-other-frameworks/express-fastify",permalink:"/docs/3.x/comparison-with-other-frameworks/express-fastify",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/comparison-with-other-frameworks/express-fastify.md",tags:[],version:"3.x",frontMatter:{title:"Foal vs Express or Fastify",sidebar_label:"Express / Fastify"},sidebar:"someSidebar",previous:{title:"Checklist",permalink:"/docs/3.x/deployment-and-environments/checklist"},next:{title:"To v3",permalink:"/docs/3.x/upgrade-to-v3/"}},u={},d=[{value:"Comparison Overview",id:"comparison-overview",level:2},{value:"Express and Fastify are Minimalist",id:"express-and-fastify-are-minimalist",level:3},{value:"TypeScript vs JavaScript",id:"typescript-vs-javascript",level:3},{value:"Activity and Maintenance",id:"activity-and-maintenance",level:3},{value:"Community",id:"community",level:3},{value:"Code Examples",id:"code-examples",level:2},{value:"A simple route",id:"a-simple-route",level:3},{value:"Unit testing on a simple route",id:"unit-testing-on-a-simple-route",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"These pages are definitely the most difficult to write. If you are here, it is probably because you want to know if you should choose Foal over another framework. There are many in the Node ecosystem and choosing one is not always an easy task. These pages are meant to help you on your way."}),"\n",(0,n.jsx)(t.p,{children:"Of course, we prefer FoalTS because we sincerely believe that it solves a number of problems better than other existing frameworks. And so we may have some bias. However, we will try in these pages to be as objective and sincere as possible to show you the differences between FoalTS and other frameworks."}),"\n",(0,n.jsx)(t.p,{children:"In addition, we would also recommend that you download and test them yourself. You'll be able to make your own opinion about each of them and choose the one that suits you best."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This page is evolutive. Feel free to suggest changes if you think something is missing, incorrect or outdated!"})}),"\n",(0,n.jsx)(t.h2,{id:"comparison-overview",children:"Comparison Overview"}),"\n",(0,n.jsx)(t.h3,{id:"express-and-fastify-are-minimalist",children:"Express and Fastify are Minimalist"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://expressjs.com/",children:"Express"})," and ",(0,n.jsx)(t.a,{href:"https://www.fastify.io/",children:"Fastify"})," are both low-level frameworks that mainly take care of routing requests, handling errors, and parsing cookies, URLs, headers and bodies. They present themselves as ",(0,n.jsx)(t.em,{children:"fast"}),", ",(0,n.jsx)(t.em,{children:"minimalist"})," and ",(0,n.jsx)(t.em,{children:"low overhead"})," and are not intented to be provided with a complete environment (CLI, ORM, auth, access control, test tools, etc)."]}),"\n",(0,n.jsx)(t.p,{children:"Foal, on the other hand, aims to provide in one place all the code and tools needed to build a complete Web application. When you start a new project with Foal, for example, you have a CLI to generate files, utilities to handle authentication and access control, and a dependency injection system to test your application."}),"\n",(0,n.jsx)(t.p,{children:"If you want to have as much freedom as possible and are ready to start a project completely from scratch, Express or Fastify seems to be the right choice for you. You will then have to search for the packages you need on npm and the documentation to use and assemble them."}),"\n",(0,n.jsx)(t.p,{children:"If you are looking for a more complete framework that provides everything needed to build a web application in one place and in a consistent manner, then Foal is probably the best option."}),"\n",(0,n.jsx)(t.p,{children:"FoalTS is not a closed framework though. If you want to use other libraries than those offered by the framework (password hashing, ORM) at some point, you still can. Its architecture is not restrictive either and it will adapt to you as the application grows."}),"\n",(0,n.jsx)(t.h3,{id:"typescript-vs-javascript",children:"TypeScript vs JavaScript"}),"\n",(0,n.jsx)(t.p,{children:"Express and Fastify are frameworks written in vanilla JavaScript. Foal is written in TypeScript."}),"\n",(0,n.jsx)(t.p,{children:"It is possible to use Express and Fastify with TypeScript, but this has some disadvantages compared to Foal:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Express does not provide TypeScript types by itself, so you have to import the ",(0,n.jsx)(t.code,{children:"@types/express"})," package which has already been unstable between patch versions in the past."]}),"\n",(0,n.jsxs)(t.li,{children:["Fastify provides TS types but, as they are separate from the code base, some parts of the API will not be typed or may be typed incorrectly as mentioned in the ",(0,n.jsx)(t.a,{href:"https://www.fastify.io/docs/latest/Reference/TypeScript/#typescript",children:"official documentation"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Foal, on the other hand, is written entirely in TypeScript, designed to be used with TypeScript, with API types always up-to-date."}),"\n",(0,n.jsx)(t.h3,{id:"activity-and-maintenance",children:"Activity and Maintenance"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Framework"}),(0,n.jsx)(t.th,{children:"First 0.x release"}),(0,n.jsx)(t.th,{children:"First 1.x release"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Express"}),(0,n.jsx)(t.td,{children:"2010"}),(0,n.jsx)(t.td,{children:"2010"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Fastify"}),(0,n.jsx)(t.td,{children:"2016"}),(0,n.jsx)(t.td,{children:"2018"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Foal"}),(0,n.jsx)(t.td,{children:"2017"}),(0,n.jsx)(t.td,{children:"2019"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Express is in maintenance mode. As of March 2022, the last minor release was 3 years ago."}),"\n",(0,n.jsx)(t.p,{children:"Fastify and Foal are both actively maintained with regular releases of new versions in recent years."}),"\n",(0,n.jsx)(t.h3,{id:"community",children:"Community"}),"\n",(0,n.jsx)(t.p,{children:"Express and Fastify have much larger communities than Foal."}),"\n",(0,n.jsxs)(t.p,{children:["Foal's community is smaller but it's growing. If you're looking for help, feel free to join us on our ",(0,n.jsx)(t.a,{href:"https://discord.gg/QUrJv98",children:"Discord server"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["We're looking for small and concrete examples to complete this section. Feel free to suggest one on ",(0,n.jsx)(t.a,{href:"https://github.com/FoalTS/foal/tree/master/docs/docs/comparison-with-other-frameworks/express-fastify.md",children:"Github"}),". \ud83d\udc4d"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"a-simple-route",children:"A simple route"}),"\n",(0,n.jsxs)(a.A,{defaultValue:"FoalTS",values:[{label:"FoalTS",value:"FoalTS"},{label:"Express",value:"Express"}],children:[(0,n.jsx)(o.A,{value:"FoalTS",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Get, HttpResponseOK } from '@foal/core';\nimport { Product } from '../entities';\n\nexport class ProdutController {\n  @Get('/products')\n  readProducts() {\n    const products = await Product.find({});\n    return new HttpResponseOK(products);\n  }\n}\n"})})}),(0,n.jsx)(o.A,{value:"Express",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Router } from 'express';\nimport { Product } from '../entities';\n\nconst productRouter = Router();\n\n// Express router does not support promises, so those that are rejected must be caught.\nproductRouter.get('/products', async (req, res) => {\n  try {\n    const products = await Product.find({});\n    res.send(products);\n  } catch (err) {\n    next(err);\n  }\n})\n\nexport { productRouter }\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"unit-testing-on-a-simple-route",children:"Unit testing on a simple route"}),"\n",(0,n.jsxs)(a.A,{defaultValue:"FoalTS",values:[{label:"FoalTS",value:"FoalTS"},{label:"Express",value:"Express"}],children:[(0,n.jsxs)(o.A,{value:"FoalTS",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Code"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Context Get, HttpResponseOK } from '@foal/core';\n\nexport class ComputerController {\n  @Get('/fullname')\n  computeFullname({ request }: Context) {\n    const firstName = request.params.firstName;\n    const lastName = request.params.lastName;\n    return new HttpResponseOK(`${firstName} ${lastName}`);\n  }\n}\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Test"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { strictEqual } from 'assert';\nimport { Context, HttpResponseOK } from '@foal/core';\n\nimport { ComputerController } from './computer.controller';\n\nit('computeFullname should return the full name.', () => {\n  const ctx = new Context({\n    params: { firstName: 'Hello', lastName: 'World' }\n  });\n\n  const controller = new ComputerController();\n  const response = controller.computeFullname(ctx);\n\n  if (!(response instanceof HttpResponseOK)) {\n    throw new Error('The returned status shoud be 200.');\n  }\n\n  strictEqual(response.body, 'Hello World');\n});\n"})})]}),(0,n.jsxs)(o.A,{value:"Express",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Code"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Router } from 'express';\n\nconst computerRouter = Router();\n\nasync function computeFullname(req, res) {\n  const firstName = req.params.firstName;\n  const lastName = req.params.lastName;\n  res.status(200).send(`${firstName} ${lastName}`)\n}\n\ncomputerRouter.get('/fullname', computeFullname);\n\nexport { computerRouter, computeFullname }\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Test"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { strictEqual } from 'assert';\n\nimport { computeFullname } from './computer.controller';\n\nit('computeFullname should return the full name.', () => {\n  let actualStatus;\n  let actualBody;\n\n  const req = {\n    params: { firstName: 'Hello', lastName: 'World' }\n  };\n  const res = {\n    status(status) {\n      actualStatus = status;\n      return status;\n    }\n    send(body) {\n      actualBody = body;\n    }\n  }\n\n  computeFullname(req, res);\n\n  strictEqual(actualStatus, 200);\n  strictEqual(actualBody, 'Hello World');\n});\n"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),s=r(34164),a=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),y=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==n&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function g(e){const t=(0,x.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);