import type { DefineComponent } from "vue";

/**
 * 日期
 *
 * 格式为 YYYY-MM-DD
 */
type _UniCalendarDate = string;

/** 打点项 */
interface _UniCalendarSelectedElement {
  /** 日期 */
  date: _UniCalendarDate;
  /** 信息 */
  info: string;
  /** 自定义数据 */
  data?: Record<string, any>;
}

/** 打点 */
type _UniCalendarSelected = _UniCalendarSelectedElement[];

/**
 * 弹出日历组件
 *
 * insert 为 true 时有效
 */
type _UniCalendarOpen = () => void;

interface _UniCalendarBaseEvent {
  /** 选择的范围 */
  range: {
    /** 范围开始日期 */
    before: _UniCalendarDate;
    // 范围结束日期
    after: _UniCalendarDate;
    // 范围日期数组
    data: _UniCalendarDate[];
  };
  /** 当前年 */
  year: number;
  /** 当前月 */
  month: number;
  /** 当前日 */
  date: number;
  /** 农历信息 */
  lunar: {
    /** 农历当前年 */
    lYear: number;
    /** 农历当前月 */
    lMonth: number;
    /** 农历当前日 */
    lDay: number;
    /** 生肖 */
    Animal: string;
    /** 农历当前月中文表示 */
    IMonthCn: string;
    /** 农历当前日中文表示 */
    IDayCn: string;
    /** 公历当前年 */
    cYear: number;
    /** 公历当前月 */
    cMonth: number;
    /** 公历当前日 */
    cDay: number;
    /** 农历当前年中文天干地支表示 */
    gzYear: string;
    /** 农历当前月中文天干地支表示 */
    gzMonth: string;
    /** 农历当前日中文天干地支表示 */
    gzDay: string;
    /** 是否今天 */
    isToday: boolean;
    /** 是否闰年 */
    isLeap: boolean;
    /** 周几 */
    nWeek: number;
    /** 周几中文表示 */
    ncWeek: string;
    /** 是否节气 */
    isTerm: boolean;
    /** 节气名 */
    term: string | null | undefined;
    /** 星座 */
    astro: string;
  };
  /** 打点信息 */
  extraInfo: _UniCalendarSelectedElement;
  /** 当前完整日期 */
  fulldate: _UniCalendarDate;
}

type _UniCalendarOnChangeEvent = _UniCalendarBaseEvent;

/**
 * 日期改变时触发
 *
 * insert 为 true 时有效
 */
type _UniCalendarOnChange = (event: _UniCalendarOnChangeEvent) => void;

type _UniCalendarOnConfirmEvent = _UniCalendarBaseEvent;

/**
 * 确认选择时触发
 *
 * insert 为 false 时有效
 */
type _UniCalendarOnConfirm = (event: _UniCalendarOnConfirmEvent) => void;

interface _UniCalendarOnMonthSwitchEvent {
  /** 当前年 */
  year: number;
  /** 当前月 */
  month: number;
}

/** 切换月份时触发 */
type _UniCalendarOnMonthSwitch = (
  event: _UniCalendarOnMonthSwitchEvent,
) => void;

/** 关闭日历组件时触发 */
type _UniCalendarOnClose = () => void;

/** 日历组件属性 */
type _UniCalendarProps = Partial<{
  /**
   * 自定义当前时间
   *
   * 格式为 YYYY-MM-DD
   *
   * 默认为 今天
   */
  date: _UniCalendarDate;
  /**
   * 是否显示农历
   *
   * 默认为 false
   */
  lunar: boolean;
  /**
   * 日期范围的开始日期
   *
   * 格式为 YYYY-MM-DD
   */
  startDate: _UniCalendarDate;
  /**
   * 日期范围的结束日期
   *
   * 格式为 YYYY-MM-DD
   */
  endDate: _UniCalendarDate;
  /**
   * 是否为范围选择
   *
   * 默认为 false
   */
  range: boolean;
  /**
   * 插入模式
   *
   * true 插入模式
   *
   * false 弹窗模式
   *
   * 默认为 true
   */
  insert: boolean;
  /**
   * 弹窗模式下是否清空上次选择内容
   *
   * insert 为 true 时有效
   *
   * 默认为 true
   */
  clearDate: boolean;
  /**
   * 是否显示月份为背景
   *
   * 默认为 true
   */
  showMonth: boolean;
  /** 打点 */
  selected: _UniCalendarSelected;
  /**
   * 弹出日历组件
   *
   * insert 为 true 时有效
   */
  open: _UniCalendarOpen;
  /**
   * 日期改变时触发
   *
   * insert 为 true 时有效
   */
  onChange: _UniCalendarOnChange;
  /**
   * 确认选择时触发
   *
   * insert 为 false 时有效
   */
  onConfirm: _UniCalendarOnConfirm;
  /** 切换月份时触发 */
  onMonthSwitch: _UniCalendarOnMonthSwitch;
  /** 关闭日历组件时触发 */
  onClose: _UniCalendarOnClose;
}>;

/**
 * 日历组件可以查看日期，选择任意范围内的日期，打点操作
 *
 * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 */
type _UniCalendar = DefineComponent<_UniCalendarProps>;

/** 日历组件实例 */
type _UniCalendarInstance = InstanceType<_UniCalendar>;

export type {
  _UniCalendarDate as UniCalendarDate,
  _UniCalendarSelectedElement as UniCalendarSelectedElement,
  _UniCalendarSelected as UniCalendarSelected,
  _UniCalendarOpen as UniCalendarOpen,
  _UniCalendarBaseEvent as UniCalendarBaseEvent,
  _UniCalendarOnChangeEvent as UniCalendarOnChangeEvent,
  _UniCalendarOnChange as UniCalendarOnChange,
  _UniCalendarOnConfirmEvent as UniCalendarOnConfirmEvent,
  _UniCalendarOnConfirm as UniCalendarOnConfirm,
  _UniCalendarOnMonthSwitchEvent as UniCalendarOnMonthSwitchEvent,
  _UniCalendarOnMonthSwitch as UniCalendarOnMonthSwitch,
  _UniCalendarOnClose as UniCalendarOnClose,
  _UniCalendarProps as UniCalendarProps,
  _UniCalendar as UniCalendar,
  _UniCalendarInstance as UniCalendarInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 日期
     *
     * 格式为 YYYY-MM-DD
     */
    export type UniCalendarDate = _UniCalendarDate;
    /** 打点项 */
    export interface UniCalendarSelectedElement
      extends _UniCalendarSelectedElement {}
    /** 打点 */
    export interface UniCalendarSelected extends _UniCalendarSelected {}
    /**
     * 弹出日历组件
     *
     * insert 为 true 时有效
     */
    export interface UniCalendarOpen extends _UniCalendarOpen {}
    export interface UniCalendarBaseEvent extends _UniCalendarBaseEvent {}
    export interface UniCalendarOnChangeEvent
      extends _UniCalendarOnChangeEvent {}
    /**
     * 日期改变时触发
     *
     * insert 为 true 时有效
     */
    export interface UniCalendarOnChange extends _UniCalendarOnChange {}
    export interface UniCalendarOnConfirmEvent
      extends _UniCalendarOnConfirmEvent {}
    /**
     * 确认选择时触发
     *
     * insert 为 false 时有效
     */
    export interface UniCalendarOnConfirm extends _UniCalendarOnConfirm {}
    export interface UniCalendarOnMonthSwitchEvent
      extends _UniCalendarOnMonthSwitchEvent {}
    /** 切换月份时触发 */
    export interface UniCalendarOnMonthSwitch
      extends _UniCalendarOnMonthSwitch {}
    /** 关闭日历组件时触发 */
    export interface UniCalendarOnClose extends _UniCalendarOnClose {}
    /** 日历组件属性 */
    export type UniCalendarProps = _UniCalendarProps;
    /**
     * 日历组件可以查看日期，选择任意范围内的日期，打点操作
     *
     * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     */
    export type UniCalendar = _UniCalendar;
    /** 日历组件实例 */
    export type UniCalendarInstance = _UniCalendarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 日历组件可以查看日期，选择任意范围内的日期，打点操作
     *
     * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-calendar.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniCalendar: _UniCalendar;
  }
}
