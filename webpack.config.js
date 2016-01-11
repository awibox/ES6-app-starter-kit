var ExtractTextPlugin = require('extract-text-webpack-plugin');

var settings = {
    app: './app/app',
    sourceDir: '/source',
    publicDir: '/public',
    bundleApp: 'js/bundle.js',
    bundleCSS: 'css/styles.css'
};

module.exports = {
    context: __dirname + settings.sourceDir,
    entry: settings.app,
    output: {
        path: __dirname + settings.publicDir,
        filename: settings.bundleApp
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
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin(settings.bundleCSS)
    ]
};
