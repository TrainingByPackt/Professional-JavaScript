import Light from './light.js';

// Page elements and variables
let bulb = document.getElementById("bulb");
let slider = document.getElementById("brightnessSlider");
let onImage = "images/bulb_on.png";
let offImage = "images/bulb_off.png";

let light = new Light(true, 0.5);

// Set image based on light state
bulb.src = light.getState() ? onImage : offImage;

// Set opacity based on brightness
bulb.style.opacity = light.getBrightness();

// Set slider value to brightness
slider.value = light.getBrightness();

bulb.onclick = function () {
  light.toggle();
  bulb.src = light.getState() ? onImage : offImage;
}

slider.onchange = function () {
  light.setBrightness(this.value);
  bulb.style.opacity = light.getBrightness();
}
