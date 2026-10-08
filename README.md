<a href="https://uni-typed.netlify.app/"><img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-typed@main/banner.svg" alt="banner" width="100%"/></a>

# @uni-helper/uni-typed

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-typed@main/logo.svg" alt="logo" width="256" height="256" />
</p>

<p align="center">
  <a href="https://github.com/uni-helper/uni-typed/blob/main/LICENSE"><img src="https://img.shields.io/github/license/uni-helper/uni-typed?style=for-the-badge&labelColor=005947&color=eee" alt="License"></a>
  <a href="https://github.com/uni-helper/uni-typed/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-typed?style=for-the-badge&labelColor=005947&color=eee" alt="GitHub Stars"></a>
  <a href="https://npmx.dev/package/@uni-helper/uni-types"><img src="https://img.shields.io/npm/v/@uni-helper/uni-types?style=for-the-badge&labelColor=005947&color=eee" alt="NPM version"></a>
  <a href="https://npmx.dev/package/@uni-helper/uni-types"><img src="https://img.shields.io/npm/dm/@uni-helper/uni-types?style=for-the-badge&labelColor=005947&color=eee" alt="npm downloads"></a>
</p>
<p align="center">
  <a href="https://github.com/ModyQyW"><img src="https://img.shields.io/badge/Author%20%26%20Maintainer-ModyQyW-blue?style=for-the-badge" alt="Author & Maintainer"></a>
</p>

为 uni-app 打造的 TypeScript 支持项目。

不想看文档？直接问 AI 🤖 <a href="https://deepwiki.com/uni-helper/uni-typed"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>

[Netlify](https://uni-typed.netlify.app/) | [Cloudflare Pages](https://uni-typed.pages.dev/)

## 介绍

`@uni-helper/uni-typed` 是一个为 [uni-app](https://uniapp.dcloud.net.cn/) 打造的 TypeScript 支持项目，包含几个子包：

|名称|描述|
|---|---|
|[@uni-helper/uni-app-types](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-app-types)|为 Vue v3 uni-app 组件提供 TypeScript 类型。|
|[@uni-helper/uni-cloud-types](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-cloud-types)|为 Vue v3 uni-cloud 组件提供 TypeScript 类型。|
|[@uni-helper/uni-ui-types](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-ui-types)|为 Vue v3 uni-ui 组件提供 TypeScript 类型。|
|[@uni-helper/uni-types](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-types)|为 Vue v3 uni-app、uni-cloud 和 uni-ui 组件提供 TypeScript 类型支持，即以上三者的集合。|
|[@uni-helper/uni-app-components](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-app-components)|基于 @uni-helper/uni-app-types 封装 Vue v3 uni-app 组件。|
|[@uni-helper/uni-cloud-components](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-cloud-components)|基于 @uni-helper/uni-cloud-types 封装 Vue v3 uni-cloud 组件。|
|[@uni-helper/uni-ui-components](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-ui-components)|基于 @uni-helper/uni-ui-types 封装 Vue v3 uni-ui 组件。|
|[@uni-helper/uni-components](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-components)|基于 @uni-helper/uni-app-components、@uni-helper/uni-cloud-components 和 @uni-helper/uni-ui-components 封装 Vue v3 组件，即以上三者的集合。|

## 安装

```shell
npm i -D @uni-helper/uni-types
```

同时保证项目内已安装 Vue v3 与 TypeScript v5 / v6 相关依赖，并在 `tsconfig.json` 的 `compilerOptions.types` 中加入 `@uni-helper/uni-types`。使用 pnpm 时需设置 `shamefully-hoist` 为 `true`，使用 yarn v2 及以上版本时需设置 `nodeLinker` 为 `node_modules`。

## 使用

在 Template 中自动获得组件的 TypeScript 类型提示，也可以导入导出的类型为变量标注：

```vue
<script setup lang="ts">
import type { ScrollViewOnScroll } from '@uni-helper/uni-types';

const onScroll: ScrollViewOnScroll = (event) => {
  // ...
};
</script>

<template>
  <scroll-view @scroll="onScroll"></scroll-view>
</template>
```

请阅读[在线文档](https://uni-typed.netlify.app/)或各包 README 了解具体用法和示例。

## 贡献

欢迎贡献！请阅读 [贡献指南](./CONTRIBUTING.md)。

## 致谢

最初在 [uni-base-components-types](https://github.com/satrong/uni-base-components-types) 得到了灵感。

基于 [这个 PR](https://github.com/satrong/uni-base-components-types/pull/5) 完成。

## 贡献者们

该项目由 [ModyQyW](https://github.com/ModyQyW) 创建。

感谢 [所有贡献者](https://github.com/uni-helper/uni-typed/graphs/contributors) 的付出！

## 赞助

如果这个包对你有所帮助，请考虑 [赞助](https://github.com/ModyQyW/sponsors) 支持，这将有利于项目持续开发和维护。

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
