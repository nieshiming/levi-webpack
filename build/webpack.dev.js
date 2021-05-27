const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const apiMocker = require('mocker-api');
const notifier = require('node-notifier');
const chalk = require('chalk');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8000,
    hot: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true,
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
      },
      '/api': {
        target: 'http://127.0.0.1:8888',
        pathRewrite: {
          '^/api': ''
        }
      }
      // '/nodejs': {
      //   target: 'http://10.180.21.95:8081',
      //   pathRewrite: {
      //     '^/nodejs': ''
      //   }
      // }
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
        messages: [`application is running here ${chalk.blue('http://localhost:8000')}`],
        notes: [`NODE_ENV: ${process.env.NODE_ENV}`]
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
    //  new BundleAnalyzerPlugin()
  ]
});
