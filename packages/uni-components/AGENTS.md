# uni-components

`@uni-helper/uni-components`：三个组件包（uni-app-components、uni-cloud-components、uni-ui-components）的集合包，自己没有 .vue。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → install 插件（default export）+ 对三个上游组件包做 `export *`
- `./components` → 上游组件的重导出

## Gotchas

- tsdown 是普通 `dts: true`，没有 Vue 插件（本包没有 .vue 要编译）。
- 依赖并 peer 三个上游组件包（workspace）；集合内容变更只改 `src/components/index.ts` 的 re-export。
- `components.d.ts` 和 `shims-vue.d.ts` 是手写提交的单行文件，没有生成脚本，不要重新生成。本包没有测试。
