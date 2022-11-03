/*! For license information please see 9dd8a0d2.63567ebf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7054],{13771:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(67294),o=r(57753),n=r(39960),l=r(52263),c=r(44996);class i extends a.PureComponent{constructor(e){super(e),this.$=a.createRef(),this._=a.createRef()}render(){return a.createElement("span",{ref:this.$},a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,9984)).then((({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}const s=i,d="btn_xz27",u="btnSecondary_Cq54",m="bgWhite_DWSw",h="masthead_N3vR",g="content_jvMX",p="githubBtns_NLCW",f="screenshotContainer_r6nw",b="allInOneSection_XBDM",v="featuresWrapper_PdSK",w="architectureSection_qtRw",E="typescriptSection_GEUc",k="getStartedSection_JT9T",y="feature_t5AG",x="col1_v6yV",C="col2_HlB7",N="featureRow_dwfN",z="featureCell_QKEq",_="featureSymbol_rurj",F="featureContent_fuV7",M="architectureWrapper_vGIU",S="typescriptWrapper_kb70",A="codeImage_swNP",L="getStarted_tzCn",T="footerWrapper_Ezdc",G="footer_wDdC",I="githubLink_QyFq",D="twitterLink_t2rt",R="youtubeLink_mn7b",B="chatLink_otqI";function W(e){return a.createElement("div",{className:z},a.createElement("div",{className:_},"\u203a"),a.createElement("div",{className:F},a.createElement("h3",null,e.title),a.createElement("p",null,e.children)))}function U(e){let{imageSrc:t,href:r,companyName:o}=e;return a.createElement("a",{href:r,class:"tw-basis-1/2 sm:tw-basis-1/3 lg:tw-basis-1/6",target:"_blank"},a.createElement("div",{className:"tw-col-span-1 tw-flex tw-justify-center tw-py-8 tw-px-8 tw-bg-gray-50"},a.createElement("img",{className:"tw-max-h-12",src:""+t,alt:o})))}function j(){return a.createElement("div",null,a.createElement("div",{className:"tw-max-w-7xl tw-mx-auto tw-py-6 tw-px-4 sm:tw-px-6 lg:tw-py-12 lg:tw-px-8"},a.createElement("p",{className:"tw-text-center tw-text-lg tw-font-semibold tw-text-gray-600 tw-uppercase tw-mb-0"},"Trusted by"),a.createElement("div",{className:"tw-flex tw-justify-center tw-flex-wrap"},a.createElement(U,{imageSrc:(0,c.Z)("img/trusted-by/erkoware_logo.svg"),companyName:"erkoware solutions",href:"https://www.erkoware.de/"}))))}const H=function(){return(0,l.Z)(),a.createElement(o.Z,{description:"Full-featured Node.js framework, with no complexity"},a.createElement("header",{className:h},a.createElement("div",{className:g},a.createElement("h1",null,"Full-featured Node.js framework"),a.createElement("h3",null,a.createElement("span",null,"Simple and easy to use"),a.createElement("span",null," - "),a.createElement("span",null,"TypeScript-based"),a.createElement("span",null," - "),a.createElement("span",null,"Well-documented")),a.createElement("div",null,a.createElement(n.Z,{className:d,to:(0,c.Z)("docs/tutorials/simple-todo-list/1-installation")},"Get started"),a.createElement(n.Z,{className:d+" "+u,to:"https://discord.gg/QUrJv98"},"Join the chat")),a.createElement("div",{className:p},a.createElement(s,{href:"https://github.com/FoalTS/foal","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star FoalTS/foal on GitHub"},"Star"),a.createElement(s,{href:"https://github.com/sponsors/LoicPoullain","data-icon":"octicon-heart","data-size":"large","aria-label":"Sponsor @FoalTS on GitHub"},"Sponsor")))),a.createElement("section",null,a.createElement("div",{className:f},a.createElement("img",{src:(0,c.Z)("img/home/screenshot.png"),alt:""})),a.createElement("div",{className:m},a.createElement(j,null)),a.createElement("div",{className:b},a.createElement("div",{className:y},a.createElement("div",{className:x},a.createElement("h2",null,"All-in-One Framework \ud83d\ude80"),a.createElement("p",null,"The foundation is already there.",a.createElement("strong",null,"You don't have to rebuild everything from scratch")," or find and make 3rd-party packages work together. Everything is included.",a.createElement("br",null),a.createElement("br",null),"But if you wish, you can still import and use your favorite libraries. ",a.createElement("strong",null,"The framework is extensible"),".")),a.createElement("div",{className:C},a.createElement("div",{className:v},a.createElement("div",{className:N},a.createElement(W,{title:"CLI"},"Build and run your app in development and in production. Generate files."),a.createElement(W,{title:"ORM"},"Take advantage of TypeORM and generate migrations from your models.")),a.createElement("div",{className:N},a.createElement(W,{title:"JWTs and Session Tokens"},"Implement stateful or stateless authentication with cookies or the Authorization header."),a.createElement(W,{title:"Unit and E2E tests"},"Write automated tests with a ready-to-use environment and a simple dependency injection system.")),a.createElement("div",{className:N},a.createElement(W,{title:"Swagger Generation"},"Generate an OpenAPI specification and a Swagger page directly from your code."),a.createElement(W,{title:"Roles and Permissions"},"Control routes access with static roles or dynamic permissions.")),a.createElement("div",{className:N},a.createElement(W,{title:"Shell Scripts"},"Create scripts to be run from the command line with argument validation."),a.createElement(W,{title:"File Upload and Storage"},"Validate uploaded files and save them in local or in the Cloud (AWS S3).")))))),a.createElement("div",{className:w},a.createElement("div",{className:y},a.createElement("div",{className:x},a.createElement("h2",null,"Simple and Intuitive"),a.createElement("p",null,"In Foal, you ",a.createElement("strong",null,"only")," manage ",a.createElement("strong",null,"three concepts"),": controllers, services and hooks.",a.createElement("br",null),a.createElement("br",null),"Complexity and unnecessary abstractions are set aside so that you spend more time coding rather than reading the documentation.",a.createElement("br",null),a.createElement("br",null),a.createElement("strong",null,"No steep learning curve")," or over-engineering here.")),a.createElement("div",{className:C},a.createElement("div",{className:M},a.createElement("img",{src:(0,c.Z)("img/home/architecture2.png"),alt:"",className:A}))))),a.createElement("div",{className:E},a.createElement("div",{className:y},a.createElement("div",{className:C},a.createElement("div",{className:S},a.createElement("div",null,a.createElement("svg",{viewBox:"0 0 27 26",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{clipRule:"evenodd",d:"m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z",fillRule:"evenodd"})),a.createElement("strong",null,"TypeScript")))),a.createElement("div",{className:x},a.createElement("h2",null,"Robust Language"),a.createElement("p",null,"Foal leverages ",a.createElement("strong",null,"TypeScript")," to improve the overall quality of your code and detect most of your careless errors during compilation. The language also gives you ",a.createElement("strong",null,"autocompletion")," and a ",a.createElement("strong",null,"well-documented API"),".")))),a.createElement("div",{className:k},a.createElement("div",{className:L},a.createElement(n.Z,{className:d,to:(0,c.Z)("docs/tutorials/simple-todo-list/1-installation")},"Get started"))),a.createElement("footer",{className:T},a.createElement("div",{className:G},a.createElement("a",{className:I,href:"https://github.com/FoalTS/foal"}),a.createElement("a",{className:D,href:"https://twitter.com/FoalTs"}),a.createElement("a",{className:R,href:"https://www.youtube.com/channel/UCQFojM334E0YdoDq56MjfOQ"}),a.createElement("a",{className:B,href:"https://discord.gg/QUrJv98"})))))}},9984:(e,t,r)=>{r.r(t),r.d(t,{render:()=>F});var a=window.document,o=window.Math,n=window.HTMLElement,l=window.XMLHttpRequest,c=function(e,t){for(var r=0,a=e.length;r<a;r++)t(e[r])},i=function(e){return function(t,r,a){var o=e.createElement(t);if(null!=r)for(var n in r){var l=r[n];null!=l&&(null!=o[n]?o[n]=l:o.setAttribute(n,l))}return null!=a&&c(a,(function(t){o.appendChild("string"==typeof t?e.createTextNode(t):t)})),o}},s=i(a),d=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},m="github.com",h=l&&"prototype"in l&&"withCredentials"in l.prototype,g=h&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),p=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},f=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},b={light:".btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:focus,.social-count:hover{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:focus,.btn:hover{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8);box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:focus,.social-count:hover{color:#0349b4}.octicon-heart{color:#971368}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#db61a2}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:focus,.btn:hover{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:focus,.social-count:hover{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[d(b,t)?t:e]+"}"},w=function(e){if(null==e)return b.light;if(d(b,e))return b[e];var t=function(e,t,r,a){null==t&&(t="&"),null==r&&(r="="),null==a&&(a=window.decodeURIComponent);var o={};return c(e.split(t),(function(e){if(""!==e){var t=e.split(r);o[a(t[0])]=null!=t[1]?a(t.slice(1).join(r)):void 0}})),o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return b[d(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},E={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},k=function(e,t){e=u(e).replace(/^octicon-/,""),d(E,e)||(e="mark-github");var r=t>=24&&24 in E[e].heights?24:16,a=E[e].heights[r];return'<svg viewBox="0 0 '+a.width+" "+r+'" width="'+t*a.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+a.path+"</svg>"},y={},x=function(e,t){var r=y[e]||(y[e]=[]);if(!(r.push(t)>1)){var a=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete y[e];t=r.shift();)t.apply(null,arguments)}));if(h){var o=new l;p(o,"abort",a),p(o,"error",a),p(o,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void a(t)}a(200!==this.status,e)})),o.open("GET",e),o.send()}else{var n=this||window;n._=function(e){n._=null,a(200!==e.meta.status,e.data)};var c=i(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};p(c,"load",s),p(c,"error",s),function(e,t,r){if(null!=e.readyState){var a="readystatechange",o=function(){if(t.test(e.readyState))return f(e,a,o),r.apply(this,arguments)};p(e,a,o)}}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},C=function(e,t,r){var a=i(e.ownerDocument),o=e.appendChild(a("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+w(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=n:o.appendChild(e.ownerDocument.createTextNode(n));var l="large"===u(t["data-size"]),c=a("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:k(t["data-icon"],l?16:14)+"&nbsp;"},[a("span",{},[t["data-text"]||""])]),s=e.appendChild(a("div",{className:"widget"+(l?" widget-lg":"")},[c])),d=c.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-m.length)!=="."+m)return c.removeAttribute("href"),void r(s);var h=(" /"+c.pathname).split(/\/+/);if(((d===m||d==="gist."+m)&&"archive"===h[3]||d===m&&"releases"===h[3]&&("download"===h[4]||"latest"===h[4]&&"download"===h[5])||d==="codeload."+m)&&(c.target="_top"),"true"===u(t["data-show-count"])&&d===m&&"marketplace"!==h[1]&&"sponsors"!==h[1]&&"orgs"!==h[1]&&"users"!==h[1]&&"-"!==h[1]){var g,p;if(!h[2]&&h[1])p="followers",g="?tab=followers";else if(!h[3]&&h[2])p="stargazers_count",g="/stargazers";else if(h[4]||"subscription"!==h[3])if(h[4]||"fork"!==h[3]){if("issues"!==h[3])return void r(s);p="open_issues_count",g="/issues"}else p="forks_count",g="/network/members";else p="subscribers_count",g="/watchers";var f=h[2]?"/repos/"+h[1]+"/"+h[2]:"/users/"+h[1];x.call(this,"https://api.github.com"+f,(function(e,t){if(!e){var o=t[p];s.appendChild(a("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":o+" "+p.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},N=window.devicePixelRatio||1,z=function(e){return(N>1?o.ceil(o.round(e*N)/N*2)/2:o.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},F=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return c(["icon","color-scheme","text","size","show-count"],(function(r){var a="data-"+r;t[a]=e.getAttribute(a)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),g){var r=s("span");C(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var n=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(n,[0,0]),n.style.border="none";var l=function(){var r,c=n.contentWindow;try{r=c.document.body}catch(i){return void a.body.appendChild(n.parentNode.removeChild(n))}f(n,"load",l),C.call(c,r,e,(function(r){var a=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var a=e.getBoundingClientRect();t=o.max(t,z(a.width)),r=o.max(r,z(a.height))}return[t,r]}(r);n.parentNode.removeChild(n),function(e,t,r){var a=function(){return f(e,t,a),r.apply(this,arguments)};p(e,t,a)}(n,"load",(function(){_(n,a)})),n.src="https://unpkg.com/github-buttons@2.21.1/dist/buttons.html#"+(n.name=function(e,t,r,a){null==t&&(t="&"),null==r&&(r="="),null==a&&(a=window.encodeURIComponent);var o=[];for(var n in e){var l=e[n];null!=l&&o.push(a(n)+r+a(l))}return o.join(t)}(e)),t(n)}))};p(n,"load",l),a.body.appendChild(n)}}}}]);