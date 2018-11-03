# 造一个vue的轮子

[![Build Status](https://travis-ci.org/silvia-YQY/VUE-gulu-Demo.svg?branch=master)](https://travis-ci.org/silvia-YQY/VUE-gulu-Demo)

## 介绍

## 开始使用

1. 添加CSS样式
    使用本框架前，请在CSS中开启border-box
    ```

    *,*::before,*::after{box-sizing:border-box;}
    ```

    IE8及以上浏览器都支持此样式。

    你还需要设置默认样色等变量（后期会改为SCSS变量）

    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-background: #fff;
        --botton-active-background: #eee;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
        --border-radius: 4px;
    }
    ```

    IE15及以上浏览器都支持此样式。

2. 安装gulu
    ```
    npm i -S gulu-vue-yqy
    ```
3. 引入

    ```
    import {Button,Icon} from 'gulu-vue-qyq'
    import ''
    export default {
        name:"app",
        components:{
            'g-button':Button,
            'g-icon':Icon
        }
    }
    ```

4. 引入SVG symbols
    ```
    <script src="//at.alicdn.com/t/font_867874_zaejb8l7vuq.js"></script>
    ```


1. 安装

WebStorm快捷键

1. shift+shift === 搜索快键键
    * VCS === version control sysytem
2. 设置默认端口
    * setting --->  搜索（unsign） ---> 设置（port）


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

