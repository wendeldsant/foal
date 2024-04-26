"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7397],{36096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const o={title:"Using Another ORM",sidebar_label:"Introduction"},r=void 0,a={id:"databases/other-orm/introduction",title:"Using Another ORM",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/databases/other-orm/introduction.md",sourceDirName:"databases/other-orm",slug:"/databases/other-orm/introduction",permalink:"/id/docs/3.x/databases/other-orm/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/databases/other-orm/introduction.md",tags:[],version:"3.x",frontMatter:{title:"Using Another ORM",sidebar_label:"Introduction"},sidebar:"someSidebar",previous:{title:"NoSQL",permalink:"/id/docs/3.x/databases/typeorm/mongodb"},next:{title:"Prisma",permalink:"/id/docs/3.x/databases/other-orm/prisma"}},l={},d=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",level:2},{value:"Examples",id:"examples",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."}),"\n",(0,s.jsx)(n.p,{children:"To do so, you will have to remove TypeORM and all its utilities."}),"\n",(0,s.jsx)(n.h2,{id:"uninstall-typeorm",children:"Uninstall TypeORM"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First uninstall the dependencies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm uninstall typeorm @foal/typeorm\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Then remove the directory ",(0,s.jsx)(n.code,{children:"src/app/entities"})," and the file ",(0,s.jsx)(n.code,{children:"src/db.ts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remove or replace the script ",(0,s.jsx)(n.code,{children:"create-user"})," in ",(0,s.jsx)(n.code,{children:"src/app/scripts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the file ",(0,s.jsx)(n.code,{children:"src/index.ts"}),", delete the connection creation called ",(0,s.jsx)(n.code,{children:"dataSource.initialize()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Finally, remove in ",(0,s.jsx)(n.code,{children:"package.json"})," the scripts to manage migrations."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/id/docs/3.x/databases/other-orm/prisma",children:"Prisma"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(n.p,{children:"When using another ORM than TypeORM some features are not available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.em,{children:"Groups & Permissions"})," system,"]}),"\n",(0,s.jsxs)(n.li,{children:["and the ",(0,s.jsx)(n.code,{children:"foal g rest-api"})," command."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);