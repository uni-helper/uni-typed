import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/**
 * 标识
 *
 * 选中时触发 checkbox-group 的 change 事件并携带 value
 */
type _CheckboxValue = string;

/** 多选项目属性 */
type _CheckboxProps = CommonProps &
  Partial<{
    /** 在 form 中作为 key */
    name: string;
    /**
     * 标识
     *
     * 选中时触发 checkbox-group 的 change 事件并携带 value
     */
    value: _CheckboxValue;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
    /**
     * 当前是否选中，可用于设置默认选中
     *
     * 默认为 false
     */
    checked: boolean;
    /** 颜色 */
    color: string;
    /**
     * 默认的背景颜色
     *
     * 默认为 #ffffff
     */
    backgroundColor: string;
    /**
     * 默认的边框颜色
     *
     * 默认为 #d1d1d1
     */
    borderColor: string;
    /**
     * 选中时的背景颜色，优先级高于 color
     *
     * 默认为 #ffffff
     */
    activeBackgroundColor: string;
    /**
     * 选中时的边框颜色
     *
     * 默认为 #d1d1d1
     */
    activeBorderColor: string;
    /**
     * 图标颜色
     *
     * 默认为 #007aff
     */
    iconColor: string;
  }>;

/** 多选项目 */
type _Checkbox = DefineComponent<_CheckboxProps>;

/** 多选项目实例 */
type _CheckboxInstance = InstanceType<_Checkbox>;

export type {
  _Checkbox as Checkbox,
  _CheckboxInstance as CheckboxInstance,
  _CheckboxProps as CheckboxProps,
  _CheckboxValue as CheckboxValue,
};

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 选中时触发 checkbox-group 的 change 事件并携带 value
     */
    export type CheckboxValue = _CheckboxValue;
    /** 多选项目属性 */
    export type CheckboxProps = _CheckboxProps;
    /** 多选项目 */
    export type Checkbox = _Checkbox;
    /** 多选项目实例 */
    export type CheckboxInstance = _CheckboxInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 多选项目
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/checkbox.html#checkbox)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    checkbox: _Checkbox;
  }
}
