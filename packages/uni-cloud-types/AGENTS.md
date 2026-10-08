# uni-cloud-types

为 Vue v3 uni-cloud 组件提供 TypeScript 类型，只发类型不发 JS。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → `dist/index.d.mts` / `dist/index.d.cts`（types-only，无 `default` 条件，无 volar-plugin 入口）

## Layout

- `src/index.ts` + `src/unicloud-db.ts`，目前只有 unicloud-db 一个组件。
- `test/unicloud-db.test-d.ts` 单文件，风格同根约定（`expectTypeOf` + `UniHelper.*` 镜像对照）。

## Gotchas

- tsdown 入口只有 `src/index.ts`；`build:done` 钩子会删除 `dist/index.cjs` / `index.mjs`。
- 属性 / 事件以 uniCloud 官方文档（<https://doc.dcloud.net.cn/uniCloud/unicloud-db.html>）为唯一真源。
