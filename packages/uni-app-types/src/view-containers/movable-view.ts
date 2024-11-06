import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { CustomEvent } from "../events";

/** Movable-view 的移动方向 */
type _MovableViewDirection = "all" | "vertical" | "horizontal" | "none";

/**
 * Movable-view 产生移动的原因
 *
 * Touch 拖动
 *
 * Touch-out-of-bounds 超出移动范围
 *
 * Out-of-bounds 超出移动范围后的回弹
 *
 * Friction 惯性
 *
 * 空字符串 setData
 */
type _MovableViewSource =
  | "touch"
  | "touch-out-of-bounds"
  | "out-of-bounds"
  | "friction"
  | "";

interface _MovableViewOnChangeDetail {
  x: number;
  y: number;
  /**
   * Movable-view 产生移动的原因
   *
   * Touch 拖动
   *
   * Touch-out-of-bounds 超出移动范围
   *
   * Out-of-bounds 超出移动范围后的回弹
   *
   * Friction 惯性
   *
   * 空字符串 setData
   */
  source: _MovableViewSource;
}

type _MovableViewOnChangeEvent = CustomEvent<_MovableViewOnChangeDetail>;

/** 拖动过程中触发 */
type _MovableViewOnChange = (event: _MovableViewOnChangeEvent) => void;

interface _MovableViewOnScaleDetail {
  x: number;
  y: number;
  /**
   * 是否支持双指缩放
   *
   * 默认缩放手势生效区域是在 movable-view 内
   */
  scale: boolean;
}

type _MovableViewOnScaleEvent = CustomEvent<_MovableViewOnScaleDetail>;

/** 缩放过程中触发 */
type _MovableViewOnScale = (event: _MovableViewOnScaleEvent) => void;

/** 可移动的视图容器属性 */
type _MovableViewProps = CommonProps &
  Partial<{
    /**
     * Movable-view 的移动方向
     *
     * 默认为 none
     */
    direction: _MovableViewDirection;
    /**
     * 是否带有惯性
     *
     * 默认为 false
     */
    inertia: boolean;
    /**
     * 超过可移动区域后，是否还可以移动
     *
     * 默认为 false
     */
    outOfBounds: boolean;
    /**
     * 定义 x 轴方向的偏移
     *
     * 如果 x 的值不在可移动范围内，会自动移动到可移动范围
     *
     * 改变 x 的值会触发动画
     */
    x: string | number;
    /**
     * 定义 y 轴方向的偏移
     *
     * 如果 y 的值不在可移动范围内，会自动移动到可移动范围
     *
     * 改变 y 的值会触发动画
     */
    y: string | number;
    /**
     * 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画
     *
     * 值越大移动越快
     *
     * 默认为 20
     */
    damping: number;
    /**
     * 摩擦系数，用于控制惯性滑动的动画
     *
     * 值越大摩擦力越大，滑动越快停止
     *
     * 必须大于 0，否则会被设置成默认值
     *
     * 默认为 2
     */
    friction: number;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 是否支持双指缩放
     *
     * 默认缩放手势生效区域是在 movable-view 内
     *
     * 默认为 false
     */
    scale: boolean;
    /**
     * 定义缩放倍数最小值
     *
     * 默认为 0.5
     */
    scaleMin: number;
    /**
     * 定义缩放倍数最大值
     *
     * 默认为 10
     */
    scaleMax: number;
    /**
     * 定义缩放倍数
     *
     * 取值范围为 0.5 - 10
     *
     * 默认为 1
     */
    scaleValue: number;
    /**
     * 是否使用动画
     *
     * 默认为 true
     */
    animation: boolean;
    /** 拖动过程中触发 */
    onChange: _MovableViewOnChange;
    /** 缩放过程中触发 */
    onScale: _MovableViewOnScale;
  }>;

/**
 * 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
 *
 * Movable-area 直接子组件
 */
type _MovableView = DefineComponent<_MovableViewProps>;

/** 可移动的视图容器实例 */
type _MovableViewInstance = InstanceType<_MovableView>;

export type {
  _MovableViewDirection as MovableViewDirection,
  _MovableViewSource as MovableViewSource,
  _MovableViewOnChangeDetail as MovableViewOnChangeDetail,
  _MovableViewOnChangeEvent as MovableViewOnChangeEvent,
  _MovableViewOnChange as MovableViewOnChange,
  _MovableViewOnScaleDetail as MovableViewOnScaleDetail,
  _MovableViewOnScaleEvent as MovableViewOnScaleEvent,
  _MovableViewOnScale as MovableViewOnScale,
  _MovableViewProps as MovableViewProps,
  _MovableView as MovableView,
  _MovableViewInstance as MovableViewInstance,
};

declare global {
  namespace UniHelper {
    /** Movable-view 的移动方向 */
    export type MovableViewDirection = _MovableViewDirection;
    /**
     * Movable-view 产生移动的原因
     *
     * Touch 拖动
     *
     * Touch-out-of-bounds 超出移动范围
     *
     * Out-of-bounds 超出移动范围后的回弹
     *
     * Friction 惯性
     *
     * 空字符串 setData
     */
    export type MovableViewSource = _MovableViewSource;
    export interface MovableViewOnChangeDetail
      extends _MovableViewOnChangeDetail {}
    export type MovableViewOnChangeEvent = _MovableViewOnChangeEvent;
    /** 拖动过程中触发 */
    export interface MovableViewOnChange extends _MovableViewOnChange {}
    export interface MovableViewOnScaleDetail
      extends _MovableViewOnScaleDetail {}
    export type MovableViewOnScaleEvent = _MovableViewOnScaleEvent;
    /** 缩放过程中触发 */
    export interface MovableViewOnScale extends _MovableViewOnScale {}
    /** 可移动的视图容器属性 */
    export type MovableViewProps = _MovableViewProps;
    /**
     * 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
     *
     * Movable-area 直接子组件
     */
    export type MovableView = _MovableView;
    /** 可移动的视图容器实例 */
    export type MovableViewInstance = _MovableViewInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 可移动的视图容器，在页面中可以拖拽滑动或双指缩放
     *
     * Movable-area 直接子组件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/movable-view.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    MovableView: _MovableView;
  }
}
