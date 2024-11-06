import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

/**
 * 实时模式
 *
 * RTC 实时通话，该模式时延更低
 *
 * @dec live 直播
 */
type _LivePlayerMode = "live" | "RTC";

/**
 * 画面方向
 *
 * Vertical 纵向
 *
 * Horizontal 横向
 */
type _LivePlayerOrientation = "vertical" | "horizontal";

/**
 * 填充模式
 *
 * Contain 图像长边填满屏幕，短边区域会被填充⿊⾊
 *
 * FillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
 */
type _LivePlayerObjectFit = "contain" | "fillCrop";

/**
 * 声音输出方式
 *
 * Speaker 扬声器
 *
 * Ear 听筒
 *
 * 默认为 speaker
 */
type _LivePlayerSoundMode = "speaker" | "ear";

/**
 * 设置小窗模式
 *
 * Push 路由 push 时触发小窗
 *
 * Pop 路由 pop 时触发小窗
 */
type _LivePlayerPictureInPictureMode = "push" | "pop";

/**
 * 状态码
 *
 * 2001 已经连接服务器
 *
 * 2002 已经连接服务器，开始拉流
 *
 * 2003 网络接收到首个视频数据包 IDR
 *
 * 2004 视频播放开始
 *
 * 2005 视频播放进度
 *
 * 2006 视频播放结束
 *
 * 2007 视频播放 Loading
 *
 * 2008 解码器启动
 *
 * 2009 视频分辨率改变
 *
 * -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
 *
 * -2302 获取加速拉流地址失败
 *
 * 2101 当前视频帧解码失败
 *
 * 2102 当前音频帧解码失败
 *
 * 2103 网络断连, 已启动自动重连
 *
 * 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
 *
 * 2105 当前视频播放出现卡顿
 *
 * 2106 硬解启动失败，采用软解
 *
 * 2107 当前视频帧不连续，可能丢帧
 *
 * 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
 *
 * 3001 RTMP - DNS解析失败
 *
 * 3002 RTMP 服务器连接失败
 *
 * 3003 RTMP 服务器握手失败
 *
 * 3005 RTMP 读/写失败
 */
type _LivePlayerCode =
  | 2001
  | 2002
  | 2003
  | 2004
  | 2005
  | 2006
  | 2007
  | 2008
  | 2009
  | -2301
  | -2302
  | 2101
  | 2102
  | 2103
  | 2104
  | 2105
  | 2106
  | 2107
  | 2108
  | 3001
  | 3002
  | 3003
  | 3005;

/** 网络状态 */
interface _LivePlayerInfo {
  /**
   * 当前视频编/码器输出的比特率
   *
   * 单位为 kbps
   */
  videoBitrate?: number;
  /**
   * 当前音频编/码器输出的比特率
   *
   * 单位为 kbps
   */
  audioBitrate?: number;
  /** 当前视频帧率 */
  videoFPS?: number;
  /**
   * 当前视频 GOP，也就是每两个关键帧 I 帧间隔时长
   *
   * 单位为 s
   */
  videoGOP?: number;
  /** 当前的发送/接收速度 */
  netSpeed?: number;
  /** 网络抖动情况，抖动越大，网络越不稳定 */
  netJitter?: number;
  /** 网络质量 */
  netQualityLevel?: number;
  /** 视频画面的宽度 */
  videoWidth?: number;
  /** 视频画面的高度 */
  videoHeight?: number;
  /**
   * 缓冲的视频总时长
   *
   * 单位为 ms
   */
  videoCache?: number;
  /**
   * 缓冲的音频总时长
   *
   * 单位为 ms
   */
  audioCache?: number;
  /** 解码器中缓存的视频帧数 (Android 端硬解码时存在） */
  vDecCacheSize?: number;
  /** 缓冲的总视频帧数，该数值越大，播放延迟越高 */
  vSumCacheSize?: number;
  /**
   * 音画同步错位时间（播放），此数值越小，音画同步越好
   *
   * 单位为 ms
   */
  avPlayInterval?: number;
  /**
   * 音画同步错位时间（网络），此数值越小，音画同步越好
   *
   * @decs 单位为 ms
   */
  avRecvInterval?: number;
  /** 音频缓冲时长阈值，缓冲超过该阈值后，播放器会开始调控延时 */
  audioCacheThreshold?: number;
}

interface _LivePlayerOnStatechangeDetail {
  /**
   * 状态码
   *
   * 2001 已经连接服务器
   *
   * 2002 已经连接服务器，开始拉流
   *
   * 2003 网络接收到首个视频数据包 IDR
   *
   * 2004 视频播放开始
   *
   * 2005 视频播放进度
   *
   * 2006 视频播放结束
   *
   * 2007 视频播放 Loading
   *
   * 2008 解码器启动
   *
   * 2009 视频分辨率改变
   *
   * -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
   *
   * -2302 获取加速拉流地址失败
   *
   * 2101 当前视频帧解码失败
   *
   * 2102 当前音频帧解码失败
   *
   * 2103 网络断连, 已启动自动重连
   *
   * 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
   *
   * 2105 当前视频播放出现卡顿
   *
   * 2106 硬解启动失败，采用软解
   *
   * 2107 当前视频帧不连续，可能丢帧
   *
   * 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
   *
   * 3001 RTMP - DNS解析失败
   *
   * 3002 RTMP 服务器连接失败
   *
   * 3003 RTMP 服务器握手失败
   *
   * 3005 RTMP 读/写失败
   */
  code: _LivePlayerCode;
}

type _LivePlayerOnStatechangeEvent =
  CustomEvent<_LivePlayerOnStatechangeDetail>;

/** 播放状态变化时触发 */
type _LivePlayerOnStatechange = (event: _LivePlayerOnStatechangeEvent) => void;

interface _LivePlayerOnNetstatusDetail {
  /** 网络状态 */
  info: _LivePlayerInfo;
}

type _LivePlayerOnNetstatusEvent = CustomEvent<_LivePlayerOnNetstatusDetail>;

/** 网络状态变化时触发 */
type _LivePlayerOnNetstatus = (event: _LivePlayerOnNetstatusEvent) => void;

interface _LivePlayerOnFullscreenchangeDetail {
  direction: _LivePlayerOrientation;
  fullScreen: boolean;
}

type _LivePlayerOnFullscreenchangeEvent =
  CustomEvent<_LivePlayerOnFullscreenchangeDetail>;

/** 全屏变化时触发 */
type _LivePlayerOnFullscreenchange = (
  event: _LivePlayerOnFullscreenchangeEvent,
) => void;

type _LivePlayerOnAudiovolumenotifyEvent = BaseEvent;

/** 播放音量变化时触发 */
type _LivePlayerOnAudiovolumenotify = (
  event: _LivePlayerOnAudiovolumenotifyEvent,
) => void;

type _LivePlayerOnEnterpictureinpictureEvent = BaseEvent;

/** 播放器进入小窗时触发 */
type _LivePlayerOnEnterpictureinpicture = (
  event: _LivePlayerOnEnterpictureinpictureEvent,
) => void;

type _LivePlayerOnLeavepictureinpictureEvent = BaseEvent;

/** 播放器退出小窗时触发 */
type _LivePlayerOnLeavepictureinpicture = (
  event: _LivePlayerOnLeavepictureinpictureEvent,
) => void;

/** 实时音视频播放（直播拉流）属性 */
type _LivePlayerProps = CommonProps &
  Partial<{
    /** 唯一标志符 */
    id: string;
    /** 音视频地址 */
    src: string;
    /**
     * 实时模式
     *
     * RTC 实时通话，该模式时延更低
     *
     * 默认为 live
     *
     * @dec live 直播
     */
    mode: _LivePlayerMode;
    /**
     * 是否自动播放
     *
     * 默认为 false
     */
    autoplay: boolean;
    /**
     * 是否静音
     *
     * 默认为 false
     */
    muted: boolean;
    /**
     * 画面方向
     *
     * Vertical 纵向
     *
     * Horizontal 横向
     *
     * 默认为 vertical
     */
    orientation: _LivePlayerOrientation;
    /**
     * 填充模式
     *
     * Contain 图像长边填满屏幕，短边区域会被填充⿊⾊
     *
     * FillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
     *
     * 默认为 contain
     */
    objectFit: _LivePlayerObjectFit;
    /**
     * 进入后台时是否静音
     *
     * 默认为 false
     */
    backgroundMute: boolean;
    /**
     * 声音输出方式
     *
     * Speaker 扬声器
     *
     * Ear 听筒
     *
     * 默认为 speaker
     */
    soundMode: _LivePlayerSoundMode;
    /**
     * 最小缓冲区
     *
     * 单位为 s
     *
     * 默认为 1
     */
    minCache: number;
    /**
     * 最大缓冲区
     *
     * 单位为 s
     *
     * 默认为 3
     */
    maxCache: number;
    /** 设置小窗模式，空字符串或通过数组形式设置多种模式 */
    pictureInPictureMode:
      | _LivePlayerPictureInPictureMode
      | _LivePlayerPictureInPictureMode[];
    /** 播放状态变化时触发 */
    onStatechange: _LivePlayerOnStatechange;
    /** 网络状态变化时触发 */
    onNetstatus: _LivePlayerOnNetstatus;
    /** 全屏变化时触发 */
    onFullscreenchange: _LivePlayerOnFullscreenchange;
    /** 播放音量变化时触发 */
    onAudiovolumenotify: _LivePlayerOnAudiovolumenotify;
    /** 播放器进入小窗时触发 */
    onEnterpictureinpicture: _LivePlayerOnEnterpictureinpicture;
    /** 播放器退出小窗时触发 */
    onLeavepictureinpicture: _LivePlayerOnLeavepictureinpicture;
  }>;

/** 实时音视频播放（直播拉流） */
type _LivePlayer = DefineComponent<_LivePlayerProps>;

/** 实时音视频播放（直播拉流）实例 */
type _LivePlayerInstance = InstanceType<_LivePlayer>;

export type {
  _LivePlayerMode as LivePlayerMode,
  _LivePlayerOrientation as LivePlayerOrientation,
  _LivePlayerObjectFit as LivePlayerObjectFit,
  _LivePlayerSoundMode as LivePlayerSoundMode,
  _LivePlayerPictureInPictureMode as LivePlayerPictureInPictureMode,
  _LivePlayerCode as LivePlayerCode,
  _LivePlayerInfo as LivePlayerInfo,
  _LivePlayerOnStatechangeDetail as LivePlayerOnStatechangeDetail,
  _LivePlayerOnStatechangeEvent as LivePlayerOnStatechangeEvent,
  _LivePlayerOnStatechange as LivePlayerOnStatechange,
  _LivePlayerOnNetstatusDetail as LivePlayerOnNetstatusDetail,
  _LivePlayerOnNetstatusEvent as LivePlayerOnNetstatusEvent,
  _LivePlayerOnNetstatus as LivePlayerOnNetstatus,
  _LivePlayerOnFullscreenchangeDetail as LivePlayerOnFullscreenchangeDetail,
  _LivePlayerOnFullscreenchangeEvent as LivePlayerOnFullscreenchangeEvent,
  _LivePlayerOnFullscreenchange as LivePlayerOnFullscreenchange,
  _LivePlayerOnAudiovolumenotifyEvent as LivePlayerOnAudiovolumenotifyEvent,
  _LivePlayerOnAudiovolumenotify as LivePlayerOnAudiovolumenotify,
  _LivePlayerOnEnterpictureinpictureEvent as LivePlayerOnEnterpictureinpictureEvent,
  _LivePlayerOnEnterpictureinpicture as LivePlayerOnEnterpictureinpicture,
  _LivePlayerOnLeavepictureinpictureEvent as LivePlayerOnLeavepictureinpictureEvent,
  _LivePlayerOnLeavepictureinpicture as LivePlayerOnLeavepictureinpicture,
  _LivePlayerProps as LivePlayerProps,
  _LivePlayer as LivePlayer,
  _LivePlayerInstance as LivePlayerInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 实时模式
     *
     * RTC 实时通话，该模式时延更低
     *
     * @dec live 直播
     */
    export type LivePlayerMode = _LivePlayerMode;
    /**
     * 画面方向
     *
     * Vertical 纵向
     *
     * Horizontal 横向
     */
    export type LivePlayerOrientation = _LivePlayerOrientation;
    /**
     * 填充模式
     *
     * Contain 图像长边填满屏幕，短边区域会被填充⿊⾊
     *
     * FillCrop 图像铺满屏幕，超出显示区域的部分将被截掉
     */
    export type LivePlayerObjectFit = _LivePlayerObjectFit;
    /**
     * 声音输出方式
     *
     * Speaker 扬声器
     *
     * Ear 听筒
     *
     * 默认为 speaker
     */
    export type LivePlayerSoundMode = _LivePlayerSoundMode;
    /**
     * 设置小窗模式
     *
     * Push 路由 push 时触发小窗
     *
     * Pop 路由 pop 时触发小窗
     */
    export type LivePlayerPictureInPictureMode =
      _LivePlayerPictureInPictureMode;
    /**
     * 状态码
     *
     * 2001 已经连接服务器
     *
     * 2002 已经连接服务器，开始拉流
     *
     * 2003 网络接收到首个视频数据包 IDR
     *
     * 2004 视频播放开始
     *
     * 2005 视频播放进度
     *
     * 2006 视频播放结束
     *
     * 2007 视频播放 Loading
     *
     * 2008 解码器启动
     *
     * 2009 视频分辨率改变
     *
     * -2301 网络断连，且经多次重连抢救无效，更多重试请自行重启播放
     *
     * -2302 获取加速拉流地址失败
     *
     * 2101 当前视频帧解码失败
     *
     * 2102 当前音频帧解码失败
     *
     * 2103 网络断连, 已启动自动重连
     *
     * 2104 网络来包不稳，可能是下行带宽不足，或由于主播端出流不均匀
     *
     * 2105 当前视频播放出现卡顿
     *
     * 2106 硬解启动失败，采用软解
     *
     * 2107 当前视频帧不连续，可能丢帧
     *
     * 2108 当前流硬解第一个 I 帧失败，SDK 自动切软解
     *
     * 3001 RTMP - DNS解析失败
     *
     * 3002 RTMP 服务器连接失败
     *
     * 3003 RTMP 服务器握手失败
     *
     * 3005 RTMP 读/写失败
     */
    export type LivePlayerCode = _LivePlayerCode;
    /** 网络状态 */
    export interface LivePlayerInfo extends _LivePlayerInfo {}
    export interface LivePlayerOnStatechangeDetail
      extends _LivePlayerOnStatechangeDetail {}
    export type LivePlayerOnStatechangeEvent = _LivePlayerOnStatechangeEvent;
    /** 播放状态变化时触发 */
    export interface LivePlayerOnStatechange extends _LivePlayerOnStatechange {}
    export interface LivePlayerOnNetstatusDetail
      extends _LivePlayerOnNetstatusDetail {}
    export type LivePlayerOnNetstatusEvent = _LivePlayerOnNetstatusEvent;
    /** 网络状态变化时触发 */
    export interface LivePlayerOnNetstatus extends _LivePlayerOnNetstatus {}
    export interface LivePlayerOnFullscreenchangeDetail
      extends _LivePlayerOnFullscreenchangeDetail {}
    export type LivePlayerOnFullscreenchangeEvent =
      _LivePlayerOnFullscreenchangeEvent;
    /** 全屏变化时触发 */
    export interface LivePlayerOnFullscreenchange
      extends _LivePlayerOnFullscreenchange {}
    export type LivePlayerOnAudiovolumenotifyEvent =
      _LivePlayerOnAudiovolumenotifyEvent;
    /** 播放音量变化时触发 */
    export interface LivePlayerOnAudiovolumenotify
      extends _LivePlayerOnAudiovolumenotify {}
    export type LivePlayerOnEnterpictureinpictureEvent =
      _LivePlayerOnEnterpictureinpictureEvent;
    /** 播放器进入小窗时触发 */
    export interface LivePlayerOnEnterpictureinpicture
      extends _LivePlayerOnEnterpictureinpicture {}
    export type LivePlayerOnLeavepictureinpictureEvent =
      _LivePlayerOnLeavepictureinpictureEvent;
    /** 播放器退出小窗时触发 */
    export interface LivePlayerOnLeavepictureinpicture
      extends _LivePlayerOnLeavepictureinpicture {}
    /** 实时音视频播放（直播拉流）属性 */
    export type LivePlayerProps = _LivePlayerProps;
    /** 实时音视频播放（直播拉流） */
    export type LivePlayer = _LivePlayer;
    /** 实时音视频播放（直播拉流）实例 */
    export type LivePlayerInstance = _LivePlayerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 实时音视频播放（直播拉流）
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/live-player.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    LivePlayer: _LivePlayer;
  }
}
