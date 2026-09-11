import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/**
 * 选项的排列方向
 *
 * Vertical 纵向
 *
 * Horizontal 横向
 */
type _CustomTabBarDirection = "vertical" | "horizontal";

interface _CustomTabBarOnTabItemTapDetail {
  /** 被点击 tabItem 的序号，从 0 开始 */
  index: number;
  /** 被点击 tabItem 的页面路径 */
  pagePath: string;
  /** 被点击 tabItem 的按钮文字 */
  text: string;
}

/** 点击事件 */
type _CustomTabBarOnTabItemTap = (
  detail: _CustomTabBarOnTabItemTapDetail,
) => void;

/** 自定义 tabBar 组件属性 */
type _CustomTabBarProps = CommonProps &
  Partial<{
    /**
     * 选项的排列方向
     *
     * Vertical 纵向
     *
     * Horizontal 横向
     *
     * 默认为 horizontal
     */
    direction: _CustomTabBarDirection;
    /**
     * 是否显示 icon
     *
     * 默认为 false
     */
    showIcon: boolean;
    /**
     * 选中的 tabBar 选项索引值
     *
     * 默认为 0
     */
    selected: number;
    /** 点击事件 */
    onOnTabItemTap: _CustomTabBarOnTabItemTap;
  }>;

/** 自定义 tabBar 组件 */
type _CustomTabBar = DefineComponent<_CustomTabBarProps>;

/** 自定义 tabBar 组件实例 */
type _CustomTabBarInstance = InstanceType<_CustomTabBar>;

export type {
  _CustomTabBar as CustomTabBar,
  _CustomTabBarDirection as CustomTabBarDirection,
  _CustomTabBarInstance as CustomTabBarInstance,
  _CustomTabBarOnTabItemTap as CustomTabBarOnTabItemTap,
  _CustomTabBarOnTabItemTapDetail as CustomTabBarOnTabItemTapDetail,
  _CustomTabBarProps as CustomTabBarProps,
};

declare global {
  namespace UniHelper {
    /**
     * 选项的排列方向
     *
     * Vertical 纵向
     *
     * Horizontal 横向
     */
    export type CustomTabBarDirection = _CustomTabBarDirection;
    export interface CustomTabBarOnTabItemTapDetail
      extends _CustomTabBarOnTabItemTapDetail {}
    /** 点击事件 */
    export interface CustomTabBarOnTabItemTap
      extends _CustomTabBarOnTabItemTap {}
    /** 自定义 tabBar 组件属性 */
    export type CustomTabBarProps = _CustomTabBarProps;
    /** 自定义 tabBar 组件 */
    export type CustomTabBar = _CustomTabBar;
    /** 自定义 tabBar 组件实例 */
    export type CustomTabBarInstance = _CustomTabBarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 自定义 tabBar 组件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/custom-tab-bar.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    CustomTabBar: _CustomTabBar;
  }
}
