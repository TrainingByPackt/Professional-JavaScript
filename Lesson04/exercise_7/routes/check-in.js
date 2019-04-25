const express = require('express');
const jwt = require('jwt-simple');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

// import our config file and get the secret value
const config = require('../config');
const secret = config.secret;

router.post('/', [
    check('name').isString()
  ],
  (req, res) => {

    // If errors return 422, client didn't provide required values
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Otherwise use the server secret to encode the user's request as a JWT
    let info = {};
    info.token = jwt.encode(req.body, secret);
    res.json(info);
});

// Export route so it is available to import
module.exports = router;
