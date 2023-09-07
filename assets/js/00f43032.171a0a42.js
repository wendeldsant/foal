"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:b,groupId:y,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,o.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,s.U)(),[O,x]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=y){const e=T[y];null!=e&&e!==O&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==O&&(E(t),x(r),null!=y&&w(y,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;n=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;n=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>j.push(e),onKeyDown:P,onFocus:N,onClick:N},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},79063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={title:"Body Size Limiting"},s=void 0,u={unversionedId:"security/body-size-limiting",id:"version-3.x/security/body-size-limiting",title:"Body Size Limiting",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/versioned_docs/version-3.x/security/body-size-limiting.md",sourceDirName:"security",slug:"/security/body-size-limiting",permalink:"/docs/3.x/security/body-size-limiting",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/security/body-size-limiting.md",tags:[],version:"3.x",frontMatter:{title:"Body Size Limiting"},sidebar:"someSidebar",previous:{title:"Rate Limiting",permalink:"/docs/3.x/security/rate-limiting"},next:{title:"Checklist",permalink:"/docs/3.x/deployment-and-environments/checklist"}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.bodyParser.limit"),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bytes"},"bytes")," library for parsing."),(0,a.kt)(l.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  bodyParser:\n    limit: 50mb\n"))),(0,a.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    bodyParser: {\n      limit: "50mb"\n    }\n  }\n}\n')))))}d.isMDXComponent=!0}}]);