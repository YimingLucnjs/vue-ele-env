### vue-pro
基于vue的前端架构
<p align="left">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
</p>

### 目录介绍

- **src** 源代码
    - **components** 组件库
        - ~~各自的组件库~~
            - **global** 全局组件
            - **part** 局部组件

关于组件的规范 
1.文件夹名称大驼峰命名
2.文件夹内文件统一为index.vue/ index.scss/ index.js
3.使用plop命令新建组件
4.**全局组件**：**大于等于两个**以上页面使用的模块需要抽析于components > global > componentsname
5.**局部组件**：只有某个页面使用的组件，为了避免单文件过大,可以选择性写入components > part > viewsname > componentsname

### ESLint 规则

1.[ESLint规则介绍官网](https://cn.eslint.org/docs/rules/)
1.[ESLint介绍简书](https://www.jianshu.com/p/06f942d11d24)
