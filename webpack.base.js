const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// 1) CleanWebpackPlugin
// 2) copyWebpackPlugin
// 3) bannerPlugin 内置
module.exports = {
    mode: 'production',
    // 多入口
    entry: {
        home: './src/index.js',
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DEV: "'dev'"
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(), // 清除
        new CopyWebpackPlugin([ //拷贝
            {from: './static', to: './static'}
        ]),
        new webpack.BannerPlugin('make 2019 By Yuyd') // 版权声明

    ],
    resolve: { // 解析 第三方 common
        modules: [path.resolve('node_modules')],
        extensions: ['.js', '.css', '.json', '.vue'], //配备
        alias: { //别名
            '@': path.resolve(__dirname, 'src/') 
        }
    }
}