import type { DefineComponent } from "vue";
import type { UniIconsCustomType, UniIconsType } from "./uni-icons";

/** 可选样式配置项 */
interface _UniFabPattern {
  /**
   * 文字默认颜色
   *
   * 默认为 #3c3e49
   */
  color?: string;
  /**
   * 文字选中时的颜色
   *
   * 默认为 #007aff
   */
  selectedColor?: string;
  /**
   * 背景色
   *
   * 默认为 #fff
   */
  backgroundColor?: string;
  /**
   * 按钮背景色
   *
   * 默认为 #007a7ff
   */
  buttonColor?: string;
  /**
   * 图标颜色
   *
   * 默认为 #fff
   */
  iconColor?: string;
  /**
   * 图标类型
   *
   * 默认为 plusempty
   */
  icon?: UniIconsType | UniIconsCustomType;
}

/**
 * 水平对齐方式
 *
 * left 左对齐
 *
 * right 右对齐
 */
type _UniFabHorizontal = "left" | "right";

/**
 * 垂直对齐方式
 *
 * bottom 下对齐
 *
 * top 上对齐
 */
type _UniFabVertical = "bottom" | "top";

/**
 * 展开菜单显示方式
 *
 * horizontal 水平显示
 *
 * vertical 垂直显示
 */
type _UniFabDirection = "horizontal" | "vertical";

/** 展开菜单内容配置项 */
interface _UniFabContentItem {
  /** 图片路径 */
  iconPath: string;
  /** 选中后图片路径 */
  selectedIconPath: string;
  /** 文字 */
  text: string;
  /** 是否选中当前 */
  active: boolean;
}

/** 展开菜单内容配置 */
type _UniFabContent = _UniFabContentItem[];

interface _UniFabOnTriggerEvent {
  index: number;
  item: _UniFabContentItem;
}

/** 展开菜单点击事件，返回点击信息 */
type _UniFabOnTrigger = (event: _UniFabOnTriggerEvent) => void;

/** 悬浮按钮点击事件 */
type _UniFabOnFabClick = () => void;

type _UniFabProps = Partial<{
  /** 可选样式配置项 */
  pattern: _UniFabPattern;
  /**
   * 水平对齐方式
   *
   * left 左对齐
   *
   * right 右对齐
   *
   * 默认为 left
   */
  horizontal: _UniFabHorizontal;
  /**
   * 垂直对齐方式
   *
   * bottom 下对齐
   *
   * top 上对齐
   *
   * 默认为 bottom
   */
  vertical: _UniFabVertical;
  /**
   * 展开菜单显示方式
   *
   * horizontal 水平显示
   *
   * vertical 垂直显示
   *
   * 默认为 horizontal
   */
  direction: _UniFabDirection;
  /**
   * 是否使用弹出菜单
   *
   * 默认为 true
   */
  popMenu: boolean;
  /** 展开菜单内容配置 */
  content: _UniFabContent;
  /** 展开菜单点击事件，返回点击信息 */
  onTrigger: _UniFabOnTrigger;
  /** 悬浮按钮点击事件 */
  onFabClick: _UniFabOnFabClick;
}>;

/** 点击可展开一个图形按钮菜单 */
type _UniFab = DefineComponent<_UniFabProps>;

type _UniFabInstance = InstanceType<_UniFab>;

export type {
  _UniFabPattern as UniFabPattern,
  _UniFabHorizontal as UniFabHorizontal,
  _UniFabVertical as UniFabVertical,
  _UniFabDirection as UniFabDirection,
  _UniFabContentItem as UniFabContentItem,
  _UniFabContent as UniFabContent,
  _UniFabOnTriggerEvent as UniFabOnTriggerEvent,
  _UniFabOnTrigger as UniFabOnTrigger,
  _UniFabOnFabClick as UniFabOnFabClick,
  _UniFabProps as UniFabProps,
  _UniFab as UniFab,
  _UniFabInstance as UniFabInstance,
};

declare global {
  namespace UniHelper {
    /** 可选样式配置项 */
    export type UniFabPattern = _UniFabPattern;
    /**
     * 水平对齐方式
     *
     * left 左对齐
     *
     * right 右对齐
     */
    export type UniFabHorizontal = _UniFabHorizontal;
    /**
     * 垂直对齐方式
     *
     * bottom 下对齐
     *
     * top 上对齐
     */
    export type UniFabVertical = _UniFabVertical;
    /**
     * 展开菜单显示方式
     *
     * horizontal 水平显示
     *
     * vertical 垂直显示
     */
    export type UniFabDirection = _UniFabDirection;
    /** 展开菜单内容配置项 */
    export interface UniFabContentItem extends _UniFabContentItem {}
    /** 展开菜单内容配置 */
    export type UniFabContent = _UniFabContent;
    export type UniFabOnTriggerEvent = _UniFabOnTriggerEvent;
    /** 展开菜单点击事件，返回点击信息 */
    export interface UniFabOnTrigger extends _UniFabOnTrigger {}
    /** 悬浮按钮点击事件 */
    export interface UniFabOnFabClick extends _UniFabOnFabClick {}
    export type UniFabProps = _UniFabProps;
    /** 点击可展开一个图形按钮菜单 */
    export type UniFab = _UniFab;
    export type UniFabInstance = _UniFabInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 点击可展开一个图形按钮菜单
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-fab.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniFab: _UniFab;
  }
}
