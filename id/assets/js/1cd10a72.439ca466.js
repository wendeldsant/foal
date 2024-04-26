"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3616],{85234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=t(74848),i=t(28453);const o={title:"Upload & Download Files"},l=void 0,r={id:"file-system/upload-and-download-files",title:"Upload & Download Files",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/versioned_docs/version-1.x/file-system/upload-and-download-files.md",sourceDirName:"file-system",slug:"/file-system/upload-and-download-files",permalink:"/id/docs/1.x/file-system/upload-and-download-files",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/file-system/upload-and-download-files.md",tags:[],version:"1.x",frontMatter:{title:"Upload & Download Files"},sidebar:"someSidebar",previous:{title:"Local & Cloud Storage",permalink:"/id/docs/1.x/file-system/local-and-cloud-storage"},next:{title:"Build & Start the App",permalink:"/id/docs/1.x/development-environment/build-and-start-the-app"}},d={},a=[{value:"Configuration",id:"configuration",level:2},{value:"File Uploads",id:"file-uploads",level:2},{value:"Using Buffers",id:"using-buffers",level:3},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",level:3},{value:"Adding Fields",id:"adding-fields",level:3},{value:"Specifying File Limits",id:"specifying-file-limits",level:3},{value:"File Downloads",id:"file-downloads",level:2},{value:"Usage with a Database",id:"usage-with-a-database",level:2},{value:"Static Files",id:"static-files",level:2},{value:"Static directory",id:"static-directory",level:3},{value:"Virtual prefix path",id:"virtual-prefix-path",level:3},{value:"Deprecated components",id:"deprecated-components",level:2},{value:"The <code>createHttpResponseFile</code> function",id:"the-createhttpresponsefile-function",level:3},{value:"The <code>@foal/formidable</code> package",id:"the-foalformidable-package",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Files can be uploaded and downloaded using ",(0,s.jsx)(n.a,{href:"/id/docs/1.x/file-system/local-and-cloud-storage",children:"FoalTS file system"}),". It allows you to use different types of file storage such as the local file system or cloud storage."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"First install the package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install @foal/storage\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",(0,s.jsx)(n.code,{children:"uploaded"})," directory (you must create it at the root of your project)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"file-uploads",children:"File Uploads"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This technique is available in Foal v1.7 onwards."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Files can be uploaded using ",(0,s.jsx)(n.code,{children:"multipart/form-data"})," requests. The ",(0,s.jsx)(n.code,{children:"@ValidateMultipartFormDataBody"})," hook parses the request body, validates the submitted fields and files and save them in streaming to your local or Cloud storage. It also provides the ability to create file buffers if you wish."]}),"\n",(0,s.jsx)(n.h3,{id:"using-buffers",children:"Using Buffers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n      images: { required: false, multiple: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const buffer = ctx.request.body.files.profile;\n    const buffers = ctx.request.body.files.images;\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The names of the file fields must be provided in the ",(0,s.jsx)(n.code,{children:"files"})," parameter of the hook. Uploaded files which are not listed here are simply ignored."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"required"})," parameter tells the hook if it should return a ",(0,s.jsx)(n.code,{children:"400 - BAD REQUEST"})," error if no file has been uploaded for the given field. In this case, the controller method is not executed."]}),"\n",(0,s.jsx)(n.p,{children:"When the upload is successful, the request body object is set with the buffer files."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["Value of ",(0,s.jsx)(n.code,{children:"multiple"})]}),(0,s.jsx)(n.th,{children:"Files uploaded"}),(0,s.jsx)(n.th,{children:"Value in the request object"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"false"})," (default)"]}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"null"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"At least one"}),(0,s.jsx)(n.td,{children:"A buffer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"An empty array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"At least one"}),(0,s.jsx)(n.td,{children:"An array of buffers"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"using-local-or-cloud-storage-streaming",children:"Using Local or Cloud Storage (streaming)"}),"\n",(0,s.jsxs)(n.p,{children:["Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",(0,s.jsx)(n.code,{children:"ctx"})," is an object containing the relative path of the file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["With the previous configuration, this path is relative to the ",(0,s.jsx)(n.code,{children:"uploaded"})," directory. Note that must create the ",(0,s.jsx)(n.code,{children:"uploaded/images"})," and ",(0,s.jsx)(n.code,{children:"uploaded/images/profiles"})," directories before you can upload a file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"adding-fields",children:"Adding Fields"}),"\n",(0,s.jsx)(n.p,{children:"Multipart requests can also contain non-binary fields such as a string. These fields are validated and parsed by the hook."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    fields: {\n      description: { type: 'string' }\n    },\n    files: {\n      profile: { required: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body.fields;\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"specifying-file-limits",children:"Specifying File Limits"}),"\n",(0,s.jsx)(n.p,{children:"Optional settings can be provided in the configuration to limit the size or number of files uploaded."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileSizeLimit"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"The maximum file size (in bytes)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileNumberLimit"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["The maximum number of files (useful for ",(0,s.jsx)(n.code,{children:"multiple"})," file fields)."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"file-downloads",children:"File Downloads"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This technique is available in Foal v1.6 onwards."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Files can be downloaded using the method ",(0,s.jsx)(n.code,{children:"createHttpResponse"})," of the ",(0,s.jsx)(n.code,{children:"Disk"})," service. The returned object is optimized for downloading a (large) file in streaming."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg');\n  }\n\n  @Get('/download2')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg', {\n      forceDownload: true,\n      filename: 'avatar.jpg'\n    });\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forceDownload"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["It indicates whether the response should include the ",(0,s.jsx)(n.code,{children:"Content-Disposition: attachment"})," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filename"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",(0,s.jsx)(n.code,{children:"foo.jpg"})," in the example)."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-a-database",children:"Usage with a Database"}),"\n",(0,s.jsx)(n.p,{children:"This example shows how to attach a profile picture to a user and how to retrieve and update it."}),"\n",(0,s.jsxs)(n.p,{children:["Create a new directory ",(0,s.jsx)(n.code,{children:"uploaded/images/profiles"})," at the root of your project."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"user.entity.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {\n  BaseEntity, Column, Entity, PrimaryGeneratedColumn\n} from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  profile: string;\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"app.controller.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Context, createHttpResponseFile, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, HttpResponseOK, Post, render } from '@foal/core';\nimport { Disk, ValidateMultipartFormDataBody } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @TokenRequired\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.request.body.files.profile.path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"templates/index.html"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"static-files",children:"Static Files"}),"\n",(0,s.jsxs)(n.p,{children:["Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",(0,s.jsx)(n.code,{children:"public"})," directory."]}),"\n",(0,s.jsx)(n.h3,{id:"static-directory",children:"Static directory"}),"\n",(0,s.jsxs)(n.p,{children:["If necessary, this directory can be modified using the configuration key ",(0,s.jsx)(n.code,{children:"settings.staticPath"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"virtual-prefix-path",children:"Virtual prefix path"}),"\n",(0,s.jsxs)(n.p,{children:["In case you need to add a virtual prefix path to your static files, you can do so with the ",(0,s.jsx)(n.code,{children:"staticPathPrefix"})," configuration key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Static file"}),(0,s.jsx)(n.th,{children:"URL path with no prefix"}),(0,s.jsxs)(n.th,{children:["URL path with the prefix ",(0,s.jsx)(n.code,{children:"/static "})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"index.html"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/"})," and ",(0,s.jsx)(n.code,{children:"/index.html"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/static"})," and ",(0,s.jsx)(n.code,{children:"/static/index.html"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"styles.css"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/styles.css"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/static/styles.css"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app.js"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/app.js"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/static/app.js"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"deprecated-components",children:"Deprecated components"}),"\n",(0,s.jsxs)(n.h3,{id:"the-createhttpresponsefile-function",children:["The ",(0,s.jsx)(n.code,{children:"createHttpResponseFile"})," function"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Deprecated since v1.6. Use the method ",(0,s.jsx)(n.code,{children:"createHttpResponseFile"})," of the ",(0,s.jsx)(n.code,{children:"Disk"})," service instead."]})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," This package only allows you to download files from your local file system. It does not work with Cloud storage."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["FoalTS provides the function ",(0,s.jsx)(n.code,{children:"createHttpResponseFile"})," to download files in the browser from the server's local file system."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { createHttpResponseFile, Get } from '@foal/core';\n\nclass AppController {\n\n  @Get('/download')\n  download() {\n    return createHttpResponseFile({\n      directory: 'uploaded/',\n      file: 'my-pdf.pdf'\n    });\n  }\n\n}\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"directory"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Path of the directory where the file is located (e.g. ",(0,s.jsx)(n.code,{children:"uploaded/"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"file"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Name of the file with its extension (e.g. ",(0,s.jsx)(n.code,{children:"report.pdf"}),"). If the string provided is a path (e.g. ",(0,s.jsx)(n.code,{children:"downloaded/report.pdf"}),"), then Foal will automatically extract the filename (i.e. ",(0,s.jsx)(n.code,{children:"report.pdf"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forceDownload (optional)"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["It indicates whether the response should include the ",(0,s.jsx)(n.code,{children:"Content-Disposition: attachment"})," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filename (optional)"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the ",(0,s.jsx)(n.code,{children:"file"})," option."]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"the-foalformidable-package",children:["The ",(0,s.jsx)(n.code,{children:"@foal/formidable"})," package"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Deprecated since v1.7. Use the ",(0,s.jsx)(n.code,{children:"@ValidateMultipartFormDataBody"})," hook instead."]})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," This package only allows you to upload files to your local file system. It does not work with Cloud storage."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can upload files to your local file system using the library ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/formidable",children:"formidable"}),". It will automatically parse the incoming form and save the submitted file(s) in the directory of your choice. A random id is generated for each saved file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install formidable @types/formidable\nnpm install @foal/formidable\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The package ",(0,s.jsx)(n.code,{children:"@foal/formidable"})," is a small package that allows you to use ",(0,s.jsx)(n.code,{children:"formidable"})," with promises. It only has one function: ",(0,s.jsx)(n.code,{children:"parseForm"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Assuming that the client submits a form with a field named ",(0,s.jsx)(n.code,{children:"file1"})," containing a file, you can save this file using ",(0,s.jsx)(n.code,{children:"IncomingForm"})," and ",(0,s.jsx)(n.code,{children:"parseForm"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { Context, HttpResponseOK, Post } from \'@foal/core\';\nimport { parseForm } from \'@foal/formidable\';\nimport { IncomingForm } from \'formidable\';\n\nexport class AppController {\n\n  @Post(\'/upload\')\n  async upload(ctx: Context) {\n    const form = new IncomingForm();\n    form.uploadDir = \'uploaded\';\n    form.keepExtensions = true;\n    const { fields, files } = await parseForm(form, ctx);\n\n    console.log(files.file1);\n    // {\n    //   "size": 14911887,\n    //   "path": "uploaded/upload_de9cb95c.pdf",\n    //   "name": "example.pdf",\n    //   "type": "application/pdf",\n    //   "mtime": "2019-03-25T13:58:27.988Z"\n    // }\n\n    return new HttpResponseOK(\n      \'The file has correctly been uploaded. \'\n      + \'You can find it on the server at \'\n      + files.file1.path\n    );\n  }\n\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);