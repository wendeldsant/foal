"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9954],{40349:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=a(74848),t=a(28453),i=a(11470),r=a(19365);const o={title:"TypeORM",sidebar_label:"SQL Databases"},l=void 0,c={id:"databases/typeorm",title:"TypeORM",description:"A simple model:",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/databases/typeorm.md",sourceDirName:"databases",slug:"/databases/typeorm",permalink:"/id/docs/2.x/databases/typeorm",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/databases/typeorm.md",tags:[],version:"2.x",frontMatter:{title:"TypeORM",sidebar_label:"SQL Databases"},sidebar:"someSidebar",previous:{title:"Conversions",permalink:"/id/docs/2.x/common/conversions"},next:{title:"Create Models & Queries",permalink:"/id/docs/2.x/databases/create-models-and-queries"}},d={},u=[{value:"The ORM",id:"the-orm",level:2},{value:"Supported Databases",id:"supported-databases",level:2},{value:"Use with FoalTS",id:"use-with-foalts",level:2},{value:"Initial Configuration",id:"initial-configuration",level:3},{value:"Packages",id:"packages",level:3},{value:"Database Configuration Examples",id:"database-configuration-examples",level:2},{value:"MySQL / MariaDB",id:"mysql--mariadb",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Configuration and Testing",id:"configuration-and-testing",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"A simple model:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"the-orm",children:"The ORM"}),"\n",(0,s.jsxs)(n.p,{children:["FoalTS uses ",(0,s.jsx)(n.a,{href:"https://typeorm.io/",children:"TypeORM"})," as default ",(0,s.jsx)(n.em,{children:"Object-Relational Mapping"}),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Active_record_pattern",children:"Active Record"})," and ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern",children:"Data Mapper"})," patterns."]}),"\n",(0,s.jsx)(n.p,{children:"Here is a non-exhaustive list of its features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"migrations and automatic migrations generation"}),"\n",(0,s.jsx)(n.li,{children:"uni-directional, bi-directional and self-referenced relations"}),"\n",(0,s.jsx)(n.li,{children:"eager and lazy relations"}),"\n",(0,s.jsx)(n.li,{children:"TypeScript support"}),"\n",(0,s.jsx)(n.li,{children:"connection configuration in json / xml / yml / env formats"}),"\n",(0,s.jsx)(n.li,{children:"transactions"}),"\n",(0,s.jsx)(n.li,{children:"etc"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",(0,s.jsx)(n.a,{href:"https://typeorm.io/",children:"official documentation"})," to learn more advanced features."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supported-databases",children:"Supported Databases"}),"\n",(0,s.jsx)(n.p,{children:"FoalTS supports officially the following databases:"}),"\n",(0,s.jsxs)(n.p,{children:["| Database | Versions | Driver |\n| --- | --- | --- | --- |\n| PostgreSQL | 9.6+ (",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/support/versioning/",children:"Version Policy"}),") | ",(0,s.jsx)(n.code,{children:"pg@8"})," |\n| MySQL | 5.7+ (",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MySQL#Release_history",children:"Version Policy"}),") | ",(0,s.jsx)(n.code,{children:"mysql@2"})," |\n| MariaDB | 10.2+ (",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MariaDB#Versioning",children:"Version Policy"}),") | ",(0,s.jsx)(n.code,{children:"mysql@2"})," |\n| SQLite | 3 | ",(0,s.jsx)(n.code,{children:"sqlite3@5"})," and ",(0,s.jsx)(n.code,{children:"better-sqlite3@7"})," (since v2.1) |\n| MongoDB | 4.0+ (",(0,s.jsx)(n.a,{href:"https://www.mongodb.com/support-policy",children:"Version Policy"}),") | ",(0,s.jsx)(n.code,{children:"mongodb@3"})," |"]}),"\n",(0,s.jsx)(n.h2,{id:"use-with-foalts",children:"Use with FoalTS"}),"\n",(0,s.jsxs)(n.p,{children:["TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",(0,s.jsx)(n.a,{href:"/id/docs/2.x/databases/using-another-orm",children:"Using another ORM"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"initial-configuration",children:"Initial Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a new project, an ",(0,s.jsx)(n.code,{children:"SQLite"})," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",(0,s.jsx)(n.code,{children:"ormconfig.js"})," and ",(0,s.jsx)(n.code,{children:"default.json"})," located respectively at the root of your project and in the ",(0,s.jsx)(n.code,{children:"config/"})," directory."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"ormconfig.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'better-sqlite3',\n  database: Config.get('database.database', 'string'),\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', 'boolean', false)\n}\n"})}),"\n",(0,s.jsxs)(i.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"database:\n  database: ./db.sqlite3\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  database: {\n    database: "./db.sqlite3",\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"packages",children:"Packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install typeorm @foal/typeorm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Two packages are required to use TypeORM with FoalTS:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The package ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/typeorm",children:"typeorm"})," which is the official one of the ORM. It includes everything you need to create models and make database requests."]}),"\n",(0,s.jsxs)(n.li,{children:["The package ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@foal/typeorm",children:"@foal/typeorm"})," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",(0,s.jsx)(n.a,{href:"/id/docs/2.x/authentication-and-access-control/quick-start",children:"authentication and authorization system"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"database-configuration-examples",children:"Database Configuration Examples"}),"\n",(0,s.jsxs)(n.p,{children:["This section shows how to configure ",(0,s.jsx)(n.strong,{children:"MySQL"})," or ",(0,s.jsx)(n.strong,{children:"PostgreSQL"})," with Foal."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"ormconfig.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host', 'string'),\n  port: Config.get('database.port', 'number'),\n  username: Config.get('database.username', 'string'),\n  password: Config.get('database.password', 'string'),\n  database: Config.get('database.database', 'string'),\n\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  synchronize: Config.get('database.synchronize', 'boolean', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With this configuration, database credentials can be provided in a YAML, a JSON or a ",(0,s.jsx)(n.code,{children:".env "}),"configuration file or in environment variables."]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  // ...\n  database: {\n    host: "localhost",\n    port: 3306,\n    username: "root",\n    password: "password",\n    database: "my-db"\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"mysql--mariadb",children:"MySQL / MariaDB"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"mysql"})," or ",(0,s.jsx)(n.code,{children:"mysql3"})," drivers."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install mysql --save # mysql2 is also supported\n"})}),"\n",(0,s.jsx)(n.h3,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"pg"})," driver."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install pg --save\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-and-testing",children:"Configuration and Testing"}),"\n",(0,s.jsxs)(n.p,{children:["When running the command ",(0,s.jsx)(n.code,{children:"npm run test"})," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Environment variables."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config/test.yml"})," and ",(0,s.jsx)(n.code,{children:"config/test.json"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config/default.yml"})," and ",(0,s.jsx)(n.code,{children:"config/default.json"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if the environment variable ",(0,s.jsx)(n.code,{children:"DATABASE_PASSWORD"})," is defined, Foal will use its value. Otherwise, it will look at the ",(0,s.jsx)(n.code,{children:".env"})," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",(0,s.jsx)(n.code,{children:"config/"})," files."]}),"\n",(0,s.jsxs)(n.p,{children:["In this way, you can define a default configuration in the ",(0,s.jsx)(n.code,{children:"config/default.{yml|json}"})," file to use both during development and testing and override some settings in ",(0,s.jsx)(n.code,{children:"config/test.{yml|json}"})," during testing."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["You learn more on how configuration works in Foal ",(0,s.jsx)(n.a,{href:"/id/docs/2.x/architecture/configuration",children:"here"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In the example below, we add two new options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dropSchema"})," clears the database each time we call ",(0,s.jsx)(n.code,{children:"createConnection"})]}),"\n",(0,s.jsxs)(n.li,{children:["and ",(0,s.jsx)(n.code,{children:"synchronize"})," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"config/test.yml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example of a test"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(async () => {\n    if (connection) {\n      await connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var s=a(34164);const t={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,r),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>w});var s=a(96540),t=a(34164),i=a(23104),r=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:a,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(a);return[t,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),x=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function b(e){let{className:n,block:a,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),t=o[a].value;t!==s&&(c(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);