let privateVars = new WeakMap();
let onImage = "images/bulb_on.png";
let offImage = "images/bulb_off.png";

class Light {
  constructor(state, brightness) {
    // Parse values
    state = this.checkStateFormat(state);
    brightness = this.checkBrightnessFormat(brightness);

    // Create info object
    let info = {"state": state, "brightness": brightness, "createdAt": Date.now()};

    // Create html element
    let div = document.createElement("div");
    let img = document.createElement("img");
    let slider = document.createElement("input");

    // Save reference to element as private variable
    info.div = div;
    info.img = img;
    info.slider = slider;

    this.createDiv(div, img, slider, state, brightness);

    // Save info into privateVars
    privateVars.set(this, info);
  }

  createDiv(div, img, slider, state, brightness) {
    // make it so we can access this in lower scope
    let that = this;

    // modify html
    div.style.width = "200px";
    div.style.float = "left";
    img.onclick = function () { that.toggle() };
    img.width = "200";
    img.src = state ? onImage : offImage;
    img.style.opacity = brightness;
    slider.onchange = function () { that.setBrightness(this.value) };
    slider.type = "range";
    slider.min = 0.01;
    slider.max = 1;
    slider.step = 0.01;
    slider.value = brightness;
    div.appendChild(img);
    div.appendChild(slider);

    // append to document
    document.body.appendChild(div);
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
    info.img.src = info.state ? onImage : offImage;
  }

  getState() {                                                                                                                                         
    let info = privateVars.get(this);                                                                                                                  
    return info.state;                                                                                                                                 
  }

  setBrightness(brightness) {
    let info = privateVars.get(this);
    info.brightness = this.checkBrightnessFormat(brightness);
    privateVars.set(this, info);
    info.img.style.opacity = brightness;
  }

  getBrightness() {
    let info = privateVars.get(this);
    return info.brightness;
  }

  getImg() {                                                                                                                                         
    let info = privateVars.get(this);                                                                                                                  
    return info.img;                                                                                                                                 
  }

  toggle() {
    let info = privateVars.get(this);
    info.state = !info.state;
    privateVars.set(this, info);
    info.img.src = info.state ? onImage : offImage;
  }

  test() {
    let info = privateVars.get(this);
    alert("state is " + privateVars.get(this).state);
  }
}

export default Light;
