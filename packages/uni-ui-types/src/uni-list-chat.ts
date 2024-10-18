import type { DefineComponent } from "vue";

type _UniListChatLink = "navigateTo" | "redirectTo" | "reLaunch" | "switchTab";

/** 角标位置 */
type _UniListChatBadgePositon = "left" | "right";

interface _UniListChatOnClickEvent {
  data: Record<string, any>;
}

/** 点击时触发 */
type _UniListChatOnClick = (event: _UniListChatOnClickEvent) => void;

/** 聊天列表属性 */
type _UniListChatProps = Partial<{
  /** 标题 */
  title: string;
  /** 描述 */
  note: string;
  /**
   * 是否开启点击反馈
   *
   * 默认为 false
   */
  clickable: boolean;
  /**
   * 是否展示右侧箭头并开启点击反馈
   *
   * 默认为 false，表示不开启
   */
  link: false | _UniListChatLink;
  /**
   * 跳转页面地址
   *
   * 如果填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /** 数字角标内容，设置为 dot 将显示圆点 */
  badgeText: string;
  /**
   * 角标位置
   *
   * 默认为 right
   */
  badgePositon: _UniListChatBadgePositon;
  /** 右侧显示的时间 */
  time: string;
  /**
   * 是否显示圆形头像
   *
   * 默认为 false
   */
  avatarCircle: boolean;
  /** 头像地址 */
  avatar: string;
  /** 头像组 */
  avatarList: Array<{ url: string }>;
  /** 点击时触发 */
  onClick: _UniListChatOnClick;
}>;

/** 聊天列表 */
type _UniListChat = DefineComponent<_UniListChatProps>;

/** 聊天列表实例 */
type _UniListChatInstance = InstanceType<_UniListChat>;

export type {
  _UniListChatLink as UniListChatLink,
  _UniListChatBadgePositon as UniListChatBadgePositon,
  _UniListChatOnClickEvent as UniListChatOnClickEvent,
  _UniListChatOnClick as UniListChatOnClick,
  _UniListChatProps as UniListChatProps,
  _UniListChat as UniListChat,
  _UniListChatInstance as UniListChatInstance,
};

declare global {
  namespace UniHelper {
    export type UniListChatLink = _UniListChatLink;
    /** 角标位置 */
    export type UniListChatBadgePositon = _UniListChatBadgePositon;
    export type UniListChatOnClickEvent = _UniListChatOnClickEvent;
    /** 点击时触发 */
    export interface UniListChatOnClick extends _UniListChatOnClick {}
    /** 聊天列表属性 */
    export type UniListChatProps = _UniListChatProps;
    /** 聊天列表 */
    export type UniListChat = _UniListChat;
    /** 聊天列表实例 */
    export type UniListChatInstance = _UniListChatInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 聊天列表
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-list.html)
     * |
     * [使用说明](https://uni-typed.netlify.app/)
     */
    UniListChat: _UniListChat;
  }
}
