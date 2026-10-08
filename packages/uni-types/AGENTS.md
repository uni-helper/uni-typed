# uni-types

`@uni-helper/uni-types`：三个类型包（uni-app-types、uni-cloud-types、uni-ui-types）的集合包，只发类型不发 JS。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → `src/index.ts` 对三个类型包做 `export type *`；产物为 types-only 的 `dist/index.d.mts` / `dist/index.d.cts`
- `./volar-plugin` → 纯转发 `@uni-helper/uni-app-types/volar-plugin`，自身无逻辑

## Gotchas

- 没有自己的测试目录；类型变更发生在三个上游类型包，这里只改 re-export。
- tsdown 入口 `src/index.ts` + `src/volar-plugin.ts`；`build:done` 钩子会删除 `dist/index.cjs` / `index.mjs`。
