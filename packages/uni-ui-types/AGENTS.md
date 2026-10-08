# uni-ui-types

为 Vue v3 uni-ui 组件提供 TypeScript 类型，只发类型不发 JS。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → `dist/index.d.mts` / `dist/index.d.cts`（types-only，无 `default` 条件，无 volar-plugin 入口）

## Layout

- `src/uni-<组件>.ts` 平铺（约 60 个文件，一组件一文件），无域子目录。
- `test/` 平铺 `uni-*.test-d.ts`，风格同根约定（`expectTypeOf` + `UniHelper.*` 镜像对照）。

## Gotchas

- 依赖并 peer `@uni-helper/uni-app-types`（workspace），事件基类等从那边来。
- tsdown 入口只有 `src/index.ts`；`build:done` 钩子会删除 `dist/index.cjs` / `index.mjs`。
- 属性 / 事件以 uni-ui 官方文档为唯一真源（见根 CONTRIBUTING.md）。
