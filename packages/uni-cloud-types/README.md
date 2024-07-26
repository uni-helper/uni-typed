# @uni-helper/uni-cloud-types

[![License](https://img.shields.io/github/license/uni-helper/uni-cloud-types)](https://github.com/uni-helper/uni-cloud-types/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@uni-helper/uni-cloud-types)](https://www.npmjs.com/package/@uni-helper/uni-cloud-types)

- [@uni-helper/uni-app-types](https://github.com/uni-helper/uni-app-types) 提供 `uni-app` 组件类型
- [@uni-helper/uni-cloud-types](https://github.com/uni-helper/uni-cloud-types) （当前仓库）提供 `uni-cloud` 组件类型
- [@uni-helper/uni-ui-types](https://github.com/uni-helper/uni-ui-types) 提供 `uni-ui` 组件类型

基于 [这个 PR](https://github.com/vuejs/core/pull/3399)，[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（即 Volar） 已经支持。

安装之后，请参考 [这里](https://cn.vuejs.org/guide/typescript/overview.html) 配置你的 VS Code。启用或安装后需要重启 VS Code。

维护直到官方类型推出。

**类型和文档的冲突之处，请以文档为准。**

类型源代码在 [uni-helper/uni-cloud-types](https://github.com/uni-helper/uni-cloud-types)。欢迎提交 ISSUE 和 PR 改进类型。

## 使用

- 安装依赖

  ```shell
  npm i -D @uni-helper/uni-app-types @uni-helper/uni-cloud-types
  ```

  <details>
    <summary>yarn v2/v3</summary>
    <p>请参考 <a href="https://yarnpkg.com/configuration/yarnrc/#nodeLinker">文档</a> 设置 <code>nodeLinker</code> 为 <code>node_modules</code>。</p>
  </details>

  <details>
    <summary>pnpm</summary>
    <p>请参考 <a href="https://pnpm.io/npmrc#shamefully-hoist">文档</a> 设置 <code>shamefully-hoist</code> 为 <code>true</code>。</p>
  </details>

- 配置 `tsconfig.json`，确保 `compilerOptions.types` 中含有 `@dcloudio/types`、`@uni-helper/uni-app-types` 和 `@uni-helper/uni-cloud-types`，且 `include` 包含了对应的 `vue` 文件

  <details>
    <summary>2.0.14 <= <code>Vue Language Features (Volar)</code> & <code>vue-tsc</code></summary>

  ```json
  {
    "compilerOptions": {
      "types": [
        "@dcloudio/types",
        "@uni-helper/uni-app-types",
        "@uni-helper/uni-cloud-types"
      ]
    },
    "vueCompilerOptions": {
      "plugins": ["@uni-helper/uni-app-types/volar-plugin"]
    },
    "include": ["src/**/*.vue"]
  }
  ```

  </details>

  <details>
    <summary>1.7.12 <= <code>Vue Language Features (Volar)</code> & <code>vue-tsc</code> < 2.0.14</summary>

  ```json
  {
    "compilerOptions": {
      "types": [
        "@dcloudio/types",
        "@uni-helper/uni-app-types",
        "@uni-helper/uni-cloud-types"
      ]
    },
    "vueCompilerOptions": {
      "nativeTags": ["block", "component", "template", "slot"]
    },
    "include": ["src/**/*.vue"]
  }
  ```

  </details>

  <details>
    <summary>1.5.1 <= <code>Vue Language Features (Volar)</code> & <code>vue-tsc</code> < 1.7.12</summary>

  ```json
  {
    "compilerOptions": {
      "types": [
        "@dcloudio/types",
        "@uni-helper/uni-app-types",
        "@uni-helper/uni-cloud-types"
      ]
    },
    "include": ["src/**/*.vue"]
  }
  ```

  </details>

  <details>
    <summary>1.0.10 <= <code>Vue Language Features (Volar)</code> & <code>vue-tsc</code> < 1.5.1</summary>

  ```json
  {
    "compilerOptions": {
      "types": [
        "@dcloudio/types",
        "@uni-helper/uni-app-types",
        "@uni-helper/uni-cloud-types"
      ]
    },
    "vueCompilerOptions": {
      "nativeTags": ["block", "component", "template", "slot"]
    },
    "include": ["src/**/*.vue"]
  }
  ```

  </details>

  <details>
    <summary>0.34.16 <= <code>Vue Language Features (Volar)</code> & <code>vue-tsc</code> < 1.0.10</summary>

  ```json
  {
    "compilerOptions": {
      "types": [
        "@dcloudio/types",
        "@uni-helper/uni-app-types",
        "@uni-helper/uni-cloud-types"
      ]
    },
    "vueCompilerOptions": {
      "experimentalRuntimeMode": "runtime-uni-app"
    },
    "include": ["src/**/*.vue"]
  }
  ```

  </details>

- 重启编辑器 / IDE

### 标注类型

推荐使用 `@uni-helper/uni-cloud-types` 导出的类型为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type {
  UnicloudDbOnLoad,
  UnicloudDbSpaceInfoProvider,
} from '@uni-helper/uni-cloud-types';

const spaceInfoProvider = ref<UnicloudDbSpaceInfoProvider>('aliyun');
const onLoad: UnicloudDbOnLoad = (event) => {
  // ...
};
</script>

<template>
  <unicloud-db @load="onLoad"></unicloud-db>
</template>
```

也可以直接使用命名空间来为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';

const spaceInfoProvider = ref<UniHelper.UnicloudDbSpaceInfoProvider>(50);
const onLoad: UniHelper.UnicloudDbOnLoad = (event) => {
  // ...
};
</script>

<template>
  <unicloud-db @load="onLoad"></unicloud-db>
</template>
```

请查看 [src](./src) 了解所有类型。

## 致谢

最初在 [uni-base-components-types](https://github.com/satrong/uni-base-components-types) 得到了灵感。

基于 [这个 PR](https://github.com/satrong/uni-base-components-types/pull/5) 完成。
