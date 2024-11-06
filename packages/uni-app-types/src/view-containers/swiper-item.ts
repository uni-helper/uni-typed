import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/** Swiper 直接子组件属性 */
type _SwiperItemProps = CommonProps &
  Partial<{
    /** 标识符 */
    itemId: string;
  }>;

/**
 * Swiper 直接子组件，宽高自动设置为父组件的 100%
 *
 * 不能被子组件自动撑开
 */
type _SwiperItem = DefineComponent<_SwiperItemProps>;

/** Swiper 直接子组件实例 */
type _SwiperItemInstance = InstanceType<_SwiperItem>;

export type {
  _SwiperItemProps as SwiperItemProps,
  _SwiperItem as SwiperItem,
  _SwiperItemInstance as SwiperItemInstance,
};

declare global {
  namespace UniHelper {
    /** Swiper 直接子组件属性 */
    export type SwiperItemProps = _SwiperItemProps;
    /**
     * Swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     */
    export type SwiperItem = _SwiperItem;
    /** Swiper 直接子组件实例 */
    export type SwiperItemInstance = _SwiperItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * Swiper 直接子组件，宽高自动设置为父组件的 100%
     *
     * 不能被子组件自动撑开
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/scroll-item.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    SwiperItem: _SwiperItem;
  }
}
