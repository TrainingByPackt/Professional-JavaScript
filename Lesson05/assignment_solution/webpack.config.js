const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./build/js/viewer.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }
};
