---

name: bump-types
description: 对照官方文档同步 packages 里的组件类型。用户提到「更新组件类型」「同步最新组件」「检查组件类型是否需要更新」「check for types updates」时使用。
---

# 更新组件类型

`packages/uni-*-types` 里的属性、事件、默认值、文案都抄自官方文档。本技能做的事就是逐项对照，把不一致改回来。

## 改哪个包、看哪份文档

| 包                 | 唯一真源                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| `uni-app-types`    | <https://uniapp.dcloud.net.cn/component/> 及各组件子页                                                          |
| `uni-ui-types`     | <https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html> 及各组件子页；默认值再对一遍 `@dcloudio/uni-ui` 源码 |
| `uni-cloud-types`  | <https://doc.dcloud.net.cn/uniCloud/unicloud-db.html>                                                           |
| `uni-*-components` | 不含类型定义，类型包改了不用跟着改                                                                              |

uni-app x（`doc.dcloud.net.cn/uni-app-x/`）是另一套非 Vue 产品，不在范围内。

## 文档里怎么取数据

组件页的「属性说明」表格是主要来源。同一个页面往往有多张表，先确认表头再读：

- 表头 `属性名 / 类型 / 默认值 / 说明`：组件属性，认这张表。
- 表头 `属性 / 类型 / 说明` 而且出现在子章节下时，讲的是子对象的字段（如 web-view 的 `webview-styles`）或 JS API 参数，要落到对应的子接口，不能当成组件 Props。
- 表头只有平台名（`App / H5 / 微信小程序`）：平台支持矩阵，只在需要写平台说明时参考。
- 页面末尾单独一张 `属性名` 表，常见于 swiper 的 `item-id`、picker-view 的 `value`：属性属于子组件，要落到子组件文件，不要塞进父组件。

`uni-tbody`、`uni-thead` 这类内部组件没有文档页，`packages/uni-ui-types` 也不收录，别补。

## 逐项检查

1. 组件清单：文档里的组件在 `src/` 都有对应文件，`declare module "vue" { GlobalComponents }` 里都有注册。缺了就补文件、补 `src/index.ts` 导出、补测试。uni-app 侧目前是 48 个，每个在官方文档都有独立页面。
2. 属性有无：文档表里的属性名（kebab-case 转成 camelCase）在 `type _XxxProps` 里都能找到。缺的补上，但先确认不是被 `Partial<{...}>` 之外的分支类型接走了。`uni-collapse`、`uni-data-checkbox`、`uni-file-picker` 用联合类型区分模式，属性分散在 `_XxxAccordionProps` 之类的分支里，不要重复声明。
3. 属性类型：`String` 对应 `string`，`Number | String` 对应 `number | string`，`Array` 尽量换成有元素类型的数组或专门的 `_XxxItem` 接口。
4. 默认值与文案：JSDoc 里的 `默认为 xxx` 要和文档「默认值」列一致。文档写 `-`、`无`、空值的，不写默认值。
5. 枚举值：文档列出的有效值要逐个进注释和联合类型。
6. 事件：`@xxx` 对应 `onXxx`，载荷字段进 `OnXxxDetail`。
7. 已废弃的属性不加，已有的可以留着。

`uni-ui-types` 的默认值以 `npm pack @dcloudio/uni-ui` 解出来的源码为最终依据（组件里 `props: { x: { default: ... } }`）。文档表格会过期，例如 `uni-icons` 的 `size` 文档写 24，源码是 16。文档和源码冲突时按源码改，并在提交信息里说明。

## 改完必须跑

```bash
pnpm fix       # biome 写回格式，Markdown 表格对齐也靠它
pnpm test      # vitest --typecheck，跑全部 *.test-d.ts
pnpm typecheck # vue-tsc
```

`pnpm test` 是唯一校验这些改动的关口：`test/*.test-d.ts` 里每个导出类型都要和 `UniHelper.*` 全局镜像 `toEqualTypeOf`。新增类型不写测试就等于没校验。

## 容易踩的坑

- 改了属性名或默认值，`docs/guide/uni-*-types.md` 里的示例和 `packages/*/AGENTS.md` 里的描述也可能要跟着改。
- 类型包不发 JS，`src/index.ts` 顶部的 `import type {} from "vue/jsx-runtime";` 是给 `declare module "vue/jsx-runtime"` 提供解析目标的，删了会让 `pnpm test` 报一片 TS2664。
- `pnpm fix` 会重排导出顺序，别手工排序。
