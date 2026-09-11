import type { DefineComponent } from "vue";
import type { UniIconsType } from "./uni-icons";

/** 选项 */
interface _UniGoodsNavOption {
  /** 文字 */
  text: string;
  /** 图标 */
  icon: UniIconsType;
  /** 右上角数字角标 */
  info?: number;
  /**
   * 角标背景色
   *
   * 默认为 #ff0000
   */
  infoBackgroundColor?: string;
  /**
   * 角标前景色
   *
   * 默认为 #fff
   */
  infoColor?: string;
}

interface _UniGoodsNavOnClickEvent {
  index: number;
  content: _UniGoodsNavOption;
}

/** 左侧点击触发 */
type _UniGoodsNavOnClick = (event: _UniGoodsNavOnClickEvent) => void;

/** 按钮 */
interface _UniGoodsNavButton {
  /** 文字 */
  text: string;
  /** 按钮背景色 */
  backgroundColor: string;
  /** 字体颜色 */
  color: string;
}

interface _UniGoodsNavOnButtonClickEvent {
  index: number;
  content: _UniGoodsNavButton;
}

/** 右侧点击触发 */
type _UniGoodsNavOnButtonClick = (
  event: _UniGoodsNavOnButtonClickEvent,
) => void;

/** 商品导航属性 */
type _UniGoodsNavProps = Partial<{
  /**
   * 选项
   *
   * 默认为 [{ icon: 'shop', text: '店铺' }, { icon: 'cart', text: '购物车' }]
   */
  options: _UniGoodsNavOption[];
  /**
   * 组件按钮组
   *
   * 默认为 [{ text: '加入购物车', backgroundColor: 'linear-gradient(90deg, #ffcd1e,
   * #ff8a18)', color: '#fff' }, { text: '立即购买', backgroundColor:
   * 'linear-gradient(90deg, #fe6035, #ef1224)', color: '#fff' }]
   */
  buttonGroup: _UniGoodsNavButton[];
  /**
   * 按钮是否平铺
   *
   * 默认为 false
   */
  fill: boolean;
  /** 左侧点击触发 */
  onClick: _UniGoodsNavOnClick;
  /** 右侧点击触发 */
  onButtonClick: _UniGoodsNavOnButtonClick;
}>;

/** 商品加入购物车，立即购买 */
type _UniGoodsNav = DefineComponent<_UniGoodsNavProps>;

/** 商品导航实例 */
type _UniGoodsNavInstance = InstanceType<_UniGoodsNav>;

export type {
  _UniGoodsNav as UniGoodsNav,
  _UniGoodsNavButton as UniGoodsNavButton,
  _UniGoodsNavInstance as UniGoodsNavInstance,
  _UniGoodsNavOnButtonClick as UniGoodsNavOnButtonClick,
  _UniGoodsNavOnButtonClickEvent as UniGoodsNavOnButtonClickEvent,
  _UniGoodsNavOnClick as UniGoodsNavOnClick,
  _UniGoodsNavOnClickEvent as UniGoodsNavOnClickEvent,
  _UniGoodsNavOption as UniGoodsNavOption,
  _UniGoodsNavProps as UniGoodsNavProps,
};

declare global {
  namespace UniHelper {
    /** 选项 */
    export interface UniGoodsNavOption extends _UniGoodsNavOption {}
    export type UniGoodsNavOnClickEvent = _UniGoodsNavOnClickEvent;
    /** 左侧点击触发 */
    export interface UniGoodsNavOnClick extends _UniGoodsNavOnClick {}
    /** 按钮 */
    export interface UniGoodsNavButton extends _UniGoodsNavButton {}
    export type UniGoodsNavOnButtonClickEvent = _UniGoodsNavOnButtonClickEvent;
    /** 右侧点击触发 */
    export interface UniGoodsNavOnButtonClick
      extends _UniGoodsNavOnButtonClick {}

    export type UniGoodsNavProps = _UniGoodsNavProps;
    /** 商品加入购物车，立即购买 */
    export type UniGoodsNav = _UniGoodsNav;
    export type UniGoodsNavInstance = _UniGoodsNavInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 商品加入购物车，立即购买
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniGoodsNav: _UniGoodsNav;
  }
}
