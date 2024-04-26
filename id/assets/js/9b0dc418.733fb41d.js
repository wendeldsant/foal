"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8376],{59330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var s=t(74848),i=t(28453),l=t(11470),r=t(19365);const a={title:"Upload and Download Files",sidebar_label:"Upload & Download Files"},o=void 0,d={id:"common/file-storage/upload-and-download-files",title:"Upload and Download Files",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/common/file-storage/upload-and-download-files.md",sourceDirName:"common/file-storage",slug:"/common/file-storage/upload-and-download-files",permalink:"/id/docs/3.x/common/file-storage/upload-and-download-files",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/common/file-storage/upload-and-download-files.md",tags:[],version:"3.x",frontMatter:{title:"Upload and Download Files",sidebar_label:"Upload & Download Files"},sidebar:"someSidebar",previous:{title:"Local & Cloud Storage",permalink:"/id/docs/3.x/common/file-storage/local-and-cloud-storage"},next:{title:"Serialization",permalink:"/id/docs/3.x/common/serialization"}},c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"File Uploads",id:"file-uploads",level:2},{value:"Using Buffers",id:"using-buffers",level:3},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",level:3},{value:"Accessing File Metadata",id:"accessing-file-metadata",level:3},{value:"Adding Fields",id:"adding-fields",level:3},{value:"Specifying File Limits",id:"specifying-file-limits",level:3},{value:"File Downloads",id:"file-downloads",level:2},{value:"Usage with a Database",id:"usage-with-a-database",level:2},{value:"Static Files",id:"static-files",level:2},{value:"Static directory",id:"static-directory",level:3},{value:"Virtual prefix path",id:"virtual-prefix-path",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Files can be uploaded and downloaded using ",(0,s.jsx)(n.a,{href:"/id/docs/3.x/common/file-storage/local-and-cloud-storage",children:"FoalTS file system"}),". It allows you to use different types of file storage such as the local file system or cloud storage."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"First install the package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install @foal/storage\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",(0,s.jsx)(n.code,{children:"uploaded"})," directory (you must create it at the root of your project)."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"file-uploads",children:"File Uploads"}),"\n",(0,s.jsxs)(n.p,{children:["Files can be uploaded using ",(0,s.jsx)(n.code,{children:"multipart/form-data"})," requests. The ",(0,s.jsx)(n.code,{children:"@ParseAndValidateFiles"})," hook parses the request body, validates the submitted fields and files and ",(0,s.jsx)(n.strong,{children:"save them in streaming"})," to your local or Cloud storage. It also provides the ability to create file buffers if you wish."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"enctype"})," of your requests must be of type ",(0,s.jsx)(n.code,{children:"multipart/form-data"}),". If needed, you can use a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",children:"FormData"})," object for this."]})}),"\n",(0,s.jsx)(n.h3,{id:"using-buffers",children:"Using Buffers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true },\n    images: { required: false, multiple: true }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { buffer } = ctx.files.get('profile')[0];\n    const files = ctx.files.get('images');\n    for (const file of files) {\n      // Do something with file.buffer\n    }\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The names of the file fields must be provided as first parameter of the hook. Uploaded files which are not listed here are simply ignored."}),"\n",(0,s.jsx)(n.p,{children:"For each file, you can provide the validation options below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Validation option"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"required"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["Specifies that at least one file must be uploaded for the given name. If not, the server returns a ",(0,s.jsx)(n.code,{children:"400 - BAD REQUEST"})," error."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"multiple"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["Specifies that multiple files can be uploaded for the given name. If set to ",(0,s.jsx)(n.code,{children:"false"})," and multiple files are uploaded, the server returns a ",(0,s.jsx)(n.code,{children:"400 - BAD REQUEST"})," error."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"using-local-or-cloud-storage-streaming",children:"Using Local or Cloud Storage (streaming)"}),"\n",(0,s.jsxs)(n.p,{children:["Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",(0,s.jsx)(n.code,{children:"ctx"})," is an object containing the relative path of the file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["With the previous configuration, this path is relative to the ",(0,s.jsx)(n.code,{children:"uploaded"})," directory. Note that must create the ",(0,s.jsx)(n.code,{children:"uploaded/images"})," and ",(0,s.jsx)(n.code,{children:"uploaded/images/profiles"})," directories before you can upload a file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true, saveTo: 'images/profiles' }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.files.get('profile')[0];\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    return new HttpResponseOK(path);\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"accessing-file-metadata",children:"Accessing File Metadata"}),"\n",(0,s.jsx)(n.p,{children:"When uploading files, the browser sends additional metadata. This can be accessed in the controller method."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const file = ctx.files.get('profile')[0];\n// file.mimeType, ...\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"encoding"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Encoding type of the file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"filename"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string|undefined"})}),(0,s.jsx)(n.td,{children:"Name of the file on the user's computer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mimeType"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Mime type of the file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"path"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Path where the file has been saved. If the ",(0,s.jsx)(n.code,{children:"saveTo"})," option was not provided, the value is an empty string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"buffer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Buffer"})}),(0,s.jsxs)(n.td,{children:["Buffer containing the entire file. If the ",(0,s.jsx)(n.code,{children:"saveTo"})," option was provided, the value is an empty buffer."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"adding-fields",children:"Adding Fields"}),"\n",(0,s.jsx)(n.p,{children:"Multipart requests can also contain non-binary fields such as a string. These fields are parsed by the hook and can be validated by passing a second parameter."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, HttpResponseOK, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles(\n    {\n      profile: { required: true }\n    },\n    {\n      type: 'object',\n      properties: {\n        description: { type: 'string' }\n      },\n      required: ['description'],\n      additionalProperties: false\n    }\n  )\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.files.get('profile')[0];\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body;\n    return new HttpResponseOK({ path, description });\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"specifying-file-limits",children:"Specifying File Limits"}),"\n",(0,s.jsx)(n.p,{children:"Optional settings can be provided in the configuration to limit the size or number of files uploaded."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n  settings: {\n    multipartRequests: {\n      fileSizeLimit: 1024,\n      fileNumberLimit: 4,\n    }\n  }\n}\n"})})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileSizeLimit"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"The maximum file size (in bytes)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileNumberLimit"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["The maximum number of files (useful for ",(0,s.jsx)(n.code,{children:"multiple"})," file fields)."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"file-downloads",children:"File Downloads"}),"\n",(0,s.jsxs)(n.p,{children:["Files can be downloaded using the method ",(0,s.jsx)(n.code,{children:"createHttpResponse"})," of the ",(0,s.jsx)(n.code,{children:"Disk"})," service. The returned object is optimized for downloading a (large) file in streaming."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.png');\n  }\n\n  @Get('/download2')\n  download2() {\n    return this.disk.createHttpResponse('avatars/foo.png', {\n      forceDownload: true,\n      filename: 'avatar.png'\n    });\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forceDownload"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["It indicates whether the response should include the ",(0,s.jsx)(n.code,{children:"Content-Disposition: attachment"})," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filename"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",(0,s.jsx)(n.code,{children:"foo.jpg"})," in the example)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cache"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Value of the ",(0,s.jsx)(n.code,{children:"Cache-Control"})," header (if necessary)."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-a-database",children:"Usage with a Database"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to attach a profile picture to a user and how to retrieve and update it."}),"\n",(0,s.jsxs)(n.p,{children:["Create a new directory ",(0,s.jsx)(n.code,{children:"uploaded/images/profiles"})," at the root of your project."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ nullable: true })\n  profile: string;\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, Post, render } from '@foal/core';\nimport { Disk, ParseAndValidateFiles } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @UseSessions\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true, saveTo: 'images/profiles' }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.files.get('profile')[0].path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"templates/index.html"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  \x3c!-- The enctype "multipart/form-data" is required. --\x3e\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"static-files",children:"Static Files"}),"\n",(0,s.jsxs)(n.p,{children:["Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",(0,s.jsx)(n.code,{children:"public"})," directory."]}),"\n",(0,s.jsx)(n.h3,{id:"static-directory",children:"Static directory"}),"\n",(0,s.jsxs)(n.p,{children:["If necessary, this directory can be modified using the configuration key ",(0,s.jsx)(n.code,{children:"settings.staticPath"}),"."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"settings:\n  staticPath: assets\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    staticPath: "assets"\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"virtual-prefix-path",children:"Virtual prefix path"}),"\n",(0,s.jsxs)(n.p,{children:["In case you need to add a virtual prefix path to your static files, you can do so with the ",(0,s.jsx)(n.code,{children:"staticPathPrefix"})," configuration key."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,s.jsx)(r.A,{value:"yaml",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"settings:\n  staticPathPrefix: /static\n"})})}),(0,s.jsx)(r.A,{value:"json",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n'})})}),(0,s.jsx)(r.A,{value:"js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    staticPathPrefix: "/static"\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Static file"}),(0,s.jsx)(n.th,{children:"URL path with no prefix"}),(0,s.jsxs)(n.th,{children:["URL path with the prefix ",(0,s.jsx)(n.code,{children:"/static "})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"index.html"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/"})," and ",(0,s.jsx)(n.code,{children:"/index.html"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/static"})," and ",(0,s.jsx)(n.code,{children:"/static/index.html"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"styles.css"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/styles.css"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/static/styles.css"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.js"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/app.js"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/static/app.js"})})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(34164);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),i=t(34164),l=t(23104),r=t(56347),a=t(205),o=t(57485),d=t(31682),c=t(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=u(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[d,h]=f({queryString:t,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,c.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),j=(()=>{const e=d??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=a[t].value;i!==s&&(d(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...l,className:(0,i.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);