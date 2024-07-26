import type {
  UniNavBar,
  UniNavBarInstance,
  UniNavBarProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniNavBar", () => {
  expectTypeOf<UniNavBarProps>().toBeObject();
  expectTypeOf<UniNavBarProps>().toEqualTypeOf<UniHelper.UniNavBarProps>();

  expectTypeOf<UniNavBar>().not.toBeAny();
  expectTypeOf<UniNavBar>().toEqualTypeOf<UniHelper.UniNavBar>();

  expectTypeOf<UniNavBarInstance>().not.toBeAny();
  expectTypeOf<UniNavBarInstance>().toEqualTypeOf<UniHelper.UniNavBarInstance>();
});
