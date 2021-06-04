const os = require('os');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const WebpackBar = require('webpackbar');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const source = path.resolve(__dirname, '..', 'src');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:6].bundle.js',
    chunkFilename: 'js/[name].[hash:6].chunk.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 2 // 2kb
            }
          }
        ],
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
      context: path.resolve(__dirname, '../dist'),
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
          loader: path.resolve(__dirname, './loader/levi.js'),
          options: {
            message: 'levis'
          }
        },
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
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false,
      reloadAll: true,
      hmr: process.env.NODE_ENV === 'development'
    })
  ]
};
