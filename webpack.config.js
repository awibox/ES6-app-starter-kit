'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname + "/source",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "js/bundle.js"
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
