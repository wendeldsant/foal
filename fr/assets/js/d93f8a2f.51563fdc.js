"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2132],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:c,values:g,groupId:k,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,r.useState)(N),j=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==C&&(S(t),T(n),null!=k&&w(k,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;a=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>j.push(e),onKeyDown:O,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},33471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={title:"TypeORM",sidebar_label:"Bases de Donn\xe9es SQL"},s=void 0,p={unversionedId:"databases/typeorm",id:"version-2.x/databases/typeorm",title:"TypeORM",description:"A simple model:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/databases/typeorm.md",sourceDirName:"databases",slug:"/databases/typeorm",permalink:"/fr/docs/2.x/databases/typeorm",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/databases/typeorm.md",tags:[],version:"2.x",frontMatter:{title:"TypeORM",sidebar_label:"Bases de Donn\xe9es SQL"},sidebar:"someSidebar",previous:{title:"Conversions",permalink:"/fr/docs/2.x/common/conversions"},next:{title:"Cr\xe9er des Mod\xe8les & Requ\xeates",permalink:"/fr/docs/2.x/databases/create-models-and-queries"}},u={},d=[{value:"The ORM",id:"the-orm",level:2},{value:"Supported Databases",id:"supported-databases",level:2},{value:"Use with FoalTS",id:"use-with-foalts",level:2},{value:"Initial Configuration",id:"initial-configuration",level:3},{value:"Packages",id:"packages",level:3},{value:"Database Configuration Examples",id:"database-configuration-examples",level:2},{value:"MySQL / MariaDB",id:"mysql--mariadb",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Configuration and Testing",id:"configuration-and-testing",level:2}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"A simple model:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n")),(0,r.kt)("h2",{id:"the-orm"},"The ORM"),(0,r.kt)("p",null,"FoalTS uses ",(0,r.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM")," as default ",(0,r.kt)("em",{parentName:"p"},"Object-Relational Mapping"),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Active_record_pattern"},"Active Record")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"},"Data Mapper")," patterns."),(0,r.kt)("p",null,"Here is a non-exhaustive list of its features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"migrations and automatic migrations generation"),(0,r.kt)("li",{parentName:"ul"},"uni-directional, bi-directional and self-referenced relations"),(0,r.kt)("li",{parentName:"ul"},"eager and lazy relations"),(0,r.kt)("li",{parentName:"ul"},"TypeScript support"),(0,r.kt)("li",{parentName:"ul"},"connection configuration in json / xml / yml / env formats"),(0,r.kt)("li",{parentName:"ul"},"transactions"),(0,r.kt)("li",{parentName:"ul"},"etc")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",(0,r.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"official documentation")," to learn more advanced features.")),(0,r.kt)("h2",{id:"supported-databases"},"Supported Databases"),(0,r.kt)("p",null,"FoalTS supports officially the following databases:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Versions"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6+ (",(0,r.kt)("a",{parentName:"td",href:"https://www.postgresql.org/support/versioning/"},"Version Policy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pg@8")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.7+ (",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MySQL#Release_history"},"Version Policy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mysql@2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MariaDB"),(0,r.kt)("td",{parentName:"tr",align:null},"10.2+ (",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MariaDB#Versioning"},"Version Policy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mysql@2")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sqlite3@5")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"better-sqlite3@7")," (since v2.1)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},"4.0+ (",(0,r.kt)("a",{parentName:"td",href:"https://www.mongodb.com/support-policy"},"Version Policy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mongodb@3")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"use-with-foalts"},"Use with FoalTS"),(0,r.kt)("p",null,"TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/2.x/databases/using-another-orm"},"Using another ORM"),"."),(0,r.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,r.kt)("p",null,"When creating a new project, an ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLite")," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"default.json")," located respectively at the root of your project and in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ormconfig.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'better-sqlite3',\n  database: Config.get('database.database', 'string'),\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', 'boolean', false)\n}\n")),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  database: ./db.sqlite3\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  database: {\n    database: "./db.sqlite3",\n  }\n}\n')))),(0,r.kt)("h3",{id:"packages"},"Packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install typeorm @foal/typeorm\n")),(0,r.kt)("p",null,"Two packages are required to use TypeORM with FoalTS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The package ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typeorm"},"typeorm")," which is the official one of the ORM. It includes everything you need to create models and make database requests."),(0,r.kt)("li",{parentName:"ul"},"The package ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/typeorm"},"@foal/typeorm")," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",(0,r.kt)("a",{parentName:"li",href:"/fr/docs/2.x/authentication-and-access-control/quick-start"},"authentication and authorization system"),".")),(0,r.kt)("h2",{id:"database-configuration-examples"},"Database Configuration Examples"),(0,r.kt)("p",null,"This section shows how to configure ",(0,r.kt)("strong",{parentName:"p"},"MySQL")," or ",(0,r.kt)("strong",{parentName:"p"},"PostgreSQL")," with Foal."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ormconfig.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host', 'string'),\n  port: Config.get('database.port', 'number'),\n  username: Config.get('database.username', 'string'),\n  password: Config.get('database.password', 'string'),\n  database: Config.get('database.database', 'string'),\n\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  synchronize: Config.get('database.synchronize', 'boolean', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n")),(0,r.kt)("p",null,"With this configuration, database credentials can be provided in a YAML, a JSON or a ",(0,r.kt)("inlineCode",{parentName:"p"},".env "),"configuration file or in environment variables."),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  // ...\n  database: {\n    host: "localhost",\n    port: 3306,\n    username: "root",\n    password: "password",\n    database: "my-db"\n  }\n}\n')))),(0,r.kt)("h3",{id:"mysql--mariadb"},"MySQL / MariaDB"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql3")," drivers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mysql --save # mysql2 is also supported\n")),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"pg")," driver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install pg --save\n")),(0,r.kt)("h2",{id:"configuration-and-testing"},"Configuration and Testing"),(0,r.kt)("p",null,"When running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Environment variables."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config/test.yml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"config/test.json"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config/default.yml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"config/default.json"),".")),(0,r.kt)("p",null,"For example, if the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," is defined, Foal will use its value. Otherwise, it will look at the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",(0,r.kt)("inlineCode",{parentName:"p"},"config/")," files."),(0,r.kt)("p",null,"In this way, you can define a default configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.{yml|json}")," file to use both during development and testing and override some settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/test.{yml|json}")," during testing."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You learn more on how configuration works in Foal ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/2.x/architecture/configuration"},"here"))),(0,r.kt)("p",null,"In the example below, we add two new options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dropSchema")," clears the database each time we call ",(0,r.kt)("inlineCode",{parentName:"li"},"createConnection")),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"synchronize")," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"config/test.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example of a test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(async () => {\n    if (connection) {\n      await connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n")))}c.isMDXComponent=!0}}]);