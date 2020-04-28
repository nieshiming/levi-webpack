const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const apiMocker = require('mocker-api');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    clientLogLevel: 'warning' /** 关闭控制台赘余console */,
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
    }),
    new NotifierPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: ['application is running here http://localhost:8000'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || ''
        });
      }
    })
  ]
});
