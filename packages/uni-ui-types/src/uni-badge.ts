import type { AnyRecord, Component } from "@uni-helper/uni-app-types";

/**
 * 角标颜色类型
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
 */
type _UniBadgeType = "default" | "primary" | "success" | "warning" | "error";

/**
 * 角标大小
 *
 * normal 正常
 *
 * small 小
 */
type _UniBadgeSize = "normal" | "small";

/** 自定义样式 */
type _UniBadgeCustomStyle = AnyRecord;

/**
 * 开启绝对定位，角标将定位到其包裹的标签的四个角上
 *
 * rightTop 右上角
 *
 * rightBottom 右下角
 *
 * leftBottom 左下角
 *
 * leftTop 左上角
 */
type _UniBadgeAbsolute = "rightTop" | "rightBottom" | "leftBottom" | "leftTop";

/** 点击事件 */
type _UniBadgeOnClick = () => void;

/** 数字角标属性 */
type _UniBadgeProps = Partial<{
  /** 角标内容 */
  text: string;
  /**
   * 角标颜色类型
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
   * 默认为 error
   */
  type: _UniBadgeType;
  /**
   * 角标大小
   *
   * normal 正常
   *
   * small 小
   *
   * 默认为 normal
   */
  size: _UniBadgeSize;
  /**
   * 是否只展示一个点不展示内容
   *
   * 默认为 false
   */
  isDot: boolean;
  /**
   * 展示封顶的数字值，超过后显示 封顶数字+
   *
   * 默认为 99
   */
  maxNum: number;
  /** 自定义样式 */
  customStyle: _UniBadgeCustomStyle;
  /**
   * 是否无需背景颜色
   *
   * true 背景颜色将变为文字的字体颜色
   *
   * false 正常显示
   *
   * 默认为 false
   */
  inverted: boolean;
  /**
   * 开启绝对定位，角标将定位到其包裹的标签的四个角上
   *
   * rightTop 右上角
   *
   * rightBottom 右下角
   *
   * leftBottom 左下角
   *
   * leftTop 左上角
   */
  absolute: _UniBadgeAbsolute;
  /**
   * 距定位角中心点的偏移量
   *
   * -10, -10 表示向 absolute 指定的方向偏移 10px
   *
   * 10, 10 表示向 absolute 指定的反方向偏移 10px
   *
   * 与 absolute 一一对应
   *
   * 存在 absolute 属性时有效
   *
   * 单位为 px
   *
   * 默认为 [0, 0]
   */
  offset: [number, number];
  /** 点击事件 */
  onClick: _UniBadgeOnClick;
}>;

/**
 * 数字角标
 *
 * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
 */
type _UniBadge = Component<_UniBadgeProps>;

/** 数字角标实例 */
type _UniBadgeInstance = InstanceType<_UniBadge>;

export type {
  _UniBadgeType as UniBadgeType,
  _UniBadgeSize as UniBadgeSize,
  _UniBadgeCustomStyle as UniBadgeCustomStyle,
  _UniBadgeAbsolute as UniBadgeAbsolute,
  _UniBadgeOnClick as UniBadgeOnClick,
  _UniBadgeProps as UniBadgeProps,
  _UniBadge as UniBadge,
  _UniBadgeInstance as UniBadgeInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 角标颜色类型
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
     */
    export type UniBadgeType = _UniBadgeType;
    /**
     * 角标大小
     *
     * normal 正常
     *
     * small 小
     */
    export type UniBadgeSize = _UniBadgeSize;
    /** 自定义样式 */
    export type UniBadgeCustomStyle = _UniBadgeCustomStyle;
    /**
     * 开启绝对定位，角标将定位到其包裹的标签的四个角上
     *
     * rightTop 右上角
     *
     * rightBottom 右下角
     *
     * leftBottom 左下角
     *
     * leftTop 左上角
     */
    export type UniBadgeAbsolute = _UniBadgeAbsolute;
    /** 点击事件 */
    export interface UniBadgeOnClick extends _UniBadgeOnClick {}
    /** 数字角标属性 */
    export type UniBadgeProps = _UniBadgeProps;
    /**
     * 数字角标
     *
     * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
     */
    export type UniBadge = _UniBadge;
    /** 数字角标实例 */
    export type UniBadgeInstance = _UniBadgeInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 数字角标
     *
     * 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
     */
    UniBadge: _UniBadge;
  }
}
