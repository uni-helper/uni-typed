# 贡献指南

欢迎参与贡献。本指南说明项目结构、本地开发流程、测试方式、类型文件规范和提交规范。

## 前置条件

- Node.js 26（见 `.node-version` 与 `package.json` 的 `devEngines.runtime`）
- pnpm 12.16.1（见 `package.json` 的 `packageManager` 与 `devEngines.packageManager`）
- [biome](https://biomejs.dev/) 负责格式化与 lint（配置见 `biome.json`）

```bash
pnpm install
```

## 仓库结构

```
.
├── docs/                     # VitePress 文档站
├── playground/               # uni-app 示例工程，用于本地联调
├── packages/
│   ├── uni-app-types/        # 为 uni-app 组件提供 TypeScript 类型
│   ├── uni-cloud-types/      # 为 uni-cloud 组件提供 TypeScript 类型
│   ├── uni-ui-types/         # 为 uni-ui 组件提供 TypeScript 类型
│   ├── uni-types/            # 以上三者类型的集合
│   ├── uni-app-components/   # 基于 uni-app-types 封装的 uni-app 组件
│   ├── uni-cloud-components/ # 基于 uni-cloud-types 封装的 uni-cloud 组件
│   ├── uni-ui-components/    # 基于 uni-ui-types 封装的 uni-ui 组件
│   └── uni-components/       # 以上三者组件的集合
├── .agents/skills/           # 面向 AI 助手的技能说明
└── .github/                  # CI 与发布工作流
```

根 `tsconfig.json` 的 `paths` 把所有 `@uni-helper/*` 指向 `packages/*/src`，所以类型检查和测试跑的是源码而不是构建产物。

## 常用命令

| 命令                  | 说明                                                                         |
| --------------------- | ---------------------------------------------------------------------------- |
| `pnpm dev`            | 以 tsdown watch 模式并行构建所有子包产物，便于在 playground 中联调           |
| `pnpm build`          | 清空 `packages/*/dist` 后构建所有子包                                        |
| `pnpm test`           | 运行类型测试（基于 vitest `--typecheck`，用例位于各子包 `test/*.test-d.ts`） |
| `pnpm typecheck`      | 运行 vue-tsc 类型检查                                                        |
| `pnpm check`          | biome 检查格式与 lint，只读不写回                                            |
| `pnpm fix`            | biome 自动修复格式与可安全修复的 lint（会写回文件）                          |
| `pnpm docs:dev`       | 本地启动文档站点                                                             |
| `pnpm play:h5`        | 以 watch 模式构建子包，并启动 playground 的 H5 开发服务                      |
| `pnpm play:mp-weixin` | 以 watch 模式构建子包，并启动 playground 的微信小程序开发服务                |

## 测试与检查

提交前依次运行：

```bash
pnpm test        # 类型测试
pnpm typecheck   # vue-tsc 类型检查
pnpm check       # biome 只读检查
```

`pnpm test` 是唯一校验类型定义的关口。每个组件类型文件在 `test/` 下有同名用例，断言导出的类型与 `UniHelper.*` 全局镜像一致。CI 目前只跑 build / check / typecheck，Test 步骤被注释掉，本地不跑就没人跑。

如果 `pnpm check` 报的是你没碰过的文件（`README.md`、各 `CHANGELOG.md`、`pnpm-workspace.yaml`、`playground/src/uni.scss`），那是这些文件早于当前 biome 版本格式化留下的差异，和你的改动无关，可以不管。

`pnpm fix` 会重排导入和导出顺序，也常顺手改动你不想动的文件。发现多余的改动就 `git checkout -- <path>` 退掉。`docs/index.md` 的 frontmatter 已在 `biome.json` 里关掉格式化，那条 override 别删。

## 类型文件编写规范

每个组件类型文件遵循统一骨架，新增组件或属性时严格对齐既有风格：

1. **私有类型用下划线前缀**：内部类型以 `_` 开头（如 `type _UniFooProps`），随后通过别名导出对外暴露（`_UniFooProps as UniFooProps`）。
2. **四段声明**：每个组件类型文件依次包含
   - `_` 前缀私有类型，含组件类型（`DefineComponent<...>`）和实例类型（`InstanceType<...>`）
   - `export type { ... }` 别名导出
   - 全局 `declare global { namespace UniHelper { ... } }`，引入包后可直接使用 `UniHelper.UniFooProps`
   - Vue 组件增强 `declare module "vue" { interface GlobalComponents { ... } }`，注释里带组件说明和官方文档链接
3. **旧版 JSX 增强按需补**：14 个文件额外带有 `declare global { namespace JSX }`、`declare module "vue/jsx-runtime"`、`declare module "vue" { IntrinsicElementAttributes }` 三段，分别对应 Vue 3.0 到 3.3、3.3 到 3.4、3.4+。只有确认需要支持旧版 JSX 时才照抄，不要批量补齐。
4. **事件用 `on*` 命名**：对应模板里的 `@xxx`，如 `@change` → `onChange`；载荷类型命名为 `OnXxxEvent` / `OnXxxDetail`。
5. **JSDoc**：每个属性标注用途；有默认值的统一写 `默认为 xxx`；枚举类型逐项列出可选值与含义。注释使用中文，与既有文件保持一致。
6. **官方文档为真源**：属性和事件对齐官方文档。
   - uni-app 组件：<https://uniapp.dcloud.net.cn/component/>
   - uni-ui 组件：<https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html>，其中默认值再对一遍 `@dcloudio/uni-ui` 源码
   - uniCloud 组件：<https://doc.dcloud.net.cn/uniCloud/unicloud-db.html>
7. **不引入已废弃的 API**：官方标注「已废弃」的属性不加，避免增加维护负担。已有属性先留着，删掉是破坏性变更。
8. **属性顺序**：同一 `Partial<{...}>` 内普通属性在前、事件（`on*`）在后；导出顺序交给 `pnpm fix`。

## 同步官方文档

`@dcloudio/uni-app` 和 `@dcloudio/uni-ui` 会随版本更新组件属性，本仓库需要跟着同步。完整流程写在 `.agents/skills/bump-types/SKILL.md`，要点是：

1. 打开对应组件的官方文档页面，取「属性说明」表格。
2. 逐项核对属性名、类型、默认值、枚举值、事件，改动落到 `packages/uni-*-types/src/`。
3. 官方文档和 uni-ui 组件源码冲突时，默认值以源码为准，其余以文档为准。
4. 在 `test/` 补上对应用例，跑 `pnpm test`。

## 提交规范

1. Fork 仓库并新建分支，分支名语义化（如 `fix/switch-type`、`feat/add-countdown-showhour`）。
2. 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)，如 `fix(uni-app-types): correct switch type enum`。

## Pull Request

- 一个 PR 只解决一个问题，聚焦改动范围。
- 描述改动内容，并附对应的官方文档链接。
- 涉及类型变更时，同步更新测试用例与文档站。
- CI 会在 Ubuntu / macOS / Windows × Node 22 / 24 / 26 上运行 `build`、`check`、`typecheck`，需全部通过。

## 发布

维护者操作：在 `main` 分支运行 `pnpm release`（lerna-lite 根据 Conventional Commits 确定版本并打 tag），推送 tag 后 Release 工作流用 changelogithub 创建 GitHub Release，并把所有子包发布到 npm。

## 行为准则

参与本项目请遵守 [组织行为准则](https://github.com/uni-helper/.github/blob/main/CODE_OF_CONDUCT.md)。

有疑问请到 [GitHub Issues](https://github.com/uni-helper/uni-typed/issues) 提问。
