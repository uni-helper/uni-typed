import type { DefineComponent } from "vue";

/** 点击触发 */
type _UniNoticeBarOnClick = () => void;

/** 关闭触发 */
type _UniNoticeBarOnClose = () => void;

/** 查看更多触发 */
type _UniNoticeBarOnGetmore = () => void;

/** 通告栏属性 */
type _UniNoticeBarProps = Partial<{
  /**
   * 文字滚动的速度
   *
   * 单位为 px
   *
   * 默认为 100
   */
  speed: number;
  /** 显示文字 */
  text: string;
  /** 查看更多的文本 */
  moreText: string;
  /**
   * 背景颜色
   *
   * 默认为 #fff9ea
   */
  backgroundColor: string;
  /**
   * 文字颜色
   *
   * 默认为 #ff9a43
   */
  color: string;
  /**
   * 查看更多的文字颜色
   *
   * 默认为 #ff9a43
   */
  moreColor: string;
  /**
   * 字体大小，也用于计算 line-height
   *
   * 单位为 px
   *
   * 默认为 14
   */
  fontSize: number;
  /**
   * 是否单行
   *
   * 默认为 false
   */
  single: boolean;
  /**
   * 是否滚动
   *
   * true 滚动，强制单行
   *
   * false 不滚动
   *
   * 默认为 false
   */
  scrollable: boolean;
  /**
   * 是否显示左侧喇叭图标
   *
   * 默认为 false
   */
  showIcon: boolean;
  /**
   * 是否显示左侧关闭按钮
   *
   * 默认为 false
   */
  showClose: boolean;
  /**
   * 是否显示右侧查看更多图标
   *
   * 默认为 false
   */
  showGetMore: boolean;
  /** 点击触发 */
  onClick: _UniNoticeBarOnClick;
  /** 关闭触发 */
  onClose: _UniNoticeBarOnClose;
  /** 查看更多触发 */
  onGetmore: _UniNoticeBarOnGetmore;
}>;

/** 通告栏 */
type _UniNoticeBar = DefineComponent<_UniNoticeBarProps>;

/** 通告栏实例 */
type _UniNoticeBarInstance = InstanceType<_UniNoticeBar>;

export type {
  _UniNoticeBarOnClick as UniNoticeBarOnClick,
  _UniNoticeBarOnClose as UniNoticeBarOnClose,
  _UniNoticeBarOnGetmore as UniNoticeBarOnGetmore,
  _UniNoticeBarProps as UniNoticeBarProps,
  _UniNoticeBar as UniNoticeBar,
  _UniNoticeBarInstance as UniNoticeBarInstance,
};

declare global {
  namespace UniHelper {
    /** 点击触发 */
    export interface UniNoticeBarOnClick extends _UniNoticeBarOnClick {}
    /** 关闭触发 */
    export interface UniNoticeBarOnClose extends _UniNoticeBarOnClose {}
    /** 查看更多触发 */
    export interface UniNoticeBarOnGetmore extends _UniNoticeBarOnGetmore {}
    /** 通告栏属性 */
    export type UniNoticeBarProps = _UniNoticeBarProps;
    /** 通告栏 */
    export type UniNoticeBar = _UniNoticeBar;
    /** 通告栏实例 */
    export type UniNoticeBarInstance = _UniNoticeBarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 通告栏
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-notice-bar.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniNoticeBar: _UniNoticeBar;
  }
}
