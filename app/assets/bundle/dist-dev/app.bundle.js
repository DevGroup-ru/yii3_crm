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
/******/ 	deferredModules.push([958,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (moduleName, componentName, store) {
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var LoadableComponent = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent() {
      _classCallCheck(this, LoadableComponent);

      return _possibleConstructorReturn(this, (LoadableComponent.__proto__ || Object.getPrototypeOf(LoadableComponent)).apply(this, arguments));
    }

    _createClass(LoadableComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.loaded === undefined) {
          this.props.LoadModule(store);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.loaded === true) {
          if (window[moduleName] === undefined) {
            throw 'Could not find module ' + moduleName + '. Module doesn\'t export himself?';
          }

          if (window[moduleName].default[componentName] === undefined) {
            throw 'Could not find component ' + componentName + ' in ' + moduleName + ' module. Component is not exported in module?';
          }

          return _react2.default.createElement(window[moduleName].default[componentName], props);
        } else if (this.props.loaded === 'error') {

          throw 'Unable to load ' + moduleName + ' with component ' + componentName + '. Check network tab in dev tools and your AssetBundle for wrong 404 assets.';
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'CRM__LoadableComponent--isLoading' },
            _react2.default.createElement(
              'div',
              { className: 'spinner' },
              'Loading'
            )
          );
        }
      } // /render

    }]);

    return LoadableComponent;
  }(_react2.default.Component); // LoadableComponent

  LoadableComponent.propTypes = {
    loaded: _propTypes2.default.any,
    LoadModule: _propTypes2.default.func.isRequired
  };
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
};

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(32);

var _actions = __webpack_require__(300);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(28);

var history = (0, _history.createHashHistory)();
exports.default = history;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBundle = exports.canLoadModule = exports.shouldLoadModule = exports.AvailableModules = undefined;

var _warning = __webpack_require__(13);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvailableModules = exports.AvailableModules = window.Yii3CRM__availableModules || {};

var shouldLoadModule = exports.shouldLoadModule = function shouldLoadModule(state, moduleName) {
  var module = state[moduleName];

  return module === undefined || module === 'error';
};

var canLoadModule = exports.canLoadModule = function canLoadModule(moduleName) {
  var moduleDefined = AvailableModules[moduleName] || false;
  if (moduleDefined === false) {
    (0, _warning2.default)(false, 'Module ' + moduleName + ' is not defined in window.Yii3CRM__availableModules');
  }
  return moduleDefined;
};

var getBundle = exports.getBundle = function getBundle(moduleName) {
  return AvailableModules[moduleName].bundle;
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadModule = exports.SuccessLoadingModule = exports.ErrorLoadingModule = exports.StartLoadingModule = undefined;

var _reduxAct = __webpack_require__(194);

var _warning = __webpack_require__(13);

var _warning2 = _interopRequireDefault(_warning);

var _Utils = __webpack_require__(299);

var Utils = _interopRequireWildcard(_Utils);

var _store = __webpack_require__(301);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var StartLoadingModule = exports.StartLoadingModule = (0, _reduxAct.createAction)('Start Loading Module');
var ErrorLoadingModule = exports.ErrorLoadingModule = (0, _reduxAct.createAction)('Error Loading Module');
var SuccessLoadingModule = exports.SuccessLoadingModule = (0, _reduxAct.createAction)('Success Loading Module');

var LoadModuleAssets = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, moduleName, store) {
    var promises, _Utils$getBundle, css, js;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promises = [];
            _Utils$getBundle = Utils.getBundle(moduleName), css = _Utils$getBundle.css, js = _Utils$getBundle.js;


            js.forEach(function (filename) {
              promises.push(new Promise(function (resolve, reject) {
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
            return Promise.all(promises);

          case 7:

            if (window[moduleName].default.ReduxReducers) {
              (0, _store.injectAsyncReducer)(store, moduleName, window[moduleName].default.ReduxReducers());
            }
            dispatch(SuccessLoadingModule(moduleName));
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](4);

            (0, _warning2.default)(false, 'Unable to load module ' + moduleName, _context.t0);
            dispatch(ErrorLoadingModule(moduleName));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 11]]);
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
var LoadModule = exports.LoadModule = function LoadModule(moduleName, store) {
  return function (dispatch, getState) {
    if (Utils.shouldLoadModule(getState(), moduleName) && Utils.canLoadModule(moduleName)) {
      dispatch(StartLoadingModule(moduleName));
      return LoadModuleAssets(dispatch, moduleName, store);
    }

    (0, _warning2.default)(false, 'Will not load module ' + moduleName);
  };
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;
exports.injectAsyncReducer = injectAsyncReducer;

var _redux = __webpack_require__(22);

var _reducers = __webpack_require__(529);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(302);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(528);

var _connectedReactRouter = __webpack_require__(298);

var _history = __webpack_require__(297);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactRouterMiddleware = (0, _connectedReactRouter.routerMiddleware)(_history2.default);
var composeEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)({
  // options like actionSanitizer, stateSanitizer
});

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(_history2.default)((0, _reducers2.default)()), initialState, composeEnhancers((0, _redux.applyMiddleware)(ReactRouterMiddleware), (0, _redux.applyMiddleware)(_reduxThunk2.default)
  // applyMiddleware(logger),
  ));
  store.asyncReducers = {};
  return store;
}

function injectAsyncReducer(store, name, asyncReducer) {
  // console.log('injecting async reducer', store, name, asyncReducer);
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer((0, _reducers2.default)(store.asyncReducers));
}

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error: error,
        info: info
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasError) {
        return _react2.default.createElement(
          'div',
          { className: 'AdminPanel__error' },
          _react2.default.createElement(
            'h1',
            null,
            'Error happened'
          ),
          _react2.default.createElement(
            'h2',
            null,
            this.state.error.toString()
          ),
          _react2.default.createElement(
            'pre',
            null,
            this.state.info.componentStack
          )
        );
      }
      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

ErrorBoundary.propTypes = {
  children: _propTypes2.default.any
};

exports.default = ErrorBoundary;

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteNotFound = function (_React$Component) {
  _inherits(RouteNotFound, _React$Component);

  function RouteNotFound(props) {
    _classCallCheck(this, RouteNotFound);

    return _possibleConstructorReturn(this, (RouteNotFound.__proto__ || Object.getPrototypeOf(RouteNotFound)).call(this, props));
  }

  _createClass(RouteNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Not found'
      );
    }
  }]);

  return RouteNotFound;
}(_react2.default.Component);

exports.default = RouteNotFound;

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utils = __webpack_require__(299);

var _LoadableComponent = __webpack_require__(296);

var _LoadableComponent2 = _interopRequireDefault(_LoadableComponent);

var _RouteNotFound = __webpack_require__(505);

var _RouteNotFound2 = _interopRequireDefault(_RouteNotFound);

var _ErrorBoundary = __webpack_require__(504);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _reactRouter = __webpack_require__(140);

var _reactRouterDom = __webpack_require__(294);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.routes = [];


    var routeIndex = 0;

    Object.keys(_Utils.AvailableModules).forEach(function (moduleName) {
      var module = _Utils.AvailableModules[moduleName];
      module.routes.forEach(function (routeItem) {
        var route = routeItem.route,
            component = routeItem.component,
            props = _objectWithoutProperties(routeItem, ['route', 'component']);

        _this.routes.push(_react2.default.createElement(_reactRouterDom.Route, _extends({
          path: route,
          component: (0, _LoadableComponent2.default)(moduleName, component, _this.props.store),
          key: routeIndex++
        }, props)));
      });
    }); // routes
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ErrorBoundary2.default,
          null,
          _react2.default.createElement(
            _reactRouter.Switch,
            null,
            this.routes,
            _react2.default.createElement(_reactRouterDom.Route, { component: _RouteNotFound2.default })
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/installer/' },
          'Run installer'
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  history: _propTypes2.default.object.isRequired,
  store: _propTypes2.default.object.isRequired
};
exports.default = App;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadedModules = undefined;

var _createActReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @see https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
                                                                                                                                                                                                                                                                   */


exports.default = createReducer;

var _redux = __webpack_require__(22);

var _reactRouterRedux = __webpack_require__(502);

var _reduxForm = __webpack_require__(295);

var _reduxAct = __webpack_require__(194);

var _actions = __webpack_require__(300);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Reducer for loading modules
var LoadedModules = (0, _reduxAct.createReducer)((_createActReducer = {}, _defineProperty(_createActReducer, _actions.StartLoadingModule, function (state, moduleName) {
  return _extends({}, state, _defineProperty({}, moduleName, false));
}), _defineProperty(_createActReducer, _actions.ErrorLoadingModule, function (state, moduleName) {
  return _extends({}, state, _defineProperty({}, moduleName, 'error'));
}), _defineProperty(_createActReducer, _actions.SuccessLoadingModule, function (state, moduleName) {
  return _extends({}, state, _defineProperty({}, moduleName, true));
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
  return (0, _redux.combineReducers)(_extends({
    routing: _reactRouterRedux.routerReducer,
    // apiTable: ApiTableReducer,
    LoadedModules: LoadedModules,
    form: _reduxForm.reducer
  }, asyncReducers), {});
}

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = __webpack_require__(47);

// import {deepOrange} from 'material-ui/colors';

exports.default = (0, _styles.createMuiTheme)({
  palette: {
    // primary: deepOrange
  }
});

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18next = exports.ReduxFormYup = exports.yup = exports.LoadableComponent = exports.PropTypes = exports.ReduxThunk = exports.ReduxAct = exports.ReduxForm = exports.ReactRedux = exports.Redux = exports.RouterHistory = exports.classNames = exports.MaterialUI = exports.CRM = exports.ReactRouterExport = exports.ReactDOM = exports.React = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(957);

__webpack_require__(955);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(294);

var ReactRouterExport = _interopRequireWildcard(_reactRouterDom);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(22);

var Redux = _interopRequireWildcard(_redux);

var _reactRedux = __webpack_require__(32);

var ReactRedux = _interopRequireWildcard(_reactRedux);

var _MuiTheme = __webpack_require__(933);

var _MuiTheme2 = _interopRequireDefault(_MuiTheme);

var _core = __webpack_require__(894);

var MaterialUI = _interopRequireWildcard(_core);

__webpack_require__(697);

var _JssProvider = __webpack_require__(696);

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _styles = __webpack_require__(47);

var _reduxForm = __webpack_require__(295);

var ReduxForm = _interopRequireWildcard(_reduxForm);

var _yup = __webpack_require__(665);

var _yup2 = _interopRequireDefault(_yup);

var _reduxFormYup = __webpack_require__(537);

var ReduxFormYup = _interopRequireWildcard(_reduxFormYup);

var _reduxAct = __webpack_require__(194);

var ReduxAct = _interopRequireWildcard(_reduxAct);

var _reduxThunk = __webpack_require__(302);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _store = __webpack_require__(301);

var _store2 = _interopRequireDefault(_store);

var _LoadableComponent = __webpack_require__(296);

var _LoadableComponent2 = _interopRequireDefault(_LoadableComponent);

var _connectedReactRouter = __webpack_require__(298);

var _history = __webpack_require__(297);

var _history2 = _interopRequireDefault(_history);

var _i18next = __webpack_require__(503);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextXhrBackend = __webpack_require__(520);

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

var _i18nextBrowserLanguagedetector = __webpack_require__(516);

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

var _App = __webpack_require__(506);

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Build the middleware for intercepting and dispatching navigation actions

var Provider = ReactRedux.Provider;
var MuiThemeProvider = MaterialUI.MuiThemeProvider;


if (window.DotPlantAdminPanel__ReduxReducers === undefined) {
  window.DotPlantAdminPanel__ReduxReducers = {};
}

var store = (0, _store2.default)({});

var CRM = function (_React$Component) {
  _inherits(CRM, _React$Component);

  function CRM() {
    _classCallCheck(this, CRM);

    return _possibleConstructorReturn(this, (CRM.__proto__ || Object.getPrototypeOf(CRM)).apply(this, arguments));
  }

  _createClass(CRM, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Provider,
        { store: store },
        _react2.default.createElement(
          _connectedReactRouter.ConnectedRouter,
          { history: _history2.default },
          _react2.default.createElement(
            _JssProvider2.default,
            { generateClassName: (0, _styles.createGenerateClassName)() },
            _react2.default.createElement(
              MuiThemeProvider,
              { theme: _MuiTheme2.default },
              _react2.default.createElement(_App2.default, { history: _history2.default, store: store })
            )
          )
        )
      );
    }
  }]);

  return CRM;
}(_react2.default.Component);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


_i18next2.default.use(_i18nextBrowserLanguagedetector2.default).use(_i18nextXhrBackend2.default).init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    debug: true
  },
  debug: true,
  defaultNS: 'frontend',
  ns: 'frontend',
  fallbackLng: window.Yii3CRM__defaultLanguage
  // preload: [window.Yii3CRM__defaultLanguage]
}, function () {

  if (document.getElementById('CRM__root')) {
    _reactDom2.default.render(_react2.default.createElement(CRM, null), document.getElementById('CRM__root'));
  }
  store && true;
});

var RouterHistory = _history2.default;

exports.React = _react2.default;
exports.ReactDOM = _reactDom2.default;
exports.ReactRouterExport = ReactRouterExport;
exports.CRM = CRM;
exports.MaterialUI = MaterialUI;
exports.classNames = _classnames2.default;
exports.RouterHistory = RouterHistory;
exports.Redux = Redux;
exports.ReactRedux = ReactRedux;
exports.ReduxForm = ReduxForm;
exports.ReduxAct = ReduxAct;
exports.ReduxThunk = _reduxThunk2.default;
exports.PropTypes = _propTypes2.default;
exports.LoadableComponent = _LoadableComponent2.default;
exports.yup = _yup2.default;
exports.ReduxFormYup = ReduxFormYup;
exports.i18next = _i18next2.default;

/***/ })

/******/ })));
//# sourceMappingURL=app.bundle.js.map