# jobleap.cn收藏夹 - Chrome扩展

一个轻量型Chrome扩展，为您提供`jobleap.cn`和`mp.jobleap4u.com`的快速访问入口，简化日常跳转操作。


## 核心功能

- 一键跳转至 **jobleap.cn** 官网
- 一键跳转至 **mp.jobleap4u.com** 平台
- 简洁直观的界面，无冗余功能，专注快速访问


## 安装说明

1. 下载或克隆本插件的完整文件夹（确保包含 `manifest.json`、`popup.html`、`popup.js` 等核心文件）。
2. 打开 Chrome 浏览器，进入「扩展程序」管理页面（直接访问地址：`chrome://extensions/`）。
3. 开启页面右上角的「开发者模式」（开关按钮）。
4. 点击「加载已解压的扩展程序」，在弹出的文件选择框中选中插件的文件夹即可完成安装。


## 使用方法

1. 安装完成后，Chrome 工具栏会出现「jobleap.cn收藏夹」的插件图标。
2. 点击插件图标，弹出包含两个按钮的面板：
   - 点击「前往 jobleap.cn」按钮，自动在新标签页打开 jobleap.cn 官网。
   - 点击「前往 mp.jobleap4u.com」按钮，自动在新标签页打开对应平台。


## 注意事项

- 本扩展仅提供跳转功能，不收集或存储任何用户数据。
- 确保您的网络环境可正常访问 `jobleap.cn` 和 `mp.jobleap4u.com` 域名。
- 支持 Chrome 及基于 Chrome 内核的浏览器（如 Edge、360 极速浏览器等）。


## 技术栈

- **前端交互**：HTML + CSS
- **逻辑处理**：JavaScript
- **扩展框架**：Chrome Extension API


## 插件结构

```
jobleap-bookmark-extension/
├─ manifest.json       # 扩展配置核心文件（定义名称、权限、界面等）
├─ popup.html          # 插件弹窗界面（按钮布局）
├─ popup.js            # 按钮点击跳转逻辑
└─ README.md           # 说明文档
```