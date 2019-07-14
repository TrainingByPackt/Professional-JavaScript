import Light from './light.js';
import changeLight from './__extra__/changeColor.js';

let privateVars = new WeakMap();

class ColorLight extends Light {

  constructor(state=false, brightness=100, color="ffffff") {
    super(state, brightness);

    // Create info object
    let info = {"color": this.checkColorFormat(color)};

    // Save info into privateVars
    privateVars.set(this, info);

    let img = this.getImg();
    img.style.webkitFilter = changeLight(color);
    
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

  getColor() {
    let info = privateVars.get(this);
    return info.color;
  }

  setColor(color) {
    let info = privateVars.get(this);
    info.color = this.checkColorFormat(color);
    privateVars.set(this, info);
  }

}

export default ColorLight;
