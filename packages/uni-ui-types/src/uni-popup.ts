import type { DefineComponent } from "vue";

/**
 * 弹出方式
 *
 * top 顶部弹出
 *
 * center 居中弹出
 *
 * bottom 底部弹出
 *
 * left 左侧弹出
 *
 * right 右侧弹出
 *
 * message 预置样式，消息提示
 *
 * dialog 预置样式，对话框
 *
 * share 预置样式，底部弹出分享
 */
type _UniPopupType =
  | "top"
  | "center"
  | "bottom"
  | "left"
  | "right"
  | "message"
  | "dialog"
  | "share";

interface _UniPopupOnChangeEvent {
  show: boolean;
  type: _UniPopupType;
}

/** 状态变化时触发 */
type _UniPopupOnChange = (event: _UniPopupOnChangeEvent) => void;

/** 点击遮罩层触发 */
type _UniPopupOnMaskClick = () => void;

/** 弹出层属性 */
type _UniPopupProps = Partial<{
  /**
   * 是否开启动画
   *
   * 默认为 true
   */
  animation: boolean;
  /**
   * 弹出方式
   *
   * top 顶部弹出
   *
   * center 居中弹出
   *
   * bottom 底部弹出
   *
   * left 左侧弹出
   *
   * right 右侧弹出
   *
   * message 预置样式，消息提示
   *
   * dialog 预置样式，对话框
   *
   * share 预置样式，底部弹出分享
   *
   * 默认为 center
   */
  type: _UniPopupType;
  /**
   * 蒙版点击是否关闭弹窗
   *
   * 默认为 true
   */
  isMaskClick: boolean;
  /**
   * 蒙版颜色
   *
   * 默认为 rgba(0, 0, 0, 0.4)
   */
  maskBackgroundColor: string;
  /**
   * 主窗口背景色
   *
   * 默认为 none
   */
  backgroundColor: string;
  /**
   * 是否适配底部安全区
   *
   * 默认为 true
   */
  safeArea: boolean;
  /** 打开弹出层 */
  open: (type?: _UniPopupType) => void;
  /** 关闭弹出层 */
  close: () => void;
  /** 状态变化时触发 */
  onChange: _UniPopupOnChange;
  /** 点击遮罩层触发 */
  onMaskClick: _UniPopupOnMaskClick;
}>;

/** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
type _UniPopup = DefineComponent<_UniPopupProps>;

/** 弹出层实例 */
type _UniPopupInstance = InstanceType<_UniPopup>;

export type {
  _UniPopupType as UniPopupType,
  _UniPopupOnChangeEvent as UniPopupOnChangeEvent,
  _UniPopupOnChange as UniPopupOnChange,
  _UniPopupOnMaskClick as UniPopupOnMaskClick,
  _UniPopupProps as UniPopupProps,
  _UniPopup as UniPopup,
  _UniPopupInstance as UniPopupInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 弹出方式
     *
     * top 顶部弹出
     *
     * center 居中弹出
     *
     * bottom 底部弹出
     *
     * left 左侧弹出
     *
     * right 右侧弹出
     *
     * message 预置样式，消息提示
     *
     * dialog 预置样式，对话框
     *
     * share 预置样式，底部弹出分享
     */
    export type UniPopupType = _UniPopupType;
    export type UniPopupOnChangeEvent = _UniPopupOnChangeEvent;
    /** 状态变化时触发 */
    export interface UniPopupOnChange extends _UniPopupOnChange {}
    /** 点击遮罩层触发 */
    export interface UniPopupOnMaskClick extends _UniPopupOnMaskClick {}
    /** 弹出层属性 */
    export type UniPopupProps = _UniPopupProps;
    /** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
    export type UniPopup = _UniPopup;
    /** 弹出层实例 */
    export type UniPopupInstance = _UniPopupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 弹出层组件，在应用中弹出一个消息提示窗口、提示框等
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniPopup: _UniPopup;
  }
}
