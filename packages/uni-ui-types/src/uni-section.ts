import type { Component } from "@uni-helper/uni-app-types";

/**
 * 装饰类型
 *
 * line 竖线
 *
 * circle 圆形
 *
 * square 方形
 */
type _UniSectionType = "line" | "circle" | "square";

/** 点击时触发 */
type _UniSectionOnClick = () => void;

/** 标题栏属性 */
type _UniSectionProps = Partial<{
  /**
   * 装饰类型
   *
   * line 竖线
   *
   * circle 圆形
   *
   * square 方形
   */
  type: _UniSectionType;
  /** 主标题 */
  title: string;
  /**
   * 主标题字体大小
   *
   * 默认为 14px
   */
  titleFontSize: string;
  /**
   * 主标题字体颜色
   *
   * 默认为 #333
   */
  titleColor: string;
  /** 副标题 */
  subTitle: string;
  /**
   * 主标题字体大小
   *
   * 默认为 12px
   */
  subTitleFontSize: string;
  /**
   * 主标题字体颜色
   *
   * 默认为 #999
   */
  subTitleColor: string;
  /**
   * 默认插槽的 padding 值
   *
   * string 自定义的 padding 值
   *
   * true 10px
   *
   * 默认为 false，表示不设置 padding 值
   */
  padding: boolean | string;
  /** 点击时触发 */
  onClick: _UniSectionOnClick;
}>;

/** 标题栏 */
type _UniSection = Component<_UniSectionProps>;

interface _UniSectionInstance extends InstanceType<_UniSection>{};;

export type {
  _UniSectionType as UniSectionType,
  _UniSectionOnClick as UniSectionOnClick,
  _UniSectionProps as UniSectionProps,
  _UniSection as UniSection,
  _UniSectionInstance as UniSectionInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 装饰类型
     *
     * line 竖线
     *
     * circle 圆形
     *
     * square 方形
     */
    export type UniSectionType = _UniSectionType;
    /** 点击时触发 */
    export interface UniSectionOnClick extends _UniSectionOnClick {}
    /** 标题栏属性 */
    export type UniSectionProps = _UniSectionProps;
    /** 标题栏 */
    export type UniSection = _UniSection;
    export type UniSectionInstance = _UniSectionInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UniSection: _UniSection;
  }
}
