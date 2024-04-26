"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:v,className:g}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,s.U)(),[T,w]=(0,o.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==T&&(j(t),w(a),null!=v&&C(v,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var o;const t=E.indexOf(e.currentTarget)-1;n=null!=(o=E[t])?o:E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},95052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),l=n(85162);const i={title:"Configuraci\xf3n"},s=void 0,p={unversionedId:"architecture/configuration",id:"architecture/configuration",title:"Configuraci\xf3n",description:"In FoalTS, configuration refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/configuration.md",sourceDirName:"architecture",slug:"/architecture/configuration",permalink:"/es/docs/architecture/configuration",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuraci\xf3n"},sidebar:"someSidebar",previous:{title:"Gesti\xf3n de Errores",permalink:"/es/docs/architecture/error-handling"},next:{title:"Validaci\xf3n",permalink:"/es/docs/common/validation-and-sanitization"}},u={},c=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Deployment Environments",id:"deployment-environments",level:3},{value:"Reserved Parameters",id:"reserved-parameters",level:3},{value:"Accessing Configuration Values",id:"accessing-configuration-values",level:2},{value:"The <code>Config.get</code> method",id:"the-configget-method",level:3},{value:"Specifying a type",id:"specifying-a-type",level:4},{value:"Specifying a default value",id:"specifying-a-default-value",level:4},{value:"The <code>Config.getOrThrow</code> method",id:"the-configgetorthrow-method",level:3},{value:"Environment Variables and <code>.env</code> Files",id:"environment-variables-and-env-files",level:2},{value:"Deployment Environments",id:"deployment-environments-1",level:3},{value:"Using <code>*.local</code> files",id:"using-local-files",level:3},{value:"Note on the use of dotenv",id:"note-on-the-use-of-dotenv",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In FoalTS, ",(0,o.kt)("em",{parentName:"p"},"configuration")," refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port."),(0,o.kt)("p",null,"The framework encourages a ",(0,o.kt)("strong",{parentName:"p"},"strict separation between configuration and code")," and allows you to define your configuration in environment variables, in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files and in files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Config directory structure")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|- config/\n| |- e2e.json\n| |- default.json\n| |- development.json\n| |- production.json\n| |- ...\n| '- test.json\n|- src/\n'- .env\n")),(0,o.kt)("h2",{id:"configuration-files"},"Configuration Files"),(0,o.kt)("p",null,"Configuration values are provided using configuration files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory. Several formats are supported: YAML, JSON and JS files."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"config/default.","{","yml|json|js","}")),(0,o.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n'))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"YAML support")),(0,o.kt)("p",{parentName:"blockquote"},"The use of YAML for configuration requires the installation of the package ",(0,o.kt)("inlineCode",{parentName:"p"},"yamljs"),"."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"npm install yamljs\n")),(0,o.kt)("p",{parentName:"blockquote"},"When creating a new project, you can also add the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--yaml")," to have all the configuration directly generated in YAML."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"foal createapp my-app --yaml\n")),(0,o.kt)("p",{parentName:"blockquote"},"The extension of the YAML files must be ",(0,o.kt)("inlineCode",{parentName:"p"},".yml"),".")),(0,o.kt)("h3",{id:"deployment-environments"},"Deployment Environments"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"default")," configuration files are used regardless of the environment, i.e. regardless of the value assigned to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable."),(0,o.kt)("p",null,"Configuration values can also be set or overridden for a specific environment using the filename syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"config/<environment-name>.{json|yml|js}"),". If no value is assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),", the environment considered is ",(0,o.kt)("em",{parentName:"p"},"development"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The environment name can be provided in two ways in Foal: via the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable or via ",(0,o.kt)("inlineCode",{parentName:"p"},"FOAL_ENV"),". If both of these variables are set, then the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"FOAL_ENV")," is used by the configuration system.")),(0,o.kt)("h3",{id:"reserved-parameters"},"Reserved Parameters"),(0,o.kt)("p",null,"All parameters under the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," are reserved for the operation of the framework. You can assign values to those given in the documentation, but you cannot create new ones."),(0,o.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'settings:\n  session:\n    store: "@foal/typeorm"\n\ncustomConfiguration:\n  message: hello world\n'))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  },\n  "customConfiguration": {\n    "message": "hello world"\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  },\n  customConfiguration: {\n    message: "hello world"\n  }\n}\n')))),(0,o.kt)("h2",{id:"accessing-configuration-values"},"Accessing Configuration Values"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," class provides two static methods ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrThrow")," for reading configuration values."),(0,o.kt)("h3",{id:"the-configget-method"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"Config.get")," method"),(0,o.kt)("p",null,"This function takes the configuration key as first parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\n\nconst secret = Config.get('settings.jwt.secret');\n")),(0,o.kt)("p",null,"The algorithm below is used to retrieve the configuration value:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Return the value specified in the environment config file if it exists."),(0,o.kt)("li",{parentName:"ol"},"Return the value specified in the ",(0,o.kt)("em",{parentName:"li"},"default")," config file it is exists."),(0,o.kt)("li",{parentName:"ol"},"Return ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," otherwise.")),(0,o.kt)("h4",{id:"specifying-a-type"},"Specifying a type"),(0,o.kt)("p",null,"The method also accepts a second optional parameter to define the type of the returned value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@foal/core';\n\nconst foobar = Config.get('settings.foobar', 'boolean|string');\n// foobar is of type boolean|string|undefined\n")),(0,o.kt)("p",null,"When it is set, Foal checks that the configuration value has the correct type and if it does not, it will try to convert it to the desired type (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"true"')," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"). If it does not succeed, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigTypeError")," is thrown."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Allowed types"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"boolean","|","string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number","|","string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"any")))),(0,o.kt)("h4",{id:"specifying-a-default-value"},"Specifying a default value"),(0,o.kt)("p",null,"The third optional parameter of the method allows you to define a default value if none is found in the configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const foobar = Config.get('settings.foobar', 'boolean', false);\n// foobar is of type boolean\n")),(0,o.kt)("h3",{id:"the-configgetorthrow-method"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"Config.getOrThrow")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const foobar = Config.getOrThrow('settings.foobar', 'boolean');\n// foobar is of type boolean\n")),(0,o.kt)("p",null,"This method has the same behavior as ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.get")," except that it does not accept a default value. If no value is found, the method will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigNotFoundError"),"."),(0,o.kt)("h2",{id:"environment-variables-and-env-files"},"Environment Variables and ",(0,o.kt)("inlineCode",{parentName:"h2"},".env")," Files"),(0,o.kt)("p",null,"Configuration files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory are usually committed and therefore should not contain sensitive information (such as database credentials)."),(0,o.kt)("p",null,"The recommended approach to provide sensitive information to the application is to use environment variables and ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files which are not committed. Then, in the configuration files, the values are retrieved."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,o.kt)(r.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),(0,o.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('JWT_SECRET'),\n      secretEncoding: 'base64'\n    }\n  }\n}\n")))),(0,o.kt)("p",null,"If the same variable is provided both as environment variable and in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, then the value of the environment variable is used."),(0,o.kt)("h3",{id:"deployment-environments-1"},"Deployment Environments"),(0,o.kt)("p",null,"Just like the configuration files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," directory, the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files can be used for several environments: ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".env.test"),", etc."),(0,o.kt)("h3",{id:"using-local-files"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"*.local")," files"),(0,o.kt)("p",null,"In case you want to have two ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files, one to define the default env vars needed by the application and another to override these values on your local machine, you can use a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file."),(0,o.kt)("p",null,"If a variable is defined in both files, the value in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file will take precedence."),(0,o.kt)("p",null,"Similarly, you can define environment-specific local files (",(0,o.kt)("inlineCode",{parentName:"p"},".env.development.local"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production.local"),", etc)."),(0,o.kt)("h3",{id:"note-on-the-use-of-dotenv"},"Note on the use of dotenv"),(0,o.kt)("p",null,"Many NodeJS applications use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," library to manage the environment configuration. It loads variables from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file if it exists and assigns their values to the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," object."),(0,o.kt)("p",null,"When using Foal, it is strongly recommended that you do not use this library as it may break some functionality. For example, you will not be able to use other files such as ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local"),"."),(0,o.kt)("p",null,"The recommended approach to loading environment variables from ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files is to use Foal's configuration system using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Env")," class."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// dotenv\nconst value = process.env.FOO_BAR;\n\n// Foal\nimport { Env } from '@foal/core';\n\nconst value = Env.get('FOO_BAR');\n")))}m.isMDXComponent=!0}}]);