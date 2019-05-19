let privateVars = new WeakMap();
let flashing;

import Light from './light.js';

class FlashingLight extends Light {

  constructor(state=false, brightness=100, flashMode=true) {
    super(state, brightness);
    let info = {"flashMode": flashMode};
    privateVars.set(this, info);
    if(flashMode===true) {
      this.startFlashing();
    }
  }

  setFlashMode(flashMode) {
    let info = privateVars.get(this);
    info.flashMode = checkStateFormat(flashMode);
    privateVars.set(this, info);
    if(flashMode===true) {
      this.startFlashing();
    } else {
      this.stopFlashing();
    }
  }

  getFlashMode() {
    let info = privateVars.get(this);
    return info.flashMode;
  }

  startFlashing() {
    flashing = setInterval(this.lightSwitch.bind(this),5000);
  }

  stopFlashing() {
    clearInterval(flashing);
  }

}

export default FlashingLight;
