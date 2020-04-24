const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const os = require('os');
const chalk = require('chalk');
const webpack = require('webpack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      enums: path.resolve(__dirname, '../src/enum')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include: /node_modules/
      },
      {
        test: /.(png|jpg|gif)$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: '/node_modules/',
        loader: ['happypack/loader?id=js']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: true
    }),
    new HtmlWebpackPlugin({
      title: 'levis',
      template: path.resolve(__dirname, '../src/index.html'),
      hash: true,
      favicon: path.resolve(__dirname, '../src/assets/image/favicon.png'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HappyPack({
      id: 'js',
      threads: happyThreadPool.size,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    })
  ]
};
