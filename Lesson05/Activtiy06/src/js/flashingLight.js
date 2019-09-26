import Light from './light.js';
let privateVars = new WeakMap();

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
    let info = privateVars.get(this);
    info.flashing = setInterval(this.toggle.bind(this),5000);
  }

  stopFlashing() {
    let info = privateVars.get(this);
    clearInterval(info.flashing);
  }

}

export default FlashingLight;
