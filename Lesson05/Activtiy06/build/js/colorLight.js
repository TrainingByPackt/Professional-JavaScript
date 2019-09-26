"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _light = _interopRequireDefault(require("./light.js"));

var _changeColor = _interopRequireDefault(require("./__extra__/changeColor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var privateVars = new WeakMap();

var ColorLight =
/*#__PURE__*/
function (_Light) {
  _inherits(ColorLight, _Light);

  function ColorLight() {
    var _this;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var brightness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ffffff";

    _classCallCheck(this, ColorLight);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorLight).call(this, state, brightness)); // Create info object

    var info = {
      "color": _this.checkColorFormat(color)
    }; // Save info into privateVars

    privateVars.set(_assertThisInitialized(_this), info);

    var img = _this.getImg();

    img.style.webkitFilter = (0, _changeColor["default"])(color);
    return _this;
  }

  _createClass(ColorLight, [{
    key: "checkColorFormat",
    value: function checkColorFormat(color) {
      // color must be a valid hex color
      var isHexColor = /^#[0-9A-F]{6}$/i.test('#' + color);

      if (!isHexColor) {
        // if invalid make white
        color = "ffffff";
      }

      return color;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      var info = privateVars.get(this);
      return info.color;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      var info = privateVars.get(this);
      info.color = this.checkColorFormat(color);
      privateVars.set(this, info);
    }
  }]);

  return ColorLight;
}(_light["default"]);

var _default = ColorLight;
exports["default"] = _default;