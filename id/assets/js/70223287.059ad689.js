"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2986],{49456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),s=n(11470),i=n(19365);const l={title:"Body Size Limiting"},o=void 0,u={id:"security/body-size-limiting",title:"Body Size Limiting",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/security/body-size-limiting.md",sourceDirName:"security",slug:"/security/body-size-limiting",permalink:"/id/docs/3.x/security/body-size-limiting",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/security/body-size-limiting.md",tags:[],version:"3.x",frontMatter:{title:"Body Size Limiting"},sidebar:"someSidebar",previous:{title:"Rate Limiting",permalink:"/id/docs/3.x/security/rate-limiting"},next:{title:"Checklist",permalink:"/id/docs/3.x/deployment-and-environments/checklist"}},c={},d=[];function b(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",(0,r.jsx)(t.code,{children:"settings.bodyParser.limit"}),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/bytes",children:"bytes"})," library for parsing."]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(i.A,{value:"yaml",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"settings:\n  bodyParser:\n    limit: 50mb\n"})})}),(0,r.jsx)(i.A,{value:"json",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n'})})}),(0,r.jsx)(i.A,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    bodyParser: {\n      limit: "50mb"\n    }\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=b(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);