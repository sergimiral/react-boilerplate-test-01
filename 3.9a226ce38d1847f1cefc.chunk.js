webpackJsonp([3],{"./app/components/H1/index.js":function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=n("./node_modules/styled-components/dist/styled-components.es.js"),o=a(["\n  font-size: 2em;\n  margin-bottom: 0.25em;\n"],["\n  font-size: 2em;\n  margin-bottom: 0.25em;\n"]),r=s.a.h1(o);t.a=r},"./app/containers/DevelopersPage/List.js":function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=n("./node_modules/styled-components/dist/styled-components.es.js"),o=a(["\n  font-family: Georgia, Times, 'Times New Roman', serif;\n  padding-left: 1.75em;\n"],["\n  font-family: Georgia, Times, 'Times New Roman', serif;\n  padding-left: 1.75em;\n"]);s.a.ul(o)},"./app/containers/DevelopersPage/ListItem.js":function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=n("./node_modules/styled-components/dist/styled-components.es.js"),o=a(["\n  margin: 1em 0;\n"],["\n  margin: 1em 0;\n"]);s.a.li(o)},"./app/containers/DevelopersPage/ListItemTitle.js":function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=n("./node_modules/styled-components/dist/styled-components.es.js"),o=a(["\n  font-weight: bold;\n"],["\n  font-weight: bold;\n"]);s.a.p(o)},"./app/containers/DevelopersPage/index.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/react.js"),i=n.n(r),l=n("./node_modules/react-helmet/lib/Helmet.js"),c=n.n(l),p=n("./node_modules/react-intl/lib/index.es.js"),d=n("./app/components/H1/index.js"),u=n("./app/containers/DevelopersPage/messages.js"),f=(n("./app/containers/DevelopersPage/List.js"),n("./app/containers/DevelopersPage/ListItem.js"),n("./app/containers/DevelopersPage/ListItemTitle.js"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,s){var o=t&&t.defaultProps,r=arguments.length-3;if(n||0===r||(n={}),n&&o)for(var i in o)void 0===n[i]&&(n[i]=o[i]);else n||(n=o||{});if(1===r)n.children=s;else if(r>1){for(var l=Array(r),c=0;c<r;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}()),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return f("div",{},void 0,f(c.a,{title:"Feature Page",meta:[{name:"description",content:"Feature page of React.js Boilerplate application"}]}),f(d.a,{},void 0,i.a.createElement(p.c,u.a.header)))}}]),t}(i.a.Component);t.default=m},"./app/containers/DevelopersPage/messages.js":function(e,t,n){"use strict";var a=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(a.d)({header:{id:"boilerplate.containers.DevelopersPage.header",defaultMessage:"Developers"},scaffoldingHeader:{id:"boilerplate.containers.DevelopersPage.scaffolding.header",defaultMessage:"Quick scaffolding"},scaffoldingMessage:{id:"boilerplate.containers.DevelopersPage.scaffolding.message",defaultMessage:"Automate the creation of components, containers, routes, selectors\n  and sagas - and their tests - right from the CLI!"},feedbackHeader:{id:"boilerplate.containers.DevelopersPage.feedback.header",defaultMessage:"Instant feedback"},feedbackMessage:{id:"boilerplate.containers.DevelopersPage.feedback.message",defaultMessage:"\n      Enjoy the best DX and code your app at the speed of thought! Your\n    saved changes to the CSS and JS are reflected instantaneously\n    without refreshing the page. Preserve application state even when\n    you update something in the underlying code!\n    "},stateManagementHeader:{id:"boilerplate.containers.DevelopersPage.state_management.header",defaultMessage:"Predictable state management"},stateManagementMessages:{id:"boilerplate.containers.DevelopersPage.state_management.message",defaultMessage:"\n      Unidirectional data flow allows for change logging and time travel\n    debugging.\n    "},javascriptHeader:{id:"boilerplate.containers.DevelopersPage.javascript.header",defaultMessage:"Next generation JavaScript"},javascriptMessage:{id:"boilerplate.containers.DevelopersPage.javascript.message",defaultMessage:"Use template strings, object destructuring, arrow functions, JSX\n    syntax and more, today."},cssHeader:{id:"boilerplate.containers.DevelopersPage.css.header",defaultMessage:"Developers"},cssMessage:{id:"boilerplate.containers.DevelopersPage.css.message",defaultMessage:"Next generation CSS"},routingHeader:{id:"boilerplate.containers.DevelopersPage.routing.header",defaultMessage:"Industry-standard routing"},routingMessage:{id:"boilerplate.containers.DevelopersPage.routing.message",defaultMessage:"\n      Write composable CSS that's co-located with your components for\n    complete modularity. Unique generated class names keep the\n    specificity low while eliminating style clashes. Ship only the\n    styles that are on the page for the best performance.\n    "},networkHeader:{id:"boilerplate.containers.DevelopersPage.network.header",defaultMessage:"Offline-first"},networkMessage:{id:"boilerplate.containers.DevelopersPage.network.message",defaultMessage:"\n      The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.\n    "},intlHeader:{id:"boilerplate.containers.DevelopersPage.internationalization.header",defaultMessage:"Complete i18n Standard Internationalization & Pluralization"},intlMessage:{id:"boilerplate.containers.DevelopersPage.internationalization.message",defaultMessage:"Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`."}})}});