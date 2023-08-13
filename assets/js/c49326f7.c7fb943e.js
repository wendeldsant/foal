"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8832],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(m,i(i({ref:e},d),{},{components:r})):n.createElement(m,i({ref:e},d))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13288:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},i=void 0,l={unversionedId:"tutorials/real-world-example-with-react/tuto-9-authenticated-api",id:"tutorials/real-world-example-with-react/tuto-9-authenticated-api",title:"Authenticating Users in the API",description:"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users.",source:"@site/docs/tutorials/real-world-example-with-react/9-authenticated-api.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/9-authenticated-api",permalink:"/docs/tutorials/real-world-example-with-react/9-authenticated-api",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/9-authenticated-api.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},sidebar:"someSidebar",previous:{title:"Logging Users In and Out",permalink:"/docs/tutorials/real-world-example-with-react/8-authentication"},next:{title:"Authenticating Users in React",permalink:"/docs/tutorials/real-world-example-with-react/10-auth-with-react"}},s={},c=[],d={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"API endpoint"),(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/stories")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"POST")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates a new story.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/stories/:storyId")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,a.kt)("td",{parentName:"tr",align:null},"Deletes a story.")))),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"stories.controller.ts")," file and add two new methods to the controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n\n  // readStories...\n\n  @Post()\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      title: { type: 'string', maxLength: 255 },\n      link: { type: 'string', maxLength: 255 },\n    },\n    required: [ 'title', 'link' ],\n    additionalProperties: false,\n  })\n  @UserRequired()\n  async createStory(ctx: Context<User>) {\n    const story = new Story();\n    story.title = ctx.request.body.title;\n    story.link = ctx.request.body.link;\n    // Set the current user as the author of the story.\n    story.author = ctx.user;\n    await story.save();\n\n    return new HttpResponseCreated();\n  }\n\n  @Delete('/:storyId')\n  @ValidatePathParam('storyId', { type: 'number' })\n  @UserRequired()\n  async deleteStory(ctx: Context<User>, { storyId }: { storyId: number }) {\n    // Only retrieve stories whose author is the current user.\n    const story = await Story.findOneBy({ id: storyId, author: { id: ctx.user.id } });\n\n    if (!story) {\n      return new HttpResponseNotFound();\n    }\n\n    await story.remove();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,a.kt)("p",null,"When sending a request to these endpoints, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@UserRequired")," hook will return a 401 error if ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.user")," is null (i.e. if the user has not logged in first). But if it is, the controller method will be executed."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger")," and check that the controller is working as expected. You can, for example, first try to create a story without being connected and then log in and try again."))}p.isMDXComponent=!0}}]);