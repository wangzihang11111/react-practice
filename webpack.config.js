var webpack = require('webpack');
var __dirname = ''
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime',["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.(scss|css)$/,
            loaders: ['style-loader','css-loader','sass-loader']
        }]
    }
};




