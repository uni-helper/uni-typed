import type { DefineComponent } from "vue";
import type { UniBadgeCustomStyle, UniBadgeType } from "./uni-badge";
import type { UniIconsProps } from "./uni-icons";

/**
 * title 是否溢出隐藏
 *
 * 0 默认
 *
 * 1 显示一行
 *
 * 2 显示两行
 */
type _UniListItemEllipsis = 0 | 1 | 2;

/**
 * 缩略图尺寸
 *
 * lg 大图
 *
 * base 一般
 *
 * sm 小图
 */
type _UniListItemThumbSize = "lg" | "base" | "sm";

/** 新页面的跳转方式 */
type _UniListItemLink = "navigateTo" | "redirectTo" | "reLaunch" | "switchTab";

/**
 * 排版方向
 *
 * row 横向
 *
 * column 纵向
 */
type _UniListItemDirection = "row" | "column";

/** switch 是否被选中 */
type _UniListItemSwitchChecked = boolean;

/** 扩展图标参数 */
type _UniListItemExtraIcon = Omit<UniIconsProps, "customPrefix">;

interface _UniListItemOnClickEvent {
  data: Record<string, any>;
}

/** 点击 uni-list-item 触发，需开启点击反馈 */
type _UniListItemOnClick = (event: _UniListItemOnClickEvent) => void;

interface _UniListItemOnSwitchChangeEvent {
  /** switch 是否被选中 */
  value: _UniListItemSwitchChecked;
}

/** 点击切换 switch 时触发，需显示 switch */
type _UniListItemOnSwitchChange = (
  event: _UniListItemOnSwitchChangeEvent,
) => void;

type _UniListItemProps = Partial<{
  /** 标题 */
  title: string;
  /** 描述 */
  note: string;
  /**
   * title 是否溢出隐藏
   *
   * 0 默认
   *
   * 1 显示一行
   *
   * 2 显示两行
   *
   * 默认为 0
   */
  ellipsis: _UniListItemEllipsis;
  /**
   * 左侧缩略图
   *
   * 如果设置了，扩展图标就不会显示
   */
  thumb: string;
  /**
   * 缩略图尺寸
   *
   * lg 大图
   *
   * base 一般
   *
   * sm 小图
   *
   * 默认为 base
   */
  thumbSize: _UniListItemThumbSize;
  /**
   * 是否显示数字角标
   *
   * 默认为 false
   */
  showBadge: boolean;
  /** 数字角标内容 */
  badgeText: string;
  /**
   * 数字角标类型
   *
   * 默认为 success
   */
  badgeType: UniBadgeType;
  /** 数字角标样式 */
  badgeStyle: UniBadgeCustomStyle;
  /** 右侧文字内容 */
  rightText: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否显示箭头图标
   *
   * 默认为 false
   */
  showArrow: boolean;
  /**
   * 是否展示右侧箭头并开启点击反馈
   *
   * 默认为 false，表示不开启
   */
  link: false | _UniListItemLink;
  /**
   * 新页面跳转地址
   *
   * 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * 是否开启点击反馈
   *
   * 默认为 false
   */
  clickable: boolean;
  /**
   * 是否显示 switch
   *
   * 默认为 false
   */
  showSwitch: boolean;
  /**
   * switch 是否被选中
   *
   * 默认为 false
   */
  switchChecked: _UniListItemSwitchChecked;
  /**
   * 左侧是否显示扩展图标
   *
   * 默认为 false
   */
  showExtraIcon: boolean;
  /** 扩展图标参数 */
  extraIcon: _UniListItemExtraIcon;
  /**
   * 排版方向
   *
   * row 横向
   *
   * column 纵向
   *
   * 默认为 row
   */
  direction: _UniListItemDirection;
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 自定义样式
   *
   * 默认为 { padding: '', backgroundColor: '#FFFFFF' }
   */
  customStyle: Record<string, any>;
  /** 点击 uni-list-item 触发，需开启点击反馈 */
  onClick: _UniListItemOnClick;
  /** 点击切换 switch 时触发，需显示 switch */
  onSwitchChange: _UniListItemOnSwitchChange;
}>;

type _UniListItem = DefineComponent<_UniListItemProps>;

type _UniListItemInstance = InstanceType<_UniListItem>;

export type {
  _UniListItemEllipsis as UniListItemEllipsis,
  _UniListItemThumbSize as UniListItemThumbSize,
  _UniListItemLink as UniListItemLink,
  _UniListItemDirection as UniListItemDirection,
  _UniListItemSwitchChecked as UniListItemSwitchChecked,
  _UniListItemExtraIcon as UniListItemExtraIcon,
  _UniListItemOnClickEvent as UniListItemOnClickEvent,
  _UniListItemOnClick as UniListItemOnClick,
  _UniListItemOnSwitchChangeEvent as UniListItemOnSwitchChangeEvent,
  _UniListItemOnSwitchChange as UniListItemOnSwitchChange,
  _UniListItemProps as UniListItemProps,
  _UniListItem as UniListItem,
  _UniListItemInstance as UniListItemInstance,
};

declare global {
  namespace UniHelper {
    /**
     * title 是否溢出隐藏
     *
     * 0 默认
     *
     * 1 显示一行
     *
     * 2 显示两行
     */
    export type UniListItemEllipsis = _UniListItemEllipsis;
    /**
     * 缩略图尺寸
     *
     * lg 大图
     *
     * base 一般
     *
     * sm 小图
     */
    export type UniListItemThumbSize = _UniListItemThumbSize;
    /** 新页面的跳转方式 */
    export type UniListItemLink = _UniListItemLink;
    /**
     * 排版方向
     *
     * row 横向
     *
     * column 纵向
     */
    export type UniListItemDirection = _UniListItemDirection;
    /** switch 是否被选中 */
    export type UniListItemSwitchChecked = _UniListItemSwitchChecked;
    /** 扩展图标参数 */
    export interface UniListItemExtraIcon extends _UniListItemExtraIcon {}
    export type UniListItemOnClickEvent = _UniListItemOnClickEvent;
    /** 点击 uni-list-item 触发，需开启点击反馈 */
    export interface UniListItemOnClick extends _UniListItemOnClick {}
    export type UniListItemOnSwitchChangeEvent =
      _UniListItemOnSwitchChangeEvent;
    /** 点击切换 switch 时触发，需显示 switch */
    export interface UniListItemOnSwitchChange
      extends _UniListItemOnSwitchChange {}
    export type UniListItemProps = _UniListItemProps;
    export type UniListItem = _UniListItem;
    export type UniListItemInstance = _UniListItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 列表子项
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-list.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniListItem: _UniListItem;
  }
}
