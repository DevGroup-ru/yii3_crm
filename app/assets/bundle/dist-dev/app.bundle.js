(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([968,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(112));

var _createClass2 = _interopRequireDefault(__webpack_require__(111));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(110));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(106));

var _inherits2 = _interopRequireDefault(__webpack_require__(105));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(86));

var _react = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactRedux = __webpack_require__(22);

var _actions = __webpack_require__(264);

function _default(moduleName, componentName, store) {
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var LoadableComponent =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(LoadableComponent, _React$Component);

    function LoadableComponent() {
      (0, _classCallCheck2.default)(this, LoadableComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoadableComponent).apply(this, arguments));
    }

    (0, _createClass2.default)(LoadableComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        if (this.props.loaded === undefined) {
          this.props.LoadModule(store);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.loaded === true) {
          if (window[moduleName] === undefined) {
            throw "Could not find module ".concat(moduleName, ". Module doesn't export himself?");
          }

          if (window[moduleName].default[componentName] === undefined) {
            throw "Could not find component ".concat(componentName, " in ").concat(moduleName, " module. Component is not exported in module?");
          }

          return _react.default.createElement(window[moduleName].default[componentName], props);
        } else if (this.props.loaded === 'error') {
          throw "Unable to load ".concat(moduleName, " with component ").concat(componentName, ". Check network tab in dev tools and your AssetBundle for wrong 404 assets.");
        } else {
          return _react.default.createElement("div", {
            className: "CRM__LoadableComponent--isLoading"
          }, _react.default.createElement("div", {
            className: "spinner"
          }, "Loading"));
        }
      } // /render

    }]);
    return LoadableComponent;
  }(_react.default.Component); // LoadableComponent


  (0, _defineProperty2.default)(LoadableComponent, "propTypes", {
    loaded: _propTypes.default.any,
    LoadModule: _propTypes.default.func.isRequired
  });

  var mapStateToProps = function mapStateToProps(store) {
    return {
      loaded: store.LoadedModules && store.LoadedModules[moduleName] || undefined
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      LoadModule: function LoadModule(store) {
        dispatch((0, _actions.LoadModule)(moduleName, store));
      }
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoadableComponent);
}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _history = __webpack_require__(19);

var history = (0, _history.createHashHistory)();
var _default = history;
exports.default = _default;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBundle = exports.canLoadModule = exports.shouldLoadModule = exports.AvailableModules = void 0;

var _warning = _interopRequireDefault(__webpack_require__(8));

var AvailableModules = window.Yii3CRM__availableModules || {};
exports.AvailableModules = AvailableModules;

var shouldLoadModule = function shouldLoadModule(state, moduleName) {
  var module = state[moduleName];
  return module === undefined || module === 'error';
};

exports.shouldLoadModule = shouldLoadModule;

var canLoadModule = function canLoadModule(moduleName) {
  var moduleDefined = AvailableModules[moduleName] || false;

  if (moduleDefined === false) {
    (0, _warning.default)(false, "Module ".concat(moduleName, " is not defined in window.Yii3CRM__availableModules"));
  }

  return moduleDefined;
};

exports.canLoadModule = canLoadModule;

var getBundle = function getBundle(moduleName) {
  return AvailableModules[moduleName].bundle;
};

exports.getBundle = getBundle;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(439);

var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadModule = exports.SuccessLoadingModule = exports.ErrorLoadingModule = exports.StartLoadingModule = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(499));

var _promise = _interopRequireDefault(__webpack_require__(263));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(481));

var _reduxAct = __webpack_require__(163);

var _warning = _interopRequireDefault(__webpack_require__(8));

var Utils = _interopRequireWildcard(__webpack_require__(257));

var _store = __webpack_require__(266);

var StartLoadingModule = (0, _reduxAct.createAction)('Start Loading Module');
exports.StartLoadingModule = StartLoadingModule;
var ErrorLoadingModule = (0, _reduxAct.createAction)('Error Loading Module');
exports.ErrorLoadingModule = ErrorLoadingModule;
var SuccessLoadingModule = (0, _reduxAct.createAction)('Success Loading Module');
exports.SuccessLoadingModule = SuccessLoadingModule;

var LoadModuleAssets =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dispatch, moduleName, store) {
    var promises, _Utils$getBundle, css, js;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promises = [];
            _Utils$getBundle = Utils.getBundle(moduleName), css = _Utils$getBundle.css, js = _Utils$getBundle.js;
            js.forEach(function (filename) {
              promises.push(new _promise.default(function (resolve, reject) {
                var script = document.createElement('script');
                script.async = 1;
                script.src = filename;

                script.onload = function () {
                  return resolve(filename);
                };

                script.onerror = function () {
                  return reject(filename);
                };

                document.body.appendChild(script);
              }));
            });
            css.forEach(function (filename) {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = filename;
              document.head.appendChild(link);
            });
            _context.prev = 4;
            _context.next = 7;
            return _promise.default.all(promises);

          case 7:
            if (window[moduleName].default.ReduxReducers) {
              (0, _store.injectAsyncReducer)(store, moduleName, window[moduleName].default.ReduxReducers());
            }

            dispatch(SuccessLoadingModule(moduleName));
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            (0, _warning.default)(false, "Unable to load module ".concat(moduleName), _context.t0);
            dispatch(ErrorLoadingModule(moduleName));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 11]]);
  }));

  return function LoadModuleAssets(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Load module if it is not loaded already.
 *
 * @param {string} moduleName
 * @param {object} store
 * @returns {Function}
 * @constructor
 */


var LoadModule = function LoadModule(moduleName, store) {
  return function (dispatch, getState) {
    if (Utils.shouldLoadModule(getState(), moduleName) && Utils.canLoadModule(moduleName)) {
      dispatch(StartLoadingModule(moduleName));
      return LoadModuleAssets(dispatch, moduleName, store);
    }

    (0, _warning.default)(false, "Will not load module ".concat(moduleName));
  };
};

exports.LoadModule = LoadModule;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;
exports.injectAsyncReducer = injectAsyncReducer;

var _redux = __webpack_require__(15);

var _reducers = _interopRequireDefault(__webpack_require__(504));

var _reduxThunk = _interopRequireDefault(__webpack_require__(267));

var _reduxDevtoolsExtension = __webpack_require__(480);

var _connectedReactRouter = __webpack_require__(256);

var _history = _interopRequireDefault(__webpack_require__(255));

var ReactRouterMiddleware = (0, _connectedReactRouter.routerMiddleware)(_history.default);
var composeEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)({// options like actionSanitizer, stateSanitizer
});

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(_history.default)((0, _reducers.default)()), initialState, composeEnhancers((0, _redux.applyMiddleware)(ReactRouterMiddleware), (0, _redux.applyMiddleware)(_reduxThunk.default) // applyMiddleware(logger),
  ));
  store.asyncReducers = {};
  return store;
}

function injectAsyncReducer(store, name, asyncReducer) {
  // console.log('injecting async reducer', store, name, asyncReducer);
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer((0, _reducers.default)(store.asyncReducers));
}

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(112));

var _createClass2 = _interopRequireDefault(__webpack_require__(111));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(110));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(106));

var _inherits2 = _interopRequireDefault(__webpack_require__(105));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(232));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(86));

var _react = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ErrorBoundary);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorBoundary).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      hasError: false
    });
    return _this;
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return _react.default.createElement("div", {
          className: "AdminPanel__error"
        }, _react.default.createElement("h1", null, "Error happened"), _react.default.createElement("h2", null, this.state.error.toString()), _react.default.createElement("pre", null, this.state.info.componentStack));
      }

      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(_react.default.Component);

ErrorBoundary.propTypes = {
  children: _propTypes.default.any
};
var _default = ErrorBoundary;
exports.default = _default;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(112));

var _createClass2 = _interopRequireDefault(__webpack_require__(111));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(110));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(106));

var _inherits2 = _interopRequireDefault(__webpack_require__(105));

var _react = _interopRequireDefault(__webpack_require__(2));

var RouteNotFound =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RouteNotFound, _React$Component);

  function RouteNotFound(props) {
    (0, _classCallCheck2.default)(this, RouteNotFound);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RouteNotFound).call(this, props));
  }

  (0, _createClass2.default)(RouteNotFound, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("h1", null, "Not found");
    }
  }]);
  return RouteNotFound;
}(_react.default.Component);

var _default = RouteNotFound;
exports.default = _default;

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(457));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(452));

var _keys = _interopRequireDefault(__webpack_require__(162));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(112));

var _createClass2 = _interopRequireDefault(__webpack_require__(111));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(110));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(106));

var _inherits2 = _interopRequireDefault(__webpack_require__(105));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(232));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(86));

var _react = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _Utils = __webpack_require__(257);

var _LoadableComponent = _interopRequireDefault(__webpack_require__(254));

var _RouteNotFound = _interopRequireDefault(__webpack_require__(451));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(450));

var _reactRouter = __webpack_require__(115);

var _reactRouterDom = __webpack_require__(252);

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(App, _React$Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2.default)(this, App);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "routes", []);
    var routeIndex = 0;
    (0, _keys.default)(_Utils.AvailableModules).forEach(function (moduleName) {
      var module = _Utils.AvailableModules[moduleName];
      module.routes.forEach(function (routeItem) {
        var route = routeItem.route,
            component = routeItem.component,
            props = (0, _objectWithoutProperties2.default)(routeItem, ["route", "component"]);

        _this.routes.push(_react.default.createElement(_reactRouterDom.Route, (0, _extends2.default)({
          path: route,
          component: (0, _LoadableComponent.default)(moduleName, component, _this.props.store),
          key: routeIndex++
        }, props)));
      });
    }); // routes

    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_ErrorBoundary.default, null, _react.default.createElement(_reactRouter.Switch, null, this.routes, _react.default.createElement(_reactRouterDom.Route, {
        component: _RouteNotFound.default
      }))), _react.default.createElement(_reactRouterDom.Link, {
        to: "/installer/"
      }, "Run installer"));
    }
  }]);
  return App;
}(_react.default.Component);

(0, _defineProperty2.default)(App, "propTypes", {
  history: _propTypes.default.object.isRequired,
  store: _propTypes.default.object.isRequired
});
var _default = App;
exports.default = _default;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;
exports.LoadedModules = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(86));

var _objectSpread5 = _interopRequireDefault(__webpack_require__(503));

var _redux = __webpack_require__(15);

var _reactRouterRedux = __webpack_require__(448);

var _reduxForm = __webpack_require__(253);

var _reduxAct = __webpack_require__(163);

var _actions = __webpack_require__(264);

var _createActReducer;

// Reducer for loading modules
var LoadedModules = (0, _reduxAct.createReducer)((_createActReducer = {}, (0, _defineProperty2.default)(_createActReducer, _actions.StartLoadingModule, function (state, moduleName) {
  return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, moduleName, false));
}), (0, _defineProperty2.default)(_createActReducer, _actions.ErrorLoadingModule, function (state, moduleName) {
  return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, moduleName, 'error'));
}), (0, _defineProperty2.default)(_createActReducer, _actions.SuccessLoadingModule, function (state, moduleName) {
  return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, moduleName, true));
}), _createActReducer), {
  /**
   * Here will be object where key is moduleName and value is:
   * - true - module loaded ok
   * - false - module is loading
   * - undefined - module was not loaded and load can be initiated
   * - 'error' - module tried to load but failed, can try to load again
   */
});
exports.LoadedModules = LoadedModules;

// import {ApiTableReducer} from './ApiTable/reducers';
function createReducer(asyncReducers) {
  return (0, _redux.combineReducers)((0, _objectSpread5.default)({
    routing: _reactRouterRedux.routerReducer,
    // apiTable: ApiTableReducer,
    LoadedModules: LoadedModules,
    form: _reduxForm.reducer
  }, asyncReducers), {});
}

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__(32);

// import {deepOrange} from 'material-ui/colors';
var _default = (0, _styles.createMuiTheme)({
  palette: {// primary: deepOrange
  }
});

exports.default = _default;

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(439);

var _interopRequireDefault = __webpack_require__(39);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ReactDOM", {
  enumerable: true,
  get: function get() {
    return _reactDom.default;
  }
});
Object.defineProperty(exports, "React", {
  enumerable: true,
  get: function get() {
    return _react.default;
  }
});
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return _classnames.default;
  }
});
Object.defineProperty(exports, "yup", {
  enumerable: true,
  get: function get() {
    return _yup.default;
  }
});
Object.defineProperty(exports, "ReduxThunk", {
  enumerable: true,
  get: function get() {
    return _reduxThunk.default;
  }
});
Object.defineProperty(exports, "PropTypes", {
  enumerable: true,
  get: function get() {
    return _propTypes.default;
  }
});
Object.defineProperty(exports, "LoadableComponent", {
  enumerable: true,
  get: function get() {
    return _LoadableComponent.default;
  }
});
Object.defineProperty(exports, "i18next", {
  enumerable: true,
  get: function get() {
    return _i18next.default;
  }
});
exports.ReduxAct = exports.ReduxFormYup = exports.ReduxForm = exports.MaterialUI = exports.ReactRedux = exports.Redux = exports.ReactRouterExport = exports.RouterHistory = exports.CRM = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(112));

var _createClass2 = _interopRequireDefault(__webpack_require__(111));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(110));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(106));

var _inherits2 = _interopRequireDefault(__webpack_require__(105));

__webpack_require__(934);

__webpack_require__(932);

var _reactDom = _interopRequireDefault(__webpack_require__(24));

var ReactRouterExport = _interopRequireWildcard(__webpack_require__(252));

exports.ReactRouterExport = ReactRouterExport;

var _react = _interopRequireDefault(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(6));

var Redux = _interopRequireWildcard(__webpack_require__(15));

exports.Redux = Redux;

var ReactRedux = _interopRequireWildcard(__webpack_require__(22));

exports.ReactRedux = ReactRedux;

var _MuiTheme = _interopRequireDefault(__webpack_require__(910));

var MaterialUI = _interopRequireWildcard(__webpack_require__(870));

exports.MaterialUI = MaterialUI;

__webpack_require__(674);

var _JssProvider = _interopRequireDefault(__webpack_require__(673));

var _styles = __webpack_require__(32);

var ReduxForm = _interopRequireWildcard(__webpack_require__(253));

exports.ReduxForm = ReduxForm;

var _yup = _interopRequireDefault(__webpack_require__(640));

var ReduxFormYup = _interopRequireWildcard(__webpack_require__(512));

exports.ReduxFormYup = ReduxFormYup;

var ReduxAct = _interopRequireWildcard(__webpack_require__(163));

exports.ReduxAct = ReduxAct;

var _reduxThunk = _interopRequireDefault(__webpack_require__(267));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _store = _interopRequireDefault(__webpack_require__(266));

var _LoadableComponent = _interopRequireDefault(__webpack_require__(254));

var _connectedReactRouter = __webpack_require__(256);

var _history = _interopRequireDefault(__webpack_require__(255));

var _i18next = _interopRequireDefault(__webpack_require__(449));

var _i18nextXhrBackend = _interopRequireDefault(__webpack_require__(472));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(__webpack_require__(468));

var _App = _interopRequireDefault(__webpack_require__(458));

// Build the middleware for intercepting and dispatching navigation actions
var Provider = ReactRedux.Provider;
var MuiThemeProvider = MaterialUI.MuiThemeProvider;

if (window.DotPlantAdminPanel__ReduxReducers === undefined) {
  window.DotPlantAdminPanel__ReduxReducers = {};
}

var store = (0, _store.default)({});

var CRM =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CRM, _React$Component);

  function CRM() {
    (0, _classCallCheck2.default)(this, CRM);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CRM).apply(this, arguments));
  }

  (0, _createClass2.default)(CRM, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Provider, {
        store: store
      }, _react.default.createElement(_connectedReactRouter.ConnectedRouter, {
        history: _history.default
      }, _react.default.createElement(_JssProvider.default, {
        generateClassName: (0, _styles.createGenerateClassName)()
      }, _react.default.createElement(MuiThemeProvider, {
        theme: _MuiTheme.default
      }, _react.default.createElement(_App.default, {
        history: _history.default,
        store: store
      })))));
    }
  }]);
  return CRM;
}(_react.default.Component); // Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


exports.CRM = CRM;

_i18next.default.use(_i18nextBrowserLanguagedetector.default).use(_i18nextXhrBackend.default).init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    debug: true
  },
  debug: true,
  defaultNS: 'frontend',
  ns: 'frontend',
  fallbackLng: window.Yii3CRM__defaultLanguage // preload: [window.Yii3CRM__defaultLanguage]

}, function () {
  if (document.getElementById('CRM__root')) {
    _reactDom.default.render(_react.default.createElement(CRM, null), document.getElementById('CRM__root'));
  }
});

var RouterHistory = _history.default;
exports.RouterHistory = RouterHistory;

/***/ })

/******/ })));
//# sourceMappingURL=app.bundle.js.map