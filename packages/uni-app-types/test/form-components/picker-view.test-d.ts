import type {
  PickerView,
  PickerViewInstance,
  PickerViewOnChange,
  PickerViewOnChangeDetail,
  PickerViewOnChangeEvent,
  PickerViewOnPickend,
  PickerViewOnPickendEvent,
  PickerViewOnPickstart,
  PickerViewOnPickstartEvent,
  PickerViewProps,
  PickerViewValue,
  PickerViewValueElement,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("PickerView", () => {
  expectTypeOf<PickerViewValueElement>().toBeNumber();
  expectTypeOf<PickerViewValueElement>().toEqualTypeOf<UniHelper.PickerViewValueElement>();

  expectTypeOf<PickerViewValue>().toBeArray();
  expectTypeOf<PickerViewValue>().toEqualTypeOf<UniHelper.PickerViewValue>();

  expectTypeOf<PickerViewOnChangeDetail>().toBeObject();
  expectTypeOf<PickerViewOnChangeDetail>().toEqualTypeOf<UniHelper.PickerViewOnChangeDetail>();

  expectTypeOf<PickerViewOnChangeEvent>().toBeObject();
  expectTypeOf<PickerViewOnChangeEvent>().toEqualTypeOf<UniHelper.PickerViewOnChangeEvent>();

  expectTypeOf<PickerViewOnChange>().toBeFunction();
  expectTypeOf<PickerViewOnChange>().toEqualTypeOf<UniHelper.PickerViewOnChange>();

  expectTypeOf<PickerViewOnPickstartEvent>().toBeObject();
  expectTypeOf<PickerViewOnPickstartEvent>().toEqualTypeOf<UniHelper.PickerViewOnPickstartEvent>();

  expectTypeOf<PickerViewOnPickstart>().toBeFunction();
  expectTypeOf<PickerViewOnPickstart>().toEqualTypeOf<UniHelper.PickerViewOnPickstart>();

  expectTypeOf<PickerViewOnPickendEvent>().toBeObject();
  expectTypeOf<PickerViewOnPickendEvent>().toEqualTypeOf<UniHelper.PickerViewOnPickendEvent>();

  expectTypeOf<PickerViewOnPickend>().toBeFunction();
  expectTypeOf<PickerViewOnPickend>().toEqualTypeOf<UniHelper.PickerViewOnPickend>();

  expectTypeOf<PickerViewProps>().toBeObject();
  expectTypeOf<PickerViewProps>().toEqualTypeOf<UniHelper.PickerViewProps>();

  expectTypeOf<PickerView>().not.toBeAny();
  expectTypeOf<PickerView>().toEqualTypeOf<UniHelper.PickerView>();

  expectTypeOf<PickerViewInstance>().not.toBeAny();
  expectTypeOf<PickerViewInstance>().toBeObject();
  expectTypeOf<PickerViewInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<PickerViewInstance>().toEqualTypeOf<UniHelper.PickerViewInstance>();
});
