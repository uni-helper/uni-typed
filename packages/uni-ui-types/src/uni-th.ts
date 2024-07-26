import type { Component } from "@uni-helper/uni-app-types";

/** 对齐方式 */
type _UniThAlign = "left" | "center" | "right";

/** 筛选类型 */
type _UniThFilterType = "search" | "select" | "range" | "date" | "timestamp";

/** 筛选数据 */
interface _UniThFilterData {
  /** 显示内容 */
  text: string;
  /** 值 */
  value: string;
}

interface _UniThOnSortChangeEvent {
  order: "ascending" | "descending" | null;
}

/** 点击排序时触发 */
type _UniThOnSortChange = (event: _UniThOnSortChangeEvent) => void;

type _UniThOnFilterChangeEvent =
  | {
      filterType: "search";
      filter: string;
    }
  | {
      filterType: "select" | "range";
      filter: [string, string];
    }
  | {
      filterType: "date" | "timestamp";
      filter: [number, number];
    };

/** 筛选数据时触发 */
type _UniThOnFilterChange = (event: _UniThOnFilterChangeEvent) => void;

type _UniThProps = Partial<{
  /**
   * 单元格宽度
   *
   * 如果传入 number 默认使用 px
   */
  width: string | number;
  /**
   * 对齐方式
   *
   * 默认为 left
   */
  align: _UniThAlign;
  /** 筛选类型 */
  filterType: _UniThFilterType;
  /** 筛选数据 */
  filterData: _UniThFilterData[];
  /**
   * 是否启用排序
   *
   * 默认为 false
   */
  sortable: boolean;
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
  /** 点击排序时触发 */
  onSortChange: _UniThOnSortChange;
  /** 筛选数据时触发 */
  onFilterChange: _UniThOnFilterChange;
}>;

type _UniTh = Component<_UniThProps>;

interface _UniThInstance extends InstanceType<_UniTh>{};;

export type {
  _UniThAlign as UniThAlign,
  _UniThFilterType as UniThFilterType,
  _UniThFilterData as UniThFilterData,
  _UniThOnSortChangeEvent as UniThOnSortChangeEvent,
  _UniThOnSortChange as UniThOnSortChange,
  _UniThOnFilterChangeEvent as UniThOnFilterChangeEvent,
  _UniThOnFilterChange as UniThOnFilterChange,
  _UniThProps as UniThProps,
  _UniTh as UniTh,
  _UniThInstance as UniThInstance,
};

declare global {
  namespace UniHelper {
    /** 对齐方式 */
    export type UniThAlign = _UniThAlign;
    /** 筛选类型 */
    export type UniThFilterType = _UniThFilterType;
    /** 筛选数据 */
    export interface UniThFilterData extends _UniThFilterData {}
    export type UniThOnSortChangeEvent = _UniThOnSortChangeEvent;
    /** 点击排序时触发 */
    export interface UniThOnSortChange extends _UniThOnSortChange {}
    export type UniThOnFilterChangeEvent = _UniThOnFilterChangeEvent;
    /** 筛选数据时触发 */
    export interface UniThOnFilterChange extends _UniThOnFilterChange {}
    export type UniThProps = _UniThProps;
    export type UniTh = _UniTh;
    export type UniThInstance = _UniThInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    UniTh: _UniTh;
  }
}
