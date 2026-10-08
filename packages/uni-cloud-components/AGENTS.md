# uni-cloud-components

基于 `@uni-helper/uni-cloud-types` 封装的 Vue v3 uni-cloud 组件薄壳，发真实 JS + 类型。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → install 插件（default export）+ 组件重导出
- `./components` → 组件本身

## Layout

- `src/components/unicloud-db/` 目前仅此一个组件，模式同根 AGENTS.md 的「组件封装模式」。
- `components.d.ts` 和 `shims-vue.d.ts` 是手写提交的单行文件，没有生成脚本，不要重新生成。

## Gotchas

- tsdown 用 `unplugin-vue/rolldown` 编译 .vue，`dts: { vue: true }`，`platform: "neutral"`。
- 依赖并 peer `@uni-helper/uni-cloud-types`（workspace）。
- 本包没有测试；行为靠 playground 联调验证。
