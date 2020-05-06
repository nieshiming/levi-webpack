const webpack = require('webpack');
const path = require('path');

module.exports = {
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
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../static/dll'),
    library: '[name]_dll_[hash]'
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      name: '[name]_dll_[hash]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.resolve(__dirname, '../static/dll', '[name].manifest.json')
    })
  ]
};
