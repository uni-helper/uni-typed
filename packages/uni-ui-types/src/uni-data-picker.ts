import type { BaseEvent } from "@uni-helper/uni-app-types";
import type { DefineComponent } from "vue";

/**
 * 服务商
 *
 * aliyun 阿里云
 *
 * tencent 腾讯云
 */
type _UniDataPickerSpaceInfoProvider = "aliyun" | "tencent";

/** 服务空间信息 */
interface _UniDataPickerSpaceInfo {
  /**
   * 服务商
   *
   * aliyun 阿里云
   *
   * tencent 腾讯云
   */
  provider: _UniDataPickerSpaceInfoProvider;
  /** 服务空间 ID */
  spaceId: string;
  /** 阿里云支持，在控制台服务空间列表中查看 */
  clientSecret?: string;
  /** 服务空间地址，阿里云支持 */
  endpoint?: string;
}

export type _UniDataPickerValue = string | number | boolean | null;

export type _UniDataPickerKey = _UniDataPickerValue;

interface _UniDataPickerLocaldataItem {
  /**
   * 节点唯一标识
   *
   * 如果不传，则以 value 为准
   */
  key?: _UniDataPickerKey;
  /** 值 */
  value: _UniDataPickerValue;
  /** 显示文字 */
  text: string;
  /**
   * 是否默认选中
   *
   * 默认为 false
   */
  selected?: boolean;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disable?: boolean;
  /** 数组分组标识 */
  group?: string;
  /**
   * 是否为叶子节点
   *
   * true 忽略 children
   *
   * 默认为 false
   */
  isleaf?: boolean;
  /** 子节点 */
  children?: _UniDataPickerLocaldataItem[];
  /** 自由扩展 key */
  [key: string]: any;
}

/** 本地数据 */
type _UniDataPickerLocaldata = _UniDataPickerLocaldataItem[];

/**
 * 分页策略
 *
 * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
 *
 * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
 */
type _UniDataPickerPageData = "add" | "replace";

/**
 * 字段映射
 *
 * 将 text/value 映射到数据中的其他字段
 */
interface _UniDataPickerMap {
  text: string;
  value: string;
}

/** 打开弹出层 */
type _UniDataPickerShow = () => void;

/** 关闭弹出层 */
type _UniDataPickerHide = () => void;

/** 清除已选项 */
type _UniDataPickerClear = () => void;

interface _UniDataPickerOnChangeDetail {
  value: any[];
}

interface _UniDataPickerOnChangeEvent {
  detail: _UniDataPickerOnChangeDetail;
}

/** 选择完成时触发 */
type _UniDataPickerOnChange = (event: _UniDataPickerOnChangeEvent) => void;

/** 节点被点击时触发 */
type _UniDataPickerOnNodeclick = (node: any) => void;

/** TODO 动态加载节点数据前触发 */
type _UniDataPickerOnStepsearch = (event: BaseEvent) => void;

/** 弹出层弹出时触发 */
type _UniDataPickerOnPopupopened = () => void;

/** 弹出层关闭时触发 */
type _UniDataPickerOnPopupclosed = () => void;

type _UniDataPickerProps = Partial<{
  /** 绑定数据 */
  value: _UniDataPickerValue;
  /** 服务空间信息 */
  spaceInfo: _UniDataPickerSpaceInfo;
  /** 本地数据 */
  localdata: _UniDataPickerLocaldata;
  /**
   * 是否预加载数据
   *
   * 默认为 false
   */
  preload: boolean;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 是否显示清除按钮
   *
   * 默认为 true
   */
  clearIcon: boolean;
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
  /** 分步查询时，动态加载云端数据的 URL */
  stepSearchUrl: string;
  /** 分步查询时当前字段名称 */
  selfField: string;
  /** 分步查询时父字段名称 */
  parentField: string;
  /** 表名，多个表名用 , 分割 */
  collection: string;
  /**
   * 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   *
   * 场景：前端无权操作的数据，比如阅读数 +1
   */
  action: string;
  /** 查询字段，多个字段用 , 分割 */
  field: string;
  /** 查询条件 */
  where: string;
  /** 排序字段及正序倒叙设置 */
  orderby: string;
  /**
   * 分页策略
   *
   * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
   *
   * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
   *
   * 默认为 add
   */
  pageData: _UniDataPickerPageData;
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
   * 默认 false
   */
  getcount: boolean;
  /**
   * 指定查询结果是否仅返回数组第一条数据
   *
   * false 结果数据外会再用数组包裹一层，一般用于列表页
   *
   * true 直接返回结果数据，一般用于非列表页
   *
   * 默认 false
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
   * 弹出层标题
   *
   * 默认为 请选择
   */
  popupTitle: string;
  /**
   * 占位文本
   *
   * 默认为 请选择
   */
  placeholder: string;
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 分隔符
   *
   * 默认为 /
   */
  split: string;
  /**
   * 字段映射
   *
   * 将 text/value 映射到数据中的其他字段
   *
   * 默认为 [{ text: 'text', value: 'value' }]
   */
  map: _UniDataPickerMap;
  /** 打开弹出层 */
  show: _UniDataPickerShow;
  /** 关闭弹出层 */
  hide: _UniDataPickerHide;
  /** 清除已选项 */
  clear: _UniDataPickerClear;
  /** 选择完成时触发 */
  onChange: _UniDataPickerOnChange;
  /** 节点被点击时触发 */
  onNodeclick: _UniDataPickerOnNodeclick;
  /** 动态加载节点数据前触发 */
  onStepsearch: _UniDataPickerOnStepsearch;
  /** 弹出层弹出时触发 */
  onPopupopened: _UniDataPickerOnPopupopened;
  /** 弹出层关闭时触发 */
  onPopupclosed: _UniDataPickerOnPopupclosed;
}>;

/**
 * 选择类 datacom 组件
 *
 * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
 *
 * 候选数据支持一次性加载完毕，也支持懒加载
 *
 * uni-data-picker 尤其适用于地址选择、分类选择等选择类
 *
 * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
 *
 * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code
 * 中自动生成前端页面，还支持服务器端校验
 */
type _UniDataPicker = DefineComponent<_UniDataPickerProps>;

/** 选择类 datacom 组件实例 */
type _UniDataPickerInstance = InstanceType<_UniDataPicker>;

export type {
  _UniDataPickerSpaceInfoProvider as UniDataPickerSpaceInfoProvider,
  _UniDataPickerSpaceInfo as UniDataPickerSpaceInfo,
  _UniDataPickerValue as UniDataPickerValue,
  _UniDataPickerKey as UniDataPickerKey,
  _UniDataPickerLocaldataItem as UniDataPickerLocaldataItem,
  _UniDataPickerLocaldata as UniDataPickerLocaldata,
  _UniDataPickerPageData as UniDataPickerPageData,
  _UniDataPickerMap as UniDataPickerMap,
  _UniDataPickerShow as UniDataPickerShow,
  _UniDataPickerHide as UniDataPickerHide,
  _UniDataPickerClear as UniDataPickerClear,
  _UniDataPickerOnChangeDetail as UniDataPickerOnChangeDetail,
  _UniDataPickerOnChange as UniDataPickerOnChange,
  _UniDataPickerOnNodeclick as UniDataPickerOnNodeclick,
  _UniDataPickerOnStepsearch as UniDataPickerOnStepsearch,
  _UniDataPickerOnPopupopened as UniDataPickerOnPopupopened,
  _UniDataPickerOnPopupclosed as UniDataPickerOnPopupclosed,
  _UniDataPickerProps as UniDataPickerProps,
  _UniDataPicker as UniDataPicker,
  _UniDataPickerInstance as UniDataPickerInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 服务商
     *
     * aliyun 阿里云
     *
     * tencent 腾讯云
     */
    export type UniDataPickerSpaceInfoProvider =
      _UniDataPickerSpaceInfoProvider;
    /** 服务空间信息 */
    export interface UniDataPickerSpaceInfo extends _UniDataPickerSpaceInfo {}
    export type UniDataPickerValue = _UniDataPickerValue;
    export type UniDataPickerKey = _UniDataPickerKey;
    export interface UniDataPickerLocaldataItem
      extends _UniDataPickerLocaldataItem {}
    /** 本地数据 */
    export type UniDataPickerLocaldata = _UniDataPickerLocaldata;
    /**
     * 分页策略
     *
     * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
     *
     * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
     */
    export type UniDataPickerPageData = _UniDataPickerPageData;
    /**
     * 字段映射
     *
     * 将 text/value 映射到数据中的其他字段
     */
    export interface UniDataPickerMap extends _UniDataPickerMap {}
    /** 打开弹出层 */
    export interface UniDataPickerShow extends _UniDataPickerShow {}
    /** 关闭弹出层 */
    export interface UniDataPickerHide extends _UniDataPickerHide {}
    /** 清除已选项 */
    export interface UniDataPickerClear extends _UniDataPickerClear {}
    export interface UniDataPickerOnChangeDetail
      extends _UniDataPickerOnChangeDetail {}
    /** 选择完成时触发 */
    export interface UniDataPickerOnChange extends _UniDataPickerOnChange {}
    /** 节点被点击时触发 */
    export interface UniDataPickerOnNodeclick
      extends _UniDataPickerOnNodeclick {}
    /** 动态加载节点数据前触发 */
    export interface UniDataPickerOnStepsearch
      extends _UniDataPickerOnStepsearch {}
    /** 弹出层弹出时触发 */
    export interface UniDataPickerOnPopupopened
      extends _UniDataPickerOnPopupopened {}
    /** 弹出层关闭时触发 */
    export interface UniDataPickerOnPopupclosed
      extends _UniDataPickerOnPopupclosed {}
    export type UniDataPickerProps = _UniDataPickerProps;
    /**
     * 选择类 datacom 组件
     *
     * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
     *
     * 候选数据支持一次性加载完毕，也支持懒加载
     *
     * uni-data-picker 尤其适用于地址选择、分类选择等选择类
     *
     * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
     *
     * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code
     * 中自动生成前端页面，还支持服务器端校验
     */
    export type UniDataPicker = _UniDataPicker;
    /** 选择类 datacom 组件实例 */
    export type UniDataPickerInstance = _UniDataPickerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 选择类 datacom 组件
     *
     * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
     *
     * 候选数据支持一次性加载完毕，也支持懒加载
     *
     * uni-data-picker 尤其适用于地址选择、分类选择等选择类
     *
     * uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
     *
     * uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code
     * 中自动生成前端页面，还支持服务器端校验
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniDataPicker: _UniDataPicker;
  }
}
