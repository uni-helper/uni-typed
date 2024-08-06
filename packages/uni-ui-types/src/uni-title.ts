import type { DefineComponent } from "vue";

/** 标题类型 */
type _UniTitleType = "h1" | "h2" | "h3" | "h4" | "h5";

/**
 * 对齐方式
 *
 * left 左对齐
 *
 * center 居中对齐
 *
 * right 右对齐
 */
type _UniTitleAlign = "left" | "center" | "right";

type _UniTitleProps = Partial<{
  /** 标题类型 */
  type: _UniTitleType;
  /** 章节标题内容 */
  title: string;
  /**
   * 对齐方式
   *
   * left 左对齐
   *
   * center 居中对齐
   *
   * right 右对齐
   *
   * 默认为 left
   */
  align: _UniTitleAlign;
  /**
   * 字体颜色
   *
   * 默认为 #333
   */
  color: string;
  /**
   * 是否开启统计
   *
   * 如果不填写 type，默认开启
   *
   * 如果填写 type，默认关闭
   */
  stat: boolean;
}>;

/**
 * 章节标题，通常用于记录页面标题
 *
 * 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
 */
type _UniTitle = DefineComponent<_UniTitleProps>;

type _UniTitleInstance = InstanceType<_UniTitle>;

export type {
  _UniTitleType as UniTitleType,
  _UniTitleAlign as UniTitleAlign,
  _UniTitleProps as UniTitleProps,
  _UniTitle as UniTitle,
  _UniTitleInstance as UniTitleInstance,
};

declare global {
  namespace UniHelper {
    /** 标题类型 */
    export type UniTitleType = _UniTitleType;
    /**
     * 对齐方式
     *
     * left 左对齐
     *
     * center 居中对齐
     *
     * right 右对齐
     */
    export type UniTitleAlign = _UniTitleAlign;
    export type UniTitleProps = _UniTitleProps;
    /**
     * 章节标题，通常用于记录页面标题
     *
     * 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
     */
    export type UniTitle = _UniTitle;
    export type UniTitleInstance = _UniTitleInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    UniTitle: _UniTitle;
  }
}
