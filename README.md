<!--
 * @Author: mingwei
 * @Date: 2022-06-16 16:51:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-17 10:45:41
 * @FilePath: /dg-cli/README.md
 * @Description:
-->

## 快速创建项目脚手架

> 已实现脚手架功能

- 使用 `antd-admin` 创建脚项目
- 使用移动端 `react native` 快速创建项目

> 计划功能

- 开发区块，添加常见业务区块
- 添加快速开发小程序（h5）项目架构

### 安装

```shell
  npm i -g qwd-cli
```

### 更新

```shell
  npm update qwd-cli
```

### 创建项目

```shell
  qwd create

  # 选择项目
  ? 请选择项目模板? (Use arrow keys)
  ❯ antd-react-template
  react-native-template
```

### 创建区块

```shell
  qwd block

  # 在项目下对应位置，选择区块
  ? 请选择所创建区块! (Use arrow keys)
  ❯ antd-form-block
  antd-modal-block

```

### 使用 `npx` 创建项目

```shell
  # 或者使用npx,前提是你的node要比较新
  npx qwd-cli create

  # 在项目下对应位置，选择区块
  npx qwd-cli block
```
