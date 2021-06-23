(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8655],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5018:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],l={title:"TypeORM",sidebar_label:"SQL Databases (TypeORM)"},s=void 0,p={unversionedId:"databases/typeorm",id:"version-1.x/databases/typeorm",isDocsHomePage:!1,title:"TypeORM",description:"FoalTS components using TypeORM officially support the following databases: PostgreSQL, MySQL, MariaDB and SQLite.",source:"@site/versioned_docs/version-1.x/databases/typeorm.md",sourceDirName:"databases",slug:"/databases/typeorm",permalink:"/docs/1.x/databases/typeorm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/typeorm.md",version:"1.x",frontMatter:{title:"TypeORM",sidebar_label:"SQL Databases (TypeORM)"},sidebar:"someSidebar",previous:{title:"Initialization",permalink:"/docs/1.x/architecture/initialization"},next:{title:"Create Models & Queries",permalink:"/docs/1.x/databases/create-models-and-queries"}},c=[{value:"The ORM",id:"the-orm",children:[]},{value:"Use with FoalTS",id:"use-with-foalts",children:[{value:"Initial Configuration",id:"initial-configuration",children:[]},{value:"Packages",id:"packages",children:[]}]},{value:"Database Configuration Examples",id:"database-configuration-examples",children:[{value:"MySQL / MariaDB",id:"mysql--mariadb",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]}]},{value:"Configuration and Testing",id:"configuration-and-testing",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"FoalTS components using TypeORM officially support the following databases: PostgreSQL, MySQL, MariaDB and SQLite"),".")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A simple model:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n")),(0,i.kt)("h2",{id:"the-orm"},"The ORM"),(0,i.kt)("p",null,"FoalTS uses ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"TypeORM")," as default ",(0,i.kt)("em",{parentName:"p"},"Object-Relational Mapping"),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Active_record_pattern"},"Active Record")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"},"Data Mapper")," patterns."),(0,i.kt)("p",null,"Here is a non-exhaustive list of its features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"migrations and automatic migrations generation"),(0,i.kt)("li",{parentName:"ul"},"uni-directional, bi-directional and self-referenced relations"),(0,i.kt)("li",{parentName:"ul"},"eager and lazy relations"),(0,i.kt)("li",{parentName:"ul"},"TypeScript support"),(0,i.kt)("li",{parentName:"ul"},"connection configuration in json / xml / yml / env formats"),(0,i.kt)("li",{parentName:"ul"},"transactions"),(0,i.kt)("li",{parentName:"ul"},"etc")),(0,i.kt)("p",null,"TypeORM supports many SQL databases (MySQL / MariaDB / Postgres / SQLite / Microsoft SQL Server / Oracle / sql.js) as well as the MongoDB NoSQL database."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",(0,i.kt)("a",{parentName:"p",href:"https://typeorm.io/"},"official documentation")," to learn more advanced features.")),(0,i.kt)("h2",{id:"use-with-foalts"},"Use with FoalTS"),(0,i.kt)("p",null,"TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/databases/using-another-orm"},"Using another ORM"),"."),(0,i.kt)("h3",{id:"initial-configuration"},"Initial Configuration"),(0,i.kt)("p",null,"When creating a new project, an ",(0,i.kt)("inlineCode",{parentName:"p"},"SQLite")," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"ormconfig.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"default.json")," located respectively at the root of your project and in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ormconfig.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'sqlite',\n  database: Config.get('database.database'),\n  dropSchema: Config.get('database.dropSchema', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', false)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"default.json (example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": 3001,\n  "settings": {\n    ...\n  },\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n')),(0,i.kt)("h3",{id:"packages"},"Packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install typeorm @foal/typeorm\n")),(0,i.kt)("p",null,"Two packages are required to use TypeORM with FoalTS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The package ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typeorm"},"typeorm")," which is the official one of the ORM. It includes everything you need to create models and make database requests."),(0,i.kt)("li",{parentName:"ul"},"The package ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@foal/typeorm"},"@foal/typeorm")," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.x/authentication-and-access-control/quick-start"},"authentication and authorization system"),".")),(0,i.kt)("h2",{id:"database-configuration-examples"},"Database Configuration Examples"),(0,i.kt)("p",null,"This section shows how to configure ",(0,i.kt)("strong",{parentName:"p"},"MySQL")," or ",(0,i.kt)("strong",{parentName:"p"},"PostgreSQL")," with Foal."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ormconfig.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host'),\n  port: Config.get('database.port'),\n  username: Config.get('database.username'),\n  password: Config.get('database.password'),\n  database: Config.get('database.database'),\n\n  dropSchema: Config.get('database.dropSchema', false),\n  synchronize: Config.get('database.synchronize', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n")),(0,i.kt)("p",null,"With this configuration, database credentials can be provided in a YAML, a JSON or a ",(0,i.kt)("inlineCode",{parentName:"p"},".env "),"configuration file or in environment variables."),(0,i.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="config/default.yml" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n")),(0,i.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="config/default.json" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n')),(0,i.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"DATABASE_HOST=localhost\nDATABASE_PORT=3306\nDATABASE_USERNAME=root\nDATABASE_PASSWORD=password\nDATABASE_DATABASE=my-db\n")),(0,i.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,i.kt)("h3",{id:"mysql--mariadb"},"MySQL / MariaDB"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql3")," drivers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mysql --save # mysql2 is also supported\n")),(0,i.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"pg")," driver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install pg --save\n")),(0,i.kt)("h2",{id:"configuration-and-testing"},"Configuration and Testing"),(0,i.kt)("p",null,"When running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Environment variables."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config/test.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"config/test.json"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config/default.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"config/default.json"),".")),(0,i.kt)("p",null,"For example, if the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," is defined, Foal will use its value. Otherwise, it will look at the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",(0,i.kt)("inlineCode",{parentName:"p"},"config/")," files."),(0,i.kt)("p",null,"In this way, you can define a default configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/default.{yml|json}")," file to use both during development and testing and override some settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"config/test.{yml|json}")," during testing."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You learn more on how configuration works in Foal ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/deployment-and-environments/configuration"},"here"))),(0,i.kt)("p",null,"In the example below, we add two new options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dropSchema")," clears the database each time we call ",(0,i.kt)("inlineCode",{parentName:"li"},"createConnection")),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("inlineCode",{parentName:"li"},"synchronize")," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"config/test.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of a test")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(() => {\n    if (connection) {\n      connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n")))}u.isMDXComponent=!0}}]);