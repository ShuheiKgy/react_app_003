const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options:  {
    //                     presets: ['env', 'react']
    //                 }
    //             },
    //             exclude: /node_modules/
    //         }
    //     ]
    // },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     extractComments: true
        // }),
        new HtmlWebpackPlugin({
            title: 'Plugin generate page',
            template: 'src/root.html'
        })
    ]
}