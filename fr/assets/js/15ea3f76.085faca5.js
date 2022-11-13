"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r;const{lazy:l,block:m,defaultValue:f,values:d,groupId:b,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),w=(0,i.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===f?f:null!=(t=null!=f?f:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[T,E]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const P=e=>{const t=e.currentTarget,r=N.indexOf(t),n=g[r].value;n!==T&&(C(t),E(n),null!=b&&O(b,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=N.indexOf(e.currentTarget)+1;r=null!=(n=N[t])?n:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;r=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function f(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},26915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(65488),r(85162);const o={title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},l=void 0,i={permalink:"/fr/blog/2021/03/02/whats-new-in-version-2-part-2",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-02-whats-new-in-version-2-part-2.md",source:"@site/blog/2021-03-02-whats-new-in-version-2-part-2.md",title:"What's new in version 2 (part 2/4)",description:"Banner",date:"2021-03-02T00:00:00.000Z",formattedDate:"2 mars 2021",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:5.055,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://www.loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://www.loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]},prevItem:{title:"What's new in version 2 (part 3/4)",permalink:"/fr/blog/2021/03/11/whats-new-in-version-2-part-3"},nextItem:{title:"Version 2.2 release notes",permalink:"/fr/blog/2021/02/25/version-2.2-release-notes"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(18883).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration and type safety"),(0,a.kt)("li",{parentName:"ul"},"Configuration and ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," files (",(0,a.kt)("inlineCode",{parentName:"li"},".env"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".env.test"),", etc)"),(0,a.kt)("li",{parentName:"ul"},"Available configuration file formats (JSON, YAML and JS)"),(0,a.kt)("li",{parentName:"ul"},"OpenAPI schemas and validation")))}p.isMDXComponent=!0},18883:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-b1bb8a7ff5057bbac324ac1a22b55703.png"}}]);