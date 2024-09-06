# @uni-helper/uni-ui-types

## 介绍

这个包是 `@uni-helper/uni-typed` 项目的一部分，为 Vue v3 uni-ui 组件提供 TypeScript 类型。

## 安装与配置

### 配置编辑器/IDE

请参考 [搭配 TypeScript 使用 Vue](https://cn.vuejs.org/guide/typescript/overview.html) 配置你的编辑器或 IDE 以及 tsconfig.json，配置完毕后请重启你的编辑器或 IDE 以确保服务启动。

### 模板

#### 官方模板

根据 [官方文档](https://uniapp.dcloud.net.cn/quickstart-cli.html)，你可以使用以下命令获取官方模板。

```shell
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

如果网络不好，可以直接访问 [这里](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 获取。

::: warning

截至 2024-07-28，官方模板依赖版本相对落后，如果你正在使用它，必须升级相关依赖版本才能正常获取相关 TypeScript 类型提示，请参考 [已有项目](#已有项目) 章节调整。

:::

#### 社区模板

我们推荐使用 [create-uni](https://github.com/uni-helper/create-uni) 来创建一个模板，你也可以在 [这里](https://github.com/uni-helper/awesome-uni-app#%E6%A8%A1%E6%9D%BF) 查看其它社区模板并挑选一个适合自己的。

### 已有项目

#### 安装依赖

```shell
npm i -D @uni-helper/uni-app-types @uni-helper/uni-ui-types
```

@uni-helper/uni-app-types 是对等依赖，你需要同时安装。同时，你需要保证项目内已经安装了 Vue v3、TypeScript v5 和 @dcloudio/uni-ui v1 相关依赖。

> [!TIP]
>
> 为了避免幽灵依赖（又称幻影依赖，详见 [这篇文章](https://rushjs.io/zh-cn/pages/advanced/phantom_deps/)），请检查你的包管理器。
>
> 如果你正在使用 yarn v2 或以上版本，请参考 [文档](https://yarnpkg.com/configuration/yarnrc/#nodeLinker) 设置 `nodeLinker` 为 `node_modules`。
>
> 如果你正在使用 pnpm，请参考 [文档](https://pnpm.io/npmrc#shamefully-hoist) 设置 `shamefully-hoist` 为 `true`。

#### 配置 TypeScript

更新 `tsconfig.json`，确保：

- `compilerOptions.moduleResolution` 为 Bundler
- `compilerOptions.types` 包含 @uni-helper/uni-app-types 和 @uni-helper/uni-ui-types
- `vueCompilerOptions.plugins` 包含 @uni-helper/uni-app-types/volar-plugin
- `include` 包含 Vue 相关源码文件

以下是一个 `tsconfig.json` 示例，你可以直接复制它并粘贴到项目内。请注意，你可能需要稍微调整以匹配你的开发需求，相关依赖需要自行安装。

```jsonc
{
  // 对应 @vue/tsconfig v0.5.1
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "jsx": "preserve",
    "jsxImportSource": "vue",
    "noImplicitThis": true,
    "strict": true,
    "verbatimModuleSyntax": true,
    "target": "ESNext",
    "useDefineForClassFields": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "types": [
      // uni-app + Vue 3 使用 Vite 构建，需要安装 vite
      "vite/client",
      // uni API 相关的 TypeScript 类型，需要安装 @dcloudio/types
      "@dcloudio/types",
      // my API 相关的 TypeScript 类型，需要安装 @mini-types/alipay
      "@mini-types/alipay",
      // wx API 相关的 TypeScript 类型，需要安装 miniprogram-api-typings
      "miniprogram-api-typings",
      // 为 uni-app 组件提供 TypeScript 类型，需要安装 @uni-helper/uni-app-types
      "@uni-helper/uni-app-types",
      // 为 uni-ui 组件提供 TypeScript 类型，需要安装 @uni-helper/uni-ui-types
      "@uni-helper/uni-ui-types"
    ]
  },
  "vueCompilerOptions": {
    // 调整 Volar（Vue 语言服务工具）解析行为，用于为 uni-app 组件提供 TypeScript 类型
    "plugins": ["@uni-helper/uni-app-types/volar-plugin"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "*.d.ts"]
}
```

再次重启你的编辑器或 IDE 以确保服务启动并正确加载配置。如果一切顺利，你应该可以看到类似的 TypeScript 类型提示。

![示例](/uni-ui-types-example.png)

## 使用

### Template

自动为 Template 内对应组件附加 TypeScript 类型提示。

![示例](/uni-ui-types-example.png)

### Script

推荐使用导出的 TypeScript 类型为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { UniBadgeType, UniBadgeOnClick } from '@uni-helper/uni-ui-types';

const type = ref<UniBadgeType>('default');
const onClick: UniBadgeOnClick = (event) => {
  // ...
};
</script>

<template>
  <uni-badge :type="type" @click="onClick"></uni-badge>
</template>
```

也可以直接使用命名空间来为变量标注类型。

::: warning

不推荐这种做法，详见 [typescript-eslint - no-namespace](https://typescript-eslint.io/rules/no-namespace/)。

:::

```vue
<script setup lang="ts">
import { ref } from 'vue';

const type = ref<UniHelper.UniBadgeType>('default');
const onClick: UniHelper.UniBadgeOnClick = (event) => {
  // ...
};
</script>

<template>
  <uni-badge :type="type" @click="onClick"></uni-badge>
</template>
```

请查看 [源代码](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-ui-types/src) 了解所有类型。

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
