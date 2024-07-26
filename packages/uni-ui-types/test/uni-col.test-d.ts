import type {
  UniCol,
  UniColInstance,
  UniColProps,
  UniColRules,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniCol", () => {
  expectTypeOf<UniColRules>().toBeObject();
  expectTypeOf<UniColRules>().toEqualTypeOf<UniHelper.UniColRules>();

  expectTypeOf<UniColProps>().toBeObject();
  expectTypeOf<UniColProps>().toEqualTypeOf<UniHelper.UniColProps>();

  expectTypeOf<UniCol>().not.toBeAny();
  expectTypeOf<UniCol>().toEqualTypeOf<UniHelper.UniCol>();

  expectTypeOf<UniColInstance>().not.toBeAny();
  expectTypeOf<UniColInstance>().toEqualTypeOf<UniHelper.UniColInstance>();
});
