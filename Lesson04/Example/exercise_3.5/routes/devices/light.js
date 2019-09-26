const express = require('express');
const router = express.Router();

// Light structure is imported at the top of the file
const lightStructure = require('./lightStructure.js');

// Create four routes each displaying a different aspect of the JSON object
router.get('/', function(req, res, next) {
  let info = lightStructure;
  res.json(info);
});

router.get('/properties', function(req, res, next) {
  let info = lightStructure.properties;
  res.json(info);
});

router.get('/model', function(req, res, next) {
  let info = lightStructure.model;
  res.json(info);
});

router.get('/actions', function(req, res, next) {
  let info = lightStructure.actions;
  res.json(info);
});

// Export route so it is available to import
module.exports = router;
