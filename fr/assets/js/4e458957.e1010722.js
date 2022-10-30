"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),o=a(67392),s=a(7094),p=a(12466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:i,block:m,defaultValue:c,values:f,groupId:k,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===c?c:null!=(t=null!=c?c:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:x}=(0,s.U)(),[C,T]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,a=w.indexOf(t),n=y[a].value;n!==C&&(P(t),T(n),null!=k&&x(k,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;a=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var l;const t=w.indexOf(e.currentTarget)-1;a=null!=(l=w[t])?l:w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:S,onFocus:j,onClick:j},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},24067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={title:"T\xe9l\xe9charger des Fichiers",sidebar_label:"T\xe9l\xe9charger des Fichiers"},s=void 0,p={unversionedId:"file-system/upload-and-download-files",id:"file-system/upload-and-download-files",title:"T\xe9l\xe9charger des Fichiers",description:"Files can be uploaded and downloaded using FoalTS file system. It allows you to use different types of file storage such as the local file system or cloud storage.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/file-system/upload-and-download-files.md",sourceDirName:"file-system",slug:"/file-system/upload-and-download-files",permalink:"/fr/docs/file-system/upload-and-download-files",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/upload-and-download-files.md",tags:[],version:"current",frontMatter:{title:"T\xe9l\xe9charger des Fichiers",sidebar_label:"T\xe9l\xe9charger des Fichiers"},sidebar:"someSidebar",previous:{title:"Stockage en Local & dans le Cloud",permalink:"/fr/docs/file-system/local-and-cloud-storage"},next:{title:"Construire & D\xe9marrer l'App",permalink:"/fr/docs/development-environment/build-and-start-the-app"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"File Uploads",id:"file-uploads",level:2},{value:"Using Buffers",id:"using-buffers",level:3},{value:"Using Local or Cloud Storage (streaming)",id:"using-local-or-cloud-storage-streaming",level:3},{value:"Accessing File Metadata",id:"accessing-file-metadata",level:3},{value:"Adding Fields",id:"adding-fields",level:3},{value:"Specifying File Limits",id:"specifying-file-limits",level:3},{value:"File Downloads",id:"file-downloads",level:2},{value:"Usage with a Database",id:"usage-with-a-database",level:2},{value:"Static Files",id:"static-files",level:2},{value:"Static directory",id:"static-directory",level:3},{value:"Virtual prefix path",id:"virtual-prefix-path",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Files can be uploaded and downloaded using ",(0,l.kt)("a",{parentName:"p",href:"/fr/docs/file-system/local-and-cloud-storage"},"FoalTS file system"),". It allows you to use different types of file storage such as the local file system or cloud storage."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"First install the package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,l.kt)("p",null,"Then specify in your configuration the file storage to be used and its settings. In this example, we will use the local file system with the ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded")," directory (you must create it at the root of your project)."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,l.kt)("h2",{id:"file-uploads"},"File Uploads"),(0,l.kt)("p",null,"Files can be uploaded using ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests. The ",(0,l.kt)("inlineCode",{parentName:"p"},"@ParseAndValidateFiles")," hook parses the request body, validates the submitted fields and files and ",(0,l.kt)("strong",{parentName:"p"},"save them in streaming")," to your local or Cloud storage. It also provides the ability to create file buffers if you wish."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"enctype")," of your requests must be of type ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". If needed, you can use a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," object for this.")),(0,l.kt)("h3",{id:"using-buffers"},"Using Buffers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true },\n    images: { required: false, multiple: true }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { buffer } = ctx.files.get('profile')[0];\n    const files = ctx.files.get('images');\n    for (const file of files) {\n      // Do something with file.buffer\n    }\n  }\n\n}\n")),(0,l.kt)("p",null,"The names of the file fields must be provided as first parameter of the hook. Uploaded files which are not listed here are simply ignored."),(0,l.kt)("p",null,"For each file, you can provide the validation options below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Validation option"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies that at least one file must be uploaded for the given name. If not, the server returns a ",(0,l.kt)("inlineCode",{parentName:"td"},"400 - BAD REQUEST")," error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"multiple")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies that multiple files can be uploaded for the given name. If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," and multiple files are uploaded, the server returns a ",(0,l.kt)("inlineCode",{parentName:"td"},"400 - BAD REQUEST")," error.")))),(0,l.kt)("h3",{id:"using-local-or-cloud-storage-streaming"},"Using Local or Cloud Storage (streaming)"),(0,l.kt)("p",null,"Instead of using buffers, you can also choose to save directly the file to your local or Cloud storage. To do this, you need to add the name of the target directory in your hook options. The value returned in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," is an object containing the relative path of the file."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"With the previous configuration, this path is relative to the ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded")," directory. Note that must create the ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded/images")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," directories before you can upload a file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true, saveTo: 'images/profiles' }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.files.get('profile')[0];\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    return new HttpResponseOK(path);\n  }\n\n}\n")),(0,l.kt)("h3",{id:"accessing-file-metadata"},"Accessing File Metadata"),(0,l.kt)("p",null,"When uploading files, the browser sends additional metadata. This can be accessed in the controller method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const file = ctx.files.get('profile')[0];\n// file.mimeType, ...\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encoding")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Encoding type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filename")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string\\|undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file on the user's computer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mime type of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path where the file has been saved. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"buffer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,l.kt)("td",{parentName:"tr",align:null},"Buffer containing the entire file. If the ",(0,l.kt)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))),(0,l.kt)("h3",{id:"adding-fields"},"Adding Fields"),(0,l.kt)("p",null,"Multipart requests can also contain non-binary fields such as a string. These fields are parsed by the hook and can be validated by passing a second parameter."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post } from '@foal/core';\nimport { ParseAndValidateFiles } from '@foal/storage';\n\nexport class UserController {\n\n  @Post('/profile')\n  @ParseAndValidateFiles(\n    {\n      profile: { required: true }\n    },\n    {\n      type: 'object',\n      properties: {\n        description: { type: 'string' }\n      },\n      required: ['description'],\n      additionalProperties: false\n    }\n  )\n  uploadProfilePhoto(ctx: Context) {\n    const { path } = ctx.files.get('profile')[0];\n    // images/profiles/GxunLNJu3RXI9l7C7cQlBvXFQ+iqdxSRJmsR4TU+0Fo=.png\n    const { description } = ctx.request.body;\n    return new HttpResponseOK({ path, description });\n  }\n\n}\n")),(0,l.kt)("h3",{id:"specifying-file-limits"},"Specifying File Limits"),(0,l.kt)("p",null,"Optional settings can be provided in the configuration to limit the size or number of files uploaded."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  multipartRequests:\n    fileSizeLimit: 1024\n    fileNumberLimit: 4\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "multipartRequests": {\n      "fileSizeLimit": 1024,\n      "fileNumberLimit": 4,\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    multipartRequests: {\n      fileSizeLimit: 1024,\n      fileNumberLimit: 4,\n    }\n  }\n}\n")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileSizeLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum file size (in bytes).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileNumberLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of files (useful for ",(0,l.kt)("inlineCode",{parentName:"td"},"multiple")," file fields).")))),(0,l.kt)("h2",{id:"file-downloads"},"File Downloads"),(0,l.kt)("p",null,"Files can be downloaded using the method ",(0,l.kt)("inlineCode",{parentName:"p"},"createHttpResponse")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Disk")," service. The returned object is optimized for downloading a (large) file in streaming."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass ApiController {\n\n  @dependency\n  disk: Disk;\n\n  @Get('/download')\n  download() {\n    return this.disk.createHttpResponse('avatars/foo.png');\n  }\n\n  @Get('/download2')\n  download2() {\n    return this.disk.createHttpResponse('avatars/foo.png', {\n      forceDownload: true,\n      filename: 'avatar.png'\n    });\n  }\n\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forceDownload"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"It indicates whether the response should include the ",(0,l.kt)("inlineCode",{parentName:"td"},"Content-Disposition: attachment")," header. If this is the case, browsers will not attempt to display the returned file (e.g. with the browser's PDF viewer) and will download the file directly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Default name proposed by the browser when saving the file. If it is not specified, FoalTS extracts the name from the path (",(0,l.kt)("inlineCode",{parentName:"td"},"foo.jpg")," in the example).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Value of the ",(0,l.kt)("inlineCode",{parentName:"td"},"Cache-Control")," header (if necessary).")))),(0,l.kt)("h2",{id:"usage-with-a-database"},"Usage with a Database"),(0,l.kt)("p",null,"This example shows how to attach a profile picture to a user and how to retrieve and update it."),(0,l.kt)("p",null,"Create a new directory ",(0,l.kt)("inlineCode",{parentName:"p"},"uploaded/images/profiles")," at the root of your project."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"user.entity.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ nullable: true })\n  profile: string;\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"app.controller.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get, HttpResponseNotFound, HttpResponseRedirect, Post, render } from '@foal/core';\nimport { Disk, ParseAndValidateFiles } from '@foal/storage';\n\nimport { User } from './entities';\n\n// @JWTRequired OR @UseSessions\n// OR a custom hook that sets Context.user.\nexport class AppController {\n\n  @dependency\n  disk: Disk;\n\n  @Post('/profile')\n  @ParseAndValidateFiles({\n    profile: { required: true, saveTo: 'images/profiles' }\n  })\n  async uploadProfilePicture(ctx: Context<User>) {\n    const user = ctx.user;\n    if (user.profile) {\n      await this.disk.delete(user.profile);\n    }\n\n    user.profile = ctx.files.get('profile')[0].path;\n    await user.save();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Get('/profile')\n  async downloadProfilePicture(ctx: Context<User>) {\n    const { profile } = ctx.user;\n\n    if (!profile) {\n      return new HttpResponseNotFound();\n    }\n\n    return this.disk.createHttpResponse(profile);\n  }\n\n  @Get('/')\n  index() {\n    return render('./templates/index.html');\n  }\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"templates/index.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<body>\n  <img src="/profile">\n  \x3c!-- The enctype "multipart/form-data" is required. --\x3e\n  <form action="/profile" method="post" enctype="multipart/form-data">\n      <input type="file" name="profile">\n      <input type="submit" value="Upload image" name="submit">\n  </form>\n</body>\n</html>\n')),(0,l.kt)("h2",{id:"static-files"},"Static Files"),(0,l.kt)("p",null,"Static files, such as HTML, CSS, images, and JavaScript, are served by default from the ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," directory."),(0,l.kt)("h3",{id:"static-directory"},"Static directory"),(0,l.kt)("p",null,"If necessary, this directory can be modified using the configuration key ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.staticPath"),"."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  staticPath: assets\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "staticPath": "assets"\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    staticPath: "assets"\n  }\n}\n')))),(0,l.kt)("h3",{id:"virtual-prefix-path"},"Virtual prefix path"),(0,l.kt)("p",null,"In case you need to add a virtual prefix path to your static files, you can do so with the ",(0,l.kt)("inlineCode",{parentName:"p"},"staticPathPrefix")," configuration key."),(0,l.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  staticPathPrefix: /static\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "staticPathPrefix": "/static"\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    staticPathPrefix: "/static"\n  }\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Static file"),(0,l.kt)("th",{parentName:"tr",align:null},"URL path with no prefix"),(0,l.kt)("th",{parentName:"tr",align:null},"URL path with the prefix ",(0,l.kt)("inlineCode",{parentName:"th"},"/static ")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index.html"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"/index.html")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/static")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"/static/index.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"styles.css"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/styles.css")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/static/styles.css"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.js"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/app.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/static/app.js"))))))}c.isMDXComponent=!0}}]);