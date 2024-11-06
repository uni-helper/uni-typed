import type { DefineComponent } from "vue";

interface _UniGridOnChangeDetail {
  index: number;
}

interface _UniGridOnChangeEvent {
  detail: _UniGridOnChangeDetail;
}

/** 点击触发 */
type _UniGridOnChange = (event: _UniGridOnChangeEvent) => void;

/** 宫格属性 */
type _UniGridProps = Partial<{
  /**
   * 每列显示个数
   *
   * 默认为 3
   */
  column: number;
  /**
   * 边框颜色
   *
   * 默认为 #d2d2d2
   */
  borderColor: string;
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  showBorder: boolean;
  /**
   * 是否方形显示
   *
   * 默认为 true
   */
  square: boolean;
  /**
   * 点击背景是否高亮
   *
   * 默认为 true
   */
  highlight: boolean;
  /** 点击触发 */
  onChange: _UniGridOnChange;
}>;

/** 宫格 */
type _UniGrid = DefineComponent<_UniGridProps>;

/** 宫格属性 */
type _UniGridInstance = InstanceType<_UniGrid>;

export type {
  _UniGridOnChangeDetail as UniGridOnChangeDetail,
  _UniGridOnChangeEvent as UniGridOnChangeEvent,
  _UniGridOnChange as UniGridOnChange,
  _UniGridProps as UniGridProps,
  _UniGrid as UniGrid,
  _UniGridInstance as UniGridInstance,
};

declare global {
  namespace UniHelper {
    export interface UniGridOnChangeDetail extends _UniGridOnChangeDetail {}
    export type UniGridOnChangeEvent = _UniGridOnChangeEvent;
    /** 点击触发 */
    export interface UniGridOnChange extends _UniGridOnChange {}
    /** 宫格属性 */
    export type UniGridProps = _UniGridProps;
    /** 宫格 */
    export type UniGrid = _UniGrid;
    /** 宫格实例 */
    export type UniGridInstance = _UniGridInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 宫格
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-grid.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniGrid: _UniGrid;
  }
}
