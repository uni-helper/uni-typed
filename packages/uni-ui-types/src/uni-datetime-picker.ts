import type { DefineComponent } from "vue";

/**
 * 选择器类型
 *
 * date 日期
 *
 * daterange 日期范围
 *
 * datetime 日期时间
 *
 * datetimerange 日期时间范围
 */
type _UniDatetimePickerType =
  | "date"
  | "daterange"
  | "datetime"
  | "datetimerange";

/** 值类型 */
type _UniDatetimePickerValue =
  | string
  | number
  | Date
  | string[]
  | number[]
  | Date[];

/**
 * 最小值
 *
 * string 日期字符串
 *
 * number 时间戳
 */
type _UniDatetimePickerStart = string | number;

/**
 * 最大值
 *
 * string 日期字符串
 *
 * number 时间戳
 */
type _UniDatetimePickerEnd = string | number;

/** 返回值类型 */
type _UniDatetimePickerReturnType = "timestamp" | "string" | "date";

/** 打开弹出层 */
type _UniDatetimePickerShow = () => void;

/** 关闭弹出层 */
type _UniDatetimePickerClose = () => void;

/** 清除上次选中的状态和值 */
type _UniDatetimePickerClear = () => void;

/** 确定日期时间时触发的事件 */
type _UniDatetimePickerOnChange = (value: _UniDatetimePickerValue) => void;

/** 点击遮罩层触发 */
type _UniDatetimePickerOnMaskClick = (value: _UniDatetimePickerValue) => void;

type _UniDatetimePickerProps = Partial<{
  /**
   * 选择器类型
   *
   * date 日期
   *
   * daterange 日期范围
   *
   * datetime 日期时间
   *
   * datetimerange 日期时间范围
   *
   * 默认为 datetime
   */
  type: _UniDatetimePickerType;
  /** 输入框当前值 */
  value: _UniDatetimePickerValue;
  /** 最小值 */
  start: _UniDatetimePickerStart;
  /** 最大值 */
  end: _UniDatetimePickerEnd;
  /**
   * 返回值格式
   *
   * 默认为 string
   */
  returnType: _UniDatetimePickerReturnType;
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 选择范围时的分隔符
   *
   * 默认为 -
   */
  rangeSeparator: string;
  /** 非范围选择时的占位内容 */
  placeholder: string;
  /** 范围选择时开始日期的占位内容 */
  startPlaceholder: string;
  /** 范围选择时结束日期的占位内容 */
  endPlaceholder: string;
  /**
   * 是否不可选择
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否显示清除按钮
   *
   * 默认为 true
   */
  clearIcon: boolean;
  /**
   * 是否不显示秒，只显示时分
   *
   * 默认为 false
   */
  hideSecond: boolean;
  /** 打开弹出层 */
  show: _UniDatetimePickerShow;
  /** 关闭弹出层 */
  close: _UniDatetimePickerClose;
  /** 清除上次选中的状态和值 */
  clear: _UniDatetimePickerClear;
  /** 确定日期时间时触发的事件 */
  onChange: _UniDatetimePickerOnChange;
  /** 点击遮罩层触发 */
  onMaskClick: _UniDatetimePickerOnMaskClick;
}>;

/** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间 */
type _UniDatetimePicker = DefineComponent<_UniDatetimePickerProps>;

type _UniDatetimePickerInstance = InstanceType<_UniDatetimePicker>;

export type {
  _UniDatetimePickerType as UniDatetimePickerType,
  _UniDatetimePickerValue as UniDatetimePickerValue,
  _UniDatetimePickerStart as UniDatetimePickerStart,
  _UniDatetimePickerEnd as UniDatetimePickerEnd,
  _UniDatetimePickerReturnType as UniDatetimePickerReturnType,
  _UniDatetimePickerShow as UniDatetimePickerShow,
  _UniDatetimePickerClose as UniDatetimePickerClose,
  _UniDatetimePickerClear as UniDatetimePickerClear,
  _UniDatetimePickerOnChange as UniDatetimePickerOnChange,
  _UniDatetimePickerOnMaskClick as UniDatetimePickerOnMaskClick,
  _UniDatetimePickerProps as UniDatetimePickerProps,
  _UniDatetimePicker as UniDatetimePicker,
  _UniDatetimePickerInstance as UniDatetimePickerInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 选择器类型
     *
     * date 日期
     *
     * daterange 日期范围
     *
     * datetime 日期时间
     *
     * datetimerange 日期时间范围
     */
    export type UniDatetimePickerType = _UniDatetimePickerType;
    /** 值类型 */
    export type UniDatetimePickerValue = _UniDatetimePickerValue;
    /**
     * 最小值
     *
     * string 日期字符串
     *
     * number 时间戳
     */
    export type UniDatetimePickerStart = _UniDatetimePickerStart;
    /**
     * 最大值
     *
     * string 日期字符串
     *
     * number 时间戳
     */
    export type UniDatetimePickerEnd = _UniDatetimePickerEnd;
    /** 返回值类型 */
    export type UniDatetimePickerReturnType = _UniDatetimePickerReturnType;
    /** 打开弹出层 */
    export interface UniDatetimePickerShow extends _UniDatetimePickerShow {}
    /** 关闭弹出层 */
    export interface UniDatetimePickerClose extends _UniDatetimePickerClose {}
    /** 清除上次选中的状态和值 */
    export interface UniDatetimePickerClear extends _UniDatetimePickerClear {}
    /** 确定日期时间时触发的事件 */
    export interface UniDatetimePickerOnChange
      extends _UniDatetimePickerOnChange {}
    /** 点击遮罩层触发 */
    export interface UniDatetimePickerOnMaskClick
      extends _UniDatetimePickerOnMaskClick {}
    export type UniDatetimePickerProps = _UniDatetimePickerProps;
    /** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间 */
    export type UniDatetimePicker = _UniDatetimePicker;
    export type UniDatetimePickerInstance = _UniDatetimePickerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-datetime-picker.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniDatetimePicker: _UniDatetimePicker;
  }
}
