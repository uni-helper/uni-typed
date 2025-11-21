import type { DefineComponent } from "vue";

/**
 * 抽屉滑出位置
 *
 * left 从左侧滑出
 *
 * right 从右侧滑出
 */
type _UniDrawerMode = "left" | "right";

/** 打开抽屉 */
type _UniDrawerOpen = () => void;

/** 关闭抽屉 */
type _UniDrawerClose = () => void;

/** 抽屉状态发生变化时触发 */
type _UniDrawerOnChange = (isDrawerOpen: boolean) => void;

/** 抽屉侧滑菜单属性 */
type _UniDrawerProps = Partial<{
  /**
   * 是否显示遮罩
   *
   * 默认为 true
   */
  mask: boolean;
  /**
   * 点击遮罩是否可以关闭抽屉
   *
   * 默认为 true
   */
  maskClick: boolean;
  /**
   * 抽屉滑出位置
   *
   * left 从左侧滑出
   *
   * right 从右侧滑出
   *
   * 默认为 left
   */
  mode: _UniDrawerMode;
  /**
   * 宽度
   *
   * 单位为 px
   *
   * 默认为 220
   */
  width: number;
  /** 打开抽屉 */
  open: _UniDrawerOpen;
  /** 关闭抽屉 */
  close: _UniDrawerClose;
  /** 抽屉状态发生变化时触发 */
  onChange: _UniDrawerOnChange;
}>;

/** 抽屉侧滑菜单 */
type _UniDrawer = DefineComponent<_UniDrawerProps>;

/** 抽屉侧滑菜单实例 */
type _UniDrawerInstance = InstanceType<_UniDrawer>;

export type {
  _UniDrawerMode as UniDrawerMode,
  _UniDrawerOpen as UniDrawerOpen,
  _UniDrawerClose as UniDrawerClose,
  _UniDrawerOnChange as UniDrawerOnChange,
  _UniDrawerProps as UniDrawerProps,
  _UniDrawer as UniDrawer,
  _UniDrawerInstance as UniDrawerInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 抽屉滑出位置
     *
     * left 从左侧滑出
     *
     * right 从右侧滑出
     */
    export type UniDrawerMode = _UniDrawerMode;
    /** 打开抽屉 */
    export interface UniDrawerOpen extends _UniDrawerOpen {}
    /** 关闭抽屉 */
    export interface UniDrawerClose extends _UniDrawerClose {}
    /** 抽屉状态发生变化时触发 */
    export interface UniDrawerOnChange extends _UniDrawerOnChange {}
    /** 抽屉侧滑菜单属性 */
    export type UniDrawerProps = _UniDrawerProps;
    /** 抽屉侧滑菜单 */
    export type UniDrawer = _UniDrawer;
    /** 抽屉侧滑菜单实例 */
    export type UniDrawerInstance = _UniDrawerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 抽屉侧滑菜单
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-drawer.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniDrawer: _UniDrawer;
  }
}
