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
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }

};
