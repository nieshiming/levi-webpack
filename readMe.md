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

#### react

- react / react-dom
- react-hot-loader/babel (热加载)

#### babel

#### 优化
