import type { DefineComponent } from "vue";

/** 指示点的类型 */
type _UniSwiperDotMode = "default" | "round" | "nav" | "indexes";

/** 指示点样式 */
interface _UniSwiperDotDotsStyles {
  /**
   * 指示点宽度
   *
   * mode="nav"、mode="indexes" 时无效
   *
   * 单位为 px
   *
   * 默认为 6
   */
  width?: number;
  /**
   * 指示点高度
   *
   * mode="nav"、mode="indexes" 时无效
   *
   * 单位为 px
   *
   * 默认为 6
   */
  height?: number;
  /**
   * 指示点距 swiper 底部的高度
   *
   * 单位为 px
   *
   * 默认为 10
   */
  bottom?: number;
  /**
   * 指示点前景色
   *
   * mode="nav"、mode="indexes" 时有效
   *
   * 默认为 #ffffff
   */
  color?: string;
  /**
   * 未选择指示点背景色
   *
   * 默认为 rgba(0, 0, 0, 0.3)
   */
  backgroundColor?: string;
  /**
   * 未选择指示点边框样式
   *
   * 默认为 1px rgba(0, 0, 0, 0.3) solid
   */
  border?: string;
  /**
   * 已选择指示点背景色
   *
   * mode="nav" 时无效
   *
   * 默认为 #333333
   */
  selectedBackgroundColor?: string;
  /**
   * 已选择指示点边框样式
   *
   * mode="nav" 时无效
   *
   * 默认为 1px rgba(0, 0, 0, 0.9) solid
   */
  selectedBorder?: string;
}

/** 点击时触发 */
type _UniSwiperDotOnClickItem = (index: number) => void;

/** 轮播图指示点属性 */
type _UniSwiperDotProps = Partial<{
  /**
   * 当前指示点索引
   *
   * 必须是通过 swiper 的 change 事件获取到的 e.detail.current
   *
   * 默认为 0
   */
  current: number;
  /**
   * 指示点类型
   *
   * 默认为 default
   */
  mode: _UniSwiperDotMode;
  /**
   * 显示的内容字段
   *
   * mode="nav" 时有效
   */
  field: string;
  /** 轮播图数据 */
  info: any[];
  /** 指示点样式 */
  dotsStyles: _UniSwiperDotDotsStyles;
  /** 点击时触发 */
  onClickItem: _UniSwiperDotOnClickItem;
}>;

/** 轮播图指示点 */
type _UniSwiperDot = DefineComponent<_UniSwiperDotProps>;

type _UniSwiperDotInstance = InstanceType<_UniSwiperDot>;

export type {
  _UniSwiperDotMode as UniSwiperDotMode,
  _UniSwiperDotDotsStyles as UniSwiperDotDotsStyles,
  _UniSwiperDotOnClickItem as UniSwiperDotOnClickItem,
  _UniSwiperDotProps as UniSwiperDotProps,
  _UniSwiperDot as UniSwiperDot,
  _UniSwiperDotInstance as UniSwiperDotInstance,
};

declare global {
  namespace UniHelper {
    /** 指示点的类型 */
    export type UniSwiperDotMode = _UniSwiperDotMode;
    /** 指示点样式 */
    export interface UniSwiperDotDotsStyles extends _UniSwiperDotDotsStyles {}
    /** 点击时触发 */
    export interface UniSwiperDotOnClickItem extends _UniSwiperDotOnClickItem {}
    /** 轮播图指示点属性 */
    export type UniSwiperDotProps = _UniSwiperDotProps;
    /** 轮播图指示点 */
    export type UniSwiperDot = _UniSwiperDot;
    export type UniSwiperDotInstance = _UniSwiperDotInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 轮播图指示点
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-swiper-dot.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniSwiperDot: _UniSwiperDot;
  }
}
