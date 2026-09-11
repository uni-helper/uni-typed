import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** 覆盖在原生组件之上的视图属性 */
type _CoverViewProps = CommonProps &
  Partial<{
    /**
     * 设置顶部滚动偏移量
     *
     * 仅在设置了 overflow-y: scroll 成为滚动元素后生效
     */
    scrollTop: number | string;
  }>;

/**
 * 覆盖在原生组件之上的视图
 *
 * App-vue 和小程序框架，渲染引擎是 webview
 *
 * 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
 *
 * 为了能正常覆盖原生组件，设计了 cover-view
 */
type _CoverView = DefineComponent<_CoverViewProps>;

/** 覆盖在原生组件之上的视图 */
type _CoverViewInstance = InstanceType<_CoverView>;

export type {
  _CoverView as CoverView,
  _CoverViewInstance as CoverViewInstance,
  _CoverViewProps as CoverViewProps,
};

declare global {
  namespace UniHelper {
    /** 覆盖在原生组件之上的视图 */
    export type CoverViewProps = _CoverViewProps;
    /**
     * 覆盖在原生组件之上的视图
     *
     * App-vue 和小程序框架，渲染引擎是 webview
     *
     * 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
     *
     * 为了能正常覆盖原生组件，设计了 cover-view
     */
    export type CoverView = _CoverView;
    /** 覆盖在原生组件之上的视图实例 */
    export type CoverViewInstance = _CoverViewInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 覆盖在原生组件之上的视图
     *
     * App-vue 和小程序框架，渲染引擎是 webview
     *
     * 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
     *
     * 为了能正常覆盖原生组件，设计了 cover-view
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/cover-view.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    CoverView: _CoverView;
  }
}
