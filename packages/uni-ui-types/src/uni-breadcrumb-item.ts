import type { DefineComponent } from "vue";

type _UniBreadcrumbItemProps = Partial<{
  /** 路由跳转页面路径 */
  to: string;
  /**
   * 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
   *
   * 默认为 false
   */
  replace: boolean;
}>;

type _UniBreadcrumbItem = DefineComponent<_UniBreadcrumbItemProps>;

type _UniBreadcrumbItemInstance = InstanceType<_UniBreadcrumbItem>;

export type {
  _UniBreadcrumbItemProps as UniBreadcrumbItemProps,
  _UniBreadcrumbItem as UniBreadcrumbItem,
  _UniBreadcrumbItemInstance as UniBreadcrumbItemInstance,
};

declare global {
  namespace UniHelper {
    export type UniBreadcrumbItemProps = _UniBreadcrumbItemProps;
    export type UniBreadcrumbItem = _UniBreadcrumbItem;
    export type UniBreadcrumbItemInstance = _UniBreadcrumbItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * `<uni-breadcrumb />`子组件，用于展示面包屑的每一项
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniBreadcrumbItem: _UniBreadcrumbItem;
  }
}
