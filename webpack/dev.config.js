const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

/*  
  学习webpack官网：https://webpack.docschina.org/concepts/
  改过这些配置后要重新npm run start
*/
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',  // 开发推荐这个
  entry: {
    app: path.resolve(__dirname, '../app/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    port: '3000',
    open: true,
  },
}

module.exports = webpackMerge(baseConfig, devConfig)