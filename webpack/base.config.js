const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['babel-polyfill'],  // 提供promise加持
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {                    // 用于轉換es6,依赖@babel/core @babel/preset-env
        loader: 'babel-loader', // 配置见https://www.npmjs.com/package/babel-loader
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-syntax-dynamic-import'],   // 可以使用动态import懒加载
        },
      },
    }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack入门',
      template: 'app/index.html',   // 采用本地的template（默认会生成）
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',  // async異步，all同步異步都分割
    },
    usedExports: true,
  },
}