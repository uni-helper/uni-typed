import type {
  UniDatetimePicker,
  UniDatetimePickerClear,
  UniDatetimePickerClose,
  UniDatetimePickerEnd,
  UniDatetimePickerInstance,
  UniDatetimePickerOnChange,
  UniDatetimePickerOnMaskClick,
  UniDatetimePickerProps,
  UniDatetimePickerReturnType,
  UniDatetimePickerShow,
  UniDatetimePickerStart,
  UniDatetimePickerType,
  UniDatetimePickerValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniDatetimePicker", () => {
  expectTypeOf<UniDatetimePickerType>().toBeString();
  expectTypeOf<UniDatetimePickerType>().toEqualTypeOf<UniHelper.UniDatetimePickerType>();

  expectTypeOf<UniDatetimePickerValue>().toMatchTypeOf<
    string | number | Date | string[] | number[] | Date[]
  >();
  expectTypeOf<UniDatetimePickerValue>().toEqualTypeOf<UniHelper.UniDatetimePickerValue>();

  expectTypeOf<UniDatetimePickerStart>().toMatchTypeOf<string | number>();
  expectTypeOf<UniDatetimePickerStart>().toEqualTypeOf<UniHelper.UniDatetimePickerStart>();

  expectTypeOf<UniDatetimePickerEnd>().toMatchTypeOf<string | number>();
  expectTypeOf<UniDatetimePickerEnd>().toEqualTypeOf<UniHelper.UniDatetimePickerEnd>();

  expectTypeOf<UniDatetimePickerReturnType>().toBeString();
  expectTypeOf<UniDatetimePickerReturnType>().toEqualTypeOf<UniHelper.UniDatetimePickerReturnType>();

  expectTypeOf<UniDatetimePickerShow>().toBeFunction();
  expectTypeOf<UniDatetimePickerShow>().toEqualTypeOf<UniHelper.UniDatetimePickerShow>();

  expectTypeOf<UniDatetimePickerClose>().toBeFunction();
  expectTypeOf<UniDatetimePickerClose>().toEqualTypeOf<UniHelper.UniDatetimePickerClose>();

  expectTypeOf<UniDatetimePickerClear>().toBeFunction();
  expectTypeOf<UniDatetimePickerClear>().toEqualTypeOf<UniHelper.UniDatetimePickerClear>();

  expectTypeOf<UniDatetimePickerOnChange>().toBeFunction();
  expectTypeOf<UniDatetimePickerOnChange>().toEqualTypeOf<UniHelper.UniDatetimePickerOnChange>();

  expectTypeOf<UniDatetimePickerOnMaskClick>().toBeFunction();
  expectTypeOf<UniDatetimePickerOnMaskClick>().toEqualTypeOf<UniHelper.UniDatetimePickerOnMaskClick>();

  expectTypeOf<UniDatetimePickerProps>().toBeObject();
  expectTypeOf<UniDatetimePickerProps>().toEqualTypeOf<UniHelper.UniDatetimePickerProps>();

  expectTypeOf<UniDatetimePicker>().not.toBeAny();
  expectTypeOf<UniDatetimePicker>().toEqualTypeOf<UniHelper.UniDatetimePicker>();

  expectTypeOf<UniDatetimePickerInstance>().not.toBeAny();
  expectTypeOf<UniDatetimePickerInstance>().toBeObject();
  expectTypeOf<UniDatetimePickerInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniDatetimePickerInstance>().toEqualTypeOf<UniHelper.UniDatetimePickerInstance>();
});
