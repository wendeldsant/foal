"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1258],{75782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(74848),r=t(28453);const i={title:"Create Models & Queries"},o=void 0,a={id:"databases/create-models-and-queries",title:"Create Models & Queries",description:"Entities",source:"@site/versioned_docs/version-1.x/databases/create-models-and-queries.md",sourceDirName:"databases",slug:"/databases/create-models-and-queries",permalink:"/es/docs/1.x/databases/create-models-and-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/databases/create-models-and-queries.md",tags:[],version:"1.x",frontMatter:{title:"Create Models & Queries"},sidebar:"someSidebar",previous:{title:"SQL Databases (TypeORM)",permalink:"/es/docs/1.x/databases/typeorm"},next:{title:"Generate & Run Migrations",permalink:"/es/docs/1.x/databases/generate-and-run-migrations"}},d={},c=[{value:"Entities",id:"entities",level:2},{value:"Using Entities",id:"using-entities",level:2},{value:"Queries",id:"queries",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"foal generate entity my-entity\n"})}),"\n",(0,s.jsx)(n.h2,{id:"entities",children:"Entities"}),"\n",(0,s.jsxs)(n.p,{children:["Simple models are called ",(0,s.jsx)(n.em,{children:"entities"})," in TypeORM. You can generate one with the above command."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Product {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n\n  @Column()\n  price: number;\n\n}\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The class ",(0,s.jsx)(n.code,{children:"Product"})," represents the database table and its instances represent the table rows."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["In FoalTS, entity files should always be named with the extension ",(0,s.jsx)(n.code,{children:".entity.ts"}),". This way the CLI can find the entities when automatically generating migrations."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-entities",children:"Using Entities"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { getRepository } from 'typeorm';\n\nconst repository = getRepository(Product);\n\nconst product = new Product();\nproduct.name = 'chair';\nproduct.price = 60;\nawait repository.save(product);\n\nconst products = await repository.find();\n// find by id:\nconst firstProduct = await repository.findOne(1);\nconst chair = await repository.findOne({ name: 'chair' });\n\nawait repository.remove(chair);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"queries",children:"Queries"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { getRepository } from 'typeorm';\n\nconst firstProduct = await getRepository(Product)\n  .createQueryBuilder('product')\n  .where('product.id = :id', { id: 1 })\n  .getOne();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);