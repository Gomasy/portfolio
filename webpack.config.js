const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],
            },
            {
                test: /\.(woff2?|ttf|eot|svg|ico|jpg)(\?v=[\d.]+|\?[\s\S]+)?$/,
                use: [ 'file-loader?name=[name].[ext]' ],
            },
        ],
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000,
    },
    plugins: [
        new CleanWebpackPlugin,
        new (require('html-webpack-plugin'))({
            template: './src/contents/index.html',
            title: "Gomasy's portfolio",
            hash: true,
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        useLocalIp: true,
    },
}
