(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2107],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,p=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,c=e.groupId,m=e.className,g=(0,r.Z)(),f=g.tabGroupChoices,k=g.setTabGroupChoices,h=(0,a.useState)(u),b=h[0],y=h[1],N=a.Children.toArray(e.children),v=[];if(null!=c){var w=f[c];null!=w&&w!==b&&d.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var t=e.currentTarget,n=v.indexOf(t),a=d[n].value;y(a),null!=c&&(k(c,a),setTimeout((function(){var e,n,a,r,i,o,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case s:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:T,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},3358:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),l=n(8215),s=["components"],p={title:"TypeORM",sidebar_label:"SQL Databases"},u=void 0,d={unversionedId:"databases/typeorm",id:"databases/typeorm",isDocsHomePage:!1,title:"TypeORM",description:"A simple model:",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/databases/typeorm.md",sourceDirName:"databases",slug:"/databases/typeorm",permalink:"/id/docs/databases/typeorm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/typeorm.md",version:"current",frontMatter:{title:"TypeORM",sidebar_label:"SQL Databases"},sidebar:"someSidebar",previous:{title:"Conversions",permalink:"/id/docs/common/conversions"},next:{title:"Create Models & Queries",permalink:"/id/docs/databases/create-models-and-queries"}},c=[{value:"The ORM",id:"the-orm",children:[]},{value:"Supported Databases",id:"supported-databases",children:[]},{value:"Use with FoalTS",id:"use-with-foalts",children:[{value:"Initial Configuration",id:"initial-configuration",children:[]},{value:"Packages",id:"packages",children:[]}]},{value:"Database Configuration Examples",id:"database-configuration-examples",children:[{value:"MySQL / MariaDB",id:"mysql--mariadb",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]}]},{value:"Configuration and Testing",id:"configuration-and-testing",children:[]}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A simple model:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n")),(0,i.kt)("h2",{id:"the-orm"},"The ORM"),(0,i.kt)("p",null,"FoalTS uses ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM")," as default ",(0,i.kt)("em",{parentName:"p"},"Object-Relational Mapping"),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Active_record_pattern"},"Active Record")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"},"Data Mapper")," patterns."),(0,i.kt)("p",null,"Here is a non-exhaustive list of its features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"migrations and automatic migrations generation"),(0,i.kt)("li",{parentName:"ul"},"uni-directional, bi-directional and self-referenced relations"),(0,i.kt)("li",{parentName:"ul"},"eager and lazy relations"),(0,i.kt)("li",{parentName:"ul"},"TypeScript support"),(0,i.kt)("li",{parentName:"ul"},"connection configuration in json / xml / yml / env formats"),(0,i.kt)("li",{parentName:"ul"},"transactions"),(0,i.kt)("li",{parentName:"ul"},"etc")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"official documentation")," to learn more advanced features.")),(0,i.kt)("h2",{id:"supported-databases"},"Supported Databases"),(0,i.kt)("p",null,"FoalTS supports officially the following databases:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Database"),(0,i.kt)("th",{parentName:"tr",align:null},"Versions"),(0,i.kt)("th",{parentName:"tr",align:null},"Driver"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,i.kt)("td",{parentName:"tr",align:null},"9.6+ (",(0,i.kt)("a",{parentName:"td",href:"https://www.postgresql.org/support/versioning/"},"Version Policy"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pg@8")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},"5.7+ (",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MySQL#Release_history"},"Version Policy"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql@2")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MariaDB"),(0,i.kt)("td",{parentName:"tr",align:null},"10.2+ (",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MariaDB#Versioning"},"Version Policy"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mysql@2")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlite3@5")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"better-sqlite3@7")," (since v2.1)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,i.kt)("td",{parentName:"tr",align:null},"4.0+ (",(0,i.kt)("a",{parentName:"td",href:"https://www.mongodb.com/support-policy"},"Version Policy"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mongodb@3")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"use-with-foalts"},"Use with FoalTS"),(0,i.kt)("p",null,"TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",(0,i.kt)("a",{parentName:"p",href:"/id/docs/databases/using-another-orm"},"Using another ORM"),"."),(0,i.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,i.kt)("p",null,"When creating a new project, an ",(0,i.kt)("inlineCode",{parentName:"p"},"SQLite")," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"default.json")," located respectively at the root of your project and in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ormconfig.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'better-sqlite3',\n  database: Config.get('database.database', 'string'),\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', 'boolean', false)\n}\n")),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  database: ./db.sqlite3\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  database: {\n    database: "./db.sqlite3",\n  }\n}\n')))),(0,i.kt)("h3",{id:"packages"},"Packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install typeorm @foal/typeorm\n")),(0,i.kt)("p",null,"Two packages are required to use TypeORM with FoalTS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The package ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typeorm"},"typeorm")," which is the official one of the ORM. It includes everything you need to create models and make database requests."),(0,i.kt)("li",{parentName:"ul"},"The package ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/typeorm"},"@foal/typeorm")," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",(0,i.kt)("a",{parentName:"li",href:"/id/docs/authentication-and-access-control/quick-start"},"authentication and authorization system"),".")),(0,i.kt)("h2",{id:"database-configuration-examples"},"Database Configuration Examples"),(0,i.kt)("p",null,"This section shows how to configure ",(0,i.kt)("strong",{parentName:"p"},"MySQL")," or ",(0,i.kt)("strong",{parentName:"p"},"PostgreSQL")," with Foal."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ormconfig.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host', 'string'),\n  port: Config.get('database.port', 'number'),\n  username: Config.get('database.username', 'string'),\n  password: Config.get('database.password', 'string'),\n  database: Config.get('database.database', 'string'),\n\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  synchronize: Config.get('database.synchronize', 'boolean', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n")),(0,i.kt)("p",null,"With this configuration, database credentials can be provided in a YAML, a JSON or a ",(0,i.kt)("inlineCode",{parentName:"p"},".env "),"configuration file or in environment variables."),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  // ...\n  database: {\n    host: "localhost",\n    port: 3306,\n    username: "root",\n    password: "password",\n    database: "my-db"\n  }\n}\n')))),(0,i.kt)("h3",{id:"mysql--mariadb"},"MySQL / MariaDB"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql3")," drivers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mysql --save # mysql2 is also supported\n")),(0,i.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"pg")," driver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install pg --save\n")),(0,i.kt)("h2",{id:"configuration-and-testing"},"Configuration and Testing"),(0,i.kt)("p",null,"When running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Environment variables."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config/test.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"config/test.json"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config/default.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"config/default.json"),".")),(0,i.kt)("p",null,"For example, if the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," is defined, Foal will use its value. Otherwise, it will look at the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," files."),(0,i.kt)("p",null,"In this way, you can define a default configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/default.{yml|json}")," file to use both during development and testing and override some settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/test.{yml|json}")," during testing."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You learn more on how configuration works in Foal ",(0,i.kt)("a",{parentName:"p",href:"/id/docs/architecture/configuration"},"here"))),(0,i.kt)("p",null,"In the example below, we add two new options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dropSchema")," clears the database each time we call ",(0,i.kt)("inlineCode",{parentName:"li"},"createConnection")),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("inlineCode",{parentName:"li"},"synchronize")," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"config/test.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of a test")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(async () => {\n    if (connection) {\n      await connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n")))}g.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);