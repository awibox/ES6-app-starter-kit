var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

var settings = {
    app: './app/app',
    sourceDir: '/source',
    publicDir: '/public',
    bundleApp: 'js/main.js',
    bundleCSS: 'css/styles.css',
    chunks: 'js/chunks/[name].js',
    publicPath: NODE_ENV == 'development' ? '/public/' : '/webpack/public/'
};

module.exports = {
    context: __dirname + settings.sourceDir,
    entry: settings.app,
    output: {
        path: __dirname + settings.publicDir,
        publicPath: settings.publicPath,
        filename: settings.bundleApp,
        chunkFilename: settings.chunks
    },
    watch: NODE_ENV == 'development',
    resolve: {
        modulesDirectories: ['node_modules']
    },
    devtool: NODE_ENV == 'development' ? "inline-source-map" : null,
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
                    'css',
                    'autoprefixer?browsers=last 15 versions'
                )
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!' +
                    'autoprefixer?browsers=last 15 versions!' +
                    'less?sourceMap'
                )
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test:   /\.(png|jpg|svg)$/,
                loaders: NODE_ENV == 'development' ? ['url?name=img/[path][name].[ext]&limit=4096'] : ['url?name=img/[path][name].[ext]&limit=4096', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            },
            {
                test:   /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?name=fonts/[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(settings.bundleCSS),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}