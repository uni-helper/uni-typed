import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { CustomEvent } from "../events";
import type { RadioValue } from "./radio";

interface _RadioGroupOnChangeDetail {
  value: RadioValue;
}

type _RadioGroupOnChangeEvent = CustomEvent<_RadioGroupOnChangeDetail>;

/** 选中项发生变化时触发 */
type _RadioGroupOnChange = (event: _RadioGroupOnChangeEvent) => void;

/** 单项选择器属性 */
type _RadioGroupProps = CommonProps &
  Partial<{
    /** 选中项发生变化时触发 */
    onChange: _RadioGroupOnChange;
  }>;

/**
 * 单项选择器，内部由多个 radio 组成
 *
 * 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
 */
type _RadioGroup = DefineComponent<_RadioGroupProps>;

/** 单项选择器实例 */
type _RadioGroupInstance = InstanceType<_RadioGroup>;

export type {
  _RadioGroup as RadioGroup,
  _RadioGroupInstance as RadioGroupInstance,
  _RadioGroupOnChange as RadioGroupOnChange,
  _RadioGroupOnChangeDetail as RadioGroupOnChangeDetail,
  _RadioGroupOnChangeEvent as RadioGroupOnChangeEvent,
  _RadioGroupProps as RadioGroupProps,
};

declare global {
  namespace UniHelper {
    export interface RadioGroupOnChangeDetail
      extends _RadioGroupOnChangeDetail {}
    export type RadioGroupOnChangeEvent = _RadioGroupOnChangeEvent;
    /** 选中项发生变化时触发 */
    export interface RadioGroupOnChange extends _RadioGroupOnChange {}
    /** 单项选择器属性 */
    export type RadioGroupProps = _RadioGroupProps;
    /**
     * 单项选择器，内部由多个 radio 组成
     *
     * 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
     */
    export type RadioGroup = _RadioGroup;
    /** 单项选择器实例 */
    export type RadioGroupInstance = _RadioGroupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 单项选择器，内部由多个 radio 组成
     *
     * 通过把多个 radio 包裹在一个 radio-group 下，实现这些 radio 的单选
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/radio.html#radio-group)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    RadioGroup: _RadioGroup;
  }
}
