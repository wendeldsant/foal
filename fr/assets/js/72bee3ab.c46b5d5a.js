"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:b,values:m,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===b?b:null!=(t=null!=b?b:null==(r=y.find((e=>e.props.default)))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,i.U)(),[O,x]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=T[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,r=j.indexOf(t),n=h[r].value;n!==O&&(E(t),x(n),null!=f&&w(f,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;r=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;r=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>j.push(e),onKeyDown:P,onFocus:N,onClick:N},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},37172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),l=r(85162);const s={title:"Taille du Corps de Requ\xeate"},i=void 0,u={unversionedId:"cookbook/request-body-size",id:"version-2.x/cookbook/request-body-size",title:"Taille du Corps de Requ\xeate",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.x/cookbook/request-body-size.md",sourceDirName:"cookbook",slug:"/cookbook/request-body-size",permalink:"/fr/docs/2.x/cookbook/request-body-size",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/cookbook/request-body-size.md",tags:[],version:"2.x",frontMatter:{title:"Taille du Corps de Requ\xeate"},sidebar:"someSidebar",previous:{title:"404 Page",permalink:"/fr/docs/2.x/cookbook/not-found-page"},next:{title:"ExpressJS",permalink:"/fr/docs/2.x/cookbook/expressjs"}},c={},p=[],d={toc:p};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.bodyParser.limit"),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bytes"},"bytes")," library for parsing."),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  bodyParser:\n    limit: 50mb\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    bodyParser: {\n      limit: "50mb"\n    }\n  }\n}\n')))))}b.isMDXComponent=!0}}]);