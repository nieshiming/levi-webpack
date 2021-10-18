require('dotenv').config()
const path = require('path')
const chalk = require('chalk')
const IP = require('ip').address()
const webpack = require('webpack')
const config = require('./webpack.base')
const notifier = require('node-notifier')
const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const { SERVER_ENV, PORT, HOST } = process.env

module.exports = merge(config.base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: true,
  devServer: {
    host: HOST,
    port: PORT,
    hot: true,
    quiet: true,
    compress: true,
    historyApiFallback: true,
    contentBase: config.resolvePath('../dist'),
    stats: 'minimal',
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        SERVER_ENV,
      }),
    }),
    new ESLintPlugin({
      threads: 4,
      extensions: config.extensions,
      exclude: ['node_modules'],
      context: config.resolvePath('../src'),
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You can view web-page in the browser \n
            - Local: running here ${chalk.blue(`http://localhost:${PORT}`)} \n
            - Newwork: running here ${chalk.blue(`http://${IP}:${PORT}`)}
          `,
        ],
        notes: ['Some additionnal notes to be displayed unpon successful compilation'],
      },
      clearConsole: true,
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return
        }
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
        })
      },
    }),
  ],
})
