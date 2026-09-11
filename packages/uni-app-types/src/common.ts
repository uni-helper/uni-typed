import type { StyleValue } from "vue";

/** 所有 uni-app 组件通用的公共属性 */
export type CommonProps = {
  /** 组件的唯一标示 */
  id?: string;
  /** 组件是否隐藏 */
  hidden?: boolean;
  class?: any;
  style?: StyleValue;
} & {
  /** 自定义属性，值可以是任意类型 */
  [key: `data-${string}`]: any;
};
