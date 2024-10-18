import type { DefineComponent } from "vue";
import type { BaseEvent, CustomEvent } from "../events";

/**
 * 推流视频模式
 *
 * SD 标清
 *
 * HD 高清
 *
 * FHD 超清
 */
type _LivePusherMode = "SD" | "HD" | "FHD";

/**
 * 画面方向
 *
 * Vertical 纵向
 *
 * Horizontal 横向
 */
type _LivePusherOrientation = "vertical" | "horizontal";

/**
 * 音质
 *
 * High 高音质 48KHz
 *
 * Low 低音质 16KHz
 */
type _LivePusherAudioQuality = "high" | "low";

/**
 * 使用的摄像头
 *
 * Front 前置摄像头
 *
 * Back 后置摄像头
 */
type _LivePusherDevicePosition = "front" | "back";

/**
 * 控制本地预览画面是否镜像
 *
 * Auto 前置摄像头镜像，后置摄像头不镜像
 *
 * Enable 前后置摄像头均镜像
 *
 * Disable 前后置摄像头均不镜像
 */
type _LivePusherLocalMirror = "auto" | "enable" | "disable";

/**
 * 音频混响类型
 *
 * 0 关闭
 *
 * 1 KTV
 *
 * 2 小房间
 *
 * 3 大会堂
 *
 * 4 低沉
 *
 * 5 洪亮
 *
 * 6 金属声
 *
 * 7 磁性
 */
type _LivePusherAudioReverbType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * 音量类型
 *
 * Auto 自动
 *
 * Media 媒体音量
 *
 * Voicecall 通话音量
 */
type _LivePusherAudioVolumeType = "auto" | "media" | "voicecall";

/**
 * 状态码
 *
 * 1001 已经连接推流服务器
 *
 * 1002 已经与服务器握手完毕，开始推流
 *
 * 1003 打开摄像头成功
 *
 * 1004 录屏启动成功
 *
 * 1005 推流动态调整分辨率
 *
 * 1006 推流动态调整码率
 *
 * 1007 首帧画面采集完成
 *
 * 1008 编码器启动
 *
 * -1301 打开摄像头失败
 *
 * -1302 打开麦克风失败
 *
 * -1303 视频编码失败
 *
 * -1304 音频编码失败
 *
 * -1305 不支持的视频分辨率
 *
 * -1306 不支持的音频采样率
 *
 * -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
 *
 * -1308 开始录屏失败，可能是被用户拒绝
 *
 * -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
 *
 * -1310 录屏被其他应用打断了
 *
 * -1311 Android Mic 打开成功，但是录不到音频数据
 *
 * -1312 录屏动态切横竖屏失败
 *
 * 1101 网络状况不佳：上行带宽太小，上传数据受阻
 *
 * 1102 网络断连, 已启动自动重连
 *
 * 1103 硬编码启动失败,采用软编码
 *
 * 1104 视频编码失败
 *
 * 1105 新美颜软编码启动失败，采用老的软编码
 *
 * 1106 新美颜软编码启动失败，采用老的软编码
 *
 * 3001 RTMP -DNS 解析失败
 *
 * 3002 RTMP 服务器连接失败
 *
 * 3003 RTMP 服务器握手失败
 *
 * 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
 *
 * 3005 RTMP 读/写失败
 */
type _LivePusherCode =
  | 1001
  | 1002
  | 1003
  | 1004
  | 1005
  | 1006
  | 1007
  | 1008
  | -1301
  | -1302
  | -1303
  | -1304
  | -1305
  | -1306
  | -1307
  | -1308
  | -1309
  | -1310
  | -1311
  | -1312
  | 1101
  | 1102
  | 1103
  | 1104
  | 1105
  | 1106
  | 3001
  | 3002
  | 3003
  | 3004
  | 3005;

/** 网络状态 */
interface _LivePusherInfo {
  /**
   * 状态码
   *
   * 1001 已经连接推流服务器
   *
   * 1002 已经与服务器握手完毕，开始推流
   *
   * 1003 打开摄像头成功
   *
   * 1004 录屏启动成功
   *
   * 1005 推流动态调整分辨率
   *
   * 1006 推流动态调整码率
   *
   * 1007 首帧画面采集完成
   *
   * 1008 编码器启动
   *
   * -1301 打开摄像头失败
   *
   * -1302 打开麦克风失败
   *
   * -1303 视频编码失败
   *
   * -1304 音频编码失败
   *
   * -1305 不支持的视频分辨率
   *
   * -1306 不支持的音频采样率
   *
   * -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
   *
   * -1308 开始录屏失败，可能是被用户拒绝
   *
   * -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
   *
   * -1310 录屏被其他应用打断了
   *
   * -1311 Android Mic 打开成功，但是录不到音频数据
   *
   * -1312 录屏动态切横竖屏失败
   *
   * 1101 网络状况不佳：上行带宽太小，上传数据受阻
   *
   * 1102 网络断连, 已启动自动重连
   *
   * 1103 硬编码启动失败,采用软编码
   *
   * 1104 视频编码失败
   *
   * 1105 新美颜软编码启动失败，采用老的软编码
   *
   * 1106 新美颜软编码启动失败，采用老的软编码
   *
   * 3001 RTMP -DNS 解析失败
   *
   * 3002 RTMP 服务器连接失败
   *
   * 3003 RTMP 服务器握手失败
   *
   * 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
   *
   * 3005 RTMP 读/写失败
   */
  code?: _LivePusherCode;
  /** 具体的网络状态信息 */
  message?: string;
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
}

/**
 * 错误状态码
 *
 * 10001 用户禁止使用摄像头
 *
 * 10002 用户禁止使用录音
 *
 * 10003 背景音资源（BGM）加载失败
 *
 * 10004 等待画面资源（waiting-image）加载失败
 */
type _LiverPusherErrCode = 10_001 | 10_002 | 10_003 | 10_004;

interface _LivePusherOnStatechangeDetail {
  /**
   * 状态码
   *
   * 1001 已经连接推流服务器
   *
   * 1002 已经与服务器握手完毕，开始推流
   *
   * 1003 打开摄像头成功
   *
   * 1004 录屏启动成功
   *
   * 1005 推流动态调整分辨率
   *
   * 1006 推流动态调整码率
   *
   * 1007 首帧画面采集完成
   *
   * 1008 编码器启动
   *
   * -1301 打开摄像头失败
   *
   * -1302 打开麦克风失败
   *
   * -1303 视频编码失败
   *
   * -1304 音频编码失败
   *
   * -1305 不支持的视频分辨率
   *
   * -1306 不支持的音频采样率
   *
   * -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
   *
   * -1308 开始录屏失败，可能是被用户拒绝
   *
   * -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
   *
   * -1310 录屏被其他应用打断了
   *
   * -1311 Android Mic 打开成功，但是录不到音频数据
   *
   * -1312 录屏动态切横竖屏失败
   *
   * 1101 网络状况不佳：上行带宽太小，上传数据受阻
   *
   * 1102 网络断连, 已启动自动重连
   *
   * 1103 硬编码启动失败,采用软编码
   *
   * 1104 视频编码失败
   *
   * 1105 新美颜软编码启动失败，采用老的软编码
   *
   * 1106 新美颜软编码启动失败，采用老的软编码
   *
   * 3001 RTMP -DNS 解析失败
   *
   * 3002 RTMP 服务器连接失败
   *
   * 3003 RTMP 服务器握手失败
   *
   * 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
   *
   * 3005 RTMP 读/写失败
   */
  code: _LivePusherCode;
}

type _LivePusherOnStatechangeEvent =
  CustomEvent<_LivePusherOnStatechangeDetail>;

/** 播放状态变化时触发 */
type _LivePusherOnStatechange = (event: _LivePusherOnStatechangeEvent) => void;

interface _LivePusherOnNetstatusDetail {
  /** 网络状态 */
  info: _LivePusherInfo;
}

type _LivePusherOnNetstatusEvent = CustomEvent<_LivePusherOnNetstatusDetail>;

/** 网络状态变化时触发 */
type _LivePusherOnNetstatus = (event: _LivePusherOnNetstatusEvent) => void;

interface _LivePusherOnErrorDetail {
  /**
   * 错误状态码
   *
   * 10001 用户禁止使用摄像头
   *
   * 10002 用户禁止使用录音
   *
   * 10003 背景音资源（BGM）加载失败
   *
   * 10004 等待画面资源（waiting-image）加载失败
   */
  errCode: _LiverPusherErrCode;
  /** 错误信息 */
  errMsg: string;
}

type _LivePusherOnErrorEvent = CustomEvent<_LivePusherOnErrorDetail>;

/** 渲染错误时触发 */
type _LivePusherOnError = (event: _LivePusherOnErrorEvent) => void;

type _LivePusherOnBgmstartEvent = BaseEvent;

/** 背景音开始播放时触发 */
type _LivePusherOnBgmstart = (event: _LivePusherOnBgmstartEvent) => void;

interface _LivePusherOnBgmprogressDetail {
  progress: number;
  duration: number;
}

type _LivePusherOnBgmprogressEvent =
  CustomEvent<_LivePusherOnBgmprogressDetail>;

/** 背景音进度变化时触发 */
type _LivePusherOnBgmprogress = (event: _LivePusherOnBgmprogressEvent) => void;

type _LivePusherOnBgmcompleteEvent = BaseEvent;

/** 背景音播放完成时触发 */
type _LivePusherOnBgmcomplete = (event: _LivePusherOnBgmcompleteEvent) => void;

/** 实时音视频录制（直播推流）属性 */
type _LivePusherProps = Partial<{
  /** 推流地址，支持 RTMP 协议 */
  url: string;
  /**
   * 推流视频模式
   *
   * SD 标清
   *
   * HD 高清
   *
   * FHD 超清
   *
   * 默认为 SD
   */
  mode: _LivePusherMode;
  /**
   * 是否自动推流
   *
   * 默认为 false
   */
  autopush: boolean;
  /**
   * 视频宽高比例
   *
   * 默认为 3:2
   */
  aspect: number;
  /**
   * 是否静音
   *
   * 默认为 false
   */
  muted: boolean;
  /**
   * 是否开启摄像头
   *
   * 默认为 true
   */
  enableCamera: boolean;
  /**
   * 自动聚焦
   *
   * 默认为 true
   */
  autoFocus: boolean;
  /**
   * 美颜
   *
   * 取值范围为 0 - 9
   *
   * 默认为 0
   */
  beauty: number;
  /**
   * 美白
   *
   * 取值范围为 0 - 9
   *
   * 默认为 0
   */
  whiteness: number;
  /**
   * 画面方向
   *
   * Vertical 纵向
   *
   * Horizontal 横向
   *
   * 默认为 vertical
   */
  orientation: _LivePusherOrientation;
  /**
   * 最小码率
   *
   * 默认为 200
   */
  minBitrate: number;
  /**
   * 最大码率
   *
   * 默认为 1000
   */
  maxBitrate: number;
  /**
   * 音质
   *
   * High 高音质 48KHz
   *
   * Low 低音质 16KHz
   *
   * 默认为 high
   */
  audioQuality: _LivePusherAudioQuality;
  /** 进入后台时推流的等待画面 */
  waitingImage: string;
  /** 等待画面资源的 MD5 值 */
  waitingImageMd5: string;
  /**
   * 是否调整焦距
   *
   * 默认为 false
   */
  zoom: boolean;
  /**
   * 使用的摄像头
   *
   * Front 前置摄像头
   *
   * Back 后置摄像头
   *
   * 默认为 front
   */
  devicePosition: _LivePusherDevicePosition;
  /**
   * 进入后台时是否静音
   *
   * 默认为 false
   */
  backgroundMute: boolean;
  /**
   * 设置推流画面是否镜像，产生的效果在 live-player 呈现
   *
   * 默认为 false
   */
  remoteMirror: boolean;
  /**
   * 控制本地预览画面是否镜像
   *
   * Auto 前置摄像头镜像，后置摄像头不镜像
   *
   * Enable 前后置摄像头均镜像
   *
   * Disable 前后置摄像头均不镜像
   *
   * 默认为 auto
   */
  localMirror: _LivePusherLocalMirror;
  /**
   * 音频混响类型
   *
   * 0 关闭
   *
   * 1 KTV
   *
   * 2 小房间
   *
   * 3 大会堂
   *
   * 4 低沉
   *
   * 5 洪亮
   *
   * 6 金属声
   *
   * 7 磁性
   *
   * 默认为 0
   */
  audioReverbType: _LivePusherAudioReverbType;
  /**
   * 是否开启麦克风
   *
   * 默认为 true
   */
  enableMic: boolean;
  /**
   * 是否开启音频自动增益
   *
   * 默认为 false
   */
  enableAgc: boolean;
  /**
   * 是否开启音频噪声抑制
   *
   * 默认为 false
   */
  enableAns: boolean;
  /**
   * 音量类型
   *
   * Auto 自动
   *
   * Media 媒体音量
   *
   * Voicecall 通话音量
   *
   * 默认为 auto
   */
  audioVolumeType: _LivePusherAudioVolumeType;
  /** 播放状态变化时触发 */
  onStatechange: _LivePusherOnStatechange;
  /** 网络状态变化时触发 */
  onNetstatus: _LivePusherOnNetstatus;
  /** 渲染错误时触发 */
  onError: _LivePusherOnError;
  /** 背景音开始播放时触发 */
  onBgmstart: _LivePusherOnBgmstart;
  /** 背景音进度变化时触发 */
  onBgmprogress: _LivePusherOnBgmprogress;
  /** 背景音播放完成时触发 */
  onBgmcomplete: _LivePusherOnBgmcomplete;
}>;

/** 实时音视频录制（直播推流） */
type _LivePusher = DefineComponent<_LivePusherProps>;

/** 实时音视频录制（直播推流）实例 */
type _LivePusherInstance = InstanceType<_LivePusher>;

export type {
  _LivePusherMode as LivePusherMode,
  _LivePusherOrientation as LivePusherOrientation,
  _LivePusherAudioQuality as LivePusherAudioQuality,
  _LivePusherDevicePosition as LivePusherDevicePosition,
  _LivePusherLocalMirror as LivePusherLocalMirror,
  _LivePusherAudioReverbType as LivePusherAudioReverbType,
  _LivePusherAudioVolumeType as LivePusherAudioVolumeType,
  _LivePusherCode as LivePusherCode,
  _LivePusherInfo as LivePusherInfo,
  _LiverPusherErrCode as LiverPusherErrCode,
  _LivePusherOnStatechangeDetail as LivePusherOnStatechangeDetail,
  _LivePusherOnStatechangeEvent as LivePusherOnStatechangeEvent,
  _LivePusherOnStatechange as LivePusherOnStatechange,
  _LivePusherOnNetstatusDetail as LivePusherOnNetstatusDetail,
  _LivePusherOnNetstatusEvent as LivePusherOnNetstatusEvent,
  _LivePusherOnNetstatus as LivePusherOnNetstatus,
  _LivePusherOnErrorDetail as LivePusherOnErrorDetail,
  _LivePusherOnErrorEvent as LivePusherOnErrorEvent,
  _LivePusherOnError as LivePusherOnError,
  _LivePusherOnBgmstartEvent as LivePusherOnBgmstartEvent,
  _LivePusherOnBgmstart as LivePusherOnBgmstart,
  _LivePusherOnBgmprogressDetail as LivePusherOnBgmprogressDetail,
  _LivePusherOnBgmprogressEvent as LivePusherOnBgmprogressEvent,
  _LivePusherOnBgmprogress as LivePusherOnBgmprogress,
  _LivePusherOnBgmcompleteEvent as LivePusherOnBgmcompleteEvent,
  _LivePusherOnBgmcomplete as LivePusherOnBgmcomplete,
  _LivePusherProps as LivePusherProps,
  _LivePusher as LivePusher,
  _LivePusherInstance as LivePusherInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 推流视频模式
     *
     * SD 标清
     *
     * HD 高清
     *
     * FHD 超清
     */
    export type LivePusherMode = _LivePusherMode;
    /**
     * 画面方向
     *
     * Vertical 纵向
     *
     * Horizontal 横向
     */
    export type LivePusherOrientation = _LivePusherOrientation;
    /**
     * 音质
     *
     * High 高音质 48KHz
     *
     * Low 低音质 16KHz
     */
    export type LivePusherAudioQuality = _LivePusherAudioQuality;
    /**
     * 使用的摄像头
     *
     * Front 前置摄像头
     *
     * Back 后置摄像头
     */
    export type LivePusherDevicePosition = _LivePusherDevicePosition;
    /**
     * 控制本地预览画面是否镜像
     *
     * Auto 前置摄像头镜像，后置摄像头不镜像
     *
     * Enable 前后置摄像头均镜像
     *
     * Disable 前后置摄像头均不镜像
     */
    export type LivePusherLocalMirror = _LivePusherLocalMirror;
    /**
     * 音频混响类型
     *
     * 0 关闭
     *
     * 1 KTV
     *
     * 2 小房间
     *
     * 3 大会堂
     *
     * 4 低沉
     *
     * 5 洪亮
     *
     * 6 金属声
     *
     * 7 磁性
     */
    export type LivePusherAudioReverbType = _LivePusherAudioReverbType;
    /**
     * 音量类型
     *
     * Auto 自动
     *
     * Media 媒体音量
     *
     * Voicecall 通话音量
     */
    export type LivePusherAudioVolumeType = _LivePusherAudioVolumeType;

    /**
     * 状态码
     *
     * 1001 已经连接推流服务器
     *
     * 1002 已经与服务器握手完毕，开始推流
     *
     * 1003 打开摄像头成功
     *
     * 1004 录屏启动成功
     *
     * 1005 推流动态调整分辨率
     *
     * 1006 推流动态调整码率
     *
     * 1007 首帧画面采集完成
     *
     * 1008 编码器启动
     *
     * -1301 打开摄像头失败
     *
     * -1302 打开麦克风失败
     *
     * -1303 视频编码失败
     *
     * -1304 音频编码失败
     *
     * -1305 不支持的视频分辨率
     *
     * -1306 不支持的音频采样率
     *
     * -1307 网络断连，且经多次重连抢救无效，更多重试请自行重启推流
     *
     * -1308 开始录屏失败，可能是被用户拒绝
     *
     * -1309 录屏失败，不支持的 Android 系统版本，需要 5.0 以上的系统
     *
     * -1310 录屏被其他应用打断了
     *
     * -1311 Android Mic 打开成功，但是录不到音频数据
     *
     * -1312 录屏动态切横竖屏失败
     *
     * 1101 网络状况不佳：上行带宽太小，上传数据受阻
     *
     * 1102 网络断连, 已启动自动重连
     *
     * 1103 硬编码启动失败,采用软编码
     *
     * 1104 视频编码失败
     *
     * 1105 新美颜软编码启动失败，采用老的软编码
     *
     * 1106 新美颜软编码启动失败，采用老的软编码
     *
     * 3001 RTMP -DNS 解析失败
     *
     * 3002 RTMP 服务器连接失败
     *
     * 3003 RTMP 服务器握手失败
     *
     * 3004 RTMP 服务器主动断开，请检查推流地址的合法性或防盗链有效期
     *
     * 3005 RTMP 读/写失败
     */
    export type LivePusherCode = _LivePusherCode;
    /** 网络状态 */
    export interface LivePusherInfo extends _LivePusherInfo {}
    /**
     * 错误状态码
     *
     * 10001 用户禁止使用摄像头
     *
     * 10002 用户禁止使用录音
     *
     * 10003 背景音资源（BGM）加载失败
     *
     * 10004 等待画面资源（waiting-image）加载失败
     */
    export type LiverPusherErrCode = _LiverPusherErrCode;
    export interface LivePusherOnStatechangeDetail
      extends _LivePusherOnStatechangeDetail {}
    export type LivePusherOnStatechangeEvent = _LivePusherOnStatechangeEvent;
    /** 播放状态变化时触发 */
    export interface LivePusherOnStatechange extends _LivePusherOnStatechange {}
    export interface LivePusherOnNetstatusDetail
      extends _LivePusherOnNetstatusDetail {}
    export type LivePusherOnNetstatusEvent = _LivePusherOnNetstatusEvent;
    /** 网络状态变化时触发 */
    export interface LivePusherOnNetstatus extends _LivePusherOnNetstatus {}
    export interface LivePusherOnErrorDetail extends _LivePusherOnErrorDetail {}
    export type LivePusherOnErrorEvent = _LivePusherOnErrorEvent;
    /** 渲染错误时触发 */
    export interface LivePusherOnError extends _LivePusherOnError {}
    export type LivePusherOnBgmstartEvent = _LivePusherOnBgmstartEvent;
    /** 背景音开始播放时触发 */
    export interface LivePusherOnBgmstart extends _LivePusherOnBgmstart {}
    export interface LivePusherOnBgmprogressDetail
      extends _LivePusherOnBgmprogressDetail {}
    export type LivePusherOnBgmprogressEvent = _LivePusherOnBgmprogressEvent;
    /** 背景音进度变化时触发 */
    export interface LivePusherOnBgmprogress extends _LivePusherOnBgmprogress {}
    export type LivePusherOnBgmcompleteEvent = _LivePusherOnBgmcompleteEvent;
    /** 背景音播放完成时触发 */
    export interface LivePusherOnBgmcomplete extends _LivePusherOnBgmcomplete {}
    /** 实时音视频录制（直播推流）属性 */
    export type LivePusherProps = _LivePusherProps;
    /** 实时音视频录制（直播推流） */
    export type LivePusher = _LivePusher;
    /** 实时音视频录制（直播推流）实例 */
    export type LivePusherInstance = _LivePusherInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 实时音视频录制（直播推流)
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/live-pusher.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    LivePusher: _LivePusher;
  }
}
