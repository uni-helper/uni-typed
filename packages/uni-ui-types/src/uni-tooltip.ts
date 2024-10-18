import type { DefineComponent } from "vue";

type _UniTooltipProps = Partial<{
  /** 显示内容 */
  content: string;
}>;

/** 提示文字 */
type _UniTooltip = DefineComponent<_UniTooltipProps>;

type _UniTooltipInstance = InstanceType<_UniTooltip>;

export type {
  _UniTooltipProps as UniTooltipProps,
  _UniTooltip as UniTooltip,
  _UniTooltipInstance as UniTooltipInstance,
};

declare global {
  namespace UniHelper {
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
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniTooltip: _UniTooltip;
  }
}
