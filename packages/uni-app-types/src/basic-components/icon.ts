import type { DefineComponent } from "vue";

/** 图标属性 */
type _IconProps = Partial<{
  /** 类型 */
  type: string;
  /**
   * 大小
   *
   * 单位为 px
   *
   * 默认为 23
   */
  size: number;
  /** 颜色 */
  color: string;
}>;

/** 图标 */
type _Icon = DefineComponent<_IconProps>;

/** 图标实例 */
type _IconInstance = InstanceType<_Icon>;

export type {
  _IconProps as IconProps,
  _Icon as Icon,
  _IconInstance as IconInstance,
};

declare global {
  namespace UniHelper {
    /** 图标属性 */
    export type IconProps = _IconProps;
    /** 图标 */
    export type Icon = _Icon;
    /** 图标实例 */
    export type IconInstance = _IconInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 图标
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/icon.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    icon: _Icon;
  }
}
