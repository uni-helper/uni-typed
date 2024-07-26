import type { Component } from "@uni-helper/uni-app-types";

/**
 * 折叠面板标题分隔线
 *
 * auto 分隔线自动显示
 *
 * none 不显示分隔线
 *
 * show 一直显示分隔线
 */
type _UniCollapseItemTitleBorder = "auto" | "none" | "show";

type _UniCollapseItemProps = Partial<{
  /** 标题文字 */
  title: string;
  /** 标题左侧缩略图 */
  thumb: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否展开面板
   *
   * 不要和 uni-collapse value / v-model 一起使用
   *
   * 默认为 false
   */
  open: boolean;
  /**
   * 是否开启动画
   *
   * 默认为 false
   */
  showAnimation: boolean;
  /**
   * 是否显示分隔线
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 折叠面板标题分隔线
   *
   * auto 分隔线自动显示
   *
   * none 不显示分隔线
   *
   * show 一直显示分隔线
   *
   * 默认为 auto
   */
  titleBorder: _UniCollapseItemTitleBorder;
  /**
   * 是否显示右侧箭头
   *
   * 默认为 true
   */
  showArrow: boolean;
}>;

type _UniCollapseItem = Component<_UniCollapseItemProps>;

interface _UniCollapseItemInstance extends InstanceType<_UniCollapseItem>{};;

export type {
  _UniCollapseItemTitleBorder as UniCollapseItemTitleBorder,
  _UniCollapseItemProps as UniCollapseItemProps,
  _UniCollapseItem as UniCollapseItem,
  _UniCollapseItemInstance as UniCollapseItemInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 折叠面板标题分隔线
     *
     * auto 分隔线自动显示
     *
     * none 不显示分隔线
     *
     * show 一直显示分隔线
     */
    export type UniCollapseItemTitleBorder = _UniCollapseItemTitleBorder;
    export type UniCollapseItemProps = _UniCollapseItemProps;
    export type UniCollapseItem = _UniCollapseItem;
    export type UniCollapseItemInstance = _UniCollapseItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UniCollapseItem: _UniCollapseItem;
  }
}
