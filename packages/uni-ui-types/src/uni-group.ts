import type { DefineComponent } from "vue";

/**
 * 模式
 *
 * default 默认
 *
 * card 卡片
 */
type _UniGroupMode = "default" | "card";

/** 点击时触发 */
type _UniGroupOnClick = () => void;

/** 分组属性 */
type _UniGroupProps = Partial<{
  /** 主标题 */
  title: string;
  /**
   * 分组间隔
   *
   * 单位为 px
   *
   * 默认为 10
   */
  top: number | string;
  /**
   * 模式
   *
   * default 默认
   *
   * card 卡片
   *
   * 默认为 default
   */
  mode: _UniGroupMode;
  /**
   * 是否开启统计
   *
   * 默认为 false
   */
  stat: boolean;
  /** 点击时触发 */
  onClick: _UniGroupOnClick;
}>;

/** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
type _UniGroup = DefineComponent<_UniGroupProps>;

/** 分组组件实例 */
type _UniGroupInstance = InstanceType<_UniGroup>;

export type {
  _UniGroupMode as UniGroupMode,
  _UniGroupOnClick as UniGroupOnClick,
  _UniGroupProps as UniGroupProps,
  _UniGroup as UniGroup,
  _UniGroupInstance as UniGroupInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 模式
     *
     * default 默认
     *
     * card 卡片
     */
    export type UniGroupMode = _UniGroupMode;
    export interface UniGroupOnClick extends _UniGroupOnClick {}
    /** 分组属性 */
    export type UniGroupProps = _UniGroupProps;
    /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
    export type UniGroup = _UniGroup;
    /** 分组组件实例 */
    export type UniGroupInstance = _UniGroupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
    UniGroup: _UniGroup;
  }
}
