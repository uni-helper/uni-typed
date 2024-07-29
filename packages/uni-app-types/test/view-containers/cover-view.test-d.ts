import type {
  CoverView,
  CoverViewInstance,
  CoverViewProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("CoverView", () => {
  expectTypeOf<CoverViewProps>().toBeObject();
  expectTypeOf<CoverViewProps>().toEqualTypeOf<UniHelper.CoverViewProps>();

  expectTypeOf<CoverView>().not.toBeAny();
  expectTypeOf<CoverView>().toEqualTypeOf<UniHelper.CoverView>();

  expectTypeOf<CoverViewInstance>().not.toBeAny();
  expectTypeOf<CoverViewInstance>().toBeObject();
  expectTypeOf<CoverViewInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<CoverViewInstance>().toEqualTypeOf<UniHelper.CoverViewInstance>();
});
