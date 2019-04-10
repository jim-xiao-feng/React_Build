const path = require('path')

module.exports = {
  entry: {
    vendor: ['babel-polyfill'],  // 提供promise加持
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {                    // 用于轉換es6,依赖@babel/core @babel/preset-env
        loader: 'babel-loader', // 配置见https://www.npmjs.com/package/babel-loader
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
}