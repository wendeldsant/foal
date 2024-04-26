"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5273],{48223:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(74848),t=o(28453);const r={title:"El Modelo Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},i=void 0,s={id:"tutorials/simple-todo-list/tuto-3-the-todo-model",title:"El Modelo Todo",description:"El siguiente paso es ocuparse de la base de datos. Por defecto, cada nuevo proyecto en FoalTS est\xe1 configurado para utilizar una base de datos SQLite ya que no requiere ninguna instalaci\xf3n adicional.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/tutorials/simple-todo-list/3-the-todo-model.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/3-the-todo-model",permalink:"/es/docs/3.x/tutorials/simple-todo-list/3-the-todo-model",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/simple-todo-list/3-the-todo-model.md",tags:[],version:"3.x",sidebarPosition:3,frontMatter:{title:"El Modelo Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},sidebar:"someSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/3.x/tutorials/simple-todo-list/2-introduction"},next:{title:"El Script Shell create-todo",permalink:"/es/docs/3.x/tutorials/simple-todo-list/4-the-shell-script-create-todo"}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["El siguiente paso es ocuparse de la base de datos. Por defecto, cada nuevo proyecto en FoalTS est\xe1 configurado para utilizar una base de datos ",(0,a.jsx)(n.code,{children:"SQLite"})," ya que no requiere ninguna instalaci\xf3n adicional."]}),"\n",(0,a.jsx)(n.p,{children:"Empecemos por crear su primer modelo. El CLI proporciona un comando \xfatil para generar un nuevo archivo con un modelo vac\xedo."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"foal generate entity todo\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["FoalTS utiliza ",(0,a.jsx)(n.a,{href:"http://typeorm.io",children:"TypeORM"})," como ORM por defecto en cualquier aplicaci\xf3n nueva. De esta manera, no tiene que configurar nada y puede empezar un proyecto r\xe1pidamente. Sin embargo, si lo desea, puede optar por ",(0,a.jsx)(n.a,{href:"/es/docs/3.x/databases/other-orm/introduction",children:"usar otro"})," (",(0,a.jsx)(n.a,{href:"https://www.prisma.io/",children:"Prisma"}),", ",(0,a.jsx)(n.a,{href:"https://mikro-orm.io/",children:"MikroORM"}),", ",(0,a.jsx)(n.a,{href:"https://mongoosejs.com/",children:"Mongoose"}),", etc), ya que el c\xf3digo del framework es independiente del ORM."]})}),"\n",(0,a.jsxs)(n.p,{children:["Abra el archivo ",(0,a.jsx)(n.code,{children:"todo.entity.ts"})," en el directorio ",(0,a.jsx)(n.code,{children:"src/app/entities"})," y a\xf1ada una columna ",(0,a.jsx)(n.code,{children:"text"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Esta clase es la representaci\xf3n de la tabla SQL ",(0,a.jsx)(n.code,{children:"todo"}),". Actualmente, esta tabla no existe en la base de datos. Tendr\xe1 que crearla."]}),"\n",(0,a.jsx)(n.p,{children:"Puede hacerlo manualmente, utilizando un software de base de datos, por ejemplo, o utilizar migraciones, una forma program\xe1tica de actualizar un esquema de base de datos. La ventaja de utilizar migraciones es que puede crear, actualizar y eliminar sus tablas directamente desde la definici\xf3n de sus entidades. Tambi\xe9n garantizan que todos sus entornos (prod, dev) y codesarrolladores tengan las mismas definiciones de tablas."}),"\n",(0,a.jsx)(n.p,{children:"Veamos c\xf3mo utilizarlos."}),"\n",(0,a.jsx)(n.p,{children:"Primero ejecute el siguiente comando para generar su archivo de migraci\xf3n. TypeORM comparar\xe1 el esquema actual de su base de datos con la definici\xf3n de sus entidades y generar\xe1 las consultas SQL adecuadas."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run makemigrations\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Aparece un nuevo archivo en el directorio ",(0,a.jsx)(n.code,{children:"src/migrations/"}),". \xc1bralo."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562755564200 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`DROP TABLE "user"`, undefined);\n        await queryRunner.query(`DROP TABLE "todo"`, undefined);\n    }\n\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El m\xe9todo ",(0,a.jsx)(n.code,{children:"up"})," contiene todas las consultas SQL que se ejecutar\xe1n durante la migraci\xf3n."]}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, ejecute la migraci\xf3n."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run migrations\n"})}),"\n",(0,a.jsx)(n.p,{children:"TypeORM examina todas las migraciones que se han ejecutado previamente (ninguna en este caso) y ejecuta las nuevas."}),"\n",(0,a.jsxs)(n.p,{children:["Su base de datos (",(0,a.jsx)(n.code,{children:"db.sqlite3"}),") contiene ahora una nueva tabla llamada ",(0,a.jsx)(n.code,{children:"todo"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Tambi\xe9n puede utilizar la opci\xf3n ",(0,a.jsx)(n.code,{children:"database.synchronize"})," en su archivo de configuraci\xf3n ",(0,a.jsx)(n.code,{children:"config/default.json"}),". Cuando se establece en ",(0,a.jsx)(n.code,{children:"true"}),", el esquema de la base de datos se crea autom\xe1ticamente a partir de la definici\xf3n de entidades en cada lanzamiento de la aplicaci\xf3n. En este caso, no es necesario realizar migraciones. Sin embargo, aunque este comportamiento puede ser \xfatil durante la depuraci\xf3n y el desarrollo, no es adecuado para un entorno de producci\xf3n (podr\xeda perder datos de producci\xf3n)."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var a=o(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);