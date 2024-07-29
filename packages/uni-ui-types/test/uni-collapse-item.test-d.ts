import type {
  UniCollapseItem,
  UniCollapseItemInstance,
  UniCollapseItemProps,
  UniCollapseItemTitleBorder,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniCollapseItem", () => {
  expectTypeOf<UniCollapseItemTitleBorder>().toBeString();
  expectTypeOf<UniCollapseItemTitleBorder>().toEqualTypeOf<UniHelper.UniCollapseItemTitleBorder>();

  expectTypeOf<UniCollapseItemProps>().toBeObject();
  expectTypeOf<UniCollapseItemProps>().toEqualTypeOf<UniHelper.UniCollapseItemProps>();

  expectTypeOf<UniCollapseItem>().not.toBeAny();
  expectTypeOf<UniCollapseItem>().toEqualTypeOf<UniHelper.UniCollapseItem>();

  expectTypeOf<UniCollapseItemInstance>().not.toBeAny();
  expectTypeOf<UniCollapseItemInstance>().toBeObject();
  expectTypeOf<UniCollapseItemInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniCollapseItemInstance>().toEqualTypeOf<UniHelper.UniCollapseItemInstance>();
});
