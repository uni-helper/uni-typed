import type { Component } from "@uni-helper/uni-app-types";

/**
 * 空字符串 单选
 *
 * selection 多选
 */
type _UniTableType = "" | "selection";

/** 选中全部行 */
type _UniTableSelectionAll = () => void;

/**
 * 用于多选表格，切换某一行的选中状态
 *
 * 如果使用了第二个参数，则要设置这一行选中与否
 */
type _UniTableToggleRowSelection = (
  indexes: number[],
  selected?: boolean,
) => void;

/** 用于多选表格，清空用户的选择 */
type _UniTableClearSelection = () => void;

/** 用于多选表格，切换所有行的选中状态 */
type _UniTableToggleAllSelection = () => void;

interface _UniTableOnSelectionChangeDetail {
  value: any[];
  index: any[];
}

interface _UniTableOnSelectionChangeEvent {
  detail: _UniTableOnSelectionChangeDetail;
}

/** 开启多选时，当选择项发生变化时会触发该事件 */
type _UniTableOnSelectionChange = (
  event: _UniTableOnSelectionChangeEvent,
) => void;

/** 表格属性 */
type _UniTableProps = Partial<{
  /**
   * 是否带有纵向边框
   *
   * 默认为 false
   */
  border: boolean;
  /**
   * 是否显示斑马线样式
   *
   * 默认为 false
   */
  stripe: boolean;
  /**
   * 空字符串 单选
   *
   * selection 多选
   *
   * 默认为 空字符串
   */
  type?: _UniTableType;
  /**
   * 空数据时显示的文本内容
   *
   * 默认为 没有更多数据
   */
  emptyText: string;
  /**
   * 是否显示加载中
   *
   * 默认为 false
   */
  loading: boolean;
  data: any[];
  /**
   * 行键名
   *
   * 默认为 空字符串
   */
  rowKey: string;
  /** 选中全部行 */
  selectionAll: _UniTableSelectionAll;
  /**
   * 用于多选表格，切换某一行的选中状态
   *
   * 如果使用了第二个参数，则要设置这一行选中与否
   */
  toggleRowSelection: _UniTableToggleRowSelection;
  /** 用于多选表格，清空用户的选择 */
  clearSelection: _UniTableClearSelection;
  /** 用于多选表格，切换所有行的选中状态 */
  toggleAllSelection: _UniTableToggleAllSelection;
  /** 开启多选时，当选择项发生变化时会触发该事件 */
  onSelectionChange: _UniTableOnSelectionChange;
}>;

/** 表格 */
type _UniTable = Component<_UniTableProps>;

/** 表格实例 */
interface _UniTableInstance extends InstanceType<_UniTable>{};;

export type {
  _UniTableType as UniTableType,
  _UniTableSelectionAll as UniTableSelectionAll,
  _UniTableToggleRowSelection as UniTableToggleRowSelection,
  _UniTableClearSelection as UniTableClearSelection,
  _UniTableToggleAllSelection as UniTableToggleAllSelection,
  _UniTableOnSelectionChangeDetail as UniTableOnSelectionChangeDetail,
  _UniTableOnSelectionChangeEvent as UniTableOnSelectionChangeEvent,
  _UniTableOnSelectionChange as UniTableOnSelectionChange,
  _UniTableProps as UniTableProps,
  _UniTable as UniTable,
  _UniTableInstance as UniTableInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 空字符串 单选
     *
     * selection 多选
     */
    export type UniTableType = _UniTableType;
    /** 选中全部行 */
    export interface UniTableSelectionAll extends _UniTableSelectionAll {}
    /**
     * 用于多选表格，切换某一行的选中状态
     *
     * 如果使用了第二个参数，则要设置这一行选中与否
     */
    export interface UniTableToggleRowSelection
      extends _UniTableToggleRowSelection {}
    /** 用于多选表格，清空用户的选择 */
    export interface UniTableClearSelection extends _UniTableClearSelection {}
    /** 用于多选表格，切换所有行的选中状态 */
    export interface UniTableToggleAllSelection
      extends _UniTableToggleAllSelection {}
    export interface UniTableOnSelectionChangeDetail
      extends _UniTableOnSelectionChangeDetail {}
    export type UniTableOnSelectionChangeEvent =
      _UniTableOnSelectionChangeEvent;
    /** 开启多选时，当选择项发生变化时会触发该事件 */
    export interface UniTableOnSelectionChange
      extends _UniTableOnSelectionChange {}
    /** 表格属性 */
    export type UniTableProps = _UniTableProps;
    /** 表格 */
    export type UniTable = _UniTable;
    /** 表格实例 */
    export type UniTableInstance = _UniTableInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 表格 */
    UniTable: _UniTable;
  }
}
