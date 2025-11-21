import type { DefineComponent } from "vue";
import type { CommonProps } from "../common";

type _PickerViewColumnProps = CommonProps & Partial<{}>;

type _PickerViewColumn = DefineComponent<_PickerViewColumnProps>;

type _PickerViewColumnInstance = InstanceType<_PickerViewColumn>;

export type {
  _PickerViewColumnProps as PickerViewColumnProps,
  _PickerViewColumn as PickerViewColumn,
  _PickerViewColumnInstance as PickerViewColumnInstance,
};

declare global {
  namespace UniHelper {
    export type PickerViewColumnProps = _PickerViewColumnProps;
    export type PickerViewColumn = _PickerViewColumn;
    export type PickerViewColumnInstance = _PickerViewColumnInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /** `<picker-view />` 的子组件，仅可放置于 `<picker-view />` 中
     *
     * 其子节点的高度会自动设置成与 `<picker-view>` 的选中框的高度一致。
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/picker-view.html#picker-view-column)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    PickerViewColumn: _PickerViewColumn;
  }
}
