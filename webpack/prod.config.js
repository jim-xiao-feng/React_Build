const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const prodConfig = {
  entry: {
    app: path.resolve(__dirname, '../app/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
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

module.exports = prodConfig