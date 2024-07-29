import type {
  UniNavBar,
  UniNavBarInstance,
  UniNavBarProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniNavBar", () => {
  expectTypeOf<UniNavBarProps>().toBeObject();
  expectTypeOf<UniNavBarProps>().toEqualTypeOf<UniHelper.UniNavBarProps>();

  expectTypeOf<UniNavBar>().not.toBeAny();
  expectTypeOf<UniNavBar>().toEqualTypeOf<UniHelper.UniNavBar>();

  expectTypeOf<UniNavBarInstance>().not.toBeAny();
  expectTypeOf<UniNavBarInstance>().toBeObject();
  expectTypeOf<UniNavBarInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniNavBarInstance>().toEqualTypeOf<UniHelper.UniNavBarInstance>();
});
