import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@uni-helper/uni-typed",
  description: "为 uni-app 打造的 TypeScript 支持项目",
  head: [
    // icon
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { name: "og:type", content: "website" }],
    // Open Graph
    ["meta", { name: "og:locale", content: "zh-cn" }],
    ["meta", { name: "og:site_name", content: "@uni-helper/uni-typed" }],
    [
      "meta",
      {
        name: "og:image",
        content:
          "https://github.com/uni-helper/website/raw/main/.github/assets/uni-helper-banner.png",
      },
    ],
    // Google Analytics
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-C9FNSD07XV",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C9FNSD07XV');`,
    ],
  ],
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },
    nav: [
      { text: "指南", link: "/guide/getting-started", activeMatch: "/guide/" },
      {
        text: "资源",
        items: [
          {
            text: "更新日志",
            link: "https://github.com/uni-helper/uni-typed/tree/main/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "为什么？", link: "/guide/why" },
          { text: "起步", link: "/guide/getting-started" },
          { text: "uni-app-types", link: "/guide/uni-app-types" },
          { text: "uni-cloud-types", link: "/guide/uni-cloud-types" },
          { text: "uni-ui-types", link: "/guide/uni-ui-types" },
          { text: "uni-types", link: "/guide/uni-types" },
          { text: "uni-app-components", link: "/guide/uni-app-components" },
          { text: "uni-cloud-components", link: "/guide/uni-cloud-components" },
          { text: "uni-ui-components", link: "/guide/uni-ui-components" },
          { text: "uni-components", link: "/guide/uni-components" },
        ],
      },
      {
        text: "其它",
        items: [
          { text: "常见问题", link: "/other/faq" },
          { text: "从 v0 迁移到 v1", link: "/other/migrate-v0-to-v1" },
        ],
      },
    ],
    outline: "deep",
    editLink: {
      pattern: "https://github.com/uni-helper/uni-typed/edit/main/docs/:path",
    },
    lastUpdated: {},
    socialLinks: [
      { icon: "github", link: "https://github.com/uni-helper/uni-typed" },
    ],
    search: {
      provider: "local",
    },
  },
});
