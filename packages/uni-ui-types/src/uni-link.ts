import type { DefineComponent } from "vue";

/** 外部网页超链接组件属性 */
type _UniLinkProps = Partial<{
  /** 链接地址 */
  href: string;
  /** 显示文字 */
  text: string;
  /** H5 下载文件名 */
  download: string;
  /**
   * 是否显示下划线
   *
   * 默认为 true
   */
  showUnderLine: boolean;
  /**
   * 小程序端复制链接时的提示语
   *
   * 默认为 已自动复制网址，请在手机浏览器里粘贴该网址
   */
  copyTips: string;
  /**
   * 链接文字颜色
   *
   * 默认为 #999999
   */
  color: string;
  /**
   * 链接文字大小
   *
   * 单位为 px
   *
   * 默认为 14
   */
  fontSize: number | string;
}>;

/**
 * 外部网页超链接组件
 *
 * 在小程序内复制 URL
 *
 * 在 APP 内打开外部浏览器
 *
 * 在 H5 端打开新网页
 */
type _UniLink = DefineComponent<_UniLinkProps>;

/** 外部网页超链接组件实例 */
type _UniLinkInstance = InstanceType<_UniLink>;

export type {
  _UniLinkProps as UniLinkProps,
  _UniLink as UniLink,
  _UniLinkInstance as UniLinkInstance,
};

declare global {
  namespace UniHelper {
    /** 外部网页超链接组件属性 */
    export type UniLinkProps = _UniLinkProps;
    /**
     * 外部网页超链接组件
     *
     * 在小程序内复制 URL
     *
     * 在 APP 内打开外部浏览器
     *
     * 在 H5 端打开新网页
     */
    export type UniLink = _UniLink;
    /** 外部网页超链接组件 */
    export type UniLinkInstance = _UniLinkInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 外部网页超链接组件
     *
     * 在小程序内复制 URL
     *
     * 在 APP 内打开外部浏览器
     *
     * 在 H5 端打开新网页
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-link.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniLink: _UniLink;
  }
}
