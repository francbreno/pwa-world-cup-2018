(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(n(1));n(124);var u=o(n(99));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=Array(a),o=0;o<a;o++)u[o]=arguments[o];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={matches:[]},r.timer=null,r.getCurrentMatches=function(){return fetch("https://worldcup.sfg.io/matches/current").then(function(e){return e.json()}).then(function(e){return e.filter(function(e){return!("TBD"===e.home_team.code||"TBD"===e.away_team.code)})}).then(function(e){return r.setState(function(){return{matches:e}})})},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentDidMount",value:function(){this.getCurrentMatches(),this.timer=window.setInterval(this.getCurrentMatches,65e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return this.state.matches.map(function(e){return a.default.createElement(u.default,{showStatistics:!0,key:e.fifa_id,match:e,compactScore:!0})})}}]),t}();t.default=l},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(125);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}})},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(1)),a=c(n(12)),u=c(n(100)),o=c(n(126));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-two-thirds"},r.default.createElement("section",{className:"section"},r.default.createElement(a.default,null,r.default.createElement("h1",{className:"title"},"Today's Matches"),r.default.createElement(u.default,{today:!0})))),r.default.createElement("div",{className:"column is-one-thirds is-centered"},r.default.createElement("section",{className:"section"},r.default.createElement(a.default,null,r.default.createElement("h1",{className:"title"},"Live Match"),r.default.createElement(o.default,null)))))}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(193);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}})}}]);
//# sourceMappingURL=4.chunk.js.map