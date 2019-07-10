import Light from './light.js';
let light = new Light(false, 0.1);
let light2 = new Light(true, 0.2);
light.lightSwitch();
light.test();
light2.test();
alert(light.state);
