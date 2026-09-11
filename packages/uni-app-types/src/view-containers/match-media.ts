import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/**
 * 屏幕方向
 *
 * Landscape 横向
 *
 * Portrait 纵向
 */
type _MatchMediaOrientation = "landscape" | "portrait";

/** Media query 匹配检测节点属性 */
type _MatchMediaProps = CommonProps &
  Partial<{
    /**
     * 页面最小宽度
     *
     * 单位为 px
     */
    minWidth: number;
    /**
     * 页面最大宽度
     *
     * 单位为 px
     */
    maxWidth: number;
    /**
     * 页面宽度
     *
     * 单位为 px
     */
    width: number;
    /**
     * 页面最小高度
     *
     * 单位为 px
     */
    minHeight: number;
    /**
     * 页面最大高度
     *
     * 单位为 px
     */
    maxHeight: number;
    /**
     * 页面高度
     *
     * 单位为 px
     */
    height: number;
    /**
     * 屏幕方向
     *
     * Landscape 横向
     *
     * Portrait 纵向
     */
    orientation: _MatchMediaOrientation;
  }>;

/**
 * Media query 匹配检测节点
 *
 * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
 *
 * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
 */
type _MatchMedia = DefineComponent<_MatchMediaProps>;

/** Media query 匹配检测节点实例 */
type _MatchMediaInstance = InstanceType<_MatchMedia>;

export type {
  _MatchMedia as MatchMedia,
  _MatchMediaInstance as MatchMediaInstance,
  _MatchMediaOrientation as MatchMediaOrientation,
  _MatchMediaProps as MatchMediaProps,
};

declare global {
  namespace UniHelper {
    /**
     * 屏幕方向
     *
     * Landscape 横向
     *
     * Portrait 纵向
     */
    export type MatchMediaOrientation = _MatchMediaOrientation;
    /** Media query 匹配检测节点属性 */
    export type MatchMediaProps = _MatchMediaProps;
    /**
     * Media query 匹配检测节点
     *
     * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
     *
     * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
     */
    export type MatchMedia = _MatchMedia;
    /** Media query 匹配检测节点 */
    export type MatchMediaInstance = _MatchMediaInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * Media query 匹配检测节点
     *
     * 类似于网页开发中使用媒体查询来适配大屏小屏，这是一个可适配不同屏幕的基本视图组件
     *
     * 可以指定一组 media query 媒体查询规则，满足查询条件时，这个组件才会被展示
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/match-media.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    MatchMedia: _MatchMedia;
  }
}
