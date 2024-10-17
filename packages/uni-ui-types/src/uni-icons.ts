import type { DefineComponent } from "vue";

/** 图标类型 */
type _UniIconsType =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "auth"
  | "auth-filled"
  | "back"
  | "bars"
  | "calendar"
  | "calendar-filled"
  | "camera"
  | "camera-filled"
  | "cart"
  | "cart-filled"
  | "chat"
  | "chat-filled"
  | "chatboxes"
  | "chatboxes-filled"
  | "chatbubble"
  | "chatbubble-filled"
  | "checkbox"
  | "checkbox-filled"
  | "checkmarkempty"
  | "circle"
  | "circle-filled"
  | "clear"
  | "close"
  | "closeempty"
  | "cloud-download"
  | "cloud-download-filled"
  | "cloud-upload"
  | "cloud-upload-filled"
  | "color"
  | "color-filled"
  | "compose"
  | "contact"
  | "contact-filled"
  | "down"
  | "bottom"
  | "download"
  | "download-filled"
  | "email"
  | "email-filled"
  | "eye"
  | "eye-filled"
  | "eye-slash"
  | "eye-slash-filled"
  | "fire"
  | "fire-filled"
  | "flag"
  | "flag-filled"
  | "folder-add"
  | "folder-add-filled"
  | "font"
  | "forward"
  | "gear"
  | "gear-filled"
  | "gift"
  | "gift-filled"
  | "hand-down"
  | "hand-down-filled"
  | "hand-up"
  | "hand-up-filled"
  | "headphones"
  | "heart"
  | "heart-filled"
  | "help"
  | "help-filled"
  | "home"
  | "home-filled"
  | "image"
  | "image-filled"
  | "images"
  | "images-filled"
  | "info"
  | "info-filled"
  | "left"
  | "link"
  | "list"
  | "location"
  | "location-filled"
  | "locked"
  | "locked-filled"
  | "loop"
  | "mail-open"
  | "mail-open-filled"
  | "map"
  | "map-filled"
  | "map-pin"
  | "map-pin-ellipse"
  | "medal"
  | "medal-filled"
  | "mic"
  | "mic-filled"
  | "micoff"
  | "micoff-filled"
  | "minus"
  | "minus-filled"
  | "more"
  | "more-filled"
  | "navigate"
  | "navigate-filled"
  | "notification"
  | "notification-filled"
  | "paperclip"
  | "paperplane"
  | "paperplane-filled"
  | "person"
  | "person-filled"
  | "personadd"
  | "personadd-filled"
  | "personadd-filled-copy"
  | "phone"
  | "phone-filled"
  | "plus"
  | "plus-filled"
  | "plusempty"
  | "pulldown"
  | "pyq"
  | "qq"
  | "redo"
  | "redo-filled"
  | "refresh"
  | "refresh-filled"
  | "refreshempty"
  | "reload"
  | "right"
  | "scan"
  | "search"
  | "settings"
  | "settings-filled"
  | "shop"
  | "shop-filled"
  | "smallcircle"
  | "smallcircle-filled"
  | "sound"
  | "sound-filled"
  | "spinner-cycle"
  | "staff"
  | "staff-filled"
  | "star"
  | "star-filled"
  | "starhalf"
  | "trash"
  | "trash-filled"
  | "tune"
  | "tune-filled"
  | "undo"
  | "undo-filled"
  | "up"
  | "top"
  | "upload"
  | "upload-filled"
  | "videocam"
  | "videocam-filled"
  | "vip"
  | "vip-filled"
  | "wallet"
  | "wallet-filled"
  | "weibo"
  | "weixin";

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
type _UniIcons = DefineComponent<_UniIconsProps>;

/** 图标实例 */
type _UniIconsInstance = InstanceType<_UniIcons>;

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
