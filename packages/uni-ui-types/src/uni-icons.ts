import type { Component } from "@uni-helper/uni-app-types";

/** 图标类型 */
type _UniIconsType =
  | "color"
  | "wallet"
  | "settings-filled"
  | "auth-filled"
  | "shop-filled"
  | "staff-filled"
  | "vip-filled"
  | "plus-filled"
  | "folder-add-filled"
  | "color-filled"
  | "tune-filled"
  | "calendar-filled"
  | "notification-filled"
  | "wallet-filled"
  | "medal-filled"
  | "gift-filled"
  | "fire-filled"
  | "refreshempty"
  | "location-filled"
  | "person-filled"
  | "personadd-filled"
  | "back"
  | "forward"
  | "arrow-right"
  | "arrow-left"
  | "arrow-up"
  | "arrow-down"
  | "bottom"
  | "right"
  | "top"
  | "left"
  | "eye"
  | "eye-filled"
  | "eye-slash"
  | "eye-slash-filled"
  | "info-filled"
  | "reload"
  | "micoff-filled"
  | "map-pin-ellipse"
  | "map-pin"
  | "location"
  | "starhalf"
  | "star"
  | "star-filled"
  | "calendar"
  | "fire"
  | "medal"
  | "font"
  | "gift"
  | "link"
  | "notification"
  | "staff"
  | "vip"
  | "folder-add"
  | "tune"
  | "auth"
  | "person"
  | "email-filled"
  | "phone-filled"
  | "phone"
  | "email"
  | "personadd"
  | "chatboxes-filled"
  | "contact"
  | "chatbubble-filled"
  | "contact-filled"
  | "chatboxes"
  | "chatbubble"
  | "upload-filled"
  | "upload"
  | "weixin"
  | "compose"
  | "qq"
  | "download-filled"
  | "pyq"
  | "sound"
  | "trash-filled"
  | "sound-filled"
  | "trash"
  | "videocam-filled"
  | "spinner-cycle"
  | "weibo"
  | "videocam"
  | "download"
  | "help"
  | "navigate-filled"
  | "plusempty"
  | "smallcircle"
  | "minus-filled"
  | "micoff"
  | "closeempty"
  | "clear"
  | "navigate"
  | "minus"
  | "image"
  | "mic"
  | "paperplane"
  | "close"
  | "help-filled"
  | "paperplane-filled"
  | "plus"
  | "mic-filled"
  | "image-filled"
  | "locked-filled"
  | "info"
  | "locked"
  | "camera-filled"
  | "chat-filled"
  | "camera"
  | "circle"
  | "checkmarkempty"
  | "chat"
  | "circle-filled"
  | "flag"
  | "flag-filled"
  | "gear-filled"
  | "home"
  | "home-filled"
  | "gear"
  | "smallcircle-filled"
  | "map-filled"
  | "map"
  | "refresh-filled"
  | "refresh"
  | "cloud-upload"
  | "cloud-download-filled"
  | "cloud-download"
  | "cloud-upload-filled"
  | "redo"
  | "images-filled"
  | "undo-filled"
  | "more"
  | "more-filled"
  | "undo"
  | "images"
  | "paperclip"
  | "settings"
  | "search"
  | "redo-filled"
  | "list"
  | "mail-open-filled"
  | "hand-down-filled"
  | "hand-down"
  | "hand-up-filled"
  | "hand-up"
  | "heart-filled"
  | "mail-open"
  | "heart"
  | "loop"
  | "pulldown"
  | "scan"
  | "bars"
  | "cart-filled"
  | "checkbox"
  | "checkbox-filled"
  | "shop"
  | "headphones"
  | "cart";

/** 自定义图标类型 */
export type _UniIconsCustomType = `icon-${string}`;

/** 图标属性 */
type _UniIconsProps = Partial<{
  /**
   * 图标大小
   *
   * 如果传入 number 默认使用 px
   *
   * 可传入其他自定义单位的宽度值
   *
   * 默认为 16
   */
  size: number | string;
  /**
   * 图标图案
   *
   * 默认为 空字符串
   */
  type: _UniIconsType | _UniIconsCustomType;
  /**
   * 图标颜色
   *
   * 默认为 #333333
   */
  color: string;
  /**
   * 自定义图标
   *
   * 默认为 空字符串
   */
  customPrefix: string;
}>;

/** 图标 */
type _UniIcons = Component<_UniIconsProps>;

/** 图标实例 */
interface _UniIconsInstance extends InstanceType<_UniIcons>{};;

export type {
  _UniIconsType as UniIconsType,
  _UniIconsCustomType as UniIconsCustomType,
  _UniIconsProps as UniIconsProps,
  _UniIcons as UniIcons,
  _UniIconsInstance as UniIconsInstance,
};

declare global {
  namespace UniHelper {
    /** 图标类型 */
    export type UniIconsType = _UniIconsType;
    /** 自定义图标类型 */
    export type UniIconsCustomType = _UniIconsCustomType;
    /** 图标属性 */
    export type UniIconsProps = _UniIconsProps;
    /** 图标 */
    export type UniIcons = _UniIcons;
    /** 图标实例 */
    export type UniIconsInstance = _UniIconsInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 图标 */
    UniIcons: _UniIcons;
  }
}
