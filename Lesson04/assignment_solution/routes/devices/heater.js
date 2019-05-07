const express = require('express');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

// Function to run if user sends a PUT request
router.put(['/', '/actions/fade'], [
    check('mode').isNumeric().isLength({ min: 0, max: 1 }),
    check('temperature').isNumeric()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let temperature = req.body.temperature;
    let mode = req.body.mode;

    let message = `success: temperature set to ${temperature} mode is ${mode}`;
    res.json({"message": message});
});

// Export route so it is available to import
module.exports = router;
