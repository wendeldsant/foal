(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8832],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2782:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},s=void 0,c={unversionedId:"tutorials/real-world-example-with-react/tuto-9-authenticated-api",id:"tutorials/real-world-example-with-react/tuto-9-authenticated-api",isDocsHomePage:!1,title:"Authenticating Users in the API",description:"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users.",source:"@site/docs/tutorials/real-world-example-with-react/9-authenticated-api.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/9-authenticated-api",permalink:"/docs/tutorials/real-world-example-with-react/9-authenticated-api",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/9-authenticated-api.md",version:"current",sidebarPosition:9,frontMatter:{title:"Authenticating Users in the API",id:"tuto-9-authenticated-api",slug:"9-authenticated-api"},sidebar:"someSidebar",previous:{title:"Logging Users In and Out",permalink:"/docs/tutorials/real-world-example-with-react/8-authentication"},next:{title:"Authenticating Users in React",permalink:"/docs/tutorials/real-world-example-with-react/10-auth-with-react"}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that the login is configured, you can add two new routes to create and delete stories. Their access will be limited to authenticated users. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"API endpoint"),(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/stories")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"POST")),(0,o.kt)("td",{parentName:"tr",align:null},"Creates a new story.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/api/stories/:storyId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,o.kt)("td",{parentName:"tr",align:null},"Deletes a story.")))),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"stories.controller.ts")," file and add two new methods to the controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n\n  // readStories...\n\n  @Post()\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      title: { type: 'string', maxLength: 255 },\n      link: { type: 'string', maxLength: 255 },\n    },\n    required: [ 'title', 'link' ],\n    additionalProperties: false,\n  })\n  @UserRequired()\n  async createStory(ctx: Context) {\n    const story = new Story();\n    story.title = ctx.request.body.title;\n    story.link = ctx.request.body.link;\n    // Set the current user as the author of the story.\n    story.author = ctx.user;\n    await story.save();\n\n    return new HttpResponseCreated();\n  }\n\n  @Delete('/:storyId')\n  @ValidatePathParam('storyId', { type: 'number' })\n  @UserRequired()\n  async deleteStory(ctx: Context<User>, { storyId }: { storyId: number }) {\n    // Only retrieve stories whose author is the current user.\n    const story = await Story.findOne({ id: storyId, author: ctx.user });\n\n    if (!story) {\n      return new HttpResponseNotFound();\n    }\n\n    await story.remove();\n\n    return new HttpResponseNoContent();\n  }\n\n}\n")),(0,o.kt)("p",null,"When sending a request to these endpoints, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@UserRequired")," hook will return a 401 error if ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.user")," is not defined (i.e. if the user has not logged in first). But if it is, the controller method will be executed."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger")," and check that the controller is working as expected. You can, for example, first try to create a story without being connected and then log in and try again."))}d.isMDXComponent=!0}}]);