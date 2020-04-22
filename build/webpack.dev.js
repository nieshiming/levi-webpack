const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    clientLogLevel: 'none' /** 关闭控制台赘余console */
  },
  module: {
    rules: []
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      memoryLimit: 1024 * 2,
      tsconfig: path.resolve(__dirname, '../tsconfig.json')
    })
  ]
});
