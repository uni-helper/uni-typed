import type {
  CoverView,
  CoverViewInstance,
  CoverViewProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("CoverView", () => {
  expectTypeOf<CoverViewProps>().toBeObject();
  expectTypeOf<CoverViewProps>().toEqualTypeOf<UniHelper.CoverViewProps>();

  expectTypeOf<CoverView>().not.toBeAny();
  expectTypeOf<CoverView>().toEqualTypeOf<UniHelper.CoverView>();

  expectTypeOf<CoverViewInstance>().not.toBeAny();
  expectTypeOf<CoverViewInstance>().toEqualTypeOf<UniHelper.CoverViewInstance>();
});
