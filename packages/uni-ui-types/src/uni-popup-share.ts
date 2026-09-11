import type { DefineComponent } from "vue";

interface _UniPopupShareOnSelectEvent {
  item: {
    text: string;
    icon: string;
    name: string;
  };
  index: number;
}

/** 选择时触发 */
type _UniPopupShareOnSelect = (event: _UniPopupShareOnSelectEvent) => void;

/** 分享弹窗属性 */
type _UniPopupShareProps = Partial<{
  /** 分享弹窗标题 */
  title: string;
  /**
   * 是否拦截按钮事件
   *
   * true 不会关闭对话框，手动调用 close 以关闭
   *
   * 默认为 false
   */
  beforeClose: boolean;
  /** 选择时触发 */
  onSelect: _UniPopupShareOnSelect;
}>;

/** 分享弹窗 */
type _UniPopupShare = DefineComponent<_UniPopupShareProps>;

/** 分享弹窗实例 */
type _UniPopupShareInstance = InstanceType<_UniPopupShare>;

export type {
  _UniPopupShare as UniPopupShare,
  _UniPopupShareInstance as UniPopupShareInstance,
  _UniPopupShareOnSelect as UniPopupShareOnSelect,
  _UniPopupShareOnSelectEvent as UniPopupShareOnSelectEvent,
  _UniPopupShareProps as UniPopupShareProps,
};

declare global {
  namespace UniHelper {
    export type UniPopupShareOnSelectEvent = _UniPopupShareOnSelectEvent;
    /** 选择时触发 */
    export interface UniPopupShareOnSelect extends _UniPopupShareOnSelect {}
    /** 分享弹窗属性 */
    export type UniPopupShareProps = _UniPopupShareProps;
    /** 分享弹窗 */
    export type UniPopupShare = _UniPopupShare;
    export type UniPopupShareInstance = _UniPopupShareInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 分享示例
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniPopupShare: _UniPopupShare;
  }
}
