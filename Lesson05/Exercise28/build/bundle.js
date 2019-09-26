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

/***/ "./build/js/__extra__/changeColor.js":
/*!*******************************************!*\
  !*** ./build/js/__extra__/changeColor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// CSS Hue Changer\n// from https://gist.github.com/barretts/e90d7e5251f36b183c67e02ba54c9ae1\nvar Color =\n/*#__PURE__*/\nfunction () {\n  function Color(r, g, b) {\n    _classCallCheck(this, Color);\n\n    this.set(r, g, b);\n  }\n\n  _createClass(Color, [{\n    key: \"toString\",\n    value: function toString() {\n      return \"rgb(\".concat(Math.round(this.r), \", \").concat(Math.round(this.g), \", \").concat(Math.round(this.b), \")\");\n    }\n  }, {\n    key: \"set\",\n    value: function set(r, g, b) {\n      this.r = this.clamp(r);\n      this.g = this.clamp(g);\n      this.b = this.clamp(b);\n    }\n  }, {\n    key: \"hueRotate\",\n    value: function hueRotate() {\n      var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      angle = angle / 180 * Math.PI;\n      var sin = Math.sin(angle);\n      var cos = Math.cos(angle);\n      this.multiply([0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928, 0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283, 0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072]);\n    }\n  }, {\n    key: \"grayscale\",\n    value: function grayscale() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.multiply([0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value), 0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)]);\n    }\n  }, {\n    key: \"sepia\",\n    value: function sepia() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.multiply([0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value), 0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value), 0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)]);\n    }\n  }, {\n    key: \"saturate\",\n    value: function saturate() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.multiply([0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value, 0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value]);\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(matrix) {\n      var newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);\n      var newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);\n      var newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);\n      this.r = newR;\n      this.g = newG;\n      this.b = newB;\n    }\n  }, {\n    key: \"brightness\",\n    value: function brightness() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.linear(value);\n    }\n  }, {\n    key: \"contrast\",\n    value: function contrast() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.linear(value, -(0.5 * value) + 0.5);\n    }\n  }, {\n    key: \"linear\",\n    value: function linear() {\n      var slope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      var intercept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      this.r = this.clamp(this.r * slope + intercept * 255);\n      this.g = this.clamp(this.g * slope + intercept * 255);\n      this.b = this.clamp(this.b * slope + intercept * 255);\n    }\n  }, {\n    key: \"invert\",\n    value: function invert() {\n      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);\n      this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);\n      this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);\n    }\n  }, {\n    key: \"hsl\",\n    value: function hsl() {\n      // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.\n      var r = this.r / 255;\n      var g = this.g / 255;\n      var b = this.b / 255;\n      var max = Math.max(r, g, b);\n      var min = Math.min(r, g, b);\n      var h,\n          s,\n          l = (max + min) / 2;\n\n      if (max === min) {\n        h = s = 0;\n      } else {\n        var d = max - min;\n        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n\n        switch (max) {\n          case r:\n            h = (g - b) / d + (g < b ? 6 : 0);\n            break;\n\n          case g:\n            h = (b - r) / d + 2;\n            break;\n\n          case b:\n            h = (r - g) / d + 4;\n            break;\n        }\n\n        h /= 6;\n      }\n\n      return {\n        h: h * 100,\n        s: s * 100,\n        l: l * 100\n      };\n    }\n  }, {\n    key: \"clamp\",\n    value: function clamp(value) {\n      if (value > 255) {\n        value = 255;\n      } else if (value < 0) {\n        value = 0;\n      }\n\n      return value;\n    }\n  }]);\n\n  return Color;\n}();\n\nvar Solver =\n/*#__PURE__*/\nfunction () {\n  function Solver(target, baseColor) {\n    _classCallCheck(this, Solver);\n\n    this.target = target;\n    this.targetHSL = target.hsl();\n    this.reusedColor = new Color(0, 0, 0);\n  }\n\n  _createClass(Solver, [{\n    key: \"solve\",\n    value: function solve() {\n      var result = this.solveNarrow(this.solveWide());\n      return {\n        values: result.values,\n        loss: result.loss,\n        filter: this.css(result.values)\n      };\n    }\n  }, {\n    key: \"solveWide\",\n    value: function solveWide() {\n      var A = 5;\n      var c = 15;\n      var a = [60, 180, 18000, 600, 1.2, 1.2];\n      var best = {\n        loss: Infinity\n      };\n\n      for (var i = 0; best.loss > 25 && i < 3; i++) {\n        var initial = [50, 20, 3750, 50, 100, 100];\n        var result = this.spsa(A, a, c, initial, 1000);\n\n        if (result.loss < best.loss) {\n          best = result;\n        }\n      }\n\n      return best;\n    }\n  }, {\n    key: \"solveNarrow\",\n    value: function solveNarrow(wide) {\n      var A = wide.loss;\n      var c = 2;\n      var A1 = A + 1;\n      var a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];\n      return this.spsa(A, a, c, wide.values, 500);\n    }\n  }, {\n    key: \"spsa\",\n    value: function spsa(A, a, c, values, iters) {\n      var alpha = 1;\n      var gamma = 0.16666666666666666;\n      var best = null;\n      var bestLoss = Infinity;\n      var deltas = new Array(6);\n      var highArgs = new Array(6);\n      var lowArgs = new Array(6);\n\n      for (var k = 0; k < iters; k++) {\n        var ck = c / Math.pow(k + 1, gamma);\n\n        for (var i = 0; i < 6; i++) {\n          deltas[i] = Math.random() > 0.5 ? 1 : -1;\n          highArgs[i] = values[i] + ck * deltas[i];\n          lowArgs[i] = values[i] - ck * deltas[i];\n        }\n\n        var lossDiff = this.loss(highArgs) - this.loss(lowArgs);\n\n        for (var _i = 0; _i < 6; _i++) {\n          var g = lossDiff / (2 * ck) * deltas[_i];\n          var ak = a[_i] / Math.pow(A + k + 1, alpha);\n          values[_i] = fix(values[_i] - ak * g, _i);\n        }\n\n        var loss = this.loss(values);\n\n        if (loss < bestLoss) {\n          best = values.slice(0);\n          bestLoss = loss;\n        }\n      }\n\n      return {\n        values: best,\n        loss: bestLoss\n      };\n\n      function fix(value, idx) {\n        var max = 100;\n\n        if (idx === 2\n        /* saturate */\n        ) {\n            max = 7500;\n          } else if (idx === 4\n        /* brightness */\n        || idx === 5\n        /* contrast */\n        ) {\n            max = 200;\n          }\n\n        if (idx === 3\n        /* hue-rotate */\n        ) {\n            if (value > max) {\n              value %= max;\n            } else if (value < 0) {\n              value = max + value % max;\n            }\n          } else if (value < 0) {\n          value = 0;\n        } else if (value > max) {\n          value = max;\n        }\n\n        return value;\n      }\n    }\n  }, {\n    key: \"loss\",\n    value: function loss(filters) {\n      // Argument is array of percentages.\n      var color = this.reusedColor;\n      color.set(0, 0, 0);\n      color.invert(filters[0] / 100);\n      color.sepia(filters[1] / 100);\n      color.saturate(filters[2] / 100);\n      color.hueRotate(filters[3] * 3.6);\n      color.brightness(filters[4] / 100);\n      color.contrast(filters[5] / 100);\n      var colorHSL = color.hsl();\n      return Math.abs(color.r - this.target.r) + Math.abs(color.g - this.target.g) + Math.abs(color.b - this.target.b) + Math.abs(colorHSL.h - this.targetHSL.h) + Math.abs(colorHSL.s - this.targetHSL.s) + Math.abs(colorHSL.l - this.targetHSL.l);\n    }\n  }, {\n    key: \"css\",\n    value: function css(filters) {\n      function fmt(idx) {\n        var multiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n        return Math.round(filters[idx] * multiplier);\n      }\n\n      return \"invert(\".concat(fmt(0), \"%) sepia(\").concat(fmt(1), \"%) saturate(\").concat(fmt(2), \"%) hue-rotate(\").concat(fmt(3, 3.6), \"deg) brightness(\").concat(fmt(4), \"%) contrast(\").concat(fmt(5), \"%)\");\n    }\n  }]);\n\n  return Solver;\n}();\n\nfunction hexToRgb(hex) {\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\n  var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  hex = hex.replace(shorthandRegex, function (m, r, g, b) {\n    return r + r + g + g + b + b;\n  });\n  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;\n}\n\nfunction changeLight(hex) {\n  var rgb = hexToRgb(hex);\n  var color = new Color(rgb[0], rgb[1], rgb[2]);\n  var solver = new Solver(color);\n  var result = solver.solve();\n\n  if (document.getElementById(\"bulb\")) {\n    document.getElementById(\"bulb\").style.webkitFilter = result.filter;\n  }\n\n  return result.filter;\n}\n\nvar _default = changeLight;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./build/js/__extra__/changeColor.js?");

/***/ }),

/***/ "./build/js/colorLight.js":
/*!********************************!*\
  !*** ./build/js/colorLight.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _light = _interopRequireDefault(__webpack_require__(/*! ./light.js */ \"./build/js/light.js\"));\n\nvar _changeColor = _interopRequireDefault(__webpack_require__(/*! ./__extra__/changeColor.js */ \"./build/js/__extra__/changeColor.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar privateVars = new WeakMap();\n\nvar ColorLight =\n/*#__PURE__*/\nfunction (_Light) {\n  _inherits(ColorLight, _Light);\n\n  function ColorLight() {\n    var _this;\n\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var brightness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"ffffff\";\n\n    _classCallCheck(this, ColorLight);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorLight).call(this, state, brightness)); // Create info object\n\n    var info = {\n      \"color\": _this.checkColorFormat(color)\n    }; // Save info into privateVars\n\n    privateVars.set(_assertThisInitialized(_this), info);\n\n    var img = _this.getImg();\n\n    img.style.webkitFilter = (0, _changeColor[\"default\"])(color);\n    return _this;\n  }\n\n  _createClass(ColorLight, [{\n    key: \"checkColorFormat\",\n    value: function checkColorFormat(color) {\n      // color must be a valid hex color\n      var isHexColor = /^#[0-9A-F]{6}$/i.test('#' + color);\n\n      if (!isHexColor) {\n        // if invalid make white\n        color = \"ffffff\";\n      }\n\n      return color;\n    }\n  }, {\n    key: \"getColor\",\n    value: function getColor() {\n      var info = privateVars.get(this);\n      return info.color;\n    }\n  }, {\n    key: \"setColor\",\n    value: function setColor(color) {\n      var info = privateVars.get(this);\n      info.color = this.checkColorFormat(color);\n      privateVars.set(this, info);\n    }\n  }]);\n\n  return ColorLight;\n}(_light[\"default\"]);\n\nvar _default = ColorLight;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./build/js/colorLight.js?");

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
eval("\n\nvar _colorLight = _interopRequireDefault(__webpack_require__(/*! ./colorLight.js */ \"./build/js/colorLight.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar slider = document.getElementById(\"brightnessSlider\");\nvar color = document.getElementById(\"color\");\nvar button = document.getElementById(\"build\");\n\nbutton.onclick = function () {\n  new _colorLight[\"default\"](true, slider.value, color.value);\n};\n\n//# sourceURL=webpack:///./build/js/viewer.js?");

/***/ })

/******/ });