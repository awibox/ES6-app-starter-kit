var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var settings = {
    app: './app/app',
    sourceDir: '/source',
    publicDir: '/public',
    bundleApp: 'js/main.js',
    bundleCSS: 'css/styles.css',
    chunks: 'js/chunks/[name].js',
    publicPath: '/bem-builder-webpack/public/'
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
    resolve: {
        modulesDirectories: ['node_modules']
    },
    devtool: 'inline-source-map',
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
                loaders: [
                    'url?name=img/[path][name].[ext]&limit=4096',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
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
