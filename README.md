# vue-pages

> 在tonyfree的多页面应用搭建基础上完成，host切换用`location.herf`判断，取消打包时生成的map文件

## [教程地址](https://github.com/tonyfree/blog/issues/1)

*与2017.9.12完成，随着时间推移 各个库的用法可能会有变动 移动端适配方案暂时用的固定屏幕宽度的方式*

改进：
通过在project.config.js设置当前开发页面(devPage)，从而在运行`npm run dev`命令后可以实时打开对应的页面开始开发
原有教程中对于模块自动加载配置有问题，因此根据webpack最新文档对router项自动注入使用了新的写法。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- 尝试针对不同的环境用不同的接口 联调之前有无模拟接口-->
