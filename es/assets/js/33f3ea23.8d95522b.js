"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Version 3.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.0-release-notes.png",tags:["release"]},i=void 0,s={permalink:"/es/blog/2022/11/01/version-3.0-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-11-01-version-3.0-release-notes.md",source:"@site/blog/2022-11-01-version-3.0-release-notes.md",title:"Version 3.0 release notes",description:"Banner",date:"2022-11-01T00:00:00.000Z",formattedDate:"1 de noviembre de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:6.72,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.0 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.0-release-notes.png",tags:["release"]},nextItem:{title:"Version 2.11 release notes",permalink:"/es/blog/2022/10/09/version-2.11-release-notes"}},l={authorsImageUrls:[void 0]},p=[{value:"Full support of TypeORM v0.3",id:"full-support-of-typeorm-v03",level:2},{value:"Code simplified",id:"code-simplified",level:2},{value:"Authentication",id:"authentication",level:3},{value:"File upload",id:"file-upload",level:3},{value:"Database models",id:"database-models",level:3},{value:"Better typing",id:"better-typing",level:2},{value:"Validation with AJV",id:"validation-with-ajv",level:3},{value:"File upload",id:"file-upload-1",level:3},{value:"Authentication",id:"authentication-1",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"Closer to JS ecosystem standards",id:"closer-to-js-ecosystem-standards",level:2},{value:"Development command",id:"development-command",level:3},{value:"Configuration through environment variables",id:"configuration-through-environment-variables",level:3},{value:"<code>null</code> vs <code>undefined</code> values",id:"null-vs-undefined-values",level:3},{value:"More open to other ORMs",id:"more-open-to-other-orms",level:2},{value:"Shell scripts",id:"shell-scripts",level:3},{value:"Permission system",id:"permission-system",level:3},{value:"Smaller AWS S3 package",id:"smaller-aws-s3-package",level:2},{value:"Dependencies updated and support of Node latest versions",id:"dependencies-updated-and-support-of-node-latest-versions",level:2},{value:"Some bug fixes",id:"some-bug-fixes",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(30802).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"Version 3.0 of ",(0,r.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is finally there!"),(0,r.kt)("p",null,"It's been a long work and I'm excited to share with you the new features of the framework \ud83c\udf89 . The upgrading guide can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/upgrade-to-v3"},"here"),"."),(0,r.kt)("p",null,"Here are the new features and improvements of version 3!"),(0,r.kt)("h2",{id:"full-support-of-typeorm-v03"},"Full support of TypeORM v0.3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For those new to Foal, TypeORM is the default ORM used in all new projects. But you can use any other ORM or query builder if you want, as the core framework is ORM independent.")),(0,r.kt)("p",null,"TypeORM v0.3 provides greater typing safety and this is something that will be appreciated when moving to the new version of Foal."),(0,r.kt)("p",null,"The version 0.3 of TypeORM has a lot of changes compared to the version 0.2 though. Features such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ormconfig.json")," file have been removed and functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"createConnection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getManager")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getRepository")," have been deprecated."),(0,r.kt)("p",null,"A lot of work has been done to make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typeorm"),", new projects generated by the CLI and examples in the documentation use version 0.3 of TypeORM without relying on deprecated functions or patterns."),(0,r.kt)("p",null,"In particular, the connection to the database is now managed by a file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/db.ts")," that replaces the older ",(0,r.kt)("inlineCode",{parentName:"p"},"ormconfig.json"),"."),(0,r.kt)("h2",{id:"code-simplified"},"Code simplified"),(0,r.kt)("p",null,"Some parts of the framework have been simplified to require less code and make it more understandable."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseSessions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," authentication hooks called obscure functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchUser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchUserWithPermissions")," to populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user")," property. The real role of these functions was not clear and a newcomer to the framework could wonder what they were for."),(0,r.kt)("p",null,"This is why these functions have been removed and replaced by direct calls to database models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 2\n@UseSessions({ user: fetchUser(User) })\n@JWTRequired({ user: fetchUserWithPermissions(User) })\n\n// Version 3\n@UseSessions({ user: (id: number) => User.findOneBy({ id }) })\n@JWTRequired({ user: (id: number) => User.findOneWithPermissionsBy({ id }) })\n")),(0,r.kt)("h3",{id:"file-upload"},"File upload"),(0,r.kt)("p",null,"When uploading files in a ",(0,r.kt)("em",{parentName:"p"},"multipart/form-data")," request, it was not allowed to pass optional fields. This is now possible. "),(0,r.kt)("p",null,"The interface of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook, renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@ParseAndValidateFiles")," to be more understandable for people who don't know the HTTP protocol handling the upload, has been simplified."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Examples with only files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 2\n@ValidateMultipartFormDataBody({\n  files: {\n    profile: { required: true }\n  }\n})\n\n// Version 3\n@ParseAndValidateFiles({\n  profile: { required: true }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Examples with files and fields")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 2\n@ValidateMultipartFormDataBody({\n  files: {\n    profile: { required: true }\n  }\n  fields: {\n    description: { type: 'string' }\n  }\n})\n\n// Version 3\n@ParseAndValidateFiles(\n  {\n    profile: { required: true }\n  },\n  // The second parameter is optional\n  // and is used to add fields. It expects an AJV object.\n  {\n    type: 'object',\n    properties: {\n      description: { type: 'string' }\n    },\n    required: ['description'],\n    additionalProperties: false\n  }\n)\n")),(0,r.kt)("h3",{id:"database-models"},"Database models"),(0,r.kt)("p",null,"Using functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"getRepository")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getManager")," to manipulate data in a database is not necessarily obvious to newcomers. It adds complexity that is not necessary for small or medium sized projects. Most frameworks prefer to use the Active Record pattern for simplicity."),(0,r.kt)("p",null,"This is why, from version 3 and to take into account that TypeORM v0.3 no longer uses a global connection, the examples in the documentation and the generators will extend all the models from ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity"),". Of course, it will still be possible to use the functions below if desired. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 2\n@Entity()\nclass User {}\n\nconst user = getRepository(User).create();\nawait getRepository(User).save(user);\n\n// Version 3\n@Entity()\nclass User extends BaseEntity {}\n\nconst user = new User();\nawait user.save();\n")),(0,r.kt)("h2",{id:"better-typing"},"Better typing"),(0,r.kt)("p",null,"The use of TypeScript types has been improved and some parts of the framework ensure better type safety."),(0,r.kt)("h3",{id:"validation-with-ajv"},"Validation with AJV"),(0,r.kt)("p",null,"Foal's version uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ajv@8")," which allows you to bind a TypeScript type with a JSON schema object. To do this, you can import the generic type ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONSchemaType")," to build the interface of the schema object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JSONSchemaType } from 'ajv';\n\ninterface MyData {\n  foo: number;\n  bar?: string\n}\n\nconst schema: JSONSchemaType<MyData> = {\n  type: 'object',\n  properties: {\n    foo: { type: 'integer' },\n    bar: { type: 'string', nullable: true }\n  },\n  required: ['foo'],\n  additionalProperties: false\n}\n")),(0,r.kt)("h3",{id:"file-upload-1"},"File upload"),(0,r.kt)("p",null,"In version 2, handling file uploads in the controller was tedious because all types were ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),". Starting with version 3, it is no longer necessary to cast the types to ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"File[]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 2\nconst name = ctx.request.body.fields.name;\nconst file = ctx.request.body.files.avatar as File;\nconst files = ctx.request.body.files.images as File[];\n\n// After\nconst name = ctx.request.body.name;\n// file is of type \"File\"\nconst file = ctx.files.get('avatar')[0];\n// files is of type \"Files\"\nconst files = ctx.files.get('images');\n")),(0,r.kt)("h3",{id:"authentication-1"},"Authentication"),(0,r.kt)("p",null,"In version 2, the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseSessions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," expected a function with this signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"(id: string|number, services: ServiceManager) => Promise<any>;\n")),(0,r.kt)("p",null,"There was no way to guess and guarantee the type of the user ID and the function had to check and convert the type itself if necessary."),(0,r.kt)("p",null,"The returned type was also very permissive (type ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") preventing us from detecting silly errors such as confusion between ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," values."),(0,r.kt)("p",null,"In version 3, the hooks have been added a new ",(0,r.kt)("inlineCode",{parentName:"p"},"userIdType")," option to check and convert the JavaScript type if necessary and force the TypeScript type of the function. The returned type is also safer and corresponds to the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user")," which is no longer ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," but ",(0,r.kt)("inlineCode",{parentName:"p"},"{ [key : string] : any } | null"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example where the ID is a string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({\n  user: (id: string) => User.findOneBy({ id });\n  userIdType: 'string',\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example where the ID is a number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({\n  user: (id: number) => User.findOneBy({ id });\n  userIdType: 'number',\n})\n")),(0,r.kt)("p",null,"By default, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"userIdType")," is a number, so we can simply write this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@JWTRequired({\n  user: (id: number) => User.findOneBy({ id });\n})\n")),(0,r.kt)("h3",{id:"graphql"},"GraphQL"),(0,r.kt)("p",null,"In version 2, GraphQL schemas were of type ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),". In version 3, they are all based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," interface."),(0,r.kt)("h2",{id:"closer-to-js-ecosystem-standards"},"Closer to JS ecosystem standards"),(0,r.kt)("p",null,"Some parts have been modified to get closer to the JS ecosystem standards. In particular:"),(0,r.kt)("h3",{id:"development-command"},"Development command"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run develop")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev"),"."),(0,r.kt)("h3",{id:"configuration-through-environment-variables"},"Configuration through environment variables"),(0,r.kt)("p",null,"When two values of the same variable are provided by a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and an environment variable, then the value of the environment is used (the behavior is similar to that of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," library)."),(0,r.kt)("h3",{id:"null-vs-undefined-values"},(0,r.kt)("inlineCode",{parentName:"h3"},"null")," vs ",(0,r.kt)("inlineCode",{parentName:"h3"},"undefined")," values"),(0,r.kt)("p",null,"When the request has no session or the user is not authenticated, the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.session")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and no longer ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". This makes sense from a semantic point of view, and it also simplifies the user assignment from the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," functions of popular ORMs (Prisma, TypeORM, Mikro-ORM). They all return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," when no value is found."),(0,r.kt)("h2",{id:"more-open-to-other-orms"},"More open to other ORMs"),(0,r.kt)("p",null,"TypeORM is the default ORM used in the documentation examples and in the projects generated by the CLI. But it is quite possible to use another ORM or query generator with Foal. For example, the authentication system (with sessions or JWT) makes no assumptions about database access."),(0,r.kt)("p",null,"Some parts of the framework were still a bit tied to TypeORM in version 2. Version 3 fixed this."),(0,r.kt)("h3",{id:"shell-scripts"},"Shell scripts"),(0,r.kt)("p",null,"When running the ",(0,r.kt)("inlineCode",{parentName:"p"},"foal generate script")," command, the generated script file no longer contains TypeORM code."),(0,r.kt)("h3",{id:"permission-system"},"Permission system"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@PermissionRequired")," option is no longer bound to TypeORM and can be used with any ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user")," that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"IUserWithPermissions")," interface."),(0,r.kt)("h2",{id:"smaller-aws-s3-package"},"Smaller AWS S3 package"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package is now based on version 3 of the AWS SDK. Thanks to this, the size of the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," has been reduced by three."),(0,r.kt)("h2",{id:"dependencies-updated-and-support-of-node-latest-versions"},"Dependencies updated and support of Node latest versions"),(0,r.kt)("p",null,"All Foal's dependencies have been upgraded. The framework is also tested on Node versions 16 and 18."),(0,r.kt)("h2",{id:"some-bug-fixes"},"Some bug fixes"),(0,r.kt)("p",null,"If the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"production.js")," explicitly returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," for a given key and the ",(0,r.kt)("inlineCode",{parentName:"p"},"default.json")," file returns a defined value for this key, then the value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"default.json")," file is returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.get"),"."))}u.isMDXComponent=!0},30802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-feab74b346e06e555f404237e3568185.png"}}]);