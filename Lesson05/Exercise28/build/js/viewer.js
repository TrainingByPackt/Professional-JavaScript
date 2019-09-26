"use strict";

var _colorLight = _interopRequireDefault(require("./colorLight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var slider = document.getElementById("brightnessSlider");
var color = document.getElementById("color");
var button = document.getElementById("build");

button.onclick = function () {
  new _colorLight["default"](true, slider.value, color.value);
};