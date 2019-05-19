'use strict';

var _light = require('./light.js');

var _light2 = _interopRequireDefault(_light);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var light = new _light2.default(false, 0.1);
var light2 = new _light2.default(true, 0.2);
light.lightSwitch();
light.test();
light2.test();
alert(light.state);