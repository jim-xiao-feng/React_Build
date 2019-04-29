const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const prodConfig = {
  entry: {
    app: path.resolve(__dirname, '../app/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',    // 緩存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack入门',
      template: 'app/index.html',   // 采用本地的template（默认会生成）
      inject: 'body',
      filename: 'index.html',
    }),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
    }),
  ],
}

module.exports = webpackMerge(baseConfig, prodConfig)