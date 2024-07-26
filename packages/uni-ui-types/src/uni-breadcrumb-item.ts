import type { Component } from "@uni-helper/uni-app-types";

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

type _UniBreadcrumbItem = Component<_UniBreadcrumbItemProps>;

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
    UniBreadcrumbItem: _UniBreadcrumbItem;
  }
}
