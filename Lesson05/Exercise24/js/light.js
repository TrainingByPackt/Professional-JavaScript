class Light {
  constructor(state, brightness) {
    // Check that inputs are the right types
    this.state = this.checkStateFormat(state);
    this.brightness = this.checkBrightnessFormat(brightness);
    this.createdAt = Date.now();
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

  toggle() {
    this.state = !this.state;
  }

  test() {
    alert("state is " + this.state);
  }
}

export default Light;
