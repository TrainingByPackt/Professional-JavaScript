'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _light = require('./light.js');

var _light2 = _interopRequireDefault(_light);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorLight = function (_Light) {
  _inherits(ColorLight, _Light);

  function ColorLight() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var brightness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ffffff";

    _classCallCheck(this, ColorLight);

    var _this = _possibleConstructorReturn(this, (ColorLight.__proto__ || Object.getPrototypeOf(ColorLight)).call(this, state, brightness));

    _this.color = _this.checkColorFormat(color);
    return _this;
  }

  _createClass(ColorLight, [{
    key: 'checkColorFormat',
    value: function checkColorFormat(color) {
      // color must be a valid hex color
      var isHexColor = /^#[0-9A-F]{6}$/i.test('#' + color);
      if (!isHexColor) {
        // if invalid make white
        color = "ffffff";
      }
      return color;
    }
  }]);

  return ColorLight;
}(_light2.default);

exports.default = ColorLight;