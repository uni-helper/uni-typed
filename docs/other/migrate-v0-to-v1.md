# 从 v0 迁移到 v1

## 配置编辑器/IDE

请参考 [这里](https://cn.vuejs.org/guide/typescript/overview.html) 配置你的编辑器或 IDE 以及 tsconfig.json，配置完毕后请重启你的编辑器或 IDE 以确保服务启动。

## 调整依赖版本

请参考 [这里](faq#%E6%88%91%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%B1%BB%E5%9E%8B%E6%8A%A5%E9%94%99-%E6%80%8E%E4%B9%88%E5%8A%9E) 调整依赖版本。

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
      // 为 uni-cloud 组件提供 TypeScript 类型，需要安装 @uni-helper/uni-cloud-types
      "@uni-helper/uni-cloud-types",
      // 为 uni-ui 组件提供 TypeScript 类型，需要安装 @uni-helper/uni-ui-types
      "@uni-helper/uni-ui-types"
      // 为所有相关组件提供 TypeScript 类型，需要安装 @uni-helper/uni-types
      // 配置了这个就不需要配置前面三个
      // "@uni-helper/uni-types"
    ]
  },
  "vueCompilerOptions": {
    // 调整 Volar（Vue 语言服务工具）解析行为，用于为 uni-app 组件提供 TypeScript 类型
    "plugins": ["@uni-helper/uni-app-types/volar-plugin"]
    // 也可以使用 @uni-helper/uni-types/volar-plugin
    // "plugins": ["@uni-helper/uni-types/volar-plugin"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "*.d.ts"]
}
```

再次重启你的编辑器或 IDE 以确保服务启动并正确加载配置。如果一切顺利，你应该可以看到类似的 TypeScript 类型提示。

![示例1](/uni-app-types-example.png)
![示例2](/uni-cloud-types-example.png)
![示例3](/uni-ui-types-example.png)
