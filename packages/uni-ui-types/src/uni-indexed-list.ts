import type { DefineComponent } from "vue";

/** 数据对象 */
interface _UniIndexedListOption {
  /** 索引标题 */
  letter: string;
  /** 索引 */
  data: string[];
}
/** 数据对象 */
interface _UniIndexedItemSelected {
  /** 索引标题 */
  key: string;
  /** 索引 */
  name: string;
  /** 索引序号 */
  itemIndex: number;
  /** 索引是否选中 */
  checked: boolean;
}

interface _UniIndexedListOnClickEvent {
  item: _UniIndexedItemSelected;
  select: _UniIndexedItemSelected[];
}

/** 点击触发 */
type _UniIndexedListOnClick = (event: _UniIndexedListOnClickEvent) => void;

/** 索引列表属性 */
type _UniIndexedListProps = Partial<{
  /** 索引列表需要的数据对象 */
  options: _UniIndexedListOption[];
  /**
   * 展示模式
   *
   * true 展示默认
   *
   * false 展示选择
   *
   * 默认为 false
   */
  showSelect: boolean;
  /** 点击触发 */
  onClick: _UniIndexedListOnClick;
}>;

/** 索引列表 */
type _UniIndexedList = DefineComponent<_UniIndexedListProps>;

/** 索引列表实例 */
type _UniIndexedListInstance = InstanceType<_UniIndexedList>;

export type {
  _UniIndexedListOption as UniIndexedListOption,
  _UniIndexedItemSelected as UniIndexedItemSelected,
  _UniIndexedListOnClickEvent as UniIndexedListOnClickEvent,
  _UniIndexedListOnClick as UniIndexedListOnClick,
  _UniIndexedListProps as UniIndexedListProps,
  _UniIndexedList as UniIndexedList,
  _UniIndexedListInstance as UniIndexedListInstance,
};

declare global {
  namespace UniHelper {
    /** 数据对象 */
    export interface UniIndexedListOption extends _UniIndexedListOption {}
    export interface UniIndexedItemSelected extends _UniIndexedItemSelected {}
    export type UniIndexedListOnClickEvent = _UniIndexedListOnClickEvent;
    /** 点击触发 */
    export interface UniIndexedListOnClick extends _UniIndexedListOnClick {}
    /** 索引列表属性 */
    export type UniIndexedListProps = _UniIndexedListProps;
    /** 索引列表 */
    export type UniIndexedList = _UniIndexedList;
    /** 索引列表实例 */
    export type UniIndexedListInstance = _UniIndexedListInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 索引列表
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-indexed-list.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniIndexedList: _UniIndexedList;
  }
}
