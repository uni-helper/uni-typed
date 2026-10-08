# 贡献指南

非常欢迎参与贡献！本指南说明项目结构、本地开发流程、测试方式和提交规范。

## 前置条件

- Node.js 26（版本锁定见 `.node-version` 与 `package.json` 的 `devEngines.runtime` 字段）
- pnpm 12.10.1（版本锁定见 `package.json` 的 `packageManager` 与 `devEngines.packageManager` 字段）
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
└── .github/                  # CI 与发布工作流
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 以 tsdown watch 模式并行构建所有子包产物，便于在 playground 中联调 |
| `pnpm build` | 构建所有子包产物 |
| `pnpm test` | 运行类型测试（基于 vitest，用例位于各子包 `test/*.test-d.ts`） |
| `pnpm typecheck` | 运行 vue-tsc 类型检查 |
| `pnpm check` | biome 检查格式与 lint，只读不写回 |
| `pnpm fix` | biome 自动修复格式与可安全修复的 lint（会写回文件） |
| `pnpm docs:dev` | 本地启动文档站点 |
| `pnpm play:h5` | 以 watch 模式构建子包，并启动 playground 的 H5 开发服务 |
| `pnpm play:mp-weixin` | 以 watch 模式构建子包，并启动 playground 的微信小程序开发服务 |

## 测试与检查

提交前依次运行：

```bash
pnpm fix         # 先写回格式化
pnpm test        # 类型测试
pnpm typecheck   # vue-tsc 类型检查
pnpm check       # biome 只读检查，确认无遗留问题
```

新增或修改类型时，需在各子包 `test/` 目录同步补充或更新对应的 `*.test-d.ts` 用例。

## 类型文件编写规范

每个组件类型文件遵循统一的骨架，新增组件或属性时请严格对齐既有风格：

1. **私有类型用下划线前缀**：内部类型以 `_` 开头（如 `type _UniFooProps`），随后通过同名导出别名对外暴露（如 `_UniFooProps as UniFooProps`）。
2. **三段式声明**：每个组件需同时声明：
   - 局部 `export type { ... }` 导出
   - 全局 `declare global { namespace UniHelper { ... } }`，便于在引入包后直接使用 `UniHelper.UniFooProps`
   - Vue 组件增强 `declare module "vue" { interface GlobalComponents { ... } }`，并附带组件文档与说明链接
3. **事件用 `on*` 命名**：对应模板中的 `@xxx` 事件，如 `@change` → `onChange`；事件载荷类型命名为 `OnXxxEvent`/`OnXxxDetail`。
4. **JSDoc 注释**：每个属性标注用途；带默认值的属性用 `默认为 xxx` 注明；枚举类型逐项列出可选值与含义。注释使用中文，与既有文件保持一致。
5. **官方文档为唯一真源**：属性/事件/枚举值需与官方文档对齐：
   - uni-app 组件：<https://uniapp.dcloud.net.cn/component/>
   - uni-ui 组件：<https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html>
   - uniCloud 组件：<https://doc.dcloud.net.cn/uniCloud/unicloud-db.html>
6. **不引入已废弃 API**：官方标注「已废弃/即将废弃」的属性原则上不新增，避免增加未来维护负担。
7. **属性顺序**：同一 `Partial<{...}>` 内，普通属性在前、事件（`on*`）在后；导出顺序由 `pnpm fix` 自动整理，无需手动排序。

## 同步官方文档

当官方文档新增或修正属性/事件时，按如下步骤同步：

1. 以官方文档原始 HTML 为准进行核对（属性表、事件表、可选值）。
2. 在对应 `src/<component>.ts` 补充缺失项或修正类型，并补全 JSDoc。
3. 必要时在 `docs/other/` 下记录本次同步范围。
4. 运行 `pnpm fix` 修正格式，再运行 `pnpm test` 验证。

## 提交规范

1. Fork 仓库并新建分支，分支名语义化（如 `fix/switch-type`、`feat/add-countdown-showhour`）。
2. 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)，如 `fix(uni-app-types): correct switch type enum`。

## Pull Request 指南

- 一个 PR 只解决一个问题，聚焦改动范围。
- 描述改动内容，并附对应的官方文档链接。
- 涉及类型变更时，同步更新测试用例与文档站。
- CI 会在 Ubuntu / macOS / Windows × Node 22 / 24 / 26 上运行 `build`、`check`、`typecheck`，需全部通过。

## 发布

维护者操作：在 `main` 分支运行 `pnpm release`（lerna-lite 根据 Conventional Commits 确定版本并生成 tag），推送 tag 后 Release 工作流会用 changelogithub 创建 GitHub Release，并将所有子包发布到 npm。

## 行为准则

参与本项目请遵守 [组织行为准则](https://github.com/uni-helper/.github/blob/main/CODE_OF_CONDUCT.md)。

有疑问请到 [GitHub Issues](https://github.com/uni-helper/uni-typed/issues) 提问。
