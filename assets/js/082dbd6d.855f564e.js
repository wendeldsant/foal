(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9321],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,p=e.values,u=e.groupId,m=e.className,f=(0,r.Z)(),k=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,a.useState)(d),y=g[0],v=g[1],b=a.Children.toArray(e.children),N=[];if(null!=u){var w=k[u];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&v(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;v(a),null!=u&&(h(u,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},1e3:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),l=n(8215),s=["components"],c={title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},d=void 0,p={unversionedId:"file-system/local-and-cloud-storage",id:"file-system/local-and-cloud-storage",isDocsHomePage:!1,title:"Local and Cloud Storage",description:"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production.",source:"@site/docs/file-system/local-and-cloud-storage.md",sourceDirName:"file-system",slug:"/file-system/local-and-cloud-storage",permalink:"/docs/file-system/local-and-cloud-storage",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/file-system/local-and-cloud-storage.md",version:"current",frontMatter:{title:"Local and Cloud Storage",sidebar_label:"Local & Cloud Storage"},sidebar:"someSidebar",previous:{title:"Nuxt.js",permalink:"/docs/frontend-integration/nuxt.js"},next:{title:"Upload & Download Files",permalink:"/docs/file-system/upload-and-download-files"}},u=[{value:"Configuration",id:"configuration",children:[{value:"Local storage",id:"local-storage",children:[]},{value:"AWS S3",id:"aws-s3",children:[]},{value:"DigitalOcean",id:"digitalocean",children:[]}]},{value:"Read, Write and Delete Files",id:"read-write-and-delete-files",children:[{value:"Read files",id:"read-files",children:[]},{value:"Write files",id:"write-files",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Create an HttpResponse",id:"create-an-httpresponse",children:[]}]},{value:"Using a Specific Storage",id:"using-a-specific-storage",children:[]},{value:"Implementing a Disk",id:"implementing-a-disk",children:[]}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FoalTS provides its own file system for reading, writing and deleting files locally or in the Cloud. Thanks to its unified interface, you can easily choose different storage for each of your environments. This is especially useful when you're moving from development to production."),(0,i.kt)("p",null,"For example, when coding the application locally, you can use the file system of your operating system. Then, when deploying the application to staging or production, you can change the configuration to use AWS S3. Regardless of the storage chosen in the background, the code remains the same. Only the configuration changes."),(0,i.kt)("p",null,"Using FoalTS' file system has many other advantages as well:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It can generate a unique random name when saving a new file (with the ability to add an extension if necessary)."),(0,i.kt)("li",{parentName:"ul"},"File contents can be managed using buffers or streams."),(0,i.kt)("li",{parentName:"ul"},"Stream errors are correctly handled to avoid crashing the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Not found")," errors are unified with a single ",(0,i.kt)("inlineCode",{parentName:"li"},"FileDoesNotExist")," error."),(0,i.kt)("li",{parentName:"ul"},"FoalTS' file system can generate an ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpResponse"),"  to correctly download (large) files to the browser.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"First install the package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @foal/storage\n")),(0,i.kt)("p",null,"Next, you will need to provide the name of the storage to be used with the configuration key ",(0,i.kt)("inlineCode",{parentName:"p"},"setings.disk.driver"),". In the case of the local filesystem, this is ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),". In other cases, an additional package must be installed. Then the name to be provided is the name of the package."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: local\n")),(0,i.kt)("h3",{id:"local-storage"},"Local storage"),(0,i.kt)("p",null,"The name of the directory where the files are located is specified with the configuration key ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.disk.local.directory"),"."),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: 'local'\n    local:\n      directory: 'uploaded'\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "local",\n      "local": {\n        "directory": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "local",\n      local: {\n        directory: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,i.kt)("p",null,"AWS storage requires the installation of an additional package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,i.kt)("p",null,"The bucket name is specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.disk.s3.bucket")," configuration key."),(0,i.kt)("p",null,"AWS credentials are specified with the configuration keys ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.aws.accessKeyId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.aws.secretAccessKey"),"  or using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html"},"AWS traditional techniques"),"."),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  aws:\n    accessKeyId: xxx\n    secretAccessKey: yyy\n  disk:\n    driver: '@foal/aws-s3'\n    s3:\n      bucket: 'uploaded'\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "aws": {\n      "accessKeyId": "xxx",\n      "secretAccessKey": "yyy"\n    },\n    "disk": {\n      "driver": "@foal/aws-s3",\n      "s3": {\n        "bucket": "uploaded"\n      }\n    }\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    aws: {\n      accessKeyId: "xxx",\n      secretAccessKey: "yyy"\n    },\n    disk: {\n      driver: "@foal/aws-s3",\n      s3: {\n        bucket: "uploaded"\n      }\n    }\n  }\n}\n')))),(0,i.kt)("h3",{id:"digitalocean"},"DigitalOcean"),(0,i.kt)("p",null,"DigitalOcean Spaces are compatible with AWS S3 API, so you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@foal/aws-s3")," package to connect to this storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @foal/aws-s3\n")),(0,i.kt)("p",null,"The only difference is the configuration key ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.aws.endpoint"),", which is mandatory and requires the value ",(0,i.kt)("inlineCode",{parentName:"p"},"${REGION}.digitaloceanspaces.com"),"."),(0,i.kt)("h2",{id:"read-write-and-delete-files"},"Read, Write and Delete Files"),(0,i.kt)("p",null,"FoalTS file system is accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk")," service. It contains all the methods for reading, writing and deleting files."),(0,i.kt)("h3",{id:"read-files"},"Read files"),(0,i.kt)("p",null,"Files can be read using the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," method. It returns the size of the file as well as its contents in the form of a buffer or a readable stream. If the file does not exist, a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error is rejected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async readFile() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'buffer');\n\n    // ...\n  }\n\n  async readFile2() {\n    const { file, size } = await this.disk.read('avatars/xxx.jpg', 'stream');\n\n    // ...\n  }\n\n} \n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning"),": When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," method with streams, you may want to add an error listener to prevent the application from crashing if an unexpected error is emitted. Stream errors do not work as thrown or rejected errors and are automatically not caught by the framework."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const { file } = await this.disk.read('avatars/xxx.jpg', 'stream');\nfile.on('error', (err: Error) => {\n  // ...\n});\n"))),(0,i.kt)("h4",{id:"file-not-found"},"File not found"),(0,i.kt)("p",null,"To check whether an error is an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist"),", you can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"isFileDoesNotExist")," function. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"error instanceof FileDoesNotExist")," may not work if you have multiple nested packages because of the way ",(0,i.kt)("em",{parentName:"p"},"npm")," handles its dependencies."),(0,i.kt)("h4",{id:"file-size"},"File size"),(0,i.kt)("p",null,"If you only need to read the file size and not its content, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"readSize")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const size = await this.disk.readSize('avatars/xxx.jpg');\n")),(0,i.kt)("h3",{id:"write-files"},"Write files"),(0,i.kt)("p",null,"Files can be saved using the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," method. This method accepts a buffer or a readable stream. If no name is provided, it is automatically generated and used to save the file in the given directory. In this case, a file extension can also be provided to the method."),(0,i.kt)("p",null,"Once the file is successfully written, its path is returned so that it can be retrieved later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Readable } from 'stream';\n\nimport { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async createFile(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content);\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY='\n\n    // ...\n  }\n\n  async createFile2(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      extension: 'jpg'\n    });\n    // path === 'avatars/zMurtEGl1BTNJnJjeOfwx4GPWirZpoGRG9J8NbRRkRY=.jpg'\n\n    // ...\n  }\n\n  async createFile3(content: Buffer|Readable) {\n    const { path } = await this.disk.write('avatars', content, {\n      name: 'profile.jpg'\n    });\n    // path === 'avatars/profile.jpg'\n\n    // ...\n  }\n\n} \n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Backslashes ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," and slashes ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," at the end of the directory name are not supported. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"avatars/img_60")," is valid but ",(0,i.kt)("inlineCode",{parentName:"p"},"avatars\\img_60")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"avatars/img_60/")," both invalid.")),(0,i.kt)("h3",{id:"delete-files"},"Delete files"),(0,i.kt)("p",null,"Files can be deleted using the asynchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," method. Depending on the file storage, the method may or may not reject a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileDoesNotExist")," error if the file is not found."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nclass FileService {\n\n  @dependency\n  disk: Disk;\n\n  async deleteFile(content: Buffer|Readable) {\n    await this.disk.delete('avatars/profile.jpg');\n\n    // ...\n  }\n\n} \n")),(0,i.kt)("h3",{id:"create-an-httpresponse"},"Create an HttpResponse"),(0,i.kt)("p",null,"The service also provides a special method ",(0,i.kt)("inlineCode",{parentName:"p"},"createHttpResponse")," for creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponse"),". The returned object is optimized for downloading a (large) file in streaming."),(0,i.kt)("p",null,"The documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/file-system/upload-and-download-files#file-downloads"},"here"),"."),(0,i.kt)("h2",{id:"using-a-specific-storage"},"Using a Specific Storage"),(0,i.kt)("p",null,"In rare cases, you may wish to access multiple storages in your application. Each of them has its own ",(0,i.kt)("em",{parentName:"p"},"disk")," that you can inject and use in your controllers and services."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Get } from '@foal/core';\nimport { LocalDisk } from '@foal/storage';\nimport { S3Disk } from '@foal/aws-s3';\n\nclass ApiController {\n\n  @dependency\n  local: LocalDisk;\n\n  @dependency\n  s3: S3Disk;\n\n  // ...\n\n}\n")),(0,i.kt)("h2",{id:"implementing-a-disk"},"Implementing a Disk"),(0,i.kt)("p",null,"If FoalTS does not support your favorite Cloud provider, you can also implement your own ",(0,i.kt)("em",{parentName:"p"},"disk")," by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk")," class. "),(0,i.kt)("p",null,"If you want to use it through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk")," service, you need to specify its path in the configuration (or to publish it as an npm package and specify the package name). The name of the exported class should be ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcreteDisk"),"."),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  disk:\n    driver: './app/services/my-disk.service'\n"))),(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "disk": {\n      "driver": "./app/services/my-disk.service",\n    }\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    disk: {\n      driver: "./app/services/my-disk.service",\n    }\n  }\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);