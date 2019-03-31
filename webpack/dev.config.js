const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*  
  学习webpack官网：https://webpack.docschina.org/concepts/
  改过这些配置后要重新npm run start
*/
const devConfig = {
  entry: {
    app: path.resolve(__dirname, '../app/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack入门',
      template: 'app/index.html',   // 采用本地的template（默认会生成）
      inject: 'body',
      filename: 'index.html'
    })
  ]
}

module.exports = devConfig