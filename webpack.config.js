'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname + "/source",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "js/bundle.js"
    },
    resolve: {
        alias: {
            jquery: "./dist/jquery.js"
        }
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
