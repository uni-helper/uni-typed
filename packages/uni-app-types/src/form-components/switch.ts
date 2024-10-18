import type { DefineComponent } from "vue";
import type { CustomEvent } from "../events";

/** 是否选中 */
type _SwitchChecked = boolean;

/** 样式 */
type _SwitchType = "_Switch" | "checkbox";

interface _SwitchOnChangeDetail {
  value: _SwitchChecked;
}

type _SwitchOnChangeEvent = CustomEvent<_SwitchOnChangeDetail>;

/** Checked 改变时触发 */
type _SwitchOnChange = (event: _SwitchOnChangeEvent) => void;

/** 开关选择器属性 */
type _SwitchProps = Partial<{
  /** 在 form 中作为 key */
  name: string;
  /**
   * 是否选中
   *
   * 默认为 false
   */
  checked: _SwitchChecked;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 样式 */
  type: _SwitchType;
  /** 颜色 */
  color: string;
  /** Checked 改变时触发 */
  onChange: _SwitchOnChange;
}>;

/** 开关选择器 */
type _Switch = DefineComponent<_SwitchProps>;

/** 开关选择器实例 */
type _SwitchInstance = InstanceType<_Switch>;

export type {
  _SwitchChecked as SwitchChecked,
  _SwitchType as SwitchType,
  _SwitchOnChangeDetail as SwitchOnChangeDetail,
  _SwitchOnChangeEvent as SwitchOnChangeEvent,
  _SwitchOnChange as SwitchOnChange,
  _SwitchProps as SwitchProps,
  _Switch as Switch,
  _SwitchInstance as SwitchInstance,
};

declare global {
  namespace UniHelper {
    /** 是否选中 */
    export type SwitchChecked = _SwitchChecked;
    /** 样式 */
    export type SwitchType = _SwitchType;
    export interface SwitchOnChangeDetail extends _SwitchOnChangeDetail {}
    export type SwitchOnChangeEvent = _SwitchOnChangeEvent;
    /** Checked 改变时触发 */
    export interface SwitchOnChange extends _SwitchOnChange {}
    /** 开关选择器属性 */
    export type SwitchProps = _SwitchProps;
    /** 开关选择器 */
    export type Switch = _Switch;
    /** 开关选择器实例 */
    export type SwitchInstance = _SwitchInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 开关选择器
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/switch.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    switch: _Switch;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 开关选择器
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/switch.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      switch: _Switch;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /** 开关选择器
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/switch.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      switch: _Switch;
    }
  }
}
