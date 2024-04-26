"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8794],{59200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),o=t(11470),i=t(19365);const a={title:"Configuration"},l=void 0,c={id:"architecture/configuration",title:"Configuration",description:"In FoalTS, configuration refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/architecture/configuration.md",sourceDirName:"architecture",slug:"/architecture/configuration",permalink:"/id/docs/architecture/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration"},sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/id/docs/architecture/error-handling"},next:{title:"Validation",permalink:"/id/docs/common/validation-and-sanitization"}},d={},u=[{value:"Configuration Files",id:"configuration-files",level:2},{value:"Deployment Environments",id:"deployment-environments",level:3},{value:"Reserved Parameters",id:"reserved-parameters",level:3},{value:"Accessing Configuration Values",id:"accessing-configuration-values",level:2},{value:"The <code>Config.get</code> method",id:"the-configget-method",level:3},{value:"Specifying a type",id:"specifying-a-type",level:4},{value:"Specifying a default value",id:"specifying-a-default-value",level:4},{value:"The <code>Config.getOrThrow</code> method",id:"the-configgetorthrow-method",level:3},{value:"Environment Variables and <code>.env</code> Files",id:"environment-variables-and-env-files",level:2},{value:"Deployment Environments",id:"deployment-environments-1",level:3},{value:"Using <code>*.local</code> files",id:"using-local-files",level:3},{value:"Note on the use of dotenv",id:"note-on-the-use-of-dotenv",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In FoalTS, ",(0,r.jsx)(n.em,{children:"configuration"})," refers to any parameter that may vary between deploy environments (production, development, test, etc). It includes sensitive information, such as your database credentials, or simple settings, such as the server port."]}),"\n",(0,r.jsxs)(n.p,{children:["The framework encourages a ",(0,r.jsx)(n.strong,{children:"strict separation between configuration and code"})," and allows you to define your configuration in environment variables, in ",(0,r.jsx)(n.code,{children:".env"})," files and in files in the ",(0,r.jsx)(n.code,{children:"config/"})," directory."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Config directory structure"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"|- config/\n| |- e2e.json\n| |- default.json\n| |- development.json\n| |- production.json\n| |- ...\n| '- test.json\n|- src/\n'- .env\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration values are provided using configuration files in the ",(0,r.jsx)(n.code,{children:"config/"})," directory. Several formats are supported: YAML, JSON and JS files."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"config/default.{yml|json|js}"})}),"\n",(0,r.jsxs)(o.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(i.A,{value:"yaml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'settings:\n  session:\n    store: "@foal/typeorm"\n'})})}),(0,r.jsx)(i.A,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  }\n}\n'})})}),(0,r.jsx)(i.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YAML support"})}),"\n",(0,r.jsxs)(n.p,{children:["The use of YAML for configuration requires the installation of the package ",(0,r.jsx)(n.code,{children:"yamljs"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install yamljs\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When creating a new project, you can also add the flag ",(0,r.jsx)(n.code,{children:"--yaml"})," to have all the configuration directly generated in YAML."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"foal createapp my-app --yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The extension of the YAML files must be ",(0,r.jsx)(n.code,{children:".yml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-environments",children:"Deployment Environments"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"default"})," configuration files are used regardless of the environment, i.e. regardless of the value assigned to the ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," environment variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Configuration values can also be set or overridden for a specific environment using the filename syntax: ",(0,r.jsx)(n.code,{children:"config/<environment-name>.{json|yml|js}"}),". If no value is assigned to ",(0,r.jsx)(n.code,{children:"NODE_ENV"}),", the environment considered is ",(0,r.jsx)(n.em,{children:"development"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The environment name can be provided in two ways in Foal: via the ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," environment variable or via ",(0,r.jsx)(n.code,{children:"FOAL_ENV"}),". If both of these variables are set, then the value of ",(0,r.jsx)(n.code,{children:"FOAL_ENV"})," is used by the configuration system."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reserved-parameters",children:"Reserved Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["All parameters under the keyword ",(0,r.jsx)(n.code,{children:"settings"})," are reserved for the operation of the framework. You can assign values to those given in the documentation, but you cannot create new ones."]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(i.A,{value:"yaml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'settings:\n  session:\n    store: "@foal/typeorm"\n\ncustomConfiguration:\n  message: hello world\n'})})}),(0,r.jsx)(i.A,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm"\n    }\n  },\n  "customConfiguration": {\n    "message": "hello world"\n  }\n}\n'})})}),(0,r.jsx)(i.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\n  settings: {\n    session: {\n      store: "@foal/typeorm"\n    }\n  },\n  customConfiguration: {\n    message: "hello world"\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-configuration-values",children:"Accessing Configuration Values"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Config"})," class provides two static methods ",(0,r.jsx)(n.code,{children:"get"})," and ",(0,r.jsx)(n.code,{children:"getOrThrow"})," for reading configuration values."]}),"\n",(0,r.jsxs)(n.h3,{id:"the-configget-method",children:["The ",(0,r.jsx)(n.code,{children:"Config.get"})," method"]}),"\n",(0,r.jsx)(n.p,{children:"This function takes the configuration key as first parameter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@foal/core';\n\nconst secret = Config.get('settings.jwt.secret');\n"})}),"\n",(0,r.jsx)(n.p,{children:"The algorithm below is used to retrieve the configuration value:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Return the value specified in the environment config file if it exists."}),"\n",(0,r.jsxs)(n.li,{children:["Return the value specified in the ",(0,r.jsx)(n.em,{children:"default"})," config file it is exists."]}),"\n",(0,r.jsxs)(n.li,{children:["Return ",(0,r.jsx)(n.code,{children:"undefined"})," otherwise."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"specifying-a-type",children:"Specifying a type"}),"\n",(0,r.jsx)(n.p,{children:"The method also accepts a second optional parameter to define the type of the returned value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@foal/core';\n\nconst foobar = Config.get('settings.foobar', 'boolean|string');\n// foobar is of type boolean|string|undefined\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When it is set, Foal checks that the configuration value has the correct type and if it does not, it will try to convert it to the desired type (e.g. ",(0,r.jsx)(n.code,{children:'"true"'})," becomes ",(0,r.jsx)(n.code,{children:"true"}),"). If it does not succeed, a ",(0,r.jsx)(n.code,{children:"ConfigTypeError"})," is thrown."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Allowed types"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"string"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"number"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"boolean"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"boolean|string"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"number|string"})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"any"})})]})]}),"\n",(0,r.jsx)(n.h4,{id:"specifying-a-default-value",children:"Specifying a default value"}),"\n",(0,r.jsx)(n.p,{children:"The third optional parameter of the method allows you to define a default value if none is found in the configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const foobar = Config.get('settings.foobar', 'boolean', false);\n// foobar is of type boolean\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"the-configgetorthrow-method",children:["The ",(0,r.jsx)(n.code,{children:"Config.getOrThrow"})," method"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const foobar = Config.getOrThrow('settings.foobar', 'boolean');\n// foobar is of type boolean\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This method has the same behavior as ",(0,r.jsx)(n.code,{children:"Config.get"})," except that it does not accept a default value. If no value is found, the method will throw a ",(0,r.jsx)(n.code,{children:"ConfigNotFoundError"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"environment-variables-and-env-files",children:["Environment Variables and ",(0,r.jsx)(n.code,{children:".env"})," Files"]}),"\n",(0,r.jsxs)(n.p,{children:["Configuration files in the ",(0,r.jsx)(n.code,{children:"config/"})," directory are usually committed and therefore should not contain sensitive information (such as database credentials)."]}),"\n",(0,r.jsxs)(n.p,{children:["The recommended approach to provide sensitive information to the application is to use environment variables and ",(0,r.jsx)(n.code,{children:".env"})," files which are not committed. Then, in the configuration files, the values are retrieved."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:".env"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n'})}),"\n",(0,r.jsxs)(o.A,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],children:[(0,r.jsx)(i.A,{value:"yaml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"})})}),(0,r.jsx)(i.A,{value:"json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'})})}),(0,r.jsx)(i.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('JWT_SECRET'),\n      secretEncoding: 'base64'\n    }\n  }\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If the same variable is provided both as environment variable and in the ",(0,r.jsx)(n.code,{children:".env"})," file, then the value of the environment variable is used."]}),"\n",(0,r.jsx)(n.h3,{id:"deployment-environments-1",children:"Deployment Environments"}),"\n",(0,r.jsxs)(n.p,{children:["Just like the configuration files in the ",(0,r.jsx)(n.code,{children:"config/"})," directory, the ",(0,r.jsx)(n.code,{children:".env"})," files can be used for several environments: ",(0,r.jsx)(n.code,{children:".env.production"}),", ",(0,r.jsx)(n.code,{children:".env.test"}),", etc."]}),"\n",(0,r.jsxs)(n.h3,{id:"using-local-files",children:["Using ",(0,r.jsx)(n.code,{children:"*.local"})," files"]}),"\n",(0,r.jsxs)(n.p,{children:["In case you want to have two ",(0,r.jsx)(n.code,{children:".env"})," files, one to define the default env vars needed by the application and another to override these values on your local machine, you can use a ",(0,r.jsx)(n.code,{children:".env.local"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["If a variable is defined in both files, the value in the ",(0,r.jsx)(n.code,{children:".env.local"})," file will take precedence."]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly, you can define environment-specific local files (",(0,r.jsx)(n.code,{children:".env.development.local"}),", ",(0,r.jsx)(n.code,{children:".env.production.local"}),", etc)."]}),"\n",(0,r.jsx)(n.h3,{id:"note-on-the-use-of-dotenv",children:"Note on the use of dotenv"}),"\n",(0,r.jsxs)(n.p,{children:["Many NodeJS applications use the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv"})," library to manage the environment configuration. It loads variables from the ",(0,r.jsx)(n.code,{children:".env"})," file if it exists and assigns their values to the ",(0,r.jsx)(n.code,{children:"process.env"})," object."]}),"\n",(0,r.jsxs)(n.p,{children:["When using Foal, it is strongly recommended that you do not use this library as it may break some functionality. For example, you will not be able to use other files such as ",(0,r.jsx)(n.code,{children:".env.production"})," and ",(0,r.jsx)(n.code,{children:".env.local"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The recommended approach to loading environment variables from ",(0,r.jsx)(n.code,{children:".env"})," files is to use Foal's configuration system using the ",(0,r.jsx)(n.code,{children:"Config"})," or ",(0,r.jsx)(n.code,{children:"Env"})," class."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// dotenv\nconst value = process.env.FOO_BAR;\n\n// Foal\nimport { Env } from '@foal/core';\n\nconst value = Env.get('FOO_BAR');\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),o=t(23104),i=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:s}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=c??p;return f({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);