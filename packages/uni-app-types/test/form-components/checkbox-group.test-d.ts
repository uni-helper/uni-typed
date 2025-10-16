import type {
  CheckboxGroup,
  CheckboxGroupInstance,
  CheckboxGroupOnChange,
  CheckboxGroupOnChangeDetail,
  CheckboxGroupOnChangeEvent,
  CheckboxGroupProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("CheckboxGroup", () => {
  expectTypeOf<CheckboxGroupOnChangeDetail>().toBeObject();
  expectTypeOf<CheckboxGroupOnChangeDetail>().toEqualTypeOf<UniHelper.CheckboxGroupOnChangeDetail>();

  expectTypeOf<CheckboxGroupOnChangeEvent>().toBeObject();
  expectTypeOf<CheckboxGroupOnChangeEvent>().toEqualTypeOf<UniHelper.CheckboxGroupOnChangeEvent>();

  expectTypeOf<CheckboxGroupOnChange>().toBeFunction();
  expectTypeOf<CheckboxGroupOnChange>().toEqualTypeOf<UniHelper.CheckboxGroupOnChange>();

  expectTypeOf<CheckboxGroupProps>().toBeObject();
  expectTypeOf<CheckboxGroupProps>().toEqualTypeOf<UniHelper.CheckboxGroupProps>();

  expectTypeOf<CheckboxGroup>().not.toBeAny();
  expectTypeOf<CheckboxGroup>().toEqualTypeOf<UniHelper.CheckboxGroup>();

  expectTypeOf<CheckboxGroupInstance>().not.toBeAny();
  expectTypeOf<CheckboxGroupInstance>().toBeObject();
  expectTypeOf<CheckboxGroupInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<CheckboxGroupInstance>().toEqualTypeOf<UniHelper.CheckboxGroupInstance>();
});
