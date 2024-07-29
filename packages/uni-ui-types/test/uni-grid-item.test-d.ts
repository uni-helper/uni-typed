import type {
  UniGridItem,
  UniGridItemInstance,
  UniGridItemProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniGridItem", () => {
  expectTypeOf<UniGridItemProps>().toBeObject();
  expectTypeOf<UniGridItemProps>().toEqualTypeOf<UniHelper.UniGridItemProps>();

  expectTypeOf<UniGridItem>().not.toBeAny();
  expectTypeOf<UniGridItem>().toEqualTypeOf<UniHelper.UniGridItem>();

  expectTypeOf<UniGridItemInstance>().not.toBeAny();
  expectTypeOf<UniGridItemInstance>().toBeObject();
  expectTypeOf<UniGridItemInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniGridItemInstance>().toEqualTypeOf<UniHelper.UniGridItemInstance>();
});
