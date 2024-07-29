import type { Icon, IconInstance, IconProps } from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Icon", () => {
  expectTypeOf<IconProps>().toBeObject();
  expectTypeOf<IconProps>().toEqualTypeOf<UniHelper.IconProps>();

  expectTypeOf<Icon>().not.toBeAny();
  expectTypeOf<Icon>().toEqualTypeOf<UniHelper.Icon>();

  expectTypeOf<IconInstance>().not.toBeAny();
  expectTypeOf<IconInstance>().toBeObject();
  expectTypeOf<IconInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<IconInstance>().toEqualTypeOf<UniHelper.IconInstance>();
});
