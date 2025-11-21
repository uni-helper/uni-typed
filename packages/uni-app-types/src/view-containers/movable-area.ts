import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** 可拖动区域属性 */
type _MovableAreaProps = CommonProps &
  Partial<{
    /**
     * 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
     *
     * 默认为 false
     */
    scaleArea: boolean;
  }>;

/**
 * 可拖动区域
 *
 * Movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域
 *
 * 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
 *
 * 也可以不拖动，而使用代码来触发 movable-view 在 movable-area 里的移动缩放
 *
 * 默认宽高为 10px
 */
type _MovableArea = DefineComponent<_MovableAreaProps>;

/** 可拖动区域实例 */
type _MovableAreaInstance = InstanceType<_MovableArea>;

export type {
  _MovableAreaProps as MovableAreaProps,
  _MovableArea as MovableArea,
  _MovableAreaInstance as MovableAreaInstance,
};

declare global {
  namespace UniHelper {
    /** 可拖动区域属性 */
    export type MovableAreaProps = _MovableAreaProps;
    /**
     * 可拖动区域
     *
     * Movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域
     *
     * 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
     *
     * 也可以不拖动，而使用代码来触发 movable-view 在 movable-area 里的移动缩放
     *
     * 默认宽高为 10px
     */
    export type MovableArea = _MovableArea;
    /** 可拖动区域实例 */
    export type MovableAreaInstance = _MovableAreaInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 可拖动区域
     *
     * Movable-area 指代可拖动的范围，在其中内嵌 movable-view 组件用于指示可拖动的区域
     *
     * 即手指/鼠标按住 movable-view 拖动或双指缩放，但拖不出 movable-area 规定的范围
     *
     * 也可以不拖动，而使用代码来触发 movable-view 在 movable-area 里的移动缩放
     *
     * 默认宽高为 10px
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/movable-area.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    MovableArea: _MovableArea;
  }
}
