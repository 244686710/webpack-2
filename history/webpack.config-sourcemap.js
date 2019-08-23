const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    // 源码映射 1） 会单独生产一个sourcemap文件，出错了 会标记 当前报错的列和行帮助代码调试
    // 2) 不会产生单独的文件 但是可以显示行和列 eval-source-map
    // 3) cheap-module-source-map 不会产生列表，但会产生文件
    // 4) eval-cheap-module-source-map
    devtool: 'source-map', // 增加映射条件
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
    
        }),

    ]
}