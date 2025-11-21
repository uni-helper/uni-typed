import type { DefineComponent } from "vue";

/**
 * 格式化使用的语言
 *
 * zh 中文
 *
 * en 英文
 */
type _UniDateformatLocale = "zh" | "en";

/** 要格式化的日期对象/日期字符串/时间戳 */
type _UniDateformatData = Date | string | number;

/** 日期格式化组件属性 */
type _UniDateformatProps = Partial<{
  /**
   * 要格式化的日期对象/日期字符串/时间戳
   *
   * 默认为 -
   */
  date: _UniDateformatData;
  /**
   * 转化类型阈值
   *
   * 默认为 [0, 0]
   */
  threshold: [number, number];
  /**
   * 格式字符串
   *
   * yyyy 四位年份
   *
   * yy 两位年份
   *
   * MM 两位月份，不足则在前面补 0
   *
   * M 月份，不自动补 0
   *
   * dd 两位天，不足则在前面补 0
   *
   * d 天，不自动补 0
   *
   * hh 两位小时，不足则在前面补 0
   *
   * h 小时，不自动补 0
   *
   * mm 两位分钟，不足则在前面补 0
   *
   * m 分钟，不自动补 0
   *
   * ss 两位秒，不足则在前面补 0
   *
   * s 秒，不自动补 0
   *
   * SSS 三位毫秒，不足则在前面补 0
   *
   * S 毫秒，不自动补 0
   *
   * 默认为 yyyy/MM/dd hh:mm:ss
   */
  format: string;
  /**
   * 格式化使用的语言
   *
   * zh 中文
   *
   * en 英文
   *
   * 默认为 zh
   */
  locale: _UniDateformatLocale;
  /**
   * 刷新频率
   *
   * 单位为 ms
   *
   * 默认为 0，表示不刷新
   */
  refreshRate: number | string;
}>;

/** 日期格式化组件 */
type _UniDateformat = DefineComponent<_UniDateformatProps>;

/** 日期格式化组件实例 */
type _UniDateformatInstance = InstanceType<_UniDateformat>;

export type {
  _UniDateformatLocale as UniDateformatLocale,
  _UniDateformatData as UniDateformatData,
  _UniDateformatProps as UniDateformatProps,
  _UniDateformat as UniDateformat,
  _UniDateformatInstance as UniDateformatInstance,
};

declare global {
  namespace UniHelper {
    /** 格式化使用的语言 */
    export type UniDateformatLocale = _UniDateformatLocale;
    /** 要格式化的日期对象/日期字符串/时间戳 */
    export type UniDateformatData = _UniDateformatData;
    /** 日期格式化组件属性 */
    export type UniDateformatProps = _UniDateformatProps;
    /** 日期格式化组件 */
    export type UniDateformat = _UniDateformat;
    /** 日期格式化组件实例 */
    export type UniDateformatInstance = _UniDateformatInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 日期格式化组件
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniDateformat: _UniDateformat;
  }
}
