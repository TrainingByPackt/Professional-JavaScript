"use strict";

var _flashingLight = _interopRequireDefault(require("./flashingLight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var slider = document.getElementById("brightnessSlider");
var color = document.getElementById("color");
var button = document.getElementById("build");

button.onclick = function () {
  new _flashingLight["default"](true, slider.value, true);
};