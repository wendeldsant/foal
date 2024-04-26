"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3386],{41586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(74848),o=r(28453);const s={title:"Your First Route",id:"tuto-5-our-first-route",slug:"5-our-first-route"},i=void 0,a={id:"tutorials/real-world-example-with-react/tuto-5-our-first-route",title:"Your First Route",description:"The database is now filled with some stories. Let's implement the first route to retrieve them.",source:"@site/versioned_docs/version-3.x/tutorials/real-world-example-with-react/5-our-first-route.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/5-our-first-route",permalink:"/docs/3.x/tutorials/real-world-example-with-react/5-our-first-route",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/5-our-first-route.md",tags:[],version:"3.x",sidebarPosition:5,frontMatter:{title:"Your First Route",id:"tuto-5-our-first-route",slug:"5-our-first-route"},sidebar:"someSidebar",previous:{title:"The Shell Scripts",permalink:"/docs/3.x/tutorials/real-world-example-with-react/4-the-shell-scripts"},next:{title:"API Testing with Swagger",permalink:"/docs/3.x/tutorials/real-world-example-with-react/6-swagger-interface"}},l={},d=[];function c(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The database is now filled with some stories. Let's implement the first route to retrieve them."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"API endpoint"}),(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/api/stories"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GET"})}),(0,n.jsxs)(t.td,{children:["Lists the stories of all users. An optional query parameter ",(0,n.jsx)(t.code,{children:"authorId"})," can be provided to filter the stories to be returned."]})]})})]}),"\n",(0,n.jsx)(t.p,{children:"First, generate the story controller."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"foal generate controller api/stories --register\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A new file appears in the ",(0,n.jsx)(t.code,{children:"api"})," subdirectory. Open it and replace its contents."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n  @Get()\n  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })\n  async readStories(ctx: Context) {\n    const authorId = ctx.request.query.authorId as number|undefined;\n\n    let queryBuilder = Story\n      .createQueryBuilder('story')\n      .leftJoinAndSelect('story.author', 'author')\n      .select([\n        'story.id',\n        'story.title',\n        'story.link',\n        'author.id',\n        'author.name'\n      ]);\n\n    if (authorId !== undefined) {\n      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });\n    }\n\n    const stories = await queryBuilder.getMany();\n\n    return new HttpResponseOK(stories);\n  }\n}\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"readStories"})," method retrieves and returns the stories along with some information about their authors."]}),"\n",(0,n.jsx)(t.p,{children:"When requesting this endpoint, the response body will look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "title": "How to build a simple to-do list",\n    "link": "https://foalts.org/docs/tutorials/simple-todo-list/1-installation",\n    "author": {\n      "id": 1,\n      "name": "John"\n    }\n  },\n  {\n    "id": 2,\n    "title": "FoalTS architecture overview",\n    "link": "https://foalts.org/docs/architecture/architecture-overview",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n  {\n    "id": 3,\n    "title": "Authentication with Foal",\n    "link": "https://foalts.org/docs/authentication/quick-start",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n]\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);