var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
