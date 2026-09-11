import type { DefineComponent } from "vue";

/** 表格行属性 */
type _UniTrProps = Partial<{
  /**
   * 是否禁用选择
   *
   * 默认为 false
   */
  disabled: boolean;
  keyValue: string | number;
}>;

/** 表格行 */
type _UniTr = DefineComponent<_UniTrProps>;

/** 表格行实例 */
type _UniTrInstance = InstanceType<_UniTr>;

export type {
  _UniTr as UniTr,
  _UniTrInstance as UniTrInstance,
  _UniTrProps as UniTrProps,
};

declare global {
  namespace UniHelper {
    export type UniTrProps = _UniTrProps;
    export type UniTr = _UniTr;
    export type UniTrInstance = _UniTrInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 表格行
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-table.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniTr: _UniTr;
  }
}
