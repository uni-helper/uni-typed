# uni-typed

为 uni-app 生态提供 TypeScript 类型的 monorepo。三个类型包（uni-app / uni-cloud / uni-ui 组件）用 `declare global { namespace UniHelper }` 和 `declare module "vue" { GlobalComponents }` 把类型注入全局，装包后模板里的组件标签就有类型提示。三个组件包把类型包里的 props 接到真实 Vue SFC 上，另外两个包是它们的集合。

## Project

- 语言：TypeScript（strict，`moduleResolution: "Bundler"`）。根 `tsconfig.json` 的 `paths` 把所有 `@uni-helper/*` 映射到 `packages/*/src`，类型检查和测试都针对源码，不针对 `dist`。
- 运行时：Node 26，只约束开发环境（`.node-version` 与根及各包 `package.json` 的 `devEngines`）。CI 另外跑 Node 22 / 24。
- 包管理器：pnpm 12.16.1（`packageManager` 字段锁定）。依赖版本集中在 `pnpm-workspace.yaml` 的 `catalog`，各包一律写 `catalog:`；`@dcloudio/*` 钉在 `3.0.0-5000720260410001`。
- 工具链：tsdown 构建、vitest `--typecheck` 跑类型测试、biome 格式化与 lint、vue-tsc 类型检查、@lerna-lite/version 发版。
- 工作区：`packages/*` 8 个发布包（均为 `@uni-helper/*`，`sideEffects: false`）+ `docs`（VitePress 文档站）+ `playground`（uni-app 示例工程）。
- peer 依赖：类型包 peer `typescript ^5||^6` 与 `vue ^3.0.0`；组件包对自身依赖的类型包同时 dep + peer（`vue ^3.4.21`）。

## Commands

```bash
pnpm dev          # 各包 tsdown --watch 并行，产物写进 dist/
pnpm build        # rimraf 清空 packages/*/dist 后按拓扑构建，再跑各包 build-post（目前是 exit 0 占位）
pnpm test         # vitest run --typecheck，跑全部 *.test-d.ts
pnpm typecheck    # vue-tsc --noEmit
pnpm check        # biome 只读检查（CI 同款）
pnpm fix          # biome 写回修复，含 import / 导出排序
pnpm docs:dev     # 本地文档站
pnpm release      # lerna-lite version：main 分支按 conventional commits 定版本打 tag，push 后 release.yml 发 npm
```

## Architecture

| 模块                            | 职责                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/uni-app-types`        | uni-app 组件类型，48 个组件。`src/<域>/` 一目录一域：ad、basic-components、canvas、events、form-components、map、media-components、navigation、page-property-configuration-node、view-containers、web-view；`common.ts` 放 `CommonProps`，`events/` 放事件基类；另带 `volar-plugin` 入口 |
| `packages/uni-cloud-types`      | uni-cloud 组件类型，目前只有 `unicloud-db`                                                                                                                                                                                                                                               |
| `packages/uni-ui-types`         | uni-ui 组件类型，60 个组件，`src/uni-<组件>.ts` 平铺                                                                                                                                                                                                                                     |
| `packages/uni-types`            | 三个类型包的 `export type *` 集合，并转发 volar-plugin                                                                                                                                                                                                                                   |
| `packages/uni-app-components`   | uni-app 组件的 Vue SFC 薄封装，48 个组件，入口 default export 一个 install 插件                                                                                                                                                                                                          |
| `packages/uni-cloud-components` | 同上，只有 `unicloud-db`                                                                                                                                                                                                                                                                 |
| `packages/uni-ui-components`    | 同上，60 个 uni-ui 组件                                                                                                                                                                                                                                                                  |
| `packages/uni-components`       | 三个组件包的 `export *` 集合 + install 插件，自己没有 .vue                                                                                                                                                                                                                               |
| `docs`                          | VitePress 中文文档站，每包一页指南                                                                                                                                                                                                                                                       |
| `playground`                    | uni-app 示例工程，全平台 dev / build 脚本，经 exports map 解析到各包 `dist/`                                                                                                                                                                                                             |

`uni-app` 的 `canvas`、`map`、`web-view` 各有独立域目录但只有一个 `index.ts`，组件定义直接写在里面，没有单独的 `src/<域>/<组件>.ts`。

### 类型文件骨架

每个组件类型文件（共 109 个）固定四段：

1. `_` 前缀私有类型，`_ScrollViewProps = CommonProps & Partial<{...}>`，普通属性在前、`on*` 事件在后。
2. `export type { _ScrollView as ScrollView, ... }` 别名导出。
3. `declare global { namespace UniHelper }` 全局镜像。
4. `declare module "vue" { GlobalComponents }` 组件注册，注释里带官方文档链接。

其中 14 个文件额外携带三段旧版 JSX 增强：`declare global { namespace JSX }`（Vue 3.0 到 3.3）、`declare module "vue/jsx-runtime"`（3.3 到 3.4）、`declare module "vue" { IntrinsicElementAttributes }`（3.4+）。只在新文件确实需要时照抄，别顺手补到别的文件里。

事件载荷命名为 `OnXxxEvent` / `OnXxxDetail`。JSDoc 用中文，默认值统一写 `默认为 xxx`。

### 组件封装模式

每个组件一个目录：`<name>.vue`（`<script setup lang="ts">` + `defineOptions({ name })` + `defineProps<XxxProps>()`，模板 `v-bind="props"` + slot，无本地逻辑）+ `index.ts`（默认导出组件，同时命名导出组件与实例类型）。包入口 default export 一个遍历 `Object.keys(components)` 调 `app.component(key, ...)` 的 install 插件，并 `export * from "./components"`。

## 陷阱

- 类型包不发 JS：exports 的 `.` 没有 `default` 条件，tsdown 的 `build:done` 钩子会删掉 `dist/index.cjs` / `index.mjs`。别往类型包里写运行时代码。
- `packages/uni-app-types/src/index.ts` 顶部的 `import type {} from "vue/jsx-runtime";` 不能删。那 14 个文件里的 `declare module "vue/jsx-runtime"` 是模块增强，TypeScript 6 要求目标模块先进入程序，否则 `pnpm test` 报 14 个 TS2664。
- `pnpm fix` 会重排导出顺序和 Markdown 表格对齐，所以它常常顺手改动没碰过的文件。`docs/index.md` 的 frontmatter 已在 `biome.json` 里关掉格式化，去掉这条 override 会让 `pnpm fix` 把 YAML 压平，VitePress 首页直接坏掉。
- 组件包里的 `components.d.ts`（内容 `export type * from "./dist/components";`）和 `shims-vue.d.ts`（`declare module "*.vue";`）是手写提交的单行文件，没有生成脚本，不要当成 unplugin-vue-components 的产物去重新生成。
- playground 经 exports map 解析到 `dist/`，所以 `play:*` / `build:h5` 等根脚本都内置了先 `dev` 或 `build`；直接 `pnpm -C playground dev` 会因 `dist` 缺失而解析失败。
- CI（`.github/workflows/ci.yml`）只跑 build / check / typecheck，Test 步骤被注释掉。`pnpm test` 是唯一校验类型定义的关口，提交前自己跑。
- 根 tsconfig 的 `paths` 指向 `src`，类型测试通过不代表 tsdown 产物没坏；改构建配置时另外跑一次 `pnpm build`。
- uni-app x 和 uni-ui x 没有对应的包，也不该加。那边组件类型由 uni-app x 编译器按 `XxxComponentPublicInstance` 规范产出，没有 tsconfig 或 `.d.ts` 接入点。有人提需求时指向 `docs/other/uni-app-x.md`。
- `CHANGELOG.md` 在 biome 的忽略列表里，因为它是 lerna 生成的，重排后下次发版又会脏。要加新文件到忽略列表时，别顺手把 `docs/index.md` 那条 override 一起删掉。

## Conventions

- biome：space 缩进、双引号、organizeImports 开启；`**/*.vue` 单独放宽（useConst、useImportType、noUnusedVariables 等关闭）；`manifest.json`、`pages.json`、`package.json`、`lerna.json`、`banner.svg` 不参与检查。
- 注释与 JSDoc 一律中文；导出顺序不用手动排，`pnpm fix` 会整理。
- 测试风格：`test/*.test-d.ts`，`describe` + `expectTypeOf`，关键断言是每个导出类型与 `UniHelper.*` 全局镜像做 `toEqualTypeOf` 对照。`UniHelper.*` 能直接用，是因为根 tsconfig include 了全部包源码。
- 同步官方文档走 `.agents/skills/bump-types`，里面写了真源、取数方式和校验命令。
- 提交遵循 Conventional Commits（如 `fix(uni-ui-types): ...`），分支命名 `feat/xxx` / `fix/xxx`，发版只在 `main`。
- 各包差异见对应包目录下的 `AGENTS.md`（就近生效）。
