"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var privateVars = new WeakMap();

var Light = function () {
  function Light(state, brightness) {
    _classCallCheck(this, Light);

    // Check that inputs are the right types
    brightness = this.checkBrightnessFormat(brightness);
    state = this.checkStateFormat(state);

    // Create info object
    var info = { "state": state, "brightness": brightness, "createdAt": Date.now() };

    // Save info into privateVars
    privateVars.set(this, info);
  }

  _createClass(Light, [{
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
      info.brightness = checkBrightnessFormat(state);
      privateVars.set(this, info);
    }
  }, {
    key: "getBrightness",
    value: function getBrightness() {
      var info = privateVars.get(this);
      return info.brightness;
    }
  }, {
    key: "lightSwitch",
    value: function lightSwitch() {
      var info = privateVars.get(this);
      info.state = !info.state;
      privateVars.set(this, info);
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

exports.default = Light;