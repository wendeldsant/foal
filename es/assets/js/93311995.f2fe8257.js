(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1448],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),a=t(944),i=t(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,p=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=(0,a.Z)(),g=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,r.useState)(u),k=v[0],b=v[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var w=g[d];null!=w&&w!==k&&c.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var n=e.currentTarget,t=N.indexOf(n),r=c[t].value;b(r),null!=d&&(f(d,r),setTimeout((function(){var e,t,r,a,i,o,s,p;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,p=o.innerWidth,t>=0&&i<=p&&a<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},t)}))),n?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},9443:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},944:function(e,n,t){"use strict";var r=t(7294),a=t(9443);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},5210:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=t(1395),l=t(8215),s=["components"],p={title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-1.png",tags:["release"]},u=void 0,c={permalink:"/es/blog/2021/02/17/whats-new-in-version-2-part-1",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-17-whats-new-in-version-2-part-1.md",source:"@site/blog/2021-02-17-whats-new-in-version-2-part-1.md",title:"What's new in version 2 (part 1/4)",description:"Banner",date:"2021-02-17T00:00:00.000Z",formattedDate:"February 17, 2021",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:4.69,truncated:!0,prevItem:{title:"Version 2.2 release notes",permalink:"/es/blog/2021/02/25/version-2.2-release-notes"},nextItem:{title:"Version 2.1 release notes",permalink:"/es/blog/2021/02/03/version-2.1-release-notes"}},d=[{value:"New CLI commands",id:"new-cli-commands",children:[{value:"Generating migrations",id:"generating-migrations",children:[]},{value:"Running migrations",id:"running-migrations",children:[]},{value:"Build and run scripts in watch mode (development)",id:"build-and-run-scripts-in-watch-mode-development",children:[]},{value:"Revert one migration",id:"revert-one-migration",children:[]},{value:"Build migrations, scripts and the app",id:"build-migrations-scripts-and-the-app",children:[]}]},{value:"Service and Application Initialization",id:"service-and-application-initialization",children:[]},{value:"The <code>AppController</code> interface",id:"the-appcontroller-interface",children:[]},{value:"Custom Error-Handling &amp; Hook Post Functions",id:"custom-error-handling--hook-post-functions",children:[]},{value:"Accessing File Metadata during Uploads",id:"accessing-file-metadata-during-uploads",children:[]}],m={toc:d};function h(e){var n=e.components,p=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Banner",src:t(5661).Z})),(0,i.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the new CLI commands"),(0,i.kt)("li",{parentName:"ul"},"the service and application initialization"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"AppController")," interface"),(0,i.kt)("li",{parentName:"ul"},"custom error-handling & hook post functions"),(0,i.kt)("li",{parentName:"ul"},"accessing file metadata during uploads")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article is the part 1 of the series of articles ",(0,i.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 2 can be found ",(0,i.kt)("a",{parentName:"p",href:"/es/blog/2021/03/02/whats-new-in-version-2-part-2"},"here"),".")),(0,i.kt)("h2",{id:"new-cli-commands"},"New CLI commands"),(0,i.kt)("p",null,"In version 1, there were many commands to use, and this, in a specific order. Running and generating migrations from model changes required four commands and building the whole application needed three."),(0,i.kt)("p",null,"In version 2, the number of CLI commands has been reduced and they have been simplified so that one action matches one command."),(0,i.kt)("h3",{id:"generating-migrations"},"Generating migrations"),(0,i.kt)("p",null,"This command generates migrations by comparing the current database schema and the latest changes in your models."),(0,i.kt)(o.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\n"))),(0,i.kt)(l.Z,{value:"v1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run migration:generate -- -n my_migration\n")))),(0,i.kt)("h3",{id:"running-migrations"},"Running migrations"),(0,i.kt)("p",null,"This command builds and runs all migrations."),(0,i.kt)(o.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrations\n"))),(0,i.kt)(l.Z,{value:"v1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:migrations\nnpm run migration:run\n")))),(0,i.kt)("h3",{id:"build-and-run-scripts-in-watch-mode-development"},"Build and run scripts in watch mode (development)"),(0,i.kt)("p",null,"If you want to re-build your scripts each time a file is change, you can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run develop")," in a separate terminal."),(0,i.kt)(o.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n"))),(0,i.kt)(l.Z,{value:"v1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In one terminal:\nnpm run build:scripts:w\n\n# In another terminal:\nfoal run my-script\n")))),(0,i.kt)("h3",{id:"revert-one-migration"},"Revert one migration"),(0,i.kt)("p",null,"This command reverts the last executed migration."),(0,i.kt)(o.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run revertmigration\n"))),(0,i.kt)(l.Z,{value:"v1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migration:revert\n")))),(0,i.kt)("h3",{id:"build-migrations-scripts-and-the-app"},"Build migrations, scripts and the app"),(0,i.kt)("p",null,"This command builds the application, the scripts and the migrations. Unit and e2e tests are not included."),(0,i.kt)(o.Z,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"v2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,i.kt)(l.Z,{value:"v1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build:app\nnpm run build:scripts\nnpm run build:migrations\n")))),(0,i.kt)("h2",{id:"service-and-application-initialization"},"Service and Application Initialization"),(0,i.kt)("p",null,"In version 1, it was possible to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," method to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppController")," class and ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," methods in the services to initialize the application. These features needed special options in order to be activated."),(0,i.kt)("p",null,"Starting from version 2, they are enabled by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  // ...\n\n  init() {\n    // Execute some code.\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MyService {\n  // ...\n\n  boot() {\n    // Execute some code.\n  }\n}\n")),(0,i.kt)("h2",{id:"the-appcontroller-interface"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"AppController")," interface"),(0,i.kt)("p",null,"This optional interface allows you to check that the ",(0,i.kt)("inlineCode",{parentName:"p"},"subControllers")," property has the correct type as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"handleError")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  init() {\n    // ...\n  }\n\n  handleError(error, ctx) {\n    // ...\n  }\n}\n")),(0,i.kt)("h2",{id:"custom-error-handling--hook-post-functions"},"Custom Error-Handling & Hook Post Functions"),(0,i.kt)("p",null,"In version 1, when an error was thrown or rejected in a hook or a controller method, the remaining hook post functions were not executed."),(0,i.kt)("p",null,"Starting from version 2, the error is directly converted to an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," and passed to the next post hook functions."),(0,i.kt)("p",null,"This can be useful in case we want to use exceptions as HTTP responses without breaking the hook post functions."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class PermissionError extends Error {}\n\nclass UserService {\n\n  async listUsers(applicant: User): Promise<User[]> {\n    if (!ctx.user.isAdmin) {\n      // Use exception here.\n      throw new PermissionError();\n    }\n\n    return User.find({ org: user.org });\n  }\n\n}\n\n// This hook measures the execution time and the controller method and hooks.\n@Hook(() => {\n  const time = process.hrtime();\n\n  // This post function will still be executed\n  // even if an error is thrown in listUsers.\n  return () => {\n    const seconds = process.hrtime(time)[0];\n    console.log(`Executed in ${seconds} seconds`);\n  };\n})\nexport class AppController {\n\n  @dependency\n  users: UserService;\n\n  @Get('/users')\n  @UseSessions({ user: fetchUser(User) })\n  @UserRequired()\n  listUsers(ctx: Context<User>) {\n    return new HttpResponseOK(\n      await users.listUsers(ctx.user)\n    );\n  }\n\n  handleError(error: Error, ctx: Context) {\n    // Converts the exception to an HTTP response.\n    // The error can have been thrown in a service used by the controller.\n    if (error instanceof PermissionError) {\n      return new HttpResponseForbidden();\n    }\n\n    // Returns an HttpResponseInternalServerError.\n    return renderError(error, response);\n  }\n}\n")),(0,i.kt)("h2",{id:"accessing-file-metadata-during-uploads"},"Accessing File Metadata during Uploads"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook to handle file upload, it is now possible to access the file metadata."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const file = ctx.request.body.files.profile;\n    // file.mimeType, file.buffer\n  }\n\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encoding")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Encoding type of the file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filename")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string\\|undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the file on the user's computer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mimeType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Mime type of the file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path where the file has been saved. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"buffer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,i.kt)("td",{parentName:"tr",align:null},"Buffer containing the entire file. If the ",(0,i.kt)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))))}h.isMDXComponent=!0},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})},5661:function(e,n,t){"use strict";n.Z=t.p+"assets/images/banner-1062d67acd6a063e9c6cc005928e2062.png"}}]);