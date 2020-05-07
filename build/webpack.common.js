const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const AutoDllPlugin = require('autodll-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const os = require('os');
const webpack = require('webpack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const source = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:6].bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  stats: {
    assets: true,
    modules: false,
    chunks: false,
    children: false,
    chunkModules: false,
    hash: true,
    colors: true,
    publicPath: true,
    errors: true
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
        test: /\.(js|ts)x?$/,
        exclude: '/node_modules/',
        loader: ['happypack/loader?id=js'],
        include: [source]
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
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
    new AutoDllPlugin({
      inject: true,
      filename: '[name].dll.js',
      path: 'static/dll',
      context: __dirname,
      entry: {
        vendor: [
          'react',
          'react-dom',
          'react-router-config',
          'react-router-dom',
          'qs',
          'styled-components',
          'axios'
        ]
      }
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          loader: 'eslint-loader'
        }
      ]
    })
  ]
};
