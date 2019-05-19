'use strict';

var _light = require('./js/light.js');

var _light2 = _interopRequireDefault(_light);

var _colorLight = require('./js/colorLight.js');

var _colorLight2 = _interopRequireDefault(_colorLight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Light: _light2.default,
  ColorLight: _colorLight2.default
};