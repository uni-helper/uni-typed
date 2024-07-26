import type { Component } from "@uni-helper/uni-app-types";

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
type _UniBreadcrumb = Component<_UniBreadcrumbProps>;

/** 面包屑实例 */
interface _UniBreadcrumbInstance extends InstanceType<_UniBreadcrumb>{};;

export type {
  _UniBreadcrumbProps as UniBreadcrumbProps,
  _UniBreadcrumb as UniBreadcrumb,
  _UniBreadcrumbInstance as UniBreadcrumbInstance,
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
     */
    UniBreadcrumb: _UniBreadcrumb;
  }
}
