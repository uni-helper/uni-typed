import type {
  UniListAd,
  UniListAdInstance,
  UniListAdProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniListAd", () => {
  expectTypeOf<UniListAdProps>().toBeObject();
  expectTypeOf<UniListAdProps>().toEqualTypeOf<UniHelper.UniListAdProps>();

  expectTypeOf<UniListAd>().not.toBeAny();
  expectTypeOf<UniListAd>().toEqualTypeOf<UniHelper.UniListAd>();

  expectTypeOf<UniListAdInstance>().not.toBeAny();
  expectTypeOf<UniListAdInstance>().toBeObject();
  expectTypeOf<UniListAdInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniListAdInstance>().toEqualTypeOf<UniHelper.UniListAdInstance>();
});
