const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  let info = {};
  info.message = "Welcome home! Our first endpoint.";
  res.json(info);
});

// Export route so it is available to import
module.exports = router;
