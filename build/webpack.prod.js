const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.base')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const { ESBuildMinifyPlugin } = require('esbuild-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { SERVER_ENV } = process.env

module.exports = merge(config.base, {
  mode: 'production',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]_[chunkhash:8].js',
    chunkFilename: 'js/[name]_[chunkhash:8].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 10240,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        vendors: {
          priority: 10,
          chunks: 'all',
          name: 'vendors',
          test: /react|react-dom|react-router-dom|react-router-config|core-js-pure/,
        },
        common: {
          priority: 8,
          minChunks: 5,
          chunks: 'all',
          name: 'common',
        },
        styles: {
          priority: 11,
          chunks: 'all',
          enforce: true,
          name: 'styles',
          test: /\.less$/,
        },
      },
    },
  },
  stats: {
    chunks: false,
    errors: true,
    assets: true,
    builtAt: true,
    cached: true,
    modules: false,
    children: false,
    chunkGroups: false,
    chunkModules: true,
    chunkOrigins: false,
    cachedAssets: false,
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
    /**
     * @description 如果要输出文件夹， filename和chunkfilename都必须加文件夹前缀
     *
     * filename: 入口文件css
     * chunkFileName: 按需加载css
     * */
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'css/[contenthash:8].css',
      chunkFilename: 'css/[contenthash:8].css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
})
