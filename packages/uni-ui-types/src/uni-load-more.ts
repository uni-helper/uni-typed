import type { DefineComponent } from "vue";

/**
 * loading 的状态
 *
 * more 加载前
 *
 * loading 加载中
 *
 * noMore 没有更多数据
 */
type _UniLoadMoreStatus = "more" | "loading" | "noMore";

/**
 * 图标样式
 *
 * snow iOS 雪花加载样式
 *
 * circle Android 环形加载样式
 *
 * auto 根据平台自动选择加载样式
 */
type _UniLoadMoreIconType = "auto" | "snow" | "circle";

/** 各状态文字说明 */
interface _UniLoadMoreContentText {
  /** 默认为 上拉显示更多 */
  contentdown: string;
  /** 默认为 正在加载 */
  contentrefresh: string;
  /** 默认为 没有更多数据了 */
  contentnomore: string;
}

interface _UniLoadMoreOnClickLoadMoreDetail {
  /**
   * loading 的状态
   *
   * more 加载前
   *
   * loading 加载中
   *
   * noMore 没有更多数据
   */
  status: _UniLoadMoreStatus;
}

interface _UniLoadMoreOnClickLoadMoreEvent {
  detail: _UniLoadMoreOnClickLoadMoreDetail;
}

/** 点击加载更多时触发 */
type _UniLoadMoreOnClickLoadMore = (
  event: _UniLoadMoreOnClickLoadMoreEvent,
) => void;

type _UniLoadMoreProps = Partial<{
  /**
   * 图标大小
   *
   * 单位为 px
   *
   * 默认为 24
   */
  iconSize: number;
  /**
   * loading 的状态
   *
   * more 加载前
   *
   * loading 加载中
   *
   * noMore 没有更多数据
   *
   * 默认为 more
   */
  status: _UniLoadMoreStatus;
  /**
   * 是否显示 loading 图标
   *
   * 默认为 true
   */
  showIcon: boolean;
  /**
   * 是否显示文本
   *
   * 默认为 true
   */
  showText: boolean;
  /**
   * 图标样式
   *
   * snow iOS 雪花加载样式
   *
   * circle Android 环形加载样式
   *
   * auto 根据平台自动选择加载样式
   *
   * 默认为 auto
   */
  iconType: _UniLoadMoreIconType;
  /**
   * 图标和文字颜色
   *
   * 默认为 #777777
   */
  color: string;
  /** 各状态文字说明 */
  contentText: _UniLoadMoreContentText;
  /** 点击加载更多时触发 */
  onClickLoadMore: _UniLoadMoreOnClickLoadMore;
}>;

/** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
type _UniLoadMore = DefineComponent<_UniLoadMoreProps>;

type _UniLoadMoreInstance = InstanceType<_UniLoadMore>;

export type {
  _UniLoadMoreStatus as UniLoadMoreStatus,
  _UniLoadMoreIconType as UniLoadMoreIconType,
  _UniLoadMoreContentText as UniLoadMoreContentText,
  _UniLoadMoreOnClickLoadMoreDetail as UniLoadMoreOnClickLoadMoreDetail,
  _UniLoadMoreOnClickLoadMoreEvent as UniLoadMoreOnClickLoadMoreEvent,
  _UniLoadMoreOnClickLoadMore as UniLoadMoreOnClickLoadMore,
  _UniLoadMoreProps as UniLoadMoreProps,
  _UniLoadMore as UniLoadMore,
  _UniLoadMoreInstance as UniLoadMoreInstance,
};

declare global {
  namespace UniHelper {
    /**
     * loading 的状态
     *
     * more 加载前
     *
     * loading 加载中
     *
     * noMore 没有更多数据
     */
    export type UniLoadMoreStatus = _UniLoadMoreStatus;
    /**
     * 图标样式
     *
     * snow iOS 雪花加载样式
     *
     * circle Android 环形加载样式
     *
     * auto 根据平台自动选择加载样式
     */
    export type UniLoadMoreIconType = _UniLoadMoreIconType;
    /** 各状态文字说明 */
    export interface UniLoadMoreContentText extends _UniLoadMoreContentText {}
    export interface UniLoadMoreOnClickLoadMoreDetail
      extends _UniLoadMoreOnClickLoadMoreDetail {}
    export type UniLoadMoreOnClickLoadMoreEvent =
      _UniLoadMoreOnClickLoadMoreEvent;
    /** 点击加载更多时触发 */
    export interface UniLoadMoreOnClickLoadMore
      extends _UniLoadMoreOnClickLoadMore {}
    export type UniLoadMoreProps = _UniLoadMoreProps;
    /** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
    export type UniLoadMore = _UniLoadMore;
    export type UniLoadMoreInstance = _UniLoadMoreInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 用于列表中，做滚动加载使用，展示 loading 的各种状态 */
    UniLoadMore: _UniLoadMore;
  }
}
