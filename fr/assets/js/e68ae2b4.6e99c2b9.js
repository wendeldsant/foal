"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[864],{66058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(74848),t=r(28453);const i={title:"G\xe9n\xe9rer & Ex\xe9cuter des Migrations",sidebar_label:"Migrations"},s=void 0,o={id:"databases/typeorm/generate-and-run-migrations",title:"G\xe9n\xe9rer & Ex\xe9cuter des Migrations",description:"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/databases/typeorm/generate-and-run-migrations.md",sourceDirName:"databases/typeorm",slug:"/databases/typeorm/generate-and-run-migrations",permalink:"/fr/docs/databases/typeorm/generate-and-run-migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/typeorm/generate-and-run-migrations.md",tags:[],version:"current",frontMatter:{title:"G\xe9n\xe9rer & Ex\xe9cuter des Migrations",sidebar_label:"Migrations"},sidebar:"someSidebar",previous:{title:"Mod\xe8les & Requ\xeates",permalink:"/fr/docs/databases/typeorm/create-models-and-queries"},next:{title:"NoSQL",permalink:"/fr/docs/databases/typeorm/mongodb"}},d={},c=[{value:"The Commands",id:"the-commands",level:2},{value:"Generating Migrations Automatically",id:"generating-migrations-automatically",level:3},{value:"Run the migrations",id:"run-the-migrations",level:3},{value:"Revert the last migration",id:"revert-the-last-migration",level:3},{value:"A Complete Example",id:"a-complete-example",level:3},{value:"The <code>synchronize</code> and <code>dropSchema</code> options",id:"the-synchronize-and-dropschema-options",level:2},{value:"Advanced",id:"advanced",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Database migrations are a way of propagating changes you make to your entities into your database schema. The changes you make to your models (adding a field, deleting an entity, etc.) do not automatically modify your database. You have to do it yourself."}),"\n",(0,a.jsx)(n.p,{children:"You have two options: update the database schema manually (using database software, for example) or run migrations."}),"\n",(0,a.jsxs)(n.p,{children:["Migrations are a programmatic technique for updating or reverting a database schema in a predictable and repeatable way. They are defined with classes, each of which has an ",(0,a.jsx)(n.code,{children:"up"})," method and a ",(0,a.jsx)(n.code,{children:"down"})," method. The first one contains SQL queries to update the database schema to reflect the new models. The second contains SQL queries to revert the changes made by the ",(0,a.jsx)(n.code,{children:"up"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Theses classes are located in separate files in the ",(0,a.jsx)(n.code,{children:"src/migrations"})," directory."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Example of a migration file"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { MigrationInterface, QueryRunner } from \'typeorm\';\n\nexport class PostRefactoringTIMESTAMP implements MigrationInterface {\n    \n    async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);\n    }\n\n    async down(queryRunner: QueryRunner): Promise<any> { \n        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`); // reverts things made in "up" method\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"the-commands",children:"The Commands"}),"\n",(0,a.jsx)(n.h3,{id:"generating-migrations-automatically",children:"Generating Migrations Automatically"}),"\n",(0,a.jsx)(n.p,{children:"Usually, you do not need to write migrations manually. TypeORM offers a powerful feature to generate your migration files based on the changes you make to your entities."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm run makemigrations\n"})}),"\n",(0,a.jsx)(n.h3,{id:"run-the-migrations",children:"Run the migrations"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm run migrations\n"})}),"\n",(0,a.jsx)(n.h3,{id:"revert-the-last-migration",children:"Revert the last migration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm run revertmigration\n"})}),"\n",(0,a.jsx)(n.h3,{id:"a-complete-example",children:"A Complete Example"}),"\n",(0,a.jsxs)(n.p,{children:["\xa01. Create a new ",(0,a.jsx)(n.code,{children:"User"})," entity."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\xa02. Make the migration file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run makemigrations\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A new file ",(0,a.jsx)(n.code,{children:"xxx-migration.ts"})," appears in ",(0,a.jsx)(n.code,{children:"src/directory"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1561976236112 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`DROP TABLE "user"`);\n    }\n\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"\xa03. Run the migration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run migrations\n"})}),"\n",(0,a.jsx)(n.p,{children:"\xa04. Add new columns to the entity."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  async setPassword(password: string) {\n    this.password = await hashPassword(password);\n  }\n\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\xa05. Generate another migration file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run makemigrations\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Another file ",(0,a.jsx)(n.code,{children:"xxx-migration.ts"})," appears in ",(0,a.jsx)(n.code,{children:"src/directory"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1561981516514 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_ed766a9782779b8390a2a81f444" UNIQUE ("email"))`);\n        await queryRunner.query(`INSERT INTO "temporary_user"("id") SELECT "id" FROM "user"`);\n        await queryRunner.query(`DROP TABLE "user"`);\n        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<any> {\n        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);\n        await queryRunner.query(`INSERT INTO "user"("id") SELECT "id" FROM "temporary_user"`);\n        await queryRunner.query(`DROP TABLE "temporary_user"`);\n    }\n\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"\xa06. Run the migration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm run migrations\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"the-synchronize-and-dropschema-options",children:["The ",(0,a.jsx)(n.code,{children:"synchronize"})," and ",(0,a.jsx)(n.code,{children:"dropSchema"})," options"]}),"\n",(0,a.jsx)(n.p,{children:"These two options are particularly useful for testing."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"synchronize"})," - Indicates if database schema should be auto created on every application launch."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dropSchema"})," - Drops the schema each time connection is being established."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Using the ",(0,a.jsx)(n.code,{children:"synchronize"})," option for production is not recommended as you could loose data by mistake."]}),"\n",(0,a.jsx)(n.h2,{id:"advanced",children:"Advanced"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"http://typeorm.io/#/migrations",children:"TypeORM documentation"})," gives more details on how to write migrations."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var a=r(96540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);