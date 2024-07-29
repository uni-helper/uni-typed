import type {
  UniNumberBox,
  UniNumberBoxInstance,
  UniNumberBoxOnBlur,
  UniNumberBoxOnBlurEvent,
  UniNumberBoxOnChange,
  UniNumberBoxOnFocus,
  UniNumberBoxOnFocusEvent,
  UniNumberBoxOnInput,
  UniNumberBoxProps,
  UniNumberBoxValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniNumberBox", () => {
  expectTypeOf<UniNumberBoxValue>().toBeNumber();
  expectTypeOf<UniNumberBoxValue>().toEqualTypeOf<UniHelper.UniNumberBoxValue>();

  expectTypeOf<UniNumberBoxOnChange>().toBeFunction();
  expectTypeOf<UniNumberBoxOnChange>().toEqualTypeOf<UniHelper.UniNumberBoxOnChange>();

  expectTypeOf<UniNumberBoxOnInput>().toBeFunction();
  expectTypeOf<UniNumberBoxOnInput>().toEqualTypeOf<UniHelper.UniNumberBoxOnInput>();

  expectTypeOf<UniNumberBoxOnFocusEvent>().toBeObject();
  expectTypeOf<UniNumberBoxOnFocusEvent>().toEqualTypeOf<UniHelper.UniNumberBoxOnFocusEvent>();

  expectTypeOf<UniNumberBoxOnFocus>().toBeFunction();
  expectTypeOf<UniNumberBoxOnFocus>().toEqualTypeOf<UniHelper.UniNumberBoxOnFocus>();

  expectTypeOf<UniNumberBoxOnBlurEvent>().toBeObject();
  expectTypeOf<UniNumberBoxOnBlurEvent>().toEqualTypeOf<UniHelper.UniNumberBoxOnBlurEvent>();

  expectTypeOf<UniNumberBoxOnBlur>().toBeFunction();
  expectTypeOf<UniNumberBoxOnBlur>().toEqualTypeOf<UniHelper.UniNumberBoxOnBlur>();

  expectTypeOf<UniNumberBoxProps>().toBeObject();
  expectTypeOf<UniNumberBoxProps>().toEqualTypeOf<UniHelper.UniNumberBoxProps>();

  expectTypeOf<UniNumberBox>().not.toBeAny();
  expectTypeOf<UniNumberBox>().toEqualTypeOf<UniHelper.UniNumberBox>();

  expectTypeOf<UniNumberBoxInstance>().not.toBeAny();
  expectTypeOf<UniNumberBoxInstance>().toBeObject();
  expectTypeOf<UniNumberBoxInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniNumberBoxInstance>().toEqualTypeOf<UniHelper.UniNumberBoxInstance>();
});
