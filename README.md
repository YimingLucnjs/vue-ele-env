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

### 框架设计思想
配置灵活但是繁琐
约定省事但是束缚
框架设计的初衷是为了简化我们的开发，我会再两者之间追求一个平衡

### 目录介绍

- **src** 源代码
    - **components** 组件库
        - ~~各自的组件库~~
            - 全局组件名称

关于组件的规范 
1.文件夹名称大驼峰命名
2.文件夹内文件统一为index.vue/ index.scss/ index.js
3.使用plop命令新建组件
4.**全局组件**：**大于等于两个**以上页面使用的模块需要抽析于components > componentsnamecomponentsname

### 组件测试
关于测试各自组件的地址如下
- src
  - components
  - router
    - testrouter
      - luyiming.js
      - luyun.js
      - qiuliang.js
  - views
    - testcom
      - luyiming.vue
      - luyun.vue
      - qiuliang.vue

### 命令介绍

```bash
# 新建命令 然后按照命令行提示操作
npm run new
yarn new
...

```

### ESLint 规则

1.[ESLint规则介绍官网](https://cn.eslint.org/docs/rules/)
1.[ESLint介绍简书](https://www.jianshu.com/p/06f942d11d24)


## 2019.12.27 前的工作安排
### cesium-demo整理
1. 统一整理cesium的demo（12.20）
### 转正答辩（12.24）
1. 整理资料（12.23 10:00前）
### nodejs中间层
1. nodejs中间层方案文档（12.27）
2. nodejs中间层代理转发演示（12.27）
3. nodejs中间层vue-ssr渲染演示（12.27）
4. nodejs中间层redis缓存设计（12.27）
5. nodejs中间层接入前端日志收集演示（12.27）
### npm
1. npm权限与权限管理可视化页面（12.27）
### other
1. 框架动态生成路由的合理设计（12.17）
2. app消息推送功能对接（12.18）