import type { DefineComponent } from "vue";
import type { BaseEvent, CustomEvent, TouchCanvasEvent } from "../events";

/** 类型 */
type _CanvasType = "2d" | "webgl";

type _CanvasOnTouchstartEvent = TouchCanvasEvent;

/** 手指触摸动作开始时触发 */
type _CanvasOnTouchstart = (event: _CanvasOnTouchstartEvent) => void;

type _CanvasOnTouchmoveEvent = TouchCanvasEvent;

/** 手指触摸后移动时触发 */
type _CanvasOnTouchmove = (event: _CanvasOnTouchmoveEvent) => void;

type _CanvasOnTouchendEvent = TouchCanvasEvent;

/** 手指触摸动作结束时触发 */
type _CanvasOnTouchend = (event: _CanvasOnTouchendEvent) => void;

type _CanvasOnTouchcancelEvent = TouchCanvasEvent;

/** 手指触摸动作被打断时触发 */
type _CanvasOnTouchcancel = (event: _CanvasOnTouchcancelEvent) => void;

type _CanvasOnLongtapEvent = BaseEvent;

/** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
type _CanvasOnLongtap = (event: _CanvasOnLongtapEvent) => void;

interface _CanvasOnErrorDetail {
  /** 错误信息 */
  errMsg: string;
}

type _CanvasOnErrorEvent = CustomEvent<_CanvasOnErrorDetail>;

/** 发生错误时触发 */
type _CanvasOnError = (event: _CanvasOnErrorEvent) => void;

/** 画布属性 */
type _CanvasProps = Partial<{
  /** 类型 */
  type: _CanvasType;
  /** 唯一标识符 */
  canvasId: string;
  /**
   * 当在 canvas 中移动时且有绑定手势事件时，是否禁止屏幕滚动以及下拉刷新
   *
   * 默认为 false
   */
  disableScroll: boolean;
  /**
   * 是否启用高清处理
   *
   * 默认为 true
   */
  hidpi: boolean;
  /** 手指触摸动作开始时触发 */
  onTouchstart: _CanvasOnTouchstart;
  /** 手指触摸后移动时触发 */
  onTouchmove: _CanvasOnTouchmove;
  /** 手指触摸动作结束时触发 */
  onTouchend: _CanvasOnTouchend;
  /** 手指触摸动作被打断时触发 */
  onTouchcancel: _CanvasOnTouchcancel;
  /** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
  onLongtap: _CanvasOnLongtap;
  /** 发生错误时触发 */
  onError: _CanvasOnError;
}>;

/** 画布 */
type _Canvas = DefineComponent<_CanvasProps>;

/** 画布实例 */
type _CanvasInstance = InstanceType<_Canvas>;

export type {
  _CanvasType as CanvasType,
  _CanvasOnTouchstartEvent as CanvasOnTouchstartEvent,
  _CanvasOnTouchstart as CanvasOnTouchstart,
  _CanvasOnTouchmoveEvent as CanvasOnTouchmoveEvent,
  _CanvasOnTouchmove as CanvasOnTouchmove,
  _CanvasOnTouchendEvent as CanvasOnTouchendEvent,
  _CanvasOnTouchend as CanvasOnTouchend,
  _CanvasOnTouchcancelEvent as CanvasOnTouchcancelEvent,
  _CanvasOnTouchcancel as CanvasOnTouchcancel,
  _CanvasOnLongtapEvent as CanvasOnLongtapEvent,
  _CanvasOnLongtap as CanvasOnLongtap,
  _CanvasOnErrorDetail as CanvasOnErrorDetail,
  _CanvasOnErrorEvent as CanvasOnErrorEvent,
  _CanvasOnError as CanvasOnError,
  _CanvasProps as CanvasProps,
  _Canvas as Canvas,
  _CanvasInstance as CanvasInstance,
};

declare global {
  namespace UniHelper {
    /** 类型 */
    export type CanvasType = _CanvasType;
    export type CanvasOnTouchstartEvent = _CanvasOnTouchstartEvent;
    /** 手指触摸动作开始时触发 */
    export interface CanvasOnTouchstart extends _CanvasOnTouchstart {}
    export type CanvasOnTouchmoveEvent = _CanvasOnTouchmoveEvent;
    /** 手指触摸后移动时触发 */
    export interface CanvasOnTouchmove extends _CanvasOnTouchmove {}
    export type CanvasOnTouchendEvent = _CanvasOnTouchendEvent;
    /** 手指触摸动作结束时触发 */
    export interface CanvasOnTouchend extends _CanvasOnTouchend {}
    export type CanvasOnTouchcancelEvent = _CanvasOnTouchcancelEvent;
    /** 手指触摸动作被打断时触发 */
    export interface CanvasOnTouchcancel extends _CanvasOnTouchcancel {}
    export type CanvasOnLongtapEvent = _CanvasOnLongtapEvent;
    /** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 */
    export interface CanvasOnLongtap extends _CanvasOnLongtap {}
    export interface CanvasOnErrorDetail extends _CanvasOnErrorDetail {}
    export type CanvasOnErrorEvent = _CanvasOnErrorEvent;
    /** 发生错误时触发 */
    export interface CanvasOnError extends _CanvasOnError {}
    /** 画布属性 */
    export type CanvasProps = _CanvasProps;
    /** 画布 */
    export type Canvas = _Canvas;
    /** 画布实例 */
    export type CanvasInstance = _CanvasInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 画布
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/canvas.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    canvas: _Canvas;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 画布
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/canvas.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      canvas: _Canvas;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /** 画布
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/canvas.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      canvas: _Canvas;
    }
  }
}
