(function(){var g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function l(){l=function(){};k.Symbol||(k.Symbol=m)}var p=0;function m(a){return"jscomp_symbol_"+(a||"")+p++}
function q(){l();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&g(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return r(this)}});q=function(){}}function r(a){var b=0;return t(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function t(a){q();a={next:a};a[k.Symbol.iterator]=function(){return this};return a}
function u(a){if(!(a instanceof Array)){q();var b=a[Symbol.iterator];a=b?b.call(a):r(a);for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var v=window.Element.prototype,w=v.matches||v.matchesSelector||v.webkitMatchesSelector||v.mozMatchesSelector||v.msMatchesSelector||v.oMatchesSelector;function x(a,b){if(a&&1==a.nodeType&&b){if("string"==typeof b||1==b.nodeType)return a==b||y(a,b);if("length"in b)for(var c=0,d;d=b[c];c++)if(a==d||y(a,d))return!0}return!1}
function y(a,b){if("string"!=typeof b)return!1;if(w)return w.call(a,b);b=a.parentNode.querySelectorAll(b);for(var c=0,d;d=b[c];c++)if(d==a)return!0;return!1}function z(a){for(var b=[];a&&a.parentNode&&1==a.parentNode.nodeType;)a=a.parentNode,b.push(a);return b}
function A(a,b,c){function d(a){var d;if(h.composed&&"function"==typeof a.composedPath)for(var e=a.composedPath(),f=0,n;n=e[f];f++)1==n.nodeType&&x(n,b)&&(d=n);else a:{if((d=a.target)&&1==d.nodeType&&b)for(d=[d].concat(z(d)),e=0;f=d[e];e++)if(x(f,b)){d=f;break a}d=void 0}d&&c.call(d,a,d)}var e=document,h={composed:!0,l:!0},h=void 0===h?{}:h;e.addEventListener(a,d,h.l);return{h:function(){e.removeEventListener(a,d,h.l)}}}
function B(a){var b={};if(!a||1!=a.nodeType)return b;a=a.attributes;if(!a.length)return{};for(var c=0,d;d=a[c];c++)b[d.name]=d.value;return b}var C=/:(80|443)$/,D=document.createElement("a"),E={};
function F(a){a=a&&"."!=a?a:location.href;if(E[a])return E[a];D.href=a;if("."==a.charAt(0)||"/"==a.charAt(0))return F(D.href);var b="80"==D.port||"443"==D.port?"":D.port,b="0"==b?"":b,c=D.host.replace(C,"");return E[a]={hash:D.hash,host:c,hostname:D.hostname,href:D.href,origin:D.origin?D.origin:D.protocol+"//"+c,pathname:"/"==D.pathname.charAt(0)?D.pathname:"/"+D.pathname,port:b,protocol:D.protocol,search:D.search}}var G=[];
function I(a,b){var c=this;this.context=a;this.i=b;this.f=(this.c=/Task$/.test(b))?a.get(b):a[b];this.a=[];this.b=[];this.g=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];return c.b[c.b.length-1].apply(null,[].concat(u(b)))};this.c?a.set(b,this.g):a[b]=this.g}function J(a,b){b=a.a.indexOf(b);-1<b&&(a.a.splice(b,1),0<a.a.length?K(a):a.h())}function K(a){a.b=[];for(var b,c=0;b=a.a[c];c++){var d=a.b[c-1]||a.f.bind(a.context);a.b.push(b(d))}}
I.prototype.h=function(){var a=G.indexOf(this);-1<a&&(G.splice(a,1),this.c?this.context.set(this.i,this.f):this.context[this.i]=this.f)};function L(a){var b=history,c=G.filter(function(c){return c.context==b&&c.i==a})[0];c||(c=new I(b,a),G.push(c));return c}function M(a,b,c,d,e,h){if("function"==typeof d){var f=c.get("buildHitTask");return{buildHitTask:function(c){c.set(a,null,!0);c.set(b,null,!0);d(c,e,h);f(c)}}}return N({},a,b)}
function O(a,b){var c=B(a),d={};Object.keys(c).forEach(function(a){if(!a.indexOf(b)&&a!=b+"on"){var e=c[a];"true"==e&&(e=!0);"false"==e&&(e=!1);a=P(a.slice(b.length));d[a]=e}});return d}function Q(a){function b(){c||(c=!0,a())}var c=!1;setTimeout(b,2E3);return b}var N=Object.assign||function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(var d=0,e=c.length;d<e;d++){var h=Object(c[d]),f;for(f in h)Object.prototype.hasOwnProperty.call(h,f)&&(a[f]=h[f])}return a};
function P(a){return a.replace(/[\-\_]+(\w?)/g,function(a,c){return c.toUpperCase()})}function R(a,b){var c=window.GoogleAnalyticsObject||"ga";window[c]=window[c]||function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];(window[c].q=window[c].q||[]).push(b)};window.gaDevIds=window.gaDevIds||[];0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo");window[c]("provide",a,b);window.gaplugins=window.gaplugins||{};window.gaplugins[a.charAt(0).toUpperCase()+a.slice(1)]=b}
var S={s:1,u:2,v:3,A:4,B:5,m:6,C:7,D:8,o:9,w:10},T=Object.keys(S).length;function U(a,b){a.set("\x26_av","2.4.1");var c=a.get("\x26_au"),c=parseInt(c||"0",16).toString(2);if(c.length<T)for(var d=T-c.length;d;)c="0"+c,d--;b=T-b;c=c.substr(0,b)+1+c.substr(b+1);a.set("\x26_au",parseInt(c||"0",2).toString(16))}
function V(a,b){var c=this;U(a,S.m);window.addEventListener&&(this.a=N({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},b),this.b=a,this.f=this.f.bind(this),this.c={},this.a.events.forEach(function(a){c.c[a]=A(a,c.a.linkSelector,c.f)}))}
V.prototype.f=function(a,b){var c=this;if(this.a.shouldTrackOutboundLink(b,F)){var d=b.getAttribute("href")||b.getAttribute("xlink:href"),e=F(d),e={transport:"beacon",eventCategory:"Outbound Link",eventAction:a.type,eventLabel:e.href},h=N({},this.a.fieldsObj,O(b,this.a.attributePrefix)),f=M(e,h,this.b,this.a.hitFilter,b,a);if(navigator.sendBeacon||"click"!=a.type||"_blank"==b.target||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||1<a.which)this.b.send("event",f);else{var H=function(){window.removeEventListener("click",
H);if(!a.defaultPrevented){a.preventDefault();var b=f.hitCallback;f.hitCallback=Q(function(){"function"==typeof b&&b();location.href=d})}c.b.send("event",f)};window.addEventListener("click",H)}}};V.prototype.shouldTrackOutboundLink=function(a,b){a=a.getAttribute("href")||a.getAttribute("xlink:href");b=b(a);return b.hostname!=location.hostname&&"http"==b.protocol.slice(0,4)};V.prototype.remove=function(){var a=this;Object.keys(this.c).forEach(function(b){a.c[b].h()})};R("outboundLinkTracker",V);
function W(a,b){U(a,S.o);history.pushState&&window.addEventListener&&(this.a=N({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},b),this.g=a,this.j=location.pathname+location.search,this.c=this.c.bind(this),this.f=this.f.bind(this),this.b=this.b.bind(this),a=this.c,b=L("pushState"),b.a.push(a),K(b),a=this.f,b=L("replaceState"),b.a.push(a),K(b),window.addEventListener("popstate",this.b))}
W.prototype.c=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(u(d)));X(b,!0)}};W.prototype.f=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(u(d)));X(b,!1)}};W.prototype.b=function(){X(this,!0)};
function X(a,b){setTimeout(function(){var c=a.j,d=location.pathname+location.search;c!=d&&a.a.shouldTrackUrlChange.call(a,d,c)&&(a.j=d,a.g.set({page:d,title:document.title}),(b||a.a.trackReplaceState)&&a.g.send("pageview",M({transport:"beacon"},a.a.fieldsObj,a.g,a.a.hitFilter)))},0)}W.prototype.shouldTrackUrlChange=function(a,b){return!(!a||!b)};W.prototype.remove=function(){var a=this.c;J(L("pushState"),a);a=this.f;J(L("replaceState"),a);window.removeEventListener("popstate",this.b)};
R("urlChangeTracker",W);})();