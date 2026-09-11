import type { DefineComponent } from "vue";

/**
 * 关闭组件
 *
 * autoClose 为 false 时有效
 */
type _UniSwipeActionItemShow = "left" | "right" | "none";

/** 选项内容及样式 */
interface _UniSwipeActionItemOption {
  /** 按钮文字 */
  text: string;
  /** 按钮样式 */
  style: {
    /**
     * 背景颜色
     *
     * 默认为 #c7c6cd
     */
    backgroundColor: string;
    /**
     * 文字颜色
     *
     * 默认为 #ffffff
     */
    color: string;
    /**
     * 字体尺寸
     *
     * 默认为 14px
     */
    fontSize: string;
  };
}

/** 操作项打开的位置 */
type _UniSwipeActionItemOnClickEventPosition = Exclude<
  _UniSwipeActionItemShow,
  "none"
>;

interface _UniSwipeActionItemOnClickEvent {
  content: _UniSwipeActionItemOption;
  index: number;
  position: _UniSwipeActionItemOnClickEventPosition;
}

/** 点击时触发 */
type _UniSwipeActionItemOnClick = (
  event: _UniSwipeActionItemOnClickEvent,
) => void;

/** 打开或关闭时触发 */
type _UniSwipeActionItemOnChange = (show: _UniSwipeActionItemShow) => void;

/** 滑动操作项属性 */
type _UniSwipeActionItemProps = Partial<{
  /**
   * 其他组件开启的时候，当前组件是否自动关闭
   *
   * 默认为 true
   */
  autoClose: boolean;
  /**
   * 关闭组件
   *
   * autoClose 为 false 时有效
   *
   * 默认为 none
   */
  show: _UniSwipeActionItemShow;
  /**
   * 滑动阈值
   *
   * 默认为 20
   */
  threshold: number;
  /**
   * 是否禁止滑动
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 左侧选项内容及样式 */
  leftOptions: _UniSwipeActionItemOption[];
  /** 右侧选项内容及样式 */
  rightOptions: _UniSwipeActionItemOption[];
  /** 点击时触发 */
  onClick: _UniSwipeActionItemOnClick;
  /** 打开或关闭时触发 */
  onChange: _UniSwipeActionItemOnChange;
}>;

/** 滑动操作项 */
type _UniSwipeActionItem = DefineComponent<_UniSwipeActionItemProps>;

/** 滑动操作项实例 */
type _UniSwipeActionItemInstance = InstanceType<_UniSwipeActionItem>;

export type {
  _UniSwipeActionItem as UniSwipeActionItem,
  _UniSwipeActionItemInstance as UniSwipeActionItemInstance,
  _UniSwipeActionItemOnChange as UniSwipeActionItemOnChange,
  _UniSwipeActionItemOnClick as UniSwipeActionItemOnClick,
  _UniSwipeActionItemOnClickEvent as UniSwipeActionItemOnClickEvent,
  _UniSwipeActionItemOnClickEventPosition as UniSwipeActionItemOnClickEventPosition,
  _UniSwipeActionItemOption as UniSwipeActionItemOption,
  _UniSwipeActionItemProps as UniSwipeActionItemProps,
  _UniSwipeActionItemShow as UniSwipeActionItemShow,
};

declare global {
  namespace UniHelper {
    /**
     * 关闭组件
     *
     * autoClose 为 false 时有效
     */
    export type UniSwipeActionItemShow = _UniSwipeActionItemShow;
    /** 选项内容及样式 */
    export interface UniSwipeActionItemOption
      extends _UniSwipeActionItemOption {}
    export type UniSwipeActionItemOnClickEventPosition =
      _UniSwipeActionItemOnClickEventPosition;
    export type UniSwipeActionItemOnClickEvent =
      _UniSwipeActionItemOnClickEvent;
    /** 点击时触发 */
    export interface UniSwipeActionItemOnClick
      extends _UniSwipeActionItemOnClick {}
    /** 打开或关闭时触发 */
    export interface UniSwipeActionItemOnChange
      extends _UniSwipeActionItemOnChange {}
    export type UniSwipeActionItemProps = _UniSwipeActionItemProps;
    export type UniSwipeActionItem = _UniSwipeActionItem;
    export type UniSwipeActionItemInstance = _UniSwipeActionItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * `<uni-swipe-action />`子组件，用于放置内容
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniSwipeActionItem: _UniSwipeActionItem;
  }
}
