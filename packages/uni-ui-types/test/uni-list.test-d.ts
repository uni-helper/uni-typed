import type {
  UniList,
  UniListInstance,
  UniListProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniList", () => {
  expectTypeOf<UniListProps>().toBeObject();
  expectTypeOf<UniListProps>().toEqualTypeOf<UniHelper.UniListProps>();

  expectTypeOf<UniList>().not.toBeAny();
  expectTypeOf<UniList>().toEqualTypeOf<UniHelper.UniList>();

  expectTypeOf<UniListInstance>().not.toBeAny();
  expectTypeOf<UniListInstance>().toBeObject();
  expectTypeOf<UniListInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniListInstance>().toEqualTypeOf<UniHelper.UniListInstance>();
});
