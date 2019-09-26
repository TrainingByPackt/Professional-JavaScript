import FlashingLight from './flashingLight.js';

let slider = document.getElementById("brightnessSlider");
let color = document.getElementById("color");
let button = document.getElementById("build");

button.onclick = function () {
  new FlashingLight(true, slider.value, true);
}
