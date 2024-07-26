import type {
  UniGridItem,
  UniGridItemInstance,
  UniGridItemProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniGridItem", () => {
  expectTypeOf<UniGridItemProps>().toBeObject();
  expectTypeOf<UniGridItemProps>().toEqualTypeOf<UniHelper.UniGridItemProps>();

  expectTypeOf<UniGridItem>().not.toBeAny();
  expectTypeOf<UniGridItem>().toEqualTypeOf<UniHelper.UniGridItem>();

  expectTypeOf<UniGridItemInstance>().not.toBeAny();
  expectTypeOf<UniGridItemInstance>().toEqualTypeOf<UniHelper.UniGridItemInstance>();
});
