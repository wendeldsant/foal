"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Los Modelos User y Story",id:"tuto-3-the-models",slug:"3-the-models"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-3-the-models",id:"version-3.x/tutorials/real-world-example-with-react/tuto-3-the-models",title:"Los Modelos User y Story",description:"Ahora que la conexi\xf3n a la base de datos est\xe1 establecida, puede crear sus dos entidades User y Story.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/tutorials/real-world-example-with-react/3-the-models.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/3-the-models",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/3-the-models",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/3-the-models.md",tags:[],version:"3.x",sidebarPosition:3,frontMatter:{title:"Los Modelos User y Story",id:"tuto-3-the-models",slug:"3-the-models"},sidebar:"someSidebar",previous:{title:"Base de Datos (configuraci\xf3n)",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/2-database-set-up"},next:{title:"Los Scripts Shell",permalink:"/es/docs/3.x/tutorials/real-world-example-with-react/4-the-shell-scripts"}},s={},d=[{value:"El modelo <code>User</code>",id:"el-modelo-user",level:2},{value:"El modelo <code>Story</code>",id:"el-modelo-story",level:2},{value:"Ejecute las migraciones",id:"ejecute-las-migraciones",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ahora que la conexi\xf3n a la base de datos est\xe1 establecida, puede crear sus dos entidades ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Story"),"."),(0,r.kt)("p",null,"La entidad ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," ser\xe1 el modelo utilizado por el framework para identificar a los usuarios y la entidad ",(0,r.kt)("inlineCode",{parentName:"p"},"Story")," representar\xe1 las publicaciones de los usuarios."),(0,r.kt)("h2",{id:"el-modelo-user"},"El modelo ",(0,r.kt)("inlineCode",{parentName:"h2"},"User")),(0,r.kt)("p",null,"Abra el archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"user.entity.ts")," del directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," y a\xf1ada cuatro nuevas propiedades a su modelo: ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar"),"."),(0,r.kt)("p",null,"La columna ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," contendr\xe1 las rutas de acceso a las im\xe1genes del perfil."),(0,r.kt)("p",null,"Tambi\xe9n tendr\xe1 que exportar un modelo adicional ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," del paquete ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),". No necesita preocuparse por ello ahora, se utilizar\xe1 m\xe1s adelante en el tutorial cuando a\xf1ada la autenticaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\n// This line is required. It will be used to create the SQL session table later in the tutorial.\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,r.kt)("h2",{id:"el-modelo-story"},"El modelo ",(0,r.kt)("inlineCode",{parentName:"h2"},"Story")),(0,r.kt)("p",null,"A continuaci\xf3n, cree su segunda entidad."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal generate entity story\n")),(0,r.kt)("p",null,"Abra el nuevo archivo y a\xf1ada tres nuevas propiedades: ",(0,r.kt)("inlineCode",{parentName:"p"},"autor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"t\xedtulo")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"enlace"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';\nimport { User } from './user.entity';\n\n@Entity()\nexport class Story extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @ManyToOne(type => User, { nullable: false })\n  author: User;\n\n  @Column()\n  title: string;\n\n  @Column()\n  link: string;\n\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Por defecto, TypeORM permite que las relaciones ",(0,r.kt)("em",{parentName:"p"},"many-to-one")," sean anulables. La opci\xf3n pasada al decorador especifica que \xe9sta no puede serlo.")),(0,r.kt)("h2",{id:"ejecute-las-migraciones"},"Ejecute las migraciones"),(0,r.kt)("p",null,"Por \xfaltimo, cree las tablas en la base de datos. Genere las migraciones a partir de las entidades y ejec\xfatelas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,r.kt)("p",null,"Se a\xf1aden tres nuevas tablas a la base de datos: las tablas ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"story")," y una tabla ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             user                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| email      | varchar   | UNIQUE NOT NULL                     |\n| password   | varchar   | NOT NULL                            |\n| name       | varchar   | NOT NULL                            |\n| avatar     | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------+-----------+-------------------------------------+\n|                             story                            |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| authorId   | integer   | NOT NULL                            |\n| title      | varchar   | NOT NULL                            |\n| link       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")))}u.isMDXComponent=!0}}]);