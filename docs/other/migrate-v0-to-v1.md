# 从 v0 迁移到 v1

::: warning

v1 不支持 Vue v2，请参考 [常见问题](./faq#vue-2-支持情况)。

:::

## 配置编辑器/IDE

请参考 [搭配 TypeScript 使用 Vue](https://cn.vuejs.org/guide/typescript/overview.html) 配置你的编辑器或 IDE 以及 tsconfig.json，配置完毕后请重启你的编辑器或 IDE 以确保服务启动。

## 调整依赖版本

请参考 [常见问题](faq#我项目里类型报错怎么办) 调整依赖版本。

## 配置 TypeScript

更新 `tsconfig.json`，确保：

- `compilerOptions.moduleResolution` 为 Bundler
- `compilerOptions.types` 包含对应的类型，如 @uni-helper/uni-app-types、@uni-helper/uni-cloud-types、@uni-helper/uni-ui-types、@uni-helper/uni-types
- `vueCompilerOptions.plugins` 包含 @uni-helper/uni-app-types/volar-plugin 或 @uni-helper/uni-types/volar-plugin
- `include` 包含 Vue 相关源码文件

以下是一个 `tsconfig.json` 示例，你可以直接复制它并粘贴到项目内。请注意，你可能需要稍微调整以匹配你的开发需求，相关依赖需要自行安装。

```jsonc
{
  // 对应 @vue/tsconfig v0.5.1
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "Bundler", // [!code ++]
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
      // uni-app + Vue 3 使用 Vite 构建
      // 需要安装 vite
      "vite/client",
      // uni API 相关的 TypeScript 类型
      // 需要安装 @dcloudio/types
      "@dcloudio/types",
      // my API 相关的 TypeScript 类型
      // 需要安装 @mini-types/alipay
      "@mini-types/alipay",
      // wx API 相关的 TypeScript 类型
      // 需要安装 miniprogram-api-typings
      "miniprogram-api-typings",
      // 为 uni-app 组件提供 TypeScript 类型 // [!code ++]
      // 需要安装 @uni-helper/uni-app-types // [!code ++]
      "@uni-helper/uni-app-types", // [!code ++]
      // 为 uni-cloud 组件提供 TypeScript 类型 // [!code ++]
      // 需要安装 @uni-helper/uni-cloud-types // [!code ++]
      "@uni-helper/uni-cloud-types", // [!code ++]
      // 为 uni-ui 组件提供 TypeScript 类型 // [!code ++]
      // 需要安装 @uni-helper/uni-ui-types // [!code ++]
      "@uni-helper/uni-ui-types" // [!code ++]
      // 为所有相关组件提供 TypeScript 类型 // [!code ++]
      // 需要安装 @uni-helper/uni-types // [!code ++]
      // 配置了这个就不需要配置前面三个 // [!code ++]
      // "@uni-helper/uni-types" // [!code ++]
    ]
  },
  "vueCompilerOptions": {
    // 不需要指定 target、experimentalRuntimeMode 和 nativeTags // [!code --]
    "target": "3", // [!code --]
    "experimentalRuntimeMode": "runtime-uni-app", // [!code --]
    "nativeTags": ["block", "component", "template", "slot"], // [!code --]
    // 调整 Volar（Vue 语言服务工具）解析行为 // [!code ++]
    // 用于为 uni-app 组件提供 TypeScript 类型 // [!code ++]
    "plugins": ["@uni-helper/uni-app-types/volar-plugin"] // [!code ++]
    // 也可以使用 @uni-helper/uni-types/volar-plugin // [!code ++]
    // "plugins": ["@uni-helper/uni-types/volar-plugin"] // [!code ++]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue", // [!code ++]
    "*.d.ts"
  ]
}
```

再次重启你的编辑器或 IDE 以确保服务启动并正确加载配置。如果一切顺利，你应该可以看到类似的 TypeScript 类型提示。

![示例1](/uni-app-types-example.png)
![示例2](/uni-cloud-types-example.png)
![示例3](/uni-ui-types-example.png)
