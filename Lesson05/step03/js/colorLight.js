import Light from './light.js';

class ColorLight extends Light {

  constructor(state=false, brightness=100, color="ffffff") {
    super(state, brightness);
    this.color = this.checkColorFormat(color);
  }

  checkColorFormat(color) {
    // color must be a valid hex color
    var isHexColor  = /^#[0-9A-F]{6}$/i.test('#'+color);
    if(!isHexColor) {
      // if invalid make white
      color = "ffffff";
    }
    return color;
  }

}

export default ColorLight;
