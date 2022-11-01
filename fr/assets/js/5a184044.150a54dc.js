"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,h=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:l,block:m,defaultValue:f,values:h,groupId:d,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),w=(0,s.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===f?f:null!=(t=null!=f?f:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,i.U)(),[O,E]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==O&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,r=N.indexOf(t),n=g[r].value;n!==O&&(j(t),E(n),null!=d&&T(d,String(n)))},S=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=N.indexOf(e.currentTarget)+1;r=null!=(n=N[t])?n:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;r=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:S,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},81530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(65488),r(85162);const o={title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]},l=void 0,s={permalink:"/fr/blog/2021/04/08/whats-new-in-version-2-part-4",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-04-08-whats-new-in-version-2-part-4.md",source:"@site/blog/2021-04-08-whats-new-in-version-2-part-4.md",title:"What's new in version 2 (part 4/4)",description:"Banner",date:"2021-04-08T00:00:00.000Z",formattedDate:"8 avril 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:5.675,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 4/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-4.png",tags:["release"]},prevItem:{title:"Version 2.3 release notes",permalink:"/fr/blog/2021/04/22/version-2.3-release-notes"},nextItem:{title:"What's new in version 2 (part 3/4)",permalink:"/fr/blog/2021/03/11/whats-new-in-version-2-part-3"}},i={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(40337).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"This article presents the improvements to the session system in FoalTS version 2."),(0,a.kt)("p",null,"The new syntax can be used either with cookies or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header. It adds the following new features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"query all sessions of a given user"),(0,a.kt)("li",{parentName:"ul"},"query all connected users"),(0,a.kt)("li",{parentName:"ul"},"force logout of a specific user"),(0,a.kt)("li",{parentName:"ul"},"flash sessions"),(0,a.kt)("li",{parentName:"ul"},"session ID regeneration"),(0,a.kt)("li",{parentName:"ul"},"anonymous and authenticated sessions")),(0,a.kt)("p",null,"FoalTS also simplifies stateful CSRF protection so that all it takes is one setting to enable it."))}p.isMDXComponent=!0},40337:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-4a0daa4160e81b0b7922d53453c9e04f.png"}}]);