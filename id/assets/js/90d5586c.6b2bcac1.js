"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[383],{5376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),o=t(28453),a=t(11470),s=t(19365);const l={title:"MongoDB (noSQL)",sidebar_label:"NoSQL"},i=void 0,c={id:"databases/typeorm/mongodb",title:"MongoDB (noSQL)",description:"Creating a new project",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/databases/typeorm/mongodb.md",sourceDirName:"databases/typeorm",slug:"/databases/typeorm/mongodb",permalink:"/id/docs/databases/typeorm/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/typeorm/mongodb.md",tags:[],version:"current",frontMatter:{title:"MongoDB (noSQL)",sidebar_label:"NoSQL"},sidebar:"someSidebar",previous:{title:"Migrations",permalink:"/id/docs/databases/typeorm/generate-and-run-migrations"},next:{title:"Introduction",permalink:"/id/docs/databases/other-orm/introduction"}},d={},u=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Defining Entities and Columns",id:"defining-entities-and-columns",level:2},{value:"Authentication",id:"authentication",level:2},{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore",level:3},{value:"Limitations",id:"limitations",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"creating-a-new-project",children:"Creating a new project"}),"\n",(0,r.jsxs)(n.p,{children:["To generate a new project that uses MongoDB, run the command ",(0,r.jsx)(n.code,{children:"createapp"})," with the flag ",(0,r.jsx)(n.code,{children:"--mongodb"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"foal createapp my-app --mongodb\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install mongodb@5\n"})}),"\n",(0,r.jsxs)(a.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(s.A,{value:"yaml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"database:\n  type: mongodb\n  url: mongodb://localhost:27017/test-foo-bar\n"})})}),(0,r.jsx)(s.A,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "database": {\n    "type": "mongodb",\n    "url": "mongodb://localhost:27017/test-foo-bar"\n  }\n}\n'})})}),(0,r.jsx)(s.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  database: {\n    type: "mongodb",\n    url: "mongodb://localhost:27017/test-foo-bar"\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"defining-entities-and-columns",children:"Defining Entities and Columns"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["More documentation here: ",(0,r.jsx)(n.a,{href:"https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md",children:"https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The definition of entities and columns is the same as in relational databases, except that the ID type must be an ",(0,r.jsx)(n.code,{children:"ObjectID"})," and the column decorator must be ",(0,r.jsx)(n.code,{children:"@ObjectIdColumn"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n    \n    @ObjectIdColumn()\n    _id: ObjectID;\n    \n    @Column()\n    firstName: string;\n    \n    @Column()\n    lastName: string;\n    \n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { ObjectId } from 'mongodb';\n\nconst user = await User.findOneBy({ _id: new ObjectId('xxxx') });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Entity, ObjectID, ObjectIdColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @ObjectIdColumn()\n  _id: ObjectID;\n\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Example with JSON Web Tokens"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { JWTRequired } from '@foal/jwt';\nimport { ObjectId } from 'mongodb';\n\nimport { User } from '../entities';\n\n@JWTRequired({\n  userIdType: 'string',\n  user: id => User.findOneBy({ _id: new ObjectId(id) })\n})\nclass MyController {}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"the-mongodbstore",children:["The ",(0,r.jsx)(n.code,{children:"MongoDBStore"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install @foal/mongodb\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you use sessions with ",(0,r.jsx)(n.code,{children:"@UseSessions"}),", you must use the ",(0,r.jsx)(n.code,{children:"MongoDBStore"})," from ",(0,r.jsx)(n.code,{children:"@foal/mongodb"}),". ",(0,r.jsxs)(n.strong,{children:["The ",(0,r.jsx)(n.code,{children:"TypeORMStore"})," does not work with noSQL databases."]})]}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(n.p,{children:"When using MongoDB, there are some features that are not available:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.code,{children:"foal g rest-api <name>"})," command,"]}),"\n",(0,r.jsxs)(n.li,{children:["and the ",(0,r.jsx)(n.em,{children:"Groups & Permissions"})," system."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),o=t(34164),a=t(23104),s=t(56347),l=t(205),i=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),g=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(c(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);