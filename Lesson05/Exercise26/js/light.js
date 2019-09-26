let privateVars = new WeakMap();

class Light {
  constructor(state, brightness) {
    // Parse values
    state = this.checkStateFormat(state);
    brightness = this.checkBrightnessFormat(brightness);

    // Create info object
    let info = {"state": state, "brightness": brightness, "createdAt": Date.now()};

    // Save info into privateVars
    privateVars.set(this, info);
  }

  checkStateFormat(state) {
    // state must be true or false
    if(state) {
      return true;
    } else {
      return false;
    }
  }

  checkBrightnessFormat(brightness) {
    // brightness must be a number between 0.01 and 1
    if(isNaN(brightness)) {
      brightness = 1;
    } else if(brightness > 1) {
      brightness = 1;
    } else if(brightness < 0.01) {
      brightness = 0.01;
    }
    return brightness;
  }

  setState(state) {                                                                                                                                    
    let info = privateVars.get(this);                                                                                                                  
    info.state = checkStateFormat(state);
    privateVars.set(this, info);                                                                                                                       
  }

  getState() {                                                                                                                                         
    let info = privateVars.get(this);                                                                                                                  
    return info.state;                                                                                                                                 
  }

  setBrightness(brightness) {
    let info = privateVars.get(this);
    info.brightness = this.checkBrightnessFormat(brightness);
    privateVars.set(this, info);
  }

  getBrightness() {
    let info = privateVars.get(this);
    return info.brightness;
  }

  toggle() {
    let info = privateVars.get(this);
    info.state = !info.state;
    privateVars.set(this, info);
  }

  test() {
    let info = privateVars.get(this);
    alert("state is " + privateVars.get(this).state);
  }
}

export default Light;
