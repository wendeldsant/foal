"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:h,groupId:k,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==T&&(j(t),C(a),null!=k&&N(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},41101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={title:"What's new in version 2 (part 3/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-3.png",tags:["release"]},s=void 0,u={permalink:"/id/blog/2021/03/11/whats-new-in-version-2-part-3",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-11-whats-new-in-version-2-part-3.md",source:"@site/blog/2021-03-11-whats-new-in-version-2-part-3.md",title:"What's new in version 2 (part 3/4)",description:"Banner",date:"2021-03-11T00:00:00.000Z",formattedDate:"11 Maret 2021",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:3.665,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 3/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-3.png",tags:["release"]},prevItem:{title:"What's new in version 2 (part 4/4)",permalink:"/id/blog/2021/04/08/whats-new-in-version-2-part-4"},nextItem:{title:"What's new in version 2 (part 2/4)",permalink:"/id/blog/2021/03/02/whats-new-in-version-2-part-2"}},p={authorsImageUrls:[void 0]},c=[{value:"New JWT utilities",id:"new-jwt-utilities",level:2},{value:"Accessing config secrets and public/private keys",id:"accessing-config-secrets-and-publicprivate-keys",level:3},{value:"Using secrets",id:"using-secrets",level:4},{value:"Using public and private keys",id:"using-public-and-private-keys",level:4},{value:"Managing cookies",id:"managing-cookies",level:3},{value:"Stateless CSRF protection simplified",id:"stateless-csrf-protection-simplified",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Banner",src:n(30676).Z,width:"914",height:"315"})),(0,r.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the JWT utilities to manage secrets and RSA keys,"),(0,r.kt)("li",{parentName:"ul"},"the JWT utilities to manage cookies,"),(0,r.kt)("li",{parentName:"ul"},"and the new stateless CSRF protection.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article is the part 3 of the series of articles ",(0,r.kt)("em",{parentName:"p"},"What's new in version 2.0"),". Part 2 can be found ",(0,r.kt)("a",{parentName:"p",href:"/id/blog/2021/03/02/whats-new-in-version-2-part-2"},"here"),".")),(0,r.kt)("h2",{id:"new-jwt-utilities"},"New JWT utilities"),(0,r.kt)("h3",{id:"accessing-config-secrets-and-publicprivate-keys"},"Accessing config secrets and public/private keys"),(0,r.kt)("p",null,"Starting from version 2, there is a standardized way to provide and retrieve JWT secrets and RSA public/private keys: the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey"),"."),(0,r.kt)("h4",{id:"using-secrets"},"Using secrets"),(0,r.kt)("p",null,"In this example, a base64-encoded secret is provided in the configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  jwt:\n    secret: "env(JWT_SECRET)"\n    secretEncoding: base64\n'))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      secret: "env(JWT_SECRET)",\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," functions will return the secret."),(0,r.kt)("p",null,"In the case a ",(0,r.kt)("inlineCode",{parentName:"p"},"secretEncoding")," value is provided, the functions return a buffer which is the secret decoded with the provided encoding."),(0,r.kt)("h4",{id:"using-public-and-private-keys"},"Using public and private keys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\nconst { readFileSync } = require('fs');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      privateKey: Env.get('RSA_PRIVATE_KEY') || readFileSync('./id_rsa', 'utf8'),\n      publicKey: Env.get('RSA_PUBLIC_KEY') || readFileSync('./id_rsa.pub', 'utf8'),\n    }\n  }\n}\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPublicKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSecretOrPrivateKey")," return the keys from the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA_PUBLIC_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA_PRIVATE_KEY")," if they are defined or from the files ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," otherwise."),(0,r.kt)("h3",{id:"managing-cookies"},"Managing cookies"),(0,r.kt)("p",null,"In version 2, Foal provides two dedicated functions to manage JWT with cookies. Using these functions instead of manually setting the cookie has three benefits:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they include a CSRF protection (see section below),"),(0,r.kt)("li",{parentName:"ul"},"the function ",(0,r.kt)("inlineCode",{parentName:"li"},"setAuthCookie")," automatically sets the cookie expiration based on the token expiration,"),(0,r.kt)("li",{parentName:"ul"},"and cookie options can be provided through the configuration.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ cookie: true })\nexport class ApiController {\n  // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AuthController {\n\n  @Post('/login')\n  async login(ctx: Context) {\n    // ...\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n\n  @Post('/logout')\n  logout(ctx: Context) {\n    // ...\n\n    const response = new HttpResponseNoContent();\n    removeAuthCookie(response);\n    return response;\n  }\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cookie options")),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    cookie:\n      name: mycookiename # Default: auth\n      domain: example.com\n      httpOnly: true # Warning: unlike session tokens, the httpOnly directive has no default value.\n      path: /foo # Default: /\n      sameSite: strict # Default: lax if settings.jwt.csrf.enabled is true.\n      secure: true\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "cookie": {\n        "name": "mycookiename",\n        "domain": "example.com",\n        "httpOnly": true,\n        "path": "/foo",\n        "sameSite": "strict",\n        "secure": true\n      }\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      cookie: {\n        name: "mycookiename",\n        domain: "example.com",\n        httpOnly: true,\n        path: "/foo",\n        sameSite: "strict",\n        secure: true\n      }\n    }\n  }\n}\n')))),(0,r.kt)("h2",{id:"stateless-csrf-protection-simplified"},"Stateless CSRF protection simplified"),(0,r.kt)("p",null,"In version 1, providing a CSRF protection was quite complex. We needed to provide another secret, generate a stateless token, manage the CSRF cookie (expiration, etc), use an additional hook, etc."),(0,r.kt)("p",null,"Starting from version 2, the CSRF protection is all managed by ",(0,r.kt)("inlineCode",{parentName:"p"},"@JWTRequired"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setAuthCookie")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeAuthCookie"),"."),(0,r.kt)("p",null,"The only thing that you have to do it to enable it through the configuration:"),(0,r.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,r.kt)("p",null,"When it is enabled, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," cookie is sent to the client at the same time as the auth cookie (containing your JWT). It contains a stateless CSRF token which is signed and has the same expiration date as your JWT."),(0,r.kt)("p",null,"When a request is made to the server, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@JWTRequired")," hooks expects you to include its value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," header."))}d.isMDXComponent=!0},30676:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-b497efc5d6adf69bee9081634e786012.png"}}]);