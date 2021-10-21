const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { BABEL_ENV } = process.env
const extensions = ['.js', '.ts', '.jsx', '.tsx']
const resolvePath = (src) => path.resolve(__dirname, src)

module.exports = {
  extensions,
  resolvePath,
  base: {
    context: path.resolve(__dirname),
    entry: {
      app: '../src/index.tsx',
    },
    output: {
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      path: resolvePath('../dist'),
    },
    resolve: {
      extensions,
      alias: {
        '@': resolvePath('../src'),
      },
      modules: [resolvePath('../src/'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            BABEL_ENV === 'production'
              ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: { publicPath: './' },
                }
              : 'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: { javascriptEnabled: true },
              },
            },
          ],
          sideEffects: true,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contentHash:6].[ext]',
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(j|t)sx?$/i,
          use: [
            'thread-loader',
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            // 'swc-loader',
            'eslint-loader',
          ],
          exclude: /node_modules/,
          include: resolvePath('../src'),
        },
      ],
    },
    plugins: [
      new WebpackBar({
        name: 'levi-Webpack',
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        title: 'levi',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        template: resolvePath('../public/index.html'),
      }),
    ],
  },
}
