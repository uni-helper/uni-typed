import type {
  UniSwiperDot,
  UniSwiperDotDotsStyles,
  UniSwiperDotInstance,
  UniSwiperDotMode,
  UniSwiperDotOnClickItem,
  UniSwiperDotProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniSwiperDot", () => {
  expectTypeOf<UniSwiperDotMode>().toBeString();
  expectTypeOf<UniSwiperDotMode>().toEqualTypeOf<UniHelper.UniSwiperDotMode>();

  expectTypeOf<UniSwiperDotDotsStyles>().toBeObject();
  expectTypeOf<UniSwiperDotDotsStyles>().toEqualTypeOf<UniHelper.UniSwiperDotDotsStyles>();

  expectTypeOf<UniSwiperDotOnClickItem>().toBeFunction();
  expectTypeOf<UniSwiperDotOnClickItem>().toEqualTypeOf<UniHelper.UniSwiperDotOnClickItem>();

  expectTypeOf<UniSwiperDotProps>().toBeObject();
  expectTypeOf<UniSwiperDotProps>().toEqualTypeOf<UniHelper.UniSwiperDotProps>();

  expectTypeOf<UniSwiperDot>().not.toBeAny();
  expectTypeOf<UniSwiperDot>().toEqualTypeOf<UniHelper.UniSwiperDot>();

  expectTypeOf<UniSwiperDotInstance>().not.toBeAny();
  expectTypeOf<UniSwiperDotInstance>().toBeObject();
  expectTypeOf<UniSwiperDotInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniSwiperDotInstance>().toEqualTypeOf<UniHelper.UniSwiperDotInstance>();
});
