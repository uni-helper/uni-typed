import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

/**
 * 副标题文字超出显示区域时处理方式
 *
 * Clip 超出显示区域时内容裁剪
 *
 * Ellipsis 超出显示区域时尾部显示省略标记
 */
type _NavigationBarSubtitleOverflow = "clip" | "ellipsis";

/**
 * 标题对齐方式
 *
 * Center 居中对齐
 *
 * Left 左对齐
 *
 * Auto 自动
 */
type _NavigationBarTitleAlign = "center" | "left" | "auto";

/**
 * 背景图片重复方式
 *
 * BackgroundImage 设置为图片路径时有效
 *
 * Repeat 背景图片在垂直方向和水平方向平铺
 *
 * Repeat-x 背景图片在水平方向平铺，垂直方向拉伸
 *
 * Repeat-y 背景图片在垂直方向平铺，水平方向拉伸
 *
 * No-repeat 背景图片在垂直方向和水平方向都拉伸
 */
type _NavigationBarBackgroundRepeat =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "no-repeat";

/**
 * 高斯模糊标题栏的风格
 *
 * Dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
 *
 * Extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
 *
 * Light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
 *
 * None 无模糊效果
 */
type _NavigationBarBlurEffect = "none" | "dark" | "extralight" | "light";

/** 导航条前景颜色值，包括按钮、标题、状态栏的颜色 */
type _NavigationFrontColor = "#ffffff" | "#000000";

/** 改变导航栏颜色时的动画方式 */
type _NavigationBarColorAnimationTimingFunc =
  | "linear"
  | "easeIn"
  | "easeOut"
  | "easeInOut";

/** 页面导航条配置节点属性 */
type _NavigationBarProps = CommonProps &
  Partial<{
    /** 导航条标题 */
    title: string;
    /**
     * 标题图标
     *
     * 仅支持本地文件路径、相对路径
     *
     * 固定宽高 34px
     *
     * 设置后标题将居左显示
     */
    titleIcon: string;
    /**
     * 标题图标圆角
     *
     * 单位为 px
     */
    titleIconRadius: string;
    /**
     * 副标题文字内容
     *
     * 设置副标题后将显示两行标题，副标题在主标题下方
     *
     * 设置副标题后将居左显示
     */
    subtitleText: string;
    /**
     * 副标题文字字体大小
     *
     * 单位为 px
     *
     * 默认为 12px
     */
    subtitleSize: string;
    /**
     * 副标题文字颜色
     *
     * 默认为主标题文字颜色
     */
    subtitleColor: string;
    /**
     * 副标题文字超出显示区域时处理方式
     *
     * Clip 超出显示区域时内容裁剪
     *
     * Ellipsis 超出显示区域时尾部显示省略标记
     *
     * 默认为 ellipsis
     */
    subtitleOverflow: _NavigationBarSubtitleOverflow;
    /**
     * 标题对齐方式
     *
     * Center 居中对齐
     *
     * Left 左对齐
     *
     * Auto 自动
     *
     * 默认 Android left，iOS center
     */
    titleAlign: _NavigationBarTitleAlign;
    /**
     * 背景图片
     *
     * 支持本地文件路径、相对路径、渐变色
     */
    backgroundImage: string;
    /**
     * 背景图片重复方式
     *
     * BackgroundImage 设置为图片路径时有效
     *
     * Repeat 背景图片在垂直方向和水平方向平铺
     *
     * Repeat-x 背景图片在水平方向平铺，垂直方向拉伸
     *
     * Repeat-y 背景图片在垂直方向平铺，水平方向拉伸
     *
     * No-repeat 背景图片在垂直方向和水平方向都拉伸
     *
     * 默认为 no-repeat
     */
    backgroundRepeat: _NavigationBarBackgroundRepeat;
    /**
     * 高斯模糊标题栏的风格
     *
     * Dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
     *
     * Extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
     *
     * Light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
     *
     * None 无模糊效果
     *
     * 默认为 none
     */
    blurEffect: _NavigationBarBlurEffect;
    /**
     * 是否在导航条显示 loading 加载提示
     *
     * 默认为 false
     */
    loading: boolean;
    /** 导航条前景颜色值，包括按钮、标题、状态栏的颜色 */
    frontColor: _NavigationFrontColor;
    /** 导航条背景颜色值 */
    backgroundColor: string;
    /**
     * 改变导航栏颜色时的动画时长
     *
     * 默认为 0
     */
    colorAnimationDuration: number;
    /** 改变导航栏颜色时的动画方式 */
    colorAnimationTimingFunc: _NavigationBarColorAnimationTimingFunc;
  }>;

/**
 * 页面导航条配置节点，用于指定导航栏的一些属性
 *
 * 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
 */
type _NavigationBar = DefineComponent<_NavigationBarProps>;

/** 页面导航条配置节点实例 */
type _NavigationBarInstance = InstanceType<_NavigationBar>;

export type {
  _NavigationBarSubtitleOverflow as NavigationBarSubtitleOverflow,
  _NavigationBarTitleAlign as NavigationBarTitleAlign,
  _NavigationBarBackgroundRepeat as NavigationBarBackgroundRepeat,
  _NavigationBarBlurEffect as NavigationBarBlurEffect,
  _NavigationFrontColor as NavigationFrontColor,
  _NavigationBarColorAnimationTimingFunc as NavigationBarColorAnimationTimingFunc,
  _NavigationBarProps as NavigationBarProps,
  _NavigationBar as NavigationBar,
  _NavigationBarInstance as NavigationBarInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 副标题文字超出显示区域时处理方式
     *
     * Clip 超出显示区域时内容裁剪
     *
     * Ellipsis 超出显示区域时尾部显示省略标记
     */
    export type NavigationBarSubtitleOverflow = _NavigationBarSubtitleOverflow;
    /**
     * 标题对齐方式
     *
     * Center 居中对齐
     *
     * Left 左对齐
     *
     * Auto 自动
     */
    export type NavigationBarTitleAlign = _NavigationBarTitleAlign;
    /**
     * 背景图片重复方式
     *
     * BackgroundImage 设置为图片路径时有效
     *
     * Repeat 背景图片在垂直方向和水平方向平铺
     *
     * Repeat-x 背景图片在水平方向平铺，垂直方向拉伸
     *
     * Repeat-y 背景图片在垂直方向平铺，水平方向拉伸
     *
     * No-repeat 背景图片在垂直方向和水平方向都拉伸
     */
    export type NavigationBarBackgroundRepeat = _NavigationBarBackgroundRepeat;
    /**
     * 高斯模糊标题栏的风格
     *
     * Dark 暗风格模糊，对应 iOS 原生 UIBlurEffectStyleDark 效果
     *
     * Extralight 高亮风格模糊，对应 iOS 原生 UIBlurEffectStyleExtraLight 效果
     *
     * Light 亮风格模糊，对应 iOS 原生 UIBlurEffectStyleLight 效果
     *
     * None 无模糊效果
     */
    export type NavigationBarBlurEffect = _NavigationBarBlurEffect;
    /** 导航条前景颜色值，包括按钮、标题、状态栏的颜色 */
    export type NavigationFrontColor = _NavigationFrontColor;
    /** 改变导航栏颜色时的动画方式 */
    export type NavigationBarColorAnimationTimingFunc =
      _NavigationBarColorAnimationTimingFunc;
    /** 页面导航条配置节点属性 */
    export type NavigationBarProps = _NavigationBarProps;
    /**
     * 页面导航条配置节点，用于指定导航栏的一些属性
     *
     * 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
     */
    export type NavigationBar = _NavigationBar;
    /** 页面导航条配置节点实例 */
    export type NavigationBarInstance = _NavigationBarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 页面导航条配置节点，用于指定导航栏的一些属性
     *
     * 只能是 page-meta 组件内的第一个节点，需要配合 page-meta 一同使用
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/navigation-bar.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    NavigationBar: _NavigationBar;
  }
}
