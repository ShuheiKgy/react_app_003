const path = require('path');

const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    entry: [
        'babel-polyfill',
        // 'react-hot-loader/patch',
        // './src/index.js',
        './src/browser.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['env', {modules: false}],
                        'react', 'es2015'
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: ["style-loader", "css-loader?modules"]
            }
        ]
    },
    // plugins: [
    //     // new webpack.optimize.UglifyJsPlugin({
    //     //     extractComments: true
    //     // }),
    //     // new HtmlWebpackPlugin({
    //     //     title: 'Plugin generate page',
    //     //     template: 'src/root.html'
    //     // }),
    //     // new webpack.NamedModulesPlugin(),
    //     // new webpack.HotModuleReplacementPlugin(),
    // ]
}