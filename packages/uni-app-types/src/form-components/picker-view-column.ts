import type { Component } from "../component";

type _PickerViewColumnProps = Partial<{}>;

type _PickerViewColumn = Component<_PickerViewColumnProps>;

interface _PickerViewColumnInstance extends InstanceType<_PickerViewColumn>{};

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
    PickerViewColumn: _PickerViewColumn;
  }
}
