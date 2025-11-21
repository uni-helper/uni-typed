import type { DefineComponent } from "vue";

/** 栅格规则 */
type _UniColRules = Partial<{
  /**
   * 栅格占据的列数
   *
   * 默认为 24
   */
  span: number;
  /** 栅格左侧间隔格数 */
  offset: number;
  /** 栅格向右偏移格数 */
  push: number;
  /** 栅格向左偏移格数 */
  pull: number;
}>;

/** 列属性 */
type _UniColProps = _UniColRules &
  Partial<{
    /** 屏幕宽度 <768px 时，要显示的栅格规则 */
    xs: number | _UniColRules;
    /** 屏幕宽度 ≥768px 时，要显示的栅格规则 */
    sm: number | _UniColRules;
    /** 屏幕宽度 ≥992px 时，要显示的栅格规则 */
    md: number | _UniColRules;
    /** 屏幕宽度 ≥1200px 时，要显示的栅格规则 */
    lg: number | _UniColRules;
    /** 屏幕宽度 ≥1920px 时，要显示的栅格规则 */
    xl: number | _UniColRules;
  }>;

/** 流式栅格系统中的列 */
type _UniCol = DefineComponent<_UniColProps>;

/** 流式栅格系统中的列实例 */
type _UniColInstance = InstanceType<_UniCol>;

export type {
  _UniColRules as UniColRules,
  _UniColProps as UniColProps,
  _UniCol as UniCol,
  _UniColInstance as UniColInstance,
};

declare global {
  namespace UniHelper {
    /** 栅格规则 */
    export type UniColRules = _UniColRules;
    /** 列属性 */
    export type UniColProps = _UniColProps;
    /** 流式栅格系统中的列 */
    export type UniCol = _UniCol;
    /** 流式栅格系统中的列实例 */
    export type UniColInstance = _UniColInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 流式栅格系统中的列
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-row.html#uni-col)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniCol: _UniCol;
  }
}
