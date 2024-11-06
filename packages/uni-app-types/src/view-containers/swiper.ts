import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { CustomEvent } from "../events";

/**
 * 导致变更的原因
 *
 * Autoplay 自动播放
 *
 * Touch 用户滑动
 *
 * 空字符串 其它原因
 */
type _SwiperSource = "autoplay" | "touch" | "";

/** Swiper 切换动画类型 */
type _SwiperEasingFunction =
  | "default"
  | "linear"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic";

interface _SwiperOnChangeDetail {
  /** 当前所在滑块的下标 */
  current: number;
  /**
   * 导致变更的原因
   *
   * Autoplay 自动播放
   *
   * Touch 用户滑动
   *
   * 空字符串 其它原因
   */
  source: _SwiperSource;
}

type _SwiperOnChangeEvent = CustomEvent<_SwiperOnChangeDetail>;

/** Current 改变时触发 */
type _SwiperOnChange = (event: _SwiperOnChangeEvent) => void;

interface _SwiperOnTransitionDetail {
  dx?: number;
  dy?: number;
}

type _SwiperOnTransitionEvent = CustomEvent<_SwiperOnTransitionDetail>;

/** Swiper-item 位置改变时触发 */
type _SwiperOnTransition = (event: _SwiperOnTransitionEvent) => void;

interface _SwiperOnAnimationfinishDetail {
  /** 当前所在滑块的下标 */
  current: number;
  /**
   * 导致变更的原因
   *
   * Autoplay 自动播放
   *
   * Touch 用户滑动
   *
   * 空字符串其它原因
   */
  source: _SwiperSource;
}

type _SwiperOnAnimationfinishEvent =
  CustomEvent<_SwiperOnAnimationfinishDetail>;

/** 动画结束时触发 */
type _SwiperOnAnimationfinish = (event: _SwiperOnAnimationfinishEvent) => void;

/** 滑块视图容器属性 */
type _SwiperProps = CommonProps &
  Partial<{
    /**
     * 是否显示面板指示点
     *
     * 默认为 false
     */
    indicatorDots: boolean;
    /**
     * 指示点颜色
     *
     * 默认为 rgba(0, 0, 0, 0.3)
     */
    indicatorColor: string;
    /**
     * 当前选中的指示点颜色
     *
     * 默认为 #000000
     */
    indicatorActiveColor: string;
    /** Swiper-item 可见时的 class */
    activeClass: string;
    /** Acceleration 设置为 true 时且处于滑动过程中，中间若干屏处于可见时的 class */
    changingClass: boolean;
    /**
     * 是否自动切换
     *
     * 默认为 false
     */
    autoplay: boolean;
    /**
     * 当前所在滑块的下标
     *
     * 默认为 0
     */
    current: number;
    /** 当前所在滑块的 item-id ，不能与 current 被同时指定 */
    currentItemId: string;
    /**
     * 自动切换时间间隔
     *
     * 默认为 5000
     */
    interval: number;
    /**
     * 滑动动画时长
     *
     * 默认为 500
     */
    duration: number;
    /**
     * 是否采用衔接滑动，即播放到末尾后重新回到开头
     *
     * 默认为 false
     */
    circular: boolean;
    /**
     * 滑动方向是否为纵向
     *
     * 默认为 false
     */
    vertical: boolean;
    /**
     * 前边距，可用于露出前一项的一小部分
     *
     * 接受 px 和 rpx 值
     *
     * 默认为 0px
     */
    previousMargin: string;
    /**
     * 后边距，可用于露出后一项的一小部分
     *
     * 接受 px 和 rpx 值
     *
     * 默认为 0px
     */
    nextMargin: string;
    /**
     * 当开启时，会根据滑动速度，连续滑动多屏
     *
     * 默认 false
     */
    acceleration: boolean;
    /**
     * 是否禁用代码变动触发 swiper 切换时使用动画
     *
     * 默认为 false
     */
    disableProgrammaticAnimation: boolean;
    /**
     * 同时显示的滑块数量
     *
     * 默认为 1
     */
    displayMultipleItems: number;
    /**
     * 是否跳过未显示的滑块布局
     *
     * 设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
     *
     * 默认为 false
     */
    skipHiddenItemLayout: boolean;
    /**
     * 是否禁止用户 touch 操作
     *
     * 默认为 false
     */
    disableTouch: boolean;
    /**
     * 是否监听用户的触摸事件
     *
     * 只在初始化时有效，不支持动态修改
     *
     * 默认为 true
     */
    touchable: boolean;
    /**
     * 指定 swiper 切换缓动动画类型
     *
     * 默认为 default
     */
    easingFunction: _SwiperEasingFunction;
    /** Current 改变时触发 */
    onChange: _SwiperOnChange;
    /** Swiper-item 位置改变时触发 */
    onTransition: _SwiperOnTransition;
    /** 动画结束时触发 */
    onAnimationfinish: _SwiperOnAnimationfinish;
  }>;

/**
 * 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
 *
 * 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
 *
 * Swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
 */
type _Swiper = DefineComponent<_SwiperProps>;

/** 滑块视图容器实例 */
type _SwiperInstance = InstanceType<_Swiper>;

export type {
  _SwiperSource as SwiperSource,
  _SwiperEasingFunction as SwiperEasingFunction,
  _SwiperOnChangeDetail as SwiperOnChangeDetail,
  _SwiperOnChangeEvent as SwiperOnChangeEvent,
  _SwiperOnChange as SwiperOnChange,
  _SwiperOnTransitionDetail as SwiperOnTransitionDetail,
  _SwiperOnTransitionEvent as SwiperOnTransitionEvent,
  _SwiperOnTransition as SwiperOnTransition,
  _SwiperOnAnimationfinishDetail as SwiperOnAnimationfinishDetail,
  _SwiperOnAnimationfinishEvent as SwiperOnAnimationfinishEvent,
  _SwiperOnAnimationfinish as SwiperOnAnimationfinish,
  _SwiperProps as SwiperProps,
  _Swiper as Swiper,
  _SwiperInstance as SwiperInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 导致变更的原因
     *
     * Autoplay 自动播放
     *
     * Touch 用户滑动
     *
     * 空字符串 其它原因
     */
    export type SwiperSource = _SwiperSource;
    /** Swiper 切换动画类型 */
    export type SwiperEasingFunction = _SwiperEasingFunction;
    export interface SwiperOnChangeDetail extends _SwiperOnChangeDetail {}
    export type SwiperOnChangeEvent = _SwiperOnChangeEvent;
    /** Current 改变时触发 */
    export interface SwiperOnChange extends _SwiperOnChange {}
    export interface SwiperOnTransitionDetail
      extends _SwiperOnTransitionDetail {}
    export type SwiperOnTransitionEvent = _SwiperOnTransitionEvent;
    /** Swiper-item 位置改变时触发 */
    export interface SwiperOnTransition extends _SwiperOnTransition {}
    export interface SwiperOnAnimationfinishDetail
      extends _SwiperOnAnimationfinishDetail {}
    export type SwiperOnAnimationfinishEvent = _SwiperOnAnimationfinishEvent;
    /** 动画结束时触发 */
    export interface SwiperOnAnimationfinish extends _SwiperOnAnimationfinish {}
    /** 滑块视图容器属性 */
    export type SwiperProps = _SwiperProps;
    /**
     * 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
     *
     * 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
     *
     * Swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
     */
    export type Swiper = _Swiper;
    /** 滑块视图容器实例 */
    export type SwiperInstance = _SwiperInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 滑块视图容器，一般用于左右滑动或上下滑动，比如 banner 轮播图
     *
     * 注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换
     *
     * Swiper 下的每个 swiper-item 是一个滑动切换区域，不能停留在 2 个滑动区域之间
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/swiper.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    swiper: _Swiper;
  }
}
