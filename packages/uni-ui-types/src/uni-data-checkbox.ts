import type { Component } from "@uni-helper/uni-app-types";

/** 默认值 */
type _UniDataCheckboxValue = string | number;

/**
 * 显示模式
 *
 * default 横向显示
 *
 * list 列表
 *
 * button 按钮
 *
 * tag 标签
 */
type _UniDataCheckboxMode = "default" | "list" | "button" | "tag";

interface _UniDataCheckboxLocaldataItem {
  /** 显示文本 */
  text: string;
  /** 选中后的值 */
  value: _UniDataCheckboxValue;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disable?: boolean;
}

/** 本地渲染数据 */
type _UniDataCheckboxLocaldata = _UniDataCheckboxLocaldataItem[];

/** list 模式下 icon 显示的位置 */
type _UniDataCheckboxIcon = "left" | "right";

/**
 * 字段映射
 *
 * 将 text/value 映射到数据中的其他字段
 */
interface _UniDataCheckboxMap {
  text: string;
  value: string;
}

type _UniDataCheckboxBaseProps = Partial<{
  /** 本地渲染数据 */
  localdata: _UniDataCheckboxLocaldata;
  /**
   * 显示模式
   *
   * default 横向显示
   *
   * list 列表
   *
   * button 按钮
   *
   * tag 标签
   *
   * 默认为 default
   */
  mode: _UniDataCheckboxMode;
  /**
   * 是否换行显示
   *
   * 默认为 false
   */
  wrap: boolean;
  /**
   * list 模式下 icon 显示的位置
   *
   * 默认为 left
   */
  icon: _UniDataCheckboxIcon;
  /**
   * 选中颜色
   *
   * 默认为 #2979ff
   */
  selectedColor: string;
  /**
   * 选中文本颜色
   *
   * 默认为 #666
   */
  selectedTextColor: string;
  /**
   * 没有数据时显示的文字，本地数据无效
   *
   * 默认为 暂无数据
   */
  emptyText: string;
  /**
   * 字段映射
   *
   * 将 text/value 映射到数据中的其他字段
   *
   * 默认为 { text: 'text', value: 'value' }
   */
  map: _UniDataCheckboxMap;
}>;

interface _UniDataCheckboxSingleOnChangeDetail {
  value: _UniDataCheckboxValue;
  data: _UniDataCheckboxLocaldata;
}

interface _UniDataCheckboxSingleOnChangeEvent {
  detail: _UniDataCheckboxSingleOnChangeDetail;
}

/** 选中状态改变时触发 */
type _UniDataCheckboxSingleOnChange = (
  event: _UniDataCheckboxSingleOnChangeEvent,
) => void;

type _UniDataCheckboxSingleProps = Partial<{
  /** 默认值 */
  value: _UniDataCheckboxValue;
  /**
   * 关闭多选
   *
   * 默认为 false
   */
  multiple?: false;
  /** 选中状态改变时触发 */
  onChange: _UniDataCheckboxSingleOnChange;
}>;

interface _UniDataCheckboxMultipleOnChangeDetail {
  value: _UniDataCheckboxValue[];
  data: _UniDataCheckboxLocaldata;
}

interface _UniDataCheckboxMultipleOnChangeEvent {
  detail: _UniDataCheckboxMultipleOnChangeDetail;
}

/** 选中状态改变时触发 */
type _UniDataCheckboxMultipleOnChange = (
  event: _UniDataCheckboxMultipleOnChangeEvent,
) => void;

type _UniDataCheckboxMultipleProps = Partial<{
  /** 默认值 */
  value: _UniDataCheckboxValue[];
  /**
   * 开启多选
   *
   * 默认为 false
   */
  multiple: true;
  /**
   * 最小选择个数
   *
   * multiple 为 true 时有效
   */
  min: string | number;
  /**
   * 最大选择个数
   *
   * multiple 为 true 时有效
   */
  max: string | number;
  /** 选中状态改变时触发 */
  onChange: _UniDataCheckboxMultipleOnChange;
}>;

type _UniDataCheckboxProps =
  | _UniDataCheckboxSingleProps
  | _UniDataCheckboxMultipleProps;

/**
 * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
 *
 * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
 *
 * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
 *
 * 本组件合并了单选多选
 *
 * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
 *
 * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成
 * uni-data-checkbox 组件并绑定好 data
 */
type _UniDataCheckbox = Component<_UniDataCheckboxProps>;

interface _UniDataCheckboxInstance extends InstanceType<_UniDataCheckbox>{};;

export type {
  _UniDataCheckboxValue as UniDataCheckboxValue,
  _UniDataCheckboxMode as UniDataCheckboxMode,
  _UniDataCheckboxLocaldataItem as UniDataCheckboxLocaldataItem,
  _UniDataCheckboxLocaldata as UniDataCheckboxLocaldata,
  _UniDataCheckboxIcon as UniDataCheckboxIcon,
  _UniDataCheckboxMap as UniDataCheckboxMap,
  _UniDataCheckboxBaseProps as UniDataCheckboxBaseProps,
  _UniDataCheckboxSingleOnChangeDetail as UniDataCheckboxSingleOnChangeDetail,
  _UniDataCheckboxSingleOnChangeEvent as UniDataCheckboxSingleOnChangeEvent,
  _UniDataCheckboxSingleOnChange as UniDataCheckboxSingleOnChange,
  _UniDataCheckboxSingleProps as UniDataCheckboxSingleProps,
  _UniDataCheckboxMultipleOnChangeDetail as UniDataCheckboxMultipleOnChangeDetail,
  _UniDataCheckboxMultipleOnChangeEvent as UniDataCheckboxMultipleOnChangeEvent,
  _UniDataCheckboxMultipleOnChange as UniDataCheckboxMultipleOnChange,
  _UniDataCheckboxMultipleProps as UniDataCheckboxMultipleProps,
  _UniDataCheckboxProps as UniDataCheckboxProps,
  _UniDataCheckbox as UniDataCheckbox,
  _UniDataCheckboxInstance as UniDataCheckboxInstance,
};

declare global {
  namespace UniHelper {
    /** 默认值 */
    export type UniDataCheckboxValue = _UniDataCheckboxValue;
    /**
     * 显示模式
     *
     * default 横向显示
     *
     * list 列表
     *
     * button 按钮
     *
     * tag 标签
     */
    export type UniDataCheckboxMode = _UniDataCheckboxMode;
    export interface UniDataCheckboxLocaldataItem
      extends _UniDataCheckboxLocaldataItem {}
    /** 本地渲染数据 */
    export type UniDataCheckboxLocaldata = _UniDataCheckboxLocaldata;
    /** list 模式下 icon 显示的位置 */
    export type UniDataCheckboxIcon = _UniDataCheckboxIcon;
    /**
     * 字段映射
     *
     * 将 text/value 映射到数据中的其他字段
     */
    export interface UniDataCheckboxMap extends _UniDataCheckboxMap {}
    export type UniDataCheckboxBaseProps = _UniDataCheckboxBaseProps;
    export interface UniDataCheckboxSingleOnChangeDetail
      extends _UniDataCheckboxSingleOnChangeDetail {}
    export type UniDataCheckboxSingleOnChangeEvent =
      _UniDataCheckboxSingleOnChangeEvent;
    /** 选中状态改变时触发 */
    export interface UniDataCheckboxSingleOnChange
      extends _UniDataCheckboxSingleOnChange {}
    export type UniDataCheckboxSingleProps = _UniDataCheckboxSingleProps;
    export interface UniDataCheckboxMultipleOnChangeDetail
      extends _UniDataCheckboxMultipleOnChangeDetail {}
    export type UniDataCheckboxMultipleOnChangeEvent =
      _UniDataCheckboxMultipleOnChangeEvent;
    /** 选中状态改变时触发 */
    export interface UniDataCheckboxMultipleOnChange
      extends _UniDataCheckboxMultipleOnChange {}
    export type UniDataCheckboxMultipleProps = _UniDataCheckboxMultipleProps;
    export type UniDataCheckboxProps = _UniDataCheckboxProps;
    /**
     * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
     *
     * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
     *
     * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
     *
     * 本组件合并了单选多选
     *
     * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
     *
     * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成
     * uni-data-checkbox 组件并绑定好 data
     */
    export type UniDataCheckbox = _UniDataCheckbox;
    export type UniDataCheckboxInstance = _UniDataCheckboxInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
     *
     * 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
     *
     * 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
     *
     * 本组件合并了单选多选
     *
     * 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
     *
     * 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成
     * uni-data-checkbox 组件并绑定好 data
     */
    UniDataCheckbox: _UniDataCheckbox;
  }
}
