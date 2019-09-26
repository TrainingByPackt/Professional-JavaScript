const express = require('express');
const app = express();

// Import path and file system libraries for importing our route files
const path = require('path');
const fs = require('fs');

// Import library for handling HTTP errors
const createError = require('http-errors');


// Tell express to enable url encoding
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Import our index route
let lock = require('./routes/lock');
let checkIn = require('./routes/check-in');

app.use('/check-in', checkIn);
app.use('/lock', lock);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.json(createError(404));
});

// Start our application on port 3000
app.listen(3000, () => console.log('API running on port 3000'));

