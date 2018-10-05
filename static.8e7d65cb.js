(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.setHasBabelPlugin=exports.ReportChunks=exports.MODULE_IDS=exports.CHUNK_NAMES=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _requireUniversalModule=__webpack_require__(31);Object.defineProperty(exports,'CHUNK_NAMES',{enumerable:true,get:function get(){return _requireUniversalModule.CHUNK_NAMES;}});Object.defineProperty(exports,'MODULE_IDS',{enumerable:true,get:function get(){return _requireUniversalModule.MODULE_IDS;}});var _reportChunks=__webpack_require__(33);Object.defineProperty(exports,'ReportChunks',{enumerable:true,get:function get(){return _interopRequireDefault(_reportChunks).default;}});var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);var _hoistNonReactStatics=__webpack_require__(34);var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);var _requireUniversalModule2=_interopRequireDefault(_requireUniversalModule);var _utils=__webpack_require__(10);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(_typeof(call)==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+_typeof(superClass));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var hasBabelPlugin=false;var isHMR=function isHMR(){return(// $FlowIgnore
module.hot&&(module.hot.data||module.hot.status()==='apply'));};var setHasBabelPlugin=exports.setHasBabelPlugin=function setHasBabelPlugin(){hasBabelPlugin=true;};function universal(asyncModule){var _class,_temp;var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var userRender=opts.render,_opts$loading=opts.loading,Loading=_opts$loading===undefined?_utils.DefaultLoading:_opts$loading,_opts$error=opts.error,Err=_opts$error===undefined?_utils.DefaultError:_opts$error,_opts$minDelay=opts.minDelay,minDelay=_opts$minDelay===undefined?0:_opts$minDelay,_opts$alwaysDelay=opts.alwaysDelay,alwaysDelay=_opts$alwaysDelay===undefined?false:_opts$alwaysDelay,_opts$testBabelPlugin=opts.testBabelPlugin,testBabelPlugin=_opts$testBabelPlugin===undefined?false:_opts$testBabelPlugin,_opts$loadingTransiti=opts.loadingTransition,loadingTransition=_opts$loadingTransiti===undefined?true:_opts$loadingTransiti,options=_objectWithoutProperties(opts,['render','loading','error','minDelay','alwaysDelay','testBabelPlugin','loadingTransition']);var _render=userRender||(0,_utils.createDefaultRender)(Loading,Err);var isDynamic=hasBabelPlugin||testBabelPlugin;options.isDynamic=isDynamic;options.usesBabelPlugin=hasBabelPlugin;options.modCache={};options.promCache={};return _temp=_class=function(_React$Component){_inherits(UniversalComponent,_React$Component);_createClass(UniversalComponent,null,[{key:'preload',/* eslint-enable react/sort-comp */value:function preload(props){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};props=props||{};var _req=(0,_requireUniversalModule2.default)(asyncModule,options,props),requireAsync=_req.requireAsync,requireSync=_req.requireSync;var mod=void 0;try{mod=requireSync(props,context);}catch(error){return Promise.reject(error);}return Promise.resolve().then(function(){if(mod)return mod;return requireAsync(props,context);}).then(function(mod){(0,_hoistNonReactStatics2.default)(UniversalComponent,mod,{preload:true,preloadWeak:true});return mod;});}/* eslint-disable react/sort-comp */},{key:'preloadWeak',value:function preloadWeak(props){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};props=props||{};var _req2=(0,_requireUniversalModule2.default)(asyncModule,options,props),requireSync=_req2.requireSync;var mod=requireSync(props,context);if(mod){(0,_hoistNonReactStatics2.default)(UniversalComponent,mod,{preload:true,preloadWeak:true});}return mod;}}]);function UniversalComponent(props,context){_classCallCheck(this,UniversalComponent);var _this=_possibleConstructorReturn(this,(UniversalComponent.__proto__||Object.getPrototypeOf(UniversalComponent)).call(this,props,context));_this.update=function(state){var isMount=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var isSync=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isServer=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(!_this._mounted)return;if(!state.error)state.error=null;_this.handleAfter(state,isMount,isSync,isServer);};_this.state={error:null};return _this;}_createClass(UniversalComponent,[{key:'componentWillMount',value:function componentWillMount(){this._mounted=true;var _req3=(0,_requireUniversalModule2.default)(asyncModule,options,this.props),addModule=_req3.addModule,requireSync=_req3.requireSync,requireAsync=_req3.requireAsync,asyncOnly=_req3.asyncOnly;var mod=void 0;try{mod=requireSync(this.props,this.context);}catch(error){return this.update({error:error});}this._asyncOnly=asyncOnly;var chunkName=addModule(this.props);// record the module for SSR flushing :)
if(this.context.report){this.context.report(chunkName);}if(mod||_utils.isServer){this.handleBefore(true,true,_utils.isServer);this.update({mod:mod},true,true,_utils.isServer);return;}this.handleBefore(true,false);this.requireAsync(requireAsync,this.props,true);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._mounted=false;}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(isDynamic||this._asyncOnly){var _req4=(0,_requireUniversalModule2.default)(asyncModule,options,nextProps,this.props),requireSync=_req4.requireSync,requireAsync=_req4.requireAsync,shouldUpdate=_req4.shouldUpdate;if(shouldUpdate(nextProps,this.props)){var mod=void 0;try{mod=requireSync(nextProps,this.context);}catch(error){return this.update({error:error});}this.handleBefore(false,!!mod);if(!mod){return this.requireAsync(requireAsync,nextProps);}var state={mod:mod};if(alwaysDelay){if(loadingTransition)this.update({mod:null});// display `loading` during componentWillReceiveProps
setTimeout(function(){return _this2.update(state,false,true);},minDelay);return;}this.update(state,false,true);}else if(isHMR()){var _mod=requireSync(nextProps,this.context);this.setState({mod:function mod(){return null;}});// HMR /w Redux and HOCs can be finicky, so we
setTimeout(function(){return _this2.setState({mod:_mod});});// toggle components to insure updates occur
}}}},{key:'requireAsync',value:function requireAsync(_requireAsync,props,isMount){var _this3=this;if(this.state.mod&&loadingTransition){this.update({mod:null});// display `loading` during componentWillReceiveProps
}var time=new Date();_requireAsync(props,this.context).then(function(mod){var state={mod:mod};var timeLapsed=new Date()-time;if(timeLapsed<minDelay){var extraDelay=minDelay-timeLapsed;return setTimeout(function(){return _this3.update(state,isMount);},extraDelay);}_this3.update(state,isMount);}).catch(function(error){return _this3.update({error:error});});}},{key:'handleBefore',value:function handleBefore(isMount,isSync){var isServer=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(this.props.onBefore){var onBefore=this.props.onBefore;var info={isMount:isMount,isSync:isSync,isServer:isServer};onBefore(info);}}},{key:'handleAfter',value:function handleAfter(state,isMount,isSync,isServer){var mod=state.mod,error=state.error;if(mod&&!error){(0,_hoistNonReactStatics2.default)(UniversalComponent,mod,{preload:true,preloadWeak:true});if(this.props.onAfter){var onAfter=this.props.onAfter;var info={isMount:isMount,isSync:isSync,isServer:isServer};onAfter(info,mod);}}else if(error&&this.props.onError){this.props.onError(error);}this.setState(state);}},{key:'render',value:function render(){var _props=this.props,isLoading=_props.isLoading,userError=_props.error,props=_objectWithoutProperties(_props,['isLoading','error']);var _state=this.state,mod=_state.mod,error=_state.error;return _render(props,mod,isLoading,userError||error);}}]);return UniversalComponent;}(_react2.default.Component),_class.contextTypes={store:_propTypes2.default.object,report:_propTypes2.default.func},_temp;}exports.default=universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _utils=__webpack_require__(10);var requireById=function requireById(id){if(!(0,_utils.isWebpack)()&&typeof id==='string'){return __webpack_require__(32)(''+id);}return __webpack_require__(''+id);};exports.default=requireById;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports.cacheProm=exports.loadFromPromiseCache=exports.cacheExport=exports.loadFromCache=exports.callForString=exports.createDefaultRender=exports.createElement=exports.findExport=exports.resolveExport=exports.tryRequire=exports.DefaultError=exports.DefaultLoading=exports.babelInterop=exports.isWebpack=exports.isServer=exports.isTest=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};var _react=__webpack_require__(0);var React=_interopRequireWildcard(_react);var _requireById=__webpack_require__(9);var _requireById2=_interopRequireDefault(_requireById);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var isTest=exports.isTest="production"==='test';var isServer=exports.isServer=!(typeof window!=='undefined'&&window.document&&window.document.createElement);var isWebpack=exports.isWebpack=function isWebpack(){return typeof __webpack_require__!=='undefined';};var babelInterop=exports.babelInterop=function babelInterop(mod){return mod&&(typeof mod==='undefined'?'undefined':_typeof(mod))==='object'&&mod.__esModule?mod.default:mod;};var DefaultLoading=exports.DefaultLoading=function DefaultLoading(){return React.createElement('div',null,'Loading...');};var DefaultError=exports.DefaultError=function DefaultError(_ref){var error=_ref.error;return React.createElement('div',null,'Error: ',error&&error.message);};var tryRequire=exports.tryRequire=function tryRequire(id){try{return(0,_requireById2.default)(id);}catch(err){// warn if there was an error while requiring the chunk during development
// this can sometimes lead the server to render the loading component.
if(false){}}return null;};var resolveExport=exports.resolveExport=function resolveExport(mod,key,onLoad,chunkName,props,context,modCache){var isSync=arguments.length>7&&arguments[7]!==undefined?arguments[7]:false;var exp=findExport(mod,key);if(onLoad&&mod){var _isServer=typeof window==='undefined';var info={isServer:_isServer,isSync:isSync};onLoad(mod,info,props,context);}if(chunkName&&exp)cacheExport(exp,chunkName,props,modCache);return exp;};var findExport=exports.findExport=function findExport(mod,key){if(typeof key==='function'){return key(mod);}else if(key===null){return mod;}return mod&&(typeof mod==='undefined'?'undefined':_typeof(mod))==='object'&&key?mod[key]:babelInterop(mod);};var createElement=exports.createElement=function createElement(Component,props){return React.isValidElement(Component)?React.cloneElement(Component,props):React.createElement(Component,props);};var createDefaultRender=exports.createDefaultRender=function createDefaultRender(Loading,Err){return function(props,mod,isLoading,error){if(isLoading){return createElement(Loading,props);}else if(error){return createElement(Err,_extends({},props,{error:error}));}else if(mod){// primary usage (for async import loading + errors):
return createElement(mod,props);}return createElement(Loading,props);};};var callForString=exports.callForString=function callForString(strFun,props){return typeof strFun==='function'?strFun(props):strFun;};var loadFromCache=exports.loadFromCache=function loadFromCache(chunkName,props,modCache){return!isServer&&modCache[callForString(chunkName,props)];};var cacheExport=exports.cacheExport=function cacheExport(exp,chunkName,props,modCache){return modCache[callForString(chunkName,props)]=exp;};var loadFromPromiseCache=exports.loadFromPromiseCache=function loadFromPromiseCache(chunkName,props,promisecache){return promisecache[callForString(chunkName,props)];};var cacheProm=exports.cacheProm=function cacheProm(pr,chunkName,props,promisecache){return promisecache[callForString(chunkName,props)]=pr;};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@observablehq/notebook-runtime");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"404 - Page non disponible"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"/files/3D.jpg"})));});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htmr__WEBPACK_IMPORTED_MODULE_2__);
//
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var about=_ref.about;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,htmr__WEBPACK_IMPORTED_MODULE_2___default()(about.contents));}));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
//
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var posts=_ref.posts;var cleanPosts=posts.filter(function(p){return p.title;});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Blog"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"All Posts:",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,cleanPosts.map(function(post){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:post.slug},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/blog/".concat(post.slug,"/")},post.title));})));}));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var htmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htmr__WEBPACK_IMPORTED_MODULE_2__);
//
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var qui=_ref.qui;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,htmr__WEBPACK_IMPORTED_MODULE_2___default()(qui.contents));}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(1);

// EXTERNAL MODULE: external "htmr"
var external_htmr_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@observablehq/notebook-runtime"
var notebook_runtime_ = __webpack_require__(13);

// EXTERNAL MODULE: external "how-to-embed-a-notebook-in-a-react-app"
var external_how_to_embed_a_notebook_in_a_react_app_ = __webpack_require__(25);
var external_how_to_embed_a_notebook_in_a_react_app_default = /*#__PURE__*/__webpack_require__.n(external_how_to_embed_a_notebook_in_a_react_app_);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/containers/Observable.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var Observable_Observable=/*#__PURE__*/function(_Component){_inherits(Observable,_Component);function Observable(){var _getPrototypeOf2;var _this;_classCallCheck(this,Observable);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Observable)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"state",{speed:0.1});_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"animationRef",external_react_default.a.createRef());_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),"setSpeed",function(event){_this.setState({speed:event.target.valueAsNumber});});return _this;}_createClass(Observable,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;notebook_runtime_["Runtime"].load(external_how_to_embed_a_notebook_in_a_react_app_default.a,function(cell){if(cell.name==="animation"){return new notebook_runtime_["Inspector"](_this2.animationRef.current);}if(cell.name==="mutable speed"){return{fulfilled:function fulfilled(value){_this2.animationSpeed=value;}};}});}},{key:"componentDidUpdate",value:function componentDidUpdate(nextProps,nextState){if(nextState.speed!==this.state.speed){this.animationSpeed.value=nextState.speed;}}},{key:"render",value:function render(){return external_react_default.a.createElement("div",{className:"App"},external_react_default.a.createElement("div",{ref:this.animationRef}),external_react_default.a.createElement("small",null,"Speed: ",this.state.speed),external_react_default.a.createElement("br",null),external_react_default.a.createElement("input",{type:"range",min:"0",max:"2",step:"0.1",value:this.state.speed,onChange:this.setSpeed}));}}]);return Observable;}(external_react_["Component"]);/* harmony default export */ var containers_Observable = (Observable_Observable);
// EXTERNAL MODULE: external "react-jsx-parser"
var external_react_jsx_parser_ = __webpack_require__(26);
var external_react_jsx_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_jsx_parser_);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/containers/Post.js
//
//
/* harmony default export */ var Post = __webpack_exports__["default"] = (Object(external_react_static_["withRouteData"])(function(_ref){var post=_ref.post;debugger;return external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement(external_react_static_["Head"],null,external_react_default.a.createElement("meta",{charSet:"UTF-8"}),external_react_default.a.createElement("title",null,post.title)),external_react_default.a.createElement("div",{className:"post"},external_react_default.a.createElement(external_react_static_["Link"],{to:"/blog/"},'<'," Back"),external_react_default.a.createElement("br",null),external_react_default.a.createElement(external_react_jsx_parser_default.a,{jsx:post.contents,showWarnings:true,renderInWrapper:false,components:{Observable:containers_Observable}})));}));

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(1);

// EXTERNAL MODULE: external "htmr"
var external_htmr_ = __webpack_require__(8);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(5);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(27);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__(28);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__(38);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(14);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__(29);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/containers/Story.js
function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Story_Story=function Story(_ref){var classes=_ref.classes,props=_objectWithoutProperties(_ref,["classes"]);return external_react_default.a.createElement(core_["Grid"],{item:true,xs:12,sm:6,md:4,lg:3},external_react_default.a.createElement(Card_default.a,{className:classes.root},external_react_default.a.createElement(CardActionArea_default.a,{component:external_react_static_["Link"],to:"/blog/".concat(props.slug,"/"),prefetch:false},external_react_default.a.createElement(CardContent_default.a,null,external_react_default.a.createElement(Typography_default.a,{gutterBottom:true,variant:"headline",className:classes.text,component:"h1"},props.title)),external_react_default.a.createElement(CardMedia_default.a,{component:"img",className:classes.media,height:"auto",image:props.img,title:props.title}),external_react_default.a.createElement(CardContent_default.a,null,external_react_default.a.createElement(Typography_default.a,{component:"p"},props.text)))));};var styles=function styles(theme){return{root:{backgroundColor:'white'},text:{color:'#A8020B',fontWeight:'bold'}};};var StoryStyled=Object(styles_["withStyles"])(styles)(Story_Story);/* harmony default export */ var containers_Story = (StoryStyled);
// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(39);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/pages/index.js
//import Observable from '../containers/Observable'
var pages_styles=function styles(theme){return{root:{flexGrow:1}};};function FullWidthGrid(props){var classes=props.classes;return external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement(core_["CssBaseline"],null),external_react_default.a.createElement("div",{className:classes.root},external_react_default.a.createElement(core_["Grid"],{container:true,spacing:24}," ",external_react_default.a.createElement(containers_Story,{className:classes,title:"Pr\xE9senter \xE0 chacun ce qui est important pour lui",slug:"carte",text:"Visualiser sur une carte beaucoup d'information tout en restant clair. C'est possible \xE0 condition de prendre en compte ce qui est important pour chaque cat\xE9gorie d'utilisateur.",img:"/files/chantiers.gif"}),external_react_default.a.createElement(containers_Story,{className:classes,slug:"bigdata2",title:"Poser simplement des questions complexes",text:"Interaction et animation pour des tableaux de bord qui permettent de formuler facilement des questions tr\xE8s sophistiqu\xE9es: montrer moi l'\xE9volution des envois dans ce cr\xE9neau de dates, cette plage horaire, un mardi ou mercredi ?",img:"/files/SMS.gif"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Les assiettes volantes ou l'art de maintenir tout en \xE9quilibre",slug:"assiettes",text:"Faut il seulement guetter les assiettes qui vont tomber et subir la situation ? Ou bien comprendre ce qui se passe ?",img:"/files/BluePlasticPlates-m.jpg"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Visualiser la s\xE9curit\xE9",slug:"indicateur-s\xE9curit\xE9",text:"Un scanner automatique de vuln\xE9rabilit\xE9 permet de tester la pr\xE9sence de failles dans les syst\xE8mes, applications et configurations des \xE9quipements d'un r\xE9seau. Ces failles \xE9tant connues de tous, elles sont autant de portes mal ferm\xE9es dangereuses pour la s\xE9curit\xE9. Mais il est vital d'optimiser ses efforts et co\xFBts de correction en prot\xE9geant le plus important, le plus vuln\xE9rable et le plus expos\xE9 d'abord.",img:"/files/Indic2.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Indicateurs visuels d'avancement de projets",slug:"indicateurs-projets",text:"Communiquer vite et bien la progression de projets.",img:"/files/syst.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Pr\xE9sentation structur\xE9e de Tables",slug:"table",text:"Une extension Excel permet de manipuler et de pr\xE9senter les tables de donn\xE9es. Les champs r\xE9p\xE9t\xE9s sont visuellement mis en facteur.",img:"/files/2014-04-14-19_33_41.gif"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Les feux tricolores restent sur la route !",slug:"stop-aux-feux-tricolores",text:"Les Tableaux de Bord sont peupl\xE9s d'innombrables indicateurs vert/orange/rouge. Est ce vraiment une bonne id\xE9e ?",img:"/files/feutrs.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Tableau de courbes",slug:"tableaudecourbes",text:"Plut\xF4t que des tableaux de chiffres avec 2 d\xE9cimales apr\xE8s la virgule, le tableau de courbes raconte une histoire et fait se poser les bonnes questions.",img:"/files/Tableau%20Courbes.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"HTML 5: l'ubiquit\xE9",slug:"html5",text:"HTML 5 permet de cr\xE9er des applications web qui vont chercher les donn\xE9es et s'affichent de mani\xE8re adapt\xE9e sur toute la gamme de terminaux.",img:"/files/html5.gif"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Tableau de bord des SMS",slug:"bigdata",text:"Comment voir si ces milliers d'envoi SMS sont compatibles avec une scolarit\xE9 d'adolescent ?",img:"/files/bigdata2.png"}),external_react_default.a.createElement(containers_Story,{className:classes,slug:"TableauSoft",title:"L'outil de visualisation Tableau Software",text:"Le logiciel Tableau Software permet d'explorer en deux coups de souris les milles et unes repr\xE9sentations visuelles d'un jeu de donn\xE9es.",img:"/files/Baignoire1.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Tableau de bord financier de l'entreprise",slug:"indicateurs-financiers",text:"Les donn\xE9es l\xE9gales permettent d'analyser la performance des entreprises: outil \xE9conomique, marge brute, cr\xE9ation/utilisation de la valeur ajout\xE9e, rentabilit\xE9 des fonds propres, effet de levier des emprunts, ...",img:"/files/TabFinancier.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Les donn\xE9es ouvertes de la RATP",slug:"lopen-data-ratp",text:"Encore un exemple de l'importance vitale de la mise en contexte et du point de vue du lecteur de la repr\xE9sentation.",img:"/files/ratp.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Portefeuille de projets",slug:"excel",text:"Une modeste feuille Excel peut remplir bien des services de visualisation \xE0 condition de pas enterrer les donn\xE9es dedans.",img:"/files/excel.gif"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Re-conception d'un indicateur",slug:"economie-denergie",text:"Face \xE0 un tableau de bord pr\xE9sentant de multiples indicateurs, il n'est pas \xE9vident de v\xE9rifier que toutes les aiguilles noires se trouvent dans les zones vertes.",img:"/files/Ecolabel06.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Le tableau de bord sur un A4",slug:"tableau",text:"Le tableau de bord efficace propose les indicateurs vitaux en un seul regard. Tourner les pages, bulles ou pop-up ne sont permis que pour r\xE9pondre \xE0 des questions de deuxi\xE8me niveau.",img:"/files/avions_preview.jpg"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Signal ou bruit ?",slug:"signal-ou-bruit",text:"Qu'est ce qui est le plus grave pour une organisation ? Sur-r\xE9agir \xE0 une variation brusque mais statistiquement non significative d'un indicateur ou rater une stagnation devenue trop longue pour ne pas cacher un signal fort. C'est parfois quand rien ne bouge qu'il faut r\xE9agir vite !",img:"/files/PBCRange.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Radar, araign\xE9e, polaire ou Kiviat",slug:"toile-araign\xE9e",text:"C'est le diagramme vedette de la pr\xE9sentation et de la comparaison de performances. Il est tr\xE8s joli et parait savant, mais est-il efficace ? Analyse, critiques et alternatives.",img:"/files/spider0Small.jpg"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Le budget t\xE9l\xE9communication",slug:"telephone",text:"Il s'agit de comprendre o\xF9 passent les d\xE9penses avant de pouvoir en prendre le contr\xF4le et de d\xE9cider.",img:"/files/appels.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Rapport visuel automatique de Google Forms",slug:"googleforms",text:"Si vous avez d\xE9j\xE0 profit\xE9 de la puissance des formulaires Google Forms: simple, intuitif, efficace. Vous avez certainement \xE9t\xE9 d\xE9\xE7u du rapport standard. Voici un outil automatique qui esp\xE8re contribuer \xE0 de meilleures visualisations.",img:"/files/googleforms.png"}),external_react_default.a.createElement(containers_Story,{className:classes,title:"Tout \xE0 la souris",slug:"barchart",text:"BarChart bars to input/adjust data values (Horizontal + Vertical)",img:"https://gist.github.com/AlainRo/9264cd08e341f2c92f020c39642c34d1/raw/5b4cd7390e0595c917eb7c383d745721fc635dec/preview.png"}))));}var grid=Object(styles_["withStyles"])(pages_styles)(FullWidthGrid);/* harmony default export */ var pages = __webpack_exports__["default"] = (grid);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routes; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}Object(react_universal_component__WEBPACK_IMPORTED_MODULE_5__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 15))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(15);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/about.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-about */).then(__webpack_require__.bind(null, 16))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/about.js');},resolve:function resolve(){return /*require.resolve*/(16);},chunkName:function chunkName(){return"src-pages-about";}}),universalOptions);var t_2=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/blog.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-blog */).then(__webpack_require__.bind(null, 17))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/blog.js');},resolve:function resolve(){return /*require.resolve*/(17);},chunkName:function chunkName(){return"src-pages-blog";}}),universalOptions);var t_3=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Post",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Post */).then(__webpack_require__.bind(null, 20))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Post');},resolve:function resolve(){return /*require.resolve*/(20);},chunkName:function chunkName(){return"src-containers-Post";}}),universalOptions);var t_4=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 21))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(21);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);var t_5=react_universal_component__WEBPACK_IMPORTED_MODULE_5___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/qui.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-qui */).then(__webpack_require__.bind(null, 19))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/qui.js');},resolve:function resolve(){return /*require.resolve*/(19);},chunkName:function chunkName(){return"src-pages-qui";}}),universalOptions);// Template Map
global.componentsByTemplateID=global.componentsByTemplateID||[t_0,t_1,t_2,t_3,t_4,t_5];var defaultTemplateIDs={'404':0// Template Tree
};global.templateIDsByPath=global.templateIDsByPath||defaultTemplateIDs;// Get template for given path
var getComponentForPath=function getComponentForPath(path){path=Object(react_static__WEBPACK_IMPORTED_MODULE_4__["cleanPath"])(path);return global.componentsByTemplateID[global.templateIDsByPath[path]];};global.reactStaticGetComponentForPath=getComponentForPath;global.reactStaticRegisterTemplateIDForPath=function(path,id){global.templateIDsByPath[path]=id;};global.clearTemplateIDs=function(){global.templateIDsByPath=defaultTemplateIDs;};var Routes=/*#__PURE__*/function(_Component){_inherits(Routes,_Component);function Routes(){_classCallCheck(this,Routes);return _possibleConstructorReturn(this,_getPrototypeOf(Routes).apply(this,arguments));}_createClass(Routes,[{key:"componentDidMount",value:function componentDidMount(){var _this=this;global.clearTemplateIDs=function(){_this.setState({});};}},{key:"render",value:function render(){var _this$props=this.props,Comp=_this$props.component,render=_this$props.render,children=_this$props.children;var getFullComponentForPath=function getFullComponentForPath(path){var Comp=getComponentForPath(path);var is404=path==='404';if(!Comp){is404=true;Comp=getComponentForPath('/404');}return function(){var newProps=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return Comp?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Comp,_extends({},newProps,is404?{is404:true}:{})):null;};};var renderProps={componentsByTemplateID:global.componentsByTemplateID,templateIDsByPath:global.templateIDsByPath,getComponentForPath:getFullComponentForPath};if(Comp){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Comp,renderProps);}if(render||children){return(render||children)(renderProps);}// This is the default auto-routing renderer
return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],{render:function render(props){var Comp=getFullComponentForPath(props.location.pathname);// If Comp is used as a component here, it triggers React to re-mount the entire
// component tree underneath during reconciliation, losing all internal state.
// By unwrapping it here we keep the real, static component exposed directly to React.
return Comp&&Comp();}});}}]);return Routes;}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("how-to-embed-a-notebook-in-a-react-app");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-jsx-parser");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.clearChunks=exports.flushModuleIds=exports.flushChunkNames=exports.MODULE_IDS=exports.CHUNK_NAMES=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=requireUniversalModule;var _utils=__webpack_require__(10);var CHUNK_NAMES=exports.CHUNK_NAMES=new Set();var MODULE_IDS=exports.MODULE_IDS=new Set();function requireUniversalModule(universalConfig,options,props,prevProps){var key=options.key,_options$timeout=options.timeout,timeout=_options$timeout===undefined?15000:_options$timeout,onLoad=options.onLoad,onError=options.onError,isDynamic=options.isDynamic,modCache=options.modCache,promCache=options.promCache,usesBabelPlugin=options.usesBabelPlugin;var config=getConfig(isDynamic,universalConfig,options,props);var chunkName=config.chunkName,path=config.path,resolve=config.resolve,load=config.load;var asyncOnly=!path&&!resolve||typeof chunkName==='function';var requireSync=function requireSync(props,context){var exp=(0,_utils.loadFromCache)(chunkName,props,modCache);if(!exp){var mod=void 0;if(!(0,_utils.isWebpack)()&&path){var modulePath=(0,_utils.callForString)(path,props)||'';mod=(0,_utils.tryRequire)(modulePath);}else if((0,_utils.isWebpack)()&&resolve){var weakId=(0,_utils.callForString)(resolve,props);if(__webpack_require__.m[weakId]){mod=(0,_utils.tryRequire)(weakId);}}if(mod){exp=(0,_utils.resolveExport)(mod,key,onLoad,chunkName,props,context,modCache,true);}}return exp;};var requireAsync=function requireAsync(props,context){var exp=(0,_utils.loadFromCache)(chunkName,props,modCache);if(exp)return Promise.resolve(exp);var cachedPromise=(0,_utils.loadFromPromiseCache)(chunkName,props,promCache);if(cachedPromise)return cachedPromise;var prom=new Promise(function(res,rej){var reject=function reject(error){error=error||new Error('timeout exceeded');clearTimeout(timer);if(onError){var _isServer=typeof window==='undefined';var info={isServer:_isServer};onError(error,info);}rej(error);};// const timer = timeout && setTimeout(reject, timeout)
var timer=timeout&&setTimeout(reject,timeout);var resolve=function resolve(mod){clearTimeout(timer);var exp=(0,_utils.resolveExport)(mod,key,onLoad,chunkName,props,context,modCache);if(exp)return res(exp);reject(new Error('export not found'));};var request=load(props,{resolve:resolve,reject:reject});// if load doesn't return a promise, it must call resolveImport
// itself. Most common is the promise implementation below.
if(!request||typeof request.then!=='function')return;request.then(resolve).catch(reject);});(0,_utils.cacheProm)(prom,chunkName,props,promCache);return prom;};var addModule=function addModule(props){if(_utils.isServer||_utils.isTest){if(chunkName){var name=(0,_utils.callForString)(chunkName,props);if(usesBabelPlugin){// if ignoreBabelRename is true, don't apply regex
var shouldKeepName=options&&!!options.ignoreBabelRename;if(!shouldKeepName){name=name.replace(/\//g,'-');}}if(name)CHUNK_NAMES.add(name);if(!_utils.isTest)return name;// makes tests way smaller to run both kinds
}if((0,_utils.isWebpack)()){var weakId=(0,_utils.callForString)(resolve,props);if(weakId)MODULE_IDS.add(weakId);return weakId;}if(!(0,_utils.isWebpack)()){var modulePath=(0,_utils.callForString)(path,props);if(modulePath)MODULE_IDS.add(modulePath);return modulePath;}}};var shouldUpdate=function shouldUpdate(next,prev){var cacheKey=(0,_utils.callForString)(chunkName,next);var config=getConfig(isDynamic,universalConfig,options,prev);var prevCacheKey=(0,_utils.callForString)(config.chunkName,prev);return cacheKey!==prevCacheKey;};return{requireSync:requireSync,requireAsync:requireAsync,addModule:addModule,shouldUpdate:shouldUpdate,asyncOnly:asyncOnly};}var flushChunkNames=exports.flushChunkNames=function flushChunkNames(){var chunks=Array.from(CHUNK_NAMES);CHUNK_NAMES.clear();return chunks;};var flushModuleIds=exports.flushModuleIds=function flushModuleIds(){var ids=Array.from(MODULE_IDS);MODULE_IDS.clear();return ids;};var clearChunks=exports.clearChunks=function clearChunks(){CHUNK_NAMES.clear();MODULE_IDS.clear();};var getConfig=function getConfig(isDynamic,universalConfig,options,props){if(isDynamic){var resultingConfig=typeof universalConfig==='function'?universalConfig(props):universalConfig;if(options){resultingConfig=_extends({},resultingConfig,options);}return resultingConfig;}var load=typeof universalConfig==='function'?universalConfig:// $FlowIssue
function(){return universalConfig;};return{file:'default',id:options.id||'default',chunkName:options.chunkName||'default',resolve:options.resolve||'',path:options.path||'',load:load};};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(11);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(_typeof(call)==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+_typeof(superClass));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ReportChunks=function(_React$Component){_inherits(ReportChunks,_React$Component);function ReportChunks(){_classCallCheck(this,ReportChunks);return _possibleConstructorReturn(this,(ReportChunks.__proto__||Object.getPrototypeOf(ReportChunks)).apply(this,arguments));}_createClass(ReportChunks,[{key:'getChildContext',value:function getChildContext(){return{report:this.props.report};}},{key:'render',value:function render(){return _react2.default.Children.only(this.props.children);}}]);return ReportChunks;}(_react2.default.Component);ReportChunks.propTypes={report:_propTypes2.default.func.isRequired};ReportChunks.childContextTypes={report:_propTypes2.default.func.isRequired};exports.default=ReportChunks;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n    'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n\n  color: #A8020B;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #A8020B;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\nh1, h2, h3, h4 {\n  color: #A8020B;\n}\n\n.content {\n  padding-top: 40px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.post {\n  padding-left: 10%;\n  padding-right: 10%; \n\n}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
module.exports=function(useSourceMap){var list=[];// return the list of modules as css string
list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media "+item[2]+"{"+content+"}";}else{return content;}}).join("");};// import a list of modules into the list
list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return'/*# sourceURL='+cssMapping.sourceRoot+source+' */';});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}return[content].join('\n');}// Adapted from convert-source-map (MIT)
function toComment(sourceMap){// eslint-disable-next-line no-undef
var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;return'/*# '+data+' */';}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(12);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-hot-loader"
var external_react_hot_loader_ = __webpack_require__(22);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(5);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: /Users/alain/Documents/Git/perceptibleNew/dist/react-static-routes.js
var react_static_routes = __webpack_require__(23);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(6);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/containers/Header.js
function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Header_Header=function Header(_ref){var classes=_ref.classes,props=_objectWithoutProperties(_ref,["classes"]);return external_react_default.a.createElement(Typography_default.a,{variant:"display1",gutterBottom:true,align:"left",color:"inherit"},external_react_default.a.createElement("img",{src:"/files/logo.jpg"}),external_react_default.a.createElement("b",null," perceptible.fr"),external_react_default.a.createElement("br",null),external_react_default.a.createElement("font",{size:"2"},"percevoir - comprendre - agir"));};var styles=function styles(theme){return{root:{backgroundColor:'white'},text:{color:'#444',fontWeight:'bold'}};};var HeaderStyled=Object(styles_["withStyles"])(styles)(Header_Header);/* harmony default export */ var containers_Header = (HeaderStyled);
// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/containers/Footer.js
function Footer_objectWithoutProperties(source,excluded){if(source==null)return{};var target=Footer_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function Footer_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Footer_Footer=function Footer(_ref){var classes=_ref.classes,props=Footer_objectWithoutProperties(_ref,["classes"]);return external_react_default.a.createElement("center",null,external_react_default.a.createElement("br",null),external_react_default.a.createElement("hr",null),external_react_default.a.createElement("div",null,external_react_default.a.createElement("b",null,"perceptible.fr - 2018")," | ",external_react_default.a.createElement("a",{href:"mailto:alain.roan@perceptible.fr"},"alain.roan@perceptible.fr")," | 0619655383"),external_react_default.a.createElement("br",null));};var Footer_styles=function styles(theme){return{root:{backgroundColor:'white'},text:{color:'#A8020B',fontWeight:'bold'}};};var FooterStyled=Object(styles_["withStyles"])(Footer_styles)(Footer_Footer);/* harmony default export */ var containers_Footer = (FooterStyled);
// EXTERNAL MODULE: /Users/alain/Documents/Git/perceptibleNew/src/app.css
var app = __webpack_require__(35);

// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/App.js
//
function initializeReactGA(){ReactGA.initialize('UA-123791717-1');ReactGA.pageview('/homepage');}var App_App=function App(){return external_react_default.a.createElement(external_react_static_["Router"],null,external_react_default.a.createElement("div",null,external_react_default.a.createElement(containers_Header,null),external_react_default.a.createElement(core_["AppBar"],{position:"static",color:"default"},external_react_default.a.createElement(core_["Toolbar"],null,external_react_default.a.createElement(core_["Button"],{color:"inherit",component:external_react_static_["Link"],to:"/"},"Accueil"),external_react_default.a.createElement(core_["Button"],{color:"inherit",component:external_react_static_["Link"],to:"/about"},"Pour quoi faire ?"),external_react_default.a.createElement(core_["Button"],{color:"inherit",component:external_react_static_["Link"],to:"/blog"},"Blog"),external_react_default.a.createElement(core_["Button"],{color:"inherit",component:external_react_static_["Link"],to:"/qui"},"Qui ?"))),external_react_default.a.createElement("div",{className:"content"},external_react_default.a.createElement(react_static_routes["a" /* default */],null))));};var ReactGA={};// react-ga suppose qu'il s'execute dans un browser et pas dans node
if(typeof document!=='undefined'){ReactGA=__webpack_require__(37).default;initializeReactGA();}/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: /Users/alain/Documents/Git/perceptibleNew/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (src_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(external_react_hot_loader_["AppContainer"],null,external_react_default.a.createElement(Comp,null)),document.getElementById('root'));};// Render!
src_render(src_App);// Hot Module Replacement
if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.8e7d65cb.js.map