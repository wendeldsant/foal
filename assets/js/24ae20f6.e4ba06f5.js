(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9858],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9492:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"Create Models & Queries"},c=void 0,u={unversionedId:"databases/create-models-and-queries",id:"databases/create-models-and-queries",isDocsHomePage:!1,title:"Create Models & Queries",description:"`shell",source:"@site/docs/databases/create-models-and-queries.md",sourceDirName:"databases",slug:"/databases/create-models-and-queries",permalink:"/docs/databases/create-models-and-queries",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/create-models-and-queries.md",version:"current",frontMatter:{title:"Create Models & Queries"},sidebar:"someSidebar",previous:{title:"SQL Databases",permalink:"/docs/databases/typeorm"},next:{title:"Generate & Run Migrations",permalink:"/docs/databases/generate-and-run-migrations"}},l=[{value:"Entities",id:"entities",children:[]},{value:"Using Entities",id:"using-entities",children:[]},{value:"Queries",id:"queries",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"foal generate entity my-entity\n")),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Simple models are called ",(0,i.kt)("em",{parentName:"p"},"entities")," in TypeORM. You can generate one with the above command."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n")),(0,i.kt)("p",null,"The class ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," represents the database table and its instances represent the table rows."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In FoalTS, entity files should always be named with the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".entity.ts"),". This way the CLI can find the entities when automatically generating migrations.")),(0,i.kt)("h2",{id:"using-entities"},"Using Entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait product.save();\n\nconst products = await Product.find();\n// find by id:\nconst firstProduct = await Product.findOne(1);\nconst chair = await Product.findOne({ name: 'chair' });\n\nawait chair.remove();\n")),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const firstProduct = await Product\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n")))}p.isMDXComponent=!0}}]);