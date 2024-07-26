import type {
  Component,
  InputOnBlurEvent,
  InputOnFocusEvent,
} from "@uni-helper/uni-app-types";

/** 值 */
type _UniNumberBoxValue = number;

/** 值改变时触发 */
type _UniNumberBoxOnChange = (value: _UniNumberBoxValue) => void;

/** 值改变时触发 */
type _UniNumberBoxOnInput = (value: _UniNumberBoxValue) => void;

type _UniNumberBoxOnFocusEvent = InputOnFocusEvent;

/** 聚焦时触发 */
type _UniNumberBoxOnFocus = (event: _UniNumberBoxOnFocusEvent) => void;

type _UniNumberBoxOnBlurEvent = InputOnBlurEvent;

/** 失焦时触发 */
type _UniNumberBoxOnBlur = (event: _UniNumberBoxOnBlurEvent) => void;

/** 数字输入框属性 */
type _UniNumberBoxProps = Partial<{
  /**
   * 输入框当前值
   *
   * 默认为 0
   */
  value: _UniNumberBoxValue;
  /**
   * 最小值
   *
   * 默认为 0
   */
  min: number;
  /**
   * 最大值
   *
   * 默认为 100
   */
  max: number;
  /**
   * 每次点击改变的间隔大小
   *
   * 默认为 1
   */
  step: number;
  /**
   * 背景色
   *
   * 默认为 #f5f5f5
   */
  background: string;
  /**
   * 文本颜色
   *
   * 默认为 #333
   */
  color: string;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 值改变时触发 */
  onChange: _UniNumberBoxOnChange;
  /** 值改变时触发 */
  onInput: _UniNumberBoxOnInput;
  /** 聚焦时触发 */
  onFocus: _UniNumberBoxOnFocus;
  /** 失焦时触发 */
  onBlur: _UniNumberBoxOnBlur;
}>;

/** 带加减按钮的数字输入框 */
type _UniNumberBox = Component<_UniNumberBoxProps>;

/** 带加减按钮的数字输入框实例 */
type _UniNumberBoxInstance = InstanceType<_UniNumberBox>;

export type {
  _UniNumberBoxValue as UniNumberBoxValue,
  _UniNumberBoxOnChange as UniNumberBoxOnChange,
  _UniNumberBoxOnInput as UniNumberBoxOnInput,
  _UniNumberBoxOnFocusEvent as UniNumberBoxOnFocusEvent,
  _UniNumberBoxOnFocus as UniNumberBoxOnFocus,
  _UniNumberBoxOnBlurEvent as UniNumberBoxOnBlurEvent,
  _UniNumberBoxOnBlur as UniNumberBoxOnBlur,
  _UniNumberBoxProps as UniNumberBoxProps,
  _UniNumberBox as UniNumberBox,
  _UniNumberBoxInstance as UniNumberBoxInstance,
};

declare global {
  namespace UniHelper {
    /** 值 */
    export type UniNumberBoxValue = _UniNumberBoxValue;
    /** 值改变时触发 */
    export interface UniNumberBoxOnChange extends _UniNumberBoxOnChange {}
    /** 值改变时触发 */
    export interface UniNumberBoxOnInput extends _UniNumberBoxOnInput {}
    export type UniNumberBoxOnFocusEvent = _UniNumberBoxOnFocusEvent;
    /** 聚焦时触发 */
    export interface UniNumberBoxOnFocus extends _UniNumberBoxOnFocus {}
    export type UniNumberBoxOnBlurEvent = _UniNumberBoxOnBlurEvent;
    /** 失焦时触发 */
    export interface UniNumberBoxOnBlur extends _UniNumberBoxOnBlur {}
    /** 数字输入框属性 */
    export type UniNumberBoxProps = _UniNumberBoxProps;
    /** 带加减按钮的数字输入框 */
    export type UniNumberBox = _UniNumberBox;
    /** 带加减按钮的数字输入框实例 */
    export type UniNumberBoxInstance = _UniNumberBoxInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 带加减按钮的数字输入框 */
    UniNumberBox: _UniNumberBox;
  }
}
