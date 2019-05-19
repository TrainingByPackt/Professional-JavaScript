import FlashingLight from './flashingLight.js';
import ColorLight from './colorLight.js';

let light = new FlashingLight();
let light2= new ColorLight();
light.lightSwitch();
console.log(light.getFlashMode());
