# uni-app x 与 uni-ui x

## 结论

本仓库目前不提供 uni-app x 和 uni-ui x 的类型包。原因在 uni-app x 的类型机制本身：它没有可以接入的类型包入口。

## uni-ui x 是什么

uni-ui x 是 DCloud 为 uni-app x 提供的扩展组件库，随 HBuilderX 5.08 发版（5.07 上部分组件在部分平台存在兼容性问题）。源码在 <https://gitcode.com/dcloud/uni-ui-x>，组件清单见[官方页面](https://doc.dcloud.net.cn/uni-app-x/component/uni-ui-x/)。

官方对两个库的关系写得很直接：「uni-ui x 是全新设计的，与为 uni-app 做的 uni-ui 不同」「uni-ui 无法直接升级 uni-ui x，组件名称、用法都有变化」。所以 `@uni-helper/uni-ui-types` 和 uni-ui x 没有关系，两者不能互相替代。

## 为什么不能照搬本仓库的做法

本仓库的类型包靠两件事生效：

- `declare global { namespace UniHelper }` 提供 `UniHelper.XxxProps` 这类命名空间类型
- `declare module "vue" { GlobalComponents }` 把组件标签注册进 Vue 的类型系统

两者都要求项目里有 Volar 或 vue-tsc 在检查 `.vue` 模板。uni-app x 的链路完全不同：

1. 组件的类型命名规范是「组件标签名首字母大写，驼峰 + `ComponentPublicInstance`」。例如 `<uni-data-checkbox/>` 对应的类型是 `UniDataCheckboxComponentPublicInstance`，由 uni-app x 编译器自己产出，见[组件文档](https://doc.dcloud.net.cn/uni-app-x/vue/component.html)。
2. `.uvue` 的 script 在 VDOM 模式下 `lang` 只能写 `uts`，Android 平台按 uts2kt 执行并要求强类型；蒸汽模式按 JS 运行，本来就不要求强类型。
3. 官方[工程化页面](https://doc.dcloud.net.cn/uni-app-x/worktile/)写明「uni-app x 不支持 cli 创建项目」「uni-app x 上还不支持 eslint 相关的插件」。没有 tsconfig，没有 vue-tsc，也没有 `compilerOptions.types` 这样的入口。

也就是说，发布一个 `@uni-helper/uni-ui-x-types` 之后，没有任何编译器会读它。

## 组件封装包也做不出来

组件包存在的意义是给「运行时存在、类型缺失」的组件套一层带类型的 Vue SFC。uni-ui x 只发 `.uvue` 文件：

- uni-app（Vue 3）编译不了 `.uvue`，包一层之后在 uni-app 项目里也用不上；
- uni-app x 侧靠 easycom 从 `uni_modules` 自动引入，不需要注册和包装。

## 现在能拿到什么

- 把 uni-ui x 装进 `uni_modules` 后，HBuilderX 直接读组件源码给提示，不需要额外的类型包。
- 需要确认某个属性的含义和默认值时，查[官方组件页](https://doc.dcloud.net.cn/uni-app-x/component/uni-ui-x/)。
- 等 DCloud 给 uni-app x 提供基于 tsconfig 或 `.d.ts` 的类型机制，再回到这里考虑加包。

## 相关

- 本项目支持的组件类型包：[uni-app-types](/guide/uni-app-types)、[uni-cloud-types](/guide/uni-cloud-types)、[uni-ui-types](/guide/uni-ui-types)
- 有具体使用场景需要记录，请到 [GitHub Issues](https://github.com/uni-helper/uni-typed/issues) 说明
