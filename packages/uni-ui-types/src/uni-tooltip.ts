import type { Component } from "@uni-helper/uni-app-types";

type _UniTooltipProps = Partial<{
  /** 显示内容 */
  content: string;
}>;

/** 提示文字 */
type _UniTooltip = Component<_UniTooltipProps>;

interface _UniTooltipInstance extends InstanceType<_UniTooltip>{};;

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
    /** 提示文字 */
    UniTooltip: _UniTooltip;
  }
}
