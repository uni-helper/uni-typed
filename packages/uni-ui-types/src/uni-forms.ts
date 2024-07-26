import type { AnyRecord, Component } from "@uni-helper/uni-app-types";

/** 内置校验规则 */
type _UniFormsFormat =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "url"
  | "email";

type _UniFormsCallback = (...args: any) => any;

/**
 * 自定义校验规则方法
 *
 * @param rule 当前校验字段在 rules 中所对应的校验规则
 * @param value 当前校验字段的值
 * @param data 所有校验字段的字段和值的对象
 * @param callback 校验完成时的回调
 */
type _UniFormsValidateFunction = (
  rule: any,
  value: any,
  data: any,
  callback: _UniFormsCallback,
) => boolean | void | Promise<boolean> | Promise<void>;

/** 校验规则 */
interface _UniFormsRulesRule {
  /**
   * 是否必填
   *
   * 配置此参数不会显示输入框左边的必填星号
   */
  required?: boolean;
  /** 数组至少要有一个元素，且数组内每个元素都唯一 */
  range?: any[];
  /**
   * 内置校验规则
   *
   * 默认为 string
   */
  format?: _UniFormsFormat;
  /** 校验用的正则表达式，建议使用字符串表示 */
  pattern?: string | RegExp;
  /** 校验最大值 */
  maximum?: number;
  /** 校验最小值 */
  minimum?: number;
  /** 校验数据最大长度 */
  maxLength?: number;
  /** 校验失败提示信息语 */
  errorMessage?: string;
  /** 自定义校验规则 */
  validateFunction?: _UniFormsValidateFunction;
}

/** 校验规则 */
type _UniFormsRules = Record<
  string,
  {
    /** 校验规则 */
    rules?: _UniFormsRulesRule | Array<_UniFormsRulesRule>;
    /** 当前表单域的字段中文名，多用于 errorMessage 的显示，可不填 */
    label?: string;
  }
>;

/** 表单校验时机 */
type _UniFormsValidateTrigger = "bind" | "submit" | "blur";

/** label 位置 */
type _UniFormsLabelPosition = "top" | "left";

/** label 对齐方式 */
type _UniFormsLabelAlign = "left" | "center" | "right";

/**
 * 错误信息提示方式
 *
 * 默认为 undertext
 */
type _UniFormsErrShowType = "undertext" | "toast" | "modal";

/** 动态设置表单规则 */
type _UniFormsSetRules = (rules: _UniFormsRules) => void;

/**
 * 校验整个表单
 *
 * @param keepItem 不参与校验的字段
 * @param callback 回调函数
 */
interface _UniFormsValidate {
  (keepItem?: string[], callback?: _UniFormsCallback): void | Promise<void>;
  (callback?: _UniFormsCallback): void | Promise<void>;
}

/**
 * 校验部分表单，返回对应表单数据
 *
 * @param items 需要校验的字段
 */
type _UniFormsValidateField = (items?: string | string[]) => Promise<any>;

/**
 * 移除表单的校验结果
 *
 * @param items 需要移除校验的字段
 */
type _UniFormsClearValidate = (items?: string | string[]) => void;

/** 任意表单项被校验后触发，返回表单校验信息 */
type _UniFormsOnValidate = (results: any) => void;

/** 表单属性 */
type _UniFormsProps = Partial<{
  /** 表单数据 */
  model: AnyRecord;
  /** 表单校验规则 */
  rules: _UniFormsRules;
  /**
   * 表单校验时机
   *
   * 默认为 submit
   */
  validateTrigger: _UniFormsValidateTrigger;
  /**
   * label 位置
   *
   * 默认为 left
   */
  labelPosition: _UniFormsLabelPosition;
  /**
   * label 宽度
   *
   * 单位为 px
   *
   * 默认为 65
   */
  labelWidth: string | number;
  /**
   * label 对齐方式
   *
   * 默认为 left
   */
  labelAlign: _UniFormsLabelAlign;
  /**
   * 错误信息提示方式
   *
   * 默认为 undertext
   */
  errShowType: _UniFormsErrShowType;
  /**
   * 是否显示分隔线
   *
   * 默认为 false
   */
  border: boolean;
  /** 动态设置表单规则 */
  setRules: _UniFormsSetRules;
  /**
   * 校验整个表单
   *
   * @param keepItem 不参与校验的字段
   * @param callback 回调函数
   */
  validate: _UniFormsValidate;
  /**
   * 校验部分表单，返回对应表单数据
   *
   * @param items 需要校验的字段
   */
  validateField: _UniFormsValidateField;
  /**
   * 移除表单的校验结果
   *
   * @param items 需要移除校验的字段
   */
  clearValidate: _UniFormsClearValidate;
  /** 任意表单项被校验后触发，返回表单校验信息 */
  onValidate: _UniFormsOnValidate;
}>;

/** 表单，用于提交表单内容，内置了表单验证功能 */
type _UniForms = Component<_UniFormsProps>;

/** 表单实例 */
interface _UniFormsInstance extends InstanceType<_UniForms>{};;

export type {
  _UniFormsFormat as UniFormsFormat,
  _UniFormsCallback as UniFormsCallback,
  _UniFormsValidateFunction as UniFormsValidateFunction,
  _UniFormsRulesRule as UniFormsRulesRule,
  _UniFormsRules as UniFormsRules,
  _UniFormsValidateTrigger as UniFormsValidateTrigger,
  _UniFormsLabelPosition as UniFormsLabelPosition,
  _UniFormsLabelAlign as UniFormsLabelAlign,
  _UniFormsErrShowType as UniFormsErrShowType,
  _UniFormsSetRules as UniFormsSetRules,
  _UniFormsValidate as UniFormsValidate,
  _UniFormsValidateField as UniFormsValidateField,
  _UniFormsClearValidate as UniFormsClearValidate,
  _UniFormsOnValidate as UniFormsOnValidate,
  _UniFormsProps as UniFormsProps,
  _UniForms as UniForms,
  _UniFormsInstance as UniFormsInstance,
};

declare global {
  namespace UniHelper {
    /** 内置校验规则 */
    export type UniFormsFormat = _UniFormsFormat;
    export interface UniFormsCallback extends _UniFormsCallback {}
    export interface UniFormsValidateFunction
      extends _UniFormsValidateFunction {}
    /** 校验规则 */
    export interface UniFormsRulesRule extends _UniFormsRulesRule {}
    /** 校验规则 */
    export type UniFormsRules = _UniFormsRules;
    /** 表单校验时机 */
    export type UniFormsValidateTrigger = _UniFormsValidateTrigger;
    /** label 位置 */
    export type UniFormsLabelPosition = _UniFormsLabelPosition;
    /** label 对齐方式 */
    export type UniFormsLabelAlign = _UniFormsLabelAlign;
    /**
     * 错误信息提示方式
     *
     * 默认为 undertext
     */
    export type UniFormsErrShowType = _UniFormsErrShowType;
    /** 动态设置表单规则 */
    export interface UniFormsSetRules extends _UniFormsSetRules {}
    /**
     * 校验整个表单
     *
     * @param keepItem 不参与校验的字段
     * @param callback 回调函数
     */
    export interface UniFormsValidate extends _UniFormsValidate {}
    /**
     * 校验部分表单，返回对应表单数据
     *
     * @param items 需要校验的字段
     */
    export interface UniFormsValidateField extends _UniFormsValidateField {}
    /**
     * 移除表单的校验结果
     *
     * @param items 需要移除校验的字段
     */
    export interface UniFormsClearValidate extends _UniFormsClearValidate {}
    /** 任意表单项被校验后触发，返回表单校验信息 */
    export interface UniFormsOnValidate extends _UniFormsOnValidate {}
    /** 表单属性 */
    export type UniFormsProps = _UniFormsProps;
    /** 表单，用于提交表单内容，内置了表单验证功能 */
    export type UniForms = _UniForms;
    /** 表单属性 */
    export type UniFormsInstance = _UniFormsInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** 表单，用于提交表单内容，内置了表单验证功能 */
    UniForms: _UniForms;
  }
}
