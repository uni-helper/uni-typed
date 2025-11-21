import type { DefineComponent } from "vue";

/** flex 布局下的水平排列方式 */
type _UniRowJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";

/** flex 布局下的垂直排列方式 */
type _UniRowAlign = "top" | "middle" | "bottom";

/** 行属性 */
type _UniRowProps = Partial<{
  /**
   * 栅格间隔
   *
   * 默认为 0
   */
  gutter: number;
  /**
   * flex 布局下的水平排列方式
   *
   * 默认为 start
   */
  justify: _UniRowJustify;
  /**
   * flex 布局下的垂直排列方式
   *
   * 默认为 top
   */
  align: _UniRowAlign;
  /**
   * nvue 中无百分比 width，使用 span 等属性时，需配置此项 rpx 值
   *
   * 此项不会影响其他平台展示效果
   *
   * 默认为 750rpx
   */
  width: number | string;
}>;

/** 流式栅格系统中的行 */
type _UniRow = DefineComponent<_UniRowProps>;

/** 流式栅格系统中的行实例 */
type _UniRowInstance = InstanceType<_UniRow>;

export type {
  _UniRowJustify as UniRowJustify,
  _UniRowAlign as UniRowAlign,
  _UniRowProps as UniRowProps,
  _UniRow as UniRow,
  _UniRowInstance as UniRowInstance,
};

declare global {
  namespace UniHelper {
    /** flex 布局下的水平排列方式 */
    export type UniRowJustify = _UniRowJustify;
    /** flex 布局下的垂直排列方式 */
    export type UniRowAlign = _UniRowAlign;
    /** 行属性 */
    export type UniRowProps = _UniRowProps;
    /** 流式栅格系统中的行 */
    export type UniRow = _UniRow;
    /** 流式栅格系统中的行实例 */
    export type UniRowInstance = _UniRowInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 流式栅格系统中的行
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-row.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniRow: _UniRow;
  }
}
