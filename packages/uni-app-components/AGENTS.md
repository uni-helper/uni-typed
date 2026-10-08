# uni-app-components

基于 `@uni-helper/uni-app-types` 封装的 Vue v3 uni-app 组件薄壳，发真实 JS + 类型。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → install 插件（default export，遍历 `app.component(key, ...)` 注册全部组件）+ 全部组件重导出
- `./components` → 组件本身

## Layout

- `src/components/<目录>/` 每组件一目录：`<name>.vue`（`<script setup lang="ts">` + `defineOptions({ name })` + `defineProps<XxxProps>()`，模板 `v-bind="props"` + slot，无本地逻辑）+ `index.ts`（转发组件与实例类型）。
- `components.d.ts`（`export type * from "./dist/components";`）和 `shims-vue.d.ts`（`declare module "*.vue";`）是手写提交的单行文件，没有生成脚本，不要重新生成。

## Gotchas

- tsdown 用 `unplugin-vue/rolldown` 编译 .vue，`dts: { vue: true }`，`platform: "neutral"`。
- 依赖并 peer `@uni-helper/uni-app-types`（workspace）：新组件用到的 Props / 实例类型必须先在上游类型包里存在。
- 本包没有测试；行为靠 playground 联调验证。
