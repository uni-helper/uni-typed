import type {
  MatchMedia,
  MatchMediaInstance,
  MatchMediaOrientation,
  MatchMediaProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("MatchMedia", () => {
  expectTypeOf<MatchMediaOrientation>().toBeString();
  expectTypeOf<MatchMediaOrientation>().toEqualTypeOf<UniHelper.MatchMediaOrientation>();

  expectTypeOf<MatchMediaProps>().toBeObject();
  expectTypeOf<MatchMediaProps>().toEqualTypeOf<UniHelper.MatchMediaProps>();

  expectTypeOf<MatchMedia>().not.toBeAny();
  expectTypeOf<MatchMedia>().toEqualTypeOf<UniHelper.MatchMedia>();

  expectTypeOf<MatchMediaInstance>().not.toBeAny();
  expectTypeOf<MatchMediaInstance>().toBeObject();
  expectTypeOf<MatchMediaInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<MatchMediaInstance>().toEqualTypeOf<UniHelper.MatchMediaInstance>();
});
