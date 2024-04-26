"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4039],{12558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(74848),i=s(28453);const r={title:"Version 3.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.0-release-notes.png",tags:["release"]},o=void 0,a={permalink:"/id/blog/2022/11/01/version-3.0-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-11-01-version-3.0-release-notes.md",source:"@site/blog/2022-11-01-version-3.0-release-notes.md",title:"Version 3.0 release notes",description:"Banner",date:"2022-11-01T00:00:00.000Z",formattedDate:"1 November 2022",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:6.72,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.0-release-notes.png",tags:["release"]},unlisted:!1,prevItem:{title:"Version 3.1 release notes",permalink:"/id/blog/2022/11/28/version-3.1-release-notes"},nextItem:{title:"Version 2.11 release notes",permalink:"/id/blog/2022/10/09/version-2.11-release-notes"}},l={authorsImageUrls:[void 0]},d=[{value:"Full support of TypeORM v0.3",id:"full-support-of-typeorm-v03",level:2},{value:"Code simplified",id:"code-simplified",level:2},{value:"Authentication",id:"authentication",level:3},{value:"File upload",id:"file-upload",level:3},{value:"Database models",id:"database-models",level:3},{value:"Better typing",id:"better-typing",level:2},{value:"Validation with AJV",id:"validation-with-ajv",level:3},{value:"File upload",id:"file-upload-1",level:3},{value:"Authentication",id:"authentication-1",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Closer to JS ecosystem standards",id:"closer-to-js-ecosystem-standards",level:2},{value:"Development command",id:"development-command",level:3},{value:"Configuration through environment variables",id:"configuration-through-environment-variables",level:3},{value:"<code>null</code> vs <code>undefined</code> values",id:"null-vs-undefined-values",level:3},{value:"More open to other ORMs",id:"more-open-to-other-orms",level:2},{value:"Shell scripts",id:"shell-scripts",level:3},{value:"Permission system",id:"permission-system",level:3},{value:"Smaller AWS S3 package",id:"smaller-aws-s3-package",level:2},{value:"Dependencies updated and support of Node latest versions",id:"dependencies-updated-and-support-of-node-latest-versions",level:2},{value:"Some bug fixes",id:"some-bug-fixes",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Banner",src:s(69882).A+"",width:"914",height:"315"})}),"\n",(0,t.jsxs)(n.p,{children:["Version 3.0 of ",(0,t.jsx)(n.a,{href:"https://foalts.org/",children:"Foal"})," is finally there!"]}),"\n",(0,t.jsxs)(n.p,{children:["It's been a long work and I'm excited to share with you the new features of the framework \ud83c\udf89 . The upgrading guide can be found ",(0,t.jsx)(n.a,{href:"https://foalts.org/docs/3.x/upgrade-to-v3/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here are the new features and improvements of version 3!"}),"\n",(0,t.jsx)(n.h2,{id:"full-support-of-typeorm-v03",children:"Full support of TypeORM v0.3"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"For those new to Foal, TypeORM is the default ORM used in all new projects. But you can use any other ORM or query builder if you want, as the core framework is ORM independent."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"TypeORM v0.3 provides greater typing safety and this is something that will be appreciated when moving to the new version of Foal."}),"\n",(0,t.jsxs)(n.p,{children:["The version 0.3 of TypeORM has a lot of changes compared to the version 0.2 though. Features such as the ",(0,t.jsx)(n.code,{children:"ormconfig.json"})," file have been removed and functions such as ",(0,t.jsx)(n.code,{children:"createConnection"}),", ",(0,t.jsx)(n.code,{children:"getManager"})," or ",(0,t.jsx)(n.code,{children:"getRepository"})," have been deprecated."]}),"\n",(0,t.jsxs)(n.p,{children:["A lot of work has been done to make sure that ",(0,t.jsx)(n.code,{children:"@foal/typeorm"}),", new projects generated by the CLI and examples in the documentation use version 0.3 of TypeORM without relying on deprecated functions or patterns."]}),"\n",(0,t.jsxs)(n.p,{children:["In particular, the connection to the database is now managed by a file ",(0,t.jsx)(n.code,{children:"src/db.ts"})," that replaces the older ",(0,t.jsx)(n.code,{children:"ormconfig.json"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"code-simplified",children:"Code simplified"}),"\n",(0,t.jsx)(n.p,{children:"Some parts of the framework have been simplified to require less code and make it more understandable."}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@UseSessions"})," and ",(0,t.jsx)(n.code,{children:"@JWTRequired"})," authentication hooks called obscure functions such as ",(0,t.jsx)(n.code,{children:"fetchUser"}),", ",(0,t.jsx)(n.code,{children:"fetchUserWithPermissions"})," to populate the ",(0,t.jsx)(n.code,{children:"ctx.user"})," property. The real role of these functions was not clear and a newcomer to the framework could wonder what they were for."]}),"\n",(0,t.jsx)(n.p,{children:"This is why these functions have been removed and replaced by direct calls to database models."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Version 2\n@UseSessions({ user: fetchUser(User) })\n@JWTRequired({ user: fetchUserWithPermissions(User) })\n\n// Version 3\n@UseSessions({ user: (id: number) => User.findOneBy({ id }) })\n@JWTRequired({ user: (id: number) => User.findOneWithPermissionsBy({ id }) })\n"})}),"\n",(0,t.jsx)(n.h3,{id:"file-upload",children:"File upload"}),"\n",(0,t.jsxs)(n.p,{children:["When uploading files in a ",(0,t.jsx)(n.em,{children:"multipart/form-data"})," request, it was not allowed to pass optional fields. This is now possible."]}),"\n",(0,t.jsxs)(n.p,{children:["The interface of the ",(0,t.jsx)(n.code,{children:"@ValidateMultipartFormDataBody"})," hook, renamed to ",(0,t.jsx)(n.code,{children:"@ParseAndValidateFiles"})," to be more understandable for people who don't know the HTTP protocol handling the upload, has been simplified."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Examples with only files"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Version 2\n@ValidateMultipartFormDataBody({\n  files: {\n    profile: { required: true }\n  }\n})\n\n// Version 3\n@ParseAndValidateFiles({\n  profile: { required: true }\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Examples with files and fields"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Version 2\n@ValidateMultipartFormDataBody({\n  files: {\n    profile: { required: true }\n  }\n  fields: {\n    description: { type: 'string' }\n  }\n})\n\n// Version 3\n@ParseAndValidateFiles(\n  {\n    profile: { required: true }\n  },\n  // The second parameter is optional\n  // and is used to add fields. It expects an AJV object.\n  {\n    type: 'object',\n    properties: {\n      description: { type: 'string' }\n    },\n    required: ['description'],\n    additionalProperties: false\n  }\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"database-models",children:"Database models"}),"\n",(0,t.jsxs)(n.p,{children:["Using functions like ",(0,t.jsx)(n.code,{children:"getRepository"})," or ",(0,t.jsx)(n.code,{children:"getManager"})," to manipulate data in a database is not necessarily obvious to newcomers. It adds complexity that is not necessary for small or medium sized projects. Most frameworks prefer to use the Active Record pattern for simplicity."]}),"\n",(0,t.jsxs)(n.p,{children:["This is why, from version 3 and to take into account that TypeORM v0.3 no longer uses a global connection, the examples in the documentation and the generators will extend all the models from ",(0,t.jsx)(n.code,{children:"BaseEntity"}),". Of course, it will still be possible to use the functions below if desired."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Version 2\n@Entity()\nclass User {}\n\nconst user = getRepository(User).create();\nawait getRepository(User).save(user);\n\n// Version 3\n@Entity()\nclass User extends BaseEntity {}\n\nconst user = new User();\nawait user.save();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"better-typing",children:"Better typing"}),"\n",(0,t.jsx)(n.p,{children:"The use of TypeScript types has been improved and some parts of the framework ensure better type safety."}),"\n",(0,t.jsx)(n.h3,{id:"validation-with-ajv",children:"Validation with AJV"}),"\n",(0,t.jsxs)(n.p,{children:["Foal's version uses ",(0,t.jsx)(n.code,{children:"ajv@8"})," which allows you to bind a TypeScript type with a JSON schema object. To do this, you can import the generic type ",(0,t.jsx)(n.code,{children:"JSONSchemaType"})," to build the interface of the schema object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { JSONSchemaType } from 'ajv';\n\ninterface MyData {\n  foo: number;\n  bar?: string\n}\n\nconst schema: JSONSchemaType<MyData> = {\n  type: 'object',\n  properties: {\n    foo: { type: 'integer' },\n    bar: { type: 'string', nullable: true }\n  },\n  required: ['foo'],\n  additionalProperties: false\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"file-upload-1",children:"File upload"}),"\n",(0,t.jsxs)(n.p,{children:["In version 2, handling file uploads in the controller was tedious because all types were ",(0,t.jsx)(n.code,{children:"any"}),". Starting with version 3, it is no longer necessary to cast the types to ",(0,t.jsx)(n.code,{children:"File"})," or ",(0,t.jsx)(n.code,{children:"File[]"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Version 2\nconst name = ctx.request.body.fields.name;\nconst file = ctx.request.body.files.avatar as File;\nconst files = ctx.request.body.files.images as File[];\n\n// After\nconst name = ctx.request.body.name;\n// file is of type \"File\"\nconst file = ctx.files.get('avatar')[0];\n// files is of type \"Files\"\nconst files = ctx.files.get('images');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authentication-1",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In version 2, the ",(0,t.jsx)(n.code,{children:"user"})," option of ",(0,t.jsx)(n.code,{children:"@UseSessions"})," and ",(0,t.jsx)(n.code,{children:"@JWTRequired"})," expected a function with this signature:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"(id: string|number, services: ServiceManager) => Promise<any>;\n"})}),"\n",(0,t.jsx)(n.p,{children:"There was no way to guess and guarantee the type of the user ID and the function had to check and convert the type itself if necessary."}),"\n",(0,t.jsxs)(n.p,{children:["The returned type was also very permissive (type ",(0,t.jsx)(n.code,{children:"any"}),") preventing us from detecting silly errors such as confusion between ",(0,t.jsx)(n.code,{children:"null"})," and ",(0,t.jsx)(n.code,{children:"undefined"})," values."]}),"\n",(0,t.jsxs)(n.p,{children:["In version 3, the hooks have been added a new ",(0,t.jsx)(n.code,{children:"userIdType"})," option to check and convert the JavaScript type if necessary and force the TypeScript type of the function. The returned type is also safer and corresponds to the type of ",(0,t.jsx)(n.code,{children:"ctx.user"})," which is no longer ",(0,t.jsx)(n.code,{children:"any"})," but ",(0,t.jsx)(n.code,{children:"{ [key : string] : any } | null"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example where the ID is a string"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired({\n  user: (id: string) => User.findOneBy({ id });\n  userIdType: 'string',\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example where the ID is a number"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired({\n  user: (id: number) => User.findOneBy({ id });\n  userIdType: 'number',\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the value of ",(0,t.jsx)(n.code,{children:"userIdType"})," is a number, so we can simply write this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"@JWTRequired({\n  user: (id: number) => User.findOneBy({ id });\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"graphql",children:"GraphQL"}),"\n",(0,t.jsxs)(n.p,{children:["In version 2, GraphQL schemas were of type ",(0,t.jsx)(n.code,{children:"any"}),". In version 3, they are all based on the ",(0,t.jsx)(n.code,{children:"GraphQLSchema"})," interface."]}),"\n",(0,t.jsx)(n.h2,{id:"closer-to-js-ecosystem-standards",children:"Closer to JS ecosystem standards"}),"\n",(0,t.jsx)(n.p,{children:"Some parts have been modified to get closer to the JS ecosystem standards. In particular:"}),"\n",(0,t.jsx)(n.h3,{id:"development-command",children:"Development command"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"npm run develop"})," has been renamed to ",(0,t.jsx)(n.code,{children:"npm run dev"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-through-environment-variables",children:"Configuration through environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["When two values of the same variable are provided by a ",(0,t.jsx)(n.code,{children:".env"})," file and an environment variable, then the value of the environment is used (the behavior is similar to that of the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv"})," library)."]}),"\n",(0,t.jsxs)(n.h3,{id:"null-vs-undefined-values",children:[(0,t.jsx)(n.code,{children:"null"})," vs ",(0,t.jsx)(n.code,{children:"undefined"})," values"]}),"\n",(0,t.jsxs)(n.p,{children:["When the request has no session or the user is not authenticated, the values of ",(0,t.jsx)(n.code,{children:"ctx.session"})," and ",(0,t.jsx)(n.code,{children:"ctx.user"})," are ",(0,t.jsx)(n.code,{children:"null"})," and no longer ",(0,t.jsx)(n.code,{children:"undefined"}),". This makes sense from a semantic point of view, and it also simplifies the user assignment from the ",(0,t.jsx)(n.code,{children:"find"})," functions of popular ORMs (Prisma, TypeORM, Mikro-ORM). They all return ",(0,t.jsx)(n.code,{children:"null"})," when no value is found."]}),"\n",(0,t.jsx)(n.h2,{id:"more-open-to-other-orms",children:"More open to other ORMs"}),"\n",(0,t.jsx)(n.p,{children:"TypeORM is the default ORM used in the documentation examples and in the projects generated by the CLI. But it is quite possible to use another ORM or query generator with Foal. For example, the authentication system (with sessions or JWT) makes no assumptions about database access."}),"\n",(0,t.jsx)(n.p,{children:"Some parts of the framework were still a bit tied to TypeORM in version 2. Version 3 fixed this."}),"\n",(0,t.jsx)(n.h3,{id:"shell-scripts",children:"Shell scripts"}),"\n",(0,t.jsxs)(n.p,{children:["When running the ",(0,t.jsx)(n.code,{children:"foal generate script"})," command, the generated script file no longer contains TypeORM code."]}),"\n",(0,t.jsx)(n.h3,{id:"permission-system",children:"Permission system"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@PermissionRequired"})," option is no longer bound to TypeORM and can be used with any ",(0,t.jsx)(n.code,{children:"ctx.user"})," that implements the ",(0,t.jsx)(n.code,{children:"IUserWithPermissions"})," interface."]}),"\n",(0,t.jsx)(n.h2,{id:"smaller-aws-s3-package",children:"Smaller AWS S3 package"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@foal/aws-s3"})," package is now based on version 3 of the AWS SDK. Thanks to this, the size of the ",(0,t.jsx)(n.code,{children:"node_modules"})," has been reduced by three."]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies-updated-and-support-of-node-latest-versions",children:"Dependencies updated and support of Node latest versions"}),"\n",(0,t.jsx)(n.p,{children:"All Foal's dependencies have been upgraded. The framework is also tested on Node versions 16 and 18."}),"\n",(0,t.jsx)(n.h2,{id:"some-bug-fixes",children:"Some bug fixes"}),"\n",(0,t.jsxs)(n.p,{children:["If the configuration file ",(0,t.jsx)(n.code,{children:"production.js"})," explicitly returns ",(0,t.jsx)(n.code,{children:"undefined"})," for a given key and the ",(0,t.jsx)(n.code,{children:"default.json"})," file returns a defined value for this key, then the value from the ",(0,t.jsx)(n.code,{children:"default.json"})," file is returned by ",(0,t.jsx)(n.code,{children:"Config.get"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},69882:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/banner-feab74b346e06e555f404237e3568185.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);