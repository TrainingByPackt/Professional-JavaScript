const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

// Import path and file system libraries for importing our route files
const path = require('path');
const fs = require('fs');

// Import library for handling HTTP errors
const createError = require('http-errors');

// Import library for working with JWT tokens
const jwt = require('jwt-simple');

// import our config file and get the secret value
const config = require('./../config');
const secret = config.secret;

// Create an array to keep track of valid passcodes
let passCodes = [];

router.get(['/code'], [
    check('name').isString().isAlphanumeric().exists()
  ],
  (req, res) => {
    let codeObj = {};
    codeObj.guest = req.body.name;
    // Check that authorization header was sent
    if (req.headers.authorization) {
      let token = req.headers.authorization.split(" ")[1];
      try {
        req._guest = jwt.decode(token, secret);
      } catch {
        res.status(403).json({ error: 'Token is not valid.' });
      }
      // If the decoded object guest name property
      if (req._guest.name) {
        codeObj.creator = req._guest.name;
      }
      let code = Math.floor(Math.random() * 10000);
      code = ("000"+code).slice(-4);
      codeObj.code = code;
      passCodes.push(codeObj);
      let message = "One-time code: " + code + ", created by " + codeObj.creator + " for " + codeObj.guest;
      res.json({
                "code": code, 
                "message": message
              });
      return;
    }

    // If no authorization header or guest has no name return a 403 error
    res.status(403).json({ error: 'Please check-in to recieve a token.' });
});

router.post(['/open'], [
    check('code').isLength({ min: 4, max: 4 })
  ],
  (req, res) => {
    let code = passCodes.findIndex(obj => {
      return obj.code === req.body.code;
    });
    if(code !== -1) {
      passCodes.splice(code, 1);
      res.json({ message: 'Pass code is valid, door opened.' });
    } else {
      res.status(403).json({ error: 'Pass code is not valid.' });
    }
});

// Export route so it is available to import
module.exports = router;
