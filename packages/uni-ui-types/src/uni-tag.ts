import type { DefineComponent } from "vue";

/**
 * 大小尺寸
 *
 * normal 正常
 *
 * small 小
 */
type _UniTagSize = "normal" | "small";

/**
 * 颜色类型
 *
 * default 灰色
 *
 * primary 蓝色
 *
 * success 绿色
 *
 * warning 黄色
 *
 * error 红色
 *
 * royal 紫色
 */
type _UniTagType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "royal";

/** 自定义样式 */
type _UniTagCustomStyle = string;

/** 点击触发 */
type _UniTagOnClick = () => void;

type _UniTagProps = Partial<{
  /** 标签内容 */
  text: string;
  /**
   * 大小尺寸
   *
   * normal 正常
   *
   * small 小
   *
   * 默认为 normal
   */
  size: _UniTagSize;
  /**
   * 颜色类型
   *
   * default 灰色
   *
   * primary 蓝色
   *
   * success 绿色
   *
   * warning 黄色
   *
   * error 红色
   *
   * royal 紫色
   *
   * 默认为 default
   */
  type: _UniTagType;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否无需背景颜色
   *
   * 默认为 false
   */
  inverted: boolean;
  /**
   * 是否为圆角
   *
   * 默认为 false
   */
  circle: boolean;
  /**
   * 是否为标记样式
   *
   * 默认为 false
   */
  mark: boolean;
  /** 自定义样式 */
  customStyle: _UniTagCustomStyle;
  /** 点击触发 */
  onClick: _UniTagOnClick;
}>;

/** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
type _UniTag = DefineComponent<_UniTagProps>;

type _UniTagInstance = InstanceType<_UniTag>;

export type {
  _UniTagSize as UniTagSize,
  _UniTagType as UniTagType,
  _UniTagCustomStyle as UniTagCustomStyle,
  _UniTagOnClick as UniTagOnClick,
  _UniTagProps as UniTagProps,
  _UniTag as UniTag,
  _UniTagInstance as UniTagInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 大小尺寸
     *
     * normal 正常
     *
     * small 小
     */
    export type UniTagSize = _UniTagSize;
    /**
     * 颜色类型
     *
     * default 灰色
     *
     * primary 蓝色
     *
     * success 绿色
     *
     * warning 黄色
     *
     * error 红色
     *
     * royal 紫色
     */
    export type UniTagType = _UniTagType;
    /** 自定义样式 */
    export type UniTagCustomStyle = _UniTagCustomStyle;
    /** 点击触发 */
    export interface UniTagOnClick extends _UniTagOnClick {}
    export type UniTagProps = _UniTagProps;
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    export type UniTag = _UniTag;
    export type UniTagInstance = _UniTagInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-tag.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniTag: _UniTag;
  }
}
