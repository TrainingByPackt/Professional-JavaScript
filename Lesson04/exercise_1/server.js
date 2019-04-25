const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let info = {};
  info.message = "Welcome home! Our first endpoint.";
  res.json(info);
});

// Start our application on port 3000
app.listen(3000, () => console.log('API running on port 3000'));
