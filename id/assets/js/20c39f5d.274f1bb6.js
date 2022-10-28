"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Image Upload and Download",id:"tuto-12-file-upload",slug:"12-file-upload"},i=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-12-file-upload",id:"tutorials/real-world-example-with-react/tuto-12-file-upload",title:"Image Upload and Download",description:"The next step in this tutorial is to allow users to upload a profile picture. This image will be displayed on the homepage in front of each author's story.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/12-file-upload.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/12-file-upload",permalink:"/id/docs/tutorials/real-world-example-with-react/12-file-upload",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/12-file-upload.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Image Upload and Download",id:"tuto-12-file-upload",slug:"12-file-upload"},sidebar:"someSidebar",previous:{title:"Adding Sign Up",permalink:"/id/docs/tutorials/real-world-example-with-react/11-sign-up"},next:{title:"CSRF Protection",permalink:"/id/docs/tutorials/real-world-example-with-react/13-csrf"}},s={},p=[{value:"Server Side",id:"server-side",level:2},{value:"Client Side",id:"client-side",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The next step in this tutorial is to allow users to upload a profile picture. This image will be displayed on the homepage in front of each author's story."),(0,r.kt)("p",null,"To do this, you will use Foal's storage system. It allows you to validate and save the files uploaded by the client. These files can be saved to your local drive or in the cloud using AWS S3. We won't use the cloud feature in this tutorial, but you can find out how to configure it ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/file-system/local-and-cloud-storage"},"here"),"."),(0,r.kt)("h2",{id:"server-side"},"Server Side"),(0,r.kt)("p",null,"First, install the package. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/storage\n")),(0,r.kt)("p",null,"Update the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/default.json")," to specify the location of files that the disk manager can access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "disk": {\n      "local": {\n        "directory": "assets"\n      }\n    }\n  },\n  ...\n}\n')),(0,r.kt)("p",null,"Then create the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/profiles/uploaded")," where the profile images will be uploaded. Download the default profile image ",(0,r.kt)("a",{target:"_blank",href:a(24550).Z},"here")," and place it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/profiles")," folder with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"default.png"),"."),(0,r.kt)("p",null,"You are ready to create the controller. Generate a new one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/profile --register\n")),(0,r.kt)("p",null,"Open the new file and add two new routes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/profile/avatar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves the user's profile image. If the optional query parameter ",(0,r.kt)("inlineCode",{parentName:"td"},"userId")," is provided, the server returns the avatar of that user. Otherwise, it returns the avatar of the current user. If no user is authenticated or has no profile picture, a default image is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/profile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the user profile. A ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," field and an optional ",(0,r.kt)("inlineCode",{parentName:"td"},"avatar")," file are expected.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get, HttpResponseNoContent, Post, UserRequired, ValidateQueryParam } from '@foal/core';\nimport { File, Disk, ValidateMultipartFormDataBody } from '@foal/storage';\nimport { User } from '../../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  @ValidateQueryParam('userId', { type: 'number' }, { required: false })\n  async readProfileImage(ctx: Context<User|undefined>) {\n    let user = ctx.user;\n\n    const userId: number|undefined = ctx.request.query.userId;\n    if (userId !== undefined) {\n      user = await User.findOne({ id: userId })\n    }\n\n    if (!user || !user.avatar) {\n      return this.disk.createHttpResponse('images/profiles/default.png');\n    }\n\n    return this.disk.createHttpResponse(user.avatar);\n  }\n\n  @Post()\n  @UserRequired()\n  @ValidateMultipartFormDataBody({\n    files: {\n      avatar: { required: false, saveTo: 'images/profiles/uploaded' }\n    },\n    fields: {\n      name: { type: 'string', maxLength: 255 }\n    }\n  })\n  async updateProfileImage(ctx: Context<User>) {\n    ctx.user.name = ctx.request.body.fields.name;\n\n    // Warning: use Foal's File interface\n    const file = ctx.request.body.files.avatar as File|undefined;\n    if (file) {\n      if (ctx.user.avatar) {\n        await this.disk.delete(ctx.user.avatar);\n      }\n      ctx.user.avatar = file.path;\n    }\n\n    await ctx.user.save();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger")," and try to upload a profile picture. You must be logged in first."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You may have noticed the ",(0,r.kt)("inlineCode",{parentName:"p"},"@dependency")," decorator for setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"disk: Disk")," property. This mechanism is called dependency injection and is particularly useful in unit testing. You can read more about it ",(0,r.kt)("a",{parentName:"p",href:"/id/docs/architecture/architecture-overview"},"here"))),(0,r.kt)("h2",{id:"client-side"},"Client Side"),(0,r.kt)("p",null,"On the client side, downloading the profile image is handled in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileHeader.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"requests/profile.ts")," files."),(0,r.kt)("p",null,"Open the latter and implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateProfile")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\n\nexport async function updateProfile(username: string, avatar: File|null): Promise<void> {\n  const formData = new FormData();\n  formData.set('name', username);\n  if (avatar) {\n    formData.set('avatar', avatar);\n  }\n\n  await axios.post('/api/profile', formData, {\n    headers: {\n    'content-type': 'multipart/form-data'\n    }\n  });\n}\n")),(0,r.kt)("p",null,"Now, if you go back to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/profile"},"http://localhost:3000/profile"),", you should be able to upload your profile picture."))}u.isMDXComponent=!0},24550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/default-9490f4915bf9aca8c77fd98e411f2e2c.png"}}]);