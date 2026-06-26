import type { DefineComponent } from "vue";

/**
 * 出现位置
 *
 * left 左侧
 *
 * right 右侧
 *
 * top 上方
 *
 * bottom 下方
 */
type _UniTooltipPlacement = "left" | "right" | "top" | "bottom";

type _UniTooltipProps = Partial<{
  /** 显示内容 */
  content: string;
  /**
   * 出现位置
   *
   * left 左侧
   *
   * right 右侧
   *
   * top 上方
   *
   * bottom 下方
   *
   * 默认为 left
   */
  placement: _UniTooltipPlacement;
}>;

/** 提示文字 */
type _UniTooltip = DefineComponent<_UniTooltipProps>;

type _UniTooltipInstance = InstanceType<_UniTooltip>;

export type {
  _UniTooltip as UniTooltip,
  _UniTooltipInstance as UniTooltipInstance,
  _UniTooltipPlacement as UniTooltipPlacement,
  _UniTooltipProps as UniTooltipProps,
};

declare global {
  namespace UniHelper {
    /**
     * 出现位置
     *
     * left 左侧
     *
     * right 右侧
     *
     * top 上方
     *
     * bottom 下方
     */
    export type UniTooltipPlacement = _UniTooltipPlacement;
    export type UniTooltipProps = _UniTooltipProps;
    /** 提示文字 */
    export type UniTooltip = _UniTooltip;
    export type UniTooltipInstance = _UniTooltipInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 提示文字
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-tooltip.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniTooltip: _UniTooltip;
  }
}
