import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** 图标属性 */
type _IconProps = CommonProps &
  Partial<{
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
    /**
     * 视图盒子的尺寸
     *
     * 默认为 1024
     *
     * 仅小红书小程序支持
     */
    viewBox: number;
  }>;

/** 图标 */
type _Icon = DefineComponent<_IconProps>;

/** 图标实例 */
type _IconInstance = InstanceType<_Icon>;

export type {
  _Icon as Icon,
  _IconInstance as IconInstance,
  _IconProps as IconProps,
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
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    icon: _Icon;
  }
}
