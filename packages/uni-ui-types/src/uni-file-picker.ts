import type { Component } from "@uni-helper/uni-app-types";

interface _UniFilePickerValue {
  name: string;
  extname: string;
  url: string;
}

/**
 * 选择文件后的文件列表样式
 *
 * list 列表
 *
 * grid 网格
 */
type _UniFilePickerMode = "list" | "grid";

/**
 * 选择文件类型
 *
 * image 图片
 *
 * video 视频
 *
 * all 全部
 */
type _UniFilePickerFileMediatype = "image" | "video" | "all";

/**
 * 文件类型
 *
 * image 图片
 *
 * video 视频
 */
type _UniFilePickerFileType = Exclude<_UniFilePickerFileMediatype, "all">;

/**
 * 样式
 *
 * mode="list" 时有效
 */
interface _UniFilePickerListStyles {
  /** 边框样式 */
  borderStyle?: {
    /**
     * 颜色
     *
     * 默认为 #eee
     */
    color?: string;
    /**
     * 宽度
     *
     * 默认为 1px
     */
    width?: string;
    /**
     * 样式
     *
     * 默认为 solid
     */
    style?: string;
    /**
     * 边框圆角
     *
     * 不支持百分比
     *
     * 默认为 5px
     */
    radius?: string;
  };
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  border?: boolean;
  /**
   * 是否显示分隔线
   *
   * 默认为 true
   */
  dividline?: boolean;
}

/**
 * 样式
 *
 * mode="grid" 时有效
 */
interface _UniFilePickerImageStyles {
  /**
   * 高度
   *
   * 默认为 auto
   */
  height?: number | string;
  /**
   * 宽度
   *
   * 默认为 auto
   */
  width?: number | string;
  /** 边框样式 */
  border?: {
    /**
     * 颜色
     *
     * 默认为 #eee
     */
    color?: string;
    /**
     * 宽度
     *
     * 默认为 1px
     */
    width?: string;
    /**
     * 样式
     *
     * 默认为 solid
     */
    style?: string;
    /**
     * 边框圆角
     *
     * 支持百分比
     *
     * 默认为 3px
     */
    radius?: string;
  };
}

/**
 * original 原图
 *
 * compressed 压缩图
 */
type _UniFilePickerSizeTypeItem = "original" | "compressed";

/**
 * 尺寸类型
 *
 * original 原图
 *
 * compressed 压缩图
 */
type _UniFilePickerSizeType = _UniFilePickerSizeTypeItem[];

/**
 * album 从相册选图
 *
 * camera 使用相机
 */
type _UniFilePickerSourceTypeItem = "album" | "camera";

/**
 * 来源类型
 *
 * album 从相册选图
 *
 * camera 使用相机
 */
type _UniFilePickerSourceType = _UniFilePickerSourceTypeItem[];

/** 手动上传 */
type _UniFilePickerUpload = () => void;

/**
 * 清除选择结果
 *
 * 传入下标则删除指定下标文件
 *
 * 不传入下标则删除所有
 */
type _UniFilePickerClearFiles = (index?: number) => void;

interface _UniFilePickerFileImage {
  width: number;
  height: number;
  location: string;
}

/** 文件状态 */
type _UniFilePickerFileStatus = "ready" | "error" | "success";

interface _UniFilePickerBaseFile {
  cloudPath: string;
  /** 文件后缀名，不含 . */
  extname: string;
  /**
   * 文件类型
   *
   * image 图片
   *
   * video 视频
   */
  fileType: _UniFilePickerFileType;
  /** 图片信息 */
  image?: _UniFilePickerFileImage;
  /** 视频信息，预留但未使用，请从 file 属性中获取视频信息 */
  video?: Record<string, never>;
  /** 临时名称 */
  name: string;
  /** 临时路径 */
  path: string;
  /** 文件大小 */
  size: number;
  /** 文件状态 */
  status: _UniFilePickerFileStatus;
  /** 临时路径，建议使用 path */
  url: string;
  /** 唯一标识 */
  uuid: string;
}

interface _UniFilePickerTempFileFile extends File {
  cloudPath: string;
  /**
   * 文件类型
   *
   * image 图片
   *
   * video 视频
   */
  fileType: _UniFilePickerFileType;
  /** 临时名称 */
  name: string;
  /** 临时路径 */
  path: string;
  /** 文件大小 */
  size: number;
  /** 唯一标识 */
  uuid: string;
  /** 视频宽度 */
  width?: number;
  /** 视频的高度 */
  height?: number;
  /** 视频时长，单位 s */
  duration?: number;
}

interface _UniFilePickerTempFile extends _UniFilePickerBaseFile {
  /** 文件内容 */
  file: _UniFilePickerTempFileFile;
  /** 上传进度 */
  progress: number;
}

interface _UniFilePickerCallbackFile extends _UniFilePickerBaseFile {
  /** 文件云上 ID */
  fileID: string;
}

interface _UniFilePickerOnSelectEvent {
  /** 文件信息 */
  tempFiles: _UniFilePickerTempFile[];
  /** 文件临时路径 */
  tempFilePaths: string[];
}

/** 选择文件后触发 */
type _UniFilePickerOnSelect = (event: _UniFilePickerOnSelectEvent) => void;

interface _UniFilePickerOnProgressEvent {
  /** 上传进度 */
  progress: number;
  /** 上传文件索引 */
  index: number;
  /** 文件信息 */
  tempFile: _UniFilePickerTempFile;
}

/** 文件上传时触发 */
type _UniFilePickerOnProgress = (event: _UniFilePickerOnProgressEvent) => void;

interface _UniFilePickerOnSuccessEvent {
  /** 文件云上路径 */
  tempFilePaths: string[];
  /** 文件云上信息 */
  tempFiles: _UniFilePickerCallbackFile[];
}

/** 上传成功触发 */
type _UniFilePickerOnSuccess = (event: _UniFilePickerOnSuccessEvent) => void;

interface _UniFilePickerOnFailEvent {
  /** 文件临时路径 */
  tempFilePaths: string[];
  /** 文件信息 */
  tempFiles: _UniFilePickerCallbackFile[];
}

/** 上传失败触发 */
type _UniFilePickerOnFail = (event: _UniFilePickerOnFailEvent) => void;

interface _UniFilePickerOnDeleteEvent {
  /** 删除的文件索引 */
  index: number;
  /** 删除的文件信息 */
  tempFile: _UniFilePickerTempFile;
  /** 删除的文件临时路径 */
  tempFilePath: string;
}

/** 文件从列表移除时触发 */
type _UniFilePickerOnDelete = (event: _UniFilePickerOnDeleteEvent) => void;

type _UniFilePickerBaseProps = Partial<{
  /**
   * 组件是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 组件只读，不可选择，不显示进度，不显示删除按钮
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 选择文件后的文件列表样式
   *
   * list 列表
   *
   * grid 网格
   *
   * 默认为 list
   */
  mode: _UniFilePickerMode;
  /**
   * 是否禁用图片预览
   *
   * mode="grid" 时有效
   *
   * 默认为 false
   */
  disablePreview: boolean;
  /**
   * 是否显示删除按钮
   *
   * 默认为 true
   */
  delIcon: boolean;
  /**
   * 是否自动上传
   *
   * false 只触发 select 事件，可自行上传
   *
   * true 自动上传
   *
   * 默认为 true
   */
  autoUpload: boolean;
  /**
   * 最大选择个数
   *
   * 默认为 9
   */
  limit: number | string;
  /** 组件标题，右侧显示上传计数 */
  title: string;
  /**
   * 选择文件类型
   *
   * image 图片
   *
   * video 视频
   *
   * all 全部
   *
   * 默认为 image
   */
  fileMediatype: _UniFilePickerFileMediatype;
  /**
   * 选择文件后缀，字符串的情况下需要用逗号分隔
   *
   * 推荐使用字符串
   *
   * 根据 file-mediatype 属性而不同
   *
   * 默认为 []
   */
  fileExtname: string | string[];
  /**
   * 样式
   *
   * mode="list" 时有效
   */
  listStyles: _UniFilePickerListStyles;
  /**
   * 样式
   *
   * mode="grid" 时有效
   */
  imageStyles: _UniFilePickerImageStyles;
  /**
   * 尺寸类型
   *
   * original 原图
   *
   * compressed 压缩图
   *
   * 默认为 ['original', 'compressed']
   */
  sizeType: _UniFilePickerSizeType;
  /**
   * 来源类型
   *
   * album 从相册选图
   *
   * camera 使用相机
   *
   * 默认为 ['album', 'camera']
   */
  sourceType: _UniFilePickerSourceType;
  /** 手动上传 */
  upload: _UniFilePickerUpload;
  /**
   * 清除选择结果
   *
   * 传入下标则删除指定下标文件
   *
   * 不传入下标则删除所有
   */
  clearFiles: _UniFilePickerClearFiles;
  /** 选择文件后触发 */
  onSelect: _UniFilePickerOnSelect;
  /** 文件上传时触发 */
  onProgress: _UniFilePickerOnProgress;
  /** 上传成功触发 */
  onSuccess: _UniFilePickerOnSuccess;
  /** 上传失败触发 */
  onFail: _UniFilePickerOnFail;
  /** 文件从列表移除时触发 */
  onDelete: _UniFilePickerOnDelete;
}>;

type _UniFilePickerArrayProps = _UniFilePickerBaseProps &
  Partial<{
    /** 组件数据，通常用来回显 */
    value: _UniFilePickerValue[];
    /** 限制 value 类型 */
    returnType?: "array";
  }>;

type _UniFilePickerObjectProps = _UniFilePickerBaseProps &
  Partial<{
    /** 组件数据，通常用来回显 */
    value: _UniFilePickerValue;
    /**
     * 限制 value 类型
     *
     * 只能单选，且会覆盖
     */
    returnType: "object";
  }>;

/** 文件选择上传组件属性 */
type _UniFilePickerProps = _UniFilePickerArrayProps | _UniFilePickerObjectProps;

/** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
type _UniFilePicker = Component<_UniFilePickerProps>;

/** 文件选择上传组件属性 */
type _UniFilePickerInstance = InstanceType<_UniFilePicker>;

export type {
  _UniFilePickerValue as UniFilePickerValue,
  _UniFilePickerMode as UniFilePickerMode,
  _UniFilePickerFileMediatype as UniFilePickerFileMediatype,
  _UniFilePickerFileType as UniFilePickerFileType,
  _UniFilePickerListStyles as UniFilePickerListStyles,
  _UniFilePickerImageStyles as UniFilePickerImageStyles,
  _UniFilePickerSizeTypeItem as UniFilePickerSizeTypeItem,
  _UniFilePickerSizeType as UniFilePickerSizeType,
  _UniFilePickerSourceTypeItem as UniFilePickerSourceTypeItem,
  _UniFilePickerSourceType as UniFilePickerSourceType,
  _UniFilePickerUpload as UniFilePickerUpload,
  _UniFilePickerClearFiles as UniFilePickerClearFiles,
  _UniFilePickerFileImage as UniFilePickerFileImage,
  _UniFilePickerFileStatus as UniFilePickerFileStatus,
  _UniFilePickerBaseFile as UniFilePickerBaseFile,
  _UniFilePickerTempFileFile as UniFilePickerTempFileFile,
  _UniFilePickerTempFile as UniFilePickerTempFile,
  _UniFilePickerCallbackFile as UniFilePickerCallbackFile,
  _UniFilePickerOnSelectEvent as UniFilePickerOnSelectEvent,
  _UniFilePickerOnSelect as UniFilePickerOnSelect,
  _UniFilePickerOnProgressEvent as UniFilePickerOnProgressEvent,
  _UniFilePickerOnProgress as UniFilePickerOnProgress,
  _UniFilePickerOnSuccessEvent as UniFilePickerOnSuccessEvent,
  _UniFilePickerOnSuccess as UniFilePickerOnSuccess,
  _UniFilePickerOnFailEvent as UniFilePickerOnFailEvent,
  _UniFilePickerOnFail as UniFilePickerOnFail,
  _UniFilePickerOnDeleteEvent as UniFilePickerOnDeleteEvent,
  _UniFilePickerOnDelete as UniFilePickerOnDelete,
  _UniFilePickerBaseProps as UniFilePickerBaseProps,
  _UniFilePickerArrayProps as UniFilePickerArrayProps,
  _UniFilePickerObjectProps as UniFilePickerObjectProps,
  _UniFilePickerProps as UniFilePickerProps,
  _UniFilePicker as UniFilePicker,
  _UniFilePickerInstance as UniFilePickerInstance,
};

declare global {
  namespace UniHelper {
    export interface UniFilePickerValue extends _UniFilePickerValue {}
    /**
     * 选择文件后的文件列表样式
     *
     * list 列表
     *
     * grid 网格
     */
    export type UniFilePickerMode = _UniFilePickerMode;
    /**
     * 选择文件类型
     *
     * image 图片
     *
     * video 视频
     *
     * all 全部
     */
    export type UniFilePickerFileMediatype = _UniFilePickerFileMediatype;
    /**
     * 文件类型
     *
     * image 图片
     *
     * video 视频
     */
    export type UniFilePickerFileType = _UniFilePickerFileType;
    /**
     * 样式
     *
     * mode="list" 时有效
     */
    export interface UniFilePickerListStyles extends _UniFilePickerListStyles {}
    /**
     * 样式
     *
     * mode="grid" 时有效
     */
    export interface UniFilePickerImageStyles
      extends _UniFilePickerImageStyles {}
    /**
     * original 原图
     *
     * compressed 压缩图
     */
    export type UniFilePickerSizeTypeItem = _UniFilePickerSizeTypeItem;
    /**
     * 尺寸类型
     *
     * original 原图
     *
     * compressed 压缩图
     */
    export type UniFilePickerSizeType = _UniFilePickerSizeType;
    /**
     * album 从相册选图
     *
     * camera 使用相机
     */
    export type UniFilePickerSourceTypeItem = _UniFilePickerSourceTypeItem;
    /**
     * 来源类型
     *
     * album 从相册选图
     *
     * camera 使用相机
     */
    export type UniFilePickerSourceType = _UniFilePickerSourceType;
    /** 手动上传 */
    export interface UniFilePickerUpload extends _UniFilePickerUpload {}
    /**
     * 清除选择结果
     *
     * 传入下标则删除指定下标文件
     *
     * 不传入下标则删除所有
     */
    export interface UniFilePickerClearFiles extends _UniFilePickerClearFiles {}
    export interface UniFilePickerFileImage extends _UniFilePickerFileImage {}
    /** 文件状态 */
    export type UniFilePickerFileStatus = _UniFilePickerFileStatus;
    export interface UniFilePickerBaseFile extends _UniFilePickerBaseFile {}
    export interface UniFilePickerTempFileFile
      extends _UniFilePickerTempFileFile {}
    export interface UniFilePickerTempFile extends _UniFilePickerTempFile {}
    export interface UniFilePickerCallbackFile
      extends _UniFilePickerCallbackFile {}
    export type UniFilePickerOnSelectEvent = _UniFilePickerOnSelectEvent;
    /** 选择文件后触发 */
    export interface UniFilePickerOnSelect extends _UniFilePickerOnSelect {}
    export type UniFilePickerOnProgressEvent = _UniFilePickerOnProgressEvent;
    /** 文件上传时触发 */
    export interface UniFilePickerOnProgress extends _UniFilePickerOnProgress {}
    export type UniFilePickerOnSuccessEvent = _UniFilePickerOnSuccessEvent;
    /** 上传成功触发 */
    export interface UniFilePickerOnSuccess extends _UniFilePickerOnSuccess {}
    export type UniFilePickerOnFailEvent = _UniFilePickerOnFailEvent;
    /** 上传失败触发 */
    export interface UniFilePickerOnFail extends _UniFilePickerOnFail {}
    export type UniFilePickerOnDeleteEvent = _UniFilePickerOnDeleteEvent;
    /** 文件从列表移除时触发 */
    export interface UniFilePickerOnDelete extends _UniFilePickerOnDelete {}
    export type UniFilePickerBaseProps = _UniFilePickerBaseProps;
    export type UniFilePickerArrayProps = _UniFilePickerArrayProps;
    export type UniFilePickerObjectProps = _UniFilePickerObjectProps;
    /** 文件选择上传组件属性 */
    export type UniFilePickerProps = _UniFilePickerProps;
    /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
    export type UniFilePicker = _UniFilePicker;
    /** 文件选择上传组件实例 */
    export type UniFilePickerInstance = _UniFilePickerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
    UniFilePicker: _UniFilePicker;
  }
}
