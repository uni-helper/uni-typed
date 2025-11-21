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
  }>;

/** 多选项目 */
type _Checkbox = DefineComponent<_CheckboxProps>;

/** 多选项目实例 */
type _CheckboxInstance = InstanceType<_Checkbox>;

export type {
  _CheckboxValue as CheckboxValue,
  _CheckboxProps as CheckboxProps,
  _Checkbox as Checkbox,
  _CheckboxInstance as CheckboxInstance,
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
