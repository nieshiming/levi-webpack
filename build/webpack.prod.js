const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: []
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
    errors: true,
    warnings: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // new BundleAnalyzerPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g, //注意不要写成 /\.css$/g
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true },
        safe: true,
        autoprefixer: false
      },
      canPrint: true
    })
  ]
});
