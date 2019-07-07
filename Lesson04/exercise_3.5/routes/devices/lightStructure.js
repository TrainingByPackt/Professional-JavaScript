const light = {
  "model": {
    "name": "light",
    "vendor": "Packt"
  },
    "properties": {
      "on": {
        "@type": "OnOffProperty",
        "type": "boolean",
        "description": "Whether the lamp is turned on",
        "href": "devices/light/properties/on"
      },
      "brightness" : {
        "@type": "BrightnessProperty",
        "type": "integer",
        "description": "The level of light from 0-100",
        "minimum" : 0,
        "maximum" : 100,
        "href": "/devices/light/properties/brightness"
      }
    },
   "actions": {
    "fade": {
      "title": "Fade Light",
      "description": "Dim light brightness to a specified level",
      "input": {
        "type": "object",
        "properties": {
          "level": {
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "duration": {
            "type": "integer",
            "minimum": 0,
            "unit": "milliseconds"
          }
        }
      },
      "links": [
        {
          "href": "/devices/light/actions/fade"
        }
      ]
    }
  }
}

module.exports = light;
