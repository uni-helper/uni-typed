import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

type _AdOnLoadEvent = BaseEvent;

/** 广告加载成功的回调 */
type _AdOnLoad = (event: _AdOnLoadEvent) => void;

interface _AdOnErrorDetail {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

type _AdOnErrorEvent = CustomEvent<_AdOnErrorDetail>;

/** 广告加载失败的回调 */
type _AdOnError = (event: _AdOnErrorEvent) => void;

type _AdOnCloseEvent = BaseEvent;

/** 广告关闭的回调 */
type _AdOnClose = (event: _AdOnCloseEvent) => void;

/** 信息流广告属性 */
type _AdProps = CommonProps &
  Partial<{
    /** APP 广告位 id */
    adpid: string;
    /** 广告单元 id，可在小程序管理后台的流量主模块新建 */
    unitId: string;
    /**
     * 广告自动刷新的间隔时间，必须大于等于 30
     *
     * 该参数不传入时 Banner 广告不会自动刷新
     *
     * 单位为 `s`
     */
    adIntervals: number;
    /** 广告数据，优先级高于 adpid */
    data: Record<string, any>;
    /** 小程序应用 ID */
    appid: string;
    /** 小程序广告位 ID */
    apid: string;
    /**
     * Type 为 feeds 时广告左边距，必须大于 0
     *
     * 单位为 `px`
     */
    adLeft: number;
    /**
     * Type 为 feeds 时广告上边距，必须大于 0
     *
     * 单位为 `px`
     */
    adTop: number;
    /**
     * Type 为 feeds 时广告宽度，最大值为屏幕宽度，最小值为 265
     *
     * 单位为 `px`
     *
     * 默认为 `100%`
     */
    adWidth: number;
    /**
     * Type 为 feeds 时广告高度，最大值为 160，最小值为 85
     *
     * 单位为 `px`
     */
    adHeight: number;
    /** 广告类型 */
    type: string;
    /** 广告加载成功的回调 */
    onLoad: _AdOnLoad;
    /** 广告加载失败的回调 */
    onError: _AdOnError;
    /** 广告关闭的回调 */
    onClose: _AdOnClose;
  }>;

/** 信息流广告 */
type _Ad = DefineComponent<_AdProps>;

/** 信息流广告实例 */
type _AdInstance = InstanceType<_Ad>;

export type {
  _AdOnLoadEvent as AdOnLoadEvent,
  _AdOnLoad as AdOnLoad,
  _AdOnErrorDetail as AdOnErrorDetail,
  _AdOnErrorEvent as AdOnErrorEvent,
  _AdOnError as AdOnError,
  _AdOnCloseEvent as AdOnCloseEvent,
  _AdOnClose as AdOnClose,
  _AdProps as AdProps,
  _Ad as Ad,
  _AdInstance as AdInstance,
};

declare global {
  namespace UniHelper {
    export type AdOnLoadEvent = _AdOnLoadEvent;
    /** 广告加载成功的回调 */
    export interface AdOnLoad extends _AdOnLoad {}
    export interface AdOnErrorDetail extends _AdOnErrorDetail {}
    export type AdOnErrorEvent = _AdOnErrorEvent;
    /** 广告加载失败的回调 */
    export interface AdOnError extends _AdOnError {}
    export type AdOnCloseEvent = _AdOnCloseEvent;
    /** 广告关闭的回调 */
    export interface AdOnClose extends _AdOnClose {}
    /** 信息流广告属性 */
    export type AdProps = _AdProps;
    /** 信息流广告 */
    export type Ad = _Ad;
    /** 信息流广告实例 */
    export type AdInstance = _AdInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 信息流广告
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    ad: _Ad;
  }
}
