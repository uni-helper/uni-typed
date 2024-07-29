import type {
  UniIcons,
  UniIconsInstance,
  UniIconsProps,
  UniIconsType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniIcons", () => {
  expectTypeOf<UniIconsType>().toBeString();
  expectTypeOf<UniIconsType>().toEqualTypeOf<UniHelper.UniIconsType>();

  expectTypeOf<UniIconsProps>().toBeObject();
  expectTypeOf<UniIconsProps>().toEqualTypeOf<UniHelper.UniIconsProps>();

  expectTypeOf<UniIcons>().not.toBeAny();
  expectTypeOf<UniIcons>().toEqualTypeOf<UniHelper.UniIcons>();

  expectTypeOf<UniIconsInstance>().not.toBeAny();
  expectTypeOf<UniIconsInstance>().toBeObject();
  expectTypeOf<UniIconsInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniIconsInstance>().toEqualTypeOf<UniHelper.UniIconsInstance>();
});
