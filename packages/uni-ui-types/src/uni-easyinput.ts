import type { CustomEvent } from "@uni-helper/uni-app-types";
import type { DefineComponent } from "vue";

/** 输入内容 */
type _UniEasyinputValue = string | number;

/**
 * 输入框的类型
 *
 * text 文字输入键盘
 *
 * textarea 多行文本输入键盘
 *
 * password 密码输入键盘
 *
 * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
 *
 * idcard 身份证输入键盘
 *
 * digit 带小数点的数字键盘
 */
type _UniEasyinputType =
  | "text"
  | "textarea"
  | "password"
  | "number"
  | "idcard"
  | "digit";

/**
 * 设置键盘右下角按钮的文字
 *
 * type="text" 时有效
 *
 * send 发送
 *
 * search 搜索
 *
 * next 下一个
 *
 * go 前往
 *
 * done 完成
 */
type _UniEasyinputOnConfirmType = "send" | "search" | "next" | "go" | "done";

/**
 * 自动去除空格的类型
 *
 * true 去除左右空格
 *
 * false 不去除左右空格
 *
 * both 去除两端空格
 *
 * left 去除左侧空格
 *
 * right 去除右侧空格
 *
 * all 去除所有空格
 *
 * none 不去除空格
 */
type _UniEasyinputTrim = boolean | "both" | "left" | "right" | "all" | "none";

/** 自定义样式 */
interface _UniEasyinputStyles {
  /**
   * 输入文字颜色
   *
   * 默认为 #333
   */
  color: string;
  /**
   * 输入框背景色
   *
   * 默认为 #fff
   */
  backgroundColor: string;
  /**
   * 输入框禁用背景色
   *
   * 默认为 #f7f6f6
   */
  disableColor: string;
  /**
   * 边框颜色
   *
   * 默认为 #e5e5e5
   */
  borderColor: string;
}

/** 图标位置 */
type _UniEasyinputIconPosition = "prefix" | "suffix";

/** 输入框发生变化时触发 */
type _UniEasyinputOnInput = (value: _UniEasyinputValue) => void;

/** 清除时触发 */
type _UniEasyinputOnClear = () => void;

interface _UniEasyinputOnFocusDetail {
  value: _UniEasyinputValue;
  /** 键盘高度 */
  height?: number;
}

type _UniEasyinputOnFocusEvent = CustomEvent<_UniEasyinputOnFocusDetail>;

/** 输入框获得焦点时触发 */
type _UniEasyinputOnFocus = (event: _UniEasyinputOnFocusEvent) => void;

interface _UniEasyinputOnBlurDetail {
  value: _UniEasyinputValue;
  /** 光标位置 */
  cursor?: number;
}

type _UniEasyinputOnBlurEvent = CustomEvent<_UniEasyinputOnBlurDetail>;

/** 输入框失去焦点时触发 */
type _UniEasyinputOnBlur = (event: _UniEasyinputOnBlurEvent) => void;

/** 点击完成时触发 */
type _UniEasyinputOnConfirm = (value: _UniEasyinputValue) => void;

/** 点击图标时触发 */
type _UniEasyinputOnIconClick = (position: _UniEasyinputIconPosition) => void;

/** 输入框失去焦点或用户按下回车时触发 */
type _UniEasyinputOnChange = (value: _UniEasyinputValue) => void;

type _UniEasyinputProps = Partial<{
  /** 名称 */
  name: string;
  /** 输入内容 */
  value: _UniEasyinputValue;
  /**
   * 输入框的类型
   *
   * text 文字输入键盘
   *
   * textarea 多行文本输入键盘
   *
   * password 密码输入键盘
   *
   * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
   *
   * idcard 身份证输入键盘
   *
   * digit 带小数点的数字键盘
   *
   * 默认为 text
   */
  type: _UniEasyinputType;
  /**
   * 是否显示右侧清空内容的图标控件
   *
   * 输入框有内容且不禁用时显示
   *
   * 点击可清空输入框内容
   *
   * 默认为 true
   */
  clearable: boolean;
  /**
   * 是否自动增高输入区域
   *
   * type="textarea" 时有效
   *
   * 默认为 false
   */
  autoHeight: boolean;
  /** 输入框的提示文字 */
  placeholder: string;
  /** 提示文字样式 */
  placeholderStyle: string;
  /**
   * 是否自动获得焦点
   *
   * 默认为 false
   */
  focus: boolean;
  /**
   * 是否不可输入
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 最大输入长度
   *
   * 设置为 -1 时不限制最大长度
   *
   * 默认为 140
   */
  maxlength: number;
  /**
   * 设置键盘右下角按钮的文字
   *
   * type="text" 时有效
   *
   * send 发送
   *
   * search 搜索
   *
   * next 下一个
   *
   * go 前往
   *
   * done 完成
   *
   * 默认为 done
   */
  confirmType: _UniEasyinputOnConfirmType;
  /**
   * 清除图标的大小
   *
   * 单位为 px
   *
   * 默认为 24
   */
  clearSize: number;
  /** 输入框头部图标 */
  prefixIcon: string;
  /** 输入框尾部图标 */
  suffixIcon: string;
  /**
   * 是否自动去除空格
   *
   * true 去除左右空格
   *
   * false 不去除左右空格
   *
   * both 去除两端空格
   *
   * left 去除左侧空格
   *
   * right 去除右侧空格
   *
   * all 去除所有空格
   *
   * none 不去除空格
   *
   * 默认为 true
   */
  trim: _UniEasyinputTrim;
  /**
   * 是否显示输入框边框
   *
   * 默认为 true
   */
  inputBorder: boolean;
  /** 自定义样式 */
  styles: _UniEasyinputStyles;
  /**
   * 是否显示眼睛图标
   *
   * type="password" 时有效
   *
   * 默认为 true
   */
  passwordIcon: boolean;
  /**
   * 主题色
   *
   * 默认为 #2979ff
   */
  primaryColor: string;
  /** 错误信息 */
  errorMessage: string;
  /** 输入框发生变化时触发 */
  onInput: _UniEasyinputOnInput;
  /** 清除时触发 */
  onClear: _UniEasyinputOnClear;
  /** 输入框获得焦点时触发 */
  onFocus: _UniEasyinputOnFocus;
  /** 输入框失去焦点时触发 */
  onBlur: _UniEasyinputOnBlur;
  /** 点击完成时触发 */
  onConfirm: _UniEasyinputOnConfirm;
  /** 点击图标时触发 */
  onIconClick: _UniEasyinputOnIconClick;
  /** 输入框失去焦点或用户按下回车时触发 */
  onChange: _UniEasyinputOnChange;
}>;

/** 对原生 input 组件的增强 */
type _UniEasyinput = DefineComponent<_UniEasyinputProps>;

type _UniEasyinputInstance = InstanceType<_UniEasyinput>;

export type {
  _UniEasyinputValue as UniEasyinputValue,
  _UniEasyinputType as UniEasyinputType,
  _UniEasyinputOnConfirmType as UniEasyinputOnConfirmType,
  _UniEasyinputTrim as UniEasyinputTrim,
  _UniEasyinputStyles as UniEasyinputStyles,
  _UniEasyinputIconPosition as UniEasyinputIconPosition,
  _UniEasyinputOnInput as UniEasyinputOnInput,
  _UniEasyinputOnClear as UniEasyinputOnClear,
  _UniEasyinputOnFocusDetail as UniEasyinputOnFocusDetail,
  _UniEasyinputOnFocusEvent as UniEasyinputOnFocusEvent,
  _UniEasyinputOnFocus as UniEasyinputOnFocus,
  _UniEasyinputOnBlurDetail as UniEasyinputOnBlurDetail,
  _UniEasyinputOnBlurEvent as UniEasyinputOnBlurEvent,
  _UniEasyinputOnBlur as UniEasyinputOnBlur,
  _UniEasyinputOnConfirm as UniEasyinputOnConfirm,
  _UniEasyinputOnIconClick as UniEasyinputOnIconClick,
  _UniEasyinputOnChange as UniEasyinputOnChange,
  _UniEasyinputProps as UniEasyinputProps,
  _UniEasyinput as UniEasyinput,
  _UniEasyinputInstance as UniEasyinputInstance,
};

declare global {
  namespace UniHelper {
    /** 输入内容 */
    export type UniEasyinputValue = _UniEasyinputValue;
    /**
     * 输入框的类型
     *
     * text 文字输入键盘
     *
     * textarea 多行文本输入键盘
     *
     * password 密码输入键盘
     *
     * number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
     *
     * idcard 身份证输入键盘
     *
     * digit 带小数点的数字键盘
     */
    export type UniEasyinputType = _UniEasyinputType;
    /**
     * 设置键盘右下角按钮的文字
     *
     * type="text" 时有效
     *
     * send 发送
     *
     * search 搜索
     *
     * next 下一个
     *
     * go 前往
     *
     * done 完成
     */
    export type UniEasyinputOnConfirmType = _UniEasyinputOnConfirmType;
    /**
     * 自动去除空格的类型
     *
     * true 去除左右空格
     *
     * false 不去除左右空格
     *
     * both 去除两端空格
     *
     * left 去除左侧空格
     *
     * right 去除右侧空格
     *
     * all 去除所有空格
     *
     * none 不去除空格
     */
    export type UniEasyinputTrim = _UniEasyinputTrim;
    /** 自定义样式 */
    export type UniEasyinputStyles = _UniEasyinputStyles;
    /** 图标位置 */
    export type UniEasyinputIconPosition = _UniEasyinputIconPosition;
    /** 输入框发生变化时触发 */
    export interface UniEasyinputOnInput extends _UniEasyinputOnInput {}
    /** 清除时触发 */
    export interface UniEasyinputOnClear extends _UniEasyinputOnClear {}
    export interface UniEasyinputOnFocusDetail
      extends _UniEasyinputOnFocusDetail {}
    export type UniEasyinputOnFocusEvent = _UniEasyinputOnFocusEvent;
    /** 输入框获得焦点时触发 */
    export interface UniEasyinputOnFocus extends _UniEasyinputOnFocus {}
    export interface UniEasyinputOnBlurDetail
      extends _UniEasyinputOnBlurDetail {}
    export type UniEasyinputOnBlurEvent = _UniEasyinputOnBlurEvent;
    /** 输入框失去焦点时触发 */
    export interface UniEasyinputOnBlur extends _UniEasyinputOnBlur {}
    /** 点击完成时触发 */
    export interface UniEasyinputOnConfirm extends _UniEasyinputOnConfirm {}
    /** 点击图标时触发 */
    export interface UniEasyinputOnIconClick extends _UniEasyinputOnIconClick {}
    /** 输入框失去焦点或用户按下回车时触发 */
    export interface UniEasyinputOnChange extends _UniEasyinputOnChange {}
    export type UniEasyinputProps = _UniEasyinputProps;
    /** 对原生 input 组件的增强 */
    export type UniEasyinput = _UniEasyinput;
    export type UniEasyinputInstance = _UniEasyinputInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 对原生 input 组件的增强
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniEasyinput: _UniEasyinput;
  }
}
