import ColorLight from './colorLight.js';

let slider = document.getElementById("brightnessSlider");
let color = document.getElementById("color");
let button = document.getElementById("build");

button.onclick = function () {
  new ColorLight(true, slider.value, color.value);
}
