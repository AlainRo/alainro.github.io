(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(52),i=r(382),l=r.n(i);t.default=Object(o.withRouteData)(function(e){var t=e.about;return a.a.createElement("div",null,t?l()(t.contents):"")})},382:function(e,t,r){var n,a,o,i,l=r(3);i=function(y){"use strict";function T(e){return e.replace(/(-|:)(.)/g,function(e,t,r){return r.toUpperCase()})}y=y&&y.hasOwnProperty("default")?y.default:y;var b={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},E={ELEMENT:1,TEXT:3,COMMENT:8},w=["table","tbody","thead","tfoot","tr"],x=document.createElement("div");function M(e,t,r){var n,a=r.transform._;if(e.nodeType===E.COMMENT)return null;if(e.nodeType===E.TEXT){var o=(n=e.textContent,x.innerHTML=n,x.textContent);return a?a(o):o}for(var i=e.tagName.toLowerCase(),l=r.transform[i],c={},s=0;s<e.attributes.length;s++){var u=e.attributes[s].name,d=e.attributes[s].value;c[u]=d}c.key=t.toString();for(var p=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},l=arguments[1];return Object.keys(o).reduce(function(e,t){if(/^on.*/.test(t))return e;var r=t;/^(data|aria)-/.test(t)||0===l.filter(function(e){return e instanceof RegExp?e.test(t):e===t}).length&&(r=T(t));var n,i,a=b[r]||r;return e[a]="style"===a?(n=o.style,i={},n.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var t,r,n=e.split(":");if(1<n.length){var a=(r=n[0].trim(),/^-ms-/.test(r)&&(r=r.substr(1)),T(r)),o=(t=n.slice(1).join(":").trim(),/^\d+$/.test(t)?Number(t):t.replace(/'/g,'"'));i[a]=o}}),i):o[t],e},{})}(c,r.preserveAttributes),m=[],f=0;f<e.childNodes.length;f++){var h=e.childNodes[f],g=t+"."+f;if(!(-1<w.indexOf(i)&&h.nodeType===E.TEXT&&(h.textContent=h.textContent.trim(),""===h.textContent))){var v=M(h,g,r);null!==v&&m.push(v)}}return"style"!==i||l||a?(0===m.length&&(m=null),l?y.createElement(l,p,m):a?a(i,p,m):y.createElement(i,p,m)):(p.dangerouslySetInnerHTML={__html:m[0]},y.createElement(i,p,null))}return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Expected HTML string");var r={transform:t.transform||{},preserveAttributes:t.preserveAttributes||[]},n=document.createElement("div");n.innerHTML=e.trim();for(var a=[],o=0;o<n.childNodes.length;o++)a.push(n.childNodes[o]);var i=a.map(function(e,t){return M(e,t,r)}).filter(function(e){return null!==e});return 1===i.length?i[0]:i}},"object"==l(t)&&void 0!==e?e.exports=i(r(0)):(a=[r(0)],void 0===(o="function"==typeof(n=i)?n.apply(t,a):n)||(e.exports=o))}}]);
//# sourceMappingURL=src-pages-about.0a658192.js.map