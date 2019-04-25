const express = require('express');
const app = express();

// Import path and file system libraries for importing our route files
const path = require('path');
const fs = require('fs');

// Import library for handling HTTP errors
const createError = require('http-errors');

// Import library for working with JWT tokens
const jwt = require('jwt-simple');

// import our config file and get the secret value
const config = require('./config');
const secret = config.secret;

// Import MongoDb driver
const MongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://localhost:27017/";

// Check if the requesting client has checked in
function isCheckedIn(req, res, next) {
  // Check that authorization header was sent
  if (req.headers.authorization) {
    // Get token from "Bearer: Token" string
    let token = req.headers.authorization.split(" ")[1];
    // Try decoding the client's JWT using the server secret
    try {
      req._guest = jwt.decode(token, secret);
    } catch {
      res.status(403).json({ error: 'Token is not valid.' });
    }
    // If the decoded object has a name protected route can be used
    if (req._guest.name) return next();
  }
  // If no authorization header or guest has no name return a 403 error
  res.status(403).json({ error: 'Please check-in to recieve a token.' });
}

// Record all events and requests to the server in database here
var dbLogger = function (req, res, next) {
  // Create an object to gather data we want to save
  let info = {};
  // Add route path of request to object
  info.path = req.path;
  // Add timestamp to info object
  info.timestamp = Date.now();
  // Add authorization header so we can see associated user
  info.token = req.headers.authorization;
  // Add the method and body of the request
  info.method = req.method;
  info.body = req.body;
  console.log(info);
  // Open a database connection
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, function(err, db) {
    if (err) {
      console.log(err);
      return;
    }
    var dbo = db.db("mydb");
    // Insert our event info object into the events collection
    dbo.collection("events").insertOne(info, function(err, res) {
      if (err) console.log(err);
      db.close();
    });
  });
  // Middleware function done running, move to the next function
  next();
}
// These two lines from an earlier step need to be run before we use `dbLogger`
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Tell our app to user the database logger for all requests
app.use(dbLogger);

// Import our index route
let index = require('./routes/index');
let checkIn = require('./routes/check-in');
let light = require('./routes/devices/light');

// Tell Express to use our index module for root URL
app.use('/', index);
app.use('/check-in', checkIn);
app.use('/devices/light', light);
app.use('/devices/restricted-light', isCheckedIn, light);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.json(createError(404));
});

// Start our application on port 3000
app.listen(3000, () => console.log('API running on port 3000'));
