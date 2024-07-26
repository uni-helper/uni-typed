import type { Component } from "@uni-helper/uni-app-types";

/** 评分 */
type _UniRateValue = number;

interface _UniRateOnChangeEvent {
  value: _UniRateValue;
}

/** 值改变时触发 */
type _UniRateOnChange = (event: _UniRateOnChangeEvent) => void;

/** 评分组件属性 */
type _UniRateProps = Partial<{
  /**
   * 当前评分
   *
   * 默认为 0
   */
  value: _UniRateValue;
  /**
   * 未选中状态的星星颜色
   *
   * 默认为 #ececec
   */
  color: string;
  /**
   * 选中状态的星星颜色
   *
   * 默认为 #ffca3e
   */
  activeColor: string;
  /**
   * 禁用状态的星星颜色
   *
   * 默认为 #c0c0c0
   */
  disabledColor: string;
  /**
   * 星星的大小
   *
   * 如果传入 number 默认使用 px
   *
   * 可传入其他自定义单位的宽度值
   *
   * 默认为 24
   */
  size: number | string;
  /**
   * 最大评分评分数量
   *
   * 默认为 5
   */
  max: number;
  /**
   * 星星的间距
   *
   * 单位为 px
   *
   * 默认为 0
   */
  margin: number | string;
  /**
   * 是否显示实心星星
   *
   * 默认为 true
   */
  isFill: boolean;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否为只读状态
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 是否展示半星
   *
   * 默认为 false
   */
  allowHalf: boolean;
  /**
   * 是否支持滑动手势
   *
   * 默认为 true
   */
  touchable: boolean;
  /** 值改变时触发 */
  onChange: _UniRateOnChange;
}>;

/** 评分组件，多用于购买商品后，对商品进行评价等场景 */
type _UniRate = Component<_UniRateProps>;

/** 评分组件实例 */
interface _UniRateInstance extends InstanceType<_UniRate>{};;

export type {
  _UniRateValue as UniRateValue,
  _UniRateOnChangeEvent as UniRateOnChangeEvent,
  _UniRateOnChange as UniRateOnChange,
  _UniRateProps as UniRateProps,
  _UniRate as UniRate,
  _UniRateInstance as UniRateInstance,
};

declare global {
  namespace UniHelper {
    /** 评分 */
    export type UniRateValue = _UniRateValue;
    export type UniRateOnChangeEvent = _UniRateOnChangeEvent;
    /** 值改变时触发 */
    export interface UniRateOnChange extends _UniRateOnChange {}
    /** 评分组件属性 */
    export type UniRateProps = _UniRateProps;
    /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
    export type UniRate = _UniRate;
    /** 评分组件实例 */
    export type UniRateInstance = _UniRateInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
    UniRate: _UniRate;
  }
}
