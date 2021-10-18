module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react', '@babel/typescript'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: 3, proposals: true },
      },
    ],
    [
      'import',
      {
        style: true,
        libraryName: 'antd',
        libraryDirectory: 'es',
      },
    ],
  ],
  env: {
    development: {
      plugins: ['react-refresh/babel'],
    },
  },
}
