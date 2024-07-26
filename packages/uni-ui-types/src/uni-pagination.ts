import type { Component } from "@uni-helper/uni-app-types";

/** 点击页码按钮时触发 */
type _UniPaginationOnInput = (current: number) => void;

type _UniPaginationOnChangeType = "prev" | "next";

interface _UniPaginationOnChangeEvent {
  type: _UniPaginationOnChangeType;
  current: number;
}

/** 点击页码按钮时触发 */
type _UniPaginationOnChange = (event: _UniPaginationOnChangeEvent) => void;

/** 分页器属性 */
type _UniPaginationProps = Partial<{
  /**
   * 左侧按钮文字
   *
   * 默认为 上一页
   */
  prevText: string;
  /**
   * 右侧按钮文字
   *
   * 默认为 下一页
   */
  nextText: string;
  /**
   * 每页条目文字
   *
   * 默认为 条/页
   */
  piecePerPageText: string;
  /**
   * 当前页，优先级比 current 低
   *
   * 默认为 1
   */
  value: number;
  /**
   * 当前页，优先级比 value 高
   *
   * 默认为 1
   */
  current: number;
  /**
   * 数据总量
   *
   * 默认为 0
   */
  total: number;
  /**
   * 每页数据量
   *
   * 默认为 10
   */
  pageSize: number;
  /**
   * 是否以 icon 展示按钮
   *
   * 默认为 false
   */
  showIcon: boolean;
  /**
   * 是否展示每页条目数
   *
   * 默认为 false
   */
  showPageSize: boolean;
  /**
   * 可选的每页条目数
   *
   * 默认为 [20, 50, 100, 500]
   */
  pageSizeRange: number[];
  /**
   * 最大页数
   *
   * 默认为 7
   */
  pagerCount: number;
  /** 点击页码按钮时触发 */
  onInput: _UniPaginationOnInput;
  /** 点击页码按钮时触发 */
  onChange: _UniPaginationOnChange;
}>;

/** 分页器组件，用于展示页码、请求数据等 */
type _UniPagination = Component<_UniPaginationProps>;

/** 分页器组件实例 */
interface _UniPaginationInstance extends InstanceType<_UniPagination>{};;

export type {
  _UniPaginationOnInput as UniPaginationOnInput,
  _UniPaginationOnChangeType as UniPaginationOnChangeType,
  _UniPaginationOnChangeEvent as UniPaginationOnChangeEvent,
  _UniPaginationOnChange as UniPaginationOnChange,
  _UniPaginationProps as UniPaginationProps,
  _UniPagination as UniPagination,
  _UniPaginationInstance as UniPaginationInstance,
};

declare global {
  namespace UniHelper {
    /** 点击页码按钮时触发 */
    export interface UniPaginationOnInput extends _UniPaginationOnInput {}
    export type UniPaginationOnChangeType = _UniPaginationOnChangeType;
    export type UniPaginationOnChangeEvent = _UniPaginationOnChangeEvent;
    /** 点击页码按钮时触发 */
    export interface UniPaginationOnChange extends _UniPaginationOnChange {}
    /** 分页器属性 */
    export type UniPaginationProps = _UniPaginationProps;
    /** 分页器组件，用于展示页码、请求数据等 */
    export type UniPagination = _UniPagination;
    /** 分页器组件实例 */
    export type UniPaginationInstance = _UniPaginationInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 分页器组件，用于展示页码、请求数据等 */
    UniPagination: _UniPagination;
  }
}
