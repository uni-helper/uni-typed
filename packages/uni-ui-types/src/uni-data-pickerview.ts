import type { DefineComponent } from "vue";
import type {
  UniDataPickerLocaldata,
  UniDataPickerMap,
  UniDataPickerPageData,
} from "./uni-data-picker";

/** 选择完成时触发 */
type _UniDataPickerviewOnChange = (value: any[]) => void;

/** 数据变化时触发 */
type _UniDataPickerviewOnDatachange = (value: any[]) => void;

/** 节点被点击时触发 */
type _UniDataPickerviewOnNodeclick = (node: any) => void;

type _UniDataPickerviewProps = Partial<{
  /** 本地数据 */
  localdata: UniDataPickerLocaldata;
  /**
   * 是否预加载数据
   *
   * 默认为 false
   */
  preload: boolean;
  /**
   * 是否隐藏 tab 标签过长的文本
   *
   * 默认为 true
   */
  ellipsis: boolean;
  /**
   * 分步查询时，是否点击节点请求数据
   *
   * 默认为 true
   */
  stepSearh: boolean;
  /** 分步查询时当前字段名称 */
  selfField: string;
  /** 分步查询时父字段名称 */
  parentField: string;
  /** 表名 */
  collection: string;
  /** 查询字段，多个字段用 , 分割 */
  field: string;
  /** 排序字段及正序倒叙设置 */
  orderby: string;
  /** 查询条件 */
  where: string;
  /**
   * 分页策略
   *
   * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
   *
   * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
   *
   * 默认为 add
   */
  pageData: UniDataPickerPageData;
  /**
   * 当前页
   *
   * 默认为 1
   */
  pageCurrent: number;
  /**
   * 每页数据数量
   *
   * 默认为 500
   */
  pageSize: number;
  /**
   * 是否查询总数据条数
   *
   * 默认为 false
   */
  getcount: boolean;
  /**
   * 指定查询结果是否仅返回数组第一条数据
   *
   * false 结果数据外会再用数组包裹一层，一般用于列表页
   *
   * true 直接返回结果数据，一般用于非列表页
   *
   * 默认为 false
   */
  getone: boolean;
  /**
   * 是否查询树状结构数据
   *
   * 默认为 false
   */
  gettree: boolean;
  /**
   * 是否手动触发
   *
   * 默认为 false
   */
  manual: boolean;
  /**
   * 是否多个
   *
   * 默认为 false
   */
  multiple: boolean;
  /**
   * 字段映射
   *
   * 将 text/value 映射到数据中的其他字段
   *
   * 默认为 [{ text: 'text', value: 'value' }]
   */
  map: UniDataPickerMap;
  /**
   * 是否为受控模式
   *
   * 默认为 false
   */
  managedMode: boolean;
  /** 选择完成时触发 */
  onChange: _UniDataPickerviewOnChange;
  /** 数据变化时触发 */
  onDatachange: _UniDataPickerviewOnDatachange;
  /** 节点被点击时触发 */
  onNodeclick: _UniDataPickerviewOnNodeclick;
}>;

/**
 * 级联选择视图组件
 *
 * uni-data-picker 的内部视图组件
 */
type _UniDataPickerview = DefineComponent<_UniDataPickerviewProps>;

/** 级联选择视图组件实例 */
type _UniDataPickerviewInstance = InstanceType<_UniDataPickerview>;

export type {
  _UniDataPickerview as UniDataPickerview,
  _UniDataPickerviewInstance as UniDataPickerviewInstance,
  _UniDataPickerviewOnChange as UniDataPickerviewOnChange,
  _UniDataPickerviewOnDatachange as UniDataPickerviewOnDatachange,
  _UniDataPickerviewOnNodeclick as UniDataPickerviewOnNodeclick,
  _UniDataPickerviewProps as UniDataPickerviewProps,
};

declare global {
  namespace UniHelper {
    /** 选择完成时触发 */
    export interface UniDataPickerviewOnChange
      extends _UniDataPickerviewOnChange {}
    /** 数据变化时触发 */
    export interface UniDataPickerviewOnDatachange
      extends _UniDataPickerviewOnDatachange {}
    /** 节点被点击时触发 */
    export interface UniDataPickerviewOnNodeclick
      extends _UniDataPickerviewOnNodeclick {}
    export type UniDataPickerviewProps = _UniDataPickerviewProps;
    /**
     * 级联选择视图组件
     *
     * uni-data-picker 的内部视图组件
     */
    export type UniDataPickerview = _UniDataPickerview;
    /** 级联选择视图组件实例 */
    export type UniDataPickerviewInstance = _UniDataPickerviewInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 级联选择视图组件
     *
     * uni-data-picker 的内部视图组件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniDataPickerview: _UniDataPickerview;
  }
}
