import type {
  UniTr,
  UniTrInstance,
  UniTrProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniTr", () => {
  expectTypeOf<UniTrProps>().toBeObject();
  expectTypeOf<UniTrProps>().toEqualTypeOf<UniHelper.UniTrProps>();

  expectTypeOf<UniTr>().not.toBeAny();
  expectTypeOf<UniTr>().toEqualTypeOf<UniHelper.UniTr>();

  expectTypeOf<UniTrInstance>().not.toBeAny();
  expectTypeOf<UniTrInstance>().toBeObject();
  expectTypeOf<UniTrInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniTrInstance>().toEqualTypeOf<UniHelper.UniTrInstance>();
});
