import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

type _AdFullscreenVideoOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
type _AdFullscreenVideoOnLoad = (event: _AdFullscreenVideoOnLoadEvent) => void;

interface _AdFullscreenVideoOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdFullscreenVideoOnErrorEvent =
  CustomEvent<_AdFullscreenVideoOnErrorDetail>;

/** 广告加载失败的回调 */
type _AdFullscreenVideoOnError = (
  event: _AdFullscreenVideoOnErrorEvent,
) => void;

type _AdFullscreenVideoOnCloseEvent = BaseEvent;

/** 广告关闭的回调 */
type _AdFullscreenVideoOnClose = (
  event: _AdFullscreenVideoOnCloseEvent,
) => void;

/** 全屏视频广告属性 */
type _AdFullscreenVideoProps = CommonProps &
  Partial<{
    /** APP 广告位 id */
    adpid: string | number | (string | number)[];
    /**
     * 是否在页面就绪后加载广告数据
     *
     * 默认为 `true`
     */
    preload: boolean;
    /**
     * 是否自动加载下一条广告数据
     *
     * 默认为 false
     */
    loadnext: boolean;
    /** 广告加载成功的回调 */
    onLoad: _AdFullscreenVideoOnLoad;
    /** 广告加载失败的回调 */
    onError: _AdFullscreenVideoOnError;
    /** 广告关闭的回调 */
    onClose: _AdFullscreenVideoOnClose;
  }>;

/** 全屏视频广告 */
type _AdFullscreenVideo = DefineComponent<_AdFullscreenVideoProps>;

/** 全屏视频广告实例 */
type _AdFullscreenVideoInstance = InstanceType<_AdFullscreenVideo>;

export type {
  _AdFullscreenVideoOnLoadEvent as AdFullscreenVideoOnLoadEvent,
  _AdFullscreenVideoOnLoad as AdFullscreenVideoOnLoad,
  _AdFullscreenVideoOnErrorDetail as AdFullscreenVideoOnErrorDetail,
  _AdFullscreenVideoOnErrorEvent as AdFullscreenVideoOnErrorEvent,
  _AdFullscreenVideoOnError as AdFullscreenVideoOnError,
  _AdFullscreenVideoOnCloseEvent as AdFullscreenVideoOnCloseEvent,
  _AdFullscreenVideoOnClose as AdFullscreenVideoOnClose,
  _AdFullscreenVideoProps as AdFullscreenVideoProps,
  _AdFullscreenVideo as AdFullscreenVideo,
  _AdFullscreenVideoInstance as AdFullscreenVideoInstance,
};

declare global {
  namespace UniHelper {
    export type AdFullscreenVideoOnLoadEvent = _AdFullscreenVideoOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdFullscreenVideoOnLoad extends _AdFullscreenVideoOnLoad {}
    export interface AdFullscreenVideoOnErrorDetail
      extends _AdFullscreenVideoOnErrorDetail {}
    export type AdFullscreenVideoOnErrorEvent = _AdFullscreenVideoOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdFullscreenVideoOnError
      extends _AdFullscreenVideoOnError {}
    export type AdFullscreenVideoOnCloseEvent = _AdFullscreenVideoOnCloseEvent;
    /** 广告关闭的回调 */
    export interface AdFullscreenVideoOnClose
      extends _AdFullscreenVideoOnClose {}
    /** 全屏视频广告属性 */
    export type AdFullscreenVideoProps = _AdFullscreenVideoProps;
    /** 全屏视频广告 */
    export type AdFullscreenVideo = _AdFullscreenVideo;
    /** 全屏视频广告实例 */
    export type AdFullscreenVideoInstance = _AdFullscreenVideoInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 全屏视频广告
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/uni-ad/ad-fullscreen-video.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    AdFullscreenVideo: _AdFullscreenVideo;
  }
}
