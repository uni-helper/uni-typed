import type { DefineComponent } from "vue";

/** 收藏按钮文字 */
interface _UniFavContentText {
  /**
   * 未收藏文字
   *
   * 默认为 收藏
   */
  contentDefault: string;
  /**
   * 已收藏文字
   *
   * 默认为 已收藏
   */
  contentFav: string;
}

/** 点击触发 */
type _UniFavOnClick = () => void;

/** 收藏按钮属性 */
type _UniFavProps = Partial<{
  /**
   * 按钮是否带星
   *
   * 默认为 true
   */
  star: boolean;
  /**
   * 未收藏时背景色
   *
   * 默认为 #eeeeee
   */
  bgColor: string;
  /**
   * 已收藏时背景色
   *
   * 默认为 #007aff
   */
  bgColorChecked: string;
  /**
   * 未收藏时文字颜色
   *
   * 默认为 #666666
   */
  fgColor: string;
  /**
   * 已收藏时文字颜色
   *
   * 默认为 #ffffff
   */
  fgColorChecked: string;
  /**
   * 是否为圆角
   *
   * 默认为 false
   */
  circle: boolean;
  /**
   * 是否为已收藏
   *
   * 默认为 false
   */
  checked: boolean;
  /** 收藏按钮文字 */
  contentText: _UniFavContentText;
  /** 点击触发 */
  onClick: _UniFavOnClick;
}>;

/** 用于收藏功能，可点击切换选中、不选中的状态 */
type _UniFav = DefineComponent<_UniFavProps>;

/** 收藏按钮实例 */
type _UniFavInstance = InstanceType<_UniFav>;

export type {
  _UniFav as UniFav,
  _UniFavContentText as UniFavContentText,
  _UniFavInstance as UniFavInstance,
  _UniFavOnClick as UniFavOnClick,
  _UniFavProps as UniFavProps,
};

declare global {
  namespace UniHelper {
    /** 收藏按钮文字 */
    export interface UniFavContentText extends _UniFavContentText {}
    /** 点击触发 */
    export interface UniFavOnClick extends _UniFavOnClick {}
    export type UniFavProps = _UniFavProps;
    /** 用于收藏功能，可点击切换选中、不选中的状态 */
    export type UniFav = _UniFav;
    export type UniFavInstance = _UniFavInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 用于收藏功能，可点击切换选中、不选中的状态
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-fav.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniFav: _UniFav;
  }
}
