# @uni-helper/uni-ui-components

## 介绍

这个包是 `@uni-helper/uni-typed` 项目的一部分，将 uni-ui 组件包装为可导入的 Vue v3 组件，并提供对应的 TypeScript 实例类型。

与 [`@uni-helper/uni-ui-types`](./uni-ui-types.md) 不同，这个包允许你在 Vue SFC 中以 PascalCase 直接导入并使用组件，而无需依赖模板的全局自动识别。

::: tip

如果你只希望在 Template 里获得类型提示，安装 [`@uni-helper/uni-ui-types`](./uni-ui-types.md) 即可，无需安装这个包。

:::

## 安装与配置

### 配置编辑器/IDE

请参考 [搭配 TypeScript 使用 Vue](https://cn.vuejs.org/guide/typescript/overview.html) 配置你的编辑器或 IDE 以及 tsconfig.json，配置完毕后请重启你的编辑器或 IDE 以确保服务启动。

### 已有项目

#### 安装依赖

```shell
npm i -D @uni-helper/uni-ui-components
```

同时，你需要保证项目内已经安装了 Vue v3、TypeScript v5 / v6 和 @dcloudio/uni-ui v1 相关依赖。

> [!TIP]
>
> 为了避免幽灵依赖（又称幻影依赖，详见 [这篇文章](https://rushjs.io/zh-cn/pages/advanced/phantom_deps/)），请检查你的包管理器。
>
> 如果你正在使用 yarn v2 或以上版本，请参考 [文档](https://yarnpkg.com/configuration/yarnrc/#nodeLinker) 设置 `nodeLinker` 为 `node_modules`。
>
> 如果你正在使用 pnpm，请参考 [文档](https://pnpm.io/npmrc#shamefully-hoist) 设置 `shamefully-hoist` 为 `true`。

## 使用

### 局部导入

直接按需导入需要的组件，在 Template 中以 PascalCase 使用。

```vue
<script setup lang="ts">
import { UniBadge, UniCard } from '@uni-helper/uni-ui-components';
</script>

<template>
  <UniCard>
    <template #cover>
      <image src="/static/logo.png" mode="widthFix" />
    </template>
    <UniBadge text="99+" />
  </UniCard>
</template>
```

### 全局注册

调用默认导出的插件一次性注册所有组件。

```ts
// main.ts
import { createSSRApp } from 'vue';
import App from './App.vue';
import UniUiComponents from '@uni-helper/uni-ui-components';

export function createApp() {
  const app = createSSRApp(App);
  app.use(UniUiComponents);
  return { app };
}
```

注册后，所有组件都可以在 Template 中直接以 PascalCase 使用。

```vue
<script setup lang="ts"></script>

<template>
  <UniCard>
    <UniBadge text="99+" />
  </UniCard>
</template>
```

### 实例类型

每个组件都导出对应的实例类型，可结合 `ref` 获取组件实例并调用方法。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { UniPopup, type UniPopupInstance } from '@uni-helper/uni-ui-components';

const popupRef = ref<UniPopupInstance>();

const openPopup = () => {
  popupRef.value?.open('center');
};
</script>

<template>
  <UniPopup ref="popupRef" />
</template>
```

### 具名插槽

部分组件提供具名插槽以自定义内容。包装组件会原样透传所有插槽，使用方式与原生 uni-ui 组件一致。

```vue
<script setup lang="ts">
import { UniCollapse, UniNavBar, UniCard } from '@uni-helper/uni-ui-components';
</script>

<template>
  <UniNavBar>
    <template #left>
      <text>返回</text>
    </template>
    <template #right>
      <text>更多</text>
    </template>
  </UniNavBar>

  <UniCollapse>
    <template #title>
      <text>自定义标题</text>
    </template>
  </UniCollapse>

  <UniCard>
    <template #cover>
      <image src="/static/logo.png" mode="widthFix" />
    </template>
    <template #title>
      <text>卡片标题</text>
    </template>
    <template #actions>
      <text>操作按钮</text>
    </template>
  </UniCard>
</template>
```

请查看 [源代码](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-ui-components/src/components) 了解所有组件。

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
