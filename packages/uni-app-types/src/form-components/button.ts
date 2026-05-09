import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

/**
 * 按钮的大小
 *
 * Default 默认
 *
 * Mini 小
 */
type _ButtonSize = "default" | "mini";

/**
 * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
 *
 * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
 * 小程序为浅蓝色
 *
 * Default 白色
 *
 * Warn 红色
 */
type _ButtonType = "primary" | "default" | "warn";

/**
 * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
 *
 * Submit 点击会触发 form 的 submit 事件
 *
 * Reset 点击会触发 form 的 reset 事件
 */
type _ButtonFormType = "submit" | "reset";

/**
 * 开放能力
 *
 * Feedback 打开“意见反馈”页面，用户可提交反馈内容并上传日志
 *
 * Share 触发用户转发
 *
 * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
 *
 * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
 *
 * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
 *
 * GetRealtimePhoneNumber 手机号实时验证，可以从 `@getrealtimephonenumber` 回调中获取到用户信息
 *
 * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
 *
 * OpenSetting 打开授权设置页
 *
 * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
 *
 * LiveActivity 通过前端获取新的一次性订阅消息下发机制使用的 code
 *
 * GetAuthorize 支持小程序授权
 *
 * Lifestyle 关注生活号
 *
 * ContactShare 分享到通讯录好友
 *
 * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json
 * 中必须配置 groupIdList
 *
 * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
 *
 * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json
 * 中必须配置 publicIdList
 *
 * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
 *
 * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
 *
 * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
 *
 * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
 *
 * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
 *
 * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
 *
 * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
 *
 * Login 登录，可以从 `@login` 回调中确认是否登录成功
 *
 * Subscribe 订阅类模板消息，需要用户授权才可发送
 *
 * Favorite 触发用户收藏
 *
 * WatchLater 触发用户稍后再看
 *
 * OpenProfile 触发打开用户主页
 *
 * AgreePrivacyAuthorization 用户同意隐私协议按钮
 *
 * UploadDouyinVideo 发布抖音视频
 *
 * Im 跳转抖音 IM 客服
 */
type _ButtonOpenType =
  | "feedback"
  | "share"
  | "getUserInfo"
  | "contact"
  | "getPhoneNumber"
  | "getRealtimePhoneNumber"
  | "launchApp"
  | "openSetting"
  | "chooseAvatar"
  | "getAuthorize"
  | "lifestyle"
  | "liveActivity"
  | "contactShare"
  | "openGroupProfile"
  | "openGuildProfile"
  | "openPublicProfile"
  | "shareMessageToFriend"
  | "addFriend"
  | "addColorSign"
  | "addGroupApp"
  | "addToFavorites"
  | "chooseAddress"
  | "chooseInvoiceTitle"
  | "login"
  | "subscribe"
  | "favorite"
  | "watchLater"
  | "openProfile"
  | "agreePrivacyAuthorization"
  | "uploadDouyinVideo"
  | "im";

/**
 * 返回用户信息的语言
 *
 * Zh_CN 简体中文
 *
 * Zh_TW 繁体中文
 *
 * En 英文
 */
type _ButtonLang = "zh_CN" | "zh_TW" | "en";

/**
 * 卡片业态类型，用于一次性订阅消息
 *
 * 1001 打车服务
 *
 * 1003 同城配送服务
 *
 * 1004 取餐等候服务
 *
 * 1005 餐厅排队服务
 *
 * 2001 购物（实体物流）服务
 *
 * 2002 购物（自提）服务
 *
 * 2003 购物（虚拟发货）服务
 *
 * 2004 快递寄送服务
 *
 * 2005 保险购买服务
 *
 * 2006 购物&餐饮（同城配送）服务
 *
 * 2007 购物&餐饮&本地生活（等候领取）服务
 *
 * 2008 酒店预订服务
 *
 * 2009 机票服务
 *
 * 2010 火车票、汽车票、船票服务
 *
 * 2011 景区门票服务
 */
type _ButtonActivityType =
  | "1001"
  | "1003"
  | "1004"
  | "1005"
  | "2001"
  | "2002"
  | "2003"
  | "2004"
  | "2005"
  | "2006"
  | "2007"
  | "2008"
  | "2009"
  | "2010"
  | "2011";

interface _ButtonOnGetphonenumberDetail {
  /** 错误信息 */
  errMsg?: string;
  /** 动态令牌 */
  code?: string;
  /** 包括敏感数据在内的完整用户信息的加密数据 */
  encryptedData?: string;
  /** 加密算法的初始向量 */
  iv?: string;
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 */
  cloudID?: string;
}

type _ButtonOnGetphonenumberEvent = CustomEvent<_ButtonOnGetphonenumberDetail>;

/**
 * 获取用户手机号时回调
 *
 * Open-type="getPhoneNumber" 时有效
 */
type _ButtonOnGetphonenumber = (event: _ButtonOnGetphonenumberEvent) => void;

interface _ButtonOnGetrealtimephonenumberDetail {
  /** 错误信息 */
  errMsg?: string;
  /** 错误码（失败时返回） */
  errno?: number;
  /** 动态令牌 */
  code?: string;
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 */
  cloudID?: string;
}

type _ButtonOnGetrealtimephonenumberEvent =
  CustomEvent<_ButtonOnGetrealtimephonenumberDetail>;

/**
 * 手机号实时验证回调
 *
 * Open-type="getRealtimePhoneNumber" 时有效
 */
type _ButtonOnGetrealtimephonenumber = (
  event: _ButtonOnGetrealtimephonenumberEvent,
) => void;

type _ButtonOnErrorEvent = BaseEvent;

/** 使用开放能力发生错误时回调 */
type _ButtonOnError = (event: _ButtonOnErrorEvent) => void;

interface _ButtonOnCreateliveactivityDetail {
  /** 错误信息 */
  errMsg?: string;
  /** 动态更新令牌，用于后续调用服务端接口更新卡片状态 */
  code?: string;
}

type _ButtonOnCreateliveactivityEvent =
  CustomEvent<_ButtonOnCreateliveactivityDetail>;

/**
 * 获取一次性订阅消息的动态令牌回调
 *
 * Open-type="liveActivity" 时有效
 */
type _ButtonOnCreateliveactivity = (
  event: _ButtonOnCreateliveactivityEvent,
) => void;

interface _ButtonOnOpensettingDetail {
  authSetting: Record<string, any>;
}

type _ButtonOnOpensettingEvent = CustomEvent<_ButtonOnOpensettingDetail>;

/**
 * 在打开授权设置页并关闭后回调
 *
 * Open-type="openSetting" 时有效
 */
type _ButtonOnOpensetting = (event: _ButtonOnOpensettingEvent) => void;

type _ButtonOnLaunchappEvent = BaseEvent;

/**
 * 从小程序成功打开 APP 回调
 *
 * Open-type="launchApp" 时有效
 */
type _ButtonOnLaunchapp = (event: _ButtonOnLaunchappEvent) => void;

type _ButtonOnChooseavatarEvent = BaseEvent;

/**
 * 获取用户头像回调
 *
 * Open-type="chooseAvatar" 时有效
 */
type _ButtonOnChooseavatar = (event: _ButtonOnChooseavatarEvent) => void;

type _ButtonOnAddgroupappEvent = BaseEvent;

/**
 * 添加群应用回调
 *
 * Open-type="addGroupApp" 时有效
 */
type _ButtonOnAddgroupapp = (event: _ButtonOnAddgroupappEvent) => void;

type _ButtonOnChooseaddressEvent = BaseEvent;

/**
 * 用户编辑并选择收货地址回调
 *
 * Open-type="chooseAddress" 时有效
 */
type _ButtonOnChooseaddress = (event: _ButtonOnChooseaddressEvent) => void;

type _ButtonOnChooseinvoicetitleEvent = BaseEvent;

/**
 * 用户选择发票抬头回调
 *
 * Open-type="chooseInvoiceTitle" 时有效
 */
type _ButtonOnChooseinvoicetitle = (
  event: _ButtonOnChooseinvoicetitleEvent,
) => void;

type _ButtonOnSubscribeEvent = BaseEvent;

/**
 * 订阅消息授权回调
 *
 * Open-type="subscribe" 时有效
 */
type _ButtonOnSubscribe = (event: _ButtonOnSubscribeEvent) => void;

type _ButtonOnLoginEvent = BaseEvent;

/**
 * 登录回调
 *
 * Open-type="login" 时有效
 */
type _ButtonOnLogin = (event: _ButtonOnLoginEvent) => void;

type _ButtonOnAgreeprivacyauthorizationEvent = BaseEvent;

/**
 * 用户同意隐私协议按钮回调
 *
 * Open-type="agreePrivacyAuthorization" 时有效
 */
type _ButtonOnAgreeprivacyauthorization = (
  event: _ButtonOnAgreeprivacyauthorizationEvent,
) => void;

type _ButtonOnGetuserinfoEvent = BaseEvent;

/**
 * 获取用户信息回调
 *
 * Open-type="getUserInfo" 时有效
 */
type _ButtonOnGetuserinfo = (event: _ButtonOnGetuserinfoEvent) => void;

type _ButtonOnContactEvent = BaseEvent;

/**
 * 客服消息回调
 *
 * Open-type="contact" 时有效
 */
type _ButtonOnContact = (event: _ButtonOnContactEvent) => void;

type _ButtonOnImEvent = BaseEvent;

/**
 * 跳转抖音 IM 客服回调
 *
 * Open-type="im" 时有效
 */
type _ButtonOnIm = (event: _ButtonOnImEvent) => void;

/** 按钮属性 */
type _ButtonProps = CommonProps &
  Partial<{
    /**
     * 按钮的大小
     *
     * Default 默认
     *
     * Mini 小
     *
     * 默认为 default
     */
    size: _ButtonSize;
    /**
     * 按钮的样式类型
     *
     * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
     * 小程序为浅蓝色
     *
     * Default 白色
     *
     * Warn 红色
     *
     * 默认为 default
     */
    type: _ButtonType;
    /**
     * 按钮是否镂空，背景色透明
     *
     * 默认为 false
     */
    plain: boolean;
    /** 是否禁用 */
    disabled: boolean;
    /**
     * 是否带 loading 图标
     *
     * 默认为 false
     */
    loading: boolean;
    /**
     * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
     *
     * Submit 点击会触发 form 的 submit 事件
     *
     * Reset 点击会触发 form 的 reset 事件
     *
     * 没有默认值
     */
    formType: _ButtonFormType;
    /**
     * 开放能力
     *
     * Feedback 打开”意见反馈”页面，用户可提交反馈内容并上传日志
     *
     * Share 触发用户转发
     *
     * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
     *
     * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
     *
     * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
     *
     * GetRealtimePhoneNumber 手机号实时验证，可以从 `@getrealtimephonenumber` 回调中获取到用户信息
     *
     * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
     *
     * OpenSetting 打开授权设置页
     *
     * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
     *
     * GetAuthorize 支持小程序授权
     *
     * Lifestyle 关注生活号
     *
     * ContactShare 分享到通讯录好友
     *
     * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时
     * manifest.json 中必须配置 groupIdList
     *
     * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
     *
     * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时
     * manifest.json 中必须配置 publicIdList
     *
     * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
     *
     * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
     *
     * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
     *
     * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
     *
     * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
     *
     * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
     *
     * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
     *
     * Login 登录，可以从 `@login` 回调中确认是否登录成功
     *
     * Subscribe 订阅类模板消息，需要用户授权才可发送
     *
     * Favorite 触发用户收藏
     *
     * WatchLater 触发用户稍后再看
     *
     * OpenProfile 触发打开用户主页
     *
     * UploadDouyinVideo 发布抖音视频
     *
     * Im 跳转抖音 IM 客服
     */
    openType: _ButtonOpenType;
    /**
     * 当手机号快速验证或手机号实时验证额度用尽时，
     * 是否对用户展示“申请获取你的手机号，但该功能
     * 使用次数已达当前小程序上限，暂时无法使用”的
     * 提示。
     * @default true
     */
    phoneNumberNoQuotaToast?: boolean;
    /**
     * 指定按下去的样式类
     *
     * 当 hover-class="none" 时，没有点击态效果
     *
     * 默认为 button-hover
     */
    hoverClass: string;
    /**
     * 按住后多久出现点击态
     *
     * 单位为 ms
     *
     * 默认为 20
     */
    hoverStartTime: number;
    /**
     * 手指松开后点击态保留时间
     *
     * 单位为 ms
     *
     * 默认为 70
     */
    hoverStayTime: number;
    /**
     * 打开 APP 时，向 APP 传递的参数
     *
     * Open-type="launchApp" 时有效
     */
    appParameter: string;
    /**
     * 指定是否阻止本节点的祖先节点出现点击态
     *
     * 默认为 false
     */
    hoverStopPropagation: boolean;
    /**
     * 返回用户信息的语言
     *
     * Zh_CN 简体中文
     *
     * Zh_TW 繁体中文
     *
     * En 英文
     *
     * 默认为 en
     */
    lang: _ButtonLang;
    /**
     * 会话来源
     *
     * Open-type="contact" 时有效
     */
    sessionFrom: string;
    /**
     * 会话内消息卡片标题
     *
     * Open-type="contact" 时有效
     *
     * 默认为当前标题
     */
    sendMessageTitle: string;
    /**
     * 会话内消息卡片点击跳转小程序路径
     *
     * Open-type="contact" 时有效
     *
     * 默认为当前分享路径
     */
    sendMessagePath: string;
    /**
     * 会话内消息卡片图片
     *
     * Open-type="contact" 时有效
     *
     * 默认为截图
     */
    sendMessageImg: string;
    /**
     * 是否显示会话内消息卡片
     *
     * 设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
     *
     * Open-type="contact" 时有效
     *
     * 默认为 false
     */
    showMessageCard: boolean;
    /**
     * 打开群资料卡时，传递的群号
     *
     * Open-type="openGroupProfile" 时有效
     */
    groupId: string;
    /**
     * 打开频道页面时，传递的频道号
     *
     * Open-type="openGuildProfile" 时有效
     */
    guildId: string;
    /**
     * 打开公众号资料卡时，传递的号码
     *
     * Open-type="openPublicProfile" 时有效
     */
    publicId: string;
    /**
     * 卡片业态类型，用于一次性订阅消息
     *
     * Open-type="liveActivity" 时有效
     */
    activityType: _ButtonActivityType;
    /**
     * 获取用户手机号时回调
     *
     * Open-type="getPhoneNumber" 时有效
     */
    onGetphonenumber: _ButtonOnGetphonenumber;
    /**
     * 手机号实时验证回调
     *
     * Open-type="getRealtimePhoneNumber" 时有效
     */
    onGetrealtimephonenumber: _ButtonOnGetrealtimephonenumber;
    /** 使用开放能力发生错误时回调 */
    onError: _ButtonOnError;
    /**
     * 在打开授权设置页并关闭后回调
     *
     * Open-type="openSetting" 时有效
     */
    onOpensetting: _ButtonOnOpensetting;
    /**
     * 从小程序成功打开 APP 回调
     *
     * Open-type="launchApp" 时有效
     */
    onLaunchapp: _ButtonOnLaunchapp;
    /**
     * 获取用户头像回调
     *
     * Open-type="chooseAvatar" 时有效
     */
    onChooseavatar: _ButtonOnChooseavatar;
    /**
     * 获取一次性订阅消息的动态令牌回调
     *
     * Open-type="liveActivity" 时有效
     */
    onCreateliveactivity: _ButtonOnCreateliveactivity;
    /**
     * 添加群应用回调
     *
     * Open-type="addGroupApp" 时有效
     */
    onAddgroupapp: _ButtonOnAddgroupapp;
    /**
     * 用户编辑并选择收货地址回调
     *
     * Open-type="chooseAddress" 时有效
     */
    onChooseaddress: _ButtonOnChooseaddress;
    /**
     * 用户选择发票抬头回调
     *
     * Open-type="chooseInvoiceTitle" 时有效
     */
    onChooseinvoicetitle: _ButtonOnChooseinvoicetitle;
    /**
     * 订阅消息授权回调
     *
     * Open-type="subscribe" 时有效
     */
    onSubscribe: _ButtonOnSubscribe;
    /**
     * 登录回调
     *
     * Open-type="login" 时有效
     */
    onLogin: _ButtonOnLogin;
    /**
     * 用户同意隐私协议回调
     *
     * Open-type="agreePrivacyAuthorization" 时有效
     */
    onAgreeprivacyauthorization: _ButtonOnAgreeprivacyauthorization;
    /**
     * 获取用户信息回调
     *
     * Open-type="getUserInfo" 时有效
     */
    onGetuserinfo: _ButtonOnGetuserinfo;
    /**
     * 客服消息回调
     *
     * Open-type="contact" 时有效
     */
    onContact: _ButtonOnContact;
    /**
     * 跳转抖音 IM 客服回调
     *
     * Open-type="im" 时有效
     */
    onIm: _ButtonOnIm;
  }>;

/** 按钮 */
type _Button = DefineComponent<_ButtonProps>;

/** 按钮实例 */
type _ButtonInstance = InstanceType<_Button>;

export type {
  _Button as Button,
  _ButtonActivityType as ButtonActivityType,
  _ButtonFormType as ButtonFormType,
  _ButtonInstance as ButtonInstance,
  _ButtonLang as ButtonLang,
  _ButtonOnAddgroupapp as ButtonOnAddgroupapp,
  _ButtonOnAddgroupappEvent as ButtonOnAddgroupappEvent,
  _ButtonOnAgreeprivacyauthorization as ButtonOnAgreeprivacyauthorization,
  _ButtonOnAgreeprivacyauthorizationEvent as ButtonOnAgreeprivacyauthorizationEvent,
  _ButtonOnChooseaddress as ButtonOnChooseaddress,
  _ButtonOnChooseaddressEvent as ButtonOnChooseaddressEvent,
  _ButtonOnChooseavatar as ButtonOnChooseavatar,
  _ButtonOnChooseavatarEvent as ButtonOnChooseavatarEvent,
  _ButtonOnChooseinvoicetitle as ButtonOnChooseinvoicetitle,
  _ButtonOnChooseinvoicetitleEvent as ButtonOnChooseinvoicetitleEvent,
  _ButtonOnContact as ButtonOnContact,
  _ButtonOnContactEvent as ButtonOnContactEvent,
  _ButtonOnCreateliveactivity as ButtonOnCreateliveactivity,
  _ButtonOnCreateliveactivityDetail as ButtonOnCreateliveactivityDetail,
  _ButtonOnCreateliveactivityEvent as ButtonOnCreateliveactivityEvent,
  _ButtonOnError as ButtonOnError,
  _ButtonOnErrorEvent as ButtonOnErrorEvent,
  _ButtonOnGetphonenumber as ButtonOnGetphonenumber,
  _ButtonOnGetphonenumberDetail as ButtonOnGetphonenumberDetail,
  _ButtonOnGetphonenumberEvent as ButtonOnGetphonenumberEvent,
  _ButtonOnGetrealtimephonenumber as ButtonOnGetrealtimephonenumber,
  _ButtonOnGetrealtimephonenumberDetail as ButtonOnGetrealtimephonenumberDetail,
  _ButtonOnGetrealtimephonenumberEvent as ButtonOnGetrealtimephonenumberEvent,
  _ButtonOnGetuserinfo as ButtonOnGetuserinfo,
  _ButtonOnGetuserinfoEvent as ButtonOnGetuserinfoEvent,
  _ButtonOnIm as ButtonOnIm,
  _ButtonOnImEvent as ButtonOnImEvent,
  _ButtonOnLaunchapp as ButtonOnLaunchapp,
  _ButtonOnLaunchappEvent as ButtonOnLaunchappEvent,
  _ButtonOnLogin as ButtonOnLogin,
  _ButtonOnLoginEvent as ButtonOnLoginEvent,
  _ButtonOnOpensetting as ButtonOnOpensetting,
  _ButtonOnOpensettingDetail as ButtonOnOpensettingDetail,
  _ButtonOnOpensettingEvent as ButtonOnOpensettingEvent,
  _ButtonOnSubscribe as ButtonOnSubscribe,
  _ButtonOnSubscribeEvent as ButtonOnSubscribeEvent,
  _ButtonOpenType as ButtonOpenType,
  _ButtonProps as ButtonProps,
  _ButtonSize as ButtonSize,
  _ButtonType as ButtonType,
};

declare global {
  namespace UniHelper {
    /**
     * 按钮的大小
     *
     * Default 默认
     *
     * Mini 小
     */
    export type ButtonSize = _ButtonSize;
    /**
     * 按钮的样式类型，如想在多端统一颜色，请用 default 然后自行写样式
     *
     * Primary 微信小程序、360 小程序为绿色，APP、H5、百度小程序、支付宝小程序、飞书小程序、快应用为蓝色，字节跳动小程序为红色，QQ
     * 小程序为浅蓝色
     *
     * Default 白色
     *
     * Warn 红色
     */
    export type ButtonType = _ButtonType;
    /**
     * 用于 form 组件，点击分别会触发 form 组件的 submit / reset 事件
     *
     * Submit 点击会触发 form 的 submit 事件
     *
     * Reset 点击会触发 form 的 reset 事件
     */
    export type ButtonFormType = _ButtonFormType;

    /**
     * 开放能力
     *
     * Feedback 打开”意见反馈”页面，用户可提交反馈内容并上传日志
     *
     * Share 触发用户转发
     *
     * GetUserInfo 获取用户信息，可以从 `@getuserinfo` 回调中获取到用户信息
     *
     * Contact 打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 `@contact` 回调中获得具体信息
     *
     * GetPhoneNumber 获取用户手机号，可以从 `@getphonenumber` 回调中获取到用户信息
     *
     * GetRealtimePhoneNumber 手机号实时验证，可以从 `@getrealtimephonenumber` 回调中获取到用户信息
     *
     * LaunchApp 小程序中打开APP，可以通过 `app-parameter` 属性设定向 APP 传的参数
     *
     * OpenSetting 打开授权设置页
     *
     * ChooseAvatar 获取用户头像，可以从 `@chooseavatar` 回调中获取到头像信息
     *
     * GetAuthorize 支持小程序授权
     *
     * Lifestyle 关注生活号
     *
     * ContactShare 分享到通讯录好友
     *
     * OpenGroupProfile 呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时
     * manifest.json 中必须配置 groupIdList
     *
     * OpenGuildProfile 呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID
     *
     * OpenPublicProfile 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时
     * manifest.json 中必须配置 publicIdList
     *
     * ShareMessageToFriend 在自定义开放数据域组件中，向指定好友发起分享
     *
     * AddFriend 添加好友，对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权
     *
     * AddColorSign 添加彩签，点击后添加状态有用户提示，无回调
     *
     * AddGroupApp 添加群应用（只有管理员或群主有权操作），添加后给 button 绑定 `@addgroupapp` 事件接收回调数据
     *
     * AddToFavorites 收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法
     *
     * ChooseAddress 选择用户收货地址，可以从 `@chooseaddress` 回调中获取到用户选择的地址信息
     *
     * ChooseInvoiceTitle 选择用户发票抬头，可以从 `@chooseinvoicetitle` 回调中获取到用户选择发票抬头信息
     *
     * Login 登录，可以从 `@login` 回调中确认是否登录成功
     *
     * Subscribe 订阅类模板消息，需要用户授权才可发送
     *
     * Favorite 触发用户收藏
     *
     * WatchLater 触发用户稍后再看
     *
     * OpenProfile 触发打开用户主页
     *
     * AgreePrivacyAuthorization 用户同意隐私协议
     *
     * UploadDouyinVideo 发布抖音视频
     *
     * Im 跳转抖音 IM 客服
     */
    export type ButtonOpenType = _ButtonOpenType;
    /**
     * 返回用户信息的语言
     *
     * Zh_CN 简体中文
     *
     * Zh_TW 繁体中文
     *
     * En 英文
     */
    export type ButtonLang = _ButtonLang;
    /**
     * 卡片业态类型，用于一次性订阅消息
     *
     * 1001 打车服务
     *
     * 1003 同城配送服务
     *
     * 1004 取餐等候服务
     *
     * 1005 餐厅排队服务
     *
     * 2001 购物（实体物流）服务
     *
     * 2002 购物（自提）服务
     *
     * 2003 购物（虚拟发货）服务
     *
     * 2004 快递寄送服务
     *
     * 2005 保险购买服务
     *
     * 2006 购物&餐饮（同城配送）服务
     *
     * 2007 购物&餐饮&本地生活（等候领取）服务
     *
     * 2008 酒店预订服务
     *
     * 2009 机票服务
     *
     * 2010 火车票、汽车票、船票服务
     *
     * 2011 景区门票服务
     */
    export type ButtonActivityType = _ButtonActivityType;
    export interface ButtonOnGetphonenumberDetail
      extends _ButtonOnGetphonenumberDetail {}
    export type ButtonOnGetphonenumberEvent = _ButtonOnGetphonenumberEvent;
    /**
     * 获取用户手机号时回调
     *
     * Open-type="getPhoneNumber" 时有效
     */
    export interface ButtonOnGetphonenumber extends _ButtonOnGetphonenumber {}
    export interface ButtonOnGetrealtimephonenumberDetail
      extends _ButtonOnGetrealtimephonenumberDetail {}
    export type ButtonOnGetrealtimephonenumberEvent =
      _ButtonOnGetrealtimephonenumberEvent;
    /**
     * 手机号实时验证回调
     *
     * Open-type="getRealtimePhoneNumber" 时有效
     */
    export interface ButtonOnGetrealtimephonenumber
      extends _ButtonOnGetrealtimephonenumber {}
    export type ButtonOnErrorEvent = _ButtonOnErrorEvent;
    /** 使用开放能力发生错误时回调 */
    export interface ButtonOnError extends _ButtonOnError {}
    export interface ButtonOnCreateliveactivityDetail
      extends _ButtonOnCreateliveactivityDetail {}
    export type ButtonOnCreateliveactivityEvent =
      _ButtonOnCreateliveactivityEvent;
    /**
     * 获取一次性订阅消息的动态令牌回调
     *
     * Open-type="liveActivity" 时有效
     */
    export interface ButtonOnCreateliveactivity
      extends _ButtonOnCreateliveactivity {}
    export interface ButtonOnOpensettingDetail
      extends _ButtonOnOpensettingDetail {}
    export type ButtonOnOpensettingEvent = _ButtonOnOpensettingEvent;
    /**
     * 在打开授权设置页并关闭后回调
     *
     * Open-type="openSetting" 时有效
     */
    export interface ButtonOnOpensetting extends _ButtonOnOpensetting {}
    export type ButtonOnLaunchappEvent = _ButtonOnLaunchappEvent;
    /**
     * 从小程序成功打开 APP 回调
     *
     * Open-type="launchApp" 时有效
     */
    export interface ButtonOnLaunchapp extends _ButtonOnLaunchapp {}
    export type ButtonOnChooseavatarEvent = _ButtonOnChooseavatarEvent;
    /**
     * 获取用户头像回调
     *
     * Open-type="chooseAvatar" 时有效
     */
    export interface ButtonOnChooseavatar extends _ButtonOnChooseavatar {}
    export type ButtonOnAddgroupappEvent = _ButtonOnAddgroupappEvent;
    /**
     * 添加群应用回调
     *
     * Open-type="addGroupApp" 时有效
     */
    export interface ButtonOnAddgroupapp extends _ButtonOnAddgroupapp {}
    export type ButtonOnChooseaddressEvent = _ButtonOnChooseaddressEvent;
    /**
     * 用户编辑并选择收货地址回调
     *
     * Open-type="chooseAddress" 时有效
     */
    export interface ButtonOnChooseaddress extends _ButtonOnChooseaddress {}
    export type ButtonOnChooseinvoicetitleEvent =
      _ButtonOnChooseinvoicetitleEvent;
    /**
     * 用户选择发票抬头回调
     *
     * Open-type="chooseInvoiceTitle" 时有效
     */
    export interface ButtonOnChooseinvoicetitle
      extends _ButtonOnChooseinvoicetitle {}
    export type ButtonOnSubscribeEvent = _ButtonOnSubscribeEvent;
    /**
     * 订阅消息授权回调
     *
     * Open-type="subscribe" 时有效
     */
    export interface ButtonOnSubscribe extends _ButtonOnSubscribe {}
    export type ButtonOnLoginEvent = _ButtonOnLoginEvent;
    /**
     * 登录回调
     *
     * Open-type="login" 时有效
     */
    export interface ButtonOnLogin extends _ButtonOnLogin {}
    export type ButtonOnAgreeprivacyauthorizationEvent =
      _ButtonOnAgreeprivacyauthorizationEvent;
    /**
     * 用户同意隐私协议回调
     *
     * Open-type="agreePrivacyAuthorization" 时有效
     */
    export interface ButtonOnAgreeprivacyauthorization
      extends _ButtonOnAgreeprivacyauthorization {}
    export type ButtonOnGetuserinfoEvent = _ButtonOnGetuserinfoEvent;
    /**
     * 获取用户信息回调
     *
     * Open-type="getUserInfo" 时有效
     */
    export interface ButtonOnGetuserinfo extends _ButtonOnGetuserinfo {}
    export type ButtonOnContactEvent = _ButtonOnContactEvent;
    /**
     * 客服消息回调
     *
     * Open-type="contact" 时有效
     */
    export interface ButtonOnContact extends _ButtonOnContact {}
    export type ButtonOnImEvent = _ButtonOnImEvent;
    /**
     * 跳转抖音 IM 客服回调
     *
     * Open-type="im" 时有效
     */
    export interface ButtonOnIm extends _ButtonOnIm {}
    /** 按钮属性 */
    export type ButtonProps = _ButtonProps;
    /** 按钮 */
    export type Button = _Button;
    /** 按钮实例 */
    export type ButtonInstance = _ButtonInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 按钮
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/button.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    button: _Button;
  }
}

// 3.0 <= Vue < 3.3
declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 按钮
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/button.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      button: _ButtonProps;
    }
  }
}

// 3.3 <= Vue < 3.4
// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module "vue/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      /** 按钮
       * ***
       * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/button.html)
       * |
       * [Netlify 使用说明](https://uni-typed.netlify.app/)
       * |
       * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
       */
      button: _ButtonProps;
    }
  }
}

// 3.4 <= Vue
declare module "vue" {
  interface IntrinsicElementAttributes {
    /** 按钮
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/button.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    button: _ButtonProps;
  }
}
