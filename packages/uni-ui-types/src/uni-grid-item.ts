import type { Component } from "@uni-helper/uni-app-types";

/** 宫格项属性 */
type _UniGridItemProps = Partial<{
  /** 子组件唯一标识 */
  index: number;
}>;

/** 宫格项 */
type _UniGridItem = Component<_UniGridItemProps>;

/** 宫格项实例 */
type _UniGridItemInstance = InstanceType<_UniGridItem>;

export type {
  _UniGridItemProps as UniGridItemProps,
  _UniGridItem as UniGridItem,
  _UniGridItemInstance as UniGridItemInstance,
};

declare global {
  namespace UniHelper {
    /** 宫格项属性 */
    export type UniGridItemProps = _UniGridItemProps;
    /** 宫格项 */
    export type UniGridItem = _UniGridItem;
    /** 宫格项实例 */
    export type UniGridItemInstance = _UniGridItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 宫格项 */
    UniGridItem: _UniGridItem;
  }
}
