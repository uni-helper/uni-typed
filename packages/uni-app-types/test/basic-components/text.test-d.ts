import type {
  Text,
  TextInstance,
  TextProps,
  TextSpace,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Text", () => {
  expectTypeOf<TextSpace>().toBeString();
  expectTypeOf<TextSpace>().toEqualTypeOf<UniHelper.TextSpace>();

  expectTypeOf<TextProps>().toBeObject();
  expectTypeOf<TextProps>().toEqualTypeOf<UniHelper.TextProps>();

  expectTypeOf<Text>().not.toBeAny();
  expectTypeOf<Text>().toEqualTypeOf<UniHelper.Text>();

  expectTypeOf<TextInstance>().not.toBeAny();
  expectTypeOf<TextInstance>().toBeObject();
  expectTypeOf<TextInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<TextInstance>().toEqualTypeOf<UniHelper.TextInstance>();
});
