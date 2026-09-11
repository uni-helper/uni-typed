import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

type _AdDrawOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
type _AdDrawOnLoad = (event: _AdDrawOnLoadEvent) => void;

interface _AdDrawOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdDrawOnErrorEvent = CustomEvent<_AdDrawOnErrorDetail>;

/** 广告加载失败的回调 */
type _AdDrawOnError = (event: _AdDrawOnErrorEvent) => void;

/** 沉浸视频流广告属性 */
type _AdDrawProps = CommonProps &
  Partial<{
    /** APP 广告位 id */
    adpid: string;
    /** 广告数据 */
    data: Record<string, any>;
    /** 广告加载成功的回调 */
    onLoad: _AdDrawOnLoad;
    /** 广告加载失败的回调 */
    onError: _AdDrawOnError;
  }>;

/** 沉浸视频流广告 */
type _AdDraw = DefineComponent<_AdDrawProps>;

/** 沉浸视频流广告实例 */
type _AdDrawInstance = InstanceType<_AdDraw>;

export type {
  _AdDraw as AdDraw,
  _AdDrawInstance as AdDrawInstance,
  _AdDrawOnError as AdDrawOnError,
  _AdDrawOnErrorDetail as AdDrawOnErrorDetail,
  _AdDrawOnErrorEvent as AdDrawOnErrorEvent,
  _AdDrawOnLoad as AdDrawOnLoad,
  _AdDrawOnLoadEvent as AdDrawOnLoadEvent,
  _AdDrawProps as AdDrawProps,
};

declare global {
  namespace UniHelper {
    export type AdDrawOnLoadEvent = _AdDrawOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdDrawOnLoad extends _AdDrawOnLoad {}
    export interface AdDrawOnErrorDetail extends _AdDrawOnErrorDetail {}
    export type AdDrawOnErrorEvent = _AdDrawOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdDrawOnError extends _AdDrawOnError {}
    /** 沉浸视频流广告属性 */
    export type AdDrawProps = _AdDrawProps;
    /** 沉浸视频流广告 */
    export type AdDraw = _AdDraw;
    /** 沉浸视频流广告实例 */
    export type AdDrawInstance = _AdDrawInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 沉浸视频流广告
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/uni-ad/ad-draw.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    AdDraw: _AdDraw;
  }
}
