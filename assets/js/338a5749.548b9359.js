"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},i=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-9-authenticated-api",id:"version-2.x/tutorials/real-world-example-with-react/tuto-9-authenticated-api",title:"Authenticating Users in the API",description:"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users.",source:"@site/versioned_docs/version-2.x/tutorials/real-world-example-with-react/9-authenticated-api.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/9-authenticated-api",permalink:"/docs/2.x/tutorials/real-world-example-with-react/9-authenticated-api",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/tutorials/real-world-example-with-react/9-authenticated-api.md",tags:[],version:"2.x",sidebarPosition:9,frontMatter:{title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},sidebar:"someSidebar",previous:{title:"Logging Users In and Out",permalink:"/docs/2.x/tutorials/real-world-example-with-react/8-authentication"},next:{title:"Authenticating Users in React",permalink:"/docs/2.x/tutorials/real-world-example-with-react/10-auth-with-react"}},s={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"API endpoint"),(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/stories")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"POST")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates a new story.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/stories/:storyId")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,a.kt)("td",{parentName:"tr",align:null},"Deletes a story.")))),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"stories.controller.ts")," file and add two new methods to the controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n\n  // readStories...\n\n  @Post()\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      title: { type: 'string', maxLength: 255 },\n      link: { type: 'string', maxLength: 255 },\n    },\n    required: [ 'title', 'link' ],\n    additionalProperties: false,\n  })\n  @UserRequired()\n  async createStory(ctx: Context) {\n    const story = new Story();\n    story.title = ctx.request.body.title;\n    story.link = ctx.request.body.link;\n    // Set the current user as the author of the story.\n    story.author = ctx.user;\n    await story.save();\n\n    return new HttpResponseCreated();\n  }\n\n  @Delete('/:storyId')\n  @ValidatePathParam('storyId', { type: 'number' })\n  @UserRequired()\n  async deleteStory(ctx: Context<User>, { storyId }: { storyId: number }) {\n    // Only retrieve stories whose author is the current user.\n    const story = await Story.findOne({ id: storyId, author: ctx.user });\n\n    if (!story) {\n      return new HttpResponseNotFound();\n    }\n\n    await story.remove();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,a.kt)("p",null,"When sending a request to these endpoints, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@UserRequired")," hook will return a 401 error if ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.user")," is not defined (i.e. if the user has not logged in first). But if it is, the controller method will be executed."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger")," and check that the controller is working as expected. You can, for example, first try to create a story without being connected and then log in and try again."))}p.isMDXComponent=!0}}]);