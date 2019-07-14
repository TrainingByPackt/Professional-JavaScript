"use strict";

var _light = _interopRequireDefault(require("./js/light.js"));

var _colorLight = _interopRequireDefault(require("./js/colorLight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  Light: _light["default"],
  ColorLight: _colorLight["default"]
};