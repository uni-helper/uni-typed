import type {
  PickerViewColumn,
  PickerViewColumnInstance,
  PickerViewColumnProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("PickerViewColumn", () => {
  expectTypeOf<PickerViewColumnProps>().not.toBeAny();
  expectTypeOf<PickerViewColumnProps>().toEqualTypeOf<UniHelper.PickerViewColumnProps>();

  expectTypeOf<PickerViewColumn>().not.toBeAny();
  expectTypeOf<PickerViewColumn>().toEqualTypeOf<UniHelper.PickerViewColumn>();

  expectTypeOf<PickerViewColumnInstance>().not.toBeAny();
  expectTypeOf<PickerViewColumnInstance>().toEqualTypeOf<UniHelper.PickerViewColumnInstance>();
});
