import type {
  Checkbox,
  CheckboxInstance,
  CheckboxProps,
  CheckboxValue,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Checkbox", () => {
  expectTypeOf<CheckboxValue>().toBeString();
  expectTypeOf<CheckboxValue>().toEqualTypeOf<UniHelper.CheckboxValue>();

  expectTypeOf<CheckboxProps>().toBeObject();
  expectTypeOf<CheckboxProps>().toEqualTypeOf<UniHelper.CheckboxProps>();

  expectTypeOf<Checkbox>().not.toBeAny();
  expectTypeOf<Checkbox>().toEqualTypeOf<UniHelper.Checkbox>();

  expectTypeOf<CheckboxInstance>().not.toBeAny();
  expectTypeOf<CheckboxInstance>().toBeObject();
  expectTypeOf<CheckboxInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<CheckboxInstance>().toEqualTypeOf<UniHelper.CheckboxInstance>();
});
