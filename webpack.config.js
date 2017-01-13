/**
 * Created by Exper1ence on 2016/12/26.
 */
const Path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Fs = require('fs');

const PATHS = {
    app: Path.resolve(__dirname, 'app/client/index.js'),
    build: Path.resolve(__dirname, 'app/public'),
    clientEnv: Path.resolve(__dirname, './app/client/ENV.js'),
    serverEnv: Path.resolve(__dirname, './ENV.js'),
};

const common = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000',
            },
        ]
    },
};
let config;

Fs.writeFileSync(PATHS.clientEnv,
    `export default {
        debug: true,
     };`);
Fs.writeFileSync(PATHS.serverEnv,
    `module.exports = {
        debug: true,
     };`);
switch (process.env.npm_lifecycle_event) {
    case 'b':
        config = merge(common, {
            // devtool: 'source-map'
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
        Fs.writeFileSync(PATHS.clientEnv,
            `export default {
                debug: false,
            };`);
        Fs.writeFileSync(PATHS.serverEnv,
            `module.exports = {
                debug: false,
            };`);
        break;
    case 's':
        config = merge(common, {
            devtool: '#inline-source-map',
            // devtool: 'cheap-eval-source-map',
            debug: true,
        });
        break;
    default:
        config = merge(common, {});
}
module.exports = config;