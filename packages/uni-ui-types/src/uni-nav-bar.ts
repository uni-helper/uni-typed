import type { DefineComponent } from "vue";
import type { UniIconsType } from "./uni-icons";

/** 导航栏属性 */
type _UniNavBarProps = Partial<{
  /** 标题文字 */
  title: string;
  /** 左侧按钮文本 */
  leftText: string;
  /** 右侧按钮文本 */
  rightText: string;
  /** 左侧按钮图标 */
  leftIcon: UniIconsType;
  /** 右侧按钮图标 */
  rightIcon: UniIconsType;
  /**
   * 图标和文字颜色
   *
   * 默认为 #000000
   */
  color: string;
  /**
   * 导航栏背景颜色
   *
   * 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * 是否固定顶部
   *
   * 默认为 false
   */
  fixed: boolean;
  /**
   * 是否包含状态栏
   *
   * 默认为 false
   */
  statusBar: boolean;
  /**
   * 导航栏下是否有阴影
   *
   * 默认为 false
   */
  shadow: boolean;
  /**
   * 导航栏下是否有边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 导航栏高度
   *
   * 如果传入 number 默认使用 px
   *
   * 默认为 44
   */
  height: number | string;
  /**
   * 导航栏是否开启暗黑模式
   *
   * 默认为 false
   */
  dark: boolean;
  /**
   * 导航栏左侧插槽宽度
   *
   * 如果传入 number 默认使用 px
   *
   * 默认为 60
   */
  leftWidth: number | string;
  /**
   * 导航栏右侧插槽宽度
   *
   * 如果传入 number 默认使用 px
   *
   * 默认为 60
   */
  rightWidth: number | string;
  /**
   * 是否开启统计标题功能
   *
   * 默认为 false
   */
  stat: boolean;
}>;

/** 导航栏组件，主要用于头部导航 */
type _UniNavBar = DefineComponent<_UniNavBarProps>;

/** 导航栏组件实例 */
type _UniNavBarInstance = InstanceType<_UniNavBar>;

export type {
  _UniNavBarProps as UniNavBarProps,
  _UniNavBar as UniNavBar,
  _UniNavBarInstance as UniNavBarInstance,
};

declare global {
  namespace UniHelper {
    /** 导航栏属性 */
    export type UniNavBarProps = _UniNavBarProps;
    /** 导航栏组件，主要用于头部导航 */
    export type UniNavBar = _UniNavBar;
    /** 导航栏组件实例 */
    export type UniNavBarInstance = _UniNavBarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 导航栏组件，主要用于头部导航
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniNavBar: _UniNavBar;
  }
}
