import type {
  UniTitle,
  UniTitleAlign,
  UniTitleInstance,
  UniTitleProps,
  UniTitleType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniTitle", () => {
  expectTypeOf<UniTitleType>().toBeString();
  expectTypeOf<UniTitleType>().toEqualTypeOf<UniHelper.UniTitleType>();

  expectTypeOf<UniTitleAlign>().toBeString();
  expectTypeOf<UniTitleAlign>().toEqualTypeOf<UniHelper.UniTitleAlign>();

  expectTypeOf<UniTitleProps>().toBeObject();
  expectTypeOf<UniTitleProps>().toEqualTypeOf<UniHelper.UniTitleProps>();

  expectTypeOf<UniTitle>().not.toBeAny();
  expectTypeOf<UniTitle>().toEqualTypeOf<UniHelper.UniTitle>();

  expectTypeOf<UniTitleInstance>().not.toBeAny();
  expectTypeOf<UniTitleInstance>().toBeObject();
  expectTypeOf<UniTitleInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniTitleInstance>().toEqualTypeOf<UniHelper.UniTitleInstance>();
});
