const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    }, {
      test: /\.(png|jpg|gif|svg)/,
      loader: 'url-loader?limit=8192',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'react_build',
      template: 'app/index.html',   // 采用本地的template（默认会生成）
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}