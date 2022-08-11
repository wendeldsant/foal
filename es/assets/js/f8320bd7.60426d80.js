"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4198],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(f,l(l({ref:n},c),{},{components:t})):o.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(7462),a=t(7294),r=t(6010),l=t(2389),i=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t;const{lazy:l,block:p,defaultValue:m,values:f,groupId:v,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:h.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),k=(0,i.l)(b,((e,n)=>e.value===n.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(n=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=C[v];null!=e&&e!==T&&b.some((n=>n.value===e))&&w(e)}const S=e=>{const n=e.currentTarget,t=E.indexOf(n),o=b[t].value;o!==T&&(O(n),w(o),null!=v&&N(v,String(o)))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var o;const n=E.indexOf(e.currentTarget)+1;t=null!=(o=E[n])?o:E[0];break}case"ArrowLeft":{var a;const n=E.indexOf(e.currentTarget)-1;t=null!=(a=E[n])?a:E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},g)},b.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>E.push(e),onKeyDown:j,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,l.Z)();return a.createElement(p,(0,o.Z)({key:String(n)},e))}},5749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=t(7462),a=(t(7294),t(3905)),r=t(5488),l=t(5162);const i={title:"New Configuration System"},s=void 0,u={unversionedId:"upgrade-to-v2/config-system",id:"upgrade-to-v2/config-system",title:"New Configuration System",description:"The Config.get Method",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/upgrade-to-v2/config-system.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/config-system",permalink:"/es/docs/upgrade-to-v2/config-system",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/config-system.md",tags:[],version:"current",frontMatter:{title:"New Configuration System"}},c={},d=[{value:"The <code>Config.get</code> Method",id:"the-configget-method",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"The <code>Config</code> and <code>ConfigMock</code> services",id:"the-config-and-configmock-services",level:2},{value:"New features",id:"new-features",level:2},{value:"Multiple <code>.env</code> files for each environment",id:"multiple-env-files-for-each-environment",level:3},{value:"Read an environment variable from <code>.env</code>",id:"read-an-environment-variable-from-env",level:3},{value:"Comments and quotes in <code>.env</code> files",id:"comments-and-quotes-in-env-files",level:3},{value:"JS configuration files",id:"js-configuration-files",level:3},{value:"Cloud PaaS providers",id:"cloud-paas-providers",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-configget-method"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config.get")," Method"),(0,a.kt)("p",null,"The legacy ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get")," method has been removed and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get2")," method has been renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get"),"."),(0,a.kt)("p",null,"If you were still using the old method, update your code as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Version 1\nconst foobar = Config.get('hello.world');\nconst debug = Config.get<boolean>('settings.debug');\nconst port = Config.get('port', 3001);\nconst port = Config.get<number>('port', 3001);\n\n// Version 2\nconst foobar = Config.get('hello.world');\nconst debug = Config.getOrThrow('settings.debug', 'boolean');\nconst port = Config.get('port', 'number', 3001);\nconst port = Config.get('port', 'number', 3001);\n")),(0,a.kt)("p",null,"More details can be found ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/architecture/configuration"},"here"),"."),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Environment variables are no longer loaded by default. You must specify them explicitly."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Config.get('settings.jwt.secret')")," will not return the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SETTINGS_JWT_SECRET")," by default. To do this, you must specify it explicitly in a configuration file:"),(0,a.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),(0,a.kt)("h2",{id:"the-config-and-configmock-services"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"Config")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"ConfigMock")," services"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," class can no longer be used as a service. You must use its static methods instead. Therefore, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigMock")," class has also been removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before\nexport class Controller {\n  @dependency\n  config: Config;\n\n  foo() {\n    const foobar = this.config.get('foobar');\n  }\n}\n\n// After\nexport class Controller {\n  foo() {\n    const foobar = Config.get('foobar');\n  }\n}\n\n")),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"multiple-env-files-for-each-environment"},"Multiple ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files for each environment"),(0,a.kt)("p",null,"Just like the JSON and YAML configuration files, it is now possible to have a separate ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file for each environment: ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production"),", etc."),(0,a.kt)("p",null,"The values provided in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.{environment}")," file override those defined in the default ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("h3",{id:"read-an-environment-variable-from-env"},"Read an environment variable from ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")),(0,a.kt)("p",null,"Environment variables defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file can be accessed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," method."),(0,a.kt)("h3",{id:"comments-and-quotes-in-env-files"},"Comments and quotes in ",(0,a.kt)("inlineCode",{parentName:"h3"},".env")," files"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files now support the use of comments and quotes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# This a comment\nHELLO=\"hello world\"\nHELLO='hello world'\n")),(0,a.kt)("h3",{id:"js-configuration-files"},"JS configuration files"),(0,a.kt)("p",null,"In addition to the JSON and YAML formats, configuration files can now also be written in JS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    debug: false,\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"cloud-paas-providers"},"Cloud PaaS providers"),(0,a.kt)("p",null,"Since the configuration keys are no longer linked to a specific environment variable, deployment with PaaS providers is facilitated."),(0,a.kt)("p",null,"For example, in version 1, the URI of MongoDB had to be passed with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_URI"),". If the cloud provider were giving the URI using the name ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGO_URI"),", things were becoming more difficult. This problem is now solved with the ",(0,a.kt)("inlineCode",{parentName:"p"},"env(*)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Env.get")," features."))}m.isMDXComponent=!0}}]);