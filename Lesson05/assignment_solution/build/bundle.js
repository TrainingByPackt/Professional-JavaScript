/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/js/viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/js/flashingLight.js":
/*!***********************************!*\
  !*** ./build/js/flashingLight.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _light = _interopRequireDefault(__webpack_require__(/*! ./light.js */ \"./build/js/light.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar privateVars = new WeakMap();\n\nvar FlashingLight =\n/*#__PURE__*/\nfunction (_Light) {\n  _inherits(FlashingLight, _Light);\n\n  function FlashingLight() {\n    var _this;\n\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var brightness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var flashMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n    _classCallCheck(this, FlashingLight);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlashingLight).call(this, state, brightness));\n    var info = {\n      \"flashMode\": flashMode\n    };\n    privateVars.set(_assertThisInitialized(_this), info);\n\n    if (flashMode === true) {\n      _this.startFlashing();\n    }\n\n    return _this;\n  }\n\n  _createClass(FlashingLight, [{\n    key: \"setFlashMode\",\n    value: function setFlashMode(flashMode) {\n      var info = privateVars.get(this);\n      info.flashMode = checkStateFormat(flashMode);\n      privateVars.set(this, info);\n\n      if (flashMode === true) {\n        this.startFlashing();\n      } else {\n        this.stopFlashing();\n      }\n    }\n  }, {\n    key: \"getFlashMode\",\n    value: function getFlashMode() {\n      var info = privateVars.get(this);\n      return info.flashMode;\n    }\n  }, {\n    key: \"startFlashing\",\n    value: function startFlashing() {\n      var info = privateVars.get(this);\n      info.flashing = setInterval(this.toggle.bind(this), 5000);\n    }\n  }, {\n    key: \"stopFlashing\",\n    value: function stopFlashing() {\n      var info = privateVars.get(this);\n      clearInterval(info.flashing);\n    }\n  }]);\n\n  return FlashingLight;\n}(_light[\"default\"]);\n\nvar _default = FlashingLight;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./build/js/flashingLight.js?");

/***/ }),

/***/ "./build/js/light.js":
/*!***************************!*\
  !*** ./build/js/light.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar privateVars = new WeakMap();\nvar onImage = \"images/bulb_on.png\";\nvar offImage = \"images/bulb_off.png\";\n\nvar Light =\n/*#__PURE__*/\nfunction () {\n  function Light(state, brightness) {\n    _classCallCheck(this, Light);\n\n    // Parse values\n    state = this.checkStateFormat(state);\n    brightness = this.checkBrightnessFormat(brightness); // Create info object\n\n    var info = {\n      \"state\": state,\n      \"brightness\": brightness,\n      \"createdAt\": Date.now()\n    }; // Create html element\n\n    var div = document.createElement(\"div\");\n    var img = document.createElement(\"img\");\n    var slider = document.createElement(\"input\"); // Save reference to element as private variable\n\n    info.div = div;\n    info.img = img;\n    info.slider = slider;\n    this.createDiv(div, img, slider, state, brightness); // Save info into privateVars\n\n    privateVars.set(this, info);\n  }\n\n  _createClass(Light, [{\n    key: \"createDiv\",\n    value: function createDiv(div, img, slider, state, brightness) {\n      // make it so we can access this in lower scope\n      var that = this; // modify html\n\n      div.style.width = \"200px\";\n      div.style[\"float\"] = \"left\";\n\n      img.onclick = function () {\n        that.toggle();\n      };\n\n      img.width = \"200\";\n      img.src = state ? onImage : offImage;\n      img.style.opacity = brightness;\n\n      slider.onchange = function () {\n        that.setBrightness(this.value);\n      };\n\n      slider.type = \"range\";\n      slider.min = 0.01;\n      slider.max = 1;\n      slider.step = 0.01;\n      slider.value = brightness;\n      div.appendChild(img);\n      div.appendChild(slider); // append to document\n\n      document.body.appendChild(div);\n    }\n  }, {\n    key: \"checkStateFormat\",\n    value: function checkStateFormat(state) {\n      // state must be true or false\n      if (state) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"checkBrightnessFormat\",\n    value: function checkBrightnessFormat(brightness) {\n      // brightness must be a number between 0.01 and 1\n      if (isNaN(brightness)) {\n        brightness = 1;\n      } else if (brightness > 1) {\n        brightness = 1;\n      } else if (brightness < 0.01) {\n        brightness = 0.01;\n      }\n\n      return brightness;\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(state) {\n      var info = privateVars.get(this);\n      info.state = checkStateFormat(state);\n      privateVars.set(this, info);\n      info.img.src = info.state ? onImage : offImage;\n    }\n  }, {\n    key: \"getState\",\n    value: function getState() {\n      var info = privateVars.get(this);\n      return info.state;\n    }\n  }, {\n    key: \"setBrightness\",\n    value: function setBrightness(brightness) {\n      var info = privateVars.get(this);\n      info.brightness = this.checkBrightnessFormat(brightness);\n      privateVars.set(this, info);\n      info.img.style.opacity = brightness;\n    }\n  }, {\n    key: \"getBrightness\",\n    value: function getBrightness() {\n      var info = privateVars.get(this);\n      return info.brightness;\n    }\n  }, {\n    key: \"getImg\",\n    value: function getImg() {\n      var info = privateVars.get(this);\n      return info.img;\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      var info = privateVars.get(this);\n      info.state = !info.state;\n      privateVars.set(this, info);\n      info.img.src = info.state ? onImage : offImage;\n    }\n  }, {\n    key: \"test\",\n    value: function test() {\n      var info = privateVars.get(this);\n      alert(\"state is \" + privateVars.get(this).state);\n    }\n  }]);\n\n  return Light;\n}();\n\nvar _default = Light;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./build/js/light.js?");

/***/ }),

/***/ "./build/js/viewer.js":
/*!****************************!*\
  !*** ./build/js/viewer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _flashingLight = _interopRequireDefault(__webpack_require__(/*! ./flashingLight.js */ \"./build/js/flashingLight.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar slider = document.getElementById(\"brightnessSlider\");\nvar color = document.getElementById(\"color\");\nvar button = document.getElementById(\"build\");\n\nbutton.onclick = function () {\n  new _flashingLight[\"default\"](true, slider.value, true);\n};\n\n//# sourceURL=webpack:///./build/js/viewer.js?");

/***/ })

/******/ });