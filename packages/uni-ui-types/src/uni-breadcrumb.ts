import type { DefineComponent } from "vue";

/** 面包屑属性 */
type _UniBreadcrumbProps = Partial<{
  /**
   * 分隔符
   *
   * 默认为 /
   */
  separator: string;
  /** 分隔符类名 */
  separatorClass: string;
}>;

/**
 * 面包屑
 *
 * 显示当前页面的路径，快速返回之前的任意页面
 */
type _UniBreadcrumb = DefineComponent<_UniBreadcrumbProps>;

/** 面包屑实例 */
type _UniBreadcrumbInstance = InstanceType<_UniBreadcrumb>;

export type {
  _UniBreadcrumb as UniBreadcrumb,
  _UniBreadcrumbInstance as UniBreadcrumbInstance,
  _UniBreadcrumbProps as UniBreadcrumbProps,
};

declare global {
  namespace UniHelper {
    /** 面包屑属性 */
    export type UniBreadcrumbProps = _UniBreadcrumbProps;
    /**
     * 面包屑
     *
     * 显示当前页面的路径，快速返回之前的任意页面
     */
    export type UniBreadcrumb = _UniBreadcrumb;
    /** 面包屑实例 */
    export type UniBreadcrumbInstance = _UniBreadcrumbInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 面包屑
     *
     * 显示当前页面的路径，快速返回之前的任意页面
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniBreadcrumb: _UniBreadcrumb;
  }
}
