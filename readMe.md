### :cow: levi-webapck

> webpack+react 全家桶， 在这里将记录 webpack 基本配置，从 0 搭建整个项目过程,包含 webpack 分包，优化，typescript，mock 服务... 后续不断完善不补充

#### :runner: 运行

```javascript
 yarn install
 yarn dev

 or

 npm install
 npm run dev
```

#### webpack

```
yarn add webpack webpack-cli   安装webpack4 指定包

webpack.config.js = {
    mnodule.exports = {
        entry: {},
        output:{},
        resolve: {},
        ...
        ...
        module: {
            rules:[]
        },
        plugins: []
    }
}

"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server  --config ./build/webpack.dev.js",
    "build:dev": "cross-env NODE_ENV=development webpack --config ./build/webpack.dev.js",
    "build:prod": "cross-env NODE_ENV=production webpack --config ./build/webpack.prod.js",
    "lint": "eslint --fix",
    "beauty": "prettier --write",
    "clean": "rm -rf ./node_modules/.cache"
},


webpack: 执行编译/打包命令(*)
webpack-dev-serber: 启动本地服务
--config ./build/webpack.dev.js： 指定webpack入口文件     不指定默认根目录的webpack.config.js
```

- [webpack-merge](https://www.npmjs.com/package/webpack-merge) merge 公共 webpack 配置
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) 生成模板 html
- [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin) 进度条插件
- [clean-webpack-plugin](https://www.npmjs.com/search?q=clean-webpack-plugin) 编译时删除文件，接受数组删除指定文件/文件夹
- [cross-env](https://juejin.im/post/5d78a11ee51d4561af16dd9f) 解决夸平台设置 NODE_ENV 报错
- css-loader
- style-loader
- eslint-loder
- babel-loder
- happppack

#### :santa: react

- react / react-dom / react-router
- [react-hot-loader/babel](https://www.npmjs.com/package/react-hot-loader) (热加载)

#### :dog: babel7

参考文章；

- [中文官网](https://www.babeljs.cn/docs/babel-preset-typescript)
- [不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)
- [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6)
- [core-js@3, babel 展望未来](https://juejin.im/post/5e355be0f265da3e491a53c5)
- [让 babel 帮你编译 typescript](https://github.com/frontend9/fe9-library/issues/23)
- [Webpack 转译 Typescript 现有方案](https://juejin.im/post/5e2690dce51d454d310fb4ef)

```
    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                    "browsers": ["> 1%", "not ie <= 8"]
                    }
                }
            ],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        "plugins": [
            "react-hot-loader/babel",
            ["@babel/plugin-transform-runtime", { "corejs": 3 }],
            ["@babel/plugin-proposal-decorators", { "legacy": true }] /** 装饰器 */,
            [
                "@babel/plugin-proposal-class-properties",
                { "loose": true }
            ]   /** 转换class  定义属性&&箭头函数*/,
            "@babel/plugin-syntax-dynamic-import",
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css"
                }
            ]
        ]
    }


    babel 预设 preset => 包含一系列的插件集合，未包含的到的可以plugin引入
    @babel/preset-react => 支持react， jsx语法
    @babel/preset-typescript => 转化tsx,ts 只 jsx，js ，无需引入ts-loader
```

### :anchor: eslint

#### :fire: 优化

- [happypack](https://www.npmjs.com/package/happypack) 启动多线程编译打包
- [style-components](https://www.npmjs.com/package/styled-components) 搭配 react 组件，妙用
- commit 提交规范 引入 husky + .prettier 规范 git commit, 编译先检查 eslint, 通过在在按照 prettier 配置格式化文件(**\* 只针对暂存区的文件进行校验 \*\***)
- 分包待补充...
