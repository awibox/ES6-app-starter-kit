'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + "/source",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
};
