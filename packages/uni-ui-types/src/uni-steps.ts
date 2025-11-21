import type { DefineComponent } from "vue";
import type { UniIconsType } from "./uni-icons";

/**
 * 排列方向
 *
 * row 横向
 *
 * column 纵向
 */
type _UniStepsDirection = "row" | "column";

/** 数据源 */
interface _UniStepsOption {
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
}

/** 步骤条属性 */
type _UniStepsProps = Partial<{
  /**
   * 当前步骤
   *
   * 默认为 0
   */
  active: number;
  /**
   * 排列方向
   *
   * row 横向
   *
   * column 纵向
   *
   * 默认为 row
   */
  direction: _UniStepsDirection;
  /**
   * 选中状态的颜色
   *
   * 默认为 #2979ff
   */
  activeColor: string;
  /**
   * 未选中状态的颜色
   *
   * 默认为 #b7bdc6
   */
  deactiveColor: string;
  /**
   * 当前步骤图标
   *
   * 默认为 checkbox-filled
   */
  activeIcon: UniIconsType;
  /** 数据源 */
  options: _UniStepsOption[];
}>;

/** 步骤条，常用于显示进度 */
type _UniSteps = DefineComponent<_UniStepsProps>;

/** 步骤条实例 */
type _UniStepsInstance = InstanceType<_UniSteps>;

export type {
  _UniStepsDirection as UniStepsDirection,
  _UniStepsOption as UniStepsOption,
  _UniStepsProps as UniStepsProps,
  _UniSteps as UniSteps,
  _UniStepsInstance as UniStepsInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 排列方向
     *
     * row 横向
     *
     * column 纵向
     */
    export type UniStepsDirection = _UniStepsDirection;
    /** 数据源 */
    export interface UniStepsOption extends _UniStepsOption {}
    /** 步骤条属性 */
    export type UniStepsProps = _UniStepsProps;
    /** 步骤条，常用于显示进度 */
    export type UniSteps = _UniSteps;
    /** 步骤条实例 */
    export type UniStepsInstance = _UniStepsInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 步骤条
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-steps.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniSteps: _UniSteps;
  }
}
