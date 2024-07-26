import type { Component } from "@uni-helper/uni-app-types";

/** 更新当前列表高度 */
type _UniCollapseResize = () => void;

/** 折叠面板基本属性 */
type _UniCollapseBaseProps = Partial<{
  /** 更新当前列表高度 */
  resize: _UniCollapseResize;
}>;

/**
 * 折叠面板非手风琴模式展开面板的标识
 *
 * 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseNoAccordionValue = string[];

/** 折叠面板非手风琴模式切换面板时触发 */
type _UniCollapseNoAccordionOnChange = (
  value: _UniCollapseNoAccordionValue,
) => void;

/** 折叠面板非手风琴模式属性 */
type _UniCollapseNoAccordionProps = _UniCollapseBaseProps & {
  /**
   * 展开面板的标识
   *
   * 不要和 uni-collapse-item open 一起使用
   */
  value?: _UniCollapseNoAccordionValue;
  /** 关闭手风琴模式 */
  accordion?: false;
  /** 切换面板时触发 */
  onChange?: _UniCollapseNoAccordionOnChange;
};

/**
 * 折叠面板手风琴模式展开面板的标识
 *
 * 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseAccordionValue = string;

/** 折叠面板手风琴模式切换面板时触发 */
type _UniCollapseAccordionOnChange = (
  value: _UniCollapseAccordionValue,
) => void;

/** 折叠面板手风琴模式属性 */
type _UniCollapseAccordionProps = _UniCollapseBaseProps & {
  /**
   * 展开面板的标识
   *
   * 不要和 uni-collapse-item open 一起使用
   */
  value?: _UniCollapseAccordionValue;
  /** 关闭手风琴模式 */
  accordion: true;
  /** 切换面板时触发 */
  onChange?: _UniCollapseAccordionOnChange;
};

/** 折叠面板属性 */
type _UniCollapseProps =
  | _UniCollapseNoAccordionProps
  | _UniCollapseAccordionProps;

/**
 * 折叠面板用来折叠/显示过长的内容或者是列表
 *
 * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
 *
 * 点击可以展开折叠部分
 */
type _UniCollapse = Component<_UniCollapseProps>;

/** 折叠面板实例 */
interface _UniCollapseInstance extends InstanceType<_UniCollapse>{};;

export type {
  _UniCollapseResize as UniCollapseResize,
  _UniCollapseBaseProps as UniCollapseBaseProps,
  _UniCollapseNoAccordionValue as UniCollapseNoAccordionValue,
  _UniCollapseNoAccordionOnChange as UniCollapseNoAccordionOnChange,
  _UniCollapseNoAccordionProps as UniCollapseNoAccordionProps,
  _UniCollapseAccordionValue as UniCollapseAccordionValue,
  _UniCollapseAccordionOnChange as UniCollapseAccordionOnChange,
  _UniCollapseAccordionProps as UniCollapseAccordionProps,
  _UniCollapseProps as UniCollapseProps,
  _UniCollapse as UniCollapse,
  _UniCollapseInstance as UniCollapseInstance,
};

declare global {
  namespace UniHelper {
    /** 更新当前列表高度 */
    export interface UniCollapseResize extends _UniCollapseResize {}
    /** 折叠面板基本属性 */
    export type UniCollapseBaseProps = _UniCollapseBaseProps;
    /**
     * 折叠面板非手风琴模式展开面板的标识
     *
     * 不要和 uni-collapse-item open 一起使用
     */
    export type UniCollapseNoAccordionValue = _UniCollapseNoAccordionValue;
    /** 折叠面板非手风琴模式切换面板时触发 */
    export interface UniCollapseNoAccordionOnChange
      extends _UniCollapseNoAccordionOnChange {}
    /** 折叠面板非手风琴模式属性 */
    export type UniCollapseNoAccordionProps = _UniCollapseNoAccordionProps;
    /**
     * 折叠面板手风琴模式展开面板的标识
     *
     * 不要和 uni-collapse-item open 一起使用
     */
    export type UniCollapseAccordionValue = _UniCollapseAccordionValue;
    /** 折叠面板手风琴模式切换面板时触发 */
    export interface UniCollapseAccordionOnChange
      extends _UniCollapseAccordionOnChange {}
    /** 折叠面板手风琴模式属性 */
    export type UniCollapseAccordionProps = _UniCollapseAccordionProps;
    /** 折叠面板属性 */
    export type UniCollapseProps = _UniCollapseProps;
    /**
     * 折叠面板用来折叠/显示过长的内容或者是列表
     *
     * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
     *
     * 点击可以展开折叠部分
     */
    export type UniCollapse = _UniCollapse;
    /** 折叠面板实例 */
    export type UniCollapseInstance = _UniCollapseInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 折叠面板用来折叠/显示过长的内容或者是列表
     *
     * 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
     *
     * 点击可以展开折叠部分
     */
    UniCollapse: _UniCollapse;
  }
}
