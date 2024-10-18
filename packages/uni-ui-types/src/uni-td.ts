import type { DefineComponent } from "vue";

/** 单元格对齐方式 */
type _UniTdAlign = "left" | "center" | "right";

type _UniTdProps = Partial<{
  /**
   * 单元格宽度
   *
   * 单位为 px
   */
  width: string | number;
  /**
   * 对齐方式
   *
   * 默认为 left
   */
  align: _UniTdAlign;
  /**
   * 行合并
   *
   * 默认为 1
   */
  rowspan: number | string;
  /**
   * 列合并
   *
   * 默认为 1
   */
  colspan: number | string;
}>;

type _UniTd = DefineComponent<_UniTdProps>;

type _UniTdInstance = InstanceType<_UniTd>;

export type {
  _UniTdAlign as UniTdAlign,
  _UniTdProps as UniTdProps,
  _UniTd as UniTd,
  _UniTdInstance as UniTdInstance,
};

declare global {
  namespace UniHelper {
    /** 单元格对齐方式 */
    export type UniTdAlign = _UniTdAlign;
    export type UniTdProps = _UniTdProps;
    export type UniTd = _UniTd;
    export type UniTdInstance = _UniTdInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 单元格
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-table.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniTd: _UniTd;
  }
}
