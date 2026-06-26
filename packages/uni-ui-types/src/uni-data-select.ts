import type { DefineComponent } from "vue";

type _UniDataSelectValue = string | number;

interface _UniDataSelectLocaldataItem {
  /** 值 */
  value: _UniDataSelectValue;
  /** 显示文字 */
  text: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disable?: boolean;
}

/** 本地数据 */
type _UniDataSelectLocaldata = _UniDataSelectLocaldataItem[];

/**
 * 弹出位置
 *
 * top 顶部弹出
 *
 * bottom 底部弹出
 */
type _UniDataSelectPlacement = "top" | "bottom";

/**
 * 选择文字的位置
 *
 * left 左侧
 *
 * center 居中
 *
 * right 右侧
 */
type _UniDataSelectAlign = "left" | "center" | "right";

/**
 * 边框样式
 *
 * default 四周边框
 *
 * underline 下边框
 *
 * none 无边框
 */
type _UniDataSelectMode = "default" | "underline" | "none";

/** 选择框开启时触发 */
type _UniDataSelectOnOpen = () => void;

/** 选择框关闭时触发 */
type _UniDataSelectOnClose = () => void;

/** 点击清除按钮后触发 */
type _UniDataSelectOnClear = () => void;

/** 改变时触发 */
type _UniDataSelectOnChange = (value: _UniDataSelectValue) => void;

type _UniDataSelectProps = Partial<{
  /** 已选择数据的 value 值 */
  value: _UniDataSelectValue;
  /** 本地数据 */
  localdata: _UniDataSelectLocaldata;
  /**
   * 返回的数据量
   *
   * 云端请求时有效
   *
   * 默认为 20
   */
  pageSize: number;
  /**
   * 是否可以清空已选项
   *
   * 默认为 true
   */
  clear: boolean;
  /** 左侧标题 */
  label: string;
  /**
   * 输入框的提示文字
   *
   * 默认为 请选择
   */
  placeholder: string;
  /**
   * 没有数据时显示的文字，本地数据无效
   *
   * 默认为 无选项
   */
  emptyTips: string;
  /**
   * 没有数据时显示的文字，本地数据无效
   *
   * 默认为 暂无数据
   */
  emptyText: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否多选模式
   *
   * 默认为 false
   */
  multiple: boolean;
  /**
   * 是否允许选中文本换行显示
   *
   * 默认为 false
   */
  wrap: boolean;
  /**
   * 弹出位置
   *
   * top 顶部弹出
   *
   * bottom 底部弹出
   *
   * 默认为 bottom
   */
  placement: _UniDataSelectPlacement;
  /**
   * 选择文字的位置
   *
   * left 左侧
   *
   * center 居中
   *
   * right 右侧
   *
   * 默认为 left
   */
  align: _UniDataSelectAlign;
  /**
   * 是否隐藏右侧按钮
   *
   * 默认为 false
   */
  hideRight: boolean;
  /**
   * 边框样式
   *
   * default 四周边框
   *
   * underline 下边框
   *
   * none 无边框
   *
   * 默认为 default
   */
  mode: _UniDataSelectMode;
  /** 格式化输出 */
  format: string;
  /** 选择框开启时触发 */
  onOpen: _UniDataSelectOnOpen;
  /** 选择框关闭时触发 */
  onClose: _UniDataSelectOnClose;
  /** 点击清除按钮后触发 */
  onClear: _UniDataSelectOnClear;
  /** 改变时触发 */
  onChange: _UniDataSelectOnChange;
}>;

/**
 * 当选项过多时，使用下拉菜单展示并选择内容
 *
 * 本组件要解决问题包括
 *
 * 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容
 *
 * 自动的表单校验：组件绑定了 data，且符合 uni-forms 的表单校验规范，搭配使用会自动实现表单校验
 */
type _UniDataSelect = DefineComponent<_UniDataSelectProps>;

type _UniDataSelectInstance = InstanceType<_UniDataSelect>;

export type {
  _UniDataSelect as UniDataSelect,
  _UniDataSelectAlign as UniDataSelectAlign,
  _UniDataSelectInstance as UniDataSelectInstance,
  _UniDataSelectLocaldata as UniDataSelectLocaldata,
  _UniDataSelectLocaldataItem as UniDataSelectLocaldataItem,
  _UniDataSelectMode as UniDataSelectMode,
  _UniDataSelectOnChange as UniDataSelectOnChange,
  _UniDataSelectOnClear as UniDataSelectOnClear,
  _UniDataSelectOnClose as UniDataSelectOnClose,
  _UniDataSelectOnOpen as UniDataSelectOnOpen,
  _UniDataSelectPlacement as UniDataSelectPlacement,
  _UniDataSelectProps as UniDataSelectProps,
  _UniDataSelectValue as UniDataSelectValue,
};

declare global {
  namespace UniHelper {
    export type UniDataSelectValue = _UniDataSelectValue;
    export interface UniDataSelectLocaldataItem
      extends _UniDataSelectLocaldataItem {}
    /** 本地数据 */
    export type UniDataSelectLocaldata = _UniDataSelectLocaldata;
    /**
     * 弹出位置
     *
     * top 顶部弹出
     *
     * bottom 底部弹出
     */
    export type UniDataSelectPlacement = _UniDataSelectPlacement;
    /**
     * 选择文字的位置
     *
     * left 左侧
     *
     * center 居中
     *
     * right 右侧
     */
    export type UniDataSelectAlign = _UniDataSelectAlign;
    /**
     * 边框样式
     *
     * default 四周边框
     *
     * underline 下边框
     *
     * none 无边框
     */
    export type UniDataSelectMode = _UniDataSelectMode;
    /** 选择框开启时触发 */
    export interface UniDataSelectOnOpen extends _UniDataSelectOnOpen {}
    /** 选择框关闭时触发 */
    export interface UniDataSelectOnClose extends _UniDataSelectOnClose {}
    /** 点击清除按钮后触发 */
    export interface UniDataSelectOnClear extends _UniDataSelectOnClear {}
    /** 改变时触发 */
    export interface UniDataSelectOnChange extends _UniDataSelectOnChange {}
    export type UniDataSelectProps = _UniDataSelectProps;
    export type UniDataSelect = _UniDataSelect;
    export type UniDataSelectInstance = _UniDataSelectInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 当选项过多时，使用下拉菜单展示并选择内容
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-data-select.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniDataSelect: _UniDataSelect;
  }
}
