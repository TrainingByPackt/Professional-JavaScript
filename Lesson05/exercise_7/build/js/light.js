"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var privateVars = new WeakMap();
var onImage = "images/bulb_on.png";
var offImage = "images/bulb_off.png";

var Light =
/*#__PURE__*/
function () {
  function Light(state, brightness) {
    _classCallCheck(this, Light);

    // Parse values
    state = this.checkStateFormat(state);
    brightness = this.checkBrightnessFormat(brightness); // Create info object

    var info = {
      "state": state,
      "brightness": brightness,
      "createdAt": Date.now()
    }; // Create html element

    var div = document.createElement("div");
    var img = document.createElement("img");
    var slider = document.createElement("input"); // Save reference to element as private variable

    info.div = div;
    info.img = img;
    info.slider = slider;
    this.createDiv(div, img, slider, state, brightness); // Save info into privateVars

    privateVars.set(this, info);
  }

  _createClass(Light, [{
    key: "createDiv",
    value: function createDiv(div, img, slider, state, brightness) {
      // make it so we can access this in lower scope
      var that = this; // modify html

      div.style.width = "200px";
      div.style["float"] = "left";

      img.onclick = function () {
        that.toggle();
      };

      img.width = "200";
      img.src = state ? onImage : offImage;
      img.style.opacity = brightness;

      slider.onchange = function () {
        that.setBrightness(this.value);
      };

      slider.type = "range";
      slider.min = 0.01;
      slider.max = 1;
      slider.step = 0.01;
      slider.value = brightness;
      div.appendChild(img);
      div.appendChild(slider); // append to document

      document.body.appendChild(div);
    }
  }, {
    key: "checkStateFormat",
    value: function checkStateFormat(state) {
      // state must be true or false
      if (state) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "checkBrightnessFormat",
    value: function checkBrightnessFormat(brightness) {
      // brightness must be a number between 0.01 and 1
      if (isNaN(brightness)) {
        brightness = 1;
      } else if (brightness > 1) {
        brightness = 1;
      } else if (brightness < 0.01) {
        brightness = 0.01;
      }

      return brightness;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var info = privateVars.get(this);
      info.state = checkStateFormat(state);
      privateVars.set(this, info);
      info.img.src = info.state ? onImage : offImage;
    }
  }, {
    key: "getState",
    value: function getState() {
      var info = privateVars.get(this);
      return info.state;
    }
  }, {
    key: "setBrightness",
    value: function setBrightness(brightness) {
      var info = privateVars.get(this);
      info.brightness = this.checkBrightnessFormat(brightness);
      privateVars.set(this, info);
      info.img.style.opacity = brightness;
    }
  }, {
    key: "getBrightness",
    value: function getBrightness() {
      var info = privateVars.get(this);
      return info.brightness;
    }
  }, {
    key: "getImg",
    value: function getImg() {
      var info = privateVars.get(this);
      return info.img;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var info = privateVars.get(this);
      info.state = !info.state;
      privateVars.set(this, info);
      info.img.src = info.state ? onImage : offImage;
    }
  }, {
    key: "test",
    value: function test() {
      var info = privateVars.get(this);
      alert("state is " + privateVars.get(this).state);
    }
  }]);

  return Light;
}();

var _default = Light;
exports["default"] = _default;