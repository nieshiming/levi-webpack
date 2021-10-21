#### webpack5


#### swc
```javascript
  /**
    swc1.x版本遇到问题

    1、不支持type checker
    2、不支持antd的按需加载组件<babel-plugin-import>（计划2.0支持），会造成组件样式丢失。需要在appjs导入全部css文件，进而打包bundle过大


    优势
    1、配置简单
    2、相对babel提升10%编译速度
  */ 
```