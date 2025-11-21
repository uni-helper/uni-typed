import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { CustomEvent } from "../events";

/** 输入框的内容 */
type _InputValue = string;

/**
 * Input 类型
 *
 * Text 文本输入键盘
 *
 * Number 数字输入键盘
 *
 * Idcard 身份证输入键盘
 *
 * Digit 带小数点的数字键盘
 *
 * Tel 电话输入键盘
 *
 * Safe-password 密码安全输入键盘
 *
 * Nickname 昵称输入键盘
 */
type _InputType =
  | "text"
  | "number"
  | "idcard"
  | "digit"
  | "tel"
  | "safe-password"
  | "nickname";

/**
 * 文本区域的语义，根据类型自动填充
 *
 * OneTimeCode 一次性验证码
 */
type _InputTextContentType = "oneTimeCode";

/**
 * 设置键盘右下角按钮的文字
 *
 * Send 发送
 *
 * Search 搜索
 *
 * Next 下一个
 *
 * Go 前往
 *
 * Type="text" 时有效
 *
 * @decs done 完成
 */
type _InputConfirmType = "send" | "search" | "next" | "go" | "done";

/**
 * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
 *
 * None 无虚拟键盘，常用于实现自己的键盘输入控件
 *
 * Text 使用用户本地区域设置的标准文本输入键盘
 *
 * Decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
 *
 * Numeric 数字输入键盘，减号键的显示与否因设备而异
 *
 * Tel 电话输入键盘，表单内电话输入框应使用 type="tel"
 *
 * Search 搜索输入键盘
 *
 * Email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
 *
 * Url 网址输入键盘，表单内网址输入因 type="url"
 */
type _InputInputMode =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";

interface _InputOnInputDetail {
  value: _InputValue;
  /** 光标位置 */
  cursor?: number;
  /** 键值 */
  keyCode?: number;
}

type _InputOnInputEvent = CustomEvent<_InputOnInputDetail>;

/** 输入时触发 */
// biome-ignore lint/suspicious/noConfusingVoidType: as expected
type _InputOnInput = (event: _InputOnInputEvent) => string | void;

interface _InputOnFocusDetail {
  value: _InputValue;
  /** 键盘高度 */
  height?: number;
}

type _InputOnFocusEvent = CustomEvent<_InputOnFocusDetail>;

/** 聚焦时触发 */
type _InputOnFocus = (event: _InputOnFocusEvent) => void;

interface _InputOnBlurDetail {
  value: _InputValue;
}

type _InputOnBlurEvent = CustomEvent<_InputOnBlurDetail>;

/** 失焦时触发 */
type _InputOnBlur = (event: _InputOnBlurEvent) => void;

interface _InputOnConfirmDetail {
  value: _InputValue;
}

type _InputOnConfirmEvent = CustomEvent<_InputOnConfirmDetail>;

/** 点击完成按钮时触发 */
type _InputOnConfirm = (event: _InputOnConfirmEvent) => void;

interface _InputOnKeyboardheightchangeDetail {
  /** 键盘高度 */
  height: number;
  duration: number;
}

type _InputOnKeyboardheightchangeEvent =
  CustomEvent<_InputOnKeyboardheightchangeDetail>;

/** 键盘高度变化时触发 */
type _InputOnKeyboardheightchange = (
  event: _InputOnKeyboardheightchangeEvent,
) => void;

interface _InputOnNicknamereviewDetail {
  /** 昵称审核是否通过 */
  pass: boolean;
  /** 是否超时 */
  timeout: boolean;
}

type _InputOnNicknamereviewEvent = CustomEvent<_InputOnNicknamereviewDetail>;

/** 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 */
type _InputOnNicknamereview = (event: _InputOnNicknamereviewEvent) => void;

/** 输入框属性 */
type _InputProps = CommonProps &
  Partial<{
    /** 在 form 中作为 key */
    name: string;
    /** 输入框的初始内容 */
    value: _InputValue;
    /**
     * Input 类型
     *
     * Text 文本输入键盘
     *
     * Number 数字输入键盘
     *
     * Idcard 身份证输入键盘
     *
     * Digit 带小数点的数字键盘
     *
     * Tel 电话输入键盘
     *
     * Safe-password 密码安全输入键盘
     *
     * Nickname 昵称输入键盘
     *
     * 默认为 text
     */
    type: _InputType;
    /**
     * 文本区域的语义，根据类型自动填充
     *
     * OneTimeCode 一次性验证码
     */
    textContentType: _InputTextContentType;
    /**
     * 是否是密码类型
     *
     * 默认为 false
     */
    password: boolean;
    /** 输入框为空时占位符 */
    placeholder: string;
    /** 指定 placeholder 的样式 */
    placeholderStyle: string;
    /**
     * 指定 placeholder 的样式类
     *
     * 默认为 input-placeholder
     */
    placeholderClass: string;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 最大输入长度
     *
     * 设置为 -1 的时候不限制最大长度
     *
     * 默认为 140
     */
    maxlength: number;
    /**
     * 指定光标与键盘的距离
     *
     * 取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     *
     * 单位为 px
     *
     * 默认为 0
     */
    cursorSpacing: number;
    /**
     * 是否获取焦点
     *
     * 默认为 false
     */
    focus: boolean;
    /**
     * 是否自动聚焦，拉起键盘
     *
     * 默认为 false
     */
    autoFocus: boolean;
    /**
     * 设置键盘右下角按钮的文字
     *
     * Send 发送
     *
     * Search 搜索
     *
     * Next 下一个
     *
     * Go 前往
     *
     * Type="text" 时有效
     *
     * 默认为 done
     *
     * @decs done 完成
     */
    confirmType: _InputConfirmType;
    /**
     * 点击键盘右下角按钮时是否保持键盘不收起
     *
     * 默认为 false
     */
    confirmHold: boolean;
    /** 指定 focus 时的光标位置 */
    cursor: number;
    /**
     * 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
     *
     * 默认为 -1
     */
    selectionStart: number;
    /**
     * 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
     *
     * 默认为 -1
     */
    selectionEnd: number;
    /**
     * 键盘弹起时，是否自动上推页面
     *
     * 默认为 true
     */
    adjustPosition: boolean;
    /**
     * 聚焦时，点击页面的时候是否不收起键盘
     *
     * 默认为 false
     */
    holdKeyboard: boolean;
    /**
     * 键盘收起时，是否自动失焦
     *
     * 默认为 false
     */
    autoBlur: boolean;
    /**
     * 是否忽略组件内对文本合成系统事件的处理
     *
     * 为 false 时将触发 compositionstart、compositionend、compositionupdate
     * 事件，且在文本合成期间会触发 input 事件
     *
     * 默认为 true
     */
    ignoreCompositionEvent: boolean;
    /**
     * 是否强制 input 处于同层状态，仅在 iOS 生效
     *
     * 默认聚焦时 input 会切到非同层状态
     *
     * 默认为 false
     */
    alwaysEmbed: boolean;
    /** 安全键盘加密公钥的路径，只支持包内路径 */
    safePasswordCertPath: string;
    /** 安全键盘输入密码长度 */
    safePasswordLength: number;
    /** 安全键盘加密时间戳 */
    safePasswordTimeStamp: number;
    /** 安全键盘加密盐值 */
    safePasswordNonce: string;
    /** 安全键盘计算 hash 盐值，若指定 custom-hash 则无效 */
    safePasswordSalt: string;
    /** 安全键盘计算 hash 的算法表达式 */
    safePasswordCustomHash: string;
    /**
     * 当 type 为 number、digit、idcard 时，数字键盘是否随机排列
     *
     * 默认为 false
     */
    randomNumber: boolean;
    /**
     * 是否为受控组件
     *
     * 为 true 时，value 内容会完全受 setData 控制
     *
     * 默认为 false
     */
    controlled: boolean;
    /**
     * 是否强制使用系统键盘和 Web-view 创建的 input 元素
     *
     * 为 true 时，confirm-type、confirm-hold 可能失效
     *
     * 默认为 false
     */
    alwaysSystem: boolean;
    /**
     * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
     *
     * None 无虚拟键盘，常用于实现自己的键盘输入控件
     *
     * Text 使用用户本地区域设置的标准文本输入键盘
     *
     * Decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
     *
     * Numeric 数字输入键盘，减号键的显示与否因设备而异
     *
     * Tel 电话输入键盘，表单内电话输入框应使用 type="tel"
     *
     * Search 搜索输入键盘
     *
     * Email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
     *
     * Url 网址输入键盘，表单内网址输入因 type="url"
     */
    inputMode: _InputInputMode;
    /** 输入时触发 */
    onInput: _InputOnInput;
    /** 聚焦时触发 */
    onFocus: _InputOnFocus;
    /** 失焦时触发 */
    onBlur: _InputOnBlur;
    /** 点击完成按钮时触发 */
    onConfirm: _InputOnConfirm;
    /** 键盘高度变化时触发 */
    onKeyboardheightchange: _InputOnKeyboardheightchange;
    /** 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 */
    onNicknamereview: _InputOnNicknamereview;
  }>;

/** 输入框 */
type _Input = DefineComponent<_InputProps>;

/** 输入框实例 */
type _InputInstance = InstanceType<_Input>;

export type {
  _InputValue as InputValue,
  _InputType as InputType,
  _InputTextContentType as InputTextContentType,
  _InputConfirmType as InputConfirmType,
  _InputInputMode as InputInputMode,
  _InputOnInputDetail as InputOnInputDetail,
  _InputOnInputEvent as InputOnInputEvent,
  _InputOnInput as InputOnInput,
  _InputOnFocusDetail as InputOnFocusDetail,
  _InputOnFocusEvent as InputOnFocusEvent,
  _InputOnFocus as InputOnFocus,
  _InputOnBlurDetail as InputOnBlurDetail,
  _InputOnBlurEvent as InputOnBlurEvent,
  _InputOnBlur as InputOnBlur,
  _InputOnConfirmDetail as InputOnConfirmDetail,
  _InputOnConfirmEvent as InputOnConfirmEvent,
  _InputOnConfirm as InputOnConfirm,
  _InputOnKeyboardheightchangeDetail as InputOnKeyboardheightchangeDetail,
  _InputOnKeyboardheightchangeEvent as InputOnKeyboardheightchangeEvent,
  _InputOnKeyboardheightchange as InputOnKeyboardheightchange,
  _InputOnNicknamereviewDetail as InputOnNicknamereviewDetail,
  _InputOnNicknamereviewEvent as InputOnNicknamereviewEvent,
  _InputOnNicknamereview as InputOnNicknamereview,
  _InputProps as InputProps,
  _Input as Input,
  _InputInstance as InputInstance,
};

declare global {
  namespace UniHelper {
    /** 输入框的内容 */
    export type InputValue = _InputValue;
    /**
     * Input 类型
     *
     * Text 文本输入键盘
     *
     * Number 数字输入键盘
     *
     * Idcard 身份证输入键盘
     *
     * Digit 带小数点的数字键盘
     *
     * Tel 电话输入键盘
     *
     * Safe-password 密码安全输入键盘
     *
     * Nickname 昵称输入键盘
     */
    export type InputType = _InputType;
    /**
     * 文本区域的语义，根据类型自动填充
     *
     * OneTimeCode 一次性验证码
     */
    export type InputTextContentType = _InputTextContentType;
    /**
     * 设置键盘右下角按钮的文字
     *
     * Send 发送
     *
     * Search 搜索
     *
     * Next 下一个
     *
     * Go 前往
     *
     * Type="text" 时有效
     *
     * @decs done 完成
     */
    export type InputConfirmType = _InputConfirmType;
    /**
     * 枚举属性，提供了用户在编辑元素或其内容时可能输入的数据类型的提示
     *
     * None 无虚拟键盘，常用于实现自己的键盘输入控件
     *
     * Text 使用用户本地区域设置的标准文本输入键盘
     *
     * Decimal 小数输入键盘，包含数字和分隔符，减号键的显示与否因设备而异
     *
     * Numeric 数字输入键盘，减号键的显示与否因设备而异
     *
     * Tel 电话输入键盘，表单内电话输入框应使用 type="tel"
     *
     * Search 搜索输入键盘
     *
     * Email 邮件地址输入键盘，表单内邮件地址输入框应使用 type="email"
     *
     * Url 网址输入键盘，表单内网址输入因 type="url"
     */
    export type InputInputMode = _InputInputMode;
    export interface InputOnInputDetail extends _InputOnInputDetail {}
    export type InputOnInputEvent = _InputOnInputEvent;
    /** 输入时触发 */
    export interface InputOnInput extends _InputOnInput {}
    export interface InputOnFocusDetail extends _InputOnFocusDetail {}
    export type InputOnFocusEvent = _InputOnFocusEvent;
    /** 聚焦时触发 */
    export interface InputOnFocus extends _InputOnFocus {}
    export interface InputOnBlurDetail extends _InputOnBlurDetail {}
    export type InputOnBlurEvent = _InputOnBlurEvent;
    /** 失焦时触发 */
    export interface InputOnBlur extends _InputOnBlur {}
    export interface InputOnConfirmDetail extends _InputOnConfirmDetail {}
    export type InputOnConfirmEvent = _InputOnConfirmEvent;
    /** 点击完成按钮时触发 */
    export interface InputOnConfirm extends _InputOnConfirm {}
    export interface InputOnKeyboardheightchangeDetail
      extends _InputOnKeyboardheightchangeDetail {}
    export type InputOnKeyboardheightchangeEvent =
      _InputOnKeyboardheightchangeEvent;
    /** 键盘高度变化时触发 */
    export interface InputOnKeyboardheightchange
      extends _InputOnKeyboardheightchange {}
    export interface InputOnNicknamereviewDetail
      extends _InputOnNicknamereviewDetail {}
    export type InputOnNicknamereviewEvent = _InputOnNicknamereviewEvent;
    /** 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 */
    export interface InputOnNicknamereview extends _InputOnNicknamereview {}
    /** 输入框属性 */
    export type InputProps = _InputProps;
    /** 输入框 */
    export type Input = _Input;
    /** 输入框实例 */
    export type InputInstance = _InputInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 输入框
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/input.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    input: _Input;
  }
}

// 3.0 <= Vue < 3.3
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 输入框
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/input.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      input: _InputProps;
    }
  }
}

// 3.3 <= Vue < 3.4
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /** 输入框
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/input.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      input: _InputProps;
    }
  }
}

// 3.4 <= Vue
declare module "vue" {
  interface IntrinsicElementAttributes {
    /** 输入框
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/input.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    input: _InputProps;
  }
}
