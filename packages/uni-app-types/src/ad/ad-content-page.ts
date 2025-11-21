import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

type _AdContentPageOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
type _AdContentPageOnLoad = (event: _AdContentPageOnLoadEvent) => void;

interface _AdContentPageOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdContentPageOnErrorEvent = CustomEvent<_AdContentPageOnErrorDetail>;

/** 广告加载失败的回调 */
type _AdContentPageOnError = (event: _AdContentPageOnErrorEvent) => void;

interface _AdContentPageOnStartDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * `0` 未知类型
   *
   * `1` 普通信息流
   *
   * `2` sdk 内部广告
   *
   * `3` 第三方广告
   *
   * `4` 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

type _AdContentPageOnStartEvent = CustomEvent<_AdContentPageOnStartDetail>;

/** 广告开始播放时触发 */
type _AdContentPageOnStart = (event: _AdContentPageOnStartEvent) => void;

interface _AdContentPageOnPauseDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * `0` 未知类型
   *
   * `1` 普通信息流
   *
   * `2` sdk 内部广告
   *
   * `3` 第三方广告
   *
   * `4` 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

type _AdContentPageOnPauseEvent = CustomEvent<_AdContentPageOnPauseDetail>;

/** 广告暂停播放时触发 */
type _AdContentPageOnPause = (event: _AdContentPageOnPauseEvent) => void;

interface _AdContentPageOnResumeDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * `0` 未知类型
   *
   * `1` 普通信息流
   *
   * `2` sdk 内部广告
   *
   * `3` 第三方广告
   *
   * `4` 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

type _AdContentPageOnResumeEvent = CustomEvent<_AdContentPageOnResumeDetail>;

/** 广告恢复播放时触发 */
type _AdContentPageOnResume = (event: _AdContentPageOnResumeEvent) => void;

interface _AdContentPageOnCompleteDetail {
  /** 广告唯一标识 */
  id: string;
  /**
   * 广告类型
   *
   * `0` 未知类型
   *
   * `1` 普通信息流
   *
   * `2` sdk 内部广告
   *
   * `3` 第三方广告
   *
   * `4` 直播
   */
  type: 0 | 1 | 2 | 3 | 4;
  /** 视频总时长 */
  duration: number;
}

type _AdContentPageOnCompleteEvent =
  CustomEvent<_AdContentPageOnCompleteDetail>;

/** 广告完成播放时触发 */
type _AdContentPageOnComplete = (event: _AdContentPageOnCompleteEvent) => void;

/** 短视频内容联盟广告属性 */
type _AdContentPageProps = CommonProps &
  Partial<{
    /** APP 广告位 id */
    adpid: string;
    /** 广告加载成功的回调 */
    onLoad: _AdContentPageOnLoad;
    /** 广告加载失败的回调 */
    onError: _AdContentPageOnError;
    /** 广告开始播放时触发 */
    onStart: _AdContentPageOnStart;
    /** 广告暂停播放时触发 */
    onPause: _AdContentPageOnPause;
    /** 广告恢复播放时触发 */
    onResume: _AdContentPageOnResume;
    /** 广告完成播放时触发 */
    onComplete: _AdContentPageOnComplete;
  }>;

/** 短视频内容联盟广告 */
type _AdContentPage = DefineComponent<_AdContentPageProps>;

/** 短视频内容联盟广告实例 */
type _AdContentPageInstance = InstanceType<_AdContentPage>;

export type {
  _AdContentPageOnLoadEvent as AdContentPageOnLoadEvent,
  _AdContentPageOnLoad as AdContentPageOnLoad,
  _AdContentPageOnErrorDetail as AdContentPageOnErrorDetail,
  _AdContentPageOnErrorEvent as AdContentPageOnErrorEvent,
  _AdContentPageOnError as AdContentPageOnError,
  _AdContentPageOnStartDetail as AdContentPageOnStartDetail,
  _AdContentPageOnStartEvent as AdContentPageOnStartEvent,
  _AdContentPageOnStart as AdContentPageOnStart,
  _AdContentPageOnPauseDetail as AdContentPageOnPauseDetail,
  _AdContentPageOnPauseEvent as AdContentPageOnPauseEvent,
  _AdContentPageOnPause as AdContentPageOnPause,
  _AdContentPageOnResumeDetail as AdContentPageOnResumeDetail,
  _AdContentPageOnResumeEvent as AdContentPageOnResumeEvent,
  _AdContentPageOnResume as AdContentPageOnResume,
  _AdContentPageOnCompleteDetail as AdContentPageOnCompleteDetail,
  _AdContentPageOnCompleteEvent as AdContentPageOnCompleteEvent,
  _AdContentPageOnComplete as AdContentPageOnComplete,
  _AdContentPageProps as AdContentPageProps,
  _AdContentPage as AdContentPage,
  _AdContentPageInstance as AdContentPageInstance,
};

declare global {
  namespace UniHelper {
    export type AdContentPageOnLoadEvent = _AdContentPageOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdContentPageOnLoad extends _AdContentPageOnLoad {}
    export interface AdContentPageOnErrorDetail
      extends _AdContentPageOnErrorDetail {}
    export type AdContentPageOnErrorEvent = _AdContentPageOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdContentPageOnError extends _AdContentPageOnError {}
    export interface AdContentPageOnStartDetail
      extends _AdContentPageOnStartDetail {}
    export type AdContentPageOnStartEvent = _AdContentPageOnStartEvent;
    /** 广告开始播放时触发 */
    export interface AdContentPageOnStart extends _AdContentPageOnStart {}
    export interface AdContentPageOnPauseDetail
      extends _AdContentPageOnPauseDetail {}
    export type AdContentPageOnPauseEvent = _AdContentPageOnPauseEvent;
    /** 广告暂停播放时触发 */
    export interface AdContentPageOnPause extends _AdContentPageOnPause {}
    export interface AdContentPageOnResumeDetail
      extends _AdContentPageOnResumeDetail {}
    export type AdContentPageOnResumeEvent = _AdContentPageOnResumeEvent;
    /** 广告恢复播放时触发 */
    export interface AdContentPageOnResume extends _AdContentPageOnResume {}
    export interface AdContentPageOnCompleteDetail
      extends _AdContentPageOnCompleteDetail {}
    export type AdContentPageOnCompleteEvent = _AdContentPageOnCompleteEvent;
    /** 广告完成播放时触发 */
    export interface AdContentPageOnComplete extends _AdContentPageOnComplete {}
    /** 短视频内容联盟广告属性 */
    export type AdContentPageProps = _AdContentPageProps;
    /** 短视频内容联盟广告 */
    export type AdContentPage = _AdContentPage;
    /** 短视频内容联盟广告实例 */
    export type AdContentPageInstance = _AdContentPageInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 短视频内容联盟广告
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/uni-ad/ad-content-page.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    AdContentPage: _AdContentPage;
  }
}
