(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9393],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2002:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),o=["components"],i={title:"Upload & Download Files"},s=void 0,p={unversionedId:"file-system/upload-and-download-files",id:"version-1.x/file-system/upload-and-download-files",isDocsHomePage:!1,title:"Upload & Download Files",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/versioned_docs/version-1.x/file-system/upload-and-download-files.md",sourceDirName:"file-system",slug:"/file-system/upload-and-download-files",permalink:"/docs/1.x/file-system/upload-and-download-files",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/file-system/upload-and-download-files.md",version:"1.x",frontMatter:{title:"Upload & Download Files"},sidebar:"someSidebar",previous:{title:"Local & Cloud Storage",permalink:"/docs/1.x/file-system/local-and-cloud-storage"},next:{title:"Build & Start the App",permalink:"/docs/1.x/development-environment/build-and-start-the-app"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"File Uploads",id:"file-uploads",children:[{value:"Using Buffers",id:"using-buffers",children:[]},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",children:[]},{value:"Adding Fields",id:"adding-fields",children:[]},{value:"Specifying File Limits",id:"specifying-file-limits",children:[]}]},{value:"File Downloads",id:"file-downloads",children:[]},{value:"Usage with a Database",id:"usage-with-a-database",children:[]},{value:"Static Files",id:"static-files",children:[{value:"Static directory",id:"static-directory",children:[]},{value:"Virtual prefix path",id:"virtual-prefix-path",children:[]}]},{value:"Deprecated components",id:"deprecated-components",children:[{value:"The <code>createHttpResponseFile</code> function",id:"the-createhttpresponsefile-function",children:[]},{value:"The <code>@foal/formidable</code> package",id:"the-foalformidable-package",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Files can be uploaded and downloaded using ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/file-system/local-and-cloud-storage"},"FoalTS file system"),". It allows you to use different types of file storage such as the local file system or cloud storage."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"First install the package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,r.kt)("p",null,"Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploaded")," directory (you must create it at the root of your project)."),(0,r.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n")),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_DISK_DRIVER=local\nSETTINGS_DISK_LOCAL_DIRECTORY=uploaded\n")),(0,r.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,r.kt)("h2",{id:"file-uploads"},"File Uploads"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This technique is available in Foal v1.7 onwards.")),(0,r.kt)("p",null,"Files can be uploaded using ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook parses the request body, validates the submitted fields and files and save them in streaming to your local or Cloud storage. It also provides the ability to create file buffers if you wish."),(0,r.kt)("h3",{id:"using-buffers"},"Using Buffers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n      images: { required: false, multiple: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const buffer = ctx.request.body.files.profile;\n    const buffers = ctx.request.body.files.images;\n  }\n\n}\n")),(0,r.kt)("p",null,"The names of the file fields must be provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," parameter of the hook. Uploaded files which are not listed here are simply ignored."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," parameter tells the hook if it should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"400 - BAD REQUEST")," error if no file has been uploaded for the given field. In this case, the controller method is not executed."),(0,r.kt)("p",null,"When the upload is successful, the request body object is set with the buffer files."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value of ",(0,r.kt)("inlineCode",{parentName:"th"},"multiple")),(0,r.kt)("th",{parentName:"tr",align:null},"Files uploaded"),(0,r.kt)("th",{parentName:"tr",align:null},"Value in the request object"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"At least one"),(0,r.kt)("td",{parentName:"tr",align:null},"A buffer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"An empty array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"At least one"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of buffers")))),(0,r.kt)("h3",{id:"using-local-or-cloud-storage-streaming"},"Using Local or Cloud Storage (streaming)"),(0,r.kt)("p",null,"Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," is an object containing the relative path of the file."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With the previous configuration, this path is relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploaded")," directory. Note that must create the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploaded/images")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," directories before you can upload a file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n  }\n\n}\n")),(0,r.kt)("h3",{id:"adding-fields"},"Adding Fields"),(0,r.kt)("p",null,"Multipart requests can also contain non-binary fields such as a string. These fields are validated and parsed by the hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Post } from '@foal/core';\nimport { ValidateMultipartFormDataBody } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    fields: {\n      description: { type: 'string' }\n    },\n    files: {\n      profile: { required: true }\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.request.body.files.profile;\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body.fields;\n  }\n\n}\n")),(0,r.kt)("h3",{id:"specifying-file-limits"},"Specifying File Limits"),(0,r.kt)("p",null,"Optional settings can be provided in the configuration to limit the size or number of files uploaded."),(0,r.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n")),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n')),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_MULTIPART_REQUESTS_FILE_SIZE_LIMIT=1024\nSETTINGS_MULTIPART_REQUESTS_FILE_NUMBER_LIMIT=4\n")),(0,r.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileSizeLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum file size (in bytes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileNumberLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of files (useful for ",(0,r.kt)("inlineCode",{parentName:"td"},"multiple")," file fields).")))),(0,r.kt)("h2",{id:"file-downloads"},"File Downloads"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This technique is available in Foal v1.6 onwards.")),(0,r.kt)("p",null,"Files can be downloaded using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"createHttpResponse")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Disk")," service. The returned object is optimized for downloading a (large) file in streaming."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg');\n  }\n\n  @Get('/download2')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.jpg', {\n      forceDownload: true,\n      filename: 'avatar.jpg'\n    });\n  }\n\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceDownload"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates whether the response should include the ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filename"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",(0,r.kt)("inlineCode",{parentName:"td"},"foo.jpg")," in the example).")))),(0,r.kt)("h2",{id:"usage-with-a-database"},"Usage with a Database"),(0,r.kt)("p",null,"This example shows how to attach a profile picture to a user and how to retrieve and update it."),(0,r.kt)("p",null,"Create a new directory ",(0,r.kt)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," at the root of your project."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  BaseEntity, Column, Entity, PrimaryGeneratedColumn\n} from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  profile: string;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, createHttpResponseFile, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, HttpResponseOK, Post, render } from '@foal/core';\nimport { Disk, ValidateMultipartFormDataBody } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @TokenRequired\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true, saveTo: 'images/profiles' }\n    }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.request.body.files.profile.path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"templates/index.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n')),(0,r.kt)("h2",{id:"static-files"},"Static Files"),(0,r.kt)("p",null,"Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory."),(0,r.kt)("h3",{id:"static-directory"},"Static directory"),(0,r.kt)("p",null,"If necessary, this directory can be modified using the configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.staticPath"),"."),(0,r.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  staticPath: assets\n")),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n')),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_STATIC_PATH=assets\n")),(0,r.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,r.kt)("h3",{id:"virtual-prefix-path"},"Virtual prefix path"),(0,r.kt)("p",null,"In case you need to add a virtual prefix path to your static files, you can do so with the ",(0,r.kt)("inlineCode",{parentName:"p"},"staticPathPrefix")," configuration key."),(0,r.kt)("p",null,'{% code-tabs %}\n{% code-tabs-item title="YAML" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  staticPathPrefix: /static\n")),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title="JSON" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n')),(0,r.kt)("p",null,'{% endcode-tabs-item %}\n{% code-tabs-item title=".env or environment variables" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_STATIC_PATH_PREFIX=/static\n")),(0,r.kt)("p",null,"{% endcode-tabs-item %}\n{% endcode-tabs %}"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example"),"\n| Static file | URL path with no prefix | URL path with the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"/static "),"|\n| --- | --- | --- |\n| index.html | ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/index.html")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"/static")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/static/index.html")," |\n| styles.css | ",(0,r.kt)("inlineCode",{parentName:"p"},"/styles.css")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"/static/styles.css")," |\n| app.js | ",(0,r.kt)("inlineCode",{parentName:"p"},"/app.js")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"/static/app.js")," |"),(0,r.kt)("h2",{id:"deprecated-components"},"Deprecated components"),(0,r.kt)("h3",{id:"the-createhttpresponsefile-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"createHttpResponseFile")," function"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Deprecated since v1.6. Use the method ",(0,r.kt)("inlineCode",{parentName:"em"},"createHttpResponseFile")," of the ",(0,r.kt)("inlineCode",{parentName:"em"},"Disk")," service instead."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," This package only allows you to download files from your local file system. It does not work with Cloud storage.")),(0,r.kt)("p",null,"FoalTS provides the function ",(0,r.kt)("inlineCode",{parentName:"p"},"createHttpResponseFile")," to download files in the browser from the server's local file system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createHttpResponseFile, Get } from '@foal/core';\n\nclass AppController {\n\n  @Get('/download')\n  download() {\n    return createHttpResponseFile({\n      directory: 'uploaded/',\n      file: 'my-pdf.pdf'\n    });\n  }\n\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"directory"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the directory where the file is located (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"uploaded/"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the file with its extension (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"report.pdf"),"). If the string provided is a path (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"downloaded/report.pdf"),"), then Foal will automatically extract the filename (i.e. ",(0,r.kt)("inlineCode",{parentName:"td"},"report.pdf"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceDownload (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates whether the response should include the ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filename (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the ",(0,r.kt)("inlineCode",{parentName:"td"},"file")," option.")))),(0,r.kt)("h3",{id:"the-foalformidable-package"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"@foal/formidable")," package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Deprecated since v1.7. Use the ",(0,r.kt)("inlineCode",{parentName:"em"},"@ValidateMultipartFormDataBody")," hook instead."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," This package only allows you to upload files to your local file system. It does not work with Cloud storage.")),(0,r.kt)("p",null,"You can upload files to your local file system using the library ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/formidable"},"formidable"),". It will automatically parse the incoming form and save the submitted file(s) in the directory of your choice. A random id is generated for each saved file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install formidable @types/formidable\nnpm install @foal/formidable\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The package ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/formidable")," is a small package that allows you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"formidable")," with promises. It only has one function: ",(0,r.kt)("inlineCode",{parentName:"p"},"parseForm"),".")),(0,r.kt)("p",null,"Assuming that the client submits a form with a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"file1")," containing a file, you can save this file using ",(0,r.kt)("inlineCode",{parentName:"p"},"IncomingForm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parseForm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Context, HttpResponseOK, Post } from \'@foal/core\';\nimport { parseForm } from \'@foal/formidable\';\nimport { IncomingForm } from \'formidable\';\n\nexport class AppController {\n\n  @Post(\'/upload\')\n  async upload(ctx: Context) {\n    const form = new IncomingForm();\n    form.uploadDir = \'uploaded\';\n    form.keepExtensions = true;\n    const { fields, files } = await parseForm(form, ctx);\n\n    console.log(files.file1);\n    // {\n    //   "size": 14911887,\n    //   "path": "uploaded/upload_de9cb95c.pdf",\n    //   "name": "example.pdf",\n    //   "type": "application/pdf",\n    //   "mtime": "2019-03-25T13:58:27.988Z"\n    // }\n\n    return new HttpResponseOK(\n      \'The file has correctly been uploaded. \'\n      + \'You can find it on the server at \'\n      + files.file1.path\n    );\n  }\n\n}\n')))}m.isMDXComponent=!0}}]);