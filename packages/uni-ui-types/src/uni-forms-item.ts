import type { DefineComponent } from "vue";
import type { UniFormsRulesRule } from "./uni-forms";

/** 校验规则 */
interface _UniFormsItemRulesRule extends UniFormsRulesRule {}

/** 校验规则 */
type _UniFormsItemRules = Array<_UniFormsItemRulesRule>;

/** label 对齐方式 */
type _UniFormsItemLabelAlign = "left" | "center" | "right";

/** 动态设置表单规则 */
type _UniFormsItemSetRules = (rules: _UniFormsItemRules) => void;

/** 校验子表单 */
type _UniFormsItemOnFieldChange = (value: any) => void;

type _UniFormsItemProps = Partial<{
  /** 表单域的属性名，在使用校验规则时必填 */
  name: string | string[];
  /** 表单校验规则 */
  rules: _UniFormsItemRules;
  /**
   * label 右边显示红色 * 号，样式显示不会对校验规则产生效果
   *
   * 默认为 false
   */
  required: boolean;
  /** 输入框左边的文字提示 */
  label: string;
  /**
   * label 的宽度
   *
   * 单位为 px
   *
   * 默认为 65
   */
  labelWidth: number;
  /**
   * 显示的错误提示内容
   *
   * 如果为空字符串或 false，则不显示错误信息
   */
  errorMessage: false | string;
  /**
   * label 对齐方式
   *
   * 默认为 left
   */
  labelAlign: _UniFormsItemLabelAlign;
  /** 动态设置表单规则 */
  setRules: _UniFormsItemSetRules;
  /** 校验子表单 */
  onFieldChange: _UniFormsItemOnFieldChange;
}>;

type _UniFormsItem = DefineComponent<_UniFormsItemProps>;

type _UniFormsItemInstance = InstanceType<_UniFormsItem>;

export type {
  _UniFormsItemRulesRule as UniFormsItemRulesRule,
  _UniFormsItemRules as UniFormsItemRules,
  _UniFormsItemLabelAlign as UniFormsItemLabelAlign,
  _UniFormsItemSetRules as UniFormsItemSetRules,
  _UniFormsItemOnFieldChange as UniFormsItemOnFieldChange,
  _UniFormsItemProps as UniFormsItemProps,
  _UniFormsItem as UniFormsItem,
  _UniFormsItemInstance as UniFormsItemInstance,
};

declare global {
  namespace UniHelper {
    /** 校验规则 */
    export interface UniFormsItemRulesRule extends _UniFormsItemRulesRule {}
    /** 校验规则 */
    export type UniFormsItemRules = _UniFormsItemRules;
    /** label 对齐方式 */
    export type UniFormsItemLabelAlign = _UniFormsItemLabelAlign;
    /** 动态设置表单规则 */
    export interface UniFormsItemSetRules extends _UniFormsItemSetRules {}
    /** 校验子表单 */
    export interface UniFormsItemOnFieldChange
      extends _UniFormsItemOnFieldChange {}
    export type UniFormsItemProps = _UniFormsItemProps;
    export type UniFormsItem = _UniFormsItem;
    export type UniFormsItemInstance = _UniFormsItemInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 每个要校验的表单项，不管input还是checkbox，都必须放在`<uni-forms-item>`组件中，且一个`<uni-forms-item>`组件只能放置一个表单项。
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniFormsItem: _UniFormsItem;
  }
}
