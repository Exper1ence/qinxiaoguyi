/**
 * Created by Exper1ence on 2016/12/26.
 */
const Path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = {
    context: Path.resolve(__dirname, 'app/client'),
    bundle: Path.resolve(__dirname, 'app/public'),
    publicPath: 'http://localhost:3000/',
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = {
    context: PATHS.context,
    entry: './index.js',
    output: {
        path: PATHS.bundle,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
        }),
        new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true}),
    ],
    stats: "minimal"
};
const c = process.env.npm_lifecycle_event;
if (c == 'b') {
    config = merge(config, {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
        ]
    });
}
else {
    if (c == 's') {
        config = merge(config, {
            devtool: 'source-map"',
        });
    }
    config = merge(config, {
        // devServer: {
        //     contentBase: PATHS.bundle,
        //     compress: true,
        //     port: 3000,
        //     watchOptions: {
        //         poll: true
        //     },
        //     clientLogLevel: "none",
        //     noInfo: true,
        //     historyApiFallback:{
        //         index:'index.html'
        //     },
        // },
        performance: {
            hints: false
        }
    })
}
module.exports = config;