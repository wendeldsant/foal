(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[335],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5868:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=["components"],i={title:"Introduction"},c=void 0,u={unversionedId:"testing/introduction",id:"testing/introduction",isDocsHomePage:!1,title:"Introduction",description:"Every shipped app should come with a minimum set of tests. Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/testing/introduction.md",sourceDirName:"testing",slug:"/testing/introduction",permalink:"/fr/docs/testing/introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/introduction.md",version:"current",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"VSCode",permalink:"/fr/docs/development-environment/vscode"},next:{title:"Tests Unitaires",permalink:"/fr/docs/testing/unit-testing"}},l=[{value:"The Mocha Framework",id:"the-mocha-framework",children:[]},{value:"Asserting Libraries",id:"asserting-libraries",children:[]}],p={toc:l};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every shipped app should come with a ",(0,a.kt)("strong",{parentName:"p"},"minimum set of tests"),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."),(0,a.kt)("h2",{id:"the-mocha-framework"},"The Mocha Framework"),(0,a.kt)("p",null,"The testing ecosystem is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," framework. It provides functions to help you structuring your tests and also making assertions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"describe")," function groups tests (or groups of tests) together."),(0,a.kt)("li",{parentName:"ul"},"And the ",(0,a.kt)("inlineCode",{parentName:"li"},"it")," function defines an individual test.")),(0,a.kt)("p",null,"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n")),(0,a.kt)("p",null,"Running this file with mocha gives you the below report:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test report",src:r(8711).Z})),(0,a.kt)("h2",{id:"asserting-libraries"},"Asserting Libraries"),(0,a.kt)("p",null,"In addition to the Mocha framework, you can use the Node.js built-in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html"},"assert")," module. It provides some useful functions such as ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message"},"ok"),", ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message"},"strictEqual")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message"},"deepStrictEqual")," to make your tests more readable and concise. You can also use third party libraries such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chai"},"chai")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/expect"},"expect"),"."),(0,a.kt)("p",null,"The previous code can be refactored as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n")))}d.isMDXComponent=!0},8711:function(e,t,r){"use strict";t.Z=r.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"}}]);