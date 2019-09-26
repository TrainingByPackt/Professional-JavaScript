const express = require('express');
const router = express.Router();

// Function to run if user sends a GET request
router.get('/', function(req, res, next) {
  let info =    {
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
  res.json(info);
});

// Export route so it is available to import
module.exports = router;
