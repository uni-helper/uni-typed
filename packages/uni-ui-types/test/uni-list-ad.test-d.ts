import type {
  UniListAd,
  UniListAdInstance,
  UniListAdProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniListAd", () => {
  expectTypeOf<UniListAdProps>().toBeObject();
  expectTypeOf<UniListAdProps>().toEqualTypeOf<UniHelper.UniListAdProps>();

  expectTypeOf<UniListAd>().not.toBeAny();
  expectTypeOf<UniListAd>().toEqualTypeOf<UniHelper.UniListAd>();

  expectTypeOf<UniListAdInstance>().not.toBeAny();
  expectTypeOf<UniListAdInstance>().toEqualTypeOf<UniHelper.UniListAdInstance>();
});
