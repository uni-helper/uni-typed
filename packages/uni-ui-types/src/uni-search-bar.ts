import type { DefineComponent } from "vue";

/** 绑定值 */
type _UniSearchBarValue = string | number;

/**
 * 清除按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarClearButton = "always" | "auto" | "none";

/**
 * 取消按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarCancelButton = "always" | "auto" | "none";

interface _UniSearchBarBaseEvent {
  value: _UniSearchBarValue;
}

type _UniSearchBarOnConfirmEvent = _UniSearchBarBaseEvent;

/** 确认时触发 */
type _UniSearchBarOnConfirm = (event: _UniSearchBarOnConfirmEvent) => void;

type _UniSearchBarOnInputEvent = _UniSearchBarBaseEvent;

/** value 改变时触发 */
type _UniSearchBarOnInput = (event: _UniSearchBarOnInputEvent) => void;

type _UniSearchBarOnCancelEvent = _UniSearchBarBaseEvent;

/** 取消时触发 */
type _UniSearchBarOnCancel = (event: _UniSearchBarOnCancelEvent) => void;

type _UniSearchBarOnClearEvent = _UniSearchBarBaseEvent;

/** 清除时触发 */
type _UniSearchBarOnClear = (event: _UniSearchBarOnClearEvent) => void;

type _UniSearchBarOnFocusEvent = _UniSearchBarBaseEvent;

/** 聚焦时触发 */
type _UniSearchBarOnFocus = (event: _UniSearchBarOnFocusEvent) => void;

type _UniSearchBarOnBlurEvent = _UniSearchBarBaseEvent;

/** 失焦时触发 */
type _UniSearchBarOnBlur = (event: _UniSearchBarOnBlurEvent) => void;

/** 搜索栏属性 */
type _UniSearchBarProps = Partial<{
  /** 绑定值 */
  value: _UniSearchBarValue;
  /**
   * 占位文字
   *
   * 默认为 搜索
   */
  placeholder: string;
  /**
   * 搜索栏圆角
   *
   * 单位为 px
   *
   * 默认为 5
   */
  radius: number | string;
  /**
   * 清除按钮的显示方式
   *
   * always 一直显示
   *
   * auto 输入框不为空时显示
   *
   * none 一直不显示
   *
   * 默认为 auto
   */
  clearButton: _UniSearchBarClearButton;
  /**
   * 取消按钮的显示方式
   *
   * always 一直显示
   *
   * auto 输入框不为空时显示
   *
   * none 一直不显示
   *
   * 默认为 auto
   */
  cancelButton: _UniSearchBarCancelButton;
  /**
   * 取消按钮的文字
   *
   * 默认为 取消
   */
  cancelText: string;
  /**
   * 输入框背景颜色
   *
   * 默认为 #f8f8f8
   */
  bgColor: string;
  /**
   * 最大长度
   *
   * 默认为 100
   */
  maxlength: number | string;
  /**
   * 是否自动聚焦
   *
   * 默认为 false
   */
  focus: boolean;
  /** 确认时触发 */
  onConfirm: _UniSearchBarOnConfirm;
  /** value 改变时触发 */
  onInput: _UniSearchBarOnInput;
  /** 取消时触发 */
  onCancel: _UniSearchBarOnCancel;
  /** 清除时触发 */
  onClear: _UniSearchBarOnClear;
  /** 聚焦时触发 */
  onFocus: _UniSearchBarOnFocus;
  /** 失焦时触发 */
  onBlur: _UniSearchBarOnBlur;
}>;

/** 搜索栏 */
type _UniSearchBar = DefineComponent<_UniSearchBarProps>;

/** 搜索栏实例 */
type _UniSearchBarInstance = InstanceType<_UniSearchBar>;

export type {
  _UniSearchBarValue as UniSearchBarValue,
  _UniSearchBarClearButton as UniSearchBarClearButton,
  _UniSearchBarCancelButton as UniSearchBarCancelButton,
  _UniSearchBarBaseEvent as UniSearchBarBaseEvent,
  _UniSearchBarOnConfirmEvent as UniSearchBarOnConfirmEvent,
  _UniSearchBarOnConfirm as UniSearchBarOnConfirm,
  _UniSearchBarOnInputEvent as UniSearchBarOnInputEvent,
  _UniSearchBarOnInput as UniSearchBarOnInput,
  _UniSearchBarOnCancelEvent as UniSearchBarOnCancelEvent,
  _UniSearchBarOnCancel as UniSearchBarOnCancel,
  _UniSearchBarOnClearEvent as UniSearchBarOnClearEvent,
  _UniSearchBarOnClear as UniSearchBarOnClear,
  _UniSearchBarOnFocusEvent as UniSearchBarOnFocusEvent,
  _UniSearchBarOnFocus as UniSearchBarOnFocus,
  _UniSearchBarOnBlurEvent as UniSearchBarOnBlurEvent,
  _UniSearchBarOnBlur as UniSearchBarOnBlur,
  _UniSearchBarProps as UniSearchBarProps,
  _UniSearchBar as UniSearchBar,
  _UniSearchBarInstance as UniSearchBarInstance,
};

declare global {
  namespace UniHelper {
    /** 绑定值 */
    export type UniSearchBarValue = _UniSearchBarValue;
    /**
     * 清除按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     */
    export type UniSearchBarClearButton = _UniSearchBarClearButton;
    /**
     * 取消按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     */
    export type UniSearchBarCancelButton = _UniSearchBarCancelButton;
    export type UniSearchBarBaseEvent = _UniSearchBarBaseEvent;
    export type UniSearchBarOnConfirmEvent = _UniSearchBarOnConfirmEvent;
    /** 确认时触发 */
    export interface UniSearchBarOnConfirm extends _UniSearchBarOnConfirm {}
    export type UniSearchBarOnInputEvent = _UniSearchBarOnInputEvent;
    /** value 改变时触发 */
    export interface UniSearchBarOnInput extends _UniSearchBarOnInput {}
    export type UniSearchBarOnCancelEvent = _UniSearchBarOnCancelEvent;
    /** 取消时触发 */
    export interface UniSearchBarOnCancel extends _UniSearchBarOnCancel {}
    export type UniSearchBarOnClearEvent = _UniSearchBarOnClearEvent;
    /** 清除时触发 */
    export interface UniSearchBarOnClear extends _UniSearchBarOnClear {}
    export type UniSearchBarOnFocusEvent = _UniSearchBarOnFocusEvent;
    /** 聚焦时触发 */
    export interface UniSearchBarOnFocus extends _UniSearchBarOnFocus {}
    export type UniSearchBarOnBlurEvent = _UniSearchBarOnBlurEvent;
    /** 失焦时触发 */
    export interface UniSearchBarOnBlur extends _UniSearchBarOnBlur {}
    /** 搜索栏属性 */
    export type UniSearchBarProps = _UniSearchBarProps;
    /** 搜索栏 */
    export type UniSearchBar = _UniSearchBar;
    /** 搜索栏实例 */
    export type UniSearchBarInstance = _UniSearchBarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 搜索栏 */
    UniSearchBar: _UniSearchBar;
  }
}
