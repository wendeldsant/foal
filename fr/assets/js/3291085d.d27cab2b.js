"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Le Mod\xe8le Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},i=void 0,s={unversionedId:"tutorials/simple-todo-list/tuto-3-the-todo-model",id:"tutorials/simple-todo-list/tuto-3-the-todo-model",title:"Le Mod\xe8le Todo",description:"L'\xe9tape suivante consiste \xe0 s'occuper de la base de donn\xe9es. Par d\xe9faut, chaque nouveau projet dans FoalTS est configur\xe9 pour utiliser une base de donn\xe9es SQLite car elle ne n\xe9cessite aucune installation suppl\xe9mentaire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/3-the-todo-model.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/3-the-todo-model",permalink:"/fr/docs/tutorials/simple-todo-list/3-the-todo-model",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/3-the-todo-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Le Mod\xe8le Todo",id:"tuto-3-the-todo-model",slug:"3-the-todo-model"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/tutorials/simple-todo-list/2-introduction"},next:{title:"Le Script Shell create-todo",permalink:"/fr/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"}},l={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L'\xe9tape suivante consiste \xe0 s'occuper de la base de donn\xe9es. Par d\xe9faut, chaque nouveau projet dans FoalTS est configur\xe9 pour utiliser une base de donn\xe9es ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLite")," car elle ne n\xe9cessite aucune installation suppl\xe9mentaire."),(0,r.kt)("p",null,"Commen\xe7ons par cr\xe9er votre premier mod\xe8le. Le CLI fournit une commande utile pour g\xe9n\xe9rer un nouveau fichier avec un mod\xe8le vide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"foal generate entity todo\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"FoalTS utilise ",(0,r.kt)("a",{parentName:"p",href:"http://typeorm.io"},"TypeORM")," comme ORM par d\xe9faut dans toute nouvelle application. De cette fa\xe7on, vous n'avez rien \xe0 configurer et vous pouvez d\xe9marrer un projet rapidement. Toutefois, si vous le souhaitez, vous pouvez toujours choisir d'en ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/databases/using-another-orm"},"utiliser un autre")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mikro-orm.io/"},"MikroORM"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"Mongoose"),", etc), le code du framework \xe9tant ind\xe9pendant de l'ORM.")),(0,r.kt)("p",null,"Ouvrez le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"todo.entity.ts")," dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/entities")," et ajoutez une colonne ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n\n")),(0,r.kt)("p",null,"Cette classe est la repr\xe9sentation de la table SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"todo"),". Actuellement, cette table n'existe pas dans la base de donn\xe9es. Vous allez devoir la cr\xe9er."),(0,r.kt)("p",null,"Vous pouvez le faire manuellement, en utilisant un logiciel de base de donn\xe9es par exemple, ou utiliser les migrations, une fa\xe7on programmatique de mettre \xe0 jour un sch\xe9ma de base de donn\xe9es. L'avantage de l'utilisation des migrations est que vous pouvez cr\xe9er, mettre \xe0 jour et supprimer vos tables directement \xe0 partir de la d\xe9finition de vos entit\xe9s. Elles permettent \xe9galement de s'assurer que tous vos environnements (prod, dev) et vos co-d\xe9veloppeurs ont les m\xeames d\xe9finitions de tables."),(0,r.kt)("p",null,"Voyons comment les utiliser."),(0,r.kt)("p",null,"Ex\xe9cutez d","\u2019","abord la commande suivante pour g\xe9n\xe9rer votre fichier de migration. TypeORM va comparer votre sch\xe9ma de base de donn\xe9es actuel avec la d\xe9finition de vos entit\xe9s et g\xe9n\xe9rer les requ\xeates SQL appropri\xe9es."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run makemigrations\n")),(0,r.kt)("p",null,"Un nouveau fichier appara\xeet dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"src/migrations/"),". Ouvrez-le."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562755564200 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`DROP TABLE "user"`, undefined);\n        await queryRunner.query(`DROP TABLE "todo"`, undefined);\n    }\n\n}\n\n')),(0,r.kt)("p",null,"La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," contient toutes les requ\xeates SQL qui seront ex\xe9cut\xe9es pendant la migration."),(0,r.kt)("p",null,"Ex\xe9cutez ensuite la migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run migrations\n")),(0,r.kt)("p",null,"TypeORM examine toutes les migrations qui ont \xe9t\xe9 ex\xe9cut\xe9es pr\xe9c\xe9demment (aucune dans ce cas) et ex\xe9cute les nouvelles."),(0,r.kt)("p",null,"Votre base de donn\xe9es (",(0,r.kt)("inlineCode",{parentName:"p"},"db.sqlite3"),") contient maintenant une nouvelle table nomm\xe9e ",(0,r.kt)("inlineCode",{parentName:"p"},"todo")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement utiliser l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"synchronize")," dans votre fichier de configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.json"),". Lorsque cette option est d\xe9finie sur ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", le sch\xe9ma de la base de donn\xe9es est automatiquement cr\xe9\xe9 \xe0 partir de la d\xe9finition des entit\xe9s \xe0 chaque lancement de l'application. Vous n'avez pas besoin de migrations dans ce cas. Cependant, bien que ce comportement puisse \xeatre utile pendant le d\xe9bogage et le d\xe9veloppement, il n'est pas adapt\xe9 \xe0 un environnement de production (vous pourriez perdre des donn\xe9es de production).")))}d.isMDXComponent=!0}}]);