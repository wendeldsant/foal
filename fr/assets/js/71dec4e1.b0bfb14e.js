"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Cr\xe9er des Mod\xe8les & Requ\xeates"},o=void 0,s={unversionedId:"databases/create-models-and-queries",id:"databases/create-models-and-queries",title:"Cr\xe9er des Mod\xe8les & Requ\xeates",description:"Entities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/databases/create-models-and-queries.md",sourceDirName:"databases",slug:"/databases/create-models-and-queries",permalink:"/fr/docs/databases/create-models-and-queries",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/create-models-and-queries.md",tags:[],version:"current",frontMatter:{title:"Cr\xe9er des Mod\xe8les & Requ\xeates"},sidebar:"someSidebar",previous:{title:"Bases de Donn\xe9es SQL",permalink:"/fr/docs/databases/typeorm"},next:{title:"G\xe9n\xe9rer & Ex\xe9cuter des Migrations",permalink:"/fr/docs/databases/generate-and-run-migrations"}},c={},l=[{value:"Entities",id:"entities",level:2},{value:"Using Entities",id:"using-entities",level:2},{value:"Queries",id:"queries",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"foal generate entity my-entity\n")),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Simple models are called ",(0,a.kt)("em",{parentName:"p"},"entities")," in TypeORM. You can generate one with the above command."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n")),(0,a.kt)("p",null,"The class ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," represents the database table and its instances represent the table rows."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In FoalTS, entity files should always be named with the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".entity.ts"),". This way the CLI can find the entities when automatically generating migrations.")),(0,a.kt)("h2",{id:"using-entities"},"Using Entities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait product.save();\n\nconst products = await Product.find();\n// find by id:\nconst firstProduct = await Product.findOne(1);\nconst chair = await Product.findOne({ name: 'chair' });\n\nawait chair.remove();\n")),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const firstProduct = await Product\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n")))}d.isMDXComponent=!0}}]);