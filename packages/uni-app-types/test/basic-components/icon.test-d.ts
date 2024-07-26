import type { Icon, IconInstance, IconProps } from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Icon", () => {
  expectTypeOf<IconProps>().toBeObject();
  expectTypeOf<IconProps>().toEqualTypeOf<UniHelper.IconProps>();

  expectTypeOf<Icon>().not.toBeAny();
  expectTypeOf<Icon>().toEqualTypeOf<UniHelper.Icon>();

  expectTypeOf<IconInstance>().not.toBeAny();
  expectTypeOf<IconInstance>().toEqualTypeOf<UniHelper.IconInstance>();
});
