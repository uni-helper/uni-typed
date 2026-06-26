import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/**
 * 标识
 *
 * 被选中时，radio-group 的 change 事件会携带该 value
 */
type _RadioValue = string;

/** 单选项目属性 */
type _RadioProps = CommonProps &
  Partial<{
    /** 在 form 中作为 key */
    name: string;
    /**
     * 标识
     *
     * 被选中时，radio-group 的 change 事件会携带该 value
     */
    value: _RadioValue;
    /**
     * 当前是否选中
     *
     * 默认为 false
     */
    checked: boolean;
    /**
     * 是否禁用
     *
     * 默认为 false
     */
    disabled: boolean;
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
     * 默认为 #007aff
     */
    activeBackgroundColor: string;
    /**
     * 选中时的边框颜色
     */
    activeBorderColor: string;
    /**
     * 图标颜色
     *
     * 默认为 #ffffff
     */
    iconColor: string;
  }>;

/** 单选项目 */
type _Radio = DefineComponent<_RadioProps>;

/** 单选项目实例 */
type _RadioInstance = InstanceType<_Radio>;

export type {
  _Radio as Radio,
  _RadioInstance as RadioInstance,
  _RadioProps as RadioProps,
  _RadioValue as RadioValue,
};

declare global {
  namespace UniHelper {
    /**
     * 标识
     *
     * 被选中时，radio-group 的 change 事件会携带该 value
     */
    export type RadioValue = _RadioValue;
    /** 单选项目属性 */
    export type RadioProps = _RadioProps;
    /** 单选项目 */
    export type Radio = _Radio;
    /** 单选项目实例 */
    export type RadioInstance = _RadioInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 单选项目
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/radio.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    radio: _Radio;
  }
}
