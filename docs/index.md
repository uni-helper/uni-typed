---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "@uni-helper/typed"
  tagline: "为 uni-app 打造的 TypeScript 支持库"
  actions:
    - theme: brand
      text: 介绍 →
      link: /guide/introduction
  image:
    src: /logo.png
    alt: Uni Helper
features:
  - title: "@uni-helper/uni-app-types"
    details: 为 Vue v3 uni-app 组件提供 TypeScript 类型
    link: /guide/uni-app-types
  - title: "@uni-helper/uni-cloud-types"
    details: 为 Vue v3 uni-cloud 组件提供 TypeScript 类型
    link: /guide/uni-cloud-types
  - title: "@uni-helper/uni-ui-types"
    details: 为 Vue v3 uni-ui 组件提供 TypeScript 类型
    link: /guide/uni-ui-types
  - title: "@uni-helper/uni-types"
    details: 前三者的集合
    link: /guide/uni-types
  - title: "@uni-helper/uni-app-components"
    details: 基于 @uni-helper/uni-app-types 封装 Vue v3 uni-app 组件
    link: /guide/uni-app-components
  - title: "@uni-helper/uni-cloud-components"
    details: 基于 @uni-helper/uni-cloud-types 封装 Vue v3 uni-cloud 组件
    link: /guide/uni-cloud-components
  - title: "@uni-helper/uni-ui-components"
    details: 基于 @uni-helper/uni-ui-types 封装 Vue v3 uni-ui 组件
    link: /guide/uni-ui-components
  - title: "@uni-helper/uni-components"
    details: 前三者的集合
    link: /guide/uni-components
---

<!-- markdownlint-disable -->
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    315deg,
    #42d392 25%,
    #647eff
  );
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #41b88380 30%,
    #35495e80
  );
  --vp-home-hero-image-filter: blur(30px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
<!-- markdownlint-disable -->
