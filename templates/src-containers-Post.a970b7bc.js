(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{114:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(20),i=(n(344),n(347)),u=n(348);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return b(s(s(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?s(e):t}(this,(e=f(t)).call.apply(e,[this].concat(a))))),"state",{speed:.1}),b(s(s(n)),"animationRef",o.a.createRef()),b(s(s(n)),"setSpeed",function(e){n.setState({speed:e.target.valueAsNumber})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;i.b.load(u.a,function(t){return"animation"===t.name?new i.a(e.animationRef.current):"mutable speed"===t.name?{fulfilled:function(t){e.animationSpeed=t}}:void 0})}},{key:"componentDidUpdate",value:function(e,t){t.speed!==this.state.speed&&(this.animationSpeed.value=t.speed)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{ref:this.animationRef}),o.a.createElement("small",null,"Speed: ",this.state.speed),o.a.createElement("br",null),o.a.createElement("input",{type:"range",min:"0",max:"2",step:"0.1",value:this.state.speed,onChange:this.setSpeed}))}}]),t}(),y=n(349);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(O(O(n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?O(e):t}(this,(e=v(t)).call.apply(e,[this].concat(a))))),"animationRef",o.a.createRef()),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r["Component"]),function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this;i.b.load(y.a,function(t){if("canvas"===t.name)return new i.a(e.animationRef.current)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Illusion"},o.a.createElement("div",{ref:this.animationRef,width:"960",height:"300"}))}}]),t}(),E=n(350),S=n.n(E);t.default=Object(a.withRouteData)(function(e){var t=e.post;return o.a.createElement(r.Fragment,null,o.a.createElement(a.Head,null,o.a.createElement("meta",{charSet:"UTF-8"}),o.a.createElement("title",null,t.title)),o.a.createElement("div",{className:"post"},o.a.createElement(a.Link,{to:"/blog/"},"<"," Back"),o.a.createElement("br",null),o.a.createElement(S.a,{jsx:t.contents,showWarnings:!0,renderInWrapper:!1,components:{Observable:m,Illusion:g}})))})}}]);
//# sourceMappingURL=src-containers-Post.a970b7bc.js.map