const merge = require('webpack-merge');
const common = require('./webpack.common');

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
  plugins: []
});
