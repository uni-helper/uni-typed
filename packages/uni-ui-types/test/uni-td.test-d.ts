import type {
  UniTd,
  UniTdAlign,
  UniTdInstance,
  UniTdProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniTd", () => {
  expectTypeOf<UniTdAlign>().toBeString();
  expectTypeOf<UniTdAlign>().toEqualTypeOf<UniHelper.UniTdAlign>();

  expectTypeOf<UniTdProps>().toBeObject();
  expectTypeOf<UniTdProps>().toEqualTypeOf<UniHelper.UniTdProps>();

  expectTypeOf<UniTd>().not.toBeAny();
  expectTypeOf<UniTd>().toEqualTypeOf<UniHelper.UniTd>();

  expectTypeOf<UniTdInstance>().not.toBeAny();
  expectTypeOf<UniTdInstance>().toEqualTypeOf<UniHelper.UniTdInstance>();
});
