import type { InputType } from "@uni-helper/uni-app-types";
import type { DefineComponent } from "vue";

/**
 * 消息提示主题
 *
 * success 成功
 *
 * warn 警告
 *
 * error 失败
 *
 * info 消息
 */
type _UniPopupDialogType = "success" | "warn" | "error" | "info";

/**
 * 对话框模式
 *
 * base 提示对话框
 *
 * input 可输入对话框
 */
type _UniPopupDialogMode = "base" | "input";

/**
 * 输入框类型
 *
 * text 文本输入键盘
 *
 * number 数字输入键盘
 *
 * idcard 身份证输入键盘
 *
 * digit 带小数点的数字键盘
 *
 * tel 电话输入键盘
 *
 * safe-password 密码安全输入键盘
 *
 * nickname 昵称输入键盘
 */
type _UniPopupDialogInputType = InputType;

/**
 * 输入框值
 *
 * mode="input" 时有效
 */
type _UniPopupDialogValue = string | number;

/** 点击取消时触发 */
type _UniPopupDialogOnClose = () => void;

interface _UniPopupDialogOnConfirmEvent {
  value: _UniPopupDialogValue;
}

/** 点击确定时触发 */
type _UniPopupDialogOnConfirm = (event?: _UniPopupDialogOnConfirmEvent) => void;

/** 对话框弹窗属性 */
type _UniPopupDialogProps = Partial<{
  /**
   * 对话框标题主题
   *
   * success 成功
   *
   * warn 警告
   *
   * error 失败
   *
   * info 消息
   */
  type: _UniPopupDialogType;
  /**
   * 对话框模式
   *
   * base 提示对话框
   *
   * input 可输入对话框
   *
   * 默认为 base
   */
  mode: _UniPopupDialogMode;
  /** 对话框标题 */
  title: string;
  /**
   * 对话框内容
   *
   * mode="base" 时有效
   */
  content: string;
  /**
   * 确定按钮文本
   *
   * 默认为 确定
   */
  confirmText: string;
  /**
   * 取消按钮文本
   *
   * 默认为 取消
   */
  cancelText: string;
  /**
   * 输入框类型
   *
   * mode="input" 时有效
   *
   * text 文本输入键盘
   *
   * number 数字输入键盘
   *
   * idcard 身份证输入键盘
   *
   * digit 带小数点的数字键盘
   *
   * tel 电话输入键盘
   *
   * safe-password 密码安全输入键盘
   *
   * nickname 昵称输入键盘
   *
   * 默认为 text
   */
  inputType: _UniPopupDialogInputType;
  /**
   * 输入框默认值
   *
   * mode="input" 时有效
   */
  value: _UniPopupDialogValue;
  /**
   * 输入框提示文字
   *
   * mode="input" 时有效
   */
  placeholder: string;
  /**
   * 是否拦截按钮事件
   *
   * true 不会关闭对话框，手动调用 close 以关闭
   *
   * 默认为 false
   */
  beforeClose: boolean;
  /** 点击取消时触发 */
  onClose: _UniPopupDialogOnClose;
  /** 点击确定时触发 */
  onConfirm: _UniPopupDialogOnConfirm;
}>;

/** 对话框弹窗 */
type _UniPopupDialog = DefineComponent<_UniPopupDialogProps>;

type _UniPopupDialogInstance = InstanceType<_UniPopupDialog>;

export type {
  _UniPopupDialogType as UniPopupDialogType,
  _UniPopupDialogMode as UniPopupDialogMode,
  _UniPopupDialogValue as UniPopupDialogValue,
  _UniPopupDialogOnClose as UniPopupDialogOnClose,
  _UniPopupDialogOnConfirmEvent as UniPopupDialogOnConfirmEvent,
  _UniPopupDialogOnConfirm as UniPopupDialogOnConfirm,
  _UniPopupDialogProps as UniPopupDialogProps,
  _UniPopupDialog as UniPopupDialog,
  _UniPopupDialogInstance as UniPopupDialogInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 消息提示主题
     *
     * success 成功
     *
     * warn 警告
     *
     * error 失败
     *
     * info 消息
     */
    export type UniPopupDialogType = _UniPopupDialogType;
    /**
     * 对话框模式
     *
     * base 提示对话框
     *
     * input 可输入对话框
     */
    export type UniPopupDialogMode = _UniPopupDialogMode;
    /**
     * 输入框值
     *
     * mode="input" 时有效
     */
    export type UniPopupDialogValue = _UniPopupDialogValue;
    /** 点击取消时触发 */
    export interface UniPopupDialogOnClose extends _UniPopupDialogOnClose {}
    export type UniPopupDialogOnConfirmEvent = _UniPopupDialogOnConfirmEvent;
    /** 点击确定时触发 */
    export interface UniPopupDialogOnConfirm extends _UniPopupDialogOnConfirm {}
    export type UniPopupDialogProps = _UniPopupDialogProps;
    export type UniPopupDialog = _UniPopupDialog;
    export type UniPopupDialogInstance = _UniPopupDialogInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 对话框
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-dialog-%E5%AF%B9%E8%AF%9D%E6%A1%86)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniPopupDialog: _UniPopupDialog;
  }
}
