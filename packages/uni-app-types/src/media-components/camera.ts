import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

/**
 * 应用模式，不支持动态修改
 *
 * Normal 普通
 *
 * ScanCode 扫码
 */
type _CameraMode = "normal" | "scanCode";

/**
 * 分辨率，不支持动态修改
 *
 * Low 低
 *
 * Medium 中等
 *
 * High 高
 */
type _CameraResolution = "low" | "medium" | "high";

/**
 * 摄像头朝向
 *
 * Front 前置摄像头
 *
 * Back 后置摄像头
 */
type _CameraDevicePosition = "front" | "back";

/**
 * 闪光灯
 *
 * Auto 自动
 *
 * On 打开
 *
 * Off 关闭
 *
 * Torch 常亮
 */
type _CameraFlash = "auto" | "on" | "off" | "torch";

/**
 * 期望的相机帧数据尺寸
 *
 * Small 小
 *
 * Medium 中
 *
 * Large 大
 */
type _CameraFrameSize = "small" | "medium" | "large";

type _CameraOnStopEvent = BaseEvent;

/** 摄像头在非正常终止时触发 */
type _CameraOnStop = (event: _CameraOnStopEvent) => void;

type _CameraOnErrorEvent = BaseEvent;

/** 用户不允许使用摄像头时触发 */
type _CameraOnError = (event: BaseEvent) => void;

interface _CameraOnInitdoneDetail {
  maxZoom: number;
}

type _CameraOnInitdoneEvent = CustomEvent<_CameraOnInitdoneDetail>;

/** 相机初始化完成时触发 */
type _CameraOnInitdone = (event: _CameraOnInitdoneEvent) => void;

type _CameraOnScancodeEvent = BaseEvent;

/**
 * 扫码识别成功时触发
 *
 * Mode="scanCode" 时有效
 */
type _CameraOnScancode = (event: _CameraOnScancodeEvent) => void;

/** 页面内嵌的区域相机组件属性 */
type _CameraProps = CommonProps &
  Partial<{
    /**
     * 应用模式，不支持动态修改
     *
     * Normal 普通
     *
     * ScanCode 扫码
     *
     * 默认为 normal
     */
    mode: _CameraMode;
    /**
     * 分辨率，不支持动态修改
     *
     * Low 低
     *
     * Medium 中等
     *
     * High 高
     *
     * 默认为 medium
     */
    resolution: _CameraResolution;
    /**
     * 摄像头朝向
     *
     * Front 前置摄像头
     *
     * Back 后置摄像头
     *
     * 默认为 back
     */
    devicePosition: _CameraDevicePosition;
    /**
     * 闪光灯
     *
     * Auto 自动
     *
     * On 打开
     *
     * Off 关闭
     *
     * Torch 常亮
     *
     * 默认为 auto
     */
    flash: _CameraFlash;
    /**
     * 期望的相机帧数据尺寸
     *
     * Small 小
     *
     * Medium 中
     *
     * Large 大
     *
     * 默认为 medium
     */
    frameSize: _CameraFrameSize;
    /** 摄像头在非正常终止时触发 */
    onStop: _CameraOnStop;
    /** 用户不允许使用摄像头时触发 */
    onError: _CameraOnError;
    /** 相机初始化完成时触发 */
    onInitdone: _CameraOnInitdone;
    /**
     * 扫码识别成功时触发
     *
     * Mode="scanCode" 时有效
     */
    onScancode: _CameraOnScancode;
  }>;

/** 页面内嵌的区域相机组件 */
type _Camera = DefineComponent<_CameraProps>;

/** 页面内嵌的区域相机组件实例 */
type _CameraInstance = InstanceType<_Camera>;

export type {
  _CameraMode as CameraMode,
  _CameraResolution as CameraResolution,
  _CameraDevicePosition as CameraDevicePosition,
  _CameraFlash as CameraFlash,
  _CameraFrameSize as CameraFrameSize,
  _CameraOnStopEvent as CameraOnStopEvent,
  _CameraOnStop as CameraOnStop,
  _CameraOnErrorEvent as CameraOnErrorEvent,
  _CameraOnError as CameraOnError,
  _CameraOnInitdoneDetail as CameraOnInitdoneDetail,
  _CameraOnInitdoneEvent as CameraOnInitdoneEvent,
  _CameraOnInitdone as CameraOnInitdone,
  _CameraOnScancodeEvent as CameraOnScancodeEvent,
  _CameraOnScancode as CameraOnScancode,
  _CameraProps as CameraProps,
  _Camera as Camera,
  _CameraInstance as CameraInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 应用模式，不支持动态修改
     *
     * Normal 普通
     *
     * ScanCode 扫码
     */
    export type CameraMode = _CameraMode;
    /**
     * 分辨率，不支持动态修改
     *
     * Low 低
     *
     * Medium 中等
     *
     * High 高
     */
    export type CameraResolution = _CameraResolution;
    /**
     * 摄像头朝向
     *
     * Front 前置摄像头
     *
     * Back 后置摄像头
     */
    export type CameraDevicePosition = _CameraDevicePosition;
    /**
     * 闪光灯
     *
     * Auto 自动
     *
     * On 打开
     *
     * Off 关闭
     *
     * Torch 常亮
     */
    export type CameraFlash = _CameraFlash;
    /**
     * 期望的相机帧数据尺寸
     *
     * Small 小
     *
     * Medium 中
     *
     * Large 大
     */
    export type CameraFrameSize = _CameraFrameSize;
    export type CameraOnStopEvent = _CameraOnStopEvent;
    /** 摄像头在非正常终止时触发 */
    export interface CameraOnStop extends _CameraOnStop {}
    export type CameraOnErrorEvent = _CameraOnErrorEvent;
    /** 用户不允许使用摄像头时触发 */
    export interface CameraOnError extends _CameraOnError {}
    export interface CameraOnInitdoneDetail extends _CameraOnInitdoneDetail {}
    export type CameraOnInitdoneEvent = _CameraOnInitdoneEvent;
    /** 相机初始化完成时触发 */
    export interface CameraOnInitdone extends _CameraOnInitdone {}
    export type CameraOnScancodeEvent = _CameraOnScancodeEvent;
    /**
     * 扫码识别成功时触发
     *
     * Mode="scanCode" 时有效
     */
    export interface CameraOnScancode extends _CameraOnScancode {}
    /** 页面内嵌的区域相机组件属性 */
    export type CameraProps = _CameraProps;
    /** 页面内嵌的区域相机组件 */
    export type Camera = _Camera;
    /** 页面内嵌的区域相机组件实例 */
    export type CameraInstance = _CameraInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 页面内嵌的区域相机组件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/camera.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    camera: _Camera;
  }
}
