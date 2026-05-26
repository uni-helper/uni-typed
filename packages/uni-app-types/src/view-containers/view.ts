import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** 视图容器属性 */
type _ViewProps = CommonProps &
  Partial<{
    /**
     * 指定按下去的样式类
     *
     * 当 hover-class="none" 时，没有点击态效果
     *
     * 默认为 none
     */
    hoverClass: string;
    /**
     * 指定是否阻止本节点的祖先节点出现点击态
     *
     * 默认为 false
     */
    hoverStopPropagation: boolean;
    /**
     * 按住后多久出现点击态
     *
     * 单位为毫秒
     *
     * 默认为 50
     */
    hoverStartTime: number;
    /**
     * 手指松开后点击态保留时间
     *
     * 单位为毫秒
     *
     * 默认为 400
     */
    hoverStayTime: number;
  }>;

/**
 * 视图容器，和 div 类似，用于包裹各种元素内容
 *
 * 包裹文字建议使用 text
 *
 * 如果使用 div，会编译成 view
 */
type _View = DefineComponent<_ViewProps>;

/** 视图容器实例 */
type _ViewInstance = InstanceType<_View>;

export type {
  _View as View,
  _ViewInstance as ViewInstance,
  _ViewProps as ViewProps,
};

declare global {
  namespace UniHelper {
    /** 视图容器属性 */
    export type ViewProps = _ViewProps;
    /**
     * 视图容器，和 div 类似，用于包裹各种元素内容
     *
     * 包裹文字建议使用 text
     *
     * 如果使用 div，会编译成 view
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/view.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    export type View = _View;
    /** 视图容器实例 */
    export type ViewInstance = _ViewInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 视图容器，和 div 类似，用于包裹各种元素内容
     *
     * 包裹文字建议使用 text
     *
     * 如果使用 div，会编译成 view
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/view.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    view: _View;
  }
}

// 3.0 <= Vue < 3.3
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视图容器，和 div 类似，用于包裹各种元素内容
       *
       * 包裹文字建议使用 text
       *
       * 如果使用 div，会编译成 view
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/view.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      view: _ViewProps;
    }
  }
}

// 3.3 <= Vue < 3.4
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * 视图容器，和 div 类似，用于包裹各种元素内容
       *
       * 包裹文字建议使用 text
       *
       * 如果使用 div，会编译成 view
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/view.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      view: _ViewProps;
    }
  }
}

// 3.4 <= Vue
declare module "vue" {
  interface IntrinsicElementAttributes {
    /**
     * 视图容器，和 div 类似，用于包裹各种元素内容
     *
     * 包裹文字建议使用 text
     *
     * 如果使用 div，会编译成 view
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/view.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    /* @ts-expect-error Override. */
    view: _ViewProps;
  }
}
