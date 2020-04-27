const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const apiMocker = require('mocker-api');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    clientLogLevel: 'none' /** 关闭控制台赘余console */,
    before(app) {
      apiMocker(app, path.resolve(__dirname, '../mock/index.js'), {});
    },
    proxy: {
      /** 设置代理 */
      '/douban': {
        target: 'https://douban.uieee.com/',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/douban': '' }
      }
    }
  },
  module: {
    rules: []
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      memoryLimit: 1024 * 2,
      tsconfig: path.resolve(__dirname, '../tsconfig.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
});
