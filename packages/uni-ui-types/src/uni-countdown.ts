import type { DefineComponent } from "vue";

/** 动态更新时间后，刷新组件显示 */
type _UniCountdownOnUpdate = () => void;

/** 倒计时时间到触发事件 */
type _UniCountdownOnTimeup = () => void;

/** 倒计时属性 */
type _UniCountdownProps = Partial<{
  /**
   * 背景色
   *
   * 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * 文字颜色
   *
   * 默认为 #000000
   */
  color: string;
  /**
   * 分隔符颜色
   *
   * 默认为 #333
   */
  splitorColor: string;
  /**
   * 天数
   *
   * 默认为 0
   */
  day: number;
  /**
   * 小时数
   *
   * 默认为 0
   */
  hour: number;
  /**
   * 分钟数
   *
   * 默认为 0
   */
  minute: number;
  /**
   * 秒数
   *
   * 默认为 0
   */
  second: number;
  /**
   * 目标时间戳
   *
   * 默认为 0
   */
  timestamp: number;
  /**
   * 是否显示天数
   *
   * 默认为 true
   */
  showDay: boolean;
  /**
   * 是否以冒号为分隔符
   *
   * 默认为 true
   */
  showColon: boolean;
  /**
   * 是否初始化组件后就开始倒计时
   *
   * 默认为 true
   */
  start: boolean;
  /** 动态更新时间后，刷新组件显示 */
  update: _UniCountdownOnUpdate;
  /** 倒计时时间到触发事件 */
  onTimeup: _UniCountdownOnTimeup;
}>;

/** 倒计时 */
type _UniCountdown = DefineComponent<_UniCountdownProps>;

/** 倒计时实例 */
type _UniCountdownInstance = InstanceType<_UniCountdown>;

export type {
  _UniCountdownOnUpdate as UniCountdownOnUpdate,
  _UniCountdownOnTimeup as UniCountdownOnTimeup,
  _UniCountdownProps as UniCountdownProps,
  _UniCountdown as UniCountdown,
  _UniCountdownInstance as UniCountdownInstance,
};

declare global {
  namespace UniHelper {
    /** 动态更新时间后，刷新组件显示 */
    export interface UniCountdownOnUpdate extends _UniCountdownOnUpdate {}
    /** 倒计时时间到触发事件 */
    export interface UniCountdownOnTimeup extends _UniCountdownOnTimeup {}
    /** 倒计时属性 */
    export type UniCountdownProps = _UniCountdownProps;
    /** 倒计时 */
    export type UniCountdown = _UniCountdown;
    /** 倒计时实例 */
    export type UniCountdownInstance = _UniCountdownInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 倒计时 */
    UniCountdown: _UniCountdown;
  }
}
