import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";
import type { BaseEvent, CustomEvent } from "../events";

type _EditorOnReadyEvent = BaseEvent;

/** 编辑器初始化完成时触发 */
type _EditorOnReady = (event: _EditorOnReadyEvent) => void;

interface _EditorOnFocusDetail {
  html: string;
  text: string;
  delta: Record<string, any>;
}

type _EditorOnFocusEvent = CustomEvent<_EditorOnFocusDetail>;

/** 编辑器聚焦时触发 */
type _EditorOnFocus = (event: _EditorOnFocusEvent) => void;

interface _EditorOnBlurDetail {
  html: string;
  text: string;
  delta: Record<string, any>;
}

type _EditorOnBlurEvent = CustomEvent<_EditorOnBlurDetail>;

/** 编辑器失焦时触发 */
type _EditorOnBlur = (event: _EditorOnBlurEvent) => void;

interface _EditorOnInputDetail {
  html: string;
  text: string;
  delta: Record<string, any>;
}

type _EditorOnInputEvent = CustomEvent<_EditorOnInputDetail>;

/** 编辑器内容改变时触发 */
type _EditorOnInput = (event: _EditorOnInputEvent) => void;

type _EditorOnStatuschangeDetail = Record<string, any>;

type _EditorOnStatuschangeEvent = CustomEvent<_EditorOnStatuschangeDetail>;

/** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
type _EditorOnStatuschange = (event: _EditorOnStatuschangeEvent) => void;

/** 编辑器属性 */
type _EditorProps = CommonProps &
  Partial<{
    /**
     * 是否只读
     *
     * 默认为 false
     */
    readOnly: boolean;
    /** 提示信息 */
    placeholder: string;
    /**
     * 点击图片时是否显示图片大小控件
     *
     * 默认为 false
     */
    showImgSize: boolean;
    /**
     * 点击图片时是否显示工具栏控件
     *
     * 默认为 false
     */
    showImgToolbar: boolean;
    /**
     * 点击图片时是否显示修改尺寸控件
     *
     * 默认为 false
     */
    showImgResize: boolean;
    /** 编辑器初始化完成时触发 */
    onReady: _EditorOnReady;
    /** 编辑器聚焦时触发 */
    onFocus: _EditorOnFocus;
    /** 编辑器失焦时触发 */
    onBlur: _EditorOnBlur;
    /** 编辑器内容改变时触发 */
    onInput: _EditorOnInput;
    /** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
    onStatuschange: _EditorOnStatuschange;
  }>;

/**
 * 富文本编辑器，可以对图片、文字进行编辑和混排
 *
 * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
 *
 * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入
 *
 * 图片控件仅初始化时设置有效
 */
type _Editor = DefineComponent<_EditorProps>;

/** 富文本编辑器实例 */
type _EditorInstance = InstanceType<_Editor>;

export type {
  _Editor as Editor,
  _EditorInstance as EditorInstance,
  _EditorOnBlur as EditorOnBlur,
  _EditorOnBlurDetail as EditorOnBlurDetail,
  _EditorOnBlurEvent as EditorOnBlurEvent,
  _EditorOnFocus as EditorOnFocus,
  _EditorOnFocusDetail as EditorOnFocusDetail,
  _EditorOnFocusEvent as EditorOnFocusEvent,
  _EditorOnInput as EditorOnInput,
  _EditorOnInputDetail as EditorOnInputDetail,
  _EditorOnInputEvent as EditorOnInputEvent,
  _EditorOnReady as EditorOnReady,
  _EditorOnReadyEvent as EditorOnReadyEvent,
  _EditorOnStatuschange as EditorOnStatuschange,
  _EditorOnStatuschangeDetail as EditorOnStatuschangeDetail,
  _EditorOnStatuschangeEvent as EditorOnStatuschangeEvent,
  _EditorProps as EditorProps,
};

declare global {
  namespace UniHelper {
    export type EditorOnReadyEvent = _EditorOnReadyEvent;
    /** 编辑器初始化完成时触发 */
    export interface EditorOnReady extends _EditorOnReady {}
    export interface EditorOnFocusDetail extends _EditorOnFocusDetail {}
    export type EditorOnFocusEvent = _EditorOnFocusEvent;
    /** 编辑器聚焦时触发 */
    export interface EditorOnFocus extends _EditorOnFocus {}
    export interface EditorOnBlurDetail extends _EditorOnBlurDetail {}
    export type EditorOnBlurEvent = _EditorOnBlurEvent;
    /** 编辑器失焦时触发 */
    export interface EditorOnBlur extends _EditorOnBlur {}
    export interface EditorOnInputDetail extends _EditorOnInputDetail {}
    export type EditorOnInputEvent = _EditorOnInputEvent;
    /** 编辑器内容改变时触发 */
    export interface EditorOnInput extends _EditorOnInput {}
    export type EditorOnStatuschangeDetail = _EditorOnStatuschangeDetail;
    export type EditorOnStatuschangeEvent = _EditorOnStatuschangeEvent;
    /** 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 */
    export interface EditorOnStatuschange extends _EditorOnStatuschange {}
    /** 编辑器属性 */
    export type EditorProps = _EditorProps;
    /**
     * 富文本编辑器，可以对图片、文字进行编辑和混排
     *
     * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     *
     * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta
     * 进行插入
     *
     * 图片控件仅初始化时设置有效
     */
    export type Editor = _Editor;
    /** 富文本编辑器实例 */
    export type EditorInstance = _EditorInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 富文本编辑器，可以对图片、文字进行编辑和混排
     *
     * 编辑器导出内容支持带标签的 html 和纯文本的 text，编辑器内部采用 delta 格式进行存储
     *
     * 通过 setContents 接口设置内容时，解析插入的 html 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta
     * 进行插入
     *
     * 图片控件仅初始化时设置有效
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/editor.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    editor: _Editor;
  }
}
