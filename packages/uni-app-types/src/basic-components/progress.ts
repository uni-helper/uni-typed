import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent } from "../events";

/**
 * 动画播放方式
 *
 * Backwards 动画从头播
 *
 * Forwards 动画从上次结束点接着播
 */
type _ProgressActiveMode = "backwards" | "forwards";

type _ProgressOnActiveendEvent = BaseEvent;

/** 动画完成时触发 */
type _ProgressOnActiveend = (event: _ProgressOnActiveendEvent) => void;

/** 进度条属性 */
type _ProgressProps = CommonProps &
  Partial<{
    /**
     * 百分比
     *
     * 取值范围为 0 - 100
     *
     * 没有默认值
     */
    percent: number;
    /**
     * 是否在进度条右侧显示百分比
     *
     * 默认为 false
     */
    showInfo: boolean;
    /**
     * 圆角大小
     *
     * 默认为 0
     */
    borderRadius: number | string;
    /**
     * 进度条右侧显示的百分比字体大小
     *
     * 默认为 16
     */
    fontSize: number | string;
    /**
     * 进度条线的宽度
     *
     * 单位为 px
     *
     * 默认为 6
     */
    strokeWidth: number;
    /**
     * 已选择的进度条的颜色
     *
     * 默认为 #09bb07，百度默认为 #e6e6e6
     */
    activeColor: string;
    /**
     * 未选择的进度条的颜色
     *
     * 默认为 #ebebeb
     */
    backgroundColor: string;
    /**
     * 是否显示进度条从左往右的动画
     *
     * 默认为 false
     */
    active: boolean;
    /**
     * 动画播放方式
     *
     * Backwards 动画从头播
     *
     * Forwards 动画从上次结束点接着播
     *
     * 默认为 backwards
     */
    activeMode: _ProgressActiveMode;
    /**
     * 进度增加 1% 所需时间
     *
     * 单位为 ms
     *
     * 默认为 30
     */
    duration: number;
    /** 动画完成时触发 */
    onActiveend: _ProgressOnActiveend;
  }>;

/** 进度条 */
type _Progress = DefineComponent<_ProgressProps>;

/** 进度条实例 */
type _ProgressInstance = InstanceType<_Progress>;

export type {
  _ProgressActiveMode as ProgressActiveMode,
  _ProgressOnActiveendEvent as ProgressOnActiveendEvent,
  _ProgressOnActiveend as ProgressOnActiveend,
  _ProgressProps as ProgressProps,
  _Progress as Progress,
  _ProgressInstance as ProgressInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 动画播放方式
     *
     * Backwards 动画从头播
     *
     * Forwards 动画从上次结束点接着播
     */
    export type ProgressActiveMode = _ProgressActiveMode;
    export type ProgressOnActiveendEvent = _ProgressOnActiveendEvent;
    /** 动画完成时触发 */
    export interface ProgressOnActiveend extends _ProgressOnActiveend {}
    /** 进度条属性 */
    export type ProgressProps = _ProgressProps;
    /** 进度条 */
    export type Progress = _Progress;
    /** 进度条实例 */
    export type ProgressInstance = _ProgressInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 进度条
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/progress.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    progress: _Progress;
  }
}

// 3.0 <= Vue < 3.3
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 进度条
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/progress.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      progress: _ProgressProps;
    }
  }
}

// 3.3 <= Vue < 3.4
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 进度条
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/progress.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      progress: _ProgressProps;
    }
  }
}

// 3.4 <= Vue
declare module "vue" {
  interface IntrinsicElementAttributes {
    /**
     * 进度条
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/progress.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    progress: _ProgressProps;
  }
}
