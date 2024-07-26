import type { Component } from "@uni-helper/uni-app-types";

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

/** 改变时触发 */
type _UniDataSelectOnChange = (value: _UniDataSelectValue) => void;

type _UniDataSelectProps = Partial<{
  /** 已选择数据的 value 值 */
  value: _UniDataSelectValue;
  /** 本地数据 */
  localdata: _UniDataSelectLocaldata;
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
  /** 格式化输出 */
  format: string;
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
type _UniDataSelect = Component<_UniDataSelectProps>;

interface _UniDataSelectInstance extends InstanceType<_UniDataSelect>{};;

export type {
  _UniDataSelectValue as UniDataSelectValue,
  _UniDataSelectLocaldataItem as UniDataSelectLocaldataItem,
  _UniDataSelectLocaldata as UniDataSelectLocaldata,
  _UniDataSelectOnChange as UniDataSelectOnChange,
  _UniDataSelectProps as UniDataSelectProps,
  _UniDataSelect as UniDataSelect,
  _UniDataSelectInstance as UniDataSelectInstance,
};

declare global {
  namespace UniHelper {
    export type UniDataSelectValue = _UniDataSelectValue;
    export interface UniDataSelectLocaldataItem
      extends _UniDataSelectLocaldataItem {}
    /** 本地数据 */
    export type UniDataSelectLocaldata = _UniDataSelectLocaldata;
    /** 改变时触发 */
    export interface UniDataSelectOnChange extends _UniDataSelectOnChange {}
    export type UniDataSelectProps = _UniDataSelectProps;
    export type UniDataSelect = _UniDataSelect;
    export type UniDataSelectInstance = _UniDataSelectInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UniDataSelect: _UniDataSelect;
  }
}
