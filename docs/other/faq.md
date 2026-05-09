<script setup>
import { version } from '../../lerna.json'
</script>

# FAQ

## 我项目里类型报错，怎么办？

Volar、TypeScript、Vue 等开源项目的目标是与开放标准（即 W3C Web 标准、ECMA 规范等）保持一致，这意味着它们对小程序、uni-app 等非开放标准支持度较低。你可以在 [vueuse/vueuse#1073](https://github.com/vueuse/vueuse/pull/1073) 了解这一观点。

`@uni-helper/uni-typed` 项目严重依赖 Volar、TypeScript 和 Vue，因此更新其中任一依赖后，编辑器或 IDE 可能无法正常提示部分元素的的 TypeScript 类型（本身是 HTML 自带但被占用的元素，如 SVG 相关元素 view、image、text、输入框元素 input 等），我们强烈建议锁定依赖版本以避免类似问题。

如果你遇到了类似的问题，请先回退并锁定版本，并在 QQ 群内反馈、微信群内反馈、提交 ISSUE 或 PR，我们将尽快处理，非常感谢你的帮助！🙏

截至 2026-05-09，经实测确定，以下版本组合可正常实现类型提示。

|依赖|版本|
|---|---|
|Volar|v3.2.8|
|TypeScript|v5.9.3|
|Vue|v3.4.38|
|@dcloudio/*|v3.0.0-5000720260410001|
|@uni-helper/uni-app-types|{{version}}|
|@uni-helper/uni-cloud-types|{{version}}|
|@uni-helper/uni-ui-types|{{version}}|
|@uni-helper/uni-types|{{version}}|
|@uni-helper/uni-app-types|{{version}}|
|@uni-helper/uni-cloud-types|{{version}}|
|@uni-helper/uni-ui-types|{{version}}|
|@uni-helper/uni-types|{{version}}|

## 如何确认 Volar 版本？

### VSC

在 VSC 中打开 Extensions -> Vue - Official，可以看到 Volar 版本。如果正在使用 v2.0.21 或以下版本，请使用 [@uni-helper/uni-app-types v0.5](https://github.com/uni-helper/uni-app-types) 和 [@uni-helper/uni-ui-types v0.5](https://github.com/uni-helper/uni-ui-types) 以获取类型支持。

![vsc-extension](/vsc-extension.png)

### WebStorm

在 WebStorm 中打开一个 Vue 项目，然后打开 Settings -> Languages & Frameworks -> TypeScript -> Vue，可以看到 Volar 版本。如果正在使用 @vue/language-server v2.0.21 或以下版本，请使用 [@uni-helper/uni-app-types v0.5](https://github.com/uni-helper/uni-app-types) 和 [@uni-helper/uni-ui-types v0.5](https://github.com/uni-helper/uni-ui-types) 以获取类型支持。

![webstorm-settings](/webstorm-settings.png)

### Zed

截至 v0.149.3，Zed 锁定 @vue/language-server 为 v1.8，请使用 [@uni-helper/uni-app-types v0.5](https://github.com/uni-helper/uni-app-types) 和 [@uni-helper/uni-ui-types v0.5](https://github.com/uni-helper/uni-ui-types) 以获取类型支持。

## Vue 2 支持情况

如果你正在使用 Vue 2 且需要组件 TypeScript 类型支持，请参考以下版本组合，这是最后已知可用的版本组合。请使用 [Volar v2.0.21](https://cdn.jsdelivr.net/gh/uni-helper/uni-typed/assets/Vue.volar-2.0.21.vsix)、Vue v2.6.14、[@uni-helper/uni-ui-types v0.5](https://github.com/uni-helper/uni-ui-types) 和 TypeScript v5.4.5，这是最后已知可用的版本组合。

|依赖|版本|
|---|---|
|Volar|v2.0.21|
|TypeScript|v5.4.5|
|Vue|v2.6.14|
|@dcloudio/*|2.0.2-4020420240722003|
|@uni-helper/uni-app-types|v0.5.13|
|@uni-helper/uni-ui-types|v0.5.13|

::: warning

uni-app 不支持 Vue v2.7。

:::

如果你正在使用 Vue 2 但无需组件 TypeScript 类型支持，请使用 [Vetur](https://github.com/vuejs/vetur) 和 [@dcloudio/uni-helper-json](https://www.npmjs.com/package/@dcloudio/uni-helper-json)。

::: warning

Volar 和 Vetur 不可共存，请只启用其中一个。

:::

## 类型与文档冲突

类型与官方文档的冲突之处，请以官方文档为准，并在 QQ 群内反馈、微信群内反馈、提交 ISSUE 或 PR，我们将尽快处理，非常感谢你的帮助！🙏
