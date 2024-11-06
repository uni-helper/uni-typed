import type { DefineComponent } from "vue";
import type { BaseEvent, CustomEvent } from "../events";

/** 弹幕 */
interface _VideoDanmu {
  /** 弹幕文本 */
  text: string;
  /** 弹幕颜色 */
  color: string;
  /**
   * 弹幕出现时间
   *
   * 单位为 s
   */
  time: number;
}

/**
 * 设置全屏时视频的方向，不指定则根据宽高比自动判断
 *
 * 0 正常竖向
 *
 * 90 屏幕逆时针 90 度
 *
 * -90 屏幕顺时针 90 度
 */
type _VideoDirection = 0 | 90 | -90;

/**
 * 当视频大小与 video 容器大小不一致时，视频的表现形式
 *
 * Contain 包含
 *
 * Fill 填充
 *
 * Cover 覆盖
 */
type _VideoObjectFit = "contain" | "fill" | "cover";

/**
 * 播放按钮的位置
 *
 * Bottom 控制栏上
 *
 * Center 视频中间
 */
type _VideoPlayBtnPosition = "bottom" | "center";

/**
 * 解码器选择
 *
 * Hardware 硬件解码
 *
 * Software 软件解码
 */
type _VideoCodec = "hardware" | "software";

/**
 * 移动网络提醒样式
 *
 * 0 不提醒
 *
 * 1 提醒
 */
type _VideoMobilenetHintType = 0 | 1;

/**
 * 播放策略
 *
 * 0 普通模式，适合绝大部分视频播放场景
 *
 * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl
 * 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
 *
 * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
 */
type _VideoPlayStrategy = 0 | 1 | 2;

type _VideoOnPlayEvent = BaseEvent;

/** 开始/继续播放时触发 */
type _VideoOnPlay = (event: _VideoOnPlayEvent) => void;

type _VideoOnPauseEvent = BaseEvent;

/** 暂停播放时触发 */
type _VideoOnPause = (event: _VideoOnPauseEvent) => void;

type _VideoOnEndedEvent = BaseEvent;

/** 播放到末尾时触发 */
type _VideoOnEnded = (event: _VideoOnEndedEvent) => void;

interface _VideoOnTimeupdateDetail {
  currentTime: number;
  duration: number;
}

type _VideoOnTimeupdateEvent = CustomEvent<_VideoOnTimeupdateDetail>;

/**
 * 播放进度变化时触发
 *
 * 250ms 一次
 */
type _VideoOnTimeupdate = (event: _VideoOnTimeupdateEvent) => void;

interface _VideoOnFullscreenchangeDetail {
  fullScreen: boolean;
  direction: _VideoDirection;
}

type _VideoOnFullscreenchangeEvent =
  CustomEvent<_VideoOnFullscreenchangeDetail>;

/** 视频进入和退出全屏时触发 */
type _VideoOnFullscreenchange = (event: _VideoOnFullscreenchangeEvent) => void;

type _VideoOnWaitingEvent = BaseEvent;

/** 视频缓冲时触发 */
type _VideoOnWaiting = (event: _VideoOnWaitingEvent) => void;

type _VideoOnErrorEvent = BaseEvent;

/** 视频播放出错时触发 */
type _VideoOnError = (event: _VideoOnErrorEvent) => void;

interface _VideoOnProgressDetail {
  buffered: number;
}

type _VideoOnProgressEvent = CustomEvent<_VideoOnProgressDetail>;

/** 加载进度变化时触发 */
type _VideoOnProgress = (event: _VideoOnProgressEvent) => void;

type _VideoOnLoadeddataEvent = BaseEvent;

/** 视频资源开始加载时触发 */
type _VideoOnLoadeddata = (event: _VideoOnLoadeddataEvent) => void;

type _VideoOnLoadstartEvent = BaseEvent;

/** 开始加载数据时触发 */
type _VideoOnLoadstart = (event: _VideoOnLoadstartEvent) => void;

type _VideoOnSeekedEvent = BaseEvent;

/** 拖动进度条结束时触发 */
type _VideoOnSeeked = (event: _VideoOnSeekedEvent) => void;

type _VideoOnSeekingEvent = BaseEvent;

/** 拖动进度条时触发 */
type _VideoOnSeeking = (event: _VideoOnSeekingEvent) => void;

interface _VideoOnLoadedmetadataDetail {
  width: number;
  height: number;
  duration: number;
}

type _VideoOnLoadedmetadataEvent = CustomEvent<_VideoOnLoadedmetadataDetail>;

/** 视频元数据加载完成时触发 */
type _VideoOnLoadedmetadata = (event: _VideoOnLoadedmetadataEvent) => void;

interface _VideoOnFullscreenclickDetail {
  screenX: number;
  screenY: number;
  screenWidth: number;
  screenHeight: number;
}

type _VideoOnFullscreenclickEvent = CustomEvent<_VideoOnFullscreenclickDetail>;

/** 视频播放全屏播放点击时触发 */
type _VideoOnFullscreenclick = (event: _VideoOnFullscreenclickEvent) => void;

interface _VideoOnControlstoggleDetail {
  show: boolean;
}

type _VideoOnControlstoggleEvent = CustomEvent<_VideoOnControlstoggleDetail>;

/** 切换 controls 显示隐藏时触发 */
type _VideoOnControlstoggle = (event: _VideoOnControlstoggleEvent) => void;

/** 视频播放组件属性 */
type _VideoProps = Partial<{
  /** 要播放视频的资源地址 */
  src: string;
  /**
   * 是否自动播放
   *
   * 默认为 false
   */
  autoplay: boolean;
  /**
   * 是否循环播放
   *
   * 默认为 false
   */
  loop: boolean;
  /**
   * 是否静音播放
   *
   * 默认为 false
   */
  muted: boolean;
  /**
   * 指定视频初始播放位置
   *
   * 单位为 s
   */
  initialTime: number;
  /**
   * 指定视频长度
   *
   * 单位为 s
   */
  duration: number;
  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   *
   * 默认为 true
   */
  controls: boolean;
  /** 弹幕列表 */
  danmuList: _VideoDanmu[];
  /**
   * 是否显示弹幕按钮，不支持动态修改
   *
   * 默认为 false
   */
  danmuBtn: boolean;
  /**
   * 是否展示弹幕，不支持动态修改
   *
   * 默认为 false
   */
  enableDanmu: boolean;
  /**
   * 在非全屏模式下，是否开启亮度与音量调节手势
   *
   * 默认为 false
   */
  pageGesture: boolean;
  /**
   * 设置全屏时视频的方向，不指定则根据宽高比自动判断
   *
   * 0 正常竖向
   *
   * 90 屏幕逆时针 90 度
   *
   * -90 屏幕顺时针 90 度
   *
   * 默认根据宽高比自动判断
   */
  direction: _VideoDirection;
  /**
   * 若不设置，宽度大于 240 时才会显示
   *
   * 默认为 true
   */
  showProgress: boolean;
  /**
   * 是否显示全屏按钮
   *
   * 默认为 true
   */
  showFullscreenBtn: boolean;
  /**
   * 是否显示视频底部控制栏的播放按钮
   *
   * 默认为 true
   */
  showPlayBtn: boolean;
  /**
   * 是否显示视频中间的播放按钮
   *
   * 默认为 true
   */
  showCenterPlayBtn: boolean;
  /**
   * 是否显示 loading 控件
   *
   * 默认为 true
   */
  showLoading: boolean;
  /**
   * 是否开启控制进度的手势
   *
   * 默认为 true
   */
  enableProgressGesture: boolean;
  /**
   * 当视频大小与 video 容器大小不一致时，视频的表现形式
   *
   * Contain 包含
   *
   * Fill 填充
   *
   * Cover 覆盖
   *
   * 默认为 contain
   */
  objectFit: _VideoObjectFit;
  /**
   * 视频封面的图片网络资源地址
   *
   * 如果 controls 值为 false 则无效
   */
  poster: string;
  /**
   * 是否显示静音按钮
   *
   * @decs 默认为 false
   */
  showMuteBtn: boolean;
  /** 视频的标题，全屏时在顶部展示 */
  title: string;
  /**
   * 播放按钮的位置
   *
   * Bottom 控制栏上
   *
   * Center 视频中间
   *
   * 默认为 bottom
   */
  playBtnPosition: _VideoPlayBtnPosition;
  /**
   * 移动网络提醒样式
   *
   * 0 不提醒
   *
   * 1 提醒
   *
   * 默认为 1
   */
  mobilenetHintType: _VideoMobilenetHintType;
  /**
   * 是否开启播放手势，即双击切换播放、暂停
   *
   * 默认为 false
   */
  enablePlayGesture: boolean;
  /**
   * 当跳转到其它小程序页面时，是否自动暂停本页面的视频
   *
   * 默认为 true
   */
  autoPauseIfNavigate: boolean;
  /**
   * 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
   *
   * 默认为 true
   */
  autoPauseIfOpenNative: boolean;
  /**
   * 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）
   *
   * 默认为 false
   */
  vslideGesture: boolean;
  /**
   * 在全屏模式下，是否开启亮度与音量调节手势
   *
   * 默认为 true
   */
  vslideGestureInFullscreen: boolean;
  /** 视频前贴广告单元ID */
  adUnitId: string;
  /**
   * 用于给搜索等场景作为视频封面展示
   *
   * 建议使用无播放 icon 的视频封面图
   *
   * 只支持网络地址
   */
  posterForCrawler: string;
  /**
   * 解码器选择
   *
   * Hardware 硬件解码
   *
   * Software 软件解码
   *
   * 默认为 hardware
   */
  codec: _VideoCodec;
  /**
   * 是否对 http、https 视频源开启本地缓存
   *
   * 默认为 true
   */
  httpCache: boolean;
  /**
   * 播放策略
   *
   * 0 普通模式，适合绝大部分视频播放场景
   *
   * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl
   * 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
   *
   * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
   *
   * 默认为 0
   */
  playStrategy: _VideoPlayStrategy;
  /** HTTP 请求 Header */
  header: Record<string, any>;
  /** 开始/继续播放时触发 */
  onPlay: _VideoOnPlay;
  /** 暂停播放时触发 */
  onPause: _VideoOnPause;
  /** 播放到末尾时触发 */
  onEnded: _VideoOnEnded;
  /**
   * 播放进度变化时触发
   *
   * 250ms 一次
   */
  onTimeupdate: _VideoOnTimeupdate;
  /** 视频进入和退出全屏时触发 */
  onFullscreenchange: _VideoOnFullscreenchange;
  /** 视频缓冲时触发 */
  onWaiting: _VideoOnWaiting;
  /** 视频播放出错时触发 */
  onError: _VideoOnError;
  /** 加载进度变化时触发 */
  onProgress: _VideoOnProgress;
  /** 视频资源开始加载时触发 */
  onLoadeddata: _VideoOnLoadeddata;
  /** 开始加载数据时触发 */
  onLoadstart: _VideoOnLoadstart;
  /** 拖动进度条结束时触发 */
  onSeeked: _VideoOnSeeked;
  /** 拖动进度条时触发 */
  onSeeking: _VideoOnSeeking;
  /** 视频元数据加载完成时触发 */
  onLoadedmetadata: _VideoOnLoadedmetadata;
  /** 视频播放全屏播放点击时触发 */
  onFullscreenclick: _VideoOnFullscreenclick;
  /** 切换 controls 显示隐藏时触发 */
  onControlstoggle: _VideoOnControlstoggle;
}>;

/**
 * 视频播放组件
 *
 * 默认宽度 300px、高度 225px，可通过 css 设置宽高
 */
type _Video = DefineComponent<_VideoProps>;

/** 视频播放组件实例 */
type _VideoInstance = InstanceType<_Video>;

export type {
  _VideoDanmu as VideoDanmu,
  _VideoDirection as VideoDirection,
  _VideoObjectFit as VideoObjectFit,
  _VideoPlayBtnPosition as VideoPlayBtnPosition,
  _VideoCodec as VideoCodec,
  _VideoMobilenetHintType as VideoMobilenetHintType,
  _VideoPlayStrategy as VideoPlayStrategy,
  _VideoOnPlayEvent as VideoOnPlayEvent,
  _VideoOnPlay as VideoOnPlay,
  _VideoOnPauseEvent as VideoOnPauseEvent,
  _VideoOnPause as VideoOnPause,
  _VideoOnEndedEvent as VideoOnEndedEvent,
  _VideoOnEnded as VideoOnEnded,
  _VideoOnTimeupdateDetail as VideoOnTimeupdateDetail,
  _VideoOnTimeupdateEvent as VideoOnTimeupdateEvent,
  _VideoOnTimeupdate as VideoOnTimeupdate,
  _VideoOnFullscreenchangeDetail as VideoOnFullscreenchangeDetail,
  _VideoOnFullscreenchangeEvent as VideoOnFullscreenchangeEvent,
  _VideoOnFullscreenchange as VideoOnFullscreenchange,
  _VideoOnWaitingEvent as VideoOnWaitingEvent,
  _VideoOnWaiting as VideoOnWaiting,
  _VideoOnErrorEvent as VideoOnErrorEvent,
  _VideoOnError as VideoOnError,
  _VideoOnProgressDetail as VideoOnProgressDetail,
  _VideoOnProgressEvent as VideoOnProgressEvent,
  _VideoOnProgress as VideoOnProgress,
  _VideoOnLoadeddataEvent as VideoOnLoadeddataEvent,
  _VideoOnLoadeddata as VideoOnLoadeddata,
  _VideoOnLoadstartEvent as VideoOnLoadstartEvent,
  _VideoOnLoadstart as VideoOnLoadstart,
  _VideoOnSeekedEvent as VideoOnSeekedEvent,
  _VideoOnSeeked as VideoOnSeeked,
  _VideoOnSeekingEvent as VideoOnSeekingEvent,
  _VideoOnSeeking as VideoOnSeeking,
  _VideoOnLoadedmetadataDetail as VideoOnLoadedmetadataDetail,
  _VideoOnLoadedmetadataEvent as VideoOnLoadedmetadataEvent,
  _VideoOnLoadedmetadata as VideoOnLoadedmetadata,
  _VideoOnFullscreenclickDetail as VideoOnFullscreenclickDetail,
  _VideoOnFullscreenclickEvent as VideoOnFullscreenclickEvent,
  _VideoOnFullscreenclick as VideoOnFullscreenclick,
  _VideoOnControlstoggleDetail as VideoOnControlstoggleDetail,
  _VideoOnControlstoggleEvent as VideoOnControlstoggleEvent,
  _VideoOnControlstoggle as VideoOnControlstoggle,
  _VideoProps as VideoProps,
  _Video as Video,
  _VideoInstance as VideoInstance,
};

declare global {
  namespace UniHelper {
    /** 弹幕 */
    export interface VideoDanmu extends _VideoDanmu {}
    /**
     * 设置全屏时视频的方向，不指定则根据宽高比自动判断
     *
     * 0 正常竖向
     *
     * 90 屏幕逆时针 90 度
     *
     * -90 屏幕顺时针 90 度
     */
    export type VideoDirection = _VideoDirection;
    /**
     * 当视频大小与 video 容器大小不一致时，视频的表现形式
     *
     * Contain 包含
     *
     * Fill 填充
     *
     * Cover 覆盖
     */
    export type VideoObjectFit = _VideoObjectFit;
    /**
     * 播放按钮的位置
     *
     * Bottom 控制栏上
     *
     * Center 视频中间
     */
    export type VideoPlayBtnPosition = _VideoPlayBtnPosition;
    /**
     * 解码器选择
     *
     * Hardware 硬件解码
     *
     * Software 软件解码
     */
    export type VideoCodec = _VideoCodec;
    /**
     * 移动网络提醒样式
     *
     * 0 不提醒
     *
     * 1 提醒
     */
    export type VideoMobilenetHintType = _VideoMobilenetHintType;
    /**
     * 播放策略
     *
     * 0 普通模式，适合绝大部分视频播放场景
     *
     * 1 平滑播放模式（降级），增加缓冲区大小，采用 open sl
     * 解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等，适用于高码率视频的极端场景
     *
     * 2 M3U8 优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度，适用于 M3U8 在线播放的场景
     */
    export type VideoPlayStrategy = _VideoPlayStrategy;
    export type VideoOnPlayEvent = _VideoOnPlayEvent;
    /** 开始/继续播放时触发 */
    export interface VideoOnPlay extends _VideoOnPlay {}
    export type VideoOnPauseEvent = _VideoOnPauseEvent;
    /** 暂停播放时触发 */
    export interface VideoOnPause extends _VideoOnPause {}
    export type VideoOnEndedEvent = _VideoOnEndedEvent;
    /** 播放到末尾时触发 */
    export interface VideoOnEnded extends _VideoOnEnded {}
    export interface VideoOnTimeupdateDetail extends _VideoOnTimeupdateDetail {}
    export type VideoOnTimeupdateEvent = _VideoOnTimeupdateEvent;
    /**
     * 播放进度变化时触发，
     *
     * 250ms 一次
     */
    export interface VideoOnTimeupdate extends _VideoOnTimeupdate {}
    export interface VideoOnFullscreenchangeDetail
      extends _VideoOnFullscreenchangeDetail {}
    export type VideoOnFullscreenchangeEvent = _VideoOnFullscreenchangeEvent;
    /** 视频进入和退出全屏时触发 */
    export interface VideoOnFullscreenchange extends _VideoOnFullscreenchange {}
    export type VideoOnWaitingEvent = _VideoOnWaitingEvent;
    /** 视频缓冲时触发 */
    export interface VideoOnWaiting extends _VideoOnWaiting {}
    export type VideoOnErrorEvent = _VideoOnErrorEvent;
    /** 视频播放出错时触发 */
    export interface VideoOnError extends _VideoOnError {}
    export interface VideoOnProgressDetail extends _VideoOnProgressDetail {}
    export type VideoOnProgressEvent = _VideoOnProgressEvent;
    /** 加载进度变化时触发 */
    export interface VideoOnProgress extends _VideoOnProgress {}
    export type VideoOnLoadeddataEvent = _VideoOnLoadeddataEvent;
    /** 视频资源开始加载时触发 */
    export interface VideoOnLoadeddata extends _VideoOnLoadeddata {}
    export type VideoOnLoadstartEvent = _VideoOnLoadstartEvent;
    /** 开始加载数据时触发 */
    export interface VideoOnLoadstart extends _VideoOnLoadstart {}
    export type VideoOnSeekedEvent = _VideoOnSeekedEvent;
    /** 拖动进度条结束时触发 */
    export interface VideoOnSeeked extends _VideoOnSeeked {}
    export type VideoOnSeekingEvent = _VideoOnSeekingEvent;
    /** 拖动进度条时触发 */
    export interface VideoOnSeeking extends _VideoOnSeeking {}
    export interface VideoOnLoadedmetadataDetail
      extends _VideoOnLoadedmetadataDetail {}
    export type VideoOnLoadedmetadataEvent = _VideoOnLoadedmetadataEvent;
    /** 视频元数据加载完成时触发 */
    export interface VideoOnLoadedmetadata extends _VideoOnLoadedmetadata {}
    export interface VideoOnFullscreenclickDetail
      extends _VideoOnFullscreenclickDetail {}
    export type VideoOnFullscreenclickEvent = _VideoOnFullscreenclickEvent;
    /** 视频播放全屏播放点击时触发 */
    export interface VideoOnFullscreenclick extends _VideoOnFullscreenclick {}
    export interface VideoOnControlstoggleDetail
      extends _VideoOnControlstoggleDetail {}
    export type VideoOnControlstoggleEvent = _VideoOnControlstoggleEvent;
    /** 切换 controls 显示隐藏时触发 */
    export interface VideoOnControlstoggle extends _VideoOnControlstoggle {}
    /** 视频播放组件属性 */
    export type VideoProps = _VideoProps;
    /**
     * 视频播放组件
     *
     * 默认宽度 300px、高度 225px，可通过 css 设置宽高
     */
    export type Video = _Video;
    /** 视频播放组件实例 */
    export type VideoInstance = _VideoInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 视频播放组件
     *
     * 默认宽度 300px、高度 225px，可通过 css 设置宽高
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/video.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    video: _Video;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视频播放组件
       *
       * 默认宽度 300px、高度 225px，可通过 css 设置宽高
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/video.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      video: _Video;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视频播放组件
       *
       * 默认宽度 300px、高度 225px，可通过 css 设置宽高
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/video.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      video: _Video;
    }
  }
}
