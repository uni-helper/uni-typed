import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** 表单标签属性 */
type _LabelProps = CommonProps &
  Partial<{
    /** 绑定控件的 id */
    for: string;
  }>;

/**
 * 表单标签
 *
 * 用来改进表单组件的可用性
 *
 * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
 *
 * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
 */
type _Label = DefineComponent<_LabelProps>;

/** 表单标签实例 */
type _LabelInstance = InstanceType<_Label>;

export type {
  _LabelProps as LabelProps,
  _Label as Label,
  _LabelInstance as LabelInstance,
};

declare global {
  namespace UniHelper {
    /** 标签属性 */
    export type LabelProps = _LabelProps;
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     */
    export type Label = _Label;
    /** 表单标签实例 */
    export type LabelInstance = _LabelInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 表单标签
     *
     * 用来改进表单组件的可用性
     *
     * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
     *
     * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/label.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    label: _Label;
  }
}

// 3.0 <= Vue <= 3.2
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 表单标签
       *
       * 用来改进表单组件的可用性
       *
       * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
       *
       * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/label.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      label: _LabelProps;
    }
  }
}

// 3.3 <= Vue
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 表单标签
       *
       * 用来改进表单组件的可用性
       *
       * 使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件
       *
       * For 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/label.html)
       * |
       * [使用说明](https://uni-typed.netlify.app/)
       */
      label: _LabelProps;
    }
  }
}
