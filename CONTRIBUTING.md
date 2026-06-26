# 贡献指南

非常欢迎参与贡献！本指南说明开发流程与类型文件的编写规范。

## 环境要求

- Node.js LTS（建议 20+）
- 包管理器固定为 [pnpm](https://pnpm.io/)（见 `package.json` 的 `packageManager` 字段，使用仓库锁定的版本）
- [biome](https://biomejs.dev/) 负责格式化与 lint

```bash
pnpm install
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 以 stub 模式启动所有子包，便于在 playground 中联调 |
| `pnpm test` | 运行类型测试（基于 vitest + tsd 风格的 `.test-d.ts`） |
| `pnpm check` | biome 自动格式化与可安全修复的 lint（会写回文件） |
| `pnpm lint` | 仅检查，不写回 |
| `pnpm build` | 构建所有子包产物 |
| `pnpm docs:dev` | 本地启动文档站点 |

## 贡献流程

1. Fork 仓库并新建分支，分支名语义化（如 `fix/switch-type`、`feat/add-countdown-showhour`）。
2. 修改/新增类型文件。
3. 新增或更新对应的 `*.test-d.ts` 用例（位于各子包 `test/` 目录）。
4. 运行 `pnpm check` 修正格式，再运行 `pnpm test` 确保通过。
5. 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)，如 `fix(uni-app-types): correct switch type enum`。
6. 发起 Pull Request，描述改动与对应的官方文档链接。

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
7. **属性顺序**：同一 `Partial<{...}>` 内，普通属性在前、事件（`on*`）在后；导出顺序由 `pnpm check` 自动整理，无需手动排序。

## 同步官方文档

当官方文档新增或修正属性/事件时，按如下步骤同步：

1. 以官方文档原始 HTML 为准进行核对（属性表、事件表、可选值）。
2. 在对应 `src/<component>.ts` 补充缺失项或修正类型，并补全 JSDoc。
3. 必要时在 `docs/other/` 下记录本次同步范围。
4. 运行 `pnpm test` 与 `pnpm check` 验证。
