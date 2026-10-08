# uni-app-types

为 Vue v3 uni-app 组件提供 TypeScript 类型，只发类型不发 JS。根仓库约定见 [../../AGENTS.md](../../AGENTS.md)，本文件只记本包差异。

## Entry points

- `.` → `dist/index.d.mts` / `dist/index.d.cts`（types-only，无 `default` 条件）
- `./volar-plugin` → 把 `block` / `component` / `template` / `slot` 标记为原生标签，vue-tsc 才能正确解析 uni-app 模板

## Layout

- `src/<域>/<组件>.ts` 一文件一组件；`common.ts` 的 `CommonProps`（id / hidden / class / style + `data-*` 索引签名）是所有组件 Props 的底座，事件基类在 `events/`。
- `test/` 与 `src/` 的域目录镜像，`*.test-d.ts` 用 `expectTypeOf` 断言，每个导出类型都要和 `UniHelper.*` 全局镜像 `toEqualTypeOf` 对照。

## Gotchas

- tsdown 入口是 `src/index.ts` + `src/volar-plugin.ts`；`build:done` 钩子会删除 `dist/index.cjs` / `index.mjs`。
- peer 依赖 `typescript ^5||^6` 与 `vue ^3.0.0`。新增或修改类型先对齐官方文档，规则见根 CONTRIBUTING.md「类型文件编写规范」。
