"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create Models & Queries"},i=void 0,s={unversionedId:"databases/create-models-and-queries",id:"version-1.x/databases/create-models-and-queries",title:"Create Models & Queries",description:"Entities",source:"@site/versioned_docs/version-1.x/databases/create-models-and-queries.md",sourceDirName:"databases",slug:"/databases/create-models-and-queries",permalink:"/fr/docs/1.x/databases/create-models-and-queries",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/create-models-and-queries.md",tags:[],version:"1.x",frontMatter:{title:"Create Models & Queries"},sidebar:"someSidebar",previous:{title:"SQL Databases (TypeORM)",permalink:"/fr/docs/1.x/databases/typeorm"},next:{title:"Generate & Run Migrations",permalink:"/fr/docs/1.x/databases/generate-and-run-migrations"}},l={},c=[{value:"Entities",id:"entities",level:2},{value:"Using Entities",id:"using-entities",level:2},{value:"Queries",id:"queries",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"foal generate entity my-entity\n")),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Simple models are called ",(0,a.kt)("em",{parentName:"p"},"entities")," in TypeORM. You can generate one with the above command."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n")),(0,a.kt)("p",null,"The class ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," represents the database table and its instances represent the table rows."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In FoalTS, entity files should always be named with the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".entity.ts"),". This way the CLI can find the entities when automatically generating migrations.")),(0,a.kt)("h2",{id:"using-entities"},"Using Entities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getRepository } from 'typeorm';\n\nconst repository = getRepository(Product);\n\nconst product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait repository.save(product);\n\nconst products = await repository.find();\n// find by id:\nconst firstProduct = await repository.findOne(1);\nconst chair = await repository.findOne({ name: 'chair' });\n\nawait repository.remove(chair);\n")),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getRepository } from 'typeorm';\n\nconst firstProduct = await getRepository(Product)\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n")))}u.isMDXComponent=!0}}]);